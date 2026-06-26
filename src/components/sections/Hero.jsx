import { motion } from 'motion/react';
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import Button from '../ui/Button';
import RoleRotator from '../ui/RoleRotator';
import GridBackground from '../ui/GridBackground';
import { profile } from '../../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <GridBackground />

      <div className="container-px relative z-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        {/* Text column */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-5"
          >
            Available for opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-balance"
          >
            Hi, I&apos;m James Mayen
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5"
          >
            <RoleRotator />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-ink-dim text-lg leading-relaxed max-w-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button as="a" href={profile.cvSrc} variant="primary" icon={<FiDownload size={16} />}>
              Download CV
            </Button>
            <Button
              as="a"
              href="#contact"
              variant="ghost"
              icon={<FiMail size={16} />}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex items-center gap-4"
          >
            {[
              { icon: <FiGithub size={18} />, href: profile.social.github },
              { icon: <FiLinkedin size={18} />, href: profile.social.linkedin },
              { icon: <FiTwitter size={18} />, href: profile.social.twitter },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-md border border-base-border text-ink-dim hover:text-signal hover:border-signal transition-colors duration-200"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Portrait column with reticle frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm aspect-square"
        >
          {/* Corner brackets — the reticle/scan motif */}
          {['-top-3 -left-3 border-t-2 border-l-2', '-top-3 -right-3 border-t-2 border-r-2', '-bottom-3 -left-3 border-b-2 border-l-2', '-bottom-3 -right-3 border-b-2 border-r-2'].map(
            (pos, i) => (
              <span
                key={i}
                className={`absolute ${pos} w-8 h-8 border-signal/80 z-20`}
              />
            )
          )}

          <div className="relative w-full h-full rounded-2xl overflow-hidden panel">
            {profile.portraitSrc ? (
              <img
                src={profile.portraitSrc}
                alt={`Portrait of ${profile.name}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-base-panel to-base text-center px-6">
                <span className="font-mono text-5xl text-signal/70 mb-3">{profile.initials}</span>
                <span className="text-xs font-mono text-ink-dim uppercase tracking-wide">
                  Portrait placeholder
                  <br />
                  Add image at src/assets/images/portrait.jpg
                </span>
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 h-px bg-signal/60 animate-scan-x" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
