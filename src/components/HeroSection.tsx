'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden py-20 px-6">
      {/* Background Drifting Ambient Light Blobs */}
      <motion.div 
        animate={{ 
          x: [0, 40, -20, 0], 
          y: [0, -50, 30, 0],
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-violet-600/10 blur-[100px]" 
      />
      <motion.div 
        animate={{ 
          x: [0, -35, 45, 0], 
          y: [0, 35, -45, 0],
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-1/4 right-1/4 -z-10 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-[120px]" 
      />

      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Animated Avatar Frame */}
          <motion.div
            variants={itemVariants}
            className="group relative mb-8 flex items-center justify-center"
          >
            <div className="absolute inset-0 animate-pulse rounded-full bg-linear-to-r from-violet-500 to-fuchsia-500 opacity-20 blur-xl transition-all duration-300 group-hover:scale-110 group-hover:opacity-30" />
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-2 border-primary/20 bg-card p-1 shadow-2xl transition-all duration-300 group-hover:border-primary/50">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/profile.png"
                  alt="Mohan Kumar Indala"
                  fill
                  sizes="160px"
                  priority
                  loading="eager"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Heading with Shimmer Animation */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
          >
            👋 Hi, I&apos;m{' '}
            <span className="text-shimmer">
              Mohan Kumar Indala
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            Full Stack Developer specializing in crafting elegant, responsive, and
            highly-performant web applications using{' '}
            <span className="text-foreground font-medium">React, Next.js, Express,</span> and{' '}
            <span className="text-foreground font-medium">SQL</span>.
          </motion.p>

          {/* Buttons and Social Links */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow transition-transform hover:translate-y-[-2px] active:scale-95 cursor-pointer"
            >
              View My Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-accent hover:translate-y-[-2px] active:scale-95 cursor-pointer"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Quick social connect */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex gap-6 text-muted-foreground"
          >
            <a
              href="https://github.com/indala"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/indalamohankumar/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:indalamohankumar@gmail.com"
              className="transition-colors hover:text-foreground"
              aria-label="Email"
            >
              <FaEnvelope className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
