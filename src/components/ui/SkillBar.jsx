import { motion } from 'motion/react';
import { useInView } from '../../hooks/useInView';

export default function SkillBar({ name, level }) {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className="mb-4 last:mb-0">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-ink">{name}</span>
        <span className="text-xs font-mono text-ink-dim">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-base-border overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="h-full rounded-full bg-signal"
        />
      </div>
    </div>
  );
}
