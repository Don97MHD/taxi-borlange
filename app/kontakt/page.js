import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import BookingForm from '@/components/BookingForm'; // استيراد نموذج الحجز
import Link from 'next/link';

export const metadata = {
  title: 'Kontakta & Boka Dala Taxi Borlänge | Ring Oss 24/7',
  description: 'Här hittar du kontaktuppgifter till Dala Taxi Borlänge. Ring oss dygnet runt för att boka din taxi eller om du har frågor. Vi finns på Järvstigen 1 i Borlänge.',
}

export default function Contact() {
  return (
    <>
      <Header />
      <PageHeader title="Kontakta Oss" subtitle="Vi Finns Här för Dig!" />

     

      <section className="contact-section bd-bottom padding">
        <div className="container">
          <div className="row">
            
            {/* اليسار: معلومات الاتصال والنصوص */}
            <div className="col-md-6">
              <div className="contact-details-wrap">
                <div className="contact-title">
                  <h2>Vi Finns Här för Dig <span>Dygnet Runt</span></h2>
                  <p>
                    Vi på Dala Taxi Borlänge gör det enkelt för dig att boka din resa eller få svar på dina frågor. 
                    Oavsett om du föredrar att ringa, boka online eller har en specifik förfrågan, hittar du all information du behöver här. 
                    Vår växel är bemannad 24 timmar om dygnet.
                  </p>
                </div>

                {/* زر الاتصال الكبير */}
                <div className="cta-box mb-4 mt-4">
                    <h4 style={{marginBottom: '15px'}}>För Snabbast Service:</div>
                    <a href="tel:024317900" className="default-btn" style={{padding: '15px 30px', fontSize: '18px'}}>
                        <i className="las la-phone-volume"></i> Ring och Boka: 0243-179 00
                    </a>
                </div>

                {/* تفاصيل الاتصال والعنوان */}
                <ul className="contact-details">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    Dala Taxi Borlänge <br /> Järvstigen 1, 784 50 Borlänge
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    taxi17900@gmail.com <br /> (För företagsärenden)
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>
                    0243-179 00 <br /> Öppet Dygnet Runt
                  </li>
                </ul>

                {/* روابط مفيدة */}
                <div className="contact-links mt-5">
                    <h3 style={{fontSize: '20px', marginBottom: '15px'}}>Vanliga Frågor & Länkar</h3>
                    <ul style={{listStyle: 'none', padding: 0}}>
                        <li style={{marginBottom: '10px'}}>
                            <i className="las la-arrow-right" style={{color: '#ffc107', marginRight: '5px'}}></i>
                            <Link href="/priser" className="hover-link">Prisinformation</Link>
                        </li>
                        <li style={{marginBottom: '10px'}}>
                            <i className="las la-arrow-right" style={{color: '#ffc107', marginRight: '5px'}}></i>
                            <Link href="/taxi-med-barnstol" className="hover-link">Resa med barnstol</Link>
                        </li>
                        <li style={{marginBottom: '10px'}}>
                            <i className="las la-arrow-right" style={{color: '#ffc107', marginRight: '5px'}}></i>
                            <Link href="/vara-tjanster" className="hover-link">Våra tjänster i översikt</Link>
                        </li>
                        <li>
                            <i className="las la-arrow-right" style={{color: '#ffc107', marginRight: '5px'}}></i>
                            <Link href="/bli-foretagskund" className="hover-link">Bli Företagskund</Link>
                        </li>
                    </ul>
                </div>

              </div>
            </div>

            {/* اليمين: نموذج الحجز */}
            <div className="col-md-6 mt-4 mt-md-0">
               {/* استخدام مكون BookingForm الجاهز */}
               <BookingForm />
            </div>

          </div>
        </div>
      </section>
 {/* Map Section - خريطة مدمجة */}
      <div className="google-map" style={{ width: '100%', height: '450px', borderBottom: '1px solid #ddd' }}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.5!2d15.416!3d60.485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46677cb1ae005721%3A0x705296068696772!2sJ%C3%A4rvstigen%201%2C%20784%2050%20Borl%C3%A4nge%2C%20Sweden!5e0!3m2!1sen!2sse!4v1700000000000!5m2!1sen!2sse" 
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