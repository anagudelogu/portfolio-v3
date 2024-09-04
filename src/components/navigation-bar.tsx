import { MENU_LINKS } from '@/lib/constants'
import Logo from './logo'
import MobileMenu from './mobile-menu'
import Link from 'next/link'
import Image from 'next/image'
import memojiImg from '@/assets/images/memoji.webp'
import { Suspense } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'

export default function NavigationBar() {
  return (
    <div className="fixed top-0 z-50 flex w-full items-center justify-center bg-background/50 shadow-sm backdrop-blur">
      <nav className="container flex w-full grid-cols-[1fr_repeat(3,minmax(0,1fr))] items-center justify-between justify-self-start py-4 md:grid">
        <Link href="/">
          <Logo />
        </Link>
        <Suspense fallback={null}>
          <MobileMenu />
        </Suspense>

        <ul className="col-span-2 hidden gap-6 justify-self-center md:flex">
          {MENU_LINKS.map((item) => (
            <li key={item.title}>
              <Link
                href={item.path}
                className="font-serif font-medium underline-offset-4 transition-all hover:text-foreground/60 hover:underline"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden justify-self-end transition-transform hover:rotate-12 md:block">
          <Popover>
            <PopoverTrigger title="Social">
              <Image src={memojiImg} alt="Memoji" width={40} height={40} />
            </PopoverTrigger>
            <PopoverContent align="end" className="w-fit p-1">
              <ul className="flex flex-col">
                <li className="transition-all hover:scale-105">
                  <Link
                    href="https://www.linkedin.com/in/aagst/"
                    target="_blank"
                    className={cn(
                      buttonVariants({
                        variant: 'ghost'
                      }),
                      'w-full justify-start font-bold'
                    )}
                  >
                    <span>LinkedIn</span>
                  </Link>
                </li>
                <li className="transition-all hover:scale-105">
                  <Link
                    href="https://github.com/anagudelogu"
                    target="_blank"
                    className={cn(
                      buttonVariants({
                        variant: 'ghost'
                      }),
                      'w-full justify-start font-bold'
                    )}
                  >
                    GitHub
                  </Link>
                </li>
              </ul>
            </PopoverContent>
          </Popover>
        </div>
      </nav>
    </div>
  )
}
