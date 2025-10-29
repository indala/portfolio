'use client';

import { motion } from 'framer-motion';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const phoneNumber = '917780123277'; // Your WhatsApp number (no + or spaces)

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `👋 Hello Mohan, I&apos;m ${name}.\n📧 Email: ${email}\n💬 Message: ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <Form
        action="https://formspree.io/f/mqakvbda"
        method="POST"
        className="mb-3"
      >
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            name="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            name="message"
            rows={4}
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </Form.Group>

        <div className="d-flex gap-2">
          <Button variant="primary" type="submit" className="w-100 py-2">
            Send Message
          </Button>

          <Button
            variant="success"
            className="w-100 py-2 d-flex align-items-center justify-content-center gap-2"
            onClick={handleWhatsApp}
          >
            <FaWhatsapp /> WhatsApp
          </Button>
        </div>
      </Form>
    </motion.div>
  );
}
