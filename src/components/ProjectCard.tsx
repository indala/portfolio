'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaEye } from 'react-icons/fa';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  desc: string;
  liveUrl: string;
  githubUrl?: string;
  techStack: string[];
  imageUrl?: string;
}

export default function ProjectCard({
  title,
  desc,
  liveUrl,
  githubUrl,
  techStack,
  imageUrl,
}: ProjectCardProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-border bg-card/60 p-6 shadow-md backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
    >
      {/* Spotlight highlight overlay */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(200px circle at ${coords.x}px ${coords.y}px, oklch(0.65 0.25 280 / 12%), transparent 85%)`,
          }}
        />
      )}

      <div className="space-y-4 relative z-10">
        {/* Live Site Preview Thumbnail (Scaled Iframe or Screenshot Image) */}
        <div className="relative w-full h-40 rounded-lg overflow-hidden border border-border bg-zinc-900 shadow-inner">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="380px"
              className="object-fit"
            />
          ) : (
            <>
              <iframe
                src={liveUrl}
                title={title}
                scrolling="no"
                className="absolute top-0 left-0 w-[400%] h-[400%] border-none pointer-events-none select-none scale-[0.25] origin-top-left"
                loading="lazy"
                sandbox="allow-same-origin allow-scripts"
              />
              {/* Overlay to catch hover clicks and keep viewport scrolling fluid */}
              <div className="absolute inset-0 bg-zinc-950/10 group-hover:bg-zinc-950/0 transition-colors duration-300" />
            </>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            {desc}
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons Panel */}
      <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between gap-3 relative z-10">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center gap-2 rounded-lg bg-primary px-4 text-xs font-semibold text-primary-foreground shadow transition-transform hover:-translate-y-px active:scale-95 cursor-pointer"
        >
          <FaEye className="h-3.5 w-3.5" />
          Live Website
        </a>

        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-lg border border-border bg-card px-4 text-xs font-semibold text-foreground hover:bg-accent transition-transform hover:-translate-y-px"
          >
            <FaGithub className="h-3.5 w-3.5" />
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
}
