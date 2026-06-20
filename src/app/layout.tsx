import './globals.css';
import Navbar from '@/components/Navbar';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Mohan Kumar Indala | Portfolio',
  description: 'Full Stack Developer | React, Next.js, Express, SQL',
  verification: {
    google: '78ZqN4FfGLxnp8Opq-U0szIVh0Ep7oBxNJWskJYu7-Y',
  },
  alternates: {
    canonical: 'https://indala.vercel.app',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Mohan Kumar Indala',
      url: 'https://indala.vercel.app',
      jobTitle: 'Full Stack Developer',
      knowsAbout: ['React', 'Next.js', 'Express', 'SQL', 'TypeScript', 'Node.js'],
    },
    {
      '@type': 'WebSite',
      name: 'Mohan Kumar Indala | Portfolio',
      url: 'https://indala.vercel.app',
      description: 'Full Stack Developer | React, Next.js, Express, SQL',
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary/20 selection:text-primary">
        <Navbar />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
