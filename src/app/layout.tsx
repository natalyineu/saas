import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import SupportButton from '@/components/SupportButton';
import CookieConsent from '@/components/CookieConsent';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import BackgroundGrid from '@/components/layout/BackgroundGrid';
import { seoMetadata, viewportConfig, generateStructuredData } from '@/config/seo';
import Script from 'next/script';

// Initialize fonts
const inter = Inter({
  subsets: ['latin'],
  weight: ["400", "500", "700"],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata = {
  ...seoMetadata,
  other: {
    ...seoMetadata.other,
    'priority-hints': 'on'
  }
};
export const viewport = viewportConfig;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get structured data objects
  const { structuredData, organizationData, productData, localBusinessData } = generateStructuredData();

  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="canonical" href="https://ai-vertise.com" />
        <meta name="theme-color" content="#6366f1" />
        <script src="/hydration-fix.js" async></script>
        
        {/* Connection preloading for analytics and commonly accessed third parties */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/images/hero-image.jpg" as="image" />
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* Search engine verification tags will be added via metadata.other */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Supported languages - helps with localization signals */}
        <link rel="alternate" href="https://ai-vertise.com" hrefLang="en" />
        <link rel="alternate" href="https://ai-vertise.com" hrefLang="x-default" />
        
        {/* Enhanced structured data */}
        <Script 
          id="structured-data-website" 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Script 
          id="structured-data-organization" 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
        <Script 
          id="structured-data-product" 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }}
        />
        <Script 
          id="structured-data-localbusiness" 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
        />
        
        <GoogleAnalytics />
      </head>
      <body className="min-h-screen bg-soft-gradient relative" suppressHydrationWarning>
        <Script id="hydration-fix" strategy="beforeInteractive">
          {`
            (function() {
              try {
                // Pre-render cleanup of browser extension attributes
                if (typeof window !== 'undefined') {
                  document.querySelectorAll('[bis_skin_checked]').forEach(function(el) {
                    el.removeAttribute('bis_skin_checked');
                  });
                }
              } catch (e) {}
            })();
          `}
        </Script>
        {/* AI-themed background grid with animated gradient nodes */}
        <BackgroundGrid />
        
        <div className="relative z-10">
          <Navbar />
          {children}
          <Footer />
        </div>
        <SupportButton />
        <CookieConsent />
      </body>
    </html>
  );
}
