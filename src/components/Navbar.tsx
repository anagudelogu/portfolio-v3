'use client';
import { useDrawerContext } from '@/contexts/DrawerContext';
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar() {
  const { isOpen, setIsOpen } = useDrawerContext();

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <header className='shadow-md shadow-[rgba(66,99,248,0.2)] fixed top-0 bg-base-200 w-full'>
      <nav className='navbar px-6 md:px-10 xl:px-20 max-w-7xl mx-auto'>
        <div className='navbar-start'>
          <a className='btn btn-ghost text-primary font-syne font-bold text-3xl px-0'>
            Andres Agudelo
          </a>
        </div>

        <div className='navbar-center hidden lg:flex lg:grow text-neutral'>
          <ul className='menu menu-horizontal'>
            <li>
              <Link
                href='#about'
                onClick={handleClick}
                className='focus:text-neutral'
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                href='#experience'
                onClick={handleClick}
                className='focus:text-neutral'
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href='#contact'
                onClick={handleClick}
                className='focus:text-neutral'
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className='navbar-end lg:hidden'>
          <label
            htmlFor='my-drawer'
            className='btn btn-square btn-ghost text-neutral'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                width='28'
                height='29'
                viewBox='0 0 28 29'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7 21.9307L21 7.93066M7 7.93066L21 21.9307'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            )}
          </label>
        </div>

        <div className='hidden navbar-end lg:flex'>
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
