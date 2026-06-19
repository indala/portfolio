'use client';

import Hero from '@/components/HeroSection';
import AboutPage from '@/app/about/about';
import ProjectsPage from '@/app/projects/projects';
import ContactPage from '@/app/contact/contact';

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
