import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import CtaSection from '@/components/CtaSection';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { taxiDalarnaData } from '@/data/taxiDalarnaData'; 

// 1. Generate Metadata dynamically
export async function generateMetadata({ params }) {
  const { location } = await params;
  const data = taxiDalarnaData.find((item) => item.id === location);

  if (!data) return { title: 'Sidan hittades inte' };

  return {
    title: data.seoTitle,
    description: data.seoDescription,
  };
}

// دالة مساعدة لتحويل النص (link: ...) إلى رابط حقيقي
const renderAnswer = (text) => {
  if (!text.includes('(link:')) {
    return text;
  }

  // نقسم النص بناءً على كلمة (link:
  const parts = text.split('(link:');
  const mainText = parts[0];
  const url = parts[1].replace(')', '').trim(); // تنظيف الرابط من القوس الأخير والمسافات

  return (
    <>
      {mainText} 
      <a href={url} style={{ color: '#ff9900', textDecoration: 'underline', fontWeight: 'bold' }}>
        Klicka här för att läsa mer
      </a>
    </>
  );
};

// 2. Main Page Component
export default async function TaxiLocationPage({ params }) {
  const { location } = await params;
  const data = taxiDalarnaData.find((item) => item.id === location);

  if (!data) {
    notFound();
  }

  return (
    <>
      <Header />
      <PageHeader 
        title={data.title} 
        subtitle={data.subtitle || "Taxi Dalarna"} 
      />

      {/* Intro Section */}
      <section className="about-section padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
               <div className="about-img">
                <Image className="about-img1 wow fade-in-left" src={data.headerImage || "/assets/img/service-1.webp"} alt={data.title} width={600} height={400} sizes="(max-width: 768px) 100vw, 388px" style={{objectFit: 'cover', width: '100%', height: 'auto'}} />
              </div>
            </div>
            <div className="col-lg-6">
               <SectionHeading 
                  align="left"
                  subtitle="Taxi Dalarna"
                  title={data.introTitle}
                  description={data.introText}
               />
            </div>
          </div>
        </div>
      </section>

      {/* Special Section */}
      {data.specialSection && (
        <section className="service-section bg-grey padding">
          <div className="container">
            <SectionHeading 
              subtitle="Specialtjänst"
              title={data.specialSection.title}
              description={data.specialSection.description}
            />
            
            <div className="row justify-content-center">
              {data.specialSection.items.map((item, index) => (
                <div key={index} className="col-lg-4 col-md-6 padding-15">
                  <div className="service-item text-center">
                    <div className="service-content">
                      <h3 className="mb-3">{item.title}</h3>
                      <p>{item.text}</p>
                      {item.linkUrl && (
                         <Link href={item.linkUrl} style={{color: '#ffc107', textDecoration: 'underline'}}>
                           {item.linkText}
                         </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {data.specialSection.ctaText && (
               <div className="text-center mt-4">
                  <a href={`tel:${data.specialSection.ctaPhone}`} className="default-btn">
                    <i className="las la-phone"></i> {data.specialSection.ctaText}
                  </a>
               </div>
            )}
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="feature-section padding">
         <div className="container">
            <SectionHeading 
               subtitle="Fördelar"
               title={data.featuresTitle || "Varför Välja Oss?"}
            />
            <div className="row">
               {data.features && data.features.map((feature, index) => (
                  <div key={index} className="col-lg-4 col-md-6 padding-15">
                     <div className="service-item">
                        <div className="service-content">
                           <div className="feature-icon mb-3">
                              <i className={feature.icon} style={{fontSize: '35px', color: '#ffc107'}}></i>
                           </div>
                           <h3>{feature.title}</h3>
                           <p>{feature.text}</p>
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
          <SectionHeading subtitle="FAQ" title="Vanliga Frågor" />
          
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
                        {/* هنا نستخدم الدالة الجديدة لمعالجة النص والرابط */}
                        <p>{renderAnswer(faq.answer)}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-5">
                  <Link href="/taxi-dalarna" className="read-more">
                    <i className="las la-arrow-left"></i> Tillbaka till Taxi Dalarna
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
      <Footer />
    </>
  );
}