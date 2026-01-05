'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle, FaAward, FaCertificate } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 bg-gradient-to-br from-[#0a1628] via-[#1a2f4a] to-[#0f1f35] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-gold-400 to-gold-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-blue-400 to-blue-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              Expert Chartered Accountants Serving Businesses{' '}
              <span className="text-gold-400 drop-shadow-lg">Globally</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed font-medium">
              Comprehensive international accounting, tax optimization, audit, and business advisory services for clients across USA, UK, UAE, KSA, and beyond.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contact"
                className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-10 py-4 rounded-xl hover:from-gold-600 hover:to-gold-700 transition-all font-bold text-lg shadow-2xl hover:shadow-gold-500/50 transform hover:-translate-y-1 hover:scale-105"
              >
                Schedule Consultation
              </a>
              <a
                href="#services"
                className="bg-white/20 backdrop-blur-md text-white px-10 py-4 rounded-xl hover:bg-white/30 transition-all font-bold text-lg border-2 border-white/40 hover:border-white/60 shadow-xl"
              >
                View Services
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <FaAward className="text-4xl text-gold-400 mb-2 mx-auto" />
                <p className="text-sm font-semibold">ACCA Certified</p>
              </div>
              <div className="text-center">
                <FaCertificate className="text-4xl text-gold-400 mb-2 mx-auto" />
                <p className="text-sm font-semibold">ICAEW Member</p>
              </div>
              <div className="text-center">
                <FaCheckCircle className="text-4xl text-gold-400 mb-2 mx-auto" />
                <p className="text-sm font-semibold">CPA Qualified</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Stats & Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-gold-400 mb-2">20+</h3>
                  <p className="text-gray-300">Years Experience</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-gold-400 mb-2">500+</h3>
                  <p className="text-gray-300">Clients Worldwide</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-gold-400 mb-2">8+</h3>
                  <p className="text-gray-300">Countries Served</p>
                </div>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-gold-400 mb-2">24/7</h3>
                  <p className="text-gray-300">Global Support</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h4 className="text-xl font-semibold mb-4 text-gold-400">Why Choose WDS Finance?</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-gold-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-200">Multi-jurisdictional tax expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-gold-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-200">Technology-driven solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-gold-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-200">Transparent pricing structure</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-gold-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-200">Dedicated account managers</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
