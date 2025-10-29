'use client';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useGithub } from '@/context/GithubContext';
import ProjectCard from '@/components/ProjectCard';
import Image from 'next/image';

export default function ProjectsPage() {
  const { profile, repos, loading } = useGithub();

  if (loading) return <Spinner animation="border" className="d-block mx-auto mt-5" />;

  return (
    <Container className="py-5 text-light">
      <h2 className="text-center mb-4">GitHub Projects</h2>

      {profile && (
        <div className="text-center mb-5">
          <Image
            src={profile.avatar_url}
            alt={profile.name}
            width={100}
            height={100}
            className="rounded-circle border border-3 border-light mb-3"
          />
          <h4>{profile.name}</h4>
          <p>{profile.bio}</p>
          <a
            href={profile.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light btn-sm"
          >
            View GitHub Profile
          </a>
        </div>
      )}

      <Row xs={1} md={2} lg={3} className="g-4">
        {repos.slice(0, 20).map((repo) => (
          <Col key={repo.id}>
            <ProjectCard
              title={repo.name}
              desc={repo.description || 'No description available.'}
              link={repo.html_url}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
