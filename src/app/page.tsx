import memojiImg from '@/assets/images/memoji-pc.webp'
import { Button } from '@/components/ui/button'
import { ArrowDownIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className="container py-32 md:py-48 lg:py-60">
        <div className="flex flex-col items-center">
          <Image src={memojiImg} alt="Memoji" width={100} height={100} />
          <div className="inline-flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-950 px-4 py-1.5">
            <div className="relative size-2.5 rounded-full bg-green-500">
              <div className="animate-ping-large absolute inset-0 rounded-full bg-green-500"></div>
            </div>
            <div className="text-sm font-medium">Available for new projects</div>
          </div>
        </div>
        <div className="mx-auto max-w-lg">
          <h1 className="mt-8 text-center text-3xl font-black tracking-wide md:text-5xl">
            Crafting Engaging User Experiences
          </h1>
          <p className="mt-4 text-center text-foreground/70 md:text-lg">
            I specialize in turning concepts into high-quality, responsive applications. Ready to
            take your project to the next level?
          </p>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
          <Button variant="outline" className="inline-flex items-center gap-2 font-semibold">
            <span>Explore My Work</span>
            <ArrowDownIcon className="size-4" />
          </Button>
          <Button className="inline-flex items-center gap-2 font-semibold">
            <span>Let&apos;s Connect</span>
            <span>👋</span>
          </Button>
        </div>
      </div>
    </main>
  )
}
