import DownloadResumeBtn from './DownloadResumeBtn';
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
