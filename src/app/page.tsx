import memojiImg from '@/assets/images/memoji-pc.webp'
import ExperienceCard from '@/components/experience.card'
import FeaturedExperience from '@/components/featured-experience'
import TechStackSlider from '@/components/tech-stack-slider'
import { Button } from '@/components/ui/button'
import { ArrowDownIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import personalPic from '@/assets/images/personal-pic.png'
import amsterdamPic from '@/assets/images/amsterdam.jpeg'
import ghentPic from '@/assets/images/ghent.png'
import ibizaPic from '@/assets/images/ibiza.png'
import map from '@/assets/images/map.jpeg'
import memojiThumb from '@/assets/images/memoji-thumbsup.webp'

export default function Home() {
  return (
    <main>
      <section className="container py-32 md:py-48 lg:min-h-screen lg:py-60">
        <div className="flex flex-col items-center">
          <Image src={memojiImg} alt="Memoji" width={100} height={100} />
          <div className="inline-flex items-center gap-4 rounded-lg border border-gray-800 bg-gray-950 px-4 py-1.5">
            <div className="relative size-2.5 rounded-full bg-green-500">
              <div className="absolute inset-0 animate-ping-large rounded-full bg-green-500"></div>
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
      </section>

      <section className="container">
        <div className="flex justify-center">
          <h3 className="gradient-text font-serif text-sm font-bold uppercase">
            Real-world Impact
          </h3>
        </div>
        <h2 className="mb-10 mt-6 text-center text-3xl font-extrabold tracking-wide md:text-5xl">
          Experience
        </h2>
        <div className="mx-auto grid grid-cols-1 grid-rows-[auto_1fr_auto] gap-8 lg:max-w-5xl lg:grid-cols-2 lg:gap-y-10">
          <FeaturedExperience />
          <ExperienceCard
            company="Hoololi"
            date="October, 2022 - December, 2023"
            role="Frontend Developer"
            techStack={['React', 'TypeScript', 'TailwindCSS', 'Firebase']}
          >
            <ul className="mb-8 flex list-inside list-disc flex-col gap-4">
              <li>
                <p className="inline">
                  Spearheaded the end-to-end development of a data management web app, independently
                  selecting the tech stack (React, TypeScript, Tailwind CSS) and managing trade-offs
                  to meet project goals.
                </p>
              </li>
              <li>
                <p className="inline">
                  Delivered a user-friendly interface that supported the data input and
                  visualization needs of plantation managers, resulting in the successful onboarding
                  of the first real user.
                </p>
              </li>
            </ul>
          </ExperienceCard>
          <ExperienceCard
            company="Microverse"
            date="October, 2022 - October, 2023"
            role="Code Reviewer"
            techStack={['React', 'Ruby on Rails', 'TypeScript', 'GitHub']}
          >
            <ul className="mb-8 flex list-inside list-disc flex-col gap-4">
              <li>
                <p className="inline">
                  Conducted over 120 code reviews and PR contributions, significantly improving code
                  quality and fostering best practices among a global, cross-cultural team of junior
                  developers in a fully remote environment.
                </p>
              </li>
              <li>
                <p className="inline">
                  Mentored junior developers from diverse backgrounds, helping them overcome
                  technical challenges and improving their coding proficiency, which led to a 30%
                  reduction in common errors in their submitted projects.
                </p>
              </li>
            </ul>
          </ExperienceCard>
        </div>
      </section>

      <div className="mx-auto max-w-6xl overflow-x-clip py-16 md:py-32">
        <TechStackSlider />
      </div>

      <section className="container pb-16 md:pb-32">
        <div className="flex justify-center">
          <h3 className="gradient-text font-serif text-sm font-bold uppercase">Beyond the code</h3>
        </div>
        <h2 className="mb-10 mt-6 text-center text-3xl font-extrabold tracking-wide md:text-5xl">
          About me
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <article className="relative mx-auto max-h-[350px] w-full rounded-2xl bg-gray-400/15">
            <Image src={personalPic} alt="Andres Agudelo" className="h-full w-full object-cover" />
          </article>

          <article className="mx-auto flex max-h-[350px] w-full items-center rounded-2xl bg-gray-400/15 p-6 md:col-span-2 lg:text-lg">
            <p>
              When I&apos;m not immersed in the screen, you&apos;ll often find me planning my next
              adventure and enjoying the excitement of exploring new places. Traveling is my way of
              seeing the world and collecting cool stories along the way.
            </p>
          </article>

          <article className="mx-auto flex max-h-[350px] w-full items-center rounded-2xl bg-gray-400/15 p-6 md:col-span-2 lg:text-lg">
            <p>
              I also love to hit the gym or box, I&apos;m constantly challenging myself and seeing
              what I can do. When it&apos;s time to chill, I&apos;m all about hanging out with
              friends, gaming or just vibing to music, These are the things that keep me going.
            </p>
          </article>

          <article className="relative mx-auto max-h-[350px] w-full overflow-clip rounded-2xl bg-gray-400/15 md:col-span-1 lg:col-span-1">
            <Image
              src={map}
              alt="Andres Agudelo"
              className="h-full w-full object-cover object-right-top"
            />
            <div className="absolute left-1/2 top-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full after:absolute after:inset-0 after:rounded-full after:outline after:outline-2 after:outline-offset-2 after:outline-gray-950/30 after:content-['']">
              <div className="absolute inset-0 z-[-2] animate-ping rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 [animation-duration:2s]"></div>
              <div className="absolute inset-0 z-[-1] rounded-full bg-gradient-to-r from-emerald-300 to-sky-400"></div>
              <Image src={memojiThumb} alt="Andres Agudelo" className="size-20" />
            </div>
          </article>

          <article className="relative mx-auto hidden w-full overflow-clip rounded-2xl bg-gray-400/15 lg:block">
            <Image
              src={amsterdamPic}
              alt="Andres Agudelo"
              className="h-full w-full object-cover transition duration-300 hover:scale-125"
            />
          </article>

          <article className="relative mx-auto hidden w-full overflow-clip rounded-2xl bg-gray-400/15 lg:block">
            <Image
              src={ibizaPic}
              alt="Andres Agudelo"
              className="h-full w-full object-cover transition duration-300 hover:scale-125"
            />
          </article>

          <article className="relative mx-auto hidden w-full overflow-clip rounded-2xl bg-gray-400/15 lg:block">
            <Image
              src={ghentPic}
              alt="Andres Agudelo"
              className="h-full w-full object-cover transition duration-300 hover:scale-125"
            />
          </article>
        </div>
      </section>

      <section className="container pb-16 md:pb-32">
        <div className="flex justify-center">
          <h3 className="gradient-text font-serif text-sm font-bold uppercase">
            Interested in collaborating?
          </h3>
        </div>
        <h2 className="mb-10 mt-6 text-center font-serif text-5xl font-bold md:text-6xl lg:text-8xl">
          Let&apos;s Talk!
        </h2>

        <ul className="flex flex-col items-center md:flex-row md:justify-around">
          <li className="flex items-center gap-4">
            <EnvelopeIcon className="size-5" />
            <h3 className="text-lg font-medium">Email</h3>
          </li>
          <li>
            <h3 className="text-lg font-medium">LinkedIn</h3>
          </li>
          <li>
            <h3 className="text-lg font-medium">GitHub</h3>
          </li>
        </ul>
      </section>

      <footer className="mb-6 flex justify-center">
        <small className="text-foreground/40">Created by Andres Agudelo 2024.</small>
      </footer>
    </main>
  )
}
