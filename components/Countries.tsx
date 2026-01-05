'use client';

import { Globe2, Phone, MapPin } from 'lucide-react';

const FlagIcon = ({ country }: { country: string }) => {
  const flags: Record<string, string> = {
    'US': 'M0 0h640v480H0z M0 0h640v55.4H0zm0 110.8h640v55.4H0zm0 110.8h640v55.4H0zm0 110.8h640V480H0zM0 0h256v258.5H0z M0 0h256v27.7H0zm0 55.4h256v27.7H0zm0 55.4h256v27.7H0zm0 55.4h256v27.7H0zm0 55.4h256v27.7H0z M19.7 19.7l7.1 21.8h23l-18.6 13.5 7.1 21.9-18.6-13.5-18.6 13.5 7.1-21.9-18.6-13.5h23z',
    'GB': 'M0 0h640v480H0z M0 0v480l640-480zm640 0v480L0 0z M213.3 0v480h213.4V0z M0 160v160h640V160z',
    'SA': 'M0 0h640v480H0z M128 120h384v80H128zm0 160h384v80H128z',
    'AE': 'M0 0h640v160H0zm0 160h640v160H0zm0 160h640v160H0z M0 0h213.3v480H0z',
    'CA': 'M0 0h213.3v480H0zm426.7 0H640v480H426.7z M320 140l-20 60-40-20 20 60-60 20 60 20-20 60 40-20 20 60 20-60 40 20-20-60 60-20-60-20 20-60-40 20z',
    'AU': 'M0 0h640v480H0z M0 0h320v240H0z M160 120l-15 45-40-30h50l-40 30z',
    'PK': 'M0 0h640v480H0z M160 0h480v480H160z M380 180l-30 90-80-60h100l-80 60z',
    'IN': 'M0 0h640v160H0zm0 160h640v160H0zm0 160h640v160H0z M320 200a40 40 0 1 0 0 80 40 40 0 0 0 0-80z'
  };
  
  return (
    <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg border-2 border-white/20">
      <svg viewBox="0 0 640 480" className="w-full h-full">
        <defs>
          <clipPath id={`flag-${country}`}>
            <rect width="640" height="480" rx="20"/>
          </clipPath>
        </defs>
        <g clipPath={`url(#flag-${country})`}>
          {country === 'US' && (
            <>
              <path fill="#b22234" d="M0 0h640v480H0z"/>
              <path stroke="#fff" strokeWidth="37" d="M0 55.4h640M0 129.2h640M0 203h640M0 276.9h640M0 350.7h640M0 424.5h640M0 498.3h640"/>
              <path fill="#3c3b6e" d="M0 0h256v258.5H0z"/>
              <g fill="#fff">
                <g id="s18">
                  <g id="s9">
                    <g id="s5">
                      <g id="s4">
                        <path id="s" d="M13.5 13.5l5 15.4 13.1-9.5-13.1-9.5z"/>
                        <use href="#s" y="52"/>
                        <use href="#s" y="104"/>
                      </g>
                      <use href="#s" y="156"/>
                    </g>
                    <use href="#s4" x="26"/>
                  </g>
                  <use href="#s9" x="52"/>
                </g>
                <use href="#s18" x="104"/>
                <use href="#s9" x="156"/>
              </g>
            </>
          )}
          {country === 'GB' && (
            <>
              <path fill="#012169" d="M0 0h640v480H0z"/>
              <path stroke="#fff" strokeWidth="96" d="M0 0l640 480M640 0L0 480"/>
              <path stroke="#C8102E" strokeWidth="64" d="M0 0l640 480M640 0L0 480"/>
              <path stroke="#fff" strokeWidth="160" d="M320 0v480M0 240h640"/>
              <path stroke="#C8102E" strokeWidth="96" d="M320 0v480M0 240h640"/>
            </>
          )}
          {country === 'SA' && (
            <>
              <path fill="#165B33" d="M0 0h640v480H0z"/>
              <g fill="#fff" transform="translate(140 180) scale(2.5)">
                <text fontSize="48" fontWeight="bold" fontFamily="Arial">⚔️</text>
              </g>
            </>
          )}
          {country === 'AE' && (
            <>
              <path fill="#00732F" d="M0 0h640v160H0z"/>
              <path fill="#fff" d="M0 160h640v160H0z"/>
              <path d="M0 320h640v160H0z"/>
              <path fill="#FF0000" d="M0 0h200v480H0z"/>
            </>
          )}
          {country === 'CA' && (
            <>
              <path fill="#fff" d="M0 0h640v480H0z"/>
              <path fill="#FF0000" d="M0 0h160v480H0zm480 0h160v480H480z"/>
              <path fill="#FF0000" d="M320 100l-40 80-60-20 40 80-80 20 80 40-40 80 60-40 40 80 40-80 60 40-40-80 80-40-80-20 40-80-60 20z"/>
            </>
          )}
          {country === 'AU' && (
            <>
              <path fill="#012169" d="M0 0h640v480H0z"/>
              <path fill="#fff" d="M0 0h320v240H0z"/>
              <path fill="#012169" d="M0 0h320v240H0z"/>
              <path stroke="#fff" strokeWidth="48" d="M160 0v240M0 120h320"/>
              <path stroke="#C8102E" strokeWidth="32" d="M160 0v240M0 120h320"/>
              <path fill="#fff" d="M400 100l-20 60-50-40h60l-50 40 20-60-20 60-50-40h60l-50 40z"/>
            </>
          )}
          {country === 'PK' && (
            <>
              <path fill="#01411C" d="M0 0h640v480H0z"/>
              <path fill="#fff" d="M0 0h160v480H0z"/>
              <circle cx="400" cy="240" r="80" fill="#fff"/>
              <circle cx="420" cy="240" r="70" fill="#01411C"/>
              <path fill="#fff" d="M360 200l20 60 50-40-50 40 20-60-20 60 50 40-50-40-20 60z"/>
            </>
          )}
          {country === 'IN' && (
            <>
              <path fill="#FF9933" d="M0 0h640v160H0z"/>
              <path fill="#fff" d="M0 160h640v160H0z"/>
              <path fill="#138808" d="M0 320h640v160H0z"/>
              <circle cx="320" cy="240" r="50" stroke="#000080" strokeWidth="3" fill="none"/>
              <circle cx="320" cy="240" r="5" fill="#000080"/>
            </>
          )}
        </g>
      </svg>
    </div>
  );
};

const countries = [
  { code: 'US', name: 'United States', office: 'New York', phone: '+1 (234) 567-8900', services: 'Tax, Accounting, IRS Compliance' },
  { code: 'GB', name: 'United Kingdom', office: 'London', phone: '+44 20 7123 4567', services: 'UK GAAP, HMRC, VAT Services' },
  { code: 'SA', name: 'Saudi Arabia', office: 'Riyadh', phone: '+966 11 123 4567', services: 'ZATCA E-invoicing, Zakat, VAT' },
  { code: 'AE', name: 'UAE', office: 'Dubai', phone: '+971 4 123 4567', services: 'Corporate Tax, VAT, Freezone Setup' },
  { code: 'CA', name: 'Canada', office: 'Toronto', phone: '+1 (416) 123 4567', services: 'CRA Compliance, GST/HST' },
  { code: 'AU', name: 'Australia', office: 'Sydney', phone: '+61 2 1234 5678', services: 'ATO Compliance, BAS Lodgement' },
  { code: 'PK', name: 'Pakistan', office: 'Karachi', phone: '+92 21 123 4567', services: 'FBR Filing, Sales Tax, Audits' },
  { code: 'IN', name: 'India', office: 'Mumbai', phone: '+91 22 1234 5678', services: 'GST Returns, Income Tax, ROC' },
];

export default function Countries() {
  return (
    <section id="countries" className="py-32 dark:bg-[#0a0a0a] bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
        <Globe2 className="w-[800px] h-[800px] dark:text-[#00ff88] text-gray-300" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6" style={{letterSpacing: '-0.03em'}}>
            <span className="gradient-text">Global Reach</span>
            <span className="text-gray-900 dark:text-white">, Local Expertise</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-[#888888] max-w-3xl mx-auto">
            Professional accounting services across continents
          </p>
        </div>

        {/* HORIZONTAL SCROLL CAROUSEL */}
        <div className="relative">
          <div className="overflow-x-auto hide-scrollbar pb-8">
            <div className="flex gap-6" style={{width: 'max-content'}}>
              {countries.map((country, i) => (
                <div
                  key={i}
                  className="premium-card p-8 w-[340px] hover:scale-105 transition-transform relative"
                  style={{transform: `rotate(${i % 2 === 0 ? '1deg' : '-1deg'})`}}
                >
                  <div className="absolute top-4 right-4 w-2 h-2 bg-[#00ff88] rounded-full animate-pulse"></div>
                  
                  <div className="mb-6">
                    <FlagIcon country={country.code} />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {country.name}
                  </h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-[#888888] text-sm">
                      <MapPin className="w-4 h-4 text-[#00ff88]" />
                      <span>{country.office} Office</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-[#888888] text-sm">
                      <Phone className="w-4 h-4 text-[#00ff88]" />
                      <a href={`tel:${country.phone}`} className="hover:text-[#00ff88] transition-colors">
                        {country.phone}
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-[#888888] text-sm leading-relaxed">
                    {country.services}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm dark:text-[#888888] text-gray-500">← Scroll to explore →</p>
          </div>
        </div>
      </div>
    </section>
  );
}
