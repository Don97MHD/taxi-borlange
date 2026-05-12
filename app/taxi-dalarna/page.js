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
  alternates: {
    canonical: '/taxi-dalarna/',
  },
}

export default function TaxiDalarna() {
  return (
    <>
      <Header />
      
      <PageHeader 
        title="Taxi Dalarna" 
        subtitle="Fasta Priser från Borlänge" 
      />

      <section className="about-section padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="modern-image-wrapper">
                <div className="image-glow"></div>
                <Image className="img-fluid rounded-custom" src="/assets/img/service-5.webp" alt="Taxi Dalarna" width={600} height={400} sizes="(max-width: 768px) 100vw, 600px" style={{objectFit: 'cover', width: '100%', height: 'auto', position: 'relative', zIndex: 2}} />
              </div>
            </div>
            <div className="col-lg-6 ps-lg-4">
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

      <section className="service-section bg-grey padding">
        <div className="container">
          <SectionHeading 
            subtitle="Fördelar"
            title="Dina Fördelar med Våra Regionala Resor"
          />
          
          <div className="row">
            <div className="col-lg-4 col-md-6 padding-15">
               <div className="modern-feature-card h-100 text-center align-items-center">
                  <div className="icon-wrapper mb-3">
                     <i className="las la-tags"></i>
                  </div>
                  <h3>Alltid Fast Pris</h3>
                  <p className="mb-0">Kontakta oss och få ett fast pris i förväg. Inga överraskningar, bara en trygg och förutsägbar kostnad.</p>
               </div>
            </div>
            <div className="col-lg-4 col-md-6 padding-15">
               <div className="modern-feature-card h-100 text-center align-items-center">
                  <div className="icon-wrapper mb-3">
                     <i className="las la-couch"></i>
                  </div>
                  <h3>Bekvämlighet</h3>
                  <p className="mb-0">Res bekvämt i våra moderna bilar och anländ utvilad direkt till din destination.</p>
               </div>
            </div>
            <div className="col-lg-4 col-md-6 padding-15">
               <div className="modern-feature-card h-100 text-center align-items-center">
                  <div className="icon-wrapper mb-3">
                     <i className="las la-clock"></i>
                  </div>
                  <h3>Flexibilitet</h3>
                  <p className="mb-0">Vi kör när det passar dig, dygnet runt. Du är inte bunden till en tidtabell.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

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
              <div className="post-card h-100 d-flex flex-column">
                <div className="post-thumb">
                  <Image src="/assets/img/post-1.webp" alt="Taxi Borlänge till Falun" width={600} height={400} sizes="(max-width: 768px) 100vw, 600px" style={{objectFit: 'cover', width: '100%', height: 'auto'}} />
                </div>
                <div className="post-content-wrap flex-grow-1 d-flex flex-column p-4">
                  <div className="post-content flex-grow-1 mb-4">
                    <h3 className="mb-3">
                      {/* تم تعديل الرابط ليطابق البيانات: taxi-borlange-falun */}
                      <Link href="/taxi-dalarna/taxi-borlange-falun" style={{color: '#222'}}>Taxi Borlänge till Falun 599 kr</Link>
                    </h3>
                    <p style={{color: '#666', lineHeight: '1.7'}}>Vår mest frekventa rutt. Res med taxi snabbt och ekonomiskt mellan Borlänge och Falun centrum för 599 fast pris. Perfekt för arbete, shopping eller besök hos vänner.</p>
                  </div>
                  <Link href="/taxi-dalarna/taxi-borlange-falun" className="boka-link mt-auto">
                    Läs mer och se fast pris <i className="las la-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* 2. Rättvik & Dalhalla */}
            <div className="col-lg-6 col-md-6 padding-15">
              <div className="post-card h-100 d-flex flex-column">
                <div className="post-thumb">
                  <Image src="/assets/img/post-2.webp" alt="Taxi Borlänge till Rättvik" width={600} height={400} sizes="(max-width: 768px) 100vw, 600px" style={{objectFit: 'cover', width: '100%', height: 'auto'}} />
                </div>
                <div className="post-content-wrap flex-grow-1 d-flex flex-column p-4">
                  <div className="post-content flex-grow-1 mb-4">
                    <h3 className="mb-3">
                      {/* تم تعديل الرابط: taxi-rattvik */}
                      <Link href="/taxi-dalarna/taxi-rattvik" style={{color: '#222'}}>Taxi Borlänge till Rättvik & Dalhalla</Link>
                    </h3>
                    <p style={{color: '#666', lineHeight: '1.7'}}>Planerar du ett besök i Rättvik eller en oförglömlig kväll på Dalhalla? Vi erbjuder trygga transporter dit och hem.</p>
                  </div>
                  <Link href="/taxi-dalarna/taxi-rattvik" className="boka-link mt-auto">
                    Läs mer om taxi till Rättvik <i className="las la-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* 3. Leksand & Tällberg */}
            <div className="col-lg-6 col-md-6 padding-15">
              <div className="post-card h-100 d-flex flex-column">
                <div className="post-thumb">
                  <Image src="/assets/img/post-3.webp" alt="Taxi Borlänge till Leksand" width={600} height={400} sizes="(max-width: 768px) 100vw, 600px" style={{objectFit: 'cover', width: '100%', height: 'auto'}} />
                </div>
                <div className="post-content-wrap flex-grow-1 d-flex flex-column p-4">
                  <div className="post-content flex-grow-1 mb-4">
                    <h3 className="mb-3">
                      {/* تم تعديل الرابط: taxi-leksand */}
                      <Link href="/taxi-dalarna/taxi-leksand" style={{color: '#222'}}>Taxi Borlänge till Leksand & Tällberg</Link>
                    </h3>
                    <p style={{color: '#666', lineHeight: '1.7'}}>Oavsett om du ska till Leksand Sommarland, ett klassiskt midsommarfirande eller besöka de vackra hotellen i Tällberg, kör vi dig dit bekvämt.</p>
                  </div>
                  <Link href="/taxi-dalarna/taxi-leksand" className="boka-link mt-auto">
                    Läs mer om taxi till Leksand <i className="las la-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* 4. Romme Alpin */}
            <div className="col-lg-6 col-md-6 padding-15">
              <div className="post-card h-100 d-flex flex-column">
                <div className="post-thumb">
                  <Image src="/assets/img/service-3.webp" alt="Taxi Borlänge till Romme Alpin" width={600} height={400} sizes="(max-width: 768px) 100vw, 388px" style={{objectFit: 'cover', width: '100%', height: 'auto'}} />
                </div>
                <div className="post-content-wrap flex-grow-1 d-flex flex-column p-4">
                  <div className="post-content flex-grow-1 mb-4">
                    <h3 className="mb-3">
                      {/* هذا الرابط كان صحيحاً: romme-alpin */}
                      <Link href="/taxi-dalarna/romme-alpin" style={{color: '#222'}}>Taxi Borlänge till Romme Alpin</Link>
                    </h3>
                    <p style={{color: '#666', lineHeight: '1.7'}}>Taxi resan från Borlänge till Romme Alpin tar 15 minuter och det kostar 440 kr fast pris. Vi har plats för både dig och din skidutrustning.</p>
                  </div>
                  <Link href="/taxi-dalarna/romme-alpin" className="boka-link mt-auto">
                    Läs mer om Romme Alpin <i className="las la-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

          </div>

          <div className="row mt-5">
              <div className="col-lg-8 offset-lg-2 text-center">
                  <div className="modern-feature-card p-5">
                      <h3 className="mb-3">Taxi Borlänge till Säter, Hedemora, Ludvika m.fl.</h3>
                      <p className="mb-0" style={{color: '#666'}}>Vi kör självklart även till alla andra orter i Dalarna. <Link href="/kontakt" style={{color: '#ff7b00', fontWeight: 'bold', textDecoration: 'underline'}}>Kontakta oss</Link> för en prisoffert för din specifika resa.</p>
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