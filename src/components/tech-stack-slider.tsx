import {
  NextjsLogo,
  CSSLogo,
  ExpressLogo,
  GitHubLogo,
  GitLogo,
  GraphQLLogo,
  HTMLLogo,
  JSLogo,
  JestLogo,
  NodejsLogo,
  ReactLogo,
  NuxtLogo,
  OpenAILogo,
  PostgresLogo,
  ReduxLogo,
  RoRLogo,
  ShopifyLogo,
  TailwindLogo,
  TypeScriptLogo,
  VueLogo,
  WebpackLogo
} from '@/assets/svg'

const techStack = [
  { name: 'HTML', icon: HTMLLogo },
  { name: 'CSS', icon: CSSLogo },
  { name: 'JavaScript', icon: JSLogo },
  { name: 'Node.js', icon: NodejsLogo },
  { name: 'Express.js', icon: ExpressLogo },
  { name: 'GraphQL', icon: GraphQLLogo },
  { name: 'Jest', icon: JestLogo },
  { name: 'Git', icon: GitLogo },
  { name: 'GitHub', icon: GitHubLogo },
  { name: 'React', icon: ReactLogo },
  { name: 'Redux', icon: ReduxLogo },
  { name: 'Next.js', icon: NextjsLogo },
  { name: 'TypeScript', icon: TypeScriptLogo },
  { name: 'Tailwind CSS', icon: TailwindLogo },
  { name: 'Vue.js', icon: VueLogo },
  { name: 'Nuxt.js', icon: NuxtLogo },
  { name: 'Webpack', icon: WebpackLogo },
  { name: 'Ruby on Rails', icon: RoRLogo },
  { name: 'PostgreSQL', icon: PostgresLogo },
  { name: 'Shopify', icon: ShopifyLogo },
  { name: 'OpenAI', icon: OpenAILogo }
]

export default function TechStackSlider() {
  return (
    <div className="-mx-1">
      <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%_90%,transparent)]">
        <div className="animate-move-left flex flex-none gap-4 py-1.5 pr-4 [animation-duration:40s] md:gap-6 lg:gap-8">
          {[...techStack, ...techStack].map((tech, idx) => (
            <div
              key={tech.name + idx}
              className="relative size-24 bg-background/95 after:absolute after:inset-0 after:z-[-1] after:bg-gradient-to-r after:from-emerald-300 after:to-sky-400 after:blur-sm after:content-[''] after:md:blur-[6px]"
            >
              <tech.icon className="fill-gray-300/20" />
              <span className="sr-only">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
