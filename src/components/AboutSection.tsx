'use client';

import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUserAlt } from 'react-icons/fa'; // 👈 Developer-style icon
 import { FaLaptopCode } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section id="about" className="py-5 border-top border-secondary bg-dark text-light">
      <Container>
        <Row className="align-items-center g-4">
          <Col md={5} className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div
                className="d-flex justify-content-center align-items-center mx-auto bg-secondary bg-opacity-25 rounded-circle border border-3 border-light shadow-lg"
                style={{
                  width: 200,
                  height: 200,
                }}
              >
                <FaLaptopCode size={90} className="text-light" />
              </div>
            </motion.div>
          </Col>

          <Col md={7}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-3">About Me</h2>
              <p className="lead">
                I'm <strong>Mohan Kumar Indala</strong>, a passionate Full Stack Developer
                with experience in building dynamic, responsive web applications using
                <strong> React, Next.js, Express, and SQL</strong>.
              </p>
              <p>
                I enjoy solving real-world problems, creating efficient solutions, and
                constantly learning new technologies. Currently, I’m working at Awezens and
                graduating in April 2025.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
