import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';

export const metadata = {
  title: 'Bud & Paket med Taxi i Borlänge | Snabb & Säker Leverans',
  description: 'Behöver du skicka ett paket snabbt med taxi Borlänge? Dala Taxi Borlänge erbjuder expressleverans av bud och paket. Säker och direkt transport till mottagaren med ett fast pris. Ring för bokning!',
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

      {/* Intro Section */}
      <section className="about-section padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-heading mb-40">
                <div className="section-subtitle"><span></span>Taxibud</div>
                <h2>Taxibud i Borlänge – Snabbaste Vägen för Dina Paket</h2>
                <p>När traditionella fraktalternativ inte räcker till och tiden är kritisk, är Dala taxi Borlänge bud- och paketservice den optimala lösningen. Vi erbjuder en snabb, säker och personlig leveranstjänst för företag och privatpersoner i Borlänge med omnejd.</p>
                <p>Genom att använda vår befintliga fordonsflotta kan vi garantera en direktleverans från dörr till dörr, utan onödiga mellanhänder eller omlastningscentraler.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img">
                {/* Image representing delivery/packages */}
                <img className="about-img1 wow fade-in-right" src="/assets/img/service-4.webp" alt="Bud och Paket" />
                <figure className="round-text"><img src="/assets/img/experience-text-round.webp" alt="experience" /></figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-section bg-grey padding">
        <div className="container">
          <div className="section-heading text-center mb-40">
            <div className="section-subtitle"><span></span>Fördelar</div>
            <h2>Varför Välja Dala Taxi Borlänge för Dina Leveranser?</h2>
            <p>Att använda en taxi i Borlänge som taxibud erbjuder flera unika fördelar som säkerställer att din <br />försändelse hanteras med högsta prioritet samt med billiga fasta priser.</p>
          </div>

          <div className="row justify-content-center">
            {/* Feature 1: Speed */}
            <div className="col-lg-4 col-md-6 padding-15">
              <div className="service-item">
                <div className="service-content">
                  <div className="feature-icon"><i className="las la-shipping-fast"></i></div>
                  <h3>Oslagbar Snabbhet</h3>
                  <p>Glöm långa ledtider. När du bokar ett taxibud hämtar vi ditt paket omgående och kör med taxi det direkt till mottagaren. För lokala leveranser inom Borlänge innebär det oftast en leveranstid på under en timme.</p>
                </div>
              </div>
            </div>

            {/* Feature 2: Safety */}
            <div className="col-lg-4 col-md-6 padding-15">
              <div className="service-item">
                <div className="service-content">
                  <div className="feature-icon"><i className="las la-shield-alt"></i></div>
                  <h3>Maximal Säkerhet</h3>
                  <p>Ditt paket är i trygga händer. Det transporteras av en av våra professionella förare och lämnar aldrig fordonet förrän det är framme hos mottagaren. Detta minimerar risken för skador och förlust.</p>
                </div>
              </div>
            </div>

            {/* Feature 3: Flexibility 24/7 */}
            <div className="col-lg-4 col-md-6 padding-15">
              <div className="service-item">
                <div className="service-content">
                  <div className="feature-icon"><i className="las la-clock"></i></div>
                  <h3>Flexibilitet och Tillgänglighet 24/7</h3>
                  <p>Behovet av en snabb leverans kan uppstå när som helst. Vår budservice är, precis som vår taxitjänst, tillgänglig dygnet runt, alla dagar i veckan. Oavsett om det är en sen kväll, en helg eller en helgdag.</p>
                </div>
              </div>
            </div>

             {/* Feature 4: Door to Door */}
             <div className="col-lg-6 col-md-6 padding-15">
              <div className="service-item">
                <div className="service-content">
                  <div className="feature-icon"><i className="las la-door-open"></i></div>
                  <h3>Personlig Service från Dörr till Dörr</h3>
                  <p>Vi hämtar paketet direkt från dig och ser till att det överlämnas personligen till rätt mottagare. Du får en bekräftelse när leveransen är utförd, vilket ger dig full sinnesro och kontroll över hela processen.</p>
                </div>
              </div>
            </div>

            {/* Feature 5: Pricing */}
            <div className="col-lg-6 col-md-6 padding-15">
              <div className="service-item">
                <div className="service-content">
                  <div className="feature-icon"><i className="las la-tags"></i></div>
                  <h3>Billiga fasta priser</h3>
                  <p>Vi på Dala Taxi Borlänge erbjuder alla våra kunder som vill skicka paket inom och från Borlänge fasta priser samt alla priser innehåller 25% moms på budkörningar.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="feature-section padding">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="feature-img">
                         {/* Generic delivery or business image */}
                        <img src="/assets/img/post-1.webp" alt="Budservice" className="img-fluid" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="section-heading mb-30">
                        <div className="section-subtitle"><span></span>Användningsområden</div>
                        <h2>Vår Budservice Passar Utmärkt För:</h2>
                    </div>
                    <ul className="check-list">
                        <li><i className="las la-check-circle"></i>Brådskande juridiska eller ekonomiska dokument</li>
                        <li><i className="las la-check-circle"></i>Viktiga reservdelar till verkstäder och industrier (t.ex. Scania, Volvo, Postnord)</li>
                        <li><i className="las la-check-circle"></i>Glömda nycklar, pass eller andra personliga tillhörigheter</li>
                        <li><i className="las la-check-circle"></i>Apoteksvaror eller medicinska prover</li>
                        <li><i className="las la-check-circle"></i>Matkassar eller varor från lokala butiker</li>
                        <li><i className="las la-check-circle"></i>Gåvor och blommor som måste komma fram i perfekt skick</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section padding">
        <div className="container">
            <div className="cta-content text-center">
                <h2>Boka Din Leverans Nu med <br /> Dala Taxi Borlänge</h2>
                <p>Är ditt paket redo att skickas? Kontakta oss direkt via telefon för snabbast möjliga service. <br />Vår personal ger dig ett fast pris och skickar en bil för omedelbar upphämtning.</p>
                
                <div className="cta-call mb-30">
                    <i className="las la-phone-volume"></i>
                    <p><span>Ring och Boka Bud</span><a href="tel:024317900">0243-179 00</a></p>
                </div>
                
                <div className="cta-business-link">
                    <p>För <Link href="https://dalataxiborlange.se/bli-foretagskund/" style={{color: '#ffc107', textDecoration: 'underline'}}>företagskunder</Link> erbjuder vi även möjligheten att lägga budkörningar på er månadsfaktura.</p>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </>
  );
}