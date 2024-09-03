import { Badge } from './ui/badge'
import Image from 'next/image'
import soleniumImg from '@/assets/images/solenium-landing.png'

export default function FeaturedExperience() {
  return (
    <article className="animated-border relative mx-auto max-w-lg rounded-lg border bg-background p-4 lg:col-span-2 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-4 lg:px-8">
      <div>
        <header className="mb-8">
          <h4 className="font-serif text-lg font-bold">Solenium</h4>

          <h3 className="text-2xl font-bold md:text-3xl">Frontend Developer</h3>
          <p className="font-serif text-lg">October, 2023 - June, 2024</p>
        </header>

        <ul className="mb-8 flex list-inside list-disc flex-col gap-4">
          <li>
            <p className="inline">
              Revamped the entire landing page using Vue, TypeScript, and Nuxt.js, leading to a
              331.6% increase in organic traffic and a significant SEO improvement within the first
              quarter.
            </p>
          </li>
          <li>
            <p className="inline">
              Initiated and led the development of an energy border meter monitoring app with Vue,
              TypeScript, and Nuxt.js, projected to reduce manual monitoring time by 90%.
            </p>
          </li>
          <li>
            <p className="inline">
              Collaborated with cross-functional teams, including product and design, to align
              technical implementation with business goals, enhancing the overall user experience.
            </p>
          </li>
        </ul>

        <ul className="mb-8 flex gap-1.5">
          <li>
            <Badge variant="secondary">Vue</Badge>
          </li>

          <li>
            <Badge variant="secondary">Nuxt.js</Badge>
          </li>
          <li>
            <Badge variant="secondary">TypeScript</Badge>
          </li>
          <li>
            <Badge variant="secondary">TailwindCSS</Badge>
          </li>
        </ul>
      </div>

      <div className="h-fit w-fit overflow-hidden rounded-2xl lg:self-center">
        <Image src={soleniumImg} alt="Solenium Landing Page" className="object-cover" />
      </div>
    </article>
  )
}
