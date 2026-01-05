'use client';

import { motion } from 'framer-motion';

const countries = [
  {
    flag: '🇺🇸',
    name: 'United States',
    services: 'Tax planning, accounting, business advisory, and compliance with IRS regulations',
    specialties: ['Federal & State Tax', 'Corporate Accounting', 'Business Formation'],
  },
  {
    flag: '🇬🇧',
    name: 'United Kingdom',
    services: 'UK accounting standards, HMRC compliance, VAT services, and company secretarial support',
    specialties: ['HMRC Compliance', 'UK GAAP', 'Corporation Tax'],
  },
  {
    flag: '🇸🇦',
    name: 'Saudi Arabia (KSA)',
    services: 'ZATCA e-invoicing, VAT compliance, Zakat filing, and SOCPA accounting standards',
    specialties: ['ZATCA E-invoicing', 'Zakat Services', 'VAT Filing'],
  },
  {
    flag: '🇦🇪',
    name: 'United Arab Emirates',
    services: 'UAE corporate tax, VAT registration, mainland & freezone accounting, and FTA compliance',
    specialties: ['Corporate Tax (9%)', 'VAT Services', 'Freezone Setup'],
  },
  {
    flag: '🇨🇦',
    name: 'Canada',
    services: 'Canadian tax returns, GST/HST compliance, payroll services, and business incorporation',
    specialties: ['CRA Compliance', 'GST/HST', 'Business Tax'],
  },
  {
    flag: '🇦🇺',
    name: 'Australia',
    services: 'Australian taxation, BAS statements, GST services, and business advisory',
    specialties: ['ATO Compliance', 'BAS Lodgement', 'Tax Planning'],
  },
  {
    flag: '🇵🇰',
    name: 'Pakistan',
    services: 'FBR compliance, income tax returns, sales tax, and company accounts maintenance',
    specialties: ['FBR Filing', 'Sales Tax', 'Annual Audits'],
  },
  {
    flag: '🇮🇳',
    name: 'India',
    services: 'GST compliance, income tax planning, company incorporation, and ROC filings',
    specialties: ['GST Returns', 'Income Tax', 'ROC Compliance'],
  },
];

export default function Countries() {
  return (
    <section id="countries" className="py-20 bg-white">
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
            Global Reach, Local Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serving businesses across continents with specialized knowledge of local tax laws and accounting regulations
          </p>
        </motion.div>

        {/* Countries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((country, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 group hover:border-gold-400 transform hover:-translate-y-2"
            >
              <div className="text-7xl mb-5 group-hover:scale-110 transition-transform duration-300">{country.flag}</div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4 group-hover:text-gold-600 transition-colors">{country.name}</h3>
              <p className="text-gray-700 mb-5 text-sm leading-relaxed font-medium">{country.services}</p>
              
              <div className="space-y-2">
                {country.specialties.map((specialty, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-gold-500 rounded-full"></div>
                    <span className="text-xs font-medium text-gray-700">{specialty}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Markets */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-3">Expanding to More Markets</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We continuously expand our services to new jurisdictions. Contact us for accounting services in other international markets including Europe, Asia, and the Middle East.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gold-500 text-white px-8 py-3 rounded-lg hover:bg-gold-600 transition-colors font-semibold"
            >
              Inquire About Your Country
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
