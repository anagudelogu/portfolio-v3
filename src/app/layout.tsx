import type { Metadata } from 'next';
import { Rubik, Syne } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Drawer from '@/components/Drawer';
import DrawerContextProvider from '@/contexts/DrawerContext';

const rubik = Rubik({ subsets: ['latin'], variable: '--font-rubik' });
const syne = Syne({ subsets: ['latin'], variable: '--font-syne' });

export const metadata: Metadata = {
  title: 'Andres Agudelo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`${rubik.variable} ${syne.variable} font-rubik bg-base-200`}
      >
        <DrawerContextProvider>
          <Drawer>
            <Navbar />

            {children}
          </Drawer>
        </DrawerContextProvider>
      </body>
    </html>
  );
}
