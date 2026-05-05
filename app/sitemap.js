import { servicesData } from '@/data/services';
import { flygtaxiData } from '@/data/flygtaxiData';
import { taxiDalarnaData } from '@/data/taxiDalarnaData';

export default async function sitemap() {
  // 1. ضع رابط موقعك الأساسي هنا
  const baseUrl = 'https://dalataxiborlange.se';

  // 2. تعريف الصفحات الثابتة (Static Pages)
  const staticRoutes = [
    '', // الصفحة الرئيسية
    '/om-oss',
    '/kontakt',
    '/book-taxi',
    '/priser',
    '/bli-foretagskund',
    '/bud-paket',
    '/flygtaxi',       
    '/taxi-dalarna',   
    '/vara-tjanster',  
    '/taxi-med-barnstol',
    '/faqs',
    '/information/anvandarvillkor',
    '/information/integritetspolicy',
    '/omdomen',
  ];

  const staticPages = staticRoutes.map((route) => ({
    // إضافة السلاش في نهاية الرابط، مع تجنب تكراره في الصفحة الرئيسية
    url: route === '' ? `${baseUrl}/` : `${baseUrl}${route}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  // 3. تعريف صفحات الخدمات الديناميكية
  const servicePages = servicesData.map((service) => ({
    url: `${baseUrl}/vara-tjanster/${service.id}/`, // إضافة السلاش
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // 4. تعريف صفحات المطارات الديناميكية
  const airportPages = flygtaxiData.map((airport) => ({
    url: `${baseUrl}/flygtaxi/${airport.id}/`, // إضافة السلاش
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // 5. تعريف صفحات مناطق دالارنا الديناميكية
  const locationPages = taxiDalarnaData.map((location) => ({
    url: `${baseUrl}/taxi-dalarna/${location.id}/`, // إضافة السلاش
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // دمج جميع الصفحات وإرجاعها
  return [
    ...staticPages,
    ...servicePages,
    ...airportPages,
    ...locationPages,
  ];
}