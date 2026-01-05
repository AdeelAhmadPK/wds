'use client';

import { Building2, Stethoscope, ShoppingCart, Warehouse, Plane, Home, Cpu, GraduationCap } from 'lucide-react';

const industries = [
  { icon: Building2, name: 'Real Estate', count: '150+' },
  { icon: Stethoscope, name: 'Healthcare', count: '85+' },
  { icon: ShoppingCart, name: 'E-commerce', count: '200+' },
  { icon: Warehouse, name: 'Manufacturing', count: '120+' },
  { icon: Plane, name: 'Travel', count: '95+' },
  { icon: Home, name: 'Construction', count: '110+' },
  { icon: Cpu, name: 'Technology', count: '180+' },
  { icon: GraduationCap, name: 'Education', count: '65+' },
];

export default function Industries() {
  return (
    <section className="py-32 dark:bg-[#050505] bg-white">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6" style={{letterSpacing: '-0.03em'}}>
            <span className="gradient-text">Industries</span>
            <span style={{color: 'var(--text-primary)'}}> We Serve</span>
          </h2>
          <p className="text-lg md:text-xl" style={{color: 'var(--text-secondary)'}}>
            Specialized solutions across diverse sectors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <div
                key={i}
                className="premium-card p-8 text-center hover:scale-110 transition-transform group"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#00ff88] to-[#00cc66] rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
                  <Icon className="w-8 h-8 text-[#050505]" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2" style={{color: 'var(--text-primary)'}}>{industry.name}</h3>
                <p className="text-sm font-semibold" style={{color: 'var(--text-secondary)'}}>{industry.count} Clients</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
