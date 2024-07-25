'use client';
import { CSSProperties } from 'react';

export default function Orb({ animationSpeed }: { animationSpeed: number }) {
  return (
    <span
      className='relative w-8 h-8 bg-primary mx-8 rounded-full blur animate-orb orb-duration md:w-12 md:h-12 md:blur-lg lg:w-16 lg:h-16'
      style={{ '--i': animationSpeed } as CSSProperties}
    ></span>
  );
}
