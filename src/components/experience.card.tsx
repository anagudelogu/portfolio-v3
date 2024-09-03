import { Badge } from './ui/badge'

type ExperienceCardProps = {
  role: string
  company: string
  techStack: string[]
  children: React.ReactNode
  date: string
}

export default function ExperienceCard({
  children,
  company,
  date,
  role,
  techStack
}: ExperienceCardProps) {
  return (
    <article className="row-span-3 mx-auto grid w-full max-w-lg grid-rows-subgrid gap-0 rounded-2xl bg-gray-400/15 p-6">
      <header className="mb-8">
        <h4 className="font-serif text-lg font-bold">{company}</h4>

        <h3 className="text-2xl font-bold md:text-3xl">{role}</h3>
        <p className="font-serif text-lg">{date}</p>
      </header>

      {children}

      <ul className="flex flex-wrap gap-1.5">
        {techStack.map((tech) => (
          <li key={tech}>
            <Badge>{tech}</Badge>
          </li>
        ))}
      </ul>
    </article>
  )
}
