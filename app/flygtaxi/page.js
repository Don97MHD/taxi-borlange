import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading'; 
import CtaSection from '@/components/CtaSection';         
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Flygtaxi Borlänge | Fasta Priser till Arlanda & Dala Airport',
  description: 'Planerar du en resa? Dala Taxi erbjuder pålitlig flygtaxi i Borlänge. Boka din transport till Arlanda eller Dala Airport tryggt och i tid. Fasta priser!',
}

export default function Flygtaxi() {
  return (
    <>
      <Header />
      
      {/* Page Header */}
      <PageHeader 
        title="Flygtaxi Borlänge" 
        subtitle="Arlanda & Dala Airport" 
      />

      {/* Intro Section - تصميم عصري للصورة */}
      <section className="about-section padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="modern-image-wrapper">
                <div className="image-glow"></div>
                <Image className="img-fluid rounded-custom" src="/assets/img/service-2.webp" alt="Flygtaxi" width={600} height={400} sizes="(max-width: 768px) 100vw, 600px" style={{objectFit: 'cover', width: '100%', height: 'auto', position: 'relative', zIndex: 2}} />
              </div>
            </div>
            <div className="col-lg-6 ps-lg-4">
              <SectionHeading 
                align="left"
                subtitle="Flygtaxi Borlänge"
                title="Pålitlig Taxi från Borlänge till Arlanda Dala Airport"
                description="En lyckad resa börjar med en stressfri start. Med Dala Taxis specialiserade flygtaxi service kan du vara säker på att din transport till och från flygplatsen är punktlig, bekväm och till ett konkurrenskraftigt fast pris."
              />
              <p className="mt-3">
                Oavsett om du reser i jobbet eller privat, är vi den pålitliga partner som ser till att du kommer fram i tid, utvilad och redo för nästa steg på din resa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section (Why Choose Us) - تحويلها لبطاقات الميزات العصرية */}
      <section className="service-section bg-grey padding">
        <div className="container">
          <SectionHeading 
            subtitle="Varför Välja Oss?"
            title="Varför Boka Din Flygtaxi med Dala Taxi?"
            description="Vi har optimerat vår flygtaxiservice för att ge dig maximal trygghet och bekvämlighet."
          />

          <div className="row">
            {/* Feature 1 */}
            <div className="col-lg-4 col-md-6 padding-15">
               <div className="modern-feature-card h-100 text-center align-items-center">
                  <div className="icon-wrapper mb-3">
                     <i className="las la-tags"></i>
                  </div>
                  <h3>Fasta Priser</h3>
                  <p className="mb-0">Med oss vet du alltid kostnaden i förväg. Vi erbjuder fasta priser med taxi från Borlänge till både Arlanda och Dala Airport. Res tryggt med full kostnadskontroll.</p>
               </div>
            </div>

            {/* Feature 2 */}
            <div className="col-lg-4 col-md-6 padding-15">
               <div className="modern-feature-card h-100 text-center align-items-center">
                  <div className="icon-wrapper mb-3">
                     <i className="las la-plane-departure"></i>
                  </div>
                  <h3>Garanterad Punktlighet</h3>
                  <p className="mb-0">Vi håller aktivt koll på ditt flygs ankomst- och avgångstider. Om ditt flyg är försenat anpassar vi din upphämtningstid automatiskt, utan extra kostnad.</p>
               </div>
            </div>

            {/* Feature 3 */}
            <div className="col-lg-4 col-md-6 padding-15">
               <div className="modern-feature-card h-100 text-center align-items-center">
                  <div className="icon-wrapper mb-3">
                     <i className="las la-suitcase"></i>
                  </div>
                  <h3>Bekväm Transport</h3>
                  <p className="mb-0">Res bekvämt i våra rymliga bilar. Reser ni som en större grupp eller med mycket bagage? Vi erbjuder rymliga storbilar för att möta era behov.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section - جعل البطاقات بنفس الطول وتحديث الأزرار */}
      <section className="blog-section padding">
        <div className="container">
           <SectionHeading 
            subtitle="Destinationer"
            title="Våra Flygdestinationer"
            description="Vi erbjuder Taxi service till regionens två viktigaste flygplatser. Välj din destination nedan för att läsa mer och se detaljerade priser."
          />
          
          <div className="row justify-content-center">
            {/* Arlanda Card */}
            <div className="col-lg-6 col-md-6 padding-15">
              <div className="post-card h-100 d-flex flex-column">
                <div className="post-thumb">
                  <Image 
                    src="/assets/img/post-1.webp" 
                    alt="Taxi Borlänge till Arlanda" 
                    width={600} 
                    height={400} 
                    sizes="(max-width: 768px) 100vw, 600px"
                    style={{objectFit: 'cover', width: '100%', height: 'auto'}} 
                  />
                </div>
                <div className="post-content-wrap flex-grow-1 d-flex flex-column p-4">
                  <div className="post-content flex-grow-1 mb-4">
                    <h3 className="mb-3">
                      <Link href="/flygtaxi/arlanda" style={{color: '#222'}}>Taxi Borlänge till Arlanda Airport (ARN)</Link>
                    </h3>
                    <p style={{color: '#666', lineHeight: '1.7'}}>En långresa som kräver en pålitlig och bekväm transportpartner. Vi ser till att din resa till Sveriges största flygplats blir så avkopplande som möjligt. Vi har alltid fasta priser.</p>
                  </div>
                  <Link href="/flygtaxi/arlanda" className="boka-link mt-auto">
                    Läs mer och se fast pris <i className="las la-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Dala Airport Card */}
            <div className="col-lg-6 col-md-6 padding-15">
              <div className="post-card h-100 d-flex flex-column">
                <div className="post-thumb">
                  <Image 
                    src="/assets/img/post-2.webp" 
                    alt="Taxi Borlänge till Dala Airport" 
                    width={600} 
                    height={400} 
                    sizes="(max-width: 768px) 100vw, 600px"
                    style={{objectFit: 'cover', width: '100%', height: 'auto'}} 
                  />
                </div>
                <div className="post-content-wrap flex-grow-1 d-flex flex-column p-4">
                  <div className="post-content flex-grow-1 mb-4">
                    <h3 className="mb-3">
                      <Link href="/flygtaxi/dala-airport" style={{color: '#222'}}>Taxi Borlänge till Dala Airport (BLE)</Link>
                    </h3>
                    <p style={{color: '#666', lineHeight: '1.7'}}>För snabba och smidiga anslutningar till vårt lokala flyg i Borlänge. Vi garanterar en kort och effektiv resa så att du hinner med ditt flyg utan stress.</p>
                  </div>
                  <Link href="/flygtaxi/dala-airport" className="boka-link mt-auto">
                    Läs mer och se fast pris <i className="las la-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Instructions Section - تحسين مظهر الخلفية */}
      <section className="cta-section-2 padding" style={{backgroundColor: '#fafafa', borderTop: '1px solid #eee'}}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8">
                    <div className="section-heading mb-20 text-left">
                        <h2 style={{color: '#222'}}>Så Här Enkelt Bokar Du</h2>
                        <p style={{color: '#555'}}>För att säkerställa bästa möjliga service, vänligen ha ditt <strong style={{color: '#ff7b00'}}>flightnummer</strong> redo när du bokar. Detta hjälper oss att övervaka din resa och anpassa upphämtningen. Vi rekommenderar att du förbokar din flygtaxi, särskilt under högsäsong.</p>
                    </div>
                    <div className="cta-btn mt-4">
                         <a href="tel:024317900" className="default-btn">
                           <i className="las la-phone me-2" style={{fontSize: '22px'}}></i> Ring och Boka: 0243-179 00
                         </a>
                    </div>
                </div>
                <div className="col-lg-4 d-none d-lg-block text-center">
                     <i className="las la-plane-departure" style={{fontSize: '150px', color: 'rgba(255, 123, 0, 0.1)'}}></i>
                </div>
            </div>
        </div>
      </section>

    {/* FAQ Section */}
      <section className="blog-section bg-grey padding">
        <div className="container">
          <SectionHeading 
            subtitle="FAQ"
            title="Vanliga frågor"
          />
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion faq-accordion" id="faq-accordion-flygtaxi">
                
                {/* سؤال 1 */}
                <div className="accordion-item">
                  <h3 className="accordion-header" id="heading1">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                      1- Kör Dala Taxi Borlänge från Borlänge till olika flygplatser i landet?
                    </button>
                  </h3>
                  <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faq-accordion-flygtaxi">
                    <div className="accordion-body">
                      <p>Ja, Dala Taxi Borlänge kör till olika flygplatser till exempel Dala airport, Arlanda, Bromma flygplats</p>
                    </div>
                  </div>
                </div>

                {/* سؤال 2 */}
                <div className="accordion-item">
                  <h3 className="accordion-header" id="heading2">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                      2- Hur lång tid tar det att köra taxi från Borlänge till Stockholm?
                    </button>
                  </h3>
                  <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faq-accordion-flygtaxi">
                    <div className="accordion-body">
                      <p>Det tar 3 timmar resan med taxi från Borlänge till Stockholm</p>
                    </div>
                  </div>
                </div>

                {/* سؤال 3 */}
                <div className="accordion-item">
                  <h3 className="accordion-header" id="heading3">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                      3- Vad är det fasta priset att köra taxi från Borlänge till Stockholm?
                    </button>
                  </h3>
                  <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faq-accordion-flygtaxi">
                    <div className="accordion-body">
                      <p>Fasta priset är 4 900 kr att köra taxi från Borlänge till Stockholm</p>
                    </div>
                  </div>
                </div>

                {/* سؤال 4 */}
                <div className="accordion-item">
                  <h3 className="accordion-header" id="heading4">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                      4- Vad kostar att köra taxi från Ludvika till Arlanda eller Stockholm?
                    </button>
                  </h3>
                  <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faq-accordion-flygtaxi">
                    <div className="accordion-body">
                      <p>Det kostar 4 000 kr från Ludvika till Arlanda eller Stockholm</p>
                    </div>
                  </div>
                </div>

                {/* سؤال 5 */}
                <div className="accordion-item">
                  <h3 className="accordion-header" id="heading5">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                      5- Vad kostar en taxi från Falun till Arland eller Stockholm?
                    </button>
                  </h3>
                  <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#faq-accordion-flygtaxi">
                    <div className="accordion-body">
                      <p>Det kostar 4 800 kr för en taxi från Falun till Arlanda eller Stockholm</p>
                    </div>
                  </div>
                </div>

                {/* سؤال 6 */}
                <div className="accordion-item">
                  <h3 className="accordion-header" id="heading6">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                      6- Vad kostar taxi från Säter eller Hedemora till Arlanda eller Stockholm?
                    </button>
                  </h3>
                  <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#faq-accordion-flygtaxi">
                    <div className="accordion-body">
                      <p>Taxi kostar 4 000 kr mellan Säter eller Hedemora till Arlanda eller Stockholm</p>
                    </div>
                  </div>
                </div>

                {/* سؤال 7 */}
                <div className="accordion-item">
                  <h3 className="accordion-header" id="heading7">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                      7- Vad kostar taxi mellan Leksand eller Rättvik till Arlanda eller Stockholm?
                    </button>
                  </h3>
                  <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#faq-accordion-flygtaxi">
                    <div className="accordion-body">
                      <p>Taxi kostar 4 900 kr från Leksand eller Rättvik till Arlanda eller Stockholm</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section - المكون الجاهز */}
      <CtaSection />

      <Footer />
    </>
  );
}