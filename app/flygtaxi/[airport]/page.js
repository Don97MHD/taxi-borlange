import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import CtaSection from '@/components/CtaSection';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { flygtaxiData } from '@/data/flygtaxiData'; 

// دالة SEO الديناميكية
export async function generateMetadata({ params }) {
  const { airport } = await params;
  const data = flygtaxiData.find((item) => item.id === airport);

  if (!data) {
    return { title: 'Sidan hittades inte' };
  }

  return {
    title: data.seoTitle,
    description: data.seoDescription,
    alternates: {
      canonical: `/flygtaxi/${airport}/`,
    },
  };
}

export default async function AirportPage({ params }) {
  const { airport } = await params;
  // البحث عن بيانات المطار المطلوب
  const data = flygtaxiData.find((item) => item.id === airport);

  // إذا لم يتم العثور على المطار، حول لصفحة 404
  if (!data) {
    notFound();
  }

  return (
    <>
      <Header />
      
      <PageHeader 
        title={data.title} 
        subtitle={data.subtitle} 
      />

      {/* Intro Section - صورة مضيئة وعصرية */}
      <section className="about-section padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="modern-image-wrapper">
                <div className="image-glow"></div>
                <Image className="img-fluid rounded-custom" src={data.headerImage || "/assets/img/service-2.webp"} alt={data.title} width={600} height={400} sizes="(max-width: 768px) 100vw, 600px" style={{objectFit: 'cover', width: '100%', height: 'auto', position: 'relative', zIndex: 2}} />
              </div>
            </div>
            <div className="col-lg-6 ps-lg-4">
              <SectionHeading 
                align="left"
                subtitle="Flygtaxi"
                title={data.introTitle}
                description={data.introText}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - تحويل الأسعار لبطاقات فخمة */}
      <section className="pricing-section bg-grey padding">
        <div className="container">
          <SectionHeading 
            subtitle="Priser"
            title={data.pricingTitle}
            description={data.pricingDesc}
          />

          <div className="row justify-content-center">
            {data.prices && data.prices.map((priceItem, index) => (
              <div key={index} className="col-lg-4 col-md-6 padding-15">
                <div className="special-highlight-card text-center d-flex flex-column h-100">
                  {/* تغيير الأيقونة بناءً على نوع السيارة وتكبيرها */}
                  <i className={priceItem.type.includes('Storbil') ? "las la-shuttle-van" : "las la-car"} style={{fontSize: '40px', color: '#ff7b00', marginBottom: '15px'}}></i>
                  <h3 style={{fontSize: '20px', marginBottom: '15px'}}>{priceItem.type}</h3>
                  <div className="price mt-auto" style={{fontSize: '28px', fontWeight: '800', color: '#222'}}>
                    {priceItem.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5">
             <p className="mb-4" style={{color: '#666'}}>{data.pricingNote}</p>
             <a href={`tel:${data.pricingCtaPhone.replace(/\s/g, '')}`} className="default-btn" style={{fontSize: '18px', padding: '0 40px', height: '55px'}}>
               <i className="las la-phone-volume me-2" style={{fontSize: '24px'}}></i> Boka till Fast Pris: {data.pricingCtaPhone}
             </a>
          </div>
        </div>
      </section>

      {/* Features Section - بطاقات بيضاء ناصعة للأسباب */}
      <section className="feature-section padding">
        <div className="container">
          <SectionHeading 
            subtitle="Varför Välja Oss?"
            title={data.featuresTitle}
            description={data.featuresDesc}
          />
          
          <div className="row justify-content-center">
            {data.features && data.features.map((feature, index) => (
              <div key={index} className="col-lg-6 col-md-6 padding-15">
                <div className="modern-feature-card h-100 text-center align-items-center">
                   <div className="icon-wrapper mb-3">
                      <i className={feature.icon}></i>
                   </div>
                   <h3>{feature.title}</h3>
                   <p className="mb-0">{feature.text}</p>
                   {feature.linkUrl && (
                      <Link href={feature.linkUrl} className="boka-link mt-3">
                         {feature.linkText} <i className="las la-arrow-right"></i>
                      </Link>
                   )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="blog-section bg-grey padding">
        <div className="container">
          <SectionHeading 
            subtitle="FAQ"
            title="Vanliga Frågor"
          />
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion faq-accordion" id="faq-accordion">
                {data.faqs && data.faqs.map((faq, index) => (
                  <div className="accordion-item" key={index}>
                    <h3 className="accordion-header" id={`heading${index}`}>
                      <button 
                        className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`} 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target={`#collapse${index}`} 
                        aria-expanded={index === 0 ? "true" : "false"} 
                        aria-controls={`collapse${index}`}
                      >
                        {faq.question}
                      </button>
                    </h3>
                    <div 
                        id={`collapse${index}`} 
                        className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} 
                        aria-labelledby={`heading${index}`} 
                        data-bs-parent="#faq-accordion"
                    >
                      <div className="accordion-body">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* زر الرجوع للوراء المحدث والأنيق */}
              <div className="text-center mt-5">
                  <Link href="/flygtaxi" className="secondary-back-btn">
                    <i className="las la-arrow-left" style={{marginRight: '8px', fontSize: '20px'}}></i> 
                    Tillbaka till huvudsidan för Flygtaxi
                  </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />

      <Footer />
    </>
  );
}