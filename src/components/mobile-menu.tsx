'use client'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger
} from './ui/sheet'
import Link from 'next/link'
import Logo from './logo'
import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { useMediaQuery } from '@/hooks/use-media-query'
import { buttonVariants } from './ui/button'
import { MENU_LINKS } from '@/lib/constants'

export default function MobileMenu() {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isOpen, setIsOpen] = useState(false)

  function closeMobileMenu() {
    setIsOpen(false)
  }

  useEffect(() => {
    setIsOpen(false)
  }, [pathname, searchParams])

  if (isDesktop) return null

  return (
    <Sheet open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <SheetTrigger className={buttonVariants({ variant: 'outline' })}>
        <Bars3Icon className="h-4" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="container w-screen max-w-md py-4 min-[448px]:rounded-br-[10px] min-[448px]:rounded-tr-[10px]"
      >
        <div className="flex h-10 items-center justify-between">
          <SheetTitle>
            <Link href="/" onClick={closeMobileMenu}>
              <Logo />
            </Link>
          </SheetTitle>

          <SheetClose className={`${buttonVariants({ variant: 'outline' })}`}>
            <XMarkIcon className="h-4" />
          </SheetClose>
        </div>
        <SheetDescription className="sr-only">Navigation</SheetDescription>
        <ul className="mt-10 flex flex-col gap-4 font-serif text-3xl font-semibold tracking-wider">
          {MENU_LINKS.map((item) => (
            <li key={item.title}>
              <Link
                href={item.path}
                className="underline-offset-4 hover:text-black hover:underline"
                onClick={closeMobileMenu}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  )
}
