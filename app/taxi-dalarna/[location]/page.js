import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import CtaSection from '@/components/CtaSection';
import Link from 'next/link';
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
                <img className="about-img1 wow fade-in-left" src={data.headerImage || "/assets/img/service-1.webp"} alt={data.title} />
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

      {/* Special Section (e.g., Dalhalla) - يظهر فقط إذا كانت البيانات موجودة */}
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

            {/* زر الاتصال الخاص بهذا القسم */}
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

      {/* Features / Why Choose Us Section */}
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
                        <p>{faq.answer}</p>
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