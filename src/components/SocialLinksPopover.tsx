'use client'

import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import Image from 'next/image'
import memojiImg from '@/assets/images/memoji.webp'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'
import { useState } from 'react'
import { PopoverArrow } from '@radix-ui/react-popover'

export default function SocialLinksPopover() {
  const [open, setOpen] = useState(false)

  function handleMouseEnter() {
    setOpen(true)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        title="Social"
        onMouseEnter={handleMouseEnter}
        onClick={(e) => e.preventDefault()}
      >
        <Image
          src={memojiImg}
          alt="Memoji"
          width={40}
          height={40}
          className={cn('transition-transform', open && 'rotate-12')}
        />
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
        <PopoverArrow />
      </PopoverContent>
    </Popover>
  )
}
