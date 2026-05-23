import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SendIcon, LinkedinIcon, CopyIcon, CheckIcon } from 'lucide-react';

declare global {
  interface Window {
    emailjs: any;
  }
}

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('daniel.xr.he@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await window.emailjs.send(
        'service_4z7e468',
        'template_qi5x2yy',
        {
          form_type: 'Portfolio Contact',
          from_name: name,
          from_email: email,
          grade: 'N/A',
          subject: 'Portfolio enquiry',
          plan: 'N/A',
          notes: message,
        }
      );
      setStatus('sent');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };
  return (
    <section id="contact" className="w-full bg-warm-50 py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}>
          
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Get in Touch
          </h2>
          <div className="mt-2 mx-auto w-12 h-1 bg-accent rounded-full" />
          <p className="mt-4 font-body text-gray-500 text-center text-sm md:text-base">
            Open to product, operations, and consulting roles in NYC — feel free to reach out directly.
          </p>

          {status === 'sent' ? (
            <div className="mt-8 text-center py-12 px-6 bg-white rounded-xl border border-warm-100 shadow-sm">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-2">Message received!</h3>
              <p className="font-body text-gray-500 text-sm">I'll get back to you within a day or two.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block font-body text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Name</label>
                  <input id="contact-name" type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className="w-full px-4 py-2.5 bg-white border border-warm-200 rounded-lg font-body text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block font-body text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Email</label>
                  <input id="contact-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="w-full px-4 py-2.5 bg-white border border-warm-200 rounded-lg font-body text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors" />
                </div>
              </div>
              <div>
                <label htmlFor="contact-message" className="block font-body text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Message</label>
                <textarea id="contact-message" required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="What would you like to discuss?" className="w-full px-4 py-2.5 bg-white border border-warm-200 rounded-lg font-body text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none" />
              </div>
              <button type="submit" disabled={status === 'sending'} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white font-body font-semibold rounded-lg hover:bg-accent-dark transition-colors shadow-sm disabled:opacity-60 disabled:cursor-not-allowed">
                <SendIcon className="w-4 h-4" />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'error' && (
                <p className="text-sm text-red-500 mt-2">Something went wrong — please email <a href="mailto:daniel.xr.he@gmail.com" className="underline">daniel.xr.he@gmail.com</a> directly.</p>
              )}
            </form>
          )}

          <div className="mt-6 pt-6 border-t border-warm-100 flex items-center justify-center gap-4">
            <a href="https://linkedin.com/in/h-dan/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-body text-sm text-gray-500 hover:text-accent transition-colors">
              <LinkedinIcon className="w-4 h-4" />
              linkedin.com/in/h-dan
            </a>
            <span className="text-gray-300">·</span>
            <button onClick={copyEmail} className="inline-flex items-center gap-1.5 font-body text-sm text-gray-500 hover:text-accent transition-colors cursor-pointer">
              {copied ? <CheckIcon className="w-3.5 h-3.5 text-green-500" /> : <CopyIcon className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'daniel.xr.he@gmail.com'}</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );

}