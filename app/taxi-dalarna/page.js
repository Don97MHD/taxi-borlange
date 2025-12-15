import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import SectionHeading from '@/components/SectionHeading';
import CtaSection from '@/components/CtaSection';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Taxi Dalarna | Fasta Priser från Borlänge | Boka',
  description: 'Res från Borlänge till Falun, Leksand, Rättvik m.fl. Dala Taxi erbjuder bekväma resor till fasta priser. Boka din nästa resa i Dalarna med oss!',
}

export default function TaxiDalarna() {
  return (
    <>
      <Header />
      
      <PageHeader 
        title="Taxi Dalarna" 
        subtitle="Fasta Priser från Borlänge" 
      />

      {/* Intro Section */}
      <section className="about-section padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                {/* يمكنك تغيير الصورة لاحقاً لصورة خريطة دالارنا أو منظر طبيعي */}
                <Image className="about-img1 wow fade-in-left" src="/assets/img/service-5.webp" alt="Taxi Dalarna" width={600} height={400} sizes="(max-width: 768px) 100vw, 388px" style={{objectFit: 'cover', width: '100%', height: 'auto'}} />
              </div>
            </div>
            <div className="col-lg-6">
              <SectionHeading 
                align="left"
                subtitle="Taxi från Borlänge"
                title="Till Alla Orter i Dalarna"
                description="Upptäck friheten och bekvämligheten med att resa från Borlänge till valfri destination i vårt vackra Dalarna. Dala Taxi Borlänge är din expert på regionala transporter. Oavsett om du planerar en dagsutflykt, en affärsresa eller behöver transport till en annan ort, erbjuder vi en pålitlig, säker och prisvärd lösning från dörr till dörr."
              />
              <p className="mt-3">Glöm krångliga tidtabeller och tågbyten – med oss reser du på dina egna villkor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-section bg-grey padding">
        <div className="container">
          <SectionHeading 
            subtitle="Fördelar"
            title="Dina Fördelar med Våra Regionala Resor"
          />
          
          <div className="row">
            <div className="col-lg-4 col-md-6 padding-15">
              <div className="service-item text-center">
                <div className="service-content">
                  <div className="mb-3"><i className="las la-tags" style={{fontSize: '40px', color: '#ffc107'}}></i></div>
                  <h3>Alltid Fast Pris</h3>
                  <p>Kontakta oss och få ett fast pris i förväg. Inga överraskningar, bara en trygg och förutsägbar kostnad.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 padding-15">
              <div className="service-item text-center">
                <div className="service-content">
                  <div className="mb-3"><i className="las la-couch" style={{fontSize: '40px', color: '#ffc107'}}></i></div>
                  <h3>Bekvämlighet</h3>
                  <p>Res bekvämt i våra moderna bilar och anländ utvilad direkt till din destination.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 padding-15">
              <div className="service-item text-center">
                <div className="service-content">
                  <div className="mb-3"><i className="las la-clock" style={{fontSize: '40px', color: '#ffc107'}}></i></div>
                  <h3>Flexibilitet</h3>
                  <p>Vi kör när det passar dig, dygnet runt. Du är inte bunden till en tidtabell.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations List Section */}
      <section className="blog-section padding">
        <div className="container">
           <SectionHeading 
            subtitle="Destinationer"
            title="Våra Populäraste Destinationer"
            description="Baserat på vad våra kunder söker mest, har vi specialiserat oss på följande destinationer."
          />

          <div className="row justify-content-center">
            
            {/* 1. Falun */}
            <div className="col-lg-6 col-md-6 padding-15">
              <div className="post-card">
                <div className="post-thumb">
                  <img src="/assets/img/post-1.webp" alt="Taxi Borlänge till Falun" />
                </div>
                <div className="post-content-wrap">
                  <div className="post-content">
                    <h3>
                      <Link href="/taxi-dalarna/borlange-falun" className="hover">Taxi Borlänge till Falun 599 kr</Link>
                    </h3>
                    <p>Vår mest frekventa rutt. Res med taxi snabbt och ekonomiskt mellan Borlänge och Falun centrum för 599 fast pris. Perfekt för arbete, shopping eller besök hos vänner.</p>
                    <Link href="/taxi-dalarna/borlange-falun" className="read-more">Läs mer och se fast pris</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Rättvik & Dalhalla */}
            <div className="col-lg-6 col-md-6 padding-15">
              <div className="post-card">
                <div className="post-thumb">
                  <img src="/assets/img/post-2.webp" alt="Taxi Borlänge till Rättvik" />
                </div>
                <div className="post-content-wrap">
                  <div className="post-content">
                    <h3>
                      <Link href="/taxi-dalarna/borlange-rattvik" className="hover">Taxi Borlänge till Rättvik & Dalhalla</Link>
                    </h3>
                    <p>Planerar du ett besök i Rättvik eller en oförglömlig kväll på Dalhalla? Vi erbjuder trygga transporter dit och hem.</p>
                    <Link href="/taxi-dalarna/borlange-rattvik" className="read-more">Läs mer om taxi till Rättvik</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Leksand & Tällberg */}
            <div className="col-lg-6 col-md-6 padding-15">
              <div className="post-card">
                <div className="post-thumb">
                  <img src="/assets/img/post-3.webp" alt="Taxi Borlänge till Leksand" />
                </div>
                <div className="post-content-wrap">
                  <div className="post-content">
                    <h3>
                      <Link href="/taxi-dalarna/borlange-leksand" className="hover">Taxi Borlänge till Leksand & Tällberg</Link>
                    </h3>
                    <p>Oavsett om du ska till Leksand Sommarland, ett klassiskt midsommarfirande eller besöka de vackra hotellen i Tällberg, kör vi dig dit bekvämt.</p>
                    <Link href="/taxi-dalarna/borlange-leksand" className="read-more">Läs mer om taxi till Leksand</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Romme Alpin */}
            <div className="col-lg-6 col-md-6 padding-15">
              <div className="post-card">
                <div className="post-thumb">
                  <Image src="/assets/img/service-3.webp" alt="Taxi Borlänge till Romme Alpin" width={600} height={400} sizes="(max-width: 768px) 100vw, 388px" style={{objectFit: 'cover', width: '100%', height: 'auto'}} />
                </div>
                <div className="post-content-wrap">
                  <div className="post-content">
                    <h3>
                      <Link href="/taxi-dalarna/romme-alpin" className="hover">Taxi Borlänge till Romme Alpin</Link>
                    </h3>
                    <p>Taxi resan från Borlänge till Romme Alpin tar 15 minuter och det kostar 440 kr fast pris. Vi har plats för både dig och din skidutrustning.</p>
                    <Link href="/taxi-dalarna/romme-alpin" className="read-more">Läs mer om Romme Alpin</Link>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Other Locations Text */}
          <div className="row mt-40">
              <div className="col-lg-8 offset-lg-2 text-center">
                  <div className="cta-box bg-grey p-4" style={{borderRadius: '10px'}}>
                      <h3>Taxi Borlänge till Säter, Hedemora, Ludvika m.fl.</h3>
                      <p>Vi kör självklart även till alla andra orter i Dalarna. Kontakta oss för en prisoffert för din specifika resa.</p>
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