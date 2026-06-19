'use client';

import { motion } from 'framer-motion';
import { featuredProjects } from '@/lib/projects-data';
import ProjectCard from './ProjectCard';

export default function ProjectsSection() {
  return (
    <section id="projects" className="border-t border-border/40 py-20 px-6 bg-card/10">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          className="text-3xl font-bold tracking-tight text-center mb-12 sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        {/* Curated Projects Responsive Grid Layout */}
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
    </section>
  );
}
