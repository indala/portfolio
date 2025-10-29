import ContactPage from "./contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact | Mohan Kumar Indala — Full Stack Web Developer',
  description: 'Get in touch with Mohan Kumar Indala for projects, freelance opportunities, or collaborations. Reach out via email, phone, or social media.',
};

export default function Page() {
  return <ContactPage />;
}