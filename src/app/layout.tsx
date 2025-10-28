import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Navbar from '@/components/Navbar';
import { ReactNode } from 'react';
import { GithubProvider } from '@/context/GithubContext';


export const metadata = {
  title: 'Mohan Kumar Indala | Portfolio',
  description: 'Full Stack Developer | React, Next.js, Express, SQL',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <GithubProvider>
          {children}
        </GithubProvider>

      </body>
    </html>
  );
}
