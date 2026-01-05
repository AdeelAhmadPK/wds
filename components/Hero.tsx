'use client';

import { Sparkles, ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20">
      {/* True Black Background */}
      <div className="absolute inset-0 dark:bg-[#050505] bg-white"></div>
      
      {/* Floating Gradient Blobs - Mint + Pink */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-[#00ff88] rounded-full filter blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-[#ff0066] rounded-full filter blur-[120px] opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="container relative z-10">
        {/* ASYMMETRIC LAYOUT: 60% Left, 40% Right */}
        <div className="grid lg:grid-cols-[60fr_40fr] gap-16 items-center">
          {/* LEFT: Content */}
          <div>
            {/* Badge with Live Indicator */}
            <div className="inline-flex items-center gap-2 premium-card px-6 py-3 rounded-full mb-8">
              <div className="w-2 h-2 rounded-full bg-[#00ff88] pulse-glow"></div>
              <span className="text-sm font-semibold text-gray-700 dark:text-[#e0e0e0]">Trusted by 500+ Global Businesses</span>
            </div>

            {/* MASSIVE HEADLINE - 88px, Space Grotesk, -0.03em tracking */}
            <h1 className="font-extrabold leading-[1.1] mb-8 text-5xl sm:text-6xl md:text-7xl lg:text-[88px]" style={{letterSpacing: '-0.03em'}}>
              <span className="text-gray-900 dark:text-white">Your Global</span>
              <br />
              <span className="gradient-text">Financial</span>{' '}
              <span className="text-gray-900 dark:text-white">Partner</span>
            </h1>

            {/* Body Copy - 18px DM Sans, 1.7 line-height */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-[#888888] mb-12 max-w-2xl leading-relaxed">
              Expert chartered accountants delivering tax optimization, audit, and business advisory across <span className="gradient-text font-bold">25+ countries</span>. We don't just crunch numbers—we craft financial strategies that fuel growth.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 items-center mb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#00ff88]/20 flex items-center justify-center">
                  <span className="text-lg">✓</span>
                </div>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">ACCA Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#00ff88]/20 flex items-center justify-center">
                  <span className="text-lg">✓</span>
                </div>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">ISO 27001</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#00ff88]/20 flex items-center justify-center">
                  <span className="text-lg">✓</span>
                </div>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">SOC 2 Compliant</span>
              </div>
            </div>

            {/* CTAs - Electric Mint + Hot Pink */}
            <div className="flex flex-wrap gap-6 items-center">
              <a
                href="#contact"
                className="gradient-btn px-10 py-5 text-lg font-bold flex items-center gap-3"
              >
                Book Free Consultation
                <ArrowRight className="w-6 h-6" />
              </a>
              <a
                href="#services"
                className="gradient-btn-pink px-10 py-5 text-lg font-bold flex items-center gap-3"
              >
                <Play className="w-6 h-6" />
                Watch Demo
              </a>
            </div>

            {/* Animated Stats Row */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 max-w-2xl">
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold gradient-text mb-2">500+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-[#888888] font-medium">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold gradient-text mb-2">25+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-[#888888] font-medium">Countries</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold gradient-text mb-2">4.9★</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-[#888888] font-medium">Rating</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Animated 3D Cards (Asymmetric, Overlapping) */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Large Card - Intentionally Rotated 3deg */}
              <div className="premium-card p-12 transform rotate-3 hover:rotate-6 transition-transform duration-500">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00ff88] to-[#00cc66] mb-6 flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-[#050505]" />
                </div>
                <h3 className="text-2xl font-bold dark:text-white text-gray-900 mb-4">
                  $2M+ Saved
                </h3>
                <p className="dark:text-[#888888] text-gray-600">
                  Average tax optimization for enterprise clients in 2025
                </p>
              </div>

              {/* Small Card - Overlapping, -6deg rotation */}
              <div className="premium-card p-8 absolute -bottom-8 -left-8 transform -rotate-6 hover:-rotate-12 transition-transform duration-500 sharp-shadow-pink">
                <div className="text-6xl mb-4">🚀</div>
                <p className="text-sm font-bold dark:text-white text-gray-900">
                  Fast 24-48hr Turnaround
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-8 h-14 border-2 dark:border-[#00ff88] border-gray-300 rounded-full flex justify-center">
          <div className="w-2 h-3 dark:bg-[#00ff88] bg-gray-400 rounded-full mt-3 animate-bounce"></div>
        </div>
      </div>
      
      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-20 right-20 w-20 h-20 border-4 border-[#00ff88]/20 rounded-full hidden xl:block animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 border-4 border-[#ff0066]/20 rounded-xl hidden xl:block rotate-12"></div>
    </section>
  );
}
