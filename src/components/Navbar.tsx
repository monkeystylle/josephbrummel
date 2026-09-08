'use client';

import Link from 'next/link';
import useScrollDetector from '@/hooks/use-scrollDetector.hook';

const Navbar = () => {
  const isScrolled = useScrollDetector();

  return (
    <div
      className={`fixed z-10 w-full transition-colors duration-300 ease-out ${
        isScrolled
          ? 'bg-linear-to-tr from-neutral-400 to-slate-100 shadow-md'
          : 'bg-slate-100'
      }`}
    >
      <nav
        className={`mx-auto flex w-[90%] max-w-6xl items-center text-2xl font-medium text-neutral-800 transition-[height] duration-200 ease-in-out max-lg:hidden ${
          isScrolled ? 'h-16' : 'h-20'
        }`}
      >
        <div className="ml-auto flex items-center gap-4 text-xl">
          <div className="grid size-10 place-content-center bg-gray-500 text-lg text-white">
            JB
          </div>
          <Link href="/" className="hover:text-neutral-400">
            Joseph Bayangos
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
