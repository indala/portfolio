import { Metadata } from 'next';
import Hero from '@/components/HeroSection';
import AboutPage from '@/app/about/about';
import ProjectsPage from '@/app/projects/projects';
import ContactPage from '@/app/contact/contact';

export const metadata: Metadata = {
  title: 'Mohan Kumar Indala | Full Stack Web Developer Portfolio',
  description: 'Explore the portfolio of Mohan Kumar Indala, a passionate Full Stack Web Developer skilled in React, Next.js, Express, and SQL, building dynamic and high-performance web applications.',
};

export default function HomePage() {
  return (
    <div className="grid-pattern bg-background text-foreground min-h-screen">
      <div id="home">
        <Hero />
      </div>
      
      <div id="about" className="border-t border-border/40 scroll-mt-16">
        <AboutPage />
      </div>

      <div id="projects" className="border-t border-border/40 scroll-mt-16">
        <ProjectsPage />
      </div>

      <div id="contact" className="border-t border-border/40 scroll-mt-16">
        <ContactPage />
      </div>
    </div>
  );
}
