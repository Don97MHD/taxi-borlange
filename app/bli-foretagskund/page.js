import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Företagstaxi Borlänge | Res på Faktura | Dala Taxi Borlänge',
  description: 'Effektivisera företagets resor med Dala Taxi Borlänge. Vi erbjuder pålitlig företagstaxi med prioriterad service och smidig månadsfakturering. Kontakta oss för en skräddarsydd lösning eller få fast pris för din budkörning',
}

export default function BusinessTaxi() {
  return (
    <>
      <Header />
      
      {/* Page Header */}
      <PageHeader 
        title={<span>Företagstaxi i <br /><span>Borlänge</span></span>} 
        subtitle="En Pålitlig Partner för Ert Företag" 
      />

      {/* Intro Section */}
      <section className="about-section padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-heading mb-40">
                <div className="section-subtitle"><span></span>Företagstaxi</div>
                <h2>En Pålitlig Partner för Ert Företag</h2>
                <p>I dagens affärsvärld är tid, punktlighet och ett professionellt intryck avgörande för framgång. Dala Taxi Borlänge erbjuder en skräddarsydd företagstaxi tjänst som är utformad för att förenkla och effektivisera ert företags alla transportbehov.</p>
                <p>Låt oss ta hand om resorna, så kan ni fokusera på det ni gör bäst i er verksamhet. Vi strävar efter att vara mer än bara en leverantör; vi vill vara er långsiktiga och pålitliga transportpartner.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img">
                {/* Using a generic image from assets based on previous code */}
                <Image className="about-img1 wow fade-in-right" src="/assets/img/about-1.webp" alt="Business Taxi" width={450} height={580} sizes="(max-width: 768px) 100vw, 240px" />
                <figure className="round-text"><Image src="/assets/img/experience-text-round.webp" alt="experience" width={300} height={300} sizes="(max-width: 768px) 100vw, 200px" /></figure>
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
            <h2>Fördelarna med ett Företagsavtal</h2>
            <p>Ett företagsavtal med oss ger er tillgång till en rad exklusiva fördelar som sparar både tid och pengar,<br />samtidigt som ni höjer kvaliteten på era affärsresor.</p>
          </div>

          <div className="row">
            {/* Benefit 1: Samlingsfaktura */}
            <div className="col-lg-4 col-md-6 padding-15">
              <div className="service-item">
                <div className="service-content">
                  <div className="feature-icon"><i className="las la-file-invoice-dollar"></i></div>
                  <h3>Samlingsfaktura</h3>
                  <p>Slipp krångel med enskilda reseräkningar och kvitton. Vi samlar alla företagets resor under en månad på en enda, specificerad samlingsfaktura. Det ger er full överblick och en betydligt enklare administration och bokföring.</p>
                </div>
              </div>
            </div>

            {/* Benefit 2: Fasta Priser */}
            <div className="col-lg-4 col-md-6 padding-15">
              <div className="service-item">
                <div className="service-content">
                  <div className="feature-icon"><i className="las la-tags"></i></div>
                  <h3>Billiga fasta priser</h3>
                  <p>Ni som är företagskund hos Dala Taxi Borlänge, har ni tillgång till våra speciella billiga fasta priser. Vi kommer att skaffa ett kundnummer till ert företag så ni och era anställda kan åka billigt med oss.</p>
                </div>
              </div>
            </div>

            {/* Benefit 3: Prioriterad Service */}
            <div className="col-lg-4 col-md-6 padding-15">
              <div className="service-item">
                <div className="service-content">
                  <div className="feature-icon"><i className="las la-stopwatch"></i></div>
                  <h3>Prioriterad Service</h3>
                  <p>Som avtalskund prioriteras era bokningar alltid. Det innebär snabbare tillgång till bilar, även under rusningstid. Vi finns tillgängliga dygnet runt för era behov.</p>
                </div>
              </div>
            </div>

            {/* Benefit 4: Punktlighet */}
            <div className="col-lg-6 col-md-6 padding-15">
              <div className="service-item">
                <div className="service-content">
                  <div className="feature-icon"><i className="las la-clock"></i></div>
                  <h3>Punktlighet Ni Kan Lita På</h3>
                  <p>Vi vet att en missad anslutning eller sen ankomst till ett möte inte är ett alternativ. Våra förare är experter på att planera den mest effektiva rutten för att säkerställa att ni, era anställda och era gäster alltid anländer i tid.</p>
                </div>
              </div>
            </div>

            {/* Benefit 5: Professionellt Intryck */}
            <div className="col-lg-6 col-md-6 padding-15">
              <div className="service-item">
                <div className="service-content">
                  <div className="feature-icon"><i className="las la-user-tie"></i></div>
                  <h3>Ett Professionellt Intryck</h3>
                  <p>Anländ till era möten i en av våra rena, moderna och komfortabla bilar. Våra professionella och diskreta förare bidrar till att ge era kunder och affärspartners ett förstklassigt och seriöst intryck av ert företag.</p>
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
                        <img src="/assets/img/service-5.webp" alt="Företagstjänster" className="img-fluid" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="section-heading mb-30">
                        <div className="section-subtitle"><span></span>Tjänster</div>
                        <h2>Våra Företagstjänster Passar Perfekt För:</h2>
                    </div>
                    <ul className="check-list">
                        <li><i className="las la-check-circle"></i><Link href="/flygtaxi/">Resor till och från Arlanda och Dala Airport</Link></li>
                        <li><i className="las la-check-circle"></i>Transport av kunder, gäster och konsulter</li>
                        <li><i className="las la-check-circle"></i>Resor mellan kontor, möten och konferenser</li>
                        <li><i className="las la-check-circle"></i><Link href="/bud-paket/">Snabba och säkra bud- och paketleveranser</Link></li>
                        <li><i className="las la-check-circle"></i>Personaltransport vid evenemang eller sena arbetspass</li>
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* Booking/Application Form Section */}
      <section className="booking-section bg-grey padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="booking-wrap">
                <div className="section-heading text-center mb-30">
                  <div className="section-subtitle"><span></span>Ansökan</div>
                  <h2>Bli Företagskund Idag – Det Är Enkelt!</h2>
                  <p>Att komma igång med våra företagstjänster är smidigt. Fyll i formuläret nedan eller ring oss direkt, så skräddarsyr vi ett avtal som passar just era behov och er resevolym.</p>
                </div>
                
                <form action="#" id="business-application-form">
                  <div className="booking-form">
                    <div className="row">
                        {/* Added Company Name Field */}
                        <div className="col-md-6">
                            <div className="form-field">
                                <i className="las la-building"></i>
                                <input type="text" id="company-name" name="company-name" className="form-control" placeholder="Företagsnamn" required />
                            </div>
                        </div>
                        
                        {/* Name Field */}
                        <div className="col-md-6">
                            <div className="form-field">
                                <i className="las la-user"></i>
                                <input type="text" id="contact-name" name="contact-name" className="form-control" placeholder="Kontaktperson" required />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div className="col-md-6">
                            <div className="form-field">
                                <i className="las la-envelope"></i>
                                <input type="email" id="email" name="email" className="form-control" placeholder="E-post" required />
                            </div>
                        </div>

                        {/* Phone Field */}
                        <div className="col-md-6">
                            <div className="form-field">
                                <i className="las la-phone"></i>
                                <input type="tel" id="phone" name="phone" className="form-control" placeholder="Telefonnummer" required />
                            </div>
                        </div>

                        {/* Additional Message Field */}
                        <div className="col-md-12">
                            <div className="form-field">
                                <i className="las la-comment"></i>
                                <textarea id="message" name="message" className="form-control" placeholder="Övriga önskemål eller meddelande (valfritt)" rows="4" style={{height: 'auto', paddingTop: '15px'}}></textarea>
                            </div>
                        </div>

                        <div className="col-md-12 text-center">
                            <div className="form-field">
                                <button id="submit" className="default-btn" type="submit">Skicka Ansökan</button>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div id="form-messages" className="alert" role="alert"></div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Phone Section */}
      <section className="cta-section padding">
        <div className="container">
            <div className="cta-content text-center">
                <h2>Har du frågor eller vill diskutera ett avtal direkt?</h2>
                <div className="cta-call">
                    <i className="las la-phone-volume"></i>
                    <p><span>Ring oss på</span><a href="tel:024317900">0243-179 00</a></p>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </>
  );
}