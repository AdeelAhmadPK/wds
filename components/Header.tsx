'use client';

import { Phone, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar - Thin Gradient Line */}
      <div className="h-1 animated-gradient"></div>

      {/* Main Header - Premium Card with Sharp Shadow */}
      <div className="premium-card border-0 border-b dark:border-[#1a1a1a] border-gray-200 rounded-none">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <a href="/" className="text-3xl font-extrabold">
              <span className="gradient-text">WDS</span>
              <span className="dark:text-white text-gray-900"> Finance</span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {['Home', 'Services', 'Countries', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 dark:text-[#e0e0e0] hover:text-[#00ff88] dark:hover:text-[#00ff88] transition-colors font-semibold"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Right Side: Contact + Theme Toggle */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm">
                <a href="tel:+97141234567" className="flex items-center gap-2 text-gray-600 dark:text-[#888888] hover:text-[#00ff88] dark:hover:text-[#00ff88]">
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">+971 4 123 4567</span>
                </a>
                <a href="mailto:info@wdsfinance.com" className="flex items-center gap-2 text-gray-600 dark:text-[#888888] hover:text-[#00ff88] dark:hover:text-[#00ff88]">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-900 dark:text-[#e0e0e0]"
              >
                {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="lg:hidden py-6 border-t dark:border-[#1a1a1a] border-gray-200">
              <div className="flex flex-col gap-4">
                {['Home', 'Services', 'Countries', 'About', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-gray-700 dark:text-[#e0e0e0] hover:text-[#00ff88] dark:hover:text-[#00ff88] text-lg font-semibold transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
