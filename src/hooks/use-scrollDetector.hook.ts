import { useEffect, useState } from 'react';

const useScrollDetector = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateIsScrolled = () => {
      if (window.scrollY >= 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', updateIsScrolled);
    updateIsScrolled();
    return () => window.removeEventListener('scroll', updateIsScrolled);
  }, []);

  return isScrolled;
};

export default useScrollDetector;

//use to detect if you scrolled 100px or more,
//so that you can change the CSS of Navbar
