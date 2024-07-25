'use client';
import Orb from './Orb';

export default function AnimatedBg() {
  return (
    <div className='fixed top-16 left-8 w-full h-[calc(100%-70px)] -z-10 overflow-hidden flex pointer-events-none justify-between'>
      <Orb animationSpeed={15} />
      <Orb animationSpeed={11} />
      <Orb animationSpeed={13} />
      <Orb animationSpeed={16} />
      <Orb animationSpeed={8} />
    </div>
  );
}
