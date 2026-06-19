'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function CustomNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { target: 'home', label: 'Home' },
    { target: 'about', label: 'About' },
    { target: 'projects', label: 'Projects' },
    { target: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    if (pathname !== '/') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250; // offset for nav bar height
      const sections = ['home', 'about', 'projects', 'contact'];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const getHref = (target: string) => {
    return pathname === '/' ? `#${target}` : `/#${target}`;
  };

  const handleLinkClick = (target: string) => {
    setIsOpen(false);
    if (pathname === '/') {
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand/Logo */}
        <Link 
          href="/" 
          onClick={() => handleLinkClick('home')}
          className="group flex items-center space-x-2"
        >
          <span className="bg-linear-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent transition-all group-hover:opacity-85">
            Mohan.dev
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === '/' ? activeSection === link.target : false;
            return (
              <Link
                key={link.target}
                href={getHref(link.target)}
                onClick={() => handleLinkClick(link.target)}
                className="relative text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
              >
                <span className={isActive ? "text-foreground font-semibold" : ""}>
                  {link.label}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavTab"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Navigation Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-foreground md:hidden"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="border-b border-border/40 bg-background md:hidden"
          >
            <div className="flex flex-col space-y-4 px-6 py-4">
              {navLinks.map((link) => {
                const isActive = pathname === '/' ? activeSection === link.target : false;
                return (
                  <Link
                    key={link.target}
                    href={getHref(link.target)}
                    onClick={() => handleLinkClick(link.target)}
                    className={`text-sm font-medium transition-colors ${
                      isActive ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
