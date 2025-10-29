'use client';

import { motion } from 'framer-motion';
import { Button, Container } from 'react-bootstrap';
import Image from 'next/image';
import { useGithub } from '@/context/GithubContext';


export default function Hero() {
  const { profile } = useGithub();

  return (
    <section className="bg-dark text-light py-5">
      <Container className="text-center">
        {/* Profile Image Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="d-flex justify-content-center mb-4"
          >
            <div
              className="position-relative"
              style={{ width: 150, height: 150 }}
            >
              <Image
                src={profile?.avatar_url || '/profile.jpg'} 
                alt="Mohan Kumar Indala"
                fill
                sizes="150px"
                priority
                className="rounded-circle border border-3 border-light shadow-lg object-cover"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.h1
            className="fw-bold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            👋 Hi, I&apos;m <span className="text-primary">Mohan Kumar Indala</span>
          </motion.h1>

          <motion.p
            className="lead mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Full Stack Developer | React | Next.js | Express | SQL
          </motion.p>

          {/* Animated Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="primary"
              href="/projects"
              className="px-4 py-2 fs-5"
            >
              View My Projects
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
