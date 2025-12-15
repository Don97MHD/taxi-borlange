import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import CtaSection from '@/components/CtaSection';
import Link from 'next/link';

export const metadata = {
  title: 'Priser & Fasta Priser Taxi Borlänge | Dala Taxi',
  description: 'Se våra priser för taxi i Borlänge. Vi erbjuder fasta priser till Falun (599 kr), Arlanda och Dala Airport. Kontakta oss för en exakt prisoffert för din resa.',
}

export default function Prices() {
  return (
    <>
      <Header />
      <PageHeader title="Priser & Fasta Priser" subtitle="Transparent Prissättning" />

      {/* Intro Section */}
      <section className="about-section padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
               <SectionHeading 
                 title="Transparent och Rättvis Prissättning"
                 subtitle="Priser"
                 description="På Dala Taxi Borlänge tror vi på en ärlig och transparent prissättning. Vi vill att du som kund alltid ska känna dig trygg med vad din resa kommer att kosta. Här hittar du information om våra taxameterpriser samt en översikt över våra populära fasta priser till destinationer som Falun, Arlanda och Dala Airport."
               />
            </div>
          </div>
        </div>
      </section>

      {/* Taxameter Section */}
      <section className="service-section bg-grey padding">
        <div className="container">
           <div className="section-heading text-center mb-40">
            <div className="section-subtitle"><span></span>Grundtaxa</div>
            <h2>Taxameterpriser</h2>
            <p>För kortare resor inom Borlänge tätort, eller när inget fast pris avtalats, <br/>gäller vår standardtaxa enligt taxameter.</p>
          </div>

          <div className="row">
            {/* Jämförelsepris */}
            <div className="col-lg-3 col-md-6 sm-padding">
              <div className="service-item text-center">
                <div className="service-content">
                  <div className="mb-3"><i className="las la-balance-scale" style={{fontSize: '40px', color: '#ffc107'}}></i></div>
                  <h3>Jämförelsepris</h3>
                  <h2 style={{color: '#111', fontSize: '32px'}}>430 kr</h2>
                  <p style={{fontSize: '13px', color: '#666'}}>(En resa på 10 km som tar 15 min)</p>
                </div>
              </div>
            </div>

            {/* Grundavgift */}
            <div className="col-lg-3 col-md-6 sm-padding">
              <div className="service-item text-center">
                <div className="service-content">
                  <div className="mb-3"><i className="las la-flag-checkered" style={{fontSize: '40px', color: '#ffc107'}}></i></div>
                  <h3>Grundavgift</h3>
                  <h2 style={{color: '#111', fontSize: '32px'}}>47 kr</h2>
                  <p style={{fontSize: '13px', color: '#666'}}>Startavgift för resan</p>
                </div>
              </div>
            </div>

            {/* Timpris */}
            <div className="col-lg-3 col-md-6 sm-padding">
              <div className="service-item text-center">
                <div className="service-content">
                  <div className="mb-3"><i className="las la-hourglass-half" style={{fontSize: '40px', color: '#ffc107'}}></i></div>
                  <h3>Timpris</h3>
                  <h2 style={{color: '#111', fontSize: '32px'}}>490 kr</h2>
                  <p style={{fontSize: '13px', color: '#666'}}>Pris per timme</p>
                </div>
              </div>
            </div>

            {/* Kilometerpris */}
            <div className="col-lg-3 col-md-6 sm-padding">
              <div className="service-item text-center">
                <div className="service-content">
                  <div className="mb-3"><i className="las la-road" style={{fontSize: '40px', color: '#ffc107'}}></i></div>
                  <h3>Kilometerpris</h3>
                  <h2 style={{color: '#111', fontSize: '32px'}}>26 kr</h2>
                  <p style={{fontSize: '13px', color: '#666'}}>Pris per kilometer</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-3">
            <p><strong>Obs:</strong> Taxan är densamma dygnet runt, alla dagar i veckan.</p>
          </div>
        </div>
      </section>

      {/* Fixed Prices Table Section */}
      <section className="pricing-table-section padding">
        <div className="container">
          <SectionHeading 
             title="Fasta Priser till Populära Destinationer"
             subtitle="Res Tryggt"
             description="För längre resor rekommenderar vi alltid att du frågar efter ett fast pris. Här är ett urval av våra priser från Borlänge centrum."
          />

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="table-responsive">
                <table className="table table-striped table-bordered text-center" style={{verticalAlign: 'middle'}}>
                  <thead style={{backgroundColor: '#111', color: '#fff'}}>
                    <tr>
                      <th style={{padding: '15px'}}>Destination</th>
                      <th style={{padding: '15px'}}>Standardbil (1-4 pers)</th>
                      <th style={{padding: '15px'}}>Storbil (5-8 pers)</th>
                      <th style={{padding: '15px'}}>Mer Info</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{fontWeight: 'bold', textAlign: 'left', paddingLeft: '20px'}}>Taxi Borlänge - Falun</td>
                      <td style={{fontSize: '18px', fontWeight: 'bold'}}>599 kr</td>
                      <td style={{fontSize: '18px'}}>750 kr</td>
                      <td><Link href="/taxi-dalarna/borlange-falun" className="read-more">Läs mer</Link></td>
                    </tr>
                    <tr>
                      <td style={{fontWeight: 'bold', textAlign: 'left', paddingLeft: '20px'}}>Taxi Borlänge - Dala Airport</td>
                      <td style={{fontSize: '18px', fontWeight: 'bold'}}>299 kr</td>
                      <td style={{fontSize: '18px'}}>350 kr</td>
                      <td><Link href="/flygtaxi/dala-airport" className="read-more">Läs mer</Link></td>
                    </tr>
                    <tr>
                      <td style={{fontWeight: 'bold', textAlign: 'left', paddingLeft: '20px'}}>Taxi Borlänge - Arlanda</td>
                      <td style={{fontSize: '18px', fontWeight: 'bold'}}>4900 kr</td>
                      <td style={{fontSize: '18px'}}>5500 kr</td>
                      <td><Link href="/flygtaxi/arlanda" className="read-more">Läs mer</Link></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="other-destinations mt-4 text-center">
                 <p>
                    För destinationer som <Link href="/taxi-dalarna/borlange-rattvik" style={{textDecoration: 'underline', color: '#ffc107'}}>Rättvik</Link>,{' '} 
                    <Link href="/taxi-dalarna/borlange-leksand" style={{textDecoration: 'underline', color: '#ffc107'}}>Leksand</Link> och{' '} 
                    <Link href="/taxi-dalarna/romme-alpin" style={{textDecoration: 'underline', color: '#ffc107'}}>Romme Alpin</Link>, 
                    vänligen kontakta oss för en dagsaktuell och korrekt prisoffert.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section (Custom for this page) */}
      <section className="cta-section-2 bg-grey padding">
        <div className="container">
            <div className="row align-items-center justify-content-center text-center">
                <div className="col-lg-8">
                    <div className="section-heading mb-20">
                        <h2>Få Ett Fast Pris för Just Din Resa</h2>
                        <p>Priserna ovan är från Borlänge centrum. För att få ett exakt fast pris från din specifika adress till din destination, är det enklaste sättet att ringa oss. Vår personal hjälper dig snabbt med en korrekt prisuppgift.</p>
                    </div>
                    <div className="cta-btn mt-4">
                         <a href="tel:024317900" className="default-btn" style={{fontSize: '20px', padding: '15px 40px'}}>
                             <i className="las la-phone"></i> Ring för Fast Pris: 0243-179 00
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