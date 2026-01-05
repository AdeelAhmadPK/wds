'use client';

import { motion } from 'framer-motion';
import { FaUserTie, FaGlobe, FaHeadset, FaLightbulb, FaDollarSign, FaClock } from 'react-icons/fa';

const features = [
  {
    icon: FaUserTie,
    title: '20+ Years Combined Experience',
    description: 'Seasoned chartered accountants with deep expertise across multiple industries and jurisdictions',
  },
  {
    icon: FaGlobe,
    title: 'Multi-Country Expertise',
    description: 'Licensed and qualified in multiple jurisdictions with in-depth knowledge of local regulations',
  },
  {
    icon: FaHeadset,
    title: 'Personalized Service',
    description: 'Dedicated account managers who understand your business and provide tailored solutions',
  },
  {
    icon: FaLightbulb,
    title: 'Technology-Driven',
    description: 'Cloud accounting platforms and real-time reporting for instant financial insights',
  },
  {
    icon: FaDollarSign,
    title: 'Competitive Pricing',
    description: 'Transparent fee structure with no hidden costs, offering exceptional value for premium services',
  },
  {
    icon: FaClock,
    title: '24/7 Support',
    description: 'Global time zone coverage ensuring support whenever and wherever you need it',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#0a1628] via-[#1a2f4a] to-[#0f1f35] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gold-500 rounded-full filter blur-3xl"></div>
      </div>
      <div className="relative z-10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Businesses Trust <span className="text-gold-400">WDS Finance</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine global expertise with personalized service to deliver exceptional accounting solutions
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-gold-400 text-4xl mb-4">
                  <Icon />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-5xl font-bold text-gold-400 mb-2">500+</div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-gold-400 mb-2">8+</div>
            <div className="text-gray-300">Countries</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-gold-400 mb-2">98%</div>
            <div className="text-gray-300">Client Retention</div>
          </div>
          <div>
            <div className="text-5xl font-bold text-gold-400 mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
