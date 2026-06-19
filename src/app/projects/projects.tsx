'use client';

import { featuredProjects } from '@/lib/projects-data';
import ProjectCard from '@/components/ProjectCard';
import Image from 'next/image';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-16 px-6 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 right-0 -z-10 h-80 w-80 rounded-full bg-primary/5 blur-[120px]" />

      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-extrabold text-center tracking-tight sm:text-4xl mb-12">
          Curated Projects
        </h2>

        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="relative h-24 w-24 overflow-hidden rounded-full border border-primary/20 bg-card p-1 shadow-lg">
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src="/profile.png"
                alt="Mohan Kumar Indala"
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">Mohan Kumar Indala</h3>
            <p className="text-sm text-muted-foreground mt-1 max-w-md mx-auto">
              Passionate Full Stack Developer specializing in React, Next.js, and SQL, based in Visakhapatnam.
            </p>
          </div>
          <a
            href="https://github.com/indala"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-foreground hover:bg-accent transition-colors"
          >
            View GitHub Profile
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <div key={project.id}>
              <ProjectCard
                title={project.title}
                desc={project.description}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                techStack={project.techStack}
                imageUrl={project.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
