import './globals.css';
import { Nunito } from 'next/font/google';
import SupportButton from './components/SupportButton';
import CookieConsent from './components/CookieConsent';
import GoogleAnalytics from './components/analytics/GoogleAnalytics';
import BuyMeCoffeeScript from './components/analytics/BuyMeCoffeeScript';
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
        <div className="fixed inset-0 z-0 overflow-hidden opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[length:40px_40px]"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-primary-purple to-primary-pink blur-3xl animate-pulse-slow opacity-40"></div>
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400 to-primary-purple blur-3xl animate-pulse-slow opacity-30 animation-delay-1000"></div>
        </div>
        
        <div className="relative z-10">
          {children}
        </div>
        <SupportButton />
        <CookieConsent />
      </body>
    </html>
  );
}
