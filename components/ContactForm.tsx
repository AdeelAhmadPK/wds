'use client';

import { useState } from 'react';
import { Send, CheckCircle, Loader } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', country: '', service: '', message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', country: '', service: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-32 dark:bg-[#050505] bg-white">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6" style={{letterSpacing: '-0.03em'}}>
            <span className="text-gray-900 dark:text-white">Get in </span>
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-[#888888]">
            Let's discuss how we can help grow your business
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="premium-card p-12">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 dark:text-[#e0e0e0] font-bold mb-3 text-sm">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 dark:bg-[#1a1a1a] border-2 border-gray-200 dark:border-[#1a1a1a] text-gray-900 dark:text-white focus:border-[#00ff88] focus:ring-2 focus:ring-[#00ff88]/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 dark:text-[#e0e0e0] font-bold mb-3 text-sm">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 dark:bg-[#1a1a1a] border-2 border-gray-200 dark:border-[#1a1a1a] text-gray-900 dark:text-white focus:border-[#00ff88] focus:ring-2 focus:ring-[#00ff88]/20 outline-none transition-all"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 dark:text-[#e0e0e0] font-bold mb-3 text-sm">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 dark:bg-[#1a1a1a] border-2 border-gray-200 dark:border-[#1a1a1a] text-gray-900 dark:text-white focus:border-[#00ff88] focus:ring-2 focus:ring-[#00ff88]/20 outline-none transition-all"
                  placeholder="+1 (234) 567-8900"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 dark:text-[#e0e0e0] font-bold mb-3 text-sm">Country</label>
                <select
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 dark:bg-[#1a1a1a] border-2 border-gray-200 dark:border-[#1a1a1a] text-gray-900 dark:text-white focus:border-[#00ff88] focus:ring-2 focus:ring-[#00ff88]/20 outline-none transition-all"
                >
                  <option value="">Select Country</option>
                  <option value="usa">🇺🇸 USA</option>
                  <option value="uk">🇬🇧 UK</option>
                  <option value="uae">🇦🇪 UAE</option>
                  <option value="ksa">🇸🇦 KSA</option>
                  <option value="canada">🇨🇦 Canada</option>
                  <option value="australia">🇦🇺 Australia</option>
                  <option value="pakistan">🇵🇰 Pakistan</option>
                  <option value="india">🇮🇳 India</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 dark:text-[#e0e0e0] font-bold mb-3 text-sm">Service</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-6 py-4 rounded-xl bg-gray-50 dark:bg-[#1a1a1a] border-2 border-gray-200 dark:border-[#1a1a1a] text-gray-900 dark:text-white focus:border-[#00ff88] focus:ring-2 focus:ring-[#00ff88]/20 outline-none transition-all"
              >
                <option value="">Select Service</option>
                <option value="tax">Tax Planning</option>
                <option value="audit">Audit</option>
                <option value="advisory">Advisory</option>
                <option value="bookkeeping">Bookkeeping</option>
                <option value="vat">VAT</option>
                <option value="payroll">Payroll</option>
                <option value="formation">Company Formation</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="block text-gray-700 dark:text-[#e0e0e0] font-bold mb-3 text-sm">Message *</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-6 py-4 rounded-xl bg-gray-50 dark:bg-[#1a1a1a] border-2 border-gray-200 dark:border-[#1a1a1a] text-gray-900 dark:text-white focus:border-[#00ff88] focus:ring-2 focus:ring-[#00ff88]/20 outline-none transition-all resize-none"
                placeholder="Tell us about your requirements..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full gradient-btn px-12 py-6 text-lg font-bold flex items-center justify-center gap-3 disabled:opacity-50"
            >
              {status === 'loading' ? (
                <><Loader className="w-6 h-6 animate-spin" /> Sending...</>
              ) : status === 'success' ? (
                <><CheckCircle className="w-6 h-6" /> Message Sent!</>
              ) : (
                <><Send className="w-6 h-6" /> Send Message</>
              )}
            </button>

            {status === 'error' && (
              <p className="text-[#ff0066] text-center mt-4 font-semibold">
                Failed to send. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
