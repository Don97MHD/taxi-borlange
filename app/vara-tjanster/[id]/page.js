import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { servicesData } from '@/data/services';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

// 1. دالة لتوليد الميتا داتا (SEO) ديناميكياً بناءً على الـ ID
export async function generateMetadata({ params }) {
  const { id } = await params;
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.seoTitle || service.title,
    description: service.seoDescription || service.description,
  };
}

// 2. مكون الصفحة الرئيسي
export default async function ServiceDetails({ params }) {
  // انتظار البيانات من الرابط
  const { id } = await params;

  // البحث عن الخدمة
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      {/* استخدام العنوان الرئيسي للخدمة في الهيدر */}
      <PageHeader title={service.title} subtitle="Våra Tjänster" />

      <section className="service-details bg-grey padding">
        <div className="container">
          <div className="row">
            {/* المحتوى الرئيسي */}
            <div className="col-lg-8 sm-padding">
              <div className="service-details-info">
                {/* الصورة التفصيلية */}
                <Image src={service.detailImage} alt={service.title} className="mb-40" width={388} height={259} sizes="(max-width: 768px) 100vw, 388px" />
                
                {/* العنوان الفرعي */}
                <h2>{service.title} – Din Garanterade Anslutning!</h2>
                
                {/* الوصف الرئيسي */}
                <p>{service.description}</p>
                
                {/* العنوان لقسم المميزات */}
                <h3 className="mb-30 mt-30">{service.featuresTitle ? service.featuresTitle : "Fördelar med tjänsten"}</h3>
                
                {/* قائمة المميزات */}
                <ul className="service-features">
                  {service.features && service.features.map((feature, index) => (
                    <li key={index}>
                      <div><i className={feature.icon}></i></div>
                      <div>
                        <h3>{feature.title}</h3>
                        <p>{feature.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* المحتوى الإضافي (Planera Din Resa + CTA) */}
                {service.extraContent && (
                  <div className="extra-content mt-40">
                    <h3>{service.extraContent.heading}</h3>
                    <p>{service.extraContent.text1}</p>
                    
                    <p>
                      {service.extraContent.text2}{' '}
                      {/* رابط Storbilar */}
                      <Link href={service.extraContent.linkUrl} style={{color: 'var(--main-color)', fontWeight: 'bold'}}>
                        {service.extraContent.linkText}
                      </Link>.
                    </p>

                    {/* مربع الحجز (CTA) */}
                    <div className="cta-box mt-30 p-4" style={{backgroundColor: '#fff', borderLeft: '5px solid var(--main-color)', boxShadow: '0 5px 15px rgba(0,0,0,0.05)'}}>
                     <div className="section-subtitle">{service.extraContent.ctaHeading}</div>
                      <p>{service.extraContent.ctaText}</p>
                      <a href={`tel:${service.extraContent.phone.replace(/\s/g, '')}`} className="default-btn mt-2">
                         <i className="las la-phone"></i> Ring och Boka Tågtaxi: {service.extraContent.phone}
                      </a>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* القائمة الجانبية */}
            <div className="col-lg-4 sm-padding">
              <div className="service-sidebar sidebar-widget">
                <div className="widget-title service-widget">
                  <h3>Fler Tjänster</h3>
                </div>
                <ul>
                  {/* يتم عرض الخدمات الأخرى المتاحة في ملف البيانات */}
                  {servicesData.map((item) => (
                    <li key={item.id}>
                      <Link href={`/vara-tjanster/${item.id}`} className={item.id === id ? 'active' : ''}>
                        {item.title}
                      </Link>
                      <i className="las la-arrow-right"></i>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="sidebar-widget banner">
                <div className="banner-info">
                  <Link href="/">
                    {/* تأكد من مسار اللوجو */}
                    <Image className="logo" src="/assets/img/logo-dark.webp" alt="logo" width={389} height={150} sizes="(max-width: 768px) 200px, 389px" />
                  </Link>
                  <h3>Res tryggt med <span>Dala Taxi!</span></h3>
                  <p>Alltid fasta priser och bästa service i Borlänge.</p>
                  <h2 className="discount"><span>Boka</span> Online</h2>
                  <Link href="/kontakt" className="default-btn">Kontakta Oss</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}