import './globals.css';
import { Nunito } from 'next/font/google';
import SupportButton from './components/SupportButton';
import CookieConsent from './components/CookieConsent';
import GoogleAnalytics from './components/analytics/GoogleAnalytics';
import BuyMeCoffeeScript from './components/analytics/BuyMeCoffeeScript';
import BackgroundGrid from './components/layout/BackgroundGrid';
import { seoMetadata, viewportConfig } from './config/seo';

// Initialize fonts
const nunito = Nunito({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
  variable: '--font-nunito',
});

export const metadata = seoMetadata;
export const viewport = viewportConfig;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <GoogleAnalytics />
        <BuyMeCoffeeScript />
      </head>
      <body className="min-h-screen bg-soft-gradient relative" suppressHydrationWarning>
        {/* AI-themed background grid with animated gradient nodes */}
        <BackgroundGrid />
        
        <div className="relative z-10">
          {children}
        </div>
        <SupportButton />
        <CookieConsent />
      </body>
    </html>
  );
}
