# WDS Finance - Chartered Accountants Website

A modern, SEO-optimized Next.js website for Waqas, Danish & Co Chartered Accountants, providing international accounting services across USA, UK, UAE, KSA, and more.

## 🚀 Features

- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for smooth animations
- **SEO Optimized** with proper meta tags and Schema.org markup
- **Responsive Design** - Mobile-first approach
- **Performance Optimized** - Fast loading times
- **Accessibility Compliant** - WCAG 2.1 standards

## 📦 Tech Stack

- Next.js 14+
- React 18+
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Project Structure

```
wds/
├── app/
│   ├── api/contact/route.ts      # Contact form API
│   ├── layout.tsx                # Root layout with SEO
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global styles
│   ├── sitemap.ts                # XML sitemap
│   └── robots.ts                 # Robots.txt
├── components/
│   ├── Header.tsx                # Navigation
│   ├── Hero.tsx                  # Hero section
│   ├── Services.tsx              # Services grid
│   ├── Countries.tsx             # Countries served
│   ├── WhyChooseUs.tsx           # Features
│   ├── Testimonials.tsx          # Client reviews
│   ├── Industries.tsx            # Industries
│   ├── FAQ.tsx                   # FAQs
│   ├── CTASection.tsx            # Call-to-action
│   ├── ContactForm.tsx           # Contact form
│   └── Footer.tsx                # Footer
└── public/                       # Static assets
```

## 🎨 Design System

- **Primary Color**: Navy Blue (#1a2332)
- **Secondary Color**: Gold (#f59e0b)
- **Fonts**: Montserrat (headings), Open Sans (body)

## 🔍 SEO Features

✅ Semantic HTML5 with proper heading hierarchy
✅ Meta tags and Open Graph
✅ Schema.org structured data (Organization, FAQ, Reviews)
✅ XML Sitemap and Robots.txt
✅ Mobile-responsive design
✅ Fast loading (Target: 90+ PageSpeed)

## 🌍 Services & Countries

**Services**: Tax Planning, Audit, Bookkeeping, VAT, Payroll, Company Formation, Financial Reporting

**Countries**: USA, UK, UAE, KSA, Canada, Australia, Pakistan, India

## 📧 Contact Form Setup

The contact form is ready to use. To enable email functionality, update `/app/api/contact/route.ts` with your email service (e.g., SendGrid, Resend).

## 🚀 Deployment

Deploy easily on Vercel:

```bash
npm run build
vercel --prod
```

## 📝 Customization

- **Update contact info**: Edit `Header.tsx` and `Footer.tsx`
- **Update services**: Edit `Services.tsx`
- **Change colors**: Edit `tailwind.config.ts`

## 📄 License

© 2026 Waqas, Danish & Co Chartered Accountants. All Rights Reserved.

**Built with Next.js 14+**
