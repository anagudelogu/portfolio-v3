'use client'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger
} from './ui/drawer'
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
    <Drawer direction="left" open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <DrawerTrigger className={buttonVariants({ variant: 'outline' })}>
        <Bars3Icon className="h-4" />
      </DrawerTrigger>
      <DrawerContent className="container py-4">
        <div className="flex h-10 items-center justify-between">
          <DrawerTitle>
            <Link href="/" prefetch={true} onClick={closeMobileMenu}>
              <Logo />
            </Link>
          </DrawerTitle>

          <DrawerClose className={`${buttonVariants({ variant: 'outline' })}`}>
            <XMarkIcon className="h-4" />
          </DrawerClose>
        </div>
        <DrawerDescription className="sr-only">Navigation</DrawerDescription>
        <ul className="mt-10 flex flex-col gap-4 font-serif text-3xl font-semibold tracking-wider">
          {MENU_LINKS.map((item) => (
            <li key={item.title}>
              <Link
                href={item.path}
                prefetch={true}
                className="underline-offset-4 hover:text-black hover:underline"
                onClick={closeMobileMenu}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </DrawerContent>
    </Drawer>
  )
}
