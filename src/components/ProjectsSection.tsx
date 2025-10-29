'use client';

import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useGithub } from '@/context/GithubContext';
import ProjectCard from './ProjectCard';
import Link from 'next/link';

export default function ProjectsSection() {
  const { repos } = useGithub();
  const myRepos = repos
    ?.filter((repo) => !repo.fork)
    .slice(0, 6); // show top 6

  return (
    <section id="projects" className="py-5 border-top border-secondary bg-dark text-light">
      <Container>
        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <Row xs={1} md={2} lg={3} className="g-4">
          {myRepos?.map((repo) => (
            <Col key={repo.id}>
              <ProjectCard
                title={repo.name}
                desc={repo.description || 'No description available.'}
                link={repo.html_url}
              />
            </Col>
          ))}
        </Row>

        <div className="text-center mt-4">
          <Link href="/projects">
          <Button
            variant="outline-light"
          >
            View All Projects
          </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
