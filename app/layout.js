import './globals.css'
import Script from 'next/script'
import { spaceGrotesk } from '../lib/fonts'

// استيراد ملفات CSS الخاصة بالقالب
import '../public/assets/css/bootstrap.min.css';
import '../public/assets/css/animate.min.css';
import '../public/assets/css/fontawesome.min.css';
import '../public/assets/css/line-awesome.min.css';
import '../public/assets/css/keyframe-animation.css';
import '../public/assets/css/jquery.datetimepicker.min.css';
import '../public/assets/css/nice-select.css';
import '../public/assets/css/venobox.min.css';
import '../public/assets/css/swiper.min.css';
import '../public/assets/css/elements.css';
import '../public/assets/css/header.css';
import '../public/assets/css/slider.css';

import '../public/assets/css/main.css';
import '../public/assets/css/responsive.css';

export const metadata = {
  metadataBase: new URL('https://dalataxiborlange.se'),
  title: 'Dala Taxi Borlänge | Boka Taxi Online',
  description: 'Din pålitliga taxi i Borlänge och Dalarna. Boka enkelt online eller ring 0243-179 00.',
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({ children }) {
  // كود السكيما (JSON-LD) المحدث بالعنوان الصحيح
  const taxiSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Dala Taxi Borlänge",
    "image": "https://dalataxiborlange.se/assets/img/slider-bg.webp",
    "@id": "https://dalataxiborlange.se",
    "url": "https://dalataxiborlange.se",
    "telephone": "+4624317900",
    "email": "taxi17900@gmail.com",
    "priceRange": "$$",
    "description": "Din pålitliga taxi i Borlänge och Dalarna. Alltid fasta priser till flyg, tåg, Falun och Romme Alpin. Öppet dygnet runt.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ovanbrogatan 2",
      "addressLocality": "Borlänge",
      "postalCode": "784 33",
      "addressCountry": "SE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 60.4843, 
      "longitude": 15.4339
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": [
      { "@type": "City", "name": "Borlänge" },
      { "@type": "City", "name": "Falun" },
      { "@type": "City", "name": "Dalarna" },
      { "@type": "Airport", "name": "Dala Airport" },
      { "@type": "Airport", "name": "Arlanda Airport" }
    ],
    "paymentAccepted": "Cash, Credit Card, Swish, Invoice"
  };

  return (
    <html lang="sv" suppressHydrationWarning={true}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiSchema) }}
        />
      </head>
      <body className={spaceGrotesk.className}>
        {children}
        <div className="dl-cursor">
            <div className="cursor-icon-holder"></div>
        </div>
        {/* تحميل ملفات الجافاسكريبت */}
        <Script src="/assets/js/vendor/jquary-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/vendor/jquery.ajaxchimp.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/bootstrap.min.js" strategy="lazyOnload"/>
        <Script src="/assets/js/vendor/popper.min.js" strategy="lazyOnload"/>
        <Script src="/assets/js/vendor/swiper.min.js" strategy="lazyOnload"/>
        <Script src="/assets/js/vendor/jquery.datetimepicker.full.js" strategy="lazyOnload"/>
        <Script src="/assets/js/vendor/jquery.nice-select.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/vendor/venobox.min.js" strategy="lazyOnload"/>
        <Script src="/assets/js/vendor/smooth-scroll.js" strategy="lazyOnload"/>
        <Script src="/assets/js/vendor/wow.min.js"  />
        
        {/* ملف main.js يحتوي على التفاعل الرئيسي */}
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}