'use client';
import { useDrawerContext } from '@/contexts/DrawerContext';

export default function Navbar() {
  const { isOpen, setIsOpen } = useDrawerContext();

  return (
    <nav className='navbar shadow-sm shadow-[rgba(66,99,248,0.2)] fixed top-0 bg-base-200 px-6 md:px-10'>
      <div className='flex-1'>
        <a className='btn btn-ghost text-primary font-syne font-bold text-3xl px-0'>
          Andres Agudelo
        </a>
      </div>

      <div>
        <label
          htmlFor='my-drawer'
          className='btn btn-square btn-ghost'
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
    </nav>
  );
}
