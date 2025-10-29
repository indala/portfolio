'use client';

import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import { useGithub } from '@/context/GithubContext';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaPython,
} from 'react-icons/fa';
import { SiNextdotjs, SiSupabase, SiPostgresql, SiFastapi } from 'react-icons/si';



export default function AboutPage() {
  const { profile } = useGithub();

  return (
    <section className="bg-dark text-light py-5">
      <Container>
        <Row className="align-items-center g-5">
          {/* Profile Image */}
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

          {/* About Text */}
          <Col md={7}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="fw-bold mb-3 text-primary">About Me</h2>
              <p className="lead mb-4">
                Hi, I&apos;m <strong>Mohan Kumar Indala</strong>, a passionate
                <strong> Full Stack Web Developer</strong> skilled in
                <strong> React, Next.js, FastAPI,</strong> and <strong>SQL</strong>.
                I love crafting modern web experiences that blend elegant design
                with solid logic and performance.
              </p>
              <p>
                Currently, I’m working at <strong>Awezens</strong> and have built real-world projects such as{' '}
                <a href="https://awezens.ct.ws" target="_blank" rel="noopener noreferrer" className="text-info text-decoration-none">
                  Awezens Website
                </a>,{' '}
                <a href="https://sainivas.co.in/" target="_blank" rel="noopener noreferrer" className="text-info text-decoration-none">
                  Sainivas Beach View
                </a>, and{' '}
                <a href="https://trbikes.sainivasbeachviewresthouse.workers.dev/" target="_blank" rel="noopener noreferrer" className="text-info text-decoration-none">
                  TRBike Rentals
                </a>.
              </p>
            </motion.div>
          </Col>
        </Row>

        {/* 🌿 Journey Tree Path */}
        <Row className="mt-5">
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-center text-primary mb-4 fw-bold">
                My Web Development Journey 🌱
              </h3>

              <div className="tree">
                <div className="branch left">
                  <div className="leaf">
                    <h5>🎓 1st Year</h5>
                    <p>Started learning <strong>HTML</strong> & <strong>CSS</strong>.</p>
                  </div>
                </div>

                <div className="stem"></div>

                <div className="branch right">
                  <div className="leaf">
                    <h5>🎓 3rd Year</h5>
                    <p>Learned <strong>JavaScript</strong>, <strong>SQL</strong>, and <strong>PostgreSQL</strong>.</p>
                  </div>
                </div>

                <div className="stem"></div>

                <div className="branch left">
                  <div className="leaf">
                    <h5>🎓 4th Year</h5>
                    <p>Built my first project using <strong>HTML, CSS, JS, and FastAPI</strong>.</p>
                  </div>
                </div>

                <div className="stem"></div>

                <div className="branch right">
                  <div className="leaf">
                    <h5>💼 Internship</h5>
                    <p>Joined <strong>Mehaboob Software Solutions</strong> and mastered web fundamentals.</p>
                  </div>
                </div>

                <div className="stem"></div>

                <div className="branch left">
                  <div className="leaf">
                    <h5>🌳 React</h5>
                    <p>Learned React & built <strong>Vignan Trees</strong> project.</p>
                  </div>
                </div>

                <div className="stem"></div>

                <div className="branch right">
                  <div className="leaf">
                    <h5>🌐 Next.js</h5>
                    <p>Developed <strong>Sainivas Beach View</strong> website with modern SSR.</p>
                  </div>
                </div>

                <div className="stem"></div>

                <div className="branch left">
                  <div className="leaf">
                    <h5>🪣 Supabase</h5>
                    <p>Used <strong>Supabase DB + Storage</strong> for <strong>TR Bike Rentals</strong>.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>

        {/* ⚙️ Tech Stack */}
        <Row className="mt-5 text-center">
          <Col>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <h3 className="text-primary fw-bold mb-4">My Tech Stack ⚙️</h3>
              <div className="d-flex flex-wrap justify-content-center gap-4 fs-1">
                <FaHtml5 className="text-danger" title="HTML5" />
                <FaCss3Alt className="text-info" title="CSS3" />
                <FaJs className="text-warning" title="JavaScript" />
                <FaReact className="text-info" title="React.js" />
                <SiNextdotjs className="text-light" title="Next.js" />
                <SiFastapi className="text-success" title="FastAPI" />
                <FaPython className="text-primary" title="Python" />
                <SiPostgresql className="text-primary" title="PostgreSQL" />
                <SiSupabase className="text-success" title="Supabase" />
                <FaNodeJs className="text-success" title="Node.js" />
                <FaDatabase className="text-secondary" title="SQL Databases" />
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* 🌿 Custom Styles */}
      <style jsx>{`
        .tree {
          position: relative;
          max-width: 700px;
          margin: 0 auto;
          padding: 2rem 0;
        }
        .stem {
          width: 4px;
          height: 60px;
          background: #0d6efd;
          margin: 0 auto;
          border-radius: 2px;
        }
        .branch {
          display: flex;
          align-items: center;
          margin-bottom: 2rem;
          position: relative;
        }
        .branch.left {
          justify-content: flex-start;
        }
        .branch.right {
          justify-content: flex-end;
        }
        .leaf {
          background: rgba(255, 255, 255, 0.08);
          padding: 1rem 1.2rem;
          border-radius: 12px;
          width: 85%;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
          transition: 0.3s ease;
        }
        .leaf:hover {
          transform: translateY(-4px);
          background: rgba(13, 110, 253, 0.1);
          box-shadow: 0 0 15px rgba(13, 110, 253, 0.3);
        }
        .leaf h5 {
          color: #0d6efd;
          font-weight: 600;
        }
        @media (max-width: 768px) {
          .branch {
            justify-content: center !important;
          }
          .leaf {
            width: 95%;
          }
        }
      `}</style>
    </section>
  );
}
