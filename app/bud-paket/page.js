import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script'; 

export const metadata = {
  title: 'Bud & Paket med Taxi i Borlänge | Snabb & Säker Leverans',
  description: 'Behöver du skicka ett paket snabbt med taxi Borlänge? Dala Taxi Borlänge erbjuder expressleverans av bud och paket. Säker och direkt transport till mottagaren med ett fast pris. Ring för bokning!',
  alternates: {
    canonical: '/bud-paket/',
  },
}

export default function PackageDelivery() {
  return (
    <>
      <Header />
      
      {/* Page Header */}
      <PageHeader 
        title={<span>Bud & Paket med <br /><span>Taxi i Borlänge</span></span>} 
        subtitle="Snabb & Säker Leverans" 
      />

      {/* Intro Section - استعادة الشكل القديم مع الشارة الدائرية المتحركة والتأثيرات الحديثة */}
      <section className="about-section padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
               <div className="section-heading mb-40 text-left">
                <div className="section-subtitle"><span></span>Taxibud</div>
                <h2>Taxibud i Borlänge – Snabbaste Vägen för Dina Paket</h2>
                <p>När traditionella fraktalternativ inte räcker till och tiden är kritisk, är Dala taxi Borlänge bud- och paketservice den optimala lösningen. Vi erbjuder en snabb, säker och personlig leveranstjänst för företag och privatpersoner i Borlänge med omnejd.</p>
                <p>Genom att använda vår befintliga fordonsflotta kan vi garantera en direktleverans från dörr till dörr, utan onödiga mellanhänder eller omlastningscentraler.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img">
                <div className="modern-image-wrapper">
                  <div className="image-glow"></div>
                  <Image className="about-img1 rounded-custom" src="/assets/img/service-4.webp" alt="Bud och Paket" width={600} height={400} sizes="(max-width: 768px) 100vw, 388px" style={{objectFit: 'cover', width: '100%', height: 'auto', position: 'relative', zIndex: 2}} />
                </div>
                {/* الشارة الدائرية التي طلب إعادتها */}
                <figure className="round-text" style={{zIndex: 3}}>
                  <Image src="/assets/img/experience-text-round.webp" alt="experience" width={300} height={300} sizes="(max-width: 768px) 100vw, 200px" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - استخدام البطاقات العصرية */}
      <section className="service-section bg-grey padding">
        <div className="container">
          <div className="section-heading text-center mb-50">
            <div className="section-subtitle"><span></span>Fördelar</div>
            <h2>Varför Välja Dala Taxi Borlänge för Dina Leveranser?</h2>
            <p>Att använda en taxi i Borlänge som taxibud erbjuder flera unika fördelar som säkerställer att din <br />försändelse hanteras med högsta prioritet samt med billiga fasta priser.</p>
          </div>

          <div className="row justify-content-center g-4">
            <div className="col-lg-4 col-md-6">
              <div className="modern-feature-card h-100 text-center">
                  <div className="icon-wrapper mb-3 mx-auto">
                     <i className="las la-shipping-fast"></i>
                  </div>
                  <h3>Oslagbar Snabbhet</h3>
                  <p>Glöm långa ledtider. När du bokar ett taxibud hämtar vi ditt paket omgående och kör med taxi det direkt till mottagaren. För lokala leveranser inom Borlänge innebär det oftast en leveranstid på under en timme.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="modern-feature-card h-100 text-center">
                  <div className="icon-wrapper mb-3 mx-auto">
                     <i className="las la-shield-alt"></i>
                  </div>
                  <h3>Maximal Säkerhet</h3>
                  <p>Ditt paket är i trygga händer. Det transporteras av en av våra professionella förare och lämnar aldrig fordonet förrän det är framme hos mottagaren. Detta minimerar risken för skador och förlust.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="modern-feature-card h-100 text-center">
                  <div className="icon-wrapper mb-3 mx-auto">
                     <i className="las la-clock"></i>
                  </div>
                  <h3>Flexibilitet 24/7</h3>
                  <p>Behovet av en snabb leverans kan uppstå när som helst. Vår budservice är, precis som vår taxitjänst, tillgänglig dygnet runt, alla dagar i veckan. Oavsett om det är en sen kväll, en helg eller en helgdag.</p>
              </div>
            </div>
             <div className="col-lg-6 col-md-6">
              <div className="modern-feature-card h-100 text-center">
                  <div className="icon-wrapper mb-3 mx-auto">
                     <i className="las la-door-open"></i>
                  </div>
                  <h3>Personlig Service från Dörr till Dörr</h3>
                  <p>Vi hämtar paketet direkt från dig och ser till att det överlämnas personligen till rätt mottagare. Du får en bekräftelse när leveransen är utförd, vilket ger dig full sinnesro och kontroll över hela processen.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="modern-feature-card h-100 text-center">
                  <div className="icon-wrapper mb-3 mx-auto">
                     <i className="las la-tags"></i>
                  </div>
                  <h3>Billiga fasta priser</h3>
                  <p>Vi på Dala Taxi Borlänge erbjuder alla våra kunder som vill skicka paket inom och från Borlänge fasta priser samt alla priser innehåller 25% moms på budkörningar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- قسم الفورم باستخدام Elfsight --- */}
      <section className="elfsight-booking-form-section" style={{ backgroundColor: '#1a1a1c', padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              
              <div className="form-header text-center mb-5">
                <span className="section-subtitle white mb-3"><span></span>BUD & PAKET</span>
                <h2 style={{ color: '#fff', fontSize: '40px', fontWeight: '800' }}>Bud Paket med Dala Taxi Borlänge</h2>
              </div>

              {/* تأثير زجاجي يحيط بالفورم */}
              <div style={{
                  background: 'rgba(255,255,255,0.02)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  padding: '20px',
                  borderRadius: '24px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
              }}>
                 {/* ID الفورم الخاص بالطرود */}
                 <div className="elfsight-app-b34c4c6b-2f21-4602-9452-284a7d08d181" data-elfsight-app-lazy></div>
                 <Script src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- قسم الأسئلة الشائعة FAQ --- */}
      <section className="faq-section bg-grey padding">
        <div className="container">
          <div className="section-heading text-center mb-40">
            <div className="section-subtitle"><span></span>FAQ</div>
            <h2>Vanliga frågor Bud Paket</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion faq-accordion" id="faq-accordion-budpaket">
                
                {/* سؤال 1 */}
                <div className="accordion-item">
                  <h3 className="accordion-header" id="heading1">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                      1- Kör Dala Taxi Borlänge paket, Post, Bud samt frakt?
                    </button>
                  </h3>
                  <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faq-accordion-budpaket">
                    <div className="accordion-body">
                      <p>Absolut kör Dala Taxi Borlänge alla slags av paket och bud med snabb frakt till mottagare</p>
                    </div>
                  </div>
                </div>

                {/* سؤال 2 */}
                <div className="accordion-item">
                  <h3 className="accordion-header" id="heading2">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                      2- Hur snabb leverans är det med Dala Taxi Borlänge?
                    </button>
                  </h3>
                  <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faq-accordion-budpaket">
                    <div className="accordion-body">
                      <p>När det gäller budtransport, har vi express budkörningar till mottagare.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (استعادة التصميم الأسود القديم كما طلبت) */}
      <section className="cta-section padding">
        <div className="container">
            <div className="cta-content text-center">
                <h2>Boka Din Leverans Nu med <br /> <span>Dala Taxi Borlänge</span></h2>
                <p>Är ditt paket redo att skickas? Kontakta oss direkt via telefon för snabbast möjliga service. <br />Vår personal ger dig ett fast pris och skickar en bil för omedelbar upphämtning.</p>
                
                <div className="cta-call mb-30" style={{justifyContent: 'center'}}>
                    <i className="las la-phone-volume"></i>
                    <p><span style={{textAlign: 'center'}}>Ring och Boka Bud</span><a href="tel:024317900">0243-179 00</a></p>
                </div>
                
                <div className="cta-business-link">
                    <p style={{color: '#fff'}}>För <Link href="/bli-foretagskund/" style={{color: '#ffc107', textDecoration: 'underline'}}>företagskunder</Link> erbjuder vi även möjligheten att lägga budkörningar på er månadsfaktura.</p>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </>
  );
}