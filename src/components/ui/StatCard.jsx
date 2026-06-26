import { useInView } from '../../hooks/useInView';
import { useCountUp } from '../../hooks/useCountUp';

export default function StatCard({ value, suffix = '', label, delay = 0 }) {
  const [ref, inView] = useInView();
  const count = useCountUp(value, inView);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`panel p-6 text-center transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <p className="font-mono text-3xl sm:text-4xl font-semibold text-signal">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-xs sm:text-sm text-ink-dim">{label}</p>
    </div>
  );
}
