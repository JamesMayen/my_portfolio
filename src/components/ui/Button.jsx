import { motion } from 'motion/react';

const variants = {
  primary:
    'bg-signal text-base hover:shadow-[0_0_24px_rgba(57,255,136,0.45)] border border-signal',
  ghost:
    'bg-transparent text-ink border border-base-border hover:border-signal hover:text-signal',
  light:
    'bg-base text-light-panel hover:opacity-90',
};

/**
 * Shared button used across CTAs. `as` lets it render as an <a> for links
 * or stay a native <button> for form/JS actions.
 */
export default function Button({
  children,
  variant = 'primary',
  as = 'button',
  href,
  onClick,
  type = 'button',
  className = '',
  icon,
  target,
  rel,
}) {
  const classes = `inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm
    transition-all duration-300 ${variants[variant]} ${className}`;

  const content = (
    <>
      {icon}
      {children}
    </>
  );

  const MotionTag = motion[as === 'a' ? 'a' : 'button'];

  return (
    <MotionTag
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      href={as === 'a' ? href : undefined}
      type={as === 'button' ? type : undefined}
      onClick={onClick}
      className={classes}
      target={target}
      rel={rel}
    >
      {content}
    </MotionTag>
  );
}
