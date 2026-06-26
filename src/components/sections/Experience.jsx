import { motion } from 'motion/react';
import SectionHeading from '../ui/SectionHeading';
import { experience } from '../../data/portfolioData';
import { useInView } from '../../hooks/useInView';

function TimelineItem({ item, index }) {
  const [ref, inView] = useInView();
  const isLast = index === experience.length - 1;

  return (
    <div ref={ref} className="relative pl-10 pb-10 last:pb-0">
      {!isLast && (
        <span className="absolute left-[7px] top-3 bottom-0 w-px bg-base-border" />
      )}
      <motion.span
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.3 }}
        className="absolute left-0 top-1 w-4 h-4 rounded-full bg-base-panel border-2 border-signal"
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="panel scan-border p-6"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
          <h3 className="font-display font-medium text-lg">{item.role}</h3>
          <span className="font-mono text-xs text-signal">{item.period}</span>
        </div>
        <p className="text-sm text-ink-dim font-medium mb-3">{item.org}</p>
        <p className="text-ink-dim text-sm leading-relaxed mb-4">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-signal/10 text-signal text-xs font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-py container-px">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've put these skills to work"
        description="Roles and programs that shaped how I think about security, software, and community."
      />

      <div className="max-w-2xl">
        {experience.map((item, i) => (
          <TimelineItem key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
