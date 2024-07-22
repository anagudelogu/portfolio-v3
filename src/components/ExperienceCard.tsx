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
    <article className='bg-white rounded-2xl shadow-sm shadow-[rgba(66,99,248,0.2)] p-6 min-h-[350px]'>
      <header className='mb-5'>
        <Image
          src={logoSrc}
          alt={`${company} logo`}
          className='mb-3'
          height={24}
          width={24}
        />
        <h4 className='text-sm flex justify-between items-center'>
          {role}
          <span className='text-xs'>{date}</span>
        </h4>
        <h3 className='font-bold text-3xl'>{company}</h3>
        <h5 className='text-xs'>{techStack}</h5>
      </header>

      <ul className='text-sm flex flex-col gap-3'>{children}</ul>
    </article>
  );
}
