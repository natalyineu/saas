import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import SupportButton from '@/components/SupportButton';
import CookieConsent from '@/components/CookieConsent';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';
import BuyMeCoffeeScript from '@/components/analytics/BuyMeCoffeeScript';
import BackgroundGrid from '@/components/layout/BackgroundGrid';
import { seoMetadata, viewportConfig } from '@/config/seo';
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
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="canonical" href="https://ai-vertise.com" />
        <meta name="theme-color" content="#6366f1" />
        <script src="/hydration-fix.js" async></script>
        
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://cdn.buymeacoffee.com" crossOrigin="anonymous" />
        
        <GoogleAnalytics />
        <BuyMeCoffeeScript />
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
        </div>
        <SupportButton />
        <CookieConsent />
      </body>
    </html>
  );
}
