import { MENU_LINKS } from '@/lib/constants'
import Link from 'next/link'
import { Suspense } from 'react'
import Logo from './logo'
import MobileMenu from './mobile-menu'
import SocialLinksPopover from './SocialLinksPopover'

export default function NavigationBar() {
  return (
    <div className="fixed left-0 right-0 top-0 z-40 flex w-full animate-header items-center justify-center pb-8 pt-2 backdrop-blur-[10px] [animation-range:0_150px] [animation-timeline:scroll()] md:backdrop-blur-0">
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
        <div className="hidden justify-self-end transition-transform md:block">
          <SocialLinksPopover />
        </div>
      </nav>
    </div>
  )
}
