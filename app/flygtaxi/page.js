import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading'; // الاستفادة من المكونات
import CtaSection from '@/components/CtaSection';         // الاستفادة من المكونات
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

      {/* Intro Section */}
      <section className="about-section padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                {/* استخدام صورة تعبر عن السفر/المطار - تأكد من وجود الصورة أو استبدلها */}
                <Image className="about-img1 wow fade-in-left" src="/assets/img/service-2.webp" alt="Flygtaxi" width={600} height={400} sizes="(max-width: 768px) 100vw, 388px" style={{objectFit: 'cover', width: '100%', height: 'auto'}} />
                <div className="about-text-overlay" style={{position: 'absolute', bottom: '20px', left: '20px', background: 'white', padding: '15px', borderRadius: '5px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)'}}>
                    <div className="section-subtitle">0243-179 00</div>
                    <p style={{margin: 0, fontSize: '14px'}}>Ring och boka nu!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
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

      {/* Features Section (Why Choose Us) */}
      <section className="service-section bg-grey padding">
        <div className="container">
          <SectionHeading 
            subtitle="Varför Välja Oss?"
            title="Varför Boka Din Flygtaxi med Dala Taxi?"
            description="Vi har optimerat vår flygtaxiservice för att ge dig maximal trygghet och bekvämlighet."
          />

          <div className="row">
            {/* Feature 1: Fasta Priser */}
            <div className="col-lg-4 col-md-6 padding-15">
              <div className="service-item text-center">
                <div className="service-content">
                  <div className="mb-3"><i className="las la-tags" style={{fontSize: '40px', color: '#ffc107'}}></i></div>
                  <h3>Fasta Priser, Inga Dolda Avgifter</h3>
                  <p>Med oss vet du alltid kostnaden i förväg. Vi erbjuder fasta priser med taxi från Borlänge till både Arlanda och Dala Airport. Res tryggt med full kostnadskontroll.</p>
                </div>
              </div>
            </div>

            {/* Feature 2: Punktlighet */}
            <div className="col-lg-4 col-md-6 padding-15">
              <div className="service-item text-center">
                <div className="service-content">
                  <div className="mb-3"><i className="las la-plane-departure" style={{fontSize: '40px', color: '#ffc107'}}></i></div>
                  <h3>Garanterad Punktlighet & Flygbevakning</h3>
                  <p>Vi håller aktivt koll på ditt flygs ankomst- och avgångstider. Om ditt flyg är försenat anpassar vi din upphämtningstid automatiskt, utan extra kostnad för dig.</p>
                </div>
              </div>
            </div>

            {/* Feature 3: Komfort */}
            <div className="col-lg-4 col-md-6 padding-15">
              <div className="service-item text-center">
                <div className="service-content">
                  <div className="mb-3"><i className="las la-suitcase" style={{fontSize: '40px', color: '#ffc107'}}></i></div>
                  <h3>Bekväm och komfort Transport</h3>
                  <p>Res bekvämt i våra rymliga bilar. Reser ni som en större grupp eller med skrymmande bagage? Vi erbjuder även <Link href="/vara-tjanster/storbil-gruppresor" style={{textDecoration:'underline', fontWeight: 'bold'}}>storbilar</Link> för att möta era behov.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
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
              <div className="post-card">
                <div className="post-thumb">
                  {/* صورة للمطار أو التاكسي */}
                  <img src="/assets/img/post-1.webp" alt="Taxi Borlänge till Arlanda" />
                </div>
                <div className="post-content-wrap">
                  <div className="post-content">
                    <h3>
                      <Link href="/flygtaxi/arlanda" className="hover">Taxi Borlänge till Arlanda Airport (ARN)</Link>
                    </h3>
                    <p>En långresa som kräver en pålitlig och bekväm transportpartner. Vi ser till att din resa till Sveriges största flygplats blir så avkopplande som möjligt. Vi har alltid fasta priser.</p>
                    <Link href="/flygtaxi/arlanda" className="read-more">Läs mer och se fast pris</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Dala Airport Card */}
            <div className="col-lg-6 col-md-6 padding-15">
              <div className="post-card">
                <div className="post-thumb">
                   {/* صورة للمطار أو التاكسي */}
                  <img src="/assets/img/post-2.webp" alt="Taxi Borlänge till Dala Airport" />
                </div>
                <div className="post-content-wrap">
                  <div className="post-content">
                    <h3>
                      <Link href="/flygtaxi/dala-airport" className="hover">Taxi Borlänge till Dala Airport (BLE)</Link>
                    </h3>
                    <p>För snabba och smidiga anslutningar till vårt lokala flyg i Borlänge. Vi garanterar en kort och effektiv resa så att du hinner med ditt flyg utan stress.</p>
                    <Link href="/flygtaxi/dala-airport" className="read-more">Läs mer och se fast pris</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Instructions Section */}
      <section className="cta-section-2 bg-grey padding">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8">
                    <div className="section-heading mb-20 text-left">
                        <h2>Så Här Enkelt Bokar Du</h2>
                        <p>För att säkerställa bästa möjliga service, vänligen ha ditt <strong>flightnummer</strong> redo när du bokar. Detta hjälper oss att övervaka din resa och anpassa upphämtningen. Vi rekommenderar att du förbokar din flygtaxi, särskilt under högsäsong.</p>
                    </div>
                    <div className="cta-btn mt-4">
                         <a href="tel:024317900" className="default-btn"><i className="las la-phone"></i> Ring och Boka: 0243-179 00</a>
                    </div>
                </div>
                <div className="col-lg-4 d-none d-lg-block">
                     <i className="las la-calendar-check" style={{fontSize: '150px', color: '#ddd'}}></i>
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