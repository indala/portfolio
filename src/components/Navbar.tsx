'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';

export default function CustomNavbar() {
  const pathname = usePathname(); // current active path
  const [expanded, setExpanded] = useState(false); // for mobile toggle

  // handle link click → close navbar on mobile
  const handleNavClick = () => setExpanded(false);

  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
      expanded={expanded}
      className="shadow-sm"
    >
      <Container>
        <Navbar.Brand as={Link} href="/">
          Mohan.dev
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="navbar"
          onClick={() => setExpanded(expanded ? false : true)}
        />

        <Navbar.Collapse id="navbar">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              href="/"
              onClick={handleNavClick}
              className={pathname === '/' ? 'active fw-bold text-primary' : ''}
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={Link}
              href="/about"
              onClick={handleNavClick}
              className={pathname === '/about' ? 'active fw-bold text-primary' : ''}
            >
              About
            </Nav.Link>

            <Nav.Link
              as={Link}
              href="/projects"
              onClick={handleNavClick}
              className={pathname === '/projects' ? 'active fw-bold text-primary' : ''}
            >
              Projects
            </Nav.Link>

            <Nav.Link
              as={Link}
              href="/contact"
              onClick={handleNavClick}
              className={pathname === '/contact' ? 'active fw-bold text-primary' : ''}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
