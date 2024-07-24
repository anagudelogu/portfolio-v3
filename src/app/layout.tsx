import type { Metadata } from 'next';
import { Rubik, Syne } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Drawer from '@/components/Drawer';
import DrawerContextProvider from '@/contexts/DrawerContext';
import ThemeContextProvider, { useThemeContext } from '@/contexts/ThemeContext';

const rubik = Rubik({ subsets: ['latin'], variable: '--font-rubik' });
const syne = Syne({ subsets: ['latin'], variable: '--font-syne' });

export const metadata: Metadata = {
  title: 'Andres Agudelo | Frontend Developer',
  description:
    'Frontend Developer with years of experience, passionate about crafting user-friendly interfaces and exploring cutting-edge web technologies.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
    </html>
  );
}
