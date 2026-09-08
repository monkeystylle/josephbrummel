'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useScrollDetector from '@/hooks/use-scrollDetector.hook';
import MobileMenu from './MobileMenu';
import { NAV_LINKS } from '@/constants/constants';

const Navbar = () => {
  const isScrolled = useScrollDetector();
  const pathname = usePathname();

  // Below `lg` the bar holds nothing but the hamburger. With no links there is
  // no hamburger either, so the whole bar goes -- otherwise scrolling paints an
  // empty gradient strip across the top.
  const hasLinks = NAV_LINKS.length > 0;

  return (
    <div
      className={`fixed z-10 w-full bg-slate-100 ${hasLinks ? '' : 'max-lg:hidden'}`}
    >
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
        className={`ease-in-out-cubic relative mx-auto flex w-[90%] max-w-6xl items-center justify-between text-2xl font-medium text-neutral-800 transition-[height] duration-300 motion-reduce:transition-none ${
          isScrolled ? 'h-16' : 'h-20'
        }`}
      >
        {/* Brand is desktop-only. On tablet/mobile the hamburger is the whole
            navbar, and its panel carries its own Home entry instead. */}
        <Link
          href="/"
          className="flex touch-manipulation items-center gap-4 text-xl transition-colors duration-150 ease-out max-lg:hidden hover:text-neutral-400"
        >
          <span className="grid size-10 place-content-center bg-gray-500 text-lg text-white">
            JB
          </span>
          Joseph Brummel
        </Link>

        {/* Both menus are skipped entirely while NAV_LINKS is empty: an empty
            <ul> is dead markup, and a hamburger that opens nothing is worse.
            The brand above still links home at every width. */}
        {hasLinks && (
          <>
            {/* Desktop menu. Below `lg` this is replaced by MobileMenu's panel. */}
            <ul className="flex items-center gap-8 max-lg:hidden">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={pathname === link.href ? 'page' : undefined}
                    className="touch-manipulation text-xl transition-colors duration-150 ease-out max-xl:text-lg hover:text-neutral-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <MobileMenu />
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
