import { useEffect, useState } from 'react';

const useScrollDetector = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateIsScrolled = () => {
      setIsScrolled(window.scrollY >= 100);
    };
    // passive: the handler never calls preventDefault, so the browser can
    // keep scrolling on the compositor instead of waiting on this listener.
    window.addEventListener('scroll', updateIsScrolled, { passive: true });
    updateIsScrolled();
    return () => window.removeEventListener('scroll', updateIsScrolled);
  }, []);

  return isScrolled;
};

export default useScrollDetector;

//use to detect if you scrolled 100px or more,
//so that you can change the CSS of Navbar
