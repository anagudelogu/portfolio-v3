import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

type ExperienceCardProps = {
  logoSrc: string | StaticImport;
  role: string;
  company: string;
  techStack: string;
  children: React.ReactNode;
  date: string;
};

export default function ExperienceCard({
  logoSrc,
  children,
  company,
  role,
  techStack,
  date,
}: ExperienceCardProps) {
  return (
    <article className='bg-neutral-content bg-opacity-30 rounded-2xl shadow-md shadow-[rgba(66,99,248,0.2)] p-6 min-h-[350px] xl:px-10 xl:py-8 text-neutral'>
      <header className='mb-5 xl:mb-7'>
        <Image
          src={logoSrc}
          alt={`${company} logo`}
          className='mb-3'
          height={24}
          width={24}
        />
        <h4 className='text-sm flex justify-between items-center xl:text-base'>
          {role}
          <span className='text-xs xl:text-sm'>{date}</span>
        </h4>
        <h3 className='font-bold text-3xl xl:text-4xl'>{company}</h3>
        <h5 className='text-xs xl:text-sm'>{techStack}</h5>
      </header>

      <ul className='text-sm flex flex-col gap-3 xl:text-base'>{children}</ul>
    </article>
  );
}
