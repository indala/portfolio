'use client';

import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import { useGithub } from '@/context/GithubContext';

export default function AboutPage() {
  const { profile } = useGithub();

  return (
    <section className="bg-dark text-light py-5">
      <Container>
        <Row className="align-items-center g-5">
          <Col md={5} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="position-relative mx-auto" style={{ width: 200, height: 200 }}>
                <Image
                  src={profile?.avatar_url || '/profile.jpg'}
                  alt={profile?.name || 'Mohan Kumar Indala'}
                  fill
                  sizes="200px"
                  priority
                  className="rounded-circle border border-3 border-light shadow-lg object-cover"
                />
              </div>
            </motion.div>
          </Col>

          <Col md={7}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="fw-bold mb-3 text-primary">About Me</h2>
              <p className="lead mb-4">
                Hi, I&apos;m <strong>Mohan Kumar Indala</strong>, a passionate Full Stack Developer
                skilled in <strong>React, Next.js, Express, and SQL</strong>.
                I enjoy building sleek web apps that blend great UI with solid backend logic.
              </p>
              <p>
                I&apos;m currently working at <strong>Awezens</strong> and have built projects like
                <a href="https://awezens.ct.ws" target="_blank" rel="noopener noreferrer"> Awezens Website</a>,
                <a href="https://sainivas.co.in/" target="_blank" rel="noopener noreferrer"> Sainivas Beach View</a>,
                and <a href="https://trbikes.sainivasbeachviewresthouse.workers.dev/" target="_blank" rel="noopener noreferrer"> TRBike Rentals</a>.
              </p>
              <p>
                I love solving real-world problems and aim to work on products that create impact.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
