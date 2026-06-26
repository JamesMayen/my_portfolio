import { motion } from 'motion/react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function ProjectCard({ project, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6 }}
      className="panel scan-border overflow-hidden group"
    >
      <div className="relative h-44 bg-gradient-to-br from-base-panel to-base flex items-center justify-center overflow-hidden">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <span className="font-mono text-xs text-ink-dim uppercase tracking-wide">
            Project preview placeholder
          </span>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="font-display font-medium text-lg mb-2">{project.title}</h3>
        <p className="text-ink-dim text-sm leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md border border-base-border text-xs font-mono text-ink-dim"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-ink-dim hover:text-signal transition-colors"
            >
              <FiGithub size={15} /> Code
            </a>
          )}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-ink-dim hover:text-signal transition-colors"
            >
              <FiExternalLink size={15} /> Live demo
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-sm text-ink-dim/50 cursor-not-allowed">
              <FiExternalLink size={15} /> Demo coming soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
