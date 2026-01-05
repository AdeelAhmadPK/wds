import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import HowWeWork from '@/components/HowWeWork';
import Certifications from '@/components/Certifications';
import Countries from '@/components/Countries';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Industries from '@/components/Industries';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Script from 'next/script';

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What accounting services do you provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer comprehensive accounting services including tax planning & compliance, audit & assurance, bookkeeping, VAT registration & filing, payroll management, company formation, financial reporting, and business advisory services across multiple jurisdictions."
        }
      },
      {
        "@type": "Question",
        "name": "Which countries do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve clients in USA, UK, UAE (Dubai), Saudi Arabia (KSA), Canada, Australia, Pakistan, India, and other international markets. Our team has expertise in local tax laws and accounting regulations for each jurisdiction."
        }
      },
      {
        "@type": "Question",
        "name": "Are you qualified chartered accountants?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our team consists of ACCA certified, ICAEW member, and CPA qualified chartered accountants with over 20 years of combined experience in international accounting and taxation."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <HowWeWork />
        <Certifications />
        <Countries />
        <WhyChooseUs />
        <Testimonials />
        <Industries />
        <FAQ />
        <CTASection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}


