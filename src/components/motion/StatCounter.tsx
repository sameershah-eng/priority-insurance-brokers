import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';

interface StatCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

export function StatCounter({ value, className = '', duration = 1200 }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const [displayValue, setDisplayValue] = useState<string>('0');

  useEffect(() => {
    if (!isInView) return;

    // Extract prefix (e.g. "$"), numeric part (e.g. "18000"), and suffix (e.g. "M", " day", " hrs")
    const match = value.match(/^([^\d]*)(\d+[\d,.]*)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1] || '';
    const numericStr = match[2].replace(/,/g, '');
    const suffix = match[3] || '';
    const targetNumber = parseFloat(numericStr);

    if (isNaN(targetNumber)) {
      setDisplayValue(value);
      return;
    }

    const isInteger = !numericStr.includes('.');
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentNumber = targetNumber * easedProgress;

      let formattedNumber: string;
      if (isInteger) {
        const rounded = Math.round(currentNumber);
        formattedNumber = rounded.toLocaleString();
      } else {
        formattedNumber = currentNumber.toFixed(1);
      }

      setDisplayValue(`${prefix}${formattedNumber}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
