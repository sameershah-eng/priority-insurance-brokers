import React, { useRef, useState, ReactNode } from 'react';
import { motion, useSpring } from 'motion/react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function MagneticButton({
  children,
  className = '',
  onClick,
  strength = 0.22,
  type = 'button',
  disabled = false
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { damping: 18, stiffness: 220, mass: 0.2 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || disabled) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;

    // Limit maximum pull to 7px so it stays refined and doesn't jitter
    const clampX = Math.max(-7, Math.min(7, distanceX));
    const clampY = Math.max(-7, Math.min(7, distanceY));

    x.set(clampX);
    y.set(clampY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={buttonRef}
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      whileTap={{ scale: 0.97 }}
      className={`group relative transition-shadow ${className}`}
    >
      {children}
    </motion.button>
  );
}
