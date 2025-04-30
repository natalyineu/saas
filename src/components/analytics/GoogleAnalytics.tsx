'use client';

import Script from 'next/script';

const GA_TRACKING_ID = 'G-NS08SGTMJ2';

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="lazyOnload"
        id="ga-script"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // Set default consent state
          gtag('consent', 'default', {
            'ad_storage': 'granted',
            'analytics_storage': 'granted'
          });
          
          // Configure Google Analytics
          gtag('config', '${GA_TRACKING_ID}', {
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
            'send_to': '${GA_TRACKING_ID}',
            'page_title': document.title,
            'page_location': window.location.href,
            'page_path': window.location.pathname
          });
        `}
      </Script>
    </>
  );
} 