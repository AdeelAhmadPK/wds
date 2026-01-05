'use client';

import { Calculator, Search, Lightbulb, BookOpen, Receipt, Users, Rocket, TrendingUp } from 'lucide-react';

const services = [
  { icon: Calculator, title: 'Tax Planning & Compliance', desc: 'International tax optimization strategies', size: 'large', color: 'mint' },
  { icon: Search, title: 'Audit & Assurance', desc: 'Comprehensive external and internal audits', size: 'small', color: 'pink' },
  { icon: Lightbulb, title: 'Business Advisory', desc: 'Strategic financial consulting', size: 'medium', color: 'mint' },
  { icon: BookOpen, title: 'Bookkeeping', desc: 'Professional monthly financial management', size: 'small', color: 'mint' },
  { icon: Receipt, title: 'VAT Services', desc: 'UAE, KSA, UK VAT + ZATCA e-invoicing', size: 'large', color: 'pink' },
  { icon: Users, title: 'Payroll', desc: 'Multi-country payroll solutions', size: 'medium', color: 'mint' },
  { icon: Rocket, title: 'Company Formation', desc: 'Business setup in USA, UK, UAE, KSA', size: 'small', color: 'pink' },
  { icon: TrendingUp, title: 'Financial Reporting', desc: 'IFRS and GAAP compliant reporting', size: 'medium', color: 'mint' },
];

export default function Services() {
  return (
    <section id="services" className="py-32 dark:bg-[#050505] bg-white relative overflow-hidden">
      {/* Unique floating shape */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-[#00ff88]/10 to-[#ff0066]/10 rounded-full blur-3xl hidden lg:block"></div>
      
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6" style={{letterSpacing: '-0.03em'}}>
            <span style={{color: 'var(--text-primary)'}}>Expert </span>
            <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto" style={{color: 'var(--text-secondary)'}}>
            World-class financial solutions tailored to your business
          </p>
        </div>

        {/* BENTO GRID - Asymmetric, Varied Sizes */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[220px]">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isLarge = service.size === 'large';
            const isMedium = service.size === 'medium';
            const isMint = service.color === 'mint';
            
            return (
              <div
                key={i}
                className={`premium-card p-6 md:p-8 card-hover group ${
                  isLarge ? 'md:col-span-2 md:row-span-2' : 
                  isMedium ? 'md:col-span-2' : 
                  'md:col-span-1'
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl ${
                  isMint ? 'bg-gradient-to-br from-[#00ff88] to-[#00cc66]' : 'bg-gradient-to-br from-[#ff0066] to-[#cc0052]'
                } flex items-center justify-center mb-6 group-hover:scale-110 transition-transform rotate-on-scroll`}>
                  <Icon className="w-8 h-8 text-[#050505] dark:text-[#050505]" />
                </div>
                
                <h3 className={`font-bold mb-4 ${isLarge ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'}`} style={{color: 'var(--text-primary)'}}>
                  {service.title}
                </h3>
                
                {isLarge && (
                  <p className="text-base md:text-lg leading-relaxed mb-4" style={{color: 'var(--text-secondary)'}}>
                    {service.desc}
                  </p>
                )}
                
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 font-semibold ${
                    isMint ? 'text-[#00ff88]' : 'text-[#ff0066]'
                  } group-hover:gap-3 transition-all`}
                >
                  Learn More →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
