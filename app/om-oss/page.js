import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading'; // المكون الجديد
import CtaSection from '@/components/CtaSection';         // المكون الجديد
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
              {/* المقدمة */}
              <SectionHeading 
                align="left"
                subtitle="Om Dala Taxi Borlänge"
                title="Erfarenhet, Pålitlighet och Lokal Förankring"
                description="Välkommen till Dala Taxi Borlänge. Vi är mer än bara ett taxibolag; vi är en lokal och engagerad transportpartner som har betjänat Borlängebor och besökare med stolthet sedan 2013. Med över ett decennium i branschen har vi byggt upp vår verksamhet på en grund av förtroende, punktlighet och en djup förståelse för våra kunders behov."
              />
              
              {/* فقرة "جزء من بورلانج" مدمجة هنا لتناسب التصميم */}
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

      {/* History & Promise Section (Replaces old Service Section) */}
      <section className="service-section bg-grey padding">
        <div className="container">
          <SectionHeading 
            subtitle="Vårt Löfte"
            title="Vår Historia och Vårt Löfte"
            description="Dala Taxi Borlänge grundades med en enkel men kraftfull vision: att erbjuda en överlägsen taxi upplevelse där kunden alltid står i centrum. Vi såg ett behov av en aktör som inte bara kör från punkt A till B, utan som gör det med ett genuint engagemang."
          />

          <div className="row">
            {/* Feature 1: Trygghet */}
            <div className="col-lg-3 col-md-6 sm-padding">
              <div className="service-item text-center">
                <div className="service-content">
                  <div className="mb-3"><i className="las la-shield-alt" style={{fontSize: '40px', color: '#ffc107'}}></i></div>
                  <h3>Trygghet</h3>
                  <p>Din säkerhet är vår högsta prioritet. Våra bilar är moderna, välunderhållna och utrustade för nordiska förhållanden. Alla våra förare är licensierade.</p>
                </div>
              </div>
            </div>

            {/* Feature 2: Punktlighet */}
            <div className="col-lg-3 col-md-6 sm-padding">
              <div className="service-item text-center">
                <div className="service-content">
                  <div className="mb-3"><i className="las la-clock" style={{fontSize: '40px', color: '#ffc107'}}></i></div>
                  <h3>Punktlighet</h3>
                  <p>Vi respekterar din tid. Oavsett om du ska passa ett <Link href="/flygtaxi" style={{textDecoration:'underline'}}>flyg</Link> eller ett viktigt möte, kan du lita på att vi är på plats vid avtalad tid.</p>
                </div>
              </div>
            </div>

            {/* Feature 3: Service */}
            <div className="col-lg-3 col-md-6 sm-padding">
              <div className="service-item text-center">
                <div className="service-content">
                  <div className="mb-3"><i className="las la-smile" style={{fontSize: '40px', color: '#ffc107'}}></i></div>
                  <h3>Service</h3>
                  <p>Från en enkel bokning till en bekväm resa och ett trevligt bemötande – vi strävar efter att göra varje del av din upplevelse med oss positiv.</p>
                </div>
              </div>
            </div>

            {/* Feature 4: Komfort */}
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


      {/* CTA Section - المكون الجديد */}
      <CtaSection />

      <Footer />
    </>
  );
}