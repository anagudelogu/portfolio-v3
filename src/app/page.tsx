import DownloadResumeBtn from '@/components/DownloadResumeBtn';
import { Metadata } from 'next';
import aboutMe from '../../public/about-me.png';
import Image from 'next/image';
import soleniumPreview from '../../public/solenium-landing.png';
import ExperienceCard from '@/components/ExperienceCard';
import hoololiLogo from '../../public/hoololi-logo.png';
import microverseLogo from '../../public/microverse-logo.png';
import soleniumLogo from '../../public/solenium-logo.svg';

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
    </main>
  );
}
