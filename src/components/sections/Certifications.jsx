import { FiAward, FiDownload } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { certifications } from '../../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="section-py container-px bg-base-panel/40">
      <SectionHeading
        eyebrow="Certifications"
        title="Formal training behind the practice"
        description="Verified credentials from cybersecurity and technology programs I've completed."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {(() => {
          const unique = certifications.reduce((acc, cert) => {
            if (!acc.some((c) => c.title === cert.title)) acc.push(cert);
            return acc;
          }, []);
          return unique.map((cert, i) => (
          <Card key={cert.id} delay={i * 0.08} className="text-center flex flex-col items-center">
            <span className="p-3 rounded-full bg-signal/10 text-signal mb-4">
              <FiAward size={22} />
            </span>
            <h3 className="font-display font-medium text-sm text-white mb-1">{cert.title}</h3>
            <p className="text-xs text-slate-300 mb-1">{cert.issuer}</p>
            <p className="text-xs font-mono text-signal mb-5">{cert.date}</p>

            {cert.fileSrc ? (
              <a
                href={cert.fileSrc}
                download
                className="flex items-center gap-1.5 text-xs font-medium text-ink-dim hover:text-signal transition-colors"
              >
                <FiDownload size={13} /> Download
              </a>
            ) : (
              <span className="flex items-center gap-1.5 text-xs text-ink-dim cursor-default">
                <FiDownload size={13} /> Coming soon
              </span>
            )}
          </Card>
          ));
        })()}
      </div>
    </section>
  );
}
