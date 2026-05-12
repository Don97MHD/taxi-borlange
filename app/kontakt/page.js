import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import BookingForm from '@/components/BookingForm'; 
import Link from 'next/link';

export const metadata = {
  title: 'Kontakta & Boka Dala Taxi Borlänge | Ring Oss 24/7',
  description: 'Här hittar du kontaktuppgifter till Dala Taxi Borlänge. Ring oss dygnet runt för att boka din taxi eller om du har frågor. Vi finns på Ovanbrogatan 2 i Borlänge.',
  alternates: {
    canonical: '/kontakt/',
  },
}

export default function Contact() {
  return (
    <>
      <Header />
      <PageHeader title="Kontakta Oss" subtitle="Vi Finns Här för Dig!" />

      <section className="contact-section padding bg-grey">
        <div className="container">
          <div className="row align-items-center">
            
            {/* اليسار: معلومات الاتصال والنصوص */}
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="contact-details-wrap pe-lg-4">
                
                <div className="section-heading text-left mb-40">
                  <div className="section-subtitle"><span></span>Dygnet Runt</div>
                  <h2>Vi Finns Här för Dig</h2>
                  <p>
                    Vi på Dala Taxi Borlänge gör det enkelt för dig att boka din resa eller få svar på dina frågor. 
                    Oavsett om du föredrar att ringa, boka online eller har en specifik förfrågan, hittar du all information du behöver här.
                  </p>
                </div>

                {/* زر الاتصال الضخم */}
                <div className="mb-5">
                    <a href="tel:024317900" className="default-btn" style={{height: '60px', padding: '0 40px', fontSize: '20px'}}>
                        <i className="las la-phone-volume me-3" style={{fontSize: '26px'}}></i> Ring och Boka: 0243-179 00
                    </a>
                </div>

                {/* تفاصيل الاتصال (تصميم حديث للأيقونات) */}
                <div className="modern-contact-info mb-5">
                  <div className="contact-item d-flex align-items-center mb-4">
                    <div className="icon-wrapper me-4" style={{width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255, 123, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <i className="las la-map-marker" style={{fontSize: '30px', color: '#ff7b00'}}></i>
                    </div>
                    <div>
                      <h4 className="mb-1" style={{fontSize: '18px', fontWeight: '700'}}>Besöksadress</h4>
                      <p className="mb-0" style={{color: '#555'}}>Ovanbrogatan 2, 784 33 Borlänge</p>
                    </div>
                  </div>

                  <div className="contact-item d-flex align-items-center mb-4">
                    <div className="icon-wrapper me-4" style={{width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(255, 123, 0, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <i className="las la-envelope" style={{fontSize: '30px', color: '#ff7b00'}}></i>
                    </div>
                    <div>
                      <h4 className="mb-1" style={{fontSize: '18px', fontWeight: '700'}}>E-postadress</h4>
                      <p className="mb-0"><a href="mailto:taxi17900@gmail.com" style={{color: '#555'}}>taxi17900@gmail.com</a></p>
                    </div>
                  </div>
                </div>

                {/* روابط مفيدة */}
                <div className="modern-links-box p-4" style={{background: '#fff', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 10px 30px rgba(0,0,0,0.03)'}}>
                    <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '20px'}}>Snabblänkar</h3>
                    <div className="d-flex flex-wrap gap-3">
                        <Link href="/priser" className="boka-link" style={{background: 'rgba(255,123,0,0.05)', padding: '8px 20px', borderRadius: '30px', color: '#444', fontWeight: '600', fontSize: '14px', transition: 'all 0.3s ease'}}>Prisinformation</Link>
                        <Link href="/taxi-med-barnstol" className="boka-link" style={{background: 'rgba(255,123,0,0.05)', padding: '8px 20px', borderRadius: '30px', color: '#444', fontWeight: '600', fontSize: '14px', transition: 'all 0.3s ease'}}>Resa med barnstol</Link>
                        <Link href="/bli-foretagskund" className="boka-link" style={{background: 'rgba(255,123,0,0.05)', padding: '8px 20px', borderRadius: '30px', color: '#444', fontWeight: '600', fontSize: '14px', transition: 'all 0.3s ease'}}>Bli Företagskund</Link>
                    </div>
                </div>

              </div>
            </div>

            {/* اليمين: نموذج الحجز */}
            <div className="col-lg-6">
               {/* وضعنا الفورم داخل حاوية للتحكم بشكله في هذه الصفحة بالتحديد */}
               <div className="contact-form-wrapper shadow-lg" style={{borderRadius: '24px', overflow: 'hidden'}}>
                 <BookingForm />
               </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <div className="google-map" style={{ width: '100%', height: '500px', display: 'block' }}>
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
      <Footer />
    </>
  );
}