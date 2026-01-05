'use client';

import { Star, Quote, CheckCircle } from 'lucide-react';

const testimonials = [
  { name: 'Sarah Johnson', role: 'CFO', company: 'TechCorp USA', text: 'WDS Finance transformed our international tax strategy, saving us over $2M annually. Absolutely incredible.', rating: 5, avatar: 'SJ' },
  { name: 'Mohammed Al-Rashid', role: 'CEO', company: 'Dubai Holdings', text: 'Outstanding VAT services and ZATCA compliance support. Made our KSA expansion seamless.', rating: 5, avatar: 'MA' },
  { name: 'James Williams', role: 'Founder', company: 'UK Startups Ltd', text: 'Lightning-fast responses, proactive advice, incredibly reasonable pricing. The best.', rating: 5, avatar: 'JW' },
];

export default function Testimonials() {
  return (
    <section className="py-32 dark:bg-[#0a0a0a] bg-white">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6" style={{letterSpacing: '-0.03em'}}>
            <span className="text-gray-900 dark:text-white">Client </span>
            <span className="gradient-text-pink">Success</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-[#888888]">
            Don't just take our word for it
          </p>
        </div>

        {/* MASONRY-STYLE GRID (Simulated with different heights) */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <div
              key={i}
              className="premium-card p-10 hover:scale-105 transition-transform"
              style={{
                transform: `rotate(${i === 1 ? '2deg' : i === 2 ? '-2deg' : '0deg'})`,
              }}
            >
              <Quote className="w-12 h-12 text-[#00ff88] mb-6 opacity-30" />
              
              <p className="text-gray-800 dark:text-[#e0e0e0] text-base md:text-lg leading-relaxed mb-8 font-medium">
                "{test.text}"
              </p>
              
              <div className="flex gap-1 mb-6">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#00ff88] text-[#00ff88]" />
                ))}
              </div>
              
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00ff88] to-[#00cc66] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#050505] font-bold text-sm">{test.avatar}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-gray-900 dark:text-white">{test.name}</h4>
                      <CheckCircle className="w-4 h-4 text-[#00ff88]" />
                    </div>
                    <p className="text-gray-600 dark:text-[#888888] text-sm">{test.role}</p>
                    <p className="text-gray-500 dark:text-[#666666] text-xs">{test.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
