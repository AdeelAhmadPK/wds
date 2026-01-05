'use client';

import Link from 'next/link';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#0a1628] via-[#1a2f4a] to-[#0f1f35] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              WDS <span className="text-gold-400">Finance</span>
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Waqas, Danish & Co Chartered Accountants - Your trusted partner for international accounting, tax, and business advisory services.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gold-500 rounded flex items-center justify-center text-xs">✓</div>
                <span className="text-gray-300">ACCA Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gold-500 rounded flex items-center justify-center text-xs">✓</div>
                <span className="text-gray-300">ICAEW Member</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gold-500 rounded flex items-center justify-center text-xs">✓</div>
                <span className="text-gray-300">CPA Qualified</span>
              </div>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gold-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
              <li><a href="#countries" className="text-gray-400 hover:text-white transition">Countries We Serve</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition">Blog</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white transition">Careers</Link></li>
            </ul>
          </div>

          {/* Column 3 - Services by Country */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gold-400">Services by Country</h4>
            <ul className="space-y-2">
              <li><Link href="/usa" className="text-gray-400 hover:text-white transition">Accounting Services USA</Link></li>
              <li><Link href="/uk" className="text-gray-400 hover:text-white transition">UK Chartered Accountants</Link></li>
              <li><Link href="/dubai" className="text-gray-400 hover:text-white transition">Dubai Accounting Firm</Link></li>
              <li><Link href="/ksa" className="text-gray-400 hover:text-white transition">KSA Tax Consultants</Link></li>
              <li><Link href="/canada" className="text-gray-400 hover:text-white transition">Canada Accounting Services</Link></li>
              <li><Link href="/australia" className="text-gray-400 hover:text-white transition">Australia Tax Services</Link></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-gold-400">Contact Us</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">Global Headquarters</h5>
                <div className="flex items-start gap-2 text-gray-400 text-sm">
                  <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                  <span>123 Financial District, Suite 500<br />New York, NY 10004, USA</span>
                </div>
              </div>
              
              <div>
                <h5 className="font-semibold mb-2">UK Office</h5>
                <div className="flex items-start gap-2 text-gray-400 text-sm">
                  <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                  <span>85 Great Portland Street<br />London W1W 7LT, UK</span>
                </div>
              </div>

              <div>
                <h5 className="font-semibold mb-2">UAE Office</h5>
                <div className="flex items-start gap-2 text-gray-400 text-sm">
                  <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                  <span>Business Bay, Dubai<br />United Arab Emirates</span>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-700">
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <FaPhone />
                  <a href="tel:+1234567890" className="hover:text-white transition">+1 (234) 567-8900</a>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <FaEnvelope />
                  <a href="mailto:info@wdsfinance.com" className="hover:text-white transition">info@wdsfinance.com</a>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  <strong>Business Hours:</strong><br />
                  Mon - Fri: 9:00 AM - 6:00 PM<br />
                  Sat: 10:00 AM - 4:00 PM<br />
                  <span className="text-gold-400">24/7 Emergency Support Available</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Waqas, Danish & Co Chartered Accountants. All Rights Reserved.
            </p>

            <div className="flex gap-4 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
              <span>|</span>
              <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
              <span>|</span>
              <Link href="/sitemap" className="hover:text-white transition">Sitemap</Link>
            </div>

            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-400 transition text-xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-400 transition text-xl"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-400 transition text-xl"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gold-400 transition text-xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-gold-500 text-white p-4 rounded-full shadow-lg hover:bg-gold-600 transition-all hover:scale-110 z-40"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
}
