import Hero from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import { Container,Row } from 'react-bootstrap';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <Container>
        <Row className="my-5 mx-0 mx-sm-5 px-0 px-md-5 ">
          <h1 className='fw-bold mb-5'>Contact Me 📞</h1>
      <ContactSection />
        </Row>
      </Container>
    </>
  );
}
