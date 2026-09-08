'use client';

import Link from 'next/link';
import useScrollDetector from '@/hooks/use-scrollDetector.hook';

const Navbar = () => {
  const isScrolled = useScrollDetector();

  return (
    <div className="fixed z-10 w-full bg-slate-100">
      {/* The scrolled treatment lives on its own layer so it can crossfade.
          `background-image` and `box-shadow` can't be transitioned smoothly,
          but opacity can — and it stays on the GPU. */}
      <div
        aria-hidden
        className={`ease-in-out-cubic pointer-events-none absolute inset-0 bg-linear-to-tr from-neutral-400 to-slate-100 shadow-md transition-opacity duration-300 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <nav
        className={`ease-in-out-cubic relative mx-auto flex w-[90%] max-w-6xl items-center text-2xl font-medium text-neutral-800 transition-[height] duration-300 motion-reduce:transition-none max-lg:hidden ${
          isScrolled ? 'h-16' : 'h-20'
        }`}
      >
        <div className="ml-auto flex items-center gap-4 text-xl">
          <div className="grid size-10 place-content-center bg-gray-500 text-lg text-white">
            JB
          </div>
          <Link
            href="/"
            className="transition-colors duration-150 ease-out hover:text-neutral-400"
          >
            Joseph Brummel
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
