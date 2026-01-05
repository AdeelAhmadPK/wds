'use client';

import { Award, Users, Globe, TrendingUp, Target, Heart, Shield, Zap } from 'lucide-react';

const stats = [
  { value: '500+', label: 'Global Clients', icon: Globe },
  { value: '25+', label: 'Countries Served', icon: TrendingUp },
  { value: '98%', label: 'Client Retention', icon: Heart },
  { value: '15+', label: 'Years Experience', icon: Award },
];

const values = [
  { 
    icon: Shield, 
    title: 'Integrity First', 
    desc: 'We uphold the highest ethical standards in every engagement, ensuring transparency and trust.',
    gradient: 'mint'
  },
  { 
    icon: Target, 
    title: 'Results-Driven', 
    desc: 'Your success is our mission. We deliver measurable outcomes that drive business growth.',
    gradient: 'pink'
  },
  { 
    icon: Zap, 
    title: 'Innovation', 
    desc: 'Leveraging cutting-edge technology and modern methodologies to stay ahead of the curve.',
    gradient: 'mint'
  },
  { 
    icon: Users, 
    title: 'Client Partnership', 
    desc: 'We don\'t just work for you—we work with you as dedicated long-term partners.',
    gradient: 'pink'
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="py-32 dark:bg-[#050505] bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-0 w-64 h-64 bg-[#00ff88]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-40 right-0 w-64 h-64 bg-[#ff0066]/10 rounded-full blur-[120px]"></div>
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8" style={{letterSpacing: '-0.03em'}}>
            <span className="text-white dark:text-white">About </span>
            <span className="gradient-text">WDS Finance</span>
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed mb-6 text-white dark:text-[#e0e0e0]">
            Founded by chartered accountants Waqas, Danish, and their elite team, we're redefining financial excellence for the digital age.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-white dark:text-[#888888]">
            From Silicon Valley startups to Fortune 500 enterprises across USA, UK, UAE, Saudi Arabia, and beyond—we deliver sophisticated financial solutions that fuel exponential growth. Our team of ACCA, ICAEW, and CPA-certified professionals combines deep regulatory expertise with innovative technology to solve your most complex challenges.
          </p>
        </div>

        {/* Stats Grid - Asymmetric Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="premium-card p-8 text-center group hover:scale-105 transition-transform"
                style={{transform: `rotate(${i % 2 === 0 ? '0.5deg' : '-0.5deg'})`}}
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-[#00ff88] to-[#00cc66] rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Icon className="w-7 h-7 text-[#050505]" />
                </div>
                <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">
                  {stat.value}
                </div>
                <p className="text-sm md:text-base font-medium text-[#666666] dark:text-[#e0e0e0]">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mission Statement - Large Card */}
        <div className="premium-card p-12 md:p-16 mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00ff88]/20 to-[#ff0066]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#1a1a1a] dark:text-white">
                Our Mission
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-[#666666] dark:text-[#e0e0e0]">
                To empower businesses worldwide with unparalleled financial clarity, strategic insights, and compliant frameworks—enabling them to scale fearlessly in an increasingly complex global economy.
              </p>
            </div>
            
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#1a1a1a] dark:text-white">
                Our Vision
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-[#666666] dark:text-[#e0e0e0]">
                To become the world's most trusted cross-border accounting partner, setting new standards for speed, accuracy, and innovation in financial services.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-16 text-center text-[#1a1a1a] dark:text-white">
            Our Core Values
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              const isMint = value.gradient === 'mint';
              
              return (
                <div
                  key={i}
                  className="premium-card p-8 card-hover group text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${
                    isMint ? 'bg-gradient-to-br from-[#00ff88] to-[#00cc66]' : 'bg-gradient-to-br from-[#ff0066] to-[#cc0052]'
                  } flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all`}>
                    <Icon className="w-8 h-8 text-[#050505]" />
                  </div>
                  
                  <h4 className="text-xl font-bold mb-4 text-[#1a1a1a] dark:text-white">
                    {value.title}
                  </h4>
                  
                  <p className="text-sm leading-relaxed text-[#666666] dark:text-[#e0e0e0]">
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
