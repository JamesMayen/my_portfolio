import { motion } from 'motion/react';

/**
 * Subtle animated grid + radial glow used behind the hero. Evokes a
 * scanning/network-map atmosphere without being literal or noisy.
 */
export default function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base/40 to-base" />

      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(57,255,136,0.16) 0%, transparent 70%)',
        }}
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Horizontal scan line sweeping down once on load */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-signal/40"
        initial={{ top: '0%', opacity: 0 }}
        animate={{ top: '100%', opacity: [0, 1, 0] }}
        transition={{ duration: 2.2, ease: 'easeInOut' }}
      />
    </div>
  );
}
