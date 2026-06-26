import { FiGlobe, FiMic, FiUsers, FiHeart } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { leadership } from '../../data/portfolioData';

const icons = [FiGlobe, FiMic, FiUsers, FiHeart];

export default function Leadership() {
  return (
    <section id="leadership" className="section-py container-px">
      <SectionHeading
        eyebrow="Leadership & Global Engagement"
        title="Representing youth voices in digital policy"
        description="Technology decisions made today shape who gets included tomorrow — this is where I try to make sure that includes us."
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {leadership.map((item, i) => {
          const Icon = icons[i % icons.length];
          return (
            <Card key={item.id} delay={i * 0.08} className="flex gap-4">
              <span className="shrink-0 p-3 rounded-md bg-signal/10 text-signal h-fit">
                <Icon size={20} />
              </span>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-display font-medium text-base text-white">{item.title}</h3>
                </div>
                <p className="text-xs font-mono text-white mb-2">{item.scope}</p>
                <p className="text-sm text-ink-dim leading-relaxed">{item.description}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
