import { FiShield, FiCode, FiWifi, FiTool, FiUsers } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import SkillBar from '../ui/SkillBar';
import { skillCategories } from '../../data/portfolioData';

const icons = {
  cybersecurity: FiShield,
  webdev: FiCode,
  networking: FiWifi,
  tools: FiTool,
  soft: FiUsers,
};

export default function Skills() {
  return (
    <section id="skills" className="section-py container-px bg-base-panel/40">
      <SectionHeading
        eyebrow="Capabilities"
        title="Skills across security, development, and people"
        description="What I currently practice, organized by category rather than a single skill list."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat, i) => {
          const Icon = icons[cat.id] || FiCode;
          return (
            <Card key={cat.id} delay={i * 0.08} className={cat.id === 'soft' ? 'sm:col-span-2 lg:col-span-1' : ''}>
              <div className="flex items-center gap-3 mb-5">
                <span className="p-2 rounded-md bg-signal/10 text-signal">
                  <Icon size={18} />
                </span>
                <h3 className="font-display font-medium text-lg">{cat.title}</h3>
              </div>
              {cat.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </Card>
          );
        })}
      </div>
    </section>
  );
}
