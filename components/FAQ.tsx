'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'What countries do you operate in?', a: 'We operate in 25+ countries including USA, UK, UAE, Saudi Arabia, Canada, Australia, Pakistan, and India with expertise in local tax laws and international standards.' },
  { q: 'How quickly can you process tax filings?', a: 'Most tax returns are processed within 24-48 hours. For urgent requests, we offer same-day expedited services.' },
  { q: 'Do you handle VAT registration and compliance?', a: 'Yes, we specialize in VAT services across UAE, KSA, UK, and EU including registration, filing, and ZATCA e-invoicing implementation.' },
  { q: 'What are your pricing models?', a: 'We offer flexible pricing: hourly rates ($75-$200), monthly retainers, and fixed project fees. Contact us for a customized quote.' },
  { q: 'Can you help with multi-currency accounting?', a: 'Absolutely. We manage 30+ currencies with real-time exchange rate tracking and multi-currency financial reporting per IAS 21.' },
  { q: 'How do you ensure data security?', a: 'We use 256-bit encryption, secure cloud storage with daily backups, and comply with GDPR, SOC 2, and ISO 27001 standards.' },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-32 dark:bg-[#0a0a0a] bg-gray-50">
      <div className="container max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6" style={{letterSpacing: '-0.03em'}}>
            <span className="text-gray-900 dark:text-white">Frequently Asked </span>
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-[#888888]">
            Quick answers to common questions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="premium-card overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#00ff88]/5 transition-colors"
              >
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 dark:text-white pr-4">
                  {faq.q}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#00ff88] flex-shrink-0 transition-transform ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-8 pb-6 text-gray-600 dark:text-[#888888] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
