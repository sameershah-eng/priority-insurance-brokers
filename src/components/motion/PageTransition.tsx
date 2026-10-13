import React, { useEffect, useState, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export function PageTransition({ children }: { children: ReactNode }) {
  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 400);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* Top Animated Gradient Route Loading Bar */}
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0 }}
            className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#0F766E] via-[#1D4ED8] to-[#EE7625] z-50 pointer-events-none"
          />
        )}
      </AnimatePresence>

      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="w-full"
      >
        {children}
      </motion.div>
    </>
  );
}
