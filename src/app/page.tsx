import DownloadResumeBtn from '@/components/DownloadResumeBtn';
import { Metadata } from 'next';
import aboutMe from '../../public/about-me.png';
import Image from 'next/image';
import soleniumPreview from '../../public/solenium-landing.png';
import ExperienceCard from '@/components/ExperienceCard';
import hoololiLogo from '../../public/hoololi-logo.png';
import microverseLogo from '../../public/microverse-logo.png';
import soleniumLogo from '../../public/solenium-logo.svg';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Andres Agudelo | Frontend Developer',
  description:
    'Frontend Developer with two years of experience, passionate about crafting user-friendly interfaces and exploring cutting-edge web technologies.',
};

export default function Home() {
  return (
    <main>
      <section className='px-6 py-12'>
        <div className='flex flex-col gap-5 text-neutral text-center mb-10'>
          <h1 className='font-syne font-bold text-4xl uppercase'>
            Frontend Developer
          </h1>
          <p>
            Hi there! I&apos;m a Frontend Developer with two years of
            experience, passionate about crafting user-friendly interfaces and
            exploring cutting-edge web technologies. I thrive in remote work
            environments and love collaborating with cross-cultural teams to
            bring unique perspectives to our projects. I&apos;m dedicated to
            building awesome products that make a difference. Take a look at my
            portfolio to see some of my work, and let&apos;s connect to create
            something amazing!
          </p>
          <div className='w-9/12 mx-auto'>
            <DownloadResumeBtn outlined />
          </div>
        </div>

        <div className='rounded-2xl overflow-hidden'>
          <Image src={aboutMe} alt='About me' placeholder='blur' />
        </div>
      </section>

      <section className='px-6 pb-12'>
        <h2 className='font-syne font-bold text-4xl text-center mb-5'>
          Experience
        </h2>

        <ul className='flex flex-col gap-5'>
          <li>
            <article className='bg-neutral text-white rounded-2xl shadow-sm shadow-[rgba(66,99,248,0.2)] px-5 py-8 flex flex-col gap-5'>
              <header>
                <Image
                  src={soleniumLogo}
                  alt='Solenium logo'
                  className='mb-3'
                  height={24}
                />
                <h4 className='text-sm flex justify-between items-center'>
                  Frontend Developer
                  <span className='text-xs'>Oct, 2023 - Jun, 2024</span>
                </h4>
                <h3 className='font-bold text-4xl'>Solenium</h3>
                <h5 className='text-xs'>Vue, TypeScript, Nuxt, TailwindCSS</h5>
              </header>

              <ul className='text-sm flex flex-col gap-3'>
                <li>
                  <p>
                    Revamped the entire landing page by integrating cutting-edge
                    technologies and implementing a fresh design, resulting in a
                    significant SEO improvement and a 140% increase in organic
                    traffic within the first month.
                  </p>
                </li>

                <li>
                  <p>
                    Started the development of an app for monitoring energy
                    border meters, enhancing operational efficiency by
                    streamlining data collection and analysis processes,
                    projected to reduce manual monitoring time by 90%.
                  </p>
                </li>

                <li>
                  <p>
                    Worked closely with product and design team, to understand
                    the business requirements and prioritize and scope work
                    accordingly, for me and my peers.
                  </p>
                </li>
              </ul>

              <div className='rounded-2xl overflow-hidden'>
                <Image
                  src={soleniumPreview}
                  alt='Solenium landing page'
                  className='object-cover'
                />
              </div>
            </article>
          </li>
          <li>
            <ExperienceCard
              logoSrc={hoololiLogo}
              role='Frontend Developer'
              company='Hoololi'
              techStack='React, TypeScript, TailwindCSS, Firebase'
              date='Oct, 2022 - Dec, 2023'
            >
              <li>
                Led the development of a new project from the ground up, closely
                following the product requirements to deliver a high-quality
                product using React, Typescript, and Tailwind.
              </li>
              <li>
                Focused on continuously delivering features following best
                practices, code testing, and documentation.
              </li>
            </ExperienceCard>
          </li>

          <li>
            <ExperienceCard
              logoSrc={microverseLogo}
              role='PT Code Reviewer'
              company='Microverse'
              techStack='React, Ruby on Rails, TypeScript, GitHub'
              date='Oct, 2022 - Oct, 2023'
            >
              <li>
                Mentored junior web developers, providing technical support
                through code reviews.
              </li>
              <li>
                Proposed improvements to code organization to improve code
                quality and encourage professional standards and best practices.
              </li>
            </ExperienceCard>
          </li>
        </ul>
      </section>

      <footer className='text-center flex flex-col justify-center text-primary gap-5 pb-12'>
        <div>
          <h3 className='text-neutral font-semibold text-xl mb-5'>
            Want to hire me?
          </h3>
          <h2 className='font-syne font-bold text-5xl'>Let&apos;s talk!</h2>
        </div>

        <ul className='flex flex-col gap-2.5'>
          <li>
            <a
              href='mailto:anagudelogu@gmail.com'
              className='flex justify-center items-center gap-1.5'
            >
              <svg
                width='21'
                height='21'
                viewBox='0 0 21 21'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M18.625 6.44458V15.1946C18.625 15.6919 18.4275 16.1688 18.0758 16.5204C17.7242 16.872 17.2473 17.0696 16.75 17.0696H4.25C3.75272 17.0696 3.27581 16.872 2.92417 16.5204C2.57254 16.1688 2.375 15.6919 2.375 15.1946V6.44458M18.625 6.44458C18.625 5.9473 18.4275 5.47039 18.0758 5.11876C17.7242 4.76712 17.2473 4.56958 16.75 4.56958H4.25C3.75272 4.56958 3.27581 4.76712 2.92417 5.11876C2.57254 5.47039 2.375 5.9473 2.375 6.44458M18.625 6.44458V6.64708C18.625 6.9672 18.5431 7.282 18.387 7.56149C18.2309 7.84099 18.0059 8.07586 17.7333 8.24375L11.4833 12.0896C11.1877 12.2717 10.8472 12.3681 10.5 12.3681C10.1528 12.3681 9.81233 12.2717 9.51667 12.0896L3.26667 8.24458C2.9941 8.07669 2.76906 7.84182 2.61297 7.56233C2.45689 7.28283 2.37496 6.96803 2.375 6.64791V6.44458'
                  stroke='#4263F8'
                  stroke-width='1.5'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              Email
            </a>
          </li>

          <li>
            <Link href='https://www.linkedin.com/in/aagst/' target='_blank'>
              LinkedIn
            </Link>
          </li>

          <li>
            <Link href='https://github.com/anagudelogu' target='_blank'>
              GitHub
            </Link>
          </li>
        </ul>
      </footer>
    </main>
  );
}
