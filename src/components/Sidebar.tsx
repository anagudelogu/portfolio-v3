import ThemeSwitcher from './ThemeSwitcher';

export default function Sidebar() {
  return (
    <div className='drawer-side mt-[65px]'>
      <label
        htmlFor='my-drawer'
        aria-label='close sidebar'
        className='drawer-overlay'
      ></label>
      <ul className='menu menu-lg bg-base-200 text-neutral text-lg font-semibold w-dvw p-4 h-[calc(100dvh-64px)] flex flex-col gap-4'>
        <li>
          <a>About me</a>
        </li>
        <li>
          <a>Experience</a>
        </li>
        <li>
          <a>Contact</a>
        </li>

        <li className='px-6'>
          <a className='btn btn-primary'>
            <svg
              width='18'
              height='18'
              viewBox='0 0 21 21'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1.5 15V17.25C1.5 17.8467 1.73705 18.419 2.15901 18.841C2.58097 19.2629 3.15326 19.5 3.75 19.5H17.25C17.8467 19.5 18.419 19.2629 18.841 18.841C19.2629 18.419 19.5 17.8467 19.5 17.25V15M15 10.5L10.5 15M10.5 15L6 10.5M10.5 15V1.5'
                stroke='white'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            Resume
          </a>
        </li>

        <li className='flex-row items-center justify-between px-6 font-normal'>
          Switch theme
          <ThemeSwitcher />
        </li>
      </ul>
    </div>
  );
}
