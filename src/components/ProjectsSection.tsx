'use client';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useGithub } from '@/context/GithubContext';
import ProjectCard from './ProjectCard';

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
          <Button
            variant="outline-light"
            href="https://github.com/indala?tab=repositories"
            target="_blank"
          >
            View All Projects
          </Button>
        </div>
      </Container>
    </section>
  );
}
