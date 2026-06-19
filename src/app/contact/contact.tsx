'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';

export default function ContactPage() {
  return (
    <main className="min-h-screen py-16 px-6 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute bottom-10 left-10 -z-10 h-72 w-72 rounded-full bg-primary/5 blur-[120px]" />

      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-extrabold text-foreground mb-4 sm:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
          </motion.h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Have a project, freelance opportunity, or collaboration idea?  
            I’d love to hear from you!
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-12 md:items-start max-w-3xl mx-auto">
          {/* Left Column: Direct Contact Info */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-foreground">Contact Details</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <FaEnvelope className="h-5 w-5 text-primary shrink-0" /> 
                <a href="mailto:indalamohankumar@gmail.com" className="hover:text-primary transition-colors">
                  indalamohankumar@gmail.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="h-5 w-5 text-primary shrink-0" /> 
                <a href="tel:+917780123277" className="hover:text-primary transition-colors">
                  +91 7780123277
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaGithub className="h-5 w-5 text-primary shrink-0" /> 
                <Link href="https://github.com/indala" target="_blank" className="hover:text-primary transition-colors">
                  github.com/indala
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <FaLinkedin className="h-5 w-5 text-primary shrink-0" /> 
                <Link href="https://www.linkedin.com/in/indalamohankumar/" target="_blank" className="hover:text-primary transition-colors">
                  LinkedIn Profile
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="md:col-span-7 rounded-xl border border-border bg-card/40 p-6 shadow-md backdrop-blur-xs">
            <ContactSection />
          </div>
        </div>
      </div>
    </main>
  );
}
