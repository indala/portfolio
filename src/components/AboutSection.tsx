'use client';

import { motion } from 'framer-motion';
import { Laptop } from 'lucide-react';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section id="about" className="relative border-t border-border/40 py-20 px-6 bg-card/30">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          {/* Left Column - Graphic/Icon */}
          <div className="md:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl" />
              <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-primary/20 bg-background/50 text-primary shadow-2xl backdrop-blur-md transition-all hover:scale-105 hover:border-primary/40">
                <Laptop className="h-20 w-20 stroke-[1.5]" />
              </div>
            </motion.div>
          </div>

          {/* Right Column - Text */}
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 text-left"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m <span className="text-foreground font-semibold">Mohan Kumar Indala</span>, a dedicated Full Stack Developer with experience in building dynamic, responsive web applications using{' '}
                <span className="text-foreground font-semibold">React, Next.js, Express, and SQL</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I enjoy solving real-world problems, creating efficient solutions, and constantly learning new technologies. Currently, I&apos;m working at Awezens and graduating in April 2025.
              </p>
              <div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-accent"
                >
                  Read My Journey
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
