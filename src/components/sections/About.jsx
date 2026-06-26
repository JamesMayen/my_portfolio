import { motion } from 'motion/react';
import SectionHeading from '../ui/SectionHeading';
import StatCard from '../ui/StatCard';
import { about, stats } from '../../data/portfolioData';
import { useInView } from '../../hooks/useInView';

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="section-py container-px">
      <SectionHeading
        eyebrow="About"
        title="Building skills at the intersection of code and security"
        description="A short version of how I got here, and where I'm trying to go."
      />

      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12">
        <div ref={ref} className="space-y-5">
          {about.story.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-ink-dim leading-relaxed"
            >
              {para}
            </motion.p>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="panel border-l-2 border-l-signal p-6 mt-2"
          >
            <p className="eyebrow mb-2">Mission</p>
            <p className="text-ink leading-relaxed">{about.mission}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-4 self-start">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.id}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={i * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
