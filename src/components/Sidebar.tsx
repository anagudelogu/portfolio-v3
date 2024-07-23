import Link from 'next/link';
import DownloadResumeBtn from './DownloadResumeBtn';
import ThemeSwitcher from './ThemeSwitcher';
import { useDrawerContext } from '@/contexts/DrawerContext';

export default function Sidebar() {
  const { setIsOpen } = useDrawerContext();

  const handleClick = () => {
    setIsOpen(false);
  };
  return (
    <div className='drawer-side mt-[65px] lg:hidden'>
      <label
        htmlFor='my-drawer'
        aria-label='close sidebar'
        className='drawer-overlay'
        onClick={() => setIsOpen(false)}
      ></label>
      <ul className='menu menu-lg bg-base-200 text-neutral text-lg font-semibold w-dvw p-4 h-[calc(100dvh-64px)] flex flex-col gap-4 sm:w-96'>
        <li>
          <Link href='#about' onClick={handleClick}>
            About me
          </Link>
        </li>
        <li>
          <Link href='#experience' onClick={handleClick}>
            Experience
          </Link>
        </li>
        <li>
          <Link href='#contact' onClick={handleClick}>
            Contact
          </Link>
        </li>

        <li className='px-6'>
          <DownloadResumeBtn />
        </li>

        <li className='flex-row items-center justify-between px-6 font-normal'>
          Switch theme
          <ThemeSwitcher />
        </li>
      </ul>
    </div>
  );
}
