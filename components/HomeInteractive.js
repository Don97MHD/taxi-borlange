'use client';
import { useEffect } from 'react';

export default function HomeInteractive() {
  useEffect(() => {
    let checkInterval; // متغير لحفظ المؤقت

    // دالة تقوم بتهيئة العناصر
    const initElements = () => {
      // 1. نتحقق هل مكتبة jQuery و Swiper أصبحتا جاهزتين في المتصفح؟
      if (typeof window !== 'undefined' && window.jQuery && typeof window.Swiper !== 'undefined') {
        
        // إذا وجدناهما، نوقف المؤقت فوراً حتى لا يعمل الكود أكثر من مرة
        clearInterval(checkInterval);
        
        const $ = window.jQuery;

        // 2. إصلاح القوائم المنسدلة (Nice Select)
        if ($().niceSelect) {
          $('select').niceSelect('destroy'); 
          $('select').niceSelect();
        }

        // 3. Main Slider 1
        if ($('.main-slider').length > 0) {
           new window.Swiper('.main-slider', {
              speed: 1000,
              autoplay: false, 
              loop: true,
              effect: 'fade',
              observer: true,       // يراقب أي تغير في الشاشة
              observeParents: true,
              pagination: {
                  el: '.main-slider .slider-pagination',
                  clickable: true,
                  type: 'fraction',
              },
              navigation: {
                  nextEl: '.main-slider .slider-button-next',
                  prevEl: '.main-slider .slider-button-prev'
              }
          });
        }

        // 4. Service Carousel (هذا هو السلايدر الذي يسبب المشكلة)
        if ($('.service-carousel').length > 0) {
           new window.Swiper(".service-carousel", {
              slidesPerView: 3,
              spaceBetween: 30,
              slidesPerGroup: 1,
              loop: true,
              speed: 400,
              // الخصائص السحرية لمنع تداخل الأحجام:
              observer: true,
              observeParents: true,
              updateOnImagesReady: true, // يجبر السلايدر على تحديث نفسه بعد تحميل الصور
              pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
              },
              navigation: {
                  nextEl: ".swiper-outside .swiper-next",
                  prevEl: ".swiper-outside .swiper-prev",
              },
              breakpoints: {
                  320: { slidesPerView: 1, spaceBetween: 25 },
                  767: { slidesPerView: 2, spaceBetween: 30 },
                  1024: { slidesPerView: 3, spaceBetween: 30 }
              }
          });
        }
        
        // 5. Testimonial Carousel
        if ($('.testimonial-carousel').length > 0) {
           new window.Swiper(".testimonial-carousel", {
              slidesPerView: 1,
              spaceBetween: 30,
              loop: true,
              observer: true,
              observeParents: true,
              pagination: {
                  el: ".testi-pagination .swiper-pagination",
                  clickable: true,
              },
          });
        }

        // 6. Date Time Picker 
        if ($().datetimepicker) {
            $('.date-picker').datetimepicker({
                timepicker: false,
                format:'d/m/Y'
            });
            $('.time-picker').datetimepicker({
                datepicker: false,
                format: 'H:i',
                step: 5
            });
        }
      }
    };

    // تشغيل الفحص الذكي: كل 100 ميلي ثانية، افحص هل المكتبات تحملت؟
    checkInterval = setInterval(initElements, 100);

    // تنظيف المؤقت في حال خروج المستخدم من الصفحة بسرعة
    return () => clearInterval(checkInterval);
    
  }, []);

  return null; 
}