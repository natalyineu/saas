import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Comfortaa } from 'next/font/google';
import SupportButton from './components/SupportButton';
import CookieConsent from './components/CookieConsent';
import Script from 'next/script';

// Initialize fonts
const geist = Inter({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700"],
  variable: '--font-geist',
});

// Initialize Comfortaa font
const comfortaa = Comfortaa({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-comfortaa',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ai-vertise.com'),
  title: 'AI-Vertise Boost | AI-Powered Ad Management',
  description: 'Supercharge your advertising with our AI-powered platform. Smart targeting, fast launch, and budget optimization designed for SMBs.',
  keywords: 'AI advertising, digital marketing, ad management, SMB marketing, AI-powered ads, advertising automation, marketing for small businesses',
  authors: [{ name: 'AI-Vertise Team' }],
  creator: 'AI-Vertise',
  publisher: 'AI-Vertise',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ai-vertise.com',
    title: 'AI-Vertise Boost | AI-Powered Ad Management',
    description: 'Supercharge your advertising with our AI-powered platform. Smart targeting, fast launch, and budget optimization designed for SMBs.',
    siteName: 'AI-Vertise Boost',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AI-Vertise Boost Platform',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Vertise Boost | AI-Powered Ad Management',
    description: 'Supercharge your advertising with our AI-powered platform. Smart targeting, fast launch, and budget optimization designed for SMBs.',
    images: ['/og-image.jpg'],
    creator: '@aivertise',
    site: '@aivertise',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48 64x64', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3F5EFB',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${comfortaa.variable}`}>
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NS08SGTMJ2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Configure Google Analytics
            gtag('config', 'G-NS08SGTMJ2', {
              'anonymize_ip': true,
              'send_page_view': true,
              'allow_google_signals': true,
              'allow_ad_personalization_signals': true,
              'linker': {
                'domains': ['aivertise.io']
              }
            });

            // Enhanced measurement
            gtag('event', 'page_view', {
              'send_to': 'G-NS08SGTMJ2',
              'page_title': document.title,
              'page_location': window.location.href,
              'page_path': window.location.pathname
            });
          `}
        </Script>
        
        <Script
          id="buy-me-coffee-script"
          src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
          data-name="bmc-button"
          data-slug="aivertise"
          data-color="#5F7FFF"
          data-emoji="🎯"
          data-font="Comic"
          data-text="Buy an Ads package"
          data-outline-color="#000000"
          data-font-color="#ffffff"
          data-coffee-color="#FFDD00"
          data-url="https://buymeacoffee.com/aivertise/membership"
          strategy="afterInteractive"
        />
        <Script
          id="buy-me-coffee-init"
          src="/buymeacoffee-init.js"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen bg-[#FCFCFC] relative" suppressHydrationWarning>
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
