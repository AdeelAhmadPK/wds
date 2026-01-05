'use client';

import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="dark:bg-[#0a0a0a] bg-gray-900 border-t border-[#1a1a1a] relative">
      <div className="container py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company */}
          <div>
            <h3 className="text-3xl font-extrabold mb-6">
              <span className="gradient-text">WDS</span>
              <span className="text-white"> Finance</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Waqas, Danish & Co Chartered Accountants - Your trusted global financial partner.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-xl bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:text-[#00ff88] hover:bg-[#2a2a2a] transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About', 'Services', 'Countries', 'Industries', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-[#00ff88] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {['Tax Planning', 'Audit', 'Business Advisory', 'VAT Services', 'Company Formation', 'Payroll'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-400 hover:text-[#00ff88] transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#00ff88] flex-shrink-0 mt-1" />
                <span>123 Financial District, Dubai, UAE</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-[#00ff88] flex-shrink-0" />
                <a href="tel:+97141234567" className="hover:text-[#00ff88] transition-colors">
                  +971 4 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#00ff88] flex-shrink-0" />
                <a href="mailto:info@wdsfinance.com" className="hover:text-[#00ff88] transition-colors">
                  info@wdsfinance.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} WDS Finance. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-[#00ff88] transition-colors">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-[#00ff88] transition-colors">Terms</a>
            <a href="#" className="text-gray-500 hover:text-[#00ff88] transition-colors">Cookies</a>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-[#00ff88] to-[#00cc66] text-[#050505] rounded-xl flex items-center justify-center shadow-2xl hover:shadow-[0_20px_60px_rgba(0,255,136,0.5)] transition-all transform hover:-translate-y-2 z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
}
