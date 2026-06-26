import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="font-mono text-signal text-sm mb-4">ERROR 404</p>
      <h1 className="text-3xl sm:text-4xl font-semibold mb-4">Page not found</h1>
      <p className="text-ink-dim max-w-md mb-8">
        The page you&apos;re looking for doesn&apos;t exist, or it moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 rounded-lg bg-signal text-base font-medium text-sm hover:shadow-[0_0_24px_rgba(57,255,136,0.45)] transition-shadow"
      >
        Back to home
      </Link>
    </div>
  );
}
