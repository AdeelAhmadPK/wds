'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaCalendarCheck } from 'react-icons/fa';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-gold-500 via-gold-600 to-orange-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Streamline Your Finances?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/90">
            Get a free consultation with our expert chartered accountants and discover how we can help your business thrive globally
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#contact"
              className="bg-white text-gold-600 px-10 py-5 rounded-xl hover:bg-gray-50 transition-all font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 inline-flex items-center gap-3"
            >
              <FaCalendarCheck className="text-xl" />
              Book Free Consultation
            </a>
            <a
              href="tel:+1234567890"
              className="bg-navy-900 text-white px-10 py-5 rounded-xl hover:bg-navy-800 transition-all font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 inline-flex items-center gap-3"
            >
              <FaPhone />
              Call Now: +1 (234) 567-8900
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-3xl font-bold mb-2">Free</h3>
              <p className="text-white/90">Initial Consultation</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-3xl font-bold mb-2">24-48h</h3>
              <p className="text-white/90">Response Time</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-3xl font-bold mb-2">100%</h3>
              <p className="text-white/90">Confidential</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
