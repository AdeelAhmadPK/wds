'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    company: 'TechStart Inc.',
    location: 'San Francisco, USA',
    industry: 'Technology & SaaS',
    rating: 5,
    text: 'WDS Finance transformed our international tax strategy. Their expertise in US and UK tax laws saved us over $150,000 in the first year alone. The team is responsive, knowledgeable, and genuinely cares about our success.',
    avatar: '👩‍💼',
  },
  {
    name: 'James Anderson',
    company: 'Global Traders Ltd',
    location: 'London, UK',
    industry: 'E-commerce & Retail',
    rating: 5,
    text: 'Outstanding VAT compliance services! They handled our complex multi-country VAT registrations seamlessly. Their understanding of HMRC requirements and proactive communication made the entire process stress-free.',
    avatar: '👨‍💼',
  },
  {
    name: 'Ahmed Al-Rashid',
    company: 'Desert Star Trading',
    location: 'Dubai, UAE',
    industry: 'Trading & Import/Export',
    rating: 5,
    text: 'From company formation to ongoing accounting, WDS Finance has been instrumental in our Dubai operations. Their knowledge of UAE corporate tax and freezone regulations is exceptional. Highly recommend for any UAE business.',
    avatar: '👔',
  },
  {
    name: 'Mohammed Al-Qahtani',
    company: 'Saudi Manufacturing Co.',
    location: 'Riyadh, KSA',
    industry: 'Manufacturing',
    rating: 5,
    text: 'The ZATCA e-invoicing implementation was flawless. WDS Finance guided us through every step and ensured full compliance. Their audit services are thorough and professional, meeting SOCPA standards perfectly.',
    avatar: '🧑‍💼',
  },
  {
    name: 'Emily Chen',
    company: 'Maple Ventures',
    location: 'Toronto, Canada',
    industry: 'Real Estate',
    rating: 5,
    text: 'Exceptional business advisory services. They helped us navigate complex real estate transactions and optimize our corporate structure. The personalized attention and strategic insights have been invaluable.',
    avatar: '👩‍💻',
  },
  {
    name: 'Rajesh Kumar',
    company: 'Digital Solutions Pvt Ltd',
    location: 'Mumbai, India',
    industry: 'Professional Services',
    rating: 5,
    text: 'Their GST expertise and timely filing services have kept our business compliant and penalty-free. The team understands Indian taxation thoroughly and provides practical solutions to complex issues.',
    avatar: '👨‍💻',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section className="py-20 bg-gray-50">
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
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Trusted by businesses worldwide for exceptional accounting services
          </p>
          
          {/* Google Rating */}
          <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md">
            <div className="flex gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="font-semibold text-navy-900">4.9/5</span>
            <span className="text-gray-600">based on 127 reviews</span>
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={currentIndex + index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gold-200 transform hover:-translate-y-1"
              >
                <FaQuoteLeft className="text-gold-500 text-4xl mb-5" />
                
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.text}</p>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-navy-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                    <p className="text-xs text-gold-600 font-medium mt-1">{testimonial.industry}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={prevTestimonial}
              className="bg-navy-900 text-white p-3 rounded-full hover:bg-navy-800 transition-colors"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-navy-900 text-white p-3 rounded-full hover:bg-navy-800 transition-colors"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-gold-500 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
