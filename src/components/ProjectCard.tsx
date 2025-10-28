'use client';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  desc: string;
  link: string;
}

export default function ProjectCard({ title, desc, link }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -5, scale: 1.02 }} transition={{ duration: 0.2 }}>
      <Card className="shadow-lg border-0 h-100 bg-dark text-light">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <Button
            variant="primary"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </Button>
        </Card.Body>
      </Card>
    </motion.div>
  );
}
