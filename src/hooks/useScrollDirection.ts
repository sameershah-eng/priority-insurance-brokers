import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Past 80px, header becomes solid with subtle shadow
      setIsScrolled(currentScrollY > 80);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > 140) {
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 5) {
          setIsVisible(false); // scrolling down
        } else if (lastScrollY - currentScrollY > 5) {
          setIsVisible(true); // scrolling up
        }
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, isScrolled, isVisible };
}
