'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
} from 'react-icons/fa';
import { SiNextdotjs, SiSupabase, SiPostgresql, SiTailwindcss } from 'react-icons/si';

interface TimelineItemProps {
  year: string;
  title: string;
  desc: string;
  side: 'left' | 'right';
}

function TimelineItem({ year, title, desc, side }: TimelineItemProps) {
  return (
    <div className={`relative flex w-full my-6 flex-col md:flex-row md:items-center ${
      side === 'left' ? 'md:justify-start' : 'md:justify-end'
    }`}>
      {/* Node Dot on central line */}
      <div className="absolute left-4 md:left-1/2 top-4 md:-translate-x-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-primary border-4 border-background shadow-lg" />

      {/* Card Content */}
      <motion.div
        initial={{ opacity: 0, x: side === 'left' ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`ml-12 md:ml-0 w-[calc(100%-3rem)] md:w-[42%] rounded-xl border border-border bg-card p-6 shadow-md transition-all duration-300 hover:translate-y-[-4px] hover:border-primary/30 hover:shadow-primary/5`}
      >
        <span className="text-sm font-semibold text-primary">{year}</span>
        <h4 className="text-lg font-bold mt-1 text-foreground">{title}</h4>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </motion.div>
    </div>
  );
}

export default function AboutPage() {

  const techStack = [
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-sky-500' },
    { name: 'JavaScript', icon: FaJs, color: 'text-amber-400' },
    { name: 'React.js', icon: FaReact, color: 'text-cyan-400' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-foreground' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-sky-400' },
    { name: 'Python', icon: FaPython, color: 'text-blue-500' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-sky-600' },
    { name: 'Supabase', icon: SiSupabase, color: 'text-emerald-400' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'SQL Databases', icon: FaDatabase, color: 'text-slate-400' },
  ];

  const timelineItems: TimelineItemProps[] = [
    {
      year: '🎓 1st Year',
      title: 'Web Fundamentals',
      desc: 'Started learning HTML & CSS, building basic static web pages.',
      side: 'left',
    },
    {
      year: '🎓 3rd Year',
      title: 'Programming & Databases',
      desc: 'Learned JavaScript, SQL, and PostgreSQL for robust databases.',
      side: 'right',
    },
    {
      year: '🎓 4th Year',
      title: 'First Full Stack Work',
      desc: 'Built first full stack project using HTML, CSS, JS, and backend APIs.',
      side: 'left',
    },
    {
      year: '💼 Internship',
      title: 'Mehaboob Software Solutions',
      desc: 'Joined as an intern and mastered production-level web development.',
      side: 'right',
    },
    {
      year: '🌳 React Era',
      title: 'Vignan Trees',
      desc: 'Learned React & built Vignan Trees project with dynamic state management.',
      side: 'left',
    },
    {
      year: '🌐 Next.js & SSR',
      title: 'Sainivas Beach View',
      desc: 'Developed Sainivas Beach View website with modern SSR/ISR.',
      side: 'right',
    },
    {
      year: '🪣 Supabase & Live Apps',
      title: 'TR Bike Rentals',
      desc: 'Used Supabase DB + Storage for building full-scale client products.',
      side: 'left',
    },
    {
      year: '💼 Chipthem',
      title: 'Web Developer at Chipthem',
      desc: 'Mastered Next.js core architecture and deployed products on cPanel hosting services, configuring nameservers, databases, and subdomains.',
      side: 'right',
    },
    {
      year: '🛍️ Shopify',
      title: 'Shopify Store Design & Product Curation',
      desc: 'Designed highly-converting Shopify store frontends, configuring product catalogs, tag mappings, custom collections, and category routing hierarchies.',
      side: 'left',
    },
    {
      year: '🔬 Sreshta Semicon',
      title: 'Sreshta Semicon Technologies',
      desc: 'Developed the official landing page and educational portal for Sreshta Semicon Technologies teaching organization.',
      side: 'right',
    },
    {
      year: '📄 IJITEST',
      title: 'IJITEST Academic Journal Platform',
      desc: 'Built a full-featured publication site with Next.js 16/React 19, integrating ILovePDF API branding, real-time live chat support, peer review dashboards, role-based security, MySQL with Drizzle ORM, NestJS + Fastify for fast file handling, and Hostinger cPanel configuration (crons, CDN, databases).',
      side: 'left',
    },
    {
      year: '🚀 Colourmoon (Current)',
      title: 'Full Stack Engineer at Colourmoon Technologies',
      desc: 'Currently working on a client-side enterprise Property Management & Inventory Management Module for Ramoji Film City.',
      side: 'right',
    },
  ];

  return (
    <main className="min-h-screen py-16 px-6 relative overflow-hidden">
      {/* Background gradient decorative glow */}
      <div className="absolute top-1/3 left-10 -z-10 h-72 w-72 rounded-full bg-primary/5 blur-[120px]" />
      
      <div className="mx-auto max-w-4xl">
        {/* Intro Section */}
        <div className="grid gap-8 md:grid-cols-12 md:items-center">
          {/* Left: Avatar */}
          <div className="md:col-span-4 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative group h-48 w-48 overflow-hidden rounded-full border border-primary/20 bg-card p-1 shadow-xl"
            >
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/profile.png"
                  alt="Mohan Kumar Indala"
                  fill
                  sizes="192px"
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>

          {/* Right: Text */}
          <div className="md:col-span-8 space-y-4 text-left">
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-extrabold text-foreground"
            >
              About Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Hi, I&apos;m <span className="text-foreground font-semibold">Mohan Kumar Indala</span>, a passionate{' '}
              <span className="text-foreground font-semibold">Full Stack Web Developer</span>. I love crafting modern web experiences that blend elegant design with solid logic and performance.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-muted-foreground leading-relaxed"
            >
              Currently, I’m working at <span className="text-foreground font-semibold">Awezens</span> and have built real-world projects such as{' '}
              <a href="https://awezens.ct.ws" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-colors font-medium">
                Awezens Website
              </a>,{' '}
              <a href="https://sainivas.co.in/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-colors font-medium">
                Sainivas Beach View
              </a>, and{' '}
              <a href="https://trbikes.sainivasbeachviewresthouse.workers.dev/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-colors font-medium">
                TRBike Rentals
              </a>.
            </motion.p>
          </div>
        </div>

        {/* 🌿 Journey Timeline */}
        <div className="mt-24">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl font-bold text-center tracking-tight text-foreground mb-12"
          >
            My Web Development Journey 🌱
          </motion.h3>

          {/* Timeline Wrapper */}
          <div className="relative mx-auto max-w-3xl">
            {/* Central Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-linear-to-b from-primary via-primary/50 to-transparent" />

            {/* Alternating items */}
            {timelineItems.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>

        {/* ⚙️ Tech Stack */}
        <div className="mt-24 border-t border-border/40 pt-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl font-bold text-center tracking-tight text-foreground mb-10"
          >
            My Tech Stack ⚙️
          </motion.h3>

          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3 shadow-sm hover:border-primary/20 hover:bg-primary/5 transition-all duration-300"
              >
                <tech.icon className={`h-6 w-6 ${tech.color}`} />
                <span className="text-sm font-semibold text-foreground">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
