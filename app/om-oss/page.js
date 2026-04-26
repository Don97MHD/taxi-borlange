import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import CtaSection from '@/components/CtaSection';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Om Dala Taxi Borlänge | Din Lokala Taxi i Borlänge och Dalarna',
  description: 'Lär känna Dala Taxi Borlänge. Med över 10 års erfarenhet erbjuder vi trygg och pålitlig taxi med fokus på service, punktlighet och lokalkännedom. Läs mer!',
}

export default function AboutUs() {
  return (
    <>
      <Header />
      
      {/* Page Header */}
      <PageHeader 
        title="Om Dala Taxi Borlänge" 
        subtitle="Erfarenhet & Pålitlighet" 
      />

      {/* Intro & Local Connection Section */}
      <section className="about-section padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="about-img">
                <Image className="about-img1 wow fade-in-left" src="/assets/img/about-1.webp" alt="Dala Taxi Borlänge" width={450} height={580} sizes="(max-width: 768px) 100vw, 240px" />
                <Image className="about-img2 wow fade-in-bottom" src="/assets/img/about-2.webp" alt="Taxi Service" width={400} height={450} sizes="(max-width: 768px) 100vw, 240px" />
                <figure className="round-text"><Image src="/assets/img/experience-text-round.webp" alt="Experience" width={300} height={300} sizes="(max-width: 768px) 100vw, 200px" /></figure>
              </div>
            </div>
            <div className="col-md-6">
              <SectionHeading 
                align="left"
                subtitle="Om Dala Taxi Borlänge"
                title="Erfarenhet, Pålitlighet och Lokal Förankring"
                description="Välkommen till Dala Taxi Borlänge. Vi är mer än bara ett taxibolag; vi är en lokal och engagerad transportpartner som har betjänat Borlängebor och besökare med stolthet sedan 2013. Med över ett decennium i branschen har vi byggt upp vår verksamhet på en grund av förtroende, punktlighet och en djup förståelse för våra kunders behov."
              />
              
              <div className="about-text-block mt-4 wow fade-in-right" data-wow-delay="300ms">
                <h3 style={{fontSize: '20px', fontWeight: 'bold', marginBottom: '10px'}}>En Del av Borlänge</h3>
                <p>
                  Vi är ett lokalt företag som brinner för vår stad och vår region. Vi är stolta över att kunna erbjuda transporter till och från viktiga knutpunkter som <Link href="/taxi-dalarna/romme-alpin" className="text-primary">Romme Alpin</Link>, <Link href="/taxi-dalarna/borlange-falun" className="text-primary">Falu Lasarett</Link>, Dalhalla och alla de fantastiska evenemang som Dalarna har att erbjuda.
                </p>
                <p className="mt-2">
                  Genom att välja oss stöttar du ett lokalt företag som återinvesterar i samhället. Har du frågor eller vill bli <Link href="/bli-foretagskund" className="text-primary">företagskund</Link>? Tveka inte att <Link href="/kontakt" className="text-primary">kontakta oss</Link>.
                </p>
              </div>

              <ul className="about-info mt-4 wow fade-in-right" data-wow-delay="400ms">
                <li>
                  <h2><span>Ring Oss</span><a href="tel:024317900">0243-179 00</a></h2>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History & Promise Section */}
      <section className="service-section bg-grey padding">
        <div className="container">
          <SectionHeading 
            subtitle="Vårt Löfte"
            title="Vår Historia och Vårt Löfte"
            description="Dala Taxi Borlänge grundades med en enkel men kraftfull vision: att erbjuda en överlägsen taxi upplevelse där kunden alltid står i centrum. Vi såg ett behov av en aktör som inte bara kör från punkt A till B, utan som gör det med ett genuint engagemang."
          />

          <div className="row">
            <div className="col-lg-3 col-md-6 sm-padding">
              <div className="service-item text-center">
                <div className="service-content">
                  <div className="mb-3"><i className="las la-shield-alt" style={{fontSize: '40px', color: '#ffc107'}}></i></div>
                  <h3>Trygghet</h3>
                  <p>Din säkerhet är vår högsta prioritet. Våra bilar är moderna, välunderhållna och utrustade för nordiska förhållanden. Alla våra förare är licensierade.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 sm-padding">
              <div className="service-item text-center">
                <div className="service-content">
                  <div className="mb-3"><i className="las la-clock" style={{fontSize: '40px', color: '#ffc107'}}></i></div>
                  <h3>Punktlighet</h3>
                  <p>Vi respekterar din tid. Oavsett om du ska passa ett <Link href="/flygtaxi" style={{textDecoration:'underline'}}>flyg</Link> eller ett viktigt möte, kan du lita på att vi är på plats vid avtalad tid.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 sm-padding">
              <div className="service-item text-center">
                <div className="service-content">
                  <div className="mb-3"><i className="las la-smile" style={{fontSize: '40px', color: '#ffc107'}}></i></div>
                  <h3>Service</h3>
                  <p>Från en enkel bokning till en bekväm resa och ett trevligt bemötande – vi strävar efter att göra varje del av din upplevelse med oss positiv.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 sm-padding">
              <div className="service-item text-center">
                <div className="service-content">
                  <div className="mb-3"><i className="las la-couch" style={{fontSize: '40px', color: '#ffc107'}}></i></div>
                  <h3>Komfort</h3>
                  <p>Alla våra taxi bilar är moderna, rena och rymliga så ni har gott om utrymme både för ert bagage och för att sitta bekvämt under resan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- قسم السيو (SEO) النصي نظيف وبدون فورم --- */}
      <section className="seo-section padding bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              
              <h2 className="mb-3" style={{fontSize: '32px', fontWeight: '700'}}>Dala Taxi Borlänge tillgänglig alla dagar dygnet runt</h2>
              <p style={{fontSize: '18px', color: '#666'}}>Du kan boka Dala taxi Borlänge när som helst.</p>
              
              <div className="call-box my-5" style={{backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '8px', border: '1px solid #eee', display: 'inline-block', minWidth: '300px'}}>
                <h3 style={{fontSize: '16px', color: '#666', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px'}}>Dala Borlänge Taxi Nummer:</h3>
                <a href="tel:024317900" style={{fontSize: '36px', fontWeight: 'bold', color: '#ff9900', display: 'block'}}>0243 – 179 00</a>
              </div>

              <p style={{fontSize: '18px'}}>Dala Taxi Borlänge är till för alla tillfällen. För dig som vill åka billig taxi Borlänge:</p>
              
              {/* قائمة الخدمات للسيو */}
              <ul className="check-list d-flex justify-content-center flex-wrap mt-4 mb-5" style={{gap: '20px', listStyle: 'none', padding: 0}}>
                <li style={{fontSize: '16px', fontWeight: '500', color: '#222'}}><i className="las la-check-circle" style={{color: '#ff9900', fontSize: '20px', marginRight: '5px'}}></i> Dala Taxi Borlänge Falun</li>
                <li style={{fontSize: '16px', fontWeight: '500', color: '#222'}}><i className="las la-check-circle" style={{color: '#ff9900', fontSize: '20px', marginRight: '5px'}}></i> Dala Taxi Borlänge Romme</li>
                <li style={{fontSize: '16px', fontWeight: '500', color: '#222'}}><i className="las la-check-circle" style={{color: '#ff9900', fontSize: '20px', marginRight: '5px'}}></i> Dala Taxi Borlänge Flygplats</li>
                <li style={{fontSize: '16px', fontWeight: '500', color: '#222'}}><i className="las la-check-circle" style={{color: '#ff9900', fontSize: '20px', marginRight: '5px'}}></i> Taxi Dalarna Borlänge</li>
              </ul>

              <hr style={{borderColor: '#eee', margin: '40px 0'}} />

              {/* فقرة ختامية */}
              <div className="text-left" style={{textAlign: 'left', backgroundColor: '#fafafa', padding: '30px', borderRadius: '8px'}}>
                 <h3 style={{textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700', fontSize: '20px', color: '#222', marginBottom: '15px'}}>Taxi för alla tillfällen</h3>
                 <h4 style={{textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '700', fontSize: '16px', color: '#ff9900', marginBottom: '10px'}}>Om Dala Taxi Borlänge</h4>
                 <p style={{marginBottom: '10px'}}>Dala Taxi Borlänge levererar pålitlig och säker taxiservice i Borlänge, Dalarna.</p>
                 <p style={{margin: 0}}><strong>ÖPPETTIDER:</strong> Öppet dygnet runt alla dagar i veckan.</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- خريطة جوجل محدثة بالعنوان الصحيح --- */}
      <div className="google-map" style={{ width: '100%', height: '450px', borderTop: '1px solid #ddd' }}>
        <iframe 
          src="https://www.google.com/maps?q=Dala+Taxi+Borlänge,Ovanbrogatan+2,Borlänge&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Dala Taxi Borlänge Map"
        ></iframe>
      </div>

      <CtaSection />
      <Footer />
    </>
  );
}