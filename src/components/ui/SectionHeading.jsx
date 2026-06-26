import { motion } from 'motion/react';
import { useInView } from '../../hooks/useInView';

/**
 * Standard section heading: eyebrow label + large title + optional description.
 * Index is only shown when explicitly passed and the section is genuinely
 * part of a numbered sequence (per design system rule).
 */
export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const [ref, inView] = useInView();
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div ref={ref} className={`max-w-2xl mb-14 ${alignClass}`}>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="eyebrow mb-3"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-3xl sm:text-4xl font-semibold text-balance"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-ink-dim leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
