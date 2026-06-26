import { motion } from 'motion/react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi';
import { navLinks, profile } from '../../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-base-border bg-base-panel">
      <div className="container-px py-14 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div>
          <p className="font-mono text-signal text-lg font-semibold mb-3">{profile.initials}/</p>
          <p className="text-ink-dim text-sm leading-relaxed max-w-xs">{profile.tagline}</p>
        </div>

        <div>
          <p className="eyebrow mb-4">Quick Links</p>
          <ul className="space-y-2">
            {navLinks.slice(0, 5).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ink-dim hover:text-signal transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Connect</p>
          <div className="flex items-center gap-3">
            {[
              { icon: <FiGithub size={16} />, href: profile.social.github, label: 'GitHub' },
              { icon: <FiLinkedin size={16} />, href: profile.social.linkedin, label: 'LinkedIn' },
              { icon: <FiTwitter size={16} />, href: profile.social.twitter, label: 'Twitter' },
              { icon: <FiMail size={16} />, href: profile.social.email, label: 'Email' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-md border border-base-border text-ink-dim hover:text-signal hover:border-signal transition-colors duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container-px py-6 border-t border-base-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-ink-dim font-mono">
          © {year} {profile.name}. All rights reserved.
        </p>
        <motion.button
          whileHover={{ y: -2 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex items-center gap-2 text-xs font-mono text-ink-dim hover:text-signal transition-colors"
        >
          Back to top <FiArrowUp size={14} />
        </motion.button>
      </div>
    </footer>
  );
}
