import './globals.css' // يمكنك تركه أو حذفه
import Script from 'next/script'

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
  title: 'Dala Taxi Borlänge | Boka Taxi Online',
  description: 'Din pålitliga taxi i Borlänge och Dalarna. Boka enkelt online eller ring 0243-179 00.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="sv" suppressHydrationWarning={true}>
      <body>
        {children}
        
        {/* تحميل ملفات الجافاسكريبت */}
        {/* jQuery يجب تحميله أولاً */}
        <Script src="/assets/js/vendor/jquary-3.6.0.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js" strategy="beforeInteractive" />
         <Script src="/assets/js/vendor/jquery.ajaxchimp.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/vendor/bootstrap.min.js" />
        <Script src="/assets/js/vendor/popper.min.js" />
        <Script src="/assets/js/vendor/swiper.min.js" />
        <Script src="/assets/js/vendor/jquery.datetimepicker.full.js" />
        <Script src="/assets/js/vendor/jquery.nice-select.min.js" />
        <Script src="/assets/js/vendor/venobox.min.js" />
        <Script src="/assets/js/vendor/smooth-scroll.js" />
        <Script src="/assets/js/vendor/wow.min.js" />
        
        {/* ملف main.js يحتوي على التفاعل الرئيسي */}
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}