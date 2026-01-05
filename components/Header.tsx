'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#countries', label: 'Countries We Serve' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 py-4'
      }`}
    >
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-navy-900 to-navy-800 text-white py-2.5 shadow-md">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-gold-500 transition">
              <FaPhone className="text-xs" />
              <span>+1 (234) 567-8900</span>
            </a>
            <a href="mailto:info@wdsfinance.com" className="flex items-center gap-2 hover:text-gold-500 transition">
              <FaEnvelope className="text-xs" />
              <span>info@wdsfinance.com</span>
            </a>
          </div>
          <div className="hidden md:block text-xs">
            Serving clients in USA, UK, UAE, KSA, Canada & Australia
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-extrabold text-navy-900 tracking-tight">
                WDS <span className="text-gold-500 group-hover:text-gold-600 transition-colors">Finance</span>
              </span>
              <span className="text-xs text-gray-600 -mt-1 font-medium">Waqas, Danish & Co Chartered Accountants</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-navy-900 font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-7 py-3 rounded-lg hover:from-gold-600 hover:to-gold-700 transition-all font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Free Consultation
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-navy-900 text-2xl"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-navy-900 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block mt-4 bg-gold-500 text-white px-6 py-2.5 rounded-md hover:bg-gold-600 transition-colors font-semibold text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Free Consultation
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
