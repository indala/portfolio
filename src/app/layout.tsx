import './globals.css';
import Navbar from '@/components/Navbar';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Mohan Kumar Indala | Portfolio',
  description: 'Full Stack Developer | React, Next.js, Express, SQL',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary/20 selection:text-primary">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
