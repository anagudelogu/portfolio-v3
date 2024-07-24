'use client';
import Link from 'next/link';
import { track } from '@vercel/analytics';

export default function FooterLinks() {
  const handleLinkedInClick = () => {
    track('linkedin-click');
  };

  const handleGitHubClick = () => {
    track('github-click');
  };

  const handleEmailClick = () => {
    track('email-click');
  };

  return (
    <ul className='flex flex-col gap-2.5 md:text-lg lg:text-xl lg:flex-row lg:justify-between'>
      <li className='lg:order-2'>
        <a
          href='mailto:anagudelogu@gmail.com'
          className='flex justify-center items-center gap-1.5'
          onClick={handleEmailClick}
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
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          Email
        </a>
      </li>

      <li className='lg:order-1'>
        <Link
          href='https://www.linkedin.com/in/aagst/'
          target='_blank'
          onClick={handleLinkedInClick}
        >
          LinkedIn
        </Link>
      </li>

      <li className='lg:order-3'>
        <Link
          href='https://github.com/anagudelogu'
          target='_blank'
          onClick={handleGitHubClick}
        >
          GitHub
        </Link>
      </li>
    </ul>
  );
}
