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
  title: 'Andres Agudelo | Frontend Developer',
  description:
    'Frontend Developer with years of experience, passionate about crafting user-friendly interfaces and exploring cutting-edge web technologies.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
