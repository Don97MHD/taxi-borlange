'use client';
import { useEffect } from 'react';

export default function HomeInteractive() {
  useEffect(() => {
    // ننتظر قليلاً حتى نتأكد أن المكتبات الخارجية (jQuery, Swiper) قد تم تحميلها
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && window.jQuery) {
        const $ = window.jQuery;

        // 1. إصلاح القوائم المنسدلة (Nice Select)
        if ($().niceSelect) {
          $('select').niceSelect('destroy'); // تدمير القديم إن وجد لتجنب التكرار
          $('select').niceSelect();
        }

        // 2. إصلاح السلايدر الرئيسي (Main Slider)
        if (typeof Swiper !== 'undefined') {
          // Main Slider 1
          if ($('.main-slider').length > 0) {
             const sliderOptions = {
                speed: 1000,
                autoplay: false, // يمكنك تفعيلها بجعلها true
                parallax: false,
                mousewheel: false,
                loop: true,
                effect: 'fade',
                pagination: {
                    el: '.main-slider .slider-pagination',
                    clickable: true,
                    type: 'fraction',
                },
                navigation: {
                    nextEl: '.main-slider .slider-button-next',
                    prevEl: '.main-slider .slider-button-prev'
                }
            };
            // تهيئة السلايدر
            new Swiper('.main-slider', sliderOptions);
          }

          // Service Carousel (سلايدر الخدمات)
          if ($('.service-carousel').length > 0) {
             new Swiper(".service-carousel", {
                slidesPerView: 3,
                spaceBetween: 30,
                slidesPerGroup: 1,
                loop: true,
                autoplay: false,
                speed: 400,
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
                    1024: { slidesPerView: 3 }
                }
            });
          }
          
          // Testimonial Carousel (سلايدر التقييمات)
          if ($('.testimonial-carousel').length > 0) {
             new Swiper(".testimonial-carousel", {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: ".testi-pagination .swiper-pagination",
                    clickable: true,
                },
            });
          }
        }

        // 3. Date Time Picker (إصلاح حقول التاريخ والوقت)
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
    }, 100); // تأخير 100 ميلي ثانية فقط

    return () => clearTimeout(timer);
  }, []);

  return null; // هذا المكون لا يعرض شيئاً، هو فقط للكود
}