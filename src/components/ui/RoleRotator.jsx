import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { profile } from '../../data/portfolioData';

/**
 * Cycles through professional roles in a monospace, terminal-like style
 * with a blinking cursor — reinforces the developer/security identity
 * without leaning on a full terminal theme for the whole page.
 */
export default function RoleRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % profile.roles.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 font-mono text-base sm:text-lg text-signal h-7">
      <span className="text-ink-dim">{'>'}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={profile.roles[index]}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
        >
          {profile.roles[index]}
        </motion.span>
      </AnimatePresence>
      <span className="w-2 h-5 bg-signal animate-blink" />
    </div>
  );
}
