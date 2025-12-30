import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import CtaSection from '@/components/CtaSection';
import Link from 'next/link';

export const metadata = {
  title: 'Prislista Taxi Borlänge | Fasta Priser till Hela Dalarna',
  description: 'Se vår prislista för taxi i Borlänge. Vi erbjuder fasta priser till Romme Alpin (440 kr), Stockholm, Falun, Avesta, Leksand och många fler orter.',
}

export default function Prices() {
  // قائمة الأسعار الجديدة
  const priceList = [
    { dest: "Taxi Borlänge - Dala Airport", price: "320 kr", link: "/flygtaxi/dala-airport" }, // تمت إضافته للأهمية
    { dest: "Taxi Borlänge - Romme Alpin", price: "440 kr", link: "/taxi-dalarna/romme-alpin" },
    { dest: "Taxi Borlänge - Djurås", price: "599 kr", link: "/taxi-dalarna/taxi-djuras" },
    { dest: "Taxi Borlänge - Falun", price: "599 kr", link: "/taxi-dalarna/borlange-falun" },
    { dest: "Taxi Borlänge - Säter", price: "699 kr", link: "/taxi-dalarna/taxi-sater" },
    { dest: "Taxi Borlänge - Gagnef", price: "700 kr", link: "/taxi-dalarna/taxi-gagnef" },
    { dest: "Taxi Borlänge - Mockfjärd", price: "899 kr", link: "#" },
    { dest: "Taxi Borlänge - Hedemora", price: "1 299 kr", link: "/taxi-dalarna/taxi-hedemora" },
    { dest: "Taxi Borlänge - Ludvika", price: "1 299 kr", link: "/taxi-dalarna/taxi-ludvika" },
    { dest: "Taxi Borlänge - Leksand", price: "1 299 kr", link: "/taxi-dalarna/taxi-leksand" },
    { dest: "Taxi Borlänge - Hofors", price: "1 299 kr", link: "#" },
    { dest: "Taxi Borlänge - Dala-Flöda", price: "1 299 kr", link: "#" },
    { dest: "Taxi Borlänge - Björbo", price: "1 350 kr", link: "#" },
    { dest: "Taxi Borlänge - Tällberg", price: "1 450 kr", link: "/taxi-dalarna/taxi-tallberg" },
    { dest: "Taxi Borlänge - Grängesberg", price: "1 499 kr", link: "/taxi-dalarna/taxi-grangesberg" },
    { dest: "Taxi Borlänge - Avesta", price: "1 599 kr", link: "/taxi-dalarna/taxi-avesta" },
    { dest: "Taxi Borlänge - Nås", price: "1 600 kr", link: "#" },
    { dest: "Taxi Borlänge - Rättvik", price: "1 699 kr", link: "/taxi-dalarna/taxi-rattvik" },
    { dest: "Taxi Borlänge - Dala-Järna", price: "1 800 kr", link: "#" },
    { dest: "Taxi Borlänge - Vansbro", price: "1 999 kr", link: "#" },
    { dest: "Taxi Borlänge - Mora", price: "2 499 kr", link: "#" },
    { dest: "Taxi Borlänge - Malung", price: "3 150 kr", link: "#" },
    { dest: "Taxi Borlänge - Sälen", price: "4 800 kr", link: "#" },
    { dest: "Taxi Borlänge - Arlanda Airport", price: "4 900 kr", link: "/flygtaxi/arlanda" }, // تم التعديل ليتناسب مع صفحة المطار
    { dest: "Taxi Borlänge - Stockholm City", price: "5 400 kr", link: "/taxi-dalarna/borlange-stockholm" },
  ];

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
                 description="På Dala Taxi Borlänge tror vi på en ärlig och transparent prissättning. Vi vill att du som kund alltid ska känna dig trygg med vad din resa kommer att kosta. Nedan hittar du vår kompletta prislista för resor från Borlänge."
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
             title="Fasta Priser från Borlänge"
             subtitle="Res Tryggt"
             description="Här är våra fasta priser till populära destinationer i och utanför Dalarna. Priserna gäller enkel resa med standardbil (1-4 personer)."
          />

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="table-responsive">
                <table className="table table-striped table-bordered text-center" style={{verticalAlign: 'middle'}}>
                  <thead style={{backgroundColor: '#111', color: '#fff'}}>
                    <tr>
                      <th style={{padding: '15px', textAlign: 'left', paddingLeft: '30px'}}>Destination</th>
                      <th style={{padding: '15px'}}>Fast Pris (1-4 pers)</th>
                      <th style={{padding: '15px'}}>Boka</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceList.map((item, index) => (
                      <tr key={index}>
                        <td style={{fontWeight: 'bold', textAlign: 'left', paddingLeft: '30px'}}>
                          {item.link !== "#" ? (
                            <Link href={item.link} className="text-dark hover-orange">
                              {item.dest}
                            </Link>
                          ) : (
                            item.dest
                          )}
                        </td>
                        <td style={{fontSize: '18px', fontWeight: 'bold', color: '#222'}}>{item.price}</td>
                        <td>
                          <a href="tel:024317900" className="default-btn" style={{padding: '5px 20px', fontSize: '14px', height: '35px', lineHeight: '35px'}}>
                            Ring
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="other-destinations mt-4 text-center">
                 <div className="alert alert-warning" role="alert" style={{backgroundColor: '#fff3cd', borderColor: '#ffecb5', color: '#856404'}}>
                    <strong>Notera:</strong> Priserna ovan gäller för standardbil (1-4 passagerare). <br />
                    För <strong>storbil (5-8 passagerare)</strong> tillkommer en extra kostnad. Vänligen ring <strong>0243-179 00</strong> för prisuppgift.
                 </div>
                 <p className="mt-3">
                    Hittar du inte din destination i listan? Kontakta oss så ger vi dig ett fast pris direkt.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section-2 bg-grey padding">
        <div className="container">
            <div className="row align-items-center justify-content-center text-center">
                <div className="col-lg-8">
                    <div className="section-heading mb-20">
                        <h2>Boka din resa nu!</h2>
                        <p>Vi finns tillgängliga dygnet runt för att ta emot din bokning.</p>
                    </div>
                    <div className="cta-btn mt-4">
                         <a href="tel:024317900" className="default-btn" style={{fontSize: '20px', padding: '15px 40px'}}>
                             <i className="las la-phone"></i> Ring oss: 0243-179 00
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