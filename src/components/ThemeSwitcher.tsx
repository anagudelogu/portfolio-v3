import { useThemeContext } from '@/contexts/ThemeContext';
import { track } from '@vercel/analytics';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useThemeContext();

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    track('theme-switch');
  };

  return (
    <label className='swap swap-rotate active:!bg-transparent text-neutral'>
      {/* this hidden checkbox controls the state */}
      <input
        type='checkbox'
        checked={theme === 'dark'}
        onChange={handleThemeChange}
      />

      {/* sun icon */}
      <svg
        className='swap-on h-7 w-7'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M12 1.5V4.125M19.4247 4.57533L17.5685 6.4315M22.5 12H19.875M19.4247 19.4247L17.5685 17.5685M12 19.875V22.5M6.4315 17.5685L4.57533 19.4247M4.125 12H1.5M6.4315 6.4315L4.57533 4.57533M16.375 12C16.375 13.1603 15.9141 14.2731 15.0936 15.0936C14.2731 15.9141 13.1603 16.375 12 16.375C10.8397 16.375 9.72688 15.9141 8.90641 15.0936C8.08594 14.2731 7.625 13.1603 7.625 12C7.625 10.8397 8.08594 9.72688 8.90641 8.90641C9.72688 8.08594 10.8397 7.625 12 7.625C13.1603 7.625 14.2731 8.08594 15.0936 8.90641C15.9141 9.72688 16.375 10.8397 16.375 12Z'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>

      {/* moon icon */}
      <svg
        className='swap-off h-7 w-7'
        viewBox='0 0 26 26'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M24.4588 17.2526C22.9728 17.8719 21.3786 18.1897 19.7688 18.1876C13.0375 18.1876 7.5813 12.7313 7.5813 6.00006C7.5813 4.33756 7.9138 2.75381 8.5163 1.31006C6.29564 2.23645 4.39876 3.79925 3.06458 5.80163C1.7304 7.80401 1.01859 10.1564 1.0188 12.5626C1.0188 19.2938 6.47505 24.7501 13.2063 24.7501C15.6124 24.7503 17.9649 24.0385 19.9672 22.7043C21.9696 21.3701 23.5324 19.4732 24.4588 17.2526Z'
          stroke='currentColor'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </label>
  );
}
