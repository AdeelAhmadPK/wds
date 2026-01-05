'use client';

import { MessageSquare, Calendar } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Full-Width Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] via-[#00cc66] to-[#00ff88] animate-gradient-x"></div>
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}></div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-extrabold text-[#050505] mb-8 leading-[1.1]" style={{letterSpacing: '-0.03em'}}>
            Ready to Transform
            <br />
            Your Finances?
          </h2>
          
          <p className="text-2xl text-[#050505]/80 mb-12 font-semibold">
            Join 500+ businesses worldwide trusting us with their accounting
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#contact"
              className="bg-[#050505] text-[#00ff88] px-12 py-6 rounded-xl font-bold text-lg flex items-center gap-3 hover:bg-[#1a1a1a] transition-all shadow-2xl"
            >
              <Calendar className="w-6 h-6" />
              Book Free Consultation
            </a>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-4 border-[#050505] text-[#050505] px-12 py-6 rounded-xl font-bold text-lg flex items-center gap-3 hover:bg-[#050505] hover:text-[#00ff88] transition-all"
            >
              <MessageSquare className="w-6 h-6" />
              Chat on WhatsApp
            </a>
          </div>
          
          <p className="text-[#050505]/70 font-semibold text-sm mt-10">
            ⚡ 2-hour response time • 🔒 100% Confidential • ✅ No Obligation
          </p>
        </div>
      </div>
    </section>
  );
}
