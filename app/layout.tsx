import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Chartered Accountants | Accounting Services USA, UK, UAE, KSA | WDS Finance",
  description: "Expert chartered accountants providing tax, audit, bookkeeping & business advisory services in USA, UK, Dubai, Saudi Arabia. Get free consultation today!",
  keywords: [
    "chartered accountants",
    "accounting services",
    "tax consultants",
    "USA accountant",
    "UK accounting firm",
    "Dubai chartered accountants",
    "KSA tax services",
    "international accounting",
    "audit services",
    "bookkeeping",
    "VAT registration",
    "company formation",
    "business advisory",
    "ACCA",
    "ICAEW",
    "CPA"
  ],
  authors: [{ name: "Waqas, Danish & Co Chartered Accountants" }],
  openGraph: {
    title: "WDS Finance - Expert Chartered Accountants Worldwide",
    description: "Comprehensive international accounting, tax, and business advisory services",
    url: "https://wdsfinance.com",
    siteName: "WDS Finance",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WDS Finance - Chartered Accountants",
    description: "Expert accounting services across USA, UK, UAE, KSA & more",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

import ThemeProvider from '@/components/ThemeProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Waqas, Danish & Co Chartered Accountants",
    alternateName: "WDS Finance",
    url: "https://wdsfinance.com",
    logo: "https://wdsfinance.com/logo.png",
    description: "Expert chartered accountants providing international tax, audit, and business advisory services",
    email: "info@wdsfinance.com",
    telephone: "+1-234-567-8900",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Financial District, Suite 500",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10004",
      addressCountry: "US"
    },
    areaServed: ["US", "GB", "AE", "SA", "CA", "AU", "PK", "IN"],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127"
    },
    sameAs: [
      "https://www.linkedin.com/company/wdsfinance",
      "https://www.facebook.com/wdsfinance",
      "https://twitter.com/wdsfinance"
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://wdsfinance.com" />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
