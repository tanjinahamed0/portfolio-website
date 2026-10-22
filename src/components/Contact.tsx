import React, { useState } from 'react';
import { Send, Mail, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './icons/BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const form = e.currentTarget;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(form),
      });

      let result: { success?: boolean; message?: string } = {};
      try {
        result = await response.json();
      } catch {
        // Non-JSON response; fall through to the generic error below.
      }

      if (!response.ok || result.success !== true) {
        throw new Error(result.message || 'Something went wrong. Please try again.');
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error && err.message
          ? err.message
          : 'Something went wrong. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(false);
    setError(null);
  };

  return (
    <div id="contact" className="rounded-2xl bg-white dark:bg-[#0d1322]/90 border border-slate-200/90 dark:border-slate-800/80 p-6 md:p-8 backdrop-blur-sm flex flex-col justify-between shadow-sm dark:shadow-xl">
      <div>
        {/* Title */}
        <div className="flex items-center justify-between pb-3 mb-6 border-b border-slate-100 dark:border-slate-800/60">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide uppercase">
            GET IN TOUCH
          </h3>
          <span className="w-2.5 h-2.5 rounded-full bg-sky-500 dark:bg-cyan-400 shadow-[0_0_8px_rgba(14,165,233,0.8)] dark:shadow-[0_0_8px_#22d3ee]"></span>
        </div>

        {submitted ? (
          <div className="py-8 px-4 text-center rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-emerald-500/30 space-y-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 dark:text-emerald-400 mx-auto" />
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">Thanks, message sent!</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
              Thank you, <span className="text-sky-600 dark:text-cyan-400 font-semibold">{formData.name}</span>. Your message has been received. I'll get back to you shortly.
            </p>
            <button
              onClick={handleReset}
              className="mt-2 px-5 py-2 text-xs font-semibold rounded-lg bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:hover:text-white dark:hover:bg-slate-700 transition-colors"
            >
              Send Another Note
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Web3Forms access key */}
            <input
              type="hidden"
              name="access_key"
              value="64fa5c18-ce90-4c90-9187-79e7c511b1a6"
            />

            {/* Name Input */}
            <div>
              <label htmlFor="contact-name" className="sr-only">Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Name"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#070b14] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-500 dark:focus:border-cyan-400 focus:bg-white dark:focus:bg-[#070b14] focus:ring-1 focus:ring-sky-500 text-sm transition-all"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="contact-email" className="sr-only">Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#070b14] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-500 dark:focus:border-cyan-400 focus:bg-white dark:focus:bg-[#070b14] focus:ring-1 focus:ring-sky-500 text-sm transition-all"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="contact-message" className="sr-only">Message</label>
              <textarea
                id="contact-message"
                rows={4}
                name="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Message"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#070b14] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-500 dark:focus:border-cyan-400 focus:bg-white dark:focus:bg-[#070b14] focus:ring-1 focus:ring-sky-500 text-sm transition-all resize-none"
              ></textarea>
            </div>

            {/* Error Message */}
            {error && (
              <p
                role="alert"
                className="px-4 py-3 rounded-xl text-sm font-medium bg-red-50 text-red-700 border border-red-200 dark:bg-red-500/10 dark:text-red-400 dark:border-red-500/30"
              >
                {error}
              </p>
            )}

            {/* Gradient Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-6 rounded-xl text-white font-semibold dark:text-slate-950 dark:font-bold bg-gradient-to-r from-sky-500 via-cyan-500 to-purple-600 dark:from-[#00f2fe] dark:via-[#38bdf8] dark:to-[#9333ea] hover:opacity-95 shadow-[0_4px_20px_rgba(14,165,233,0.3)] dark:shadow-[0_0_20px_rgba(0,242,254,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              <span>{loading ? 'Transmitting...' : 'Submit'}</span>
              {!loading && <Send size={15} className="ml-1" />}
            </button>
          </form>
        )}
      </div>

      {/* Social Links underneath the form */}
      <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/60 flex items-center space-x-4 text-slate-500 dark:text-slate-400">
        <a
          href={PERSONAL_INFO.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-sky-500 hover:text-sky-600 dark:hover:border-cyan-400 dark:hover:text-cyan-400 transition-colors shadow-2xs"
        >
          <LinkedinIcon size={18} />
        </a>

        <a
          href={PERSONAL_INFO.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-sky-500 hover:text-sky-600 dark:hover:border-cyan-400 dark:hover:text-cyan-400 transition-colors shadow-2xs"
        >
          <GithubIcon size={18} />
        </a>

        <a
          href={`mailto:${PERSONAL_INFO.socials.email}`}
          aria-label="Send Email"
          className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-sky-500 hover:text-sky-600 dark:hover:border-cyan-400 dark:hover:text-cyan-400 transition-colors shadow-2xs"
        >
          <Mail size={18} />
        </a>
      </div>
    </div>
  );
};
