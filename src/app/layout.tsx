import type { Metadata } from 'next';
import { Rubik, Syne } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Drawer from '@/components/Drawer';
import DrawerContextProvider from '@/contexts/DrawerContext';
import ThemeContextProvider from '@/contexts/ThemeContext';
import { GoogleAnalytics } from '@next/third-parties/google';

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
  const gaEnabled = !!process.env.NEXT_PUBLIC_GA_ENABLED;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang='en' className='!scroll-smooth'>
      <body className={`${rubik.variable} ${syne.variable} font-rubik`}>
        <ThemeContextProvider>
          <DrawerContextProvider>
            <Drawer>
              <Navbar />

              {children}
            </Drawer>
          </DrawerContextProvider>
        </ThemeContextProvider>
      </body>
      {gaEnabled && gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
