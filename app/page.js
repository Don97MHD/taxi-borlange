import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import HomeInteractive from '@/components/HomeInteractive';
// استيراد المكونات الجديدة
import SectionHeading from '@/components/SectionHeading';
import BookingForm from '@/components/BookingForm';
import CtaSection from '@/components/CtaSection';
import HomeFaq from '@/components/HomeFaq';
import ElfsightWidget from '@/components/ElfsightWidget';
import LocationsSection from '@/components/LocationsSection';
import LocalAreasSection from '@/components/LocalAreasSection';

export const metadata = {
  title: 'Dala Taxi Borlänge | 0243 - 179 00',
  description: 'Behöver du taxi i Borlänge? Då bokar taxi med Dala Taxi Borlänge som erbjuder snabb och säker transport dygnet runt. Fasta priser från Borlänge till Falun, Arlanda & Dala Airport.Romme Alpin. Boka enkelt online eller ring oss på 0243-179 00!',
}

export default function Home() {
  return (
    <>
      <Header />

       <main>
        {/* --- 1. إضافة عنوان H1 مخفي خصيصاً لمحركات البحث --- */}
        {/* الكلاس visually-hidden موجود في البوتستراب ويخفي العنصر بصرياً لكن يبقيه مقروءاً للسيو */}
        <h1 className="visually-hidden">Dala Taxi Borlänge - Din pålitliga taxi i Dalarna</h1>
        {/* --------------------------------------------------- */}

        {/* Slider Section */}
        <div className="slider-section">
          <div className="main-slider">
            <div className="swiper-wrapper">
              {/* Slide 1 */}
              <div className="swiper-slide">
                {/* ... الصورة ... */}
                <div className="slider-img">
                  <Image 
  src="/assets/img/slider-bg.webp" 
  alt="Dala Taxi Borlänge" 
  className="kenburns" 
  width={1920} 
  height={940}
  priority={true}
  fetchPriority="high"
  sizes="(max-width: 768px) 100vw, 1920px"
  style={{ animationDuration: '12000ms', objectFit: 'cover' }} 
/>
                </div>
                <div className="car-holder">
                   {/* ... السيارة ... */}
                  <Image src="/assets/img/car-1.webp" alt="car" width={700} height={439} sizes="(max-width: 768px) 100vw, 230px" data-animation="car-animation" data-duration="1.5s" />
                  <div className="shape">
                    {/* ... الأشكال ... */}
                    <div data-animation="slide-in-bottom" data-duration="1.5s" data-delay="0.3s"></div>
                    <div data-animation="fade-in" data-duration="1.5s" data-delay="0.2s"></div>
                    <div data-animation="slide-in-top" data-duration="1.5s" data-delay="0.5s"></div>
                  </div>
                </div>
                <div className="slider-content-wrap d-flex align-items-center text-left">
                  <div className="container">
                    <div className="slider-content">
                      <div className="slider-caption medium"><div className="inner-layer"><div data-animation="fade-in-bottom" data-delay="0.3s">Din pålitliga taxi i Borlänge dygnet runt</div></div></div>
                      
                      {/* --- 2. إعادة هذا العنصر إلى div بدلاً من h1 --- */}
                      {/* سنحتفظ بنفس الكلاسات slider-caption big ليبقى الشكل كبيراً وجميلاً */}
                      <div className="slider-caption big">
                        <div className="inner-layer">
                          <div data-animation="fade-in-bottom" data-delay="0.5s">Dala Taxi Borlänge</div>
                        </div>
                      </div>
                      {/* ----------------------------------------------- */}

                      <div className="slider-caption small"><div className="inner-layer"><div data-animation="fade-in-bottom" data-delay="0.7s" data-duration="1s">Alltid fasta priser till flyg, tåg och Falun <br />samt Romme Alpin!</div></div></div>
                      <div className="slider-btn">
                        <a href="tel:024317900" className="default-btn" data-animation="fade-in-bottom" data-delay="0.9s">KLICKA FÖR ATT RINGA</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Slide 2 */}
              <div className="swiper-slide">
                <div className="slider-img">
                  <Image 
  src="/assets/img/slider-bg.webp" 
  alt="Dala Taxi Borlänge" 
  className="kenburns" 
  width={1920} 
  height={1080}
  fetchPriority="high" // هذا هو السطر السحري للسرعة
  style={{ animationDuration: '12000ms', objectFit: 'cover' }} 
/>
                </div>
                <div className="car-holder">
                  <Image src="/assets/img/car-1.webp" alt="car" width={700} height={439} sizes="(max-width: 768px) 100vw, 230px" data-animation="car-animation" data-duration="1.5s" />
                  <div className="shape">
                    <div data-animation="slide-in-bottom" data-duration="1.5s" data-delay="0.3s"></div>
                    <div data-animation="fade-in" data-duration="1.5s" data-delay="0.2s"></div>
                    <div data-animation="slide-in-top" data-duration="1.5s" data-delay="0.5s"></div>
                  </div>
                </div>
                <div className="slider-content-wrap d-flex align-items-center text-left">
                  <div className="container">
                    <div className="slider-content">
                      <div className="slider-caption medium"><div className="inner-layer"><div data-animation="fade-in-bottom" data-delay="0.3s">Trygg & Pålitlig Transport</div></div></div>
                      <div className="slider-caption big"><div className="inner-layer"><div data-animation="fade-in-bottom" data-delay="0.5s">0243-179 00</div></div></div>
                      <div className="slider-caption small"><div className="inner-layer"><div data-animation="fade-in-bottom" data-delay="0.7s" data-duration="1s">Vi accepterar Swish, kort, kontant och erbjuder faktura <br />för våra företagskunder.</div></div></div>
                      <div className="slider-btn">
                        <a href="tel:024317900" className="default-btn" data-animation="fade-in-bottom" data-delay="0.9s">KLICKA FÖR ATT RINGA</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Slider navigation buttons */}
            <div className="slider-controls">
              <div className="slider-control slider-button-prev"><span><i className="las la-long-arrow-alt-left"></i></span>Föreg</div>
              <div className="slider-pagination"></div>
              <div className="slider-control slider-button-next">Nästa<span><i className="las la-long-arrow-alt-right"></i></span></div>
            </div>
          </div>
        </div>

{/* About Section + Booking Form + Images */}
        <section className="about-section padding">
          <div className="container">
            <div className="row">
              
              {/* العمود الأول (يسار): فورم الحجز */}
              <div className="col-lg-5 mb-5 mb-lg-0">
                 {/* الفورم يأخذ كامل عرض العمود */}
                 <BookingForm />
              </div>

              {/* العمود الثاني (يمين): الصور والنصوص */}
              <div className="col-lg-7 ps-lg-5"> {/* ps-lg-5 تعطي مسافة فاصلة جميلة */}
                
                {/* 1. الصور (جعلناها فوق النص وبجانب بعضها) */}
                <div className="row mb-4">
                   <div className="col-6">
                      <Image 
                        className="wow fade-in-left"
                        src="/assets/img/about-1.webp" 
                        alt="Dala Taxi" 
                        width={400} 
                        height={500} 
                        style={{width: '100%', height: 'auto', borderRadius: '8px', objectFit: 'cover'}} 
                      />
                   </div>
                   <div className="col-6">
                      <Image 
                        className="wow fade-in-right"
                        src="/assets/img/about-2.webp" 
                        alt="Taxi Service" 
                        width={400} 
                        height={500} 
                        style={{width: '100%', height: 'auto', borderRadius: '8px', objectFit: 'cover'}} 
                      />
                   </div>
                </div>

                {/* 2. النص (تحت الصور) */}
                <SectionHeading 
                  align="left"
                  subtitle="Om Dala Taxi Borlänge"
                  title="Trygg & Pålitlig Transport i Hela Dalarna"
                  description="Vi är mer än bara en taxi i Borlänge; vi är din helhetslösning för persontransporter. Vårt engagemang för punktlighet, komfort säkerhet och exceptionell service har gjort oss till ett förstahandsval för både privatpersoner och företag. Med Dala Taxi Borlänge reser du alltid bekvämt och till ett konkurrenskraftigt pris."
                />
                
                <ul className="about-info wow fade-in-up" data-wow-delay="200ms">
                  <li>
                    <h2><span>Beställ Taxi</span><a href="tel:024317900">0243-179 00</a></h2>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </section>
 <LocationsSection />
        {/* Service Section */}
        <section className="service-section bg-grey padding" style={{position: 'relative'}}>
          <Image src="/assets/img/bg-1.webp" fill alt="Background" className="service-bg" style={{objectFit: 'cover', objectPosition: 'top center', zIndex: -1, width: '100%', position: 'absolute', left: 0, top: 0}} sizes="(max-width: 768px) 100vw, 1920px" />
          <div className="service-bg" style={{backgroundColor: 'rgba(2, 2, 2, 0.7)', width: '100%', position: 'absolute', left: 0, top: 0, zIndex: 0}}></div>
          <div className="container">
            <SectionHeading 
              color="white"
              subtitle="Våra Tjänster"
              title={<>Våra Mest Populära <br />Taxitjänster!</>}
              description={<>Oavsett dina behov har vi en skräddarsydd lösning.<br />Här är ett urval av våra mest efterfrågade taxitjänster.</>}
            />
            
            <div className="swiper-outside">
              <div className="service-carousel">
                <div className="swiper-wrapper">
                  {/* Service 1: Flygtaxi */}
                  <div className="swiper-slide">
                    <div className="service-item wow fade-in-bottom" data-wow-delay="200ms">
                      <div className="service-thumb">
                        <Image src="/assets/img/service-2.webp" alt="Flygtaxi" width={300} height={200} sizes="(max-width: 768px) 100vw, 388px" style={{objectFit: 'cover', width: '100%', height: 'auto'}} />
                        <div className="service-shape-wrap"><div className="service-shape"></div></div>
                        <div className="service-car"><Image src="/assets/img/car-1.webp" alt="car" width={700} height={439} sizes="(max-width: 768px) 100vw, 230px" style={{objectFit: 'cover', width: '100%', height: 'auto'}} /></div>
                      </div>
                      <div className="service-content">
                        <h3><Link href="/flygtaxi/">Flygtaxi (Arlanda & Dala)</Link></h3>
                        <p>Starta taxiresan i Borlänge bekymmersfritt. Vi erbjuder punktliga transporter till och från regionens flygplatser till fasta priser.</p>
                        <Link className="read-more" href="/flygtaxi/">Läs mer om Flygtaxi</Link>
                      </div>
                    </div>
                  </div>

                  {/* Service 2: Tågtaxi */}
                  <div className="swiper-slide">
                    <div className="service-item wow fade-in-bottom" data-wow-delay="400ms">
                      <div className="service-thumb">
                        <Image src="/assets/img/service-1.webp" alt="Tågtaxi" width={600} height={400} sizes="(max-width: 768px) 100vw, 388px" style={{objectFit: 'cover', width: '100%', height: 'auto'}} />
                        <div className="service-shape-wrap"><div className="service-shape"></div></div>
                        <div className="service-car"><Image src="/assets/img/car-1.webp" alt="car" width={700} height={439} sizes="(max-width: 768px) 100vw, 230px" style={{objectFit: 'cover', width: '100%', height: 'auto'}} /></div>
                      </div>
                      <div className="service-content">
                        <h3><Link href="/vara-tjanster/tagtaxi/">Tågtaxi Borlänge</Link></h3>
                        <p>Säkerställ dig att du hinner med ditt tåg. Vi kör dig med taxi direkt till Borlänge resecentrum eller tåget med god marginal.</p>
                        <Link className="read-more" href="/vara-tjanster/tagtaxi/">Läs mer om Tågtaxi</Link>
                      </div>
                    </div>
                  </div>

                  {/* Service 3: Storbil */}
                  <div className="swiper-slide">
                    <div className="service-item wow fade-in-bottom" data-wow-delay="600ms">
                      <div className="service-thumb">
                        <Image src="/assets/img/service-3.webp" alt="Storbil" width={600} height={400} sizes="(max-width: 768px) 100vw, 388px" style={{objectFit: 'cover', width: '100%', height: 'auto'}} />
                        <div className="service-shape-wrap"><div className="service-shape"></div></div>
                        <div className="service-car"><Image src="/assets/img/car-1.webp" alt="car" width={700} height={439} sizes="(max-width: 768px) 100vw, 230px" style={{objectFit: 'cover', width: '100%', height: 'auto'}} /></div>
                      </div>
                      <div className="service-content">
                        <h3><Link href="/vara-tjanster/storbil-gruppresor/">Storbil för Grupper</Link></h3>
                        <p>Reser ni i ett större sällskap? Boka en av våra rymliga bilar med plats för upp till 8 passagerare och bagage.</p>
                        <Link className="read-more" href="/vara-tjanster/storbil-gruppresor/">Boka Storbil här</Link>
                      </div>
                    </div>
                  </div>

                {/* Service: Seniortaxa */}
                  <div className="swiper-slide">
                    <div className="service-item wow fade-in-bottom" data-wow-delay="500ms">
                      <div className="service-thumb">
                        <Image src="/assets/img/service-1.webp" alt="Seniortaxa" width={600} height={400} sizes="(max-width: 768px) 100vw, 388px" style={{objectFit: 'cover', width: '100%', height: 'auto'}} />
                        <div className="service-shape-wrap"><div className="service-shape"></div></div>
                        <div className="service-car"><Image src="/assets/img/car-1.webp" alt="car" width={700} height={439} sizes="(max-width: 768px) 100vw, 230px" style={{objectFit: 'cover', width: '100%', height: 'auto'}} /></div>
                      </div>
                      <div className="service-content">
                        <h3><Link href="/vara-tjanster/seniortaxa">Seniortaxa (65+)</Link></h3>
                        <p>Är du 65 år eller äldre? Vi erbjuder 20% rabatt på alla resor inom Borlänge.</p>
                        <Link className="read-more" href="/vara-tjanster/seniortaxa">Läs mer</Link>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="swiper-pagination"></div>
              </div>
              <div className="swiper-nav swiper-next"><i className="las la-long-arrow-alt-right"></i></div>
              <div className="swiper-nav swiper-prev"><i className="las la-long-arrow-alt-left"></i></div>
            </div>
          </div>
        </section>

 

        {/* Pricing Section */}
        <section className="pricing-section bg-grey bd-bottom padding">
          <div className="container">
            <SectionHeading 
              subtitle="Priser"
              title="Fasta Priser till Populära Destinationer!"
              description="Res smart och ekonomiskt från Borlänge till några av regionens viktigaste platser."
            />
            
            <ul className="nav pricing-tab-menu" id="pricing-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="hybrid-taxi" data-bs-toggle="tab" data-bs-target="#hybrid-taxi-content" type="button" role="tab">Falun</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="town-taxt" data-bs-toggle="tab" data-bs-target="#town-taxi-content" type="button" role="tab">Romme Alpin</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="limousine-taxi" data-bs-toggle="tab" data-bs-target="#limousine-taxi-content" type="button" role="tab">Övrigt</button>
              </li>
            </ul>
            
            <div className="tab-content" id="pricing-tab-content">
              {/* Tab 1: Falun */}
              <div className="tab-pane fade show active" id="hybrid-taxi-content" role="tabpanel">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 sm-padding">
                    <div className="pricing-item">
                      <div className="pricing-head-wrap">
                        <div className="pricing-car">
                          <Image src="/assets/img/pricing-car.webp" alt="car" width={200} height={150} sizes="(max-width: 768px) 100vw, 200px" />
                          <div className="price">599 SEK</div>
                        </div>
                      </div>
                      <div className="pricing-head">
                        <h3><Link href="/taxi-dalarna/borlange-falun/">Borlänge till Falun</Link></h3>
                        <span className="location">Fast Pris</span>
                      </div>
                      <ul className="pricing-list">
                        <li>Vi erbjuder ett oslagbart fast pris för resor mellan Borlänge och Falun centrum.</li>
                        <li>Snabbt, smidigt och prisvärt.</li>
                        <li><Link href="/taxi-dalarna/borlange-falun/" className="default-btn">Boka resa till Falun</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tab 2: Romme Alpin */}
              <div className="tab-pane fade" id="town-taxi-content" role="tabpanel">
                 <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 sm-padding">
                        <div className="pricing-item">
                            <div className="pricing-head-wrap">
                                <div className="pricing-car">
                                    <Image src="/assets/img/pricing-car.webp" alt="car" width={200} height={150} sizes="(max-width: 768px) 100vw, 200px" />
                                    <div className="price">440 SEK</div>
                                </div>
                            </div>
                            <div className="pricing-head">
                                <h3><Link href="/taxi-dalarna/romme-alpin/">Borlänge till Romme Alpin</Link></h3>
                                <span className="location">Fast Pris</span>
                            </div>
                            <ul className="pricing-list">
                                <li>Låt oss ta hand om transporten till och från Romme Alpin.</li>
                                <li>Vi har plats för både dig och din utrustning.</li>
                                <li><Link href="/taxi-dalarna/romme-alpin/" className="default-btn">Boka till Romme Alpin</Link></li>
                            </ul>
                        </div>
                    </div>
                 </div>
              </div>

              {/* Tab 3: Other */}
              <div className="tab-pane fade" id="limousine-taxi-content" role="tabpanel">
                 <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 sm-padding">
                        <div className="pricing-item">
                            <div className="pricing-head-wrap">
                                <div className="pricing-car">
                                    <Image src="/assets/img/pricing-car.webp" alt="car" width={200} height={150} sizes="(max-width: 768px) 100vw, 200px" />
                                    <div className="price">Ring Oss</div>
                                </div>
                            </div>
                            <div className="pricing-head">
                                <h3><Link href="/taxi-dalarna/">Fler Destinationer</Link></h3>
                                <span className="location">Dalarna</span>
                            </div>
                            <ul className="pricing-list">
                                <li>Utforska fler destinationer i Dalarna med oss.</li>
                                <li>Alltid fasta och konkurrenskraftiga priser.</li>
                                <li><Link href="/taxi-dalarna/" className="default-btn">Se alla destinationer</Link></li>
                            </ul>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section className="download-section bd-bottom padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section-heading wow fade-in-left" data-wow-delay="200ms">
                   <span className="section-subtitle"><span></span>Mobilapp</span>
                  <h2>Ladda ner vår app och börja din resa!</h2>
                  <p>Vi erbjuder trygghet, komfort och fasta priser direkt i mobilen.</p>
                  <ul className="app-feature">
                    <li>
                      <i><img className="feature-icon" src="/assets/img/icon-navigator.svg" alt="icon" width="50" height="50" /></i>
                      <h3>Enkelt att söka <br /> Taxi!</h3>
                    </li>
                    <li>
                      <i><img className="feature-icon" src="/assets/img/icon-clock.svg" alt="icon" width="50" height="50"/></i>
                      <h3>Snabb upphämtning <br /> Spara tid!</h3>
                    </li>
                    <li>
                      <i><img className="feature-icon" src="/assets/img/icon-docs.svg" alt="icon" width="50" height="50" /></i>
                      <h3>Inkluderade priser <br /> Njut av resan!</h3>
                    </li>
                  </ul>
                  <div className="download-btn">
                    <a href="https://play.google.com/store/apps/details?id=org.dala.taxi.borlange&pcampaignid=web_share"><img src="/assets/img/google-play.svg" alt="PlayStore" /></a>
                    <a href="https://apps.apple.com/us/app/dala-taxi-borlange/id6504778881"><img src="/assets/img/app-store.svg" alt="AppStore" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <div className="taxi-holder">
                  <Image src="/assets/img/taxi-background.webp" fill alt="Taxi Background" style={{objectFit: 'contain', objectPosition: 'center right', zIndex: -1}} sizes="(max-width: 768px) 100vw, 1000px" />
                  <div className="taxi wow fade-in-left" data-wow-delay="300ms"><Image src="/assets/img/taxi.webp" fill alt="Taxi" style={{objectFit: 'contain', objectPosition: 'center right'}} sizes="(max-width: 768px) 100vw, 650px" /></div>
                  <div className="mockup wow fade-in-bottom" data-wow-delay="400ms"><Image src="/assets/img/mockup.webp" fill alt="Mockup" style={{objectFit: 'contain', objectPosition: 'center right'}} sizes="(max-width: 768px) 100vw, 350px" /></div>
                  <div className="charecter wow fade-in-right" data-wow-delay="500ms"><Image src="/assets/img/charecter.webp" fill alt="Character" style={{objectFit: 'contain', objectPosition: 'center right'}} sizes="(max-width: 768px) 100vw, 180px" /></div>
                  <Image className="location-marker" src="/assets/img/location-marker.webp" alt="location" width={50} height={50} sizes="(max-width: 768px) 50px, 50px" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="testimonial-section bg-grey">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <SectionHeading 
                  align="left"
                  color='white'
                  subtitle="Omdömen"
                  title="Vad Våra Kunder Säger"
                  description="Se vad våra resenärer tycker om oss via Google Reviews."
                />
                <ElfsightWidget />
              </div>

              <div className="col-lg-6">
                <div className="feature-wrap">
                  <SectionHeading 
                    align="left"
                    color="white"
                    subtitle="Varför Våra Kunder Väljer Oss"
                    title="Dala Taxi Borlänge"
                    description="Vi sätter alltid din säkerhet och komfort främst."
                  />
                  <ul className="ridek-features">
                    <li className="wow fade-in-right" data-wow-delay="300ms">
                      <div className="feature-icon"><i className="las la-tags"></i></div>
                      <div className="feature-content"><h3>Alltid Fast Pris</h3><p>Begär ett fast pris innan resan och slipp oväntade kostnader. Full transparens.</p></div>
                    </li>
                    <li className="wow fade-in-right" data-wow-delay="400ms">
                      <div className="feature-icon"><i className="las la-clock"></i></div>
                      <div className="feature-content"><h3>Tillgängliga 24/7</h3><p>Vår service är tillgänglig dygnet runt, alla dagar i veckan.</p></div>
                    </li>
                    <li className="wow fade-in-right" data-wow-delay="500ms">
                      <div className="feature-icon"><i className="las la-user-tie"></i></div>
                      <div className="feature-content"><h3>Professionella Förare</h3><p>Erfarna förare med utmärkt lokalkännedom.</p></div>
                    </li>
                    <li className="wow fade-in-right" data-wow-delay="600ms">
                      <div className="feature-icon"><i className="las la-credit-card"></i></div>
                      <div className="feature-content"><h3>Flexibla Betalningssätt</h3><p>Vi accepterar Swish, kort, kontant och erbjuder faktura.</p></div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
<LocalAreasSection />
        {/* CTA Section - تم استبدالها بالمكون */}
        <CtaSection />

        {/* FAQ Section */}
        <section className="blog-section bg-grey padding">
          <div className="container">
            <SectionHeading 
              subtitle="FAQ"
              title="Vanliga Frågor"
              description="Här hittar du svar på de vanligaste frågorna om våra tjänster."
            />
            <div className="row justify-content-center">
              <div className="col-lg-8">
                {/* تم استبدال القائمة الطويلة بالمكون */}
                <HomeFaq />
              </div>
            </div>
          </div>
        </section>
         <HomeInteractive /> 
      </main>
      <Footer />
    </>
  );
}