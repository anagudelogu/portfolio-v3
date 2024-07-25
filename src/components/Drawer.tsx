'use client';
import { useDrawerContext } from '@/contexts/DrawerContext';
import Sidebar from './Sidebar';
import { useThemeContext } from '@/contexts/ThemeContext';
import AnimatedBg from './AnimatedBg';

export default function Drawer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isOpen } = useDrawerContext();
  const { theme } = useThemeContext();

  return (
    <div
      className='drawer bg-base-200 transition-colors z-10'
      data-theme={theme}
    >
      <input
        checked={isOpen}
        id='my-drawer'
        type='checkbox'
        className='drawer-toggle'
        readOnly
      />
      <div className='drawer-content'>{children}</div>

      <Sidebar />
      <AnimatedBg />
    </div>
  );
}
