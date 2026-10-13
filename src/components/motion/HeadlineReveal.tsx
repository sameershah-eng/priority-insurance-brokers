import React from 'react';
import { motion } from 'motion/react';

interface HeadlineRevealProps {
  text: string;
  className?: string;
  accentWord?: string;
  accentClassName?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'span';
}

export function HeadlineReveal({
  text,
  className = '',
  accentWord,
  accentClassName = 'font-serif-accent font-normal italic text-[#EE7625]',
  delay = 0.1,
  as = 'h2'
}: HeadlineRevealProps) {
  const words = text.split(' ');

  const Tag = as as any;

  return (
    <Tag className={className}>
      {words.map((word, index) => {
        const isAccent = accentWord && word.toLowerCase().includes(accentWord.toLowerCase());
        return (
          <span
            key={index}
            className="inline-block overflow-hidden align-bottom mr-[0.25em] last:mr-0 pb-[0.08em]"
          >
            <motion.span
              initial={{ y: '110%', opacity: 0 }}
              whileInView={{ y: '0%', opacity: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{
                duration: 0.65,
                delay: delay + index * 0.045,
                ease: [0.22, 1, 0.36, 1]
              }}
              className={`inline-block ${isAccent ? accentClassName : ''}`}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}
