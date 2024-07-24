import type { Metadata } from 'next';
import { Rubik, Syne } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Drawer from '@/components/Drawer';
import DrawerContextProvider from '@/contexts/DrawerContext';
import ThemeContextProvider from '@/contexts/ThemeContext';
import { PHProvider } from './providers';
import { Analytics } from '@vercel/analytics/react';

const rubik = Rubik({ subsets: ['latin'], variable: '--font-rubik' });
const syne = Syne({ subsets: ['latin'], variable: '--font-syne' });

export const metadata: Metadata = {
  metadataBase: new URL('https://andresagudelo.dev'),
  title: 'Andres Agudelo | Frontend Developer',
  description:
    'Frontend Developer with years of experience, passionate about crafting user-friendly interfaces and exploring cutting-edge web technologies.',
  keywords: [
    'Frontend Developer',
    'React',
    'Next.js',
    'Tailwind CSS',
    'TypeScript',
  ],
  openGraph: {
    siteName: 'Andres Agudelo | Frontend Developer',
    type: 'website',
    locale: 'en_US',
    description:
      'Frontend Developer with years of experience, passionate about crafting user-friendly interfaces and exploring cutting-edge web technologies.',
    images: [
      {
        url: 'https://andresagudelo.dev/about-me.png',
        width: 1200,
        height: 630,
        alt: 'Andres Agudelo | Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andres Agudelo | Frontend Developer',
    description:
      'Frontend Developer with years of experience, passionate about crafting user-friendly interfaces and exploring cutting-edge web technologies.',
    images: [
      {
        url: 'https://andresagudelo.dev/about-me.png',
        width: 1200,
        height: 630,
        alt: 'Andres Agudelo | Frontend Developer',
      },
    ],
  },
  alternates: {
    canonical: 'https://andresagudelo.dev',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <PHProvider>
        <ThemeContextProvider>
          <DrawerContextProvider>
            <body className={`${rubik.variable} ${syne.variable} font-rubik`}>
              <Drawer>
                <Navbar />

                {children}
              </Drawer>
            </body>
          </DrawerContextProvider>
        </ThemeContextProvider>
      </PHProvider>
      <Analytics />
    </html>
  );
}
