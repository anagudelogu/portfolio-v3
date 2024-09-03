import { MENU_LINKS } from '@/lib/constants'
import Logo from './logo'
import MobileMenu from './mobile-menu'
import Link from 'next/link'
import Image from 'next/image'
import memojiImg from '@/assets/images/memoji.webp'

export default function NavigationBar() {
  return (
    <div className="fixed top-0 z-50 flex w-full items-center justify-center bg-background/10 shadow-sm backdrop-blur">
      <nav className="container flex w-full items-center justify-between py-4">
        <Link href="#home">
          <Logo />
        </Link>
        <MobileMenu />
        <ul className="hidden gap-6 md:flex">
          {MENU_LINKS.map((item) => (
            <li key={item.title}>
              <Link
                href={item.path}
                className="font-serif underline-offset-4 transition-all hover:text-foreground/60 hover:underline"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden transition-transform hover:rotate-12 md:block">
          <Image src={memojiImg} alt="Memoji" width={40} height={40} />
        </div>
      </nav>
    </div>
  )
}
