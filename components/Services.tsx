'use client';

import { motion } from 'framer-motion';
import { 
  FaCalculator, 
  FaClipboardCheck, 
  FaBriefcase, 
  FaBook, 
  FaFileInvoiceDollar, 
  FaMoneyCheckAlt, 
  FaBuilding, 
  FaChartLine 
} from 'react-icons/fa';

const services = [
  {
    icon: FaCalculator,
    title: 'Tax Planning & Compliance',
    description: 'International tax optimization strategies and multi-jurisdictional compliance to minimize liabilities and maximize efficiency.',
    color: 'text-blue-600',
  },
  {
    icon: FaClipboardCheck,
    title: 'Audit & Assurance Services',
    description: 'Comprehensive external and internal audits ensuring compliance with international accounting standards and regulatory requirements.',
    color: 'text-green-600',
  },
  {
    icon: FaBriefcase,
    title: 'Business Advisory',
    description: 'Strategic financial consulting to drive growth, improve profitability, and navigate complex business decisions with confidence.',
    color: 'text-purple-600',
  },
  {
    icon: FaBook,
    title: 'Bookkeeping & Accounting',
    description: 'Professional monthly financial management with accurate record-keeping, reconciliation, and financial statement preparation.',
    color: 'text-orange-600',
  },
  {
    icon: FaFileInvoiceDollar,
    title: 'VAT Registration & Filing',
    description: 'Expert VAT services for UAE, KSA, and UK including registration, compliance, filing, and ZATCA e-invoicing implementation.',
    color: 'text-red-600',
  },
  {
    icon: FaMoneyCheckAlt,
    title: 'Payroll Management',
    description: 'Seamless multi-country payroll solutions ensuring timely salary processing, tax withholding, and statutory compliance.',
    color: 'text-teal-600',
  },
  {
    icon: FaBuilding,
    title: 'Company Formation',
    description: 'End-to-end business setup services in USA, UK, UAE, and KSA including mainland, freezone, and offshore entity formation.',
    color: 'text-indigo-600',
  },
  {
    icon: FaChartLine,
    title: 'Financial Reporting',
    description: 'IFRS and GAAP compliant financial reporting with detailed analysis and insights for informed decision-making.',
    color: 'text-pink-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Our Comprehensive Accounting Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering world-class financial solutions tailored to your business needs across multiple jurisdictions
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100 hover:border-gold-200 group"
              >
                <div className={`${service.color} text-5xl mb-5 transform group-hover:scale-110 transition-transform duration-300`}>
                  <Icon />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4 group-hover:text-gold-600 transition-colors">{service.title}</h3>
                <p className="text-gray-700 mb-5 leading-relaxed text-base">{service.description}</p>
                <a
                  href="#contact"
                  className="text-gold-600 font-semibold hover:text-gold-700 inline-flex items-center group"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block bg-navy-900 text-white px-8 py-4 rounded-lg hover:bg-navy-800 transition-colors font-semibold text-lg shadow-lg"
          >
            Discuss Your Requirements
          </a>
        </motion.div>
      </div>
    </section>
  );
}
