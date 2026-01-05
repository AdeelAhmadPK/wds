# Deployment Guide - WDS Finance Website

## Quick Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Why Vercel?**
- Built by Next.js creators
- Zero configuration
- Automatic HTTPS
- Global CDN
- Free tier available

**Steps:**

1. **Push to GitHub**
```bash
cd "c:\Users\Muhammad Adeel\Desktop\wds"
git add .
git commit -m "Initial WDS Finance website"
git remote add origin https://github.com/yourusername/wds-finance.git
git push -u origin main
```

2. **Deploy on Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "Import Project"
- Connect your GitHub account
- Select the repository
- Click "Deploy"

3. **Custom Domain**
- Go to Project Settings > Domains
- Add `wdsfinance.com`
- Update DNS records as shown
- SSL automatically configured

**Time to deploy: 5 minutes**

---

### Option 2: Netlify

**Steps:**

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Build and Deploy**
```bash
cd "c:\Users\Muhammad Adeel\Desktop\wds"
npm run build
netlify deploy --prod
```

3. **Follow prompts** to connect your site

---

### Option 3: Manual Server Deployment (VPS/Dedicated)

**Requirements:**
- Node.js 18+
- nginx or similar web server
- PM2 for process management

**Steps:**

1. **Build the project**
```bash
npm run build
```

2. **Transfer files** to server
```bash
scp -r .next package.json package-lock.json user@server:/var/www/wds
```

3. **Install on server**
```bash
ssh user@server
cd /var/www/wds
npm install --production
```

4. **Start with PM2**
```bash
npm install -g pm2
pm2 start npm --name "wds-finance" -- start
pm2 save
pm2 startup
```

5. **Configure nginx** (example)
```nginx
server {
    listen 80;
    server_name wdsfinance.com www.wdsfinance.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

6. **SSL with Let's Encrypt**
```bash
sudo certbot --nginx -d wdsfinance.com -d www.wdsfinance.com
```

---

## Pre-Deployment Checklist

### ✅ Required Before Launch

1. **Environment Variables** (Create `.env.local`)
```env
# Email Service (if using SendGrid)
SENDGRID_API_KEY=your_api_key_here
CONTACT_EMAIL=info@wdsfinance.com

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Site URL (for production)
NEXT_PUBLIC_SITE_URL=https://wdsfinance.com
```

2. **Update Contact Information**
   - [ ] Update phone numbers in `/components/Header.tsx`
   - [ ] Update email addresses in `/components/Header.tsx` and `/components/Footer.tsx`
   - [ ] Update office addresses in `/components/Footer.tsx`

3. **Update URLs in Schema Markup**
   - [ ] Replace all `https://wdsfinance.com` in `/app/layout.tsx` with actual domain
   - [ ] Update logo URL in organization schema
   - [ ] Update sitemap URLs in `/app/sitemap.ts`

4. **Add Images**
   - [ ] Add `/public/logo.png` (company logo)
   - [ ] Add `/public/favicon.ico` (website icon)
   - [ ] Add team photos if needed
   - [ ] Add service images (optional)

5. **Configure Email Service**
   - [ ] Set up SendGrid, Resend, or similar
   - [ ] Update `/app/api/contact/route.ts` with email logic
   - [ ] Test form submissions

6. **Analytics Setup**
   - [ ] Create Google Analytics 4 property
   - [ ] Add tracking code to layout
   - [ ] Set up Google Search Console
   - [ ] Submit sitemap to Search Console

7. **SEO Verification**
   - [ ] Add Google Search Console verification code to `/app/layout.tsx`
   - [ ] Add Bing Webmaster verification (optional)

8. **Security**
   - [ ] Add CSRF protection
   - [ ] Configure rate limiting on contact form
   - [ ] Set up security headers in `next.config.ts`

---

## Post-Deployment Tasks

### Immediate (Day 1)

1. **Verify Deployment**
   - [ ] Check all pages load correctly
   - [ ] Test contact form
   - [ ] Test on mobile devices
   - [ ] Check all links work

2. **SEO Submission**
   - [ ] Submit sitemap to Google Search Console
   - [ ] Submit to Bing Webmaster Tools
   - [ ] Request indexing for homepage

3. **Analytics**
   - [ ] Verify Google Analytics tracking
   - [ ] Set up conversion goals
   - [ ] Test event tracking

### Week 1

4. **Performance Testing**
   - [ ] Run Google PageSpeed Insights
   - [ ] Test on GTmetrix
   - [ ] Check Core Web Vitals

5. **Content Review**
   - [ ] Proofread all text
   - [ ] Check for typos
   - [ ] Verify all facts and figures

6. **Social Media**
   - [ ] Set up social media profiles
   - [ ] Share launch announcement
   - [ ] Update profile links

### Ongoing

7. **SEO Monitoring**
   - [ ] Monitor Search Console weekly
   - [ ] Track keyword rankings
   - [ ] Fix any crawl errors

8. **Content Marketing**
   - [ ] Start blog section
   - [ ] Create service-specific pages
   - [ ] Add country-specific landing pages

---

## Domain Configuration

### DNS Settings (Example)

**A Record:**
```
@ → [Your server IP or Vercel IP]
www → [Your server IP or Vercel IP]
```

**For Vercel:**
Follow the custom domain wizard - it will provide exact DNS settings.

**Propagation Time:** 24-48 hours (but usually faster)

---

## Email Service Setup Examples

### Option 1: Resend (Recommended)

```bash
npm install resend
```

Update `/app/api/contact/route.ts`:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();
  
  await resend.emails.send({
    from: 'website@wdsfinance.com',
    to: 'info@wdsfinance.com',
    subject: `New Contact Form: ${data.name}`,
    html: `<p><strong>Name:</strong> ${data.name}</p>...`
  });
  
  return NextResponse.json({ success: true });
}
```

### Option 2: SendGrid

```bash
npm install @sendgrid/mail
```

---

## Performance Optimization Tips

1. **Enable Compression**
Add to `next.config.ts`:
```typescript
compress: true,
```

2. **Image Optimization**
Always use Next.js `<Image>` component for images

3. **Font Optimization**
Already configured with Google Fonts

4. **Caching**
Vercel handles this automatically

---

## Monitoring & Maintenance

### Tools to Set Up

1. **Uptime Monitoring**
   - UptimeRobot (free)
   - Pingdom

2. **Error Tracking**
   - Sentry
   - LogRocket

3. **Analytics**
   - Google Analytics 4
   - Microsoft Clarity (free heatmaps)

---

## Backup Strategy

### Recommended

1. **Code**: GitHub repository (already done)
2. **Database**: If you add one later, set up daily backups
3. **Content**: Export from CMS regularly

---

## Support & Troubleshooting

### Common Issues

**Issue: Build fails**
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

**Issue: Contact form not working**
- Check API route is deployed
- Verify environment variables
- Check browser console for errors

**Issue: Slow loading**
- Optimize images
- Check PageSpeed Insights
- Enable caching

---

## Recommended Next Steps After Launch

1. **Create Additional Pages**
   - `/services/tax-planning`
   - `/services/audit`
   - `/countries/usa`
   - `/countries/uk`
   - `/blog`

2. **Add Advanced Features**
   - Live chat widget
   - Client portal
   - Blog with CMS
   - Appointment booking system

3. **Marketing**
   - Google Ads campaigns
   - LinkedIn advertising
   - Content marketing
   - Local SEO optimization

---

## Cost Estimates

### Free Tier (Suitable for Launch)
- Vercel: Free
- Domain: ~$12/year
- Email service: Free tier (500 emails/month)
- **Total: ~$12/year**

### Professional (Recommended)
- Vercel Pro: $20/month
- Domain: $12/year
- Email service: $10/month
- Analytics tools: Free
- **Total: ~$30/month**

---

## Getting Help

- Next.js Docs: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- Community: Next.js Discord

---

**Ready to deploy! 🚀**

Choose Vercel for the fastest, easiest deployment.
