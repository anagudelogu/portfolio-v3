import DownloadResumeBtn from '@/components/DownloadResumeBtn';
import aboutMe from '../../public/about-me.png';
import Image from 'next/image';
import soleniumPreview from '../../public/solenium-landing.png';
import ExperienceCard from '@/components/ExperienceCard';
import hoololiLogo from '../../public/hoololi-logo.png';
import microverseLogo from '../../public/microverse-logo.png';
import soleniumLogo from '../../public/solenium-logo.svg';
import Link from 'next/link';
import { useThemeContext } from '@/contexts/ThemeContext';
import FooterLinks from '@/components/FooterLinks';

export default function Home() {
  return (
    <main className='mt-16 max-w-7xl mx-auto'>
      <section
        id='about'
        className='px-6 py-12 scroll-mt-20 md:px-10 lg:grid lg:grid-cols-2 lg:py-20 xl:px-20'
      >
        <div className='flex flex-col gap-5 text-neutral text-center mb-10 md:gap-8 lg:text-left'>
          <h1 className='font-syne font-bold text-4xl uppercase md:text-5xl lg:text-4xl xl:text-6xl'>
            Frontend Developer
          </h1>
          <p className='md:text-lg lg:text-base xl:text-lg'>
            Hi there! I&apos;m a Frontend Developer with two years of
            experience, passionate about crafting user-friendly interfaces and
            exploring cutting-edge web technologies. I thrive in remote work
            environments and love collaborating with cross-cultural teams to
            bring unique perspectives to our projects. I&apos;m dedicated to
            building awesome products that make a difference. Take a look at my
            portfolio to see some of my work, and let&apos;s connect to create
            something amazing!
          </p>
          <div className='w-9/12 mx-auto md:max-w-96 lg:mx-0'>
            <DownloadResumeBtn outlined />
          </div>
        </div>

        <div className='rounded-2xl overflow-hidden w-fit h-fit mx-auto lg:self-center lg:mr-0'>
          <Image
            src={aboutMe}
            alt='About me'
            placeholder='blur'
            className='lg:h-auto lg:w-96'
          />
        </div>
      </section>

      <section
        id='experience'
        className='px-6 pb-12 scroll-mt-20 md:px-10 xl:px-20 xl:pb-20'
      >
        <h2 className='font-syne font-bold text-4xl text-center text-neutral mb-5 md:text-5xl md:mb-8 xl:text-6xl'>
          Experience
        </h2>

        <ul className='flex flex-col gap-5 max-w-lg mx-auto lg:grid lg:grid-cols-2 lg:max-w-none lg:gap-x-8 lg:gap-y-16'>
          <li className='lg:col-span-2'>
            <article className='bg-neutral text-base-200 rounded-2xl shadow-md shadow-[rgba(66,99,248,0.2)] px-5 py-8 flex flex-col gap-5 lg:grid lg:grid-cols-2 xl:px-16 xl:py-12 xl:gap-10'>
              <div className='flex flex-col gap-5'>
                <header>
                  <Image
                    src={soleniumLogo}
                    alt='Solenium logo'
                    className='mb-3'
                    height={24}
                  />
                  <h4 className='text-sm flex justify-between items-center xl:text-base'>
                    Frontend Developer
                    <span className='text-xs xl:text-sm'>
                      Oct, 2023 - Jun, 2024
                    </span>
                  </h4>
                  <h3 className='font-bold text-4xl xl:text-5xl'>Solenium</h3>
                  <h5 className='text-xs xl:text-sm'>
                    Vue, TypeScript, Nuxt, TailwindCSS
                  </h5>
                </header>

                <ul className='text-sm flex flex-col gap-3 xl:text-base'>
                  <li>
                    <p>
                      Revamped the entire landing page by integrating
                      cutting-edge technologies and implementing a fresh design,
                      resulting in a significant SEO improvement and a 140%
                      increase in organic traffic within the first month.
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
              </div>

              <div className='rounded-2xl overflow-hidden w-fit h-fit lg:self-center'>
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

      <footer
        id='contact'
        className='px-6 text-center flex flex-col justify-center text-primary gap-5 pb-12 scroll-mt-20 md:px-10 lg:text-left lg:gap-12 lg:pb-20 xl:px-20 xl:gap-20'
      >
        <div>
          <h3 className='text-neutral font-semibold text-xl mb-5 md:text-2xl lg:text-3xl'>
            Want to hire me?
          </h3>
          <h2 className='font-syne font-bold text-5xl md:text-6xl lg:text-8xl'>
            Let&apos;s talk!
          </h2>
        </div>

        <FooterLinks />
      </footer>
    </main>
  );
}
