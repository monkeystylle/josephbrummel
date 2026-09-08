'use client';

import { ChevronsDown } from 'lucide-react';
import useScrollDetector from '@/hooks/use-scrollDetector.hook';

const ScrollArrow = () => {
  const isScrolled = useScrollDetector();

  return (
    <ChevronsDown
      size={70}
      aria-hidden
      className={`absolute inset-x-0 bottom-8 mx-auto text-gray-500 animate-blink max-lg:hidden ${
        isScrolled ? 'hidden' : ''
      }`}
    />
  );
};

export default ScrollArrow;
