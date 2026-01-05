'use client';

import { motion } from 'framer-motion';
import { 
  FaShoppingCart, 
  FaLaptopCode, 
  FaBuilding, 
  FaHeartbeat, 
  FaIndustry, 
  FaHotel, 
  FaShippingFast, 
  FaBriefcase 
} from 'react-icons/fa';

const industries = [
  {
    icon: FaShoppingCart,
    name: 'E-commerce & Retail',
    description: 'Online sellers, marketplaces, multi-channel retail',
  },
  {
    icon: FaLaptopCode,
    name: 'Technology & SaaS',
    description: 'Software companies, IT services, tech startups',
  },
  {
    icon: FaBuilding,
    name: 'Real Estate',
    description: 'Property development, real estate investment',
  },
  {
    icon: FaHeartbeat,
    name: 'Healthcare',
    description: 'Clinics, hospitals, medical practitioners',
  },
  {
    icon: FaIndustry,
    name: 'Manufacturing',
    description: 'Production facilities, industrial operations',
  },
  {
    icon: FaHotel,
    name: 'Hospitality & Tourism',
    description: 'Hotels, restaurants, travel agencies',
  },
  {
    icon: FaShippingFast,
    name: 'Trading & Import/Export',
    description: 'International trade, logistics, distribution',
  },
  {
    icon: FaBriefcase,
    name: 'Professional Services',
    description: 'Consultants, agencies, service providers',
  },
];

export default function Industries() {
  return (
    <section className="py-20 bg-white">
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
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized accounting expertise across diverse business sectors
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-gold-400 group transform hover:-translate-y-2"
              >
                <div className="text-gold-600 text-6xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-gray-600">{industry.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
