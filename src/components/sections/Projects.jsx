import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="section-py container-px bg-base-panel/40">
      <SectionHeading
        eyebrow="Selected Work"
        title="Projects built to solve real problems"
        description="A mix of social-impact builds and practical systems work — each one taught me something different about shipping software."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
}
