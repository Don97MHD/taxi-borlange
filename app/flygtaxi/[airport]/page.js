import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import CtaSection from '@/components/CtaSection';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { flygtaxiData } from '@/data/flygtaxiData'; // استدعاء ملف البيانات

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

      {/* Intro Section */}
      <section className="about-section padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img className="about-img1 wow fade-in-left" src={data.headerImage || "/assets/img/service-2.webp"} alt={data.title} />
              </div>
            </div>
            <div className="col-lg-6">
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

      {/* Pricing Section (تصميم خاص للأسعار) */}
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
                <div className="pricing-item text-center" style={{padding: '30px', border: '1px solid #eee', background: '#fff'}}>
                  <div className="pricing-icon mb-3">
                     <i className="las la-tag" style={{fontSize: '40px', color: '#ffc107'}}></i>
                  </div>
                  <h3 style={{fontSize: '20px', marginBottom: '10px'}}>{priceItem.type}</h3>
                  <div className="price" style={{fontSize: '28px', fontWeight: 'bold', color: '#111'}}>
                    {priceItem.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-40">
             <p className="mb-20">{data.pricingNote}</p>
             <a href={`tel:${data.pricingCtaPhone.replace(/\s/g, '')}`} className="default-btn">
               Boka till Fast Pris: {data.pricingCtaPhone}
             </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="service-section padding">
        <div className="container">
          <SectionHeading 
            subtitle="Varför Välja Oss?"
            title={data.featuresTitle}
            description={data.featuresDesc}
          />
          
          <div className="row">
            {data.features && data.features.map((feature, index) => (
              <div key={index} className="col-lg-6 col-md-6 padding-15">
                <div className="service-item">
                  <div className="service-content">
                    <div className="feature-icon mb-3">
                        <i className={feature.icon} style={{fontSize: '32px', color: '#ffc107'}}></i>
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.text}</p>
                    {feature.linkUrl && (
                        <Link href={feature.linkUrl} style={{color: '#ffc107', textDecoration: 'underline', fontSize: '14px'}}>
                            {feature.linkText} <i className="las la-arrow-right"></i>
                        </Link>
                    )}
                  </div>
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
                    <h2 className="accordion-header" id={`heading${index}`}>
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
                    </h2>
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
              
              <div className="text-center mt-4">
                  <Link href="/flygtaxi" className="read-more">
                    <i className="las la-arrow-left"></i> Tillbaka till huvudsidan för Flygtaxi
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