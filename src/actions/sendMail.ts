"use server";

import { Resend } from "resend";
import { cookies } from "next/headers";

const resend = new Resend(process.env.RESEND_API_KEY);

const DAILY_LIMIT = 3;
const COOKIE_NAME = "contact_limit";

type LimitData = {
  count: number;
  date: string; // YYYY-MM-DD
};

function getToday(): string {
  return new Date().toISOString().split("T")[0];
}

export type FormState = {
  success: boolean;
  message: string;
};

export async function sendMail(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, message: "All fields are required." };
  }

  // --- Rate limit check ---
  const cookieStore = await cookies();
  const today = getToday();
  let limitData: LimitData = { count: 0, date: today };

  const existing = cookieStore.get(COOKIE_NAME);
  if (existing) {
    try {
      const parsed: LimitData = JSON.parse(existing.value);
      limitData = parsed.date === today ? parsed : { count: 0, date: today };
    } catch {
      limitData = { count: 0, date: today };
    }
  }

  if (limitData.count >= DAILY_LIMIT) {
    return {
      success: false,
      message: `Daily limit reached (${DAILY_LIMIT}/3). Try again tomorrow.`,
    };
  }
  // ---

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "indalamohankumar@gmail.com",
      subject: `Portfolio Contact from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, message: "Failed to send email. Please try again." };
    }

    // --- Increment count on success ---
    cookieStore.set(
      COOKIE_NAME,
      JSON.stringify({ count: limitData.count + 1, date: today }),
      {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 24, // 24 hours
        path: "/",
      }
    );

    return { success: true, message: "Message sent successfully!" };
  } catch (err) {
    console.error("Send mail error:", err);
    return { success: false, message: "Something went wrong. Please try again." };
  }
}
