'use client';

import { Award, Shield, CheckCircle, Globe } from 'lucide-react';

const certifications = [
  {
    icon: Award,
    title: 'ACCA',
    fullName: 'Association of Chartered Certified Accountants',
    desc: 'Globally recognized professional accounting qualification',
    gradient: 'mint',
  },
  {
    icon: Shield,
    title: 'ICAEW',
    fullName: 'Institute of Chartered Accountants in England and Wales',
    desc: 'Premier UK chartered accountancy body',
    gradient: 'pink',
  },
  {
    icon: Globe,
    title: 'CPA',
    fullName: 'Certified Public Accountant',
    desc: 'USA licensed accounting certification',
    gradient: 'mint',
  },
  {
    icon: CheckCircle,
    title: 'ISO 27001',
    fullName: 'Information Security Management',
    desc: 'International data security standard',
    gradient: 'pink',
  },
  {
    icon: Shield,
    title: 'SOC 2 Type II',
    fullName: 'Service Organization Control',
    desc: 'Audited security and compliance framework',
    gradient: 'mint',
  },
  {
    icon: Award,
    title: 'ZATCA',
    fullName: 'Zakat, Tax and Customs Authority',
    desc: 'Saudi Arabia e-invoicing compliance certified',
    gradient: 'pink',
  },
];

export default function Certifications() {
  return (
    <section className="py-32 dark:bg-[#050505] bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ff88]/5 to-transparent"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full dark:bg-[#0a0a0a] bg-white border border-[#00ff88]/20 mb-6">
            <Shield className="w-5 h-5 text-[#00ff88]" />
            <span className="font-semibold text-[#1a1a1a] dark:text-white">Certified & Trusted Worldwide</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6" style={{letterSpacing: '-0.03em'}}>
            <span className="text-[#1a1a1a] dark:text-white">Our </span>
            <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#666666] dark:text-[#e0e0e0]">
            Backed by industry-leading certifications and rigorous compliance standards
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, i) => {
            const Icon = cert.icon;
            const isMint = cert.gradient === 'mint';
            
            return (
              <div
                key={i}
                className="premium-card p-10 card-hover group"
                style={{transform: `rotate(${i % 2 === 0 ? '0.3deg' : '-0.3deg'})`}}
              >
                <div className={`w-20 h-20 mb-6 rounded-2xl ${
                  isMint ? 'bg-gradient-to-br from-[#00ff88] to-[#00cc66]' : 'bg-gradient-to-br from-[#ff0066] to-[#cc0052]'
                } flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all shadow-2xl`}>
                  <Icon className="w-10 h-10 text-[#050505]" />
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-2xl font-extrabold text-[#1a1a1a] dark:text-white">
                    {cert.title}
                  </h3>
                  <CheckCircle className="w-5 h-5 text-[#00ff88]" />
                </div>
                
                <p className="text-sm font-semibold mb-3 text-[#666666] dark:text-[#e0e0e0]">
                  {cert.fullName}
                </p>
                
                <p className="text-sm leading-relaxed text-[#888888] dark:text-[#888888]">
                  {cert.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Badge */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-8 flex-wrap justify-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#00ff88] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-[#666666] dark:text-[#e0e0e0]">Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#00ff88] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-[#666666] dark:text-[#e0e0e0]">256-bit Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#00ff88] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-[#666666] dark:text-[#e0e0e0]">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#00ff88] rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-[#666666] dark:text-[#e0e0e0]">Annual External Audits</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
