'use client';

import { MessageSquare, ClipboardCheck, Cog, TrendingUp, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Discovery Call',
    desc: 'Free 30-minute consultation to understand your business needs, challenges, and goals.',
    duration: '30 mins',
    gradient: 'mint',
  },
  {
    number: '02',
    icon: ClipboardCheck,
    title: 'Custom Proposal',
    desc: 'Tailored solution with transparent pricing, timelines, and deliverables within 24 hours.',
    duration: '24 hours',
    gradient: 'pink',
  },
  {
    number: '03',
    icon: Cog,
    title: 'Seamless Onboarding',
    desc: 'Dedicated account manager, secure document portal, and streamlined workflow setup.',
    duration: '2-3 days',
    gradient: 'mint',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Ongoing Excellence',
    desc: 'Proactive service delivery, monthly insights, and continuous optimization of your finances.',
    duration: 'Ongoing',
    gradient: 'pink',
  },
];

export default function HowWeWork() {
  return (
    <section className="py-32 dark:bg-[#0a0a0a] bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-30"></div>
      
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6" style={{letterSpacing: '-0.03em'}}>
            <span className="text-[#1a1a1a] dark:text-white">How We </span>
            <span className="gradient-text">Work</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#666666] dark:text-[#e0e0e0]">
            Our proven 4-step process ensures smooth onboarding and exceptional results
          </p>
        </div>

        {/* Process Steps - Timeline Layout */}
        <div className="relative max-w-6xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#00ff88] via-[#ff0066] to-[#00ff88] opacity-20"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isMint = step.gradient === 'mint';
              
              return (
                <div key={i} className="relative">
                  {/* Number Badge */}
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full ${
                    isMint ? 'bg-gradient-to-br from-[#00ff88] to-[#00cc66]' : 'bg-gradient-to-br from-[#ff0066] to-[#cc0052]'
                  } flex items-center justify-center text-2xl font-extrabold text-[#050505] shadow-2xl relative z-10`}>
                    {step.number}
                  </div>
                  
                  <div className="premium-card p-8 card-hover group">
                    <div className={`w-14 h-14 mx-auto mb-4 rounded-xl ${
                      isMint ? 'bg-gradient-to-br from-[#00ff88]/20 to-[#00cc66]/20' : 'bg-gradient-to-br from-[#ff0066]/20 to-[#cc0052]/20'
                    } flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-7 h-7 ${isMint ? 'text-[#00ff88]' : 'text-[#ff0066]'}`} />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-center text-[#1a1a1a] dark:text-white">
                      {step.title}
                    </h3>
                    
                    <p className="text-sm leading-relaxed mb-4 text-center text-[#666666] dark:text-[#e0e0e0]">
                      {step.desc}
                    </p>
                    
                    <div className={`text-xs font-bold text-center px-3 py-1 rounded-full inline-block ${
                      isMint ? 'bg-[#00ff88]/10 text-[#00ff88]' : 'bg-[#ff0066]/10 text-[#ff0066]'
                    }`}>
                      {step.duration}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full dark:bg-[#0a0a0a] bg-white border-2 border-[#00ff88]/20 mb-6">
            <CheckCircle className="w-5 h-5 text-[#00ff88]" />
            <span className="font-semibold text-[#1a1a1a] dark:text-white">No long-term contracts. Cancel anytime.</span>
          </div>
          <div>
            <a
              href="#contact"
              className="gradient-btn inline-flex items-center gap-3 px-10 py-5 text-lg font-bold"
            >
              Start Your Free Consultation
              <span className="text-2xl">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
