import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiSend,
  FiCheck,
  FiAlertCircle,
} from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { profile } from '../../data/portfolioData';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const isEmailJSConfigured = !!(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

const initialForm = { name: '', email: '', subject: '', message: '' };

const validate = (form) => {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Full name is required';
  else if (form.name.trim().length < 2) errors.name = 'Please enter at least 2 characters';
  if (!form.email.trim()) errors.email = 'Email address is required';
  else if (!/\S+@\S+\.\S+/.test(form.email)) errors.email = 'Please enter a valid email address';
  if (!form.subject.trim()) errors.subject = 'Subject is required';
  else if (form.subject.trim().length < 3) errors.subject = 'Subject must be at least 3 characters';
  if (!form.message.trim()) errors.message = 'Message is required';
  else if (form.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';
  return errors;
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [honeypot, setHoneypot] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot — silently ignore if filled (bot)
    if (honeypot.trim() !== '') return;

    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    if (!isEmailJSConfigured) {
      if (import.meta.env.DEV) {
        console.error(
          'EmailJS is not configured. Set VITE_EMAILJS_SERVICE_ID, ' +
            'VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY in your .env.local file.'
        );
      }
      setStatus('error');
      return;
    }

    setStatus('sending');

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: form.name.trim(),
        from_email: form.email.trim(),
        reply_to: form.email.trim(),
        subject: form.subject.trim() || 'Portfolio Contact',
        message: form.message.trim(),
      }, PUBLIC_KEY);

      setStatus('sent');
      setForm(initialForm);
      setErrors({});
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('Email send failed:', err);
      setStatus('error');
    }
  };

  const fieldClass = (field) =>
    `w-full bg-base-panel border rounded-lg px-4 py-2.5 text-sm text-ink focus:border-signal focus:ring-1 focus:ring-signal/20 outline-none transition-colors ${
      errors[field]
        ? 'border-red-400 focus:border-red-400 focus:ring-red-400/30'
        : 'border-base-border'
    }`;

  const labelClass = (field) =>
    `block text-xs font-mono mb-2 ${errors[field] ? 'text-red-400' : 'text-ink-dim'}`;

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

        <form
          onSubmit={handleSubmit}
          className="panel p-6 sm:p-8 space-y-5"
          noValidate
          aria-label="Send a message"
        >
          {/* Honeypot field — hidden from users, catches bots */}
          <div className="hidden">
            <label htmlFor="website">Don&apos;t fill this out if you are human</label>
            <input
              id="website"
              name="website"
              type="text"
              autoComplete="off"
              tabIndex={-1}
              aria-hidden="true"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className={labelClass('name')}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                value={form.name}
                onChange={handleChange}
                disabled={status === 'sending'}
                className={fieldClass('name')}
                placeholder="Your full name"
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-red-400">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className={labelClass('email')}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                value={form.email}
                onChange={handleChange}
                disabled={status === 'sending'}
                className={fieldClass('email')}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs text-red-400">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="subject" className={labelClass('subject')}>
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              aria-required="true"
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
              value={form.subject}
              onChange={handleChange}
              disabled={status === 'sending'}
              className={fieldClass('subject')}
              placeholder="What's this about?"
            />
            {errors.subject && (
              <p id="subject-error" className="mt-1.5 text-xs text-red-400">
                {errors.subject}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className={labelClass('message')}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
              rows={5}
              value={form.message}
              onChange={handleChange}
              disabled={status === 'sending'}
              className={fieldClass('message') + ' resize-none'}
              placeholder="Tell me a bit about what you have in mind..."
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-xs text-red-400">
                {errors.message}
              </p>
            )}
          </div>

          <div className="flex items-center gap-4">
            <Button
              type="submit"
              variant="primary"
              className="w-full sm:w-auto justify-center"
              disabled={status === 'sending'}
              icon={status === 'sent' ? <FiCheck size={16} /> : <FiSend size={16} />}
            >
              {status === 'sending' && 'Sending...'}
              {status === 'sent' && 'Message Sent'}
              {status === 'error' && 'Try again'}
              {status === 'idle' && 'Send Message'}
            </Button>

            <AnimatePresence>
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="text-xs text-red-400 flex items-center gap-1.5"
                  aria-live="polite"
                >
                  <FiAlertCircle size={14} />
                  Unable to send your message right now. Please try again later.
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {status === 'sent' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-start gap-3 p-4 rounded-lg bg-signal/10 border border-signal/30"
                aria-live="polite"
              >
                <FiCheck size={16} className="text-signal mt-0.5" />
                <p className="text-sm text-ink">
                  Thanks for reaching out. Your message has been sent successfully.
                  I&apos;ll get back to you as soon as possible.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </section>
  );
}
