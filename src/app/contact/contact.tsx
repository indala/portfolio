'use client';

import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import Link from 'next/link';
import ContactSection from '@/components/ContactSection';




export default function ContactPage() {
  return (
    <section className="bg-dark text-light py-5">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col md={8}>
            <motion.h2
              className="fw-bold text-primary mb-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Get In Touch
            </motion.h2>
            <p className="lead">
              Have a project, freelance opportunity, or collaboration idea?  
              I’d love to hear from you!
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={6}>
            <div className="d-flex flex-column gap-3 mb-4 text-start">
              <p>
                <FaEnvelope className="me-2 text-primary" /> 
                <a href="mailto:indalamohankumar@gmail.com" className="text-light text-decoration-none">
                  indalamohankumar@gmail.com
                </a>
              </p>
              <p>
                <FaPhoneAlt className="me-2 text-primary" /> 
                <a href="tel:+917780123277" className="text-light text-decoration-none">
                  +91 7780123277
                </a>
              </p>
              <p>
                <FaGithub className="me-2 text-primary" /> 
                <Link href="https://github.com/indala" target="_blank" className="text-light text-decoration-none">
                  github.com/indala
                </Link>
              </p>
              <p>
                <FaLinkedin className="me-2 text-primary" /> 
                <Link href="https://www.linkedin.com/in/indalamohankumar/" target="_blank" className="text-light text-decoration-none">
                  LinkedIn Profile
                </Link>
              </p>
            </div>

            {/* ✅ Reusable Form Component */}
            <ContactSection />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
