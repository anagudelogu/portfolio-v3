import DownloadResumeBtn from '@/components/DownloadResumeBtn';
import { Metadata } from 'next';
import aboutMe from '../../public/about-me.png';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Andres Agudelo | Frontend Developer',
  description:
    'Frontend Developer with two years of experience, passionate about crafting user-friendly interfaces and exploring cutting-edge web technologies.',
};

export default function Home() {
  return (
    <main>
      <section className='px-6 py-12 '>
        <div className='flex flex-col gap-5 text-neutral text-center mb-10'>
          <h1 className='font-syne font-bold text-4xl uppercase '>
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
    </main>
  );
}
