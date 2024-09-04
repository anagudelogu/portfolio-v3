import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { Syne as FontSerif } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import NavigationBar from '@/components/navigation-bar'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

const fontSerif = FontSerif({
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://andresagudelo.dev'),
  title: 'Andres Agudelo | Frontend Developer',
  description:
    'Frontend Developer | React, TypeScript, Next.js | I Help Startups Boost User Engagement by Crafting Intuitive and Reliable User Experiences',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Redux'],
  openGraph: {
    siteName: 'Andres Agudelo | Frontend Developer',
    type: 'website',
    locale: 'en_US',
    description:
      'Frontend Developer | React, TypeScript, Next.js | I Help Startups Boost User Engagement by Crafting Intuitive and Reliable User Experiences',
    images: [
      {
        url: 'https://andresagudelo.dev/memoji-pc.webp',
        width: 1200,
        height: 630,
        alt: 'Andres Agudelo | Frontend Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andres Agudelo | Frontend Developer',
    description:
      'Frontend Developer | React, TypeScript, Next.js | I Help Startups Boost User Engagement by Crafting Intuitive and Reliable User Experiences',
    images: [
      {
        url: 'https://andresagudelo.dev/memoji-pc.webp',
        width: 1200,
        height: 630,
        alt: 'Andres Agudelo | Frontend Developer'
      }
    ]
  },
  alternates: {
    canonical: 'https://andresagudelo.dev'
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      <body
        className={cn(
          'before:bg-pattern after:bg-gradient-decorations min-h-screen font-sans antialiased',
          fontSans.variable,
          fontSerif.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <NavigationBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
