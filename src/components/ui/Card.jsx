import { motion } from 'motion/react';

/**
 * Base card with the site's signature "scan" hover treatment — a thin
 * green line sweeps the border, like a security scan completing.
 * This is the one recurring motif used across skills, projects,
 * leadership, and certification cards.
 */
export default function Card({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      className={`panel scan-border p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
