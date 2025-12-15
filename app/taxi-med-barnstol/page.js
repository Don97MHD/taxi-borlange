import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import CtaSection from '@/components/CtaSection';
import Link from 'next/link';

export const metadata = {
  title: 'Taxi med Barnstol i Borlänge | Boka Trygg Resa',
  description: 'Res tryggt med hela familjen. Dala Taxi Borlänge erbjuder taxi med barnstol och babyskydd. Informera oss vid bokning för en säker resa för ditt barn.',
}

export default function ChildSeat() {
  return (
    <>
      <Header />
      <PageHeader title="Taxi med Barnstol" subtitle="Trygg Resa för Familjen" />

      {/* Intro Section */}
      <section className="about-section padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                {/* صورة تعبر عن الأمان أو العائلة */}
                <img className="about-img1 wow fade-in-left" src="/assets/img/service-4.webp" alt="Taxi med barnstol" />
                <div className="about-text-overlay" style={{position: 'absolute', bottom: '20px', left: '20px', background: 'white', padding: '15px', borderRadius: '5px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)'}}>
                    <h4 style={{margin: 0, fontSize: '18px', fontWeight: 'bold'}}>Säkerhet Först</div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <SectionHeading 
                align="left"
                subtitle="Säkerhet"
                title="Taxi med Barnstol i Borlänge – En Trygg Resa för Hela Familjen"
                description="Självklart kan du åka tryggt med dina barn i våra bilar. För oss på Dala Taxi Borlänge är säkerheten för våra yngsta passagerare högsta prioritet. Vi förstår den oro som föräldrar kan känna när de reser med barn, och därför har vi gjort det enkelt och säkert att boka en taxi utrustad med rätt skydd för ditt barn, oavsett ålder."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process Section */}
      <section className="service-section bg-grey padding">
        <div className="container">
          <SectionHeading 
            title="Så Här Enkelt Bokar Du"
            subtitle="Bokningsprocess"
            description="För att garantera att vi har rätt utrustning tillgänglig för dig, är det viktigt att du informerar oss vid bokningstillfället."
          />

          <div className="row">
            {/* Step 1 */}
            <div className="col-lg-4 col-md-6 padding-15">
              <div className="service-item text-center">
                <div className="service-content">
                  <div className="mb-3"><i className="las la-phone-volume" style={{fontSize: '45px', color: '#ffc107'}}></i></div>
                  <h3>1. Ring Oss</h3>
                  <p>Kontakta oss på 0243-179 00. Personlig kontakt säkerställer att vi får all information korrekt från början.</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="col-lg-4 col-md-6 padding-15">
              <div className="service-item text-center">
                <div className="service-content">
                  <div className="mb-3"><i className="las la-baby" style={{fontSize: '45px', color: '#ffc107'}}></i></div>
                  <h3>2. Specificera Behovet</h3>
                  <p>Informera vår personal om barnets ålder och ungefärliga vikt. Detta hjälper oss att välja rätt typ av skydd.</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="col-lg-4 col-md-6 padding-15">
              <div className="service-item text-center">
                <div className="service-content">
                  <div className="mb-3"><i className="las la-check-circle" style={{fontSize: '45px', color: '#ffc107'}}></i></div>
                  <h3>3. Vi Bekräftar</h3>
                  <p>Vi bekräftar din bokning och ser till att bilen som anländer är utrustad med en stol som är korrekt monterad av föraren.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment & Safety Section */}
      <section className="feature-section padding">
        <div className="container">
          <div className="row">
            
            {/* Equipment Types */}
            <div className="col-lg-6">
                <SectionHeading 
                    align="left"
                    title="Vår Säkerhetsutrustning"
                    subtitle="Utrustning"
                />
                <p className="mb-3">Vi erbjuder olika typer av godkända bilbarnstolar för att passa barn i alla åldrar.</p>
                
                <div className="equipment-list">
                    <div className="d-flex align-items-start mb-4">
                        <div className="icon me-3">
                             <i className="las la-baby-carriage" style={{fontSize: '30px', color: '#ffc107', background: '#f9f9f9', padding: '10px', borderRadius: '50%'}}></i>
                        </div>
                        <div>
                            <h4 style={{fontSize: '18px', fontWeight: 'bold'}}>Babyskydd</div>
                            <p>För de allra minsta (0-15 månader), monteras alltid bakåtvänt.</p>
                        </div>
                    </div>

                    <div className="d-flex align-items-start mb-4">
                        <div className="icon me-3">
                             <i className="las la-chair" style={{fontSize: '30px', color: '#ffc107', background: '#f9f9f9', padding: '10px', borderRadius: '50%'}}></i>
                        </div>
                        <div>
                            <h4 style={{fontSize: '18px', fontWeight: 'bold'}}>Bakåtvänd Bilbarnstol</div>
                            <p>För barn upp till cirka 4-5 år, vilket är det säkraste sättet att resa.</p>
                        </div>
                    </div>

                    <div className="d-flex align-items-start mb-4">
                        <div className="icon me-3">
                             <i className="las la-couch" style={{fontSize: '30px', color: '#ffc107', background: '#f9f9f9', padding: '10px', borderRadius: '50%'}}></i>
                        </div>
                        <div>
                            <h4 style={{fontSize: '18px', fontWeight: 'bold'}}>Bälteskudde/Bältesstol</div>
                            <p>För äldre barn (från ca 4 år upp till 135 cm) som hjälper bilens bälte att sitta korrekt.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Legal & Info */}
            <div className="col-lg-6 bg-grey p-5" style={{borderRadius: '10px'}}>
                <h3 className="mb-3">Lagkrav och Säkerhet i Sverige</h3>
                <p>Enligt svensk lag måste alla barn som är kortare än 135 cm använda en särskild skyddsanordning i bilen. Vi tar detta på största allvar och ser till att varje resa med barn sker i enlighet med gällande säkerhetsregler.</p>
                
                <hr className="my-4" />
                
                <h4 className="mb-3">Planerar du en resa?</div>
                <ul className="check-list">
                    <li className="mb-2"><i className="las la-arrow-right"></i> Ska ni till <Link href="/taxi-dalarna/borlange-leksand" style={{color: '#ffc107', fontWeight: 'bold'}}>Leksand Sommarland?</Link></li>
                    <li className="mb-2"><i className="las la-arrow-right"></i> Behöver ni en <Link href="/vara-tjanster/storbil-gruppresor" style={{color: '#ffc107', fontWeight: 'bold'}}>storbil</Link> för mycket packning?</li>
                    <li className="mb-2"><i className="las la-arrow-right"></i> Ska ni boka <Link href="/flygtaxi" style={{color: '#ffc107', fontWeight: 'bold'}}>Flygtaxi?</Link></li>
                </ul>
                
                <p className="mt-3">Meddela oss så ordnar vi en trygg transport för hela familjen.</p>

                <div className="cta-btn mt-4">
                    <a href="tel:024317900" className="default-btn">
                        <i className="las la-phone"></i> Ring och Boka: 0243-179 00
                    </a>
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