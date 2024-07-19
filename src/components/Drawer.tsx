'use client';
import { useDrawerContext } from '@/contexts/DrawerContext';
import Sidebar from './Sidebar';

export default function Drawer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isOpen } = useDrawerContext();

  return (
    <div className='drawer'>
      <input
        checked={isOpen}
        id='my-drawer'
        type='checkbox'
        className='drawer-toggle'
        readOnly
      />
      <div className='drawer-content'>{children}</div>

      <Sidebar />
    </div>
  );
}
