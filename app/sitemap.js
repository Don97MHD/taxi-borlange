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
    '/flygtaxi',       // صفحة الطيران الرئيسية
    '/taxi-dalarna',   // صفحة المناطق الرئيسية
    '/vara-tjanster',  // صفحة الخدمات الرئيسية
    '/taxi-med-barnstol',
    '/faqs',
    '/information/anvandarvillkor',
    '/information/integritetspolicy',
  ];

  const staticPages = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8, // الصفحة الرئيسية لها أولوية أعلى
  }));

  // 3. تعريف صفحات الخدمات الديناميكية (/vara-tjanster/[id])
  const servicePages = servicesData.map((service) => ({
    url: `${baseUrl}/vara-tjanster/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // 4. تعريف صفحات المطارات الديناميكية (/flygtaxi/[airport])
  const airportPages = flygtaxiData.map((airport) => ({
    url: `${baseUrl}/flygtaxi/${airport.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // 5. تعريف صفحات مناطق دالارنا الديناميكية (/taxi-dalarna/[location])
  const locationPages = taxiDalarnaData.map((location) => ({
    url: `${baseUrl}/taxi-dalarna/${location.id}`,
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