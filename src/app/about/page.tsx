import AboutPage from "./about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About | Mohan Kumar Indala — Full Stack Web Developer',
  description: "I'm Mohan Kumar Indala, a passionate Full Stack Web Developer skilled in React, Next.js, Express, and SQL. Learn more about my journey, skills, and projects.",
};
export default function Page() {
  return <AboutPage />;
}
