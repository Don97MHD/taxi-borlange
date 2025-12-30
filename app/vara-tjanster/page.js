import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Våra Taxitjänster i Borlänge | Flygtaxi, Företagstaxi & Mer',
  description: 'Dala Taxi Borlänge erbjuder ett komplett utbud av taxitjänster. Läs mer om vår flygtaxi, företagstaxi, tågtaxi, budservice och transport för större grupper.',
}

export default function Services() {
  return (
    <>
      <Header />
      
      {/* Page Header */}
      <PageHeader 
        title={<span>Våra Tjänster – En Komplett <br /><span>Transportlösning</span></span>} 
        subtitle="Dala Taxi Borlänge" 
      />

      {/* Service Section */}
      <section className="service-section bg-grey bd-bottom padding">
        <div className="container">
          
          {/* Intro Text Block (Added to display the welcome text provided) */}
          <div className="row">
            <div className="col-lg-12">
               <div className="section-heading text-center mb-40">
                <div className="section-subtitle"><span></span>Resor & Transport</div>
                <h2>En Komplett Transportlösning i Borlänge</h2>
                <p>Välkommen till en översikt av de skräddarsydda transporttjänster som Dala Taxi Borlänge erbjuder. Vi är stolta över att kunna tillhandahålla en pålitlig, säker och flexibel samt komfort taxitjänst som möter alla dina behov, oavsett om du reser som privatperson eller företagare i tjänsten. Vårt mål är att göra varje resa, stor som liten, till en bekväm och problemfri upplevelse.</p>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Service Item 1: Flygtaxi */}
            <div className="col-lg-4 col-sm-6 padding-15">
              <div className="service-item">
                <div className="service-thumb">
                  {/* Changed img to airport/service-2 based on context */}
                  <Image src="/assets/img/service-2.webp" alt="Flygtaxi" width={600} height={400} sizes="(max-width: 768px) 100vw, 388px" style={{objectFit: 'cover', width: '100%', height: 'auto'}} />
                  <div className="service-shape-wrap">
                    <div className="service-shape"></div>
                  </div>
                  <div className="service-car"><Image src="/assets/img/car-1.webp" alt="car" width={700} height={439} sizes="(max-width: 768px) 100vw, 230px" style={{objectFit: 'cover', width: '100%', height: 'auto'}} /></div>
                </div>
                <div className="service-content">
                  <h3><Link href="/flygtaxi/">Flygtaxi (Arlanda & Dala)</Link></h3>
                  <p>Starta och avsluta din resa på bästa möjliga sätt. Vi erbjuder punktliga och bekväma transporter till regionens flygplatser med fasta priser.</p>
                  <Link href="/flygtaxi/" className="read-more">Läs mer</Link>
                </div>
              </div>
            </div>

            {/* Service Item 2: Tågtaxi */}
            <div className="col-lg-4 col-sm-6 padding-15">
              <div className="service-item">
                <div className="service-thumb">
                  {/* Changed img to train/service-1 */}
                  <Image src="/assets/img/service-1.webp" alt="Tågtaxi" width={600} height={400} sizes="(max-width: 768px) 100vw, 388px" style={{objectFit: 'cover', width: '100%', height: 'auto'}} />
                  <div className="service-shape-wrap">
                    <div className="service-shape"></div>
                  </div>
                  <div className="service-car"><Image src="/assets/img/car-1.webp" alt="car" width={700} height={439} sizes="(max-width: 768px) 100vw, 230px" style={{objectFit: 'cover', width: '100%', height: 'auto'}} /></div>
                </div>
                <div className="service-content">
                  <h3><Link href="/vara-tjanster/tagtaxi/">Tågtaxi Borlänge</Link></h3>
                  <p>Missa aldrig ett tåg igen. Med vår tågtaxiservice kan du vara säker på att du anländer till Borlänge resecentrum i god tid.</p>
                  <Link href="/vara-tjanster/tagtaxi/" className="read-more">Läs mer</Link>
                </div>
              </div>
            </div>

            {/* Service Item 3: Storbil */}
            <div className="col-lg-4 col-sm-6 padding-15">
              <div className="service-item">
                <div className="service-thumb">
                  {/* Changed img to van/service-3 */}
                  <Image src="/assets/img/service-3.webp" alt="Storbil" width={600} height={400} sizes="(max-width: 768px) 100vw, 388px" style={{objectFit: 'cover', width: '100%', height: 'auto'}} />
                  <div className="service-shape-wrap">
                    <div className="service-shape"></div>
                  </div>
                  <div className="service-car"><Image src="/assets/img/car-1.webp" alt="car" width={700} height={439} sizes="(max-width: 768px) 100vw, 230px" style={{objectFit: 'cover', width: '100%', height: 'auto'}} /></div>
                </div>
                <div className="service-content">
                  <h3><Link href="/vara-tjanster/storbil-gruppresor/">Storbil & Gruppresor</Link></h3>
                  <p>Reser ni som en familj, med vänner eller kollegor? Våra rymliga bilar har plats för upp till 8 passagerare. Perfekt för utflykter.</p>
                  <Link href="/vara-tjanster/storbil-gruppresor/" className="read-more">Läs mer</Link>
                </div>
              </div>
            </div>

            {/* Service Item 4: Företagstaxi */}
            <div className="col-lg-4 col-sm-6 padding-15">
              <div className="service-item">
                <div className="service-thumb">
                  <Image src="/assets/img/service-5.webp" alt="Företagstaxi" width={600} height={400} sizes="(max-width: 768px) 100vw, 388px" style={{objectFit: 'cover', width: '100%', height: 'auto'}} />
                  <div className="service-shape-wrap">
                    <div className="service-shape"></div>
                  </div>
                  <div className="service-car"><Image src="/assets/img/car-1.webp" alt="car" width={700} height={439} sizes="(max-width: 768px) 100vw, 230px" style={{objectFit: 'cover', width: '100%', height: 'auto'}} /></div>
                </div>
                <div className="service-content">
                  <h3><Link href="/bli-foretagskund/">Företagstaxi</Link></h3>
                  <p>Vi är en pålitlig transportpartner för ditt företag. Representativa bilar, prioriterad service och smidig månadsfakturering.</p>
                  <Link href="/bli-foretagskund/" className="read-more">Läs mer</Link>
                </div>
              </div>
            </div>

            {/* Service Item 5: Bud & Paket */}
            <div className="col-lg-4 col-sm-6 padding-15">
              <div className="service-item">
                <div className="service-thumb">
                  <Image src="/assets/img/service-4.webp" alt="Bud & Paket" width={600} height={400} sizes="(max-width: 768px) 100vw, 388px" style={{objectFit: 'cover', width: '100%', height: 'auto'}} />
                  <div className="service-shape-wrap">
                    <div className="service-shape"></div>
                  </div>
                  <div className="service-car"><Image src="/assets/img/car-1.webp" alt="car" width={700} height={439} sizes="(max-width: 768px) 100vw, 230px" style={{objectFit: 'cover', width: '100%', height: 'auto'}} /></div>
                </div>
                <div className="service-content">
                  <h3><Link href="/bud-paket/">Bud & Paket</Link></h3>
                  <p>När det är bråttom. Vår budservice är det snabbaste och säkraste sättet att transportera dokument och paket i Dalarna.</p>
                  <Link href="/bud-paket/" className="read-more">Läs mer</Link>
                </div>
              </div>
            </div>

            {/* Service Item 6: Special / Contact */}
         {/* Service Item: Seniortaxa */}
            <div className="col-lg-4 col-sm-6 padding-15">
              <div className="service-item">
                <div className="service-thumb">
                  <Image src="/assets/img/service-1.webp" alt="Seniortaxa" width={600} height={400} sizes="(max-width: 768px) 100vw, 388px" style={{objectFit: 'cover', width: '100%', height: 'auto'}} />
                  <div className="service-shape-wrap">
                    <div className="service-shape"></div>
                  </div>
                  <div className="service-car"><Image src="/assets/img/car-1.webp" alt="car" width={700} height={439} sizes="(max-width: 768px) 100vw, 230px" style={{objectFit: 'cover', width: '100%', height: 'auto'}} /></div>
                </div>
                <div className="service-content">
                  <h3><Link href="/vara-tjanster/seniortaxa">Seniortaxa (65+)</Link></h3>
                  <p>Är du 65 år eller äldre? Åk billigare med oss. Vi erbjuder 20% rabatt på alla resor inom Borlänge.</p>
                  <Link href="/vara-tjanster/seniortaxa" className="read-more">Läs mer</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section 2 (Hittar du inte vad du söker?) */}
      <section className="cta-section-2 padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="cta-content">
                <div className="section-subtitle">Hittar du inte vad du söker?</div>
                <h2>Skräddarsydda Lösningar</h2>
                <Link href="/kontakt/" className="default-btn">Kontakta Oss</Link>
              </div>
            </div>
            <div className="col-lg-5">
               {/* Updated checklist based on general service features mentioned */}
              <ul className="check-list">
                <li><i className="las la-arrow-right"></i>Särskilda önskemål?</li>
                <li><i className="las la-arrow-right"></i>Flexibla transportlösningar.</li>
                <li><i className="las la-arrow-right"></i>Vi uppfyller dina förväntningar.</li>
                <li><i className="las la-arrow-right"></i>Kontakta oss för förfrågan.</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <div className="cta-men"></div>
            </div>
          </div>
        </div>
      </section>

    

      <Footer />
    </>
  );
}