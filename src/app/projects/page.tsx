import ProjectsPage from "./projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Projects | Mohan Kumar Indala — Full Stack Web Developer',
  description: 'Explore the projects of Mohan Kumar Indala, a Full Stack Web Developer. Discover a variety of web applications and tools built using modern technologies like React, Next.js, Express, and SQL.',
};

export default function Page() {
  return <ProjectsPage />;
}