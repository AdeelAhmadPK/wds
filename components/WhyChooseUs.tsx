'use client';

import { Shield, Zap, Award, Users, Clock, Globe } from 'lucide-react';

const features = [
  { icon: Shield, title: 'International Compliance', desc: 'Expert knowledge of 25+ country tax regulations', gradient: 'mint' },
  { icon: Zap, title: 'Fast Turnaround', desc: '24-48 hour service for most tasks', gradient: 'pink' },
  { icon: Award, title: 'Certified Professionals', desc: 'ACCA, ICAEW, CPA qualified accountants', gradient: 'mint' },
  { icon: Users, title: 'Personalized Service', desc: 'Dedicated teams for your account', gradient: 'mint' },
  { icon: Clock, title: '24/7 Availability', desc: 'Round-the-clock support across all time zones', gradient: 'pink' },
  { icon: Globe, title: 'Multi-Currency', desc: 'Seamless handling of 30+ currencies', gradient: 'mint' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-32 dark:bg-[#050505] bg-white relative overflow-hidden">
      {/* Gradient Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00ff88] rounded-full filter blur-[150px] opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ff0066] rounded-full filter blur-[150px] opacity-10"></div>

      <div className="container relative z-10">
        {/* ZIGZAG LAYOUT */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6" style={{letterSpacing: '-0.03em'}}>
              <span className="text-[#1a1a1a] dark:text-white">Why </span>
              <span className="gradient-text">Choose Us</span>
            </h2>
            <p className="text-lg md:text-xl text-[#666666] dark:text-[#e0e0e0]">
              Trusted by Fortune 500 companies and fast-growing startups worldwide
            </p>
          </div>
          <div className="hidden md:block">
            <div className="text-9xl font-extrabold gradient-text opacity-20">500+</div>
          </div>
        </div>

        {/* Features Grid - Varied Layout */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const isMint = feature.gradient === 'mint';
            
            return (
              <div
                key={i}
                className="premium-card p-10 card-hover group"
                style={{transform: `rotate(${i % 2 === 0 ? '0.5deg' : '-0.5deg'})`}}
              >
                <div className={`w-20 h-20 rounded-2xl ${
                  isMint ? 'bg-gradient-to-br from-[#00ff88] to-[#00cc66]' : 'bg-gradient-to-br from-[#ff0066] to-[#cc0052]'
                } flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all`}>
                  <Icon className="w-10 h-10 text-[#050505]" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#1a1a1a] dark:text-white">
                  {feature.title}
                </h3>
                
                <p className="leading-relaxed text-[#666666] dark:text-[#e0e0e0]">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
