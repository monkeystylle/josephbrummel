'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, type NavLink } from '@/constants/constants';

// The panel gets its own Home entry. On desktop the brand in the bar plays
// that role, but a hamburger panel should not rely on the visitor knowing to
// close it and hit the logo.
const PANEL_LINKS: NavLink[] = [{ name: 'Home', href: '/' }, ...NAV_LINKS];

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Close on navigation, otherwise the panel stays open over the new page.
  // Adjusted during render rather than in an effect: an effect would paint the
  // stale open panel first, then close it on a second pass.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);

    // Lock the page behind the panel so the wrong layer doesn't scroll.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Move focus into the panel; without this, tabbing continues from the
    // trigger and walks straight through the page underneath.
    panelRef.current?.focus();

    // Captured now: by cleanup time the ref may point somewhere else.
    const trigger = triggerRef.current;

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
      // Send focus back to the trigger so keyboard users don't restart at <body>.
      trigger?.focus();
    };
  }, [isOpen]);

  return (
    <div className="ml-auto lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        className="grid size-11 touch-manipulation place-content-center text-neutral-800 transition-colors duration-150 ease-out hover:text-neutral-500"
      >
        <Menu size={28} aria-hidden />
      </button>

      {/* Backdrop and panel stay mounted so both directions animate. `visibility`
          is in the transition list so it flips to hidden only after the exit
          finishes -- that keeps the panel off the tab order without cutting
          the animation short. */}
      <div
        onClick={() => setIsOpen(false)}
        aria-hidden
        className={`ease-in-out-cubic fixed inset-0 bg-neutral-900/40 transition-[opacity,visibility] duration-300 motion-reduce:transition-[opacity,visibility] ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      />

      <div
        id="mobile-nav-panel"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        tabIndex={-1}
        inert={!isOpen}
        className={`ease-in-out-cubic fixed inset-y-0 right-0 flex w-[min(20rem,80vw)] flex-col bg-slate-100 shadow-xl transition-[transform,visibility] duration-300 outline-none motion-reduce:transition-[opacity,visibility] ${
          isOpen ? 'visible translate-x-0' : 'invisible translate-x-full'
        }`}
      >
        <div className="flex h-20 items-center justify-end px-[5%]">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
            className="grid size-11 touch-manipulation place-content-center text-neutral-800 transition-colors duration-150 ease-out hover:text-neutral-500"
          >
            <X size={28} aria-hidden />
          </button>
        </div>

        <nav className="flex flex-col px-[5%]">
          {PANEL_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              aria-current={pathname === link.href ? 'page' : undefined}
              className="touch-manipulation border-b border-neutral-300 py-4 text-2xl font-medium text-neutral-800 transition-colors duration-150 ease-out max-sm:text-xl hover:text-neutral-500"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
