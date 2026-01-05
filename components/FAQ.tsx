'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: 'What accounting services do you provide?',
    answer: 'We offer comprehensive accounting services including tax planning & compliance, audit & assurance, bookkeeping, VAT registration & filing, payroll management, company formation, financial reporting, and business advisory services across multiple jurisdictions.',
  },
  {
    question: 'Which countries do you serve?',
    answer: 'We serve clients in USA, UK, UAE (Dubai), Saudi Arabia (KSA), Canada, Australia, Pakistan, India, and other international markets. Our team has expertise in local tax laws and accounting regulations for each jurisdiction.',
  },
  {
    question: 'Are you qualified chartered accountants?',
    answer: 'Yes, our team consists of ACCA certified, ICAEW member, and CPA qualified chartered accountants with over 20 years of combined experience in international accounting and taxation.',
  },
  {
    question: 'How much do your services cost?',
    answer: 'Our pricing is competitive and transparent with no hidden fees. Costs vary based on the scope of services, complexity, and jurisdiction. Contact us for a free consultation and customized quote.',
  },
  {
    question: 'Do you help with company formation in UAE and KSA?',
    answer: 'Absolutely! We provide end-to-end company formation services in UAE (mainland and freezone), KSA, UK, USA, and other countries, including business registration, licensing, VAT registration, and ongoing compliance support.',
  },
  {
    question: 'Can you handle ZATCA e-invoicing for Saudi businesses?',
    answer: 'Yes, we specialize in ZATCA e-invoicing implementation and compliance for businesses operating in Saudi Arabia, ensuring full adherence to Phase 1 and Phase 2 requirements.',
  },
  {
    question: 'How quickly can I get started?',
    answer: 'We typically respond within 24-48 hours. After our initial consultation, we can onboard most clients within 1-2 weeks, depending on the complexity of your requirements.',
  },
  {
    question: 'Do you provide support for international tax planning?',
    answer: 'Yes, our international tax planning services help businesses minimize global tax liabilities through strategic structuring, transfer pricing, treaty optimization, and cross-border compliance.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about our accounting services
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-navy-900 pr-8">{faq.question}</h3>
                {openIndex === index ? (
                  <FaChevronUp className="text-gold-500 flex-shrink-0" />
                ) : (
                  <FaChevronDown className="text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-block bg-gold-500 text-white px-8 py-3 rounded-lg hover:bg-gold-600 transition-colors font-semibold"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
