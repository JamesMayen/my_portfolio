import { useState } from 'react';
import { motion } from 'motion/react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend, FiCheck } from 'react-icons/fi';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { profile } from '../../data/portfolioData';

// NOTE: To enable real email sending, install @emailjs/browser (already in
// package.json) and uncomment the import + send call below. You'll need a
// Service ID, Template ID, and Public Key from https://www.emailjs.com
// import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Uncomment once EmailJS credentials above are filled in:
      // await emailjs.send(
      //   EMAILJS_SERVICE_ID,
      //   EMAILJS_TEMPLATE_ID,
      //   form,
      //   EMAILJS_PUBLIC_KEY
      // );

      // Placeholder behavior until EmailJS is wired up:
      await new Promise((resolve) => setTimeout(resolve, 900));

      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      console.error('Email send failed:', err);
      setStatus('error');
    }
  };

  const contactDetails = [
    { icon: <FiMail size={16} />, label: profile.email, href: profile.social.email },
    { icon: <FiPhone size={16} />, label: profile.phone, href: `tel:${profile.phone}` },
    { icon: <FiMapPin size={16} />, label: profile.location, href: null },
    { icon: <FiLinkedin size={16} />, label: 'LinkedIn', href: profile.social.linkedin },
    { icon: <FiGithub size={16} />, label: 'GitHub', href: profile.social.github },
  ];

  return (
    <section id="contact" className="section-py container-px">
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk security, software, or opportunity"
        description="Open to internships, collaborations, speaking invitations, and freelance development work."
      />

      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12">
        <div className="space-y-4">
          {contactDetails.map((item, i) => {
            const Wrapper = item.href ? 'a' : 'div';
            return (
              <Wrapper
                key={i}
                href={item.href}
                target={item.href?.startsWith('http') ? '_blank' : undefined}
                rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 panel p-4 text-sm text-ink-dim hover:text-signal hover:border-signal transition-colors duration-200"
              >
                <span className="text-signal">{item.icon}</span>
                {item.label}
              </Wrapper>
            );
          })}
        </div>

        <form onSubmit={handleSubmit} className="panel p-6 sm:p-8 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-ink-dim mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full bg-base border border-base-border rounded-lg px-4 py-2.5 text-sm focus:border-signal outline-none transition-colors"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-mono text-ink-dim mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full bg-base border border-base-border rounded-lg px-4 py-2.5 text-sm focus:border-signal outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs font-mono text-ink-dim mb-2">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              value={form.subject}
              onChange={handleChange}
              className="w-full bg-base border border-base-border rounded-lg px-4 py-2.5 text-sm focus:border-signal outline-none transition-colors"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-mono text-ink-dim mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full bg-base border border-base-border rounded-lg px-4 py-2.5 text-sm focus:border-signal outline-none transition-colors resize-none"
              placeholder="Tell me a bit about what you have in mind..."
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            className="w-full sm:w-auto justify-center"
            icon={
              status === 'sent' ? <FiCheck size={16} /> : <FiSend size={16} />
            }
          >
            {status === 'sending' && 'Sending...'}
            {status === 'sent' && 'Message sent'}
            {status === 'error' && 'Try again'}
            {status === 'idle' && 'Send message'}
          </Button>

          {status === 'error' && (
            <p className="text-xs text-red-400">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
