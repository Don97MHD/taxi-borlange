import Link from 'next/link';
import { taxiDalarnaData } from '@/data/taxiDalarnaData';

export default function LocationsSection() {
  return (
    <section className="locations-section bg-white padding">
      <div className="container">
        {/* عنوان القسم */}
        <div className="section-heading text-center mb-40">
          <div className="section-subtitle"><span></span>Hela Dalarna</div>
          <h2>Vi kör taxi till alla dessa orter</h2>
          <p>Här hittar du våra populäraste destinationer med fasta priser.<br /> Klicka på din ort för att läsa mer och boka.</p>
        </div>

        {/* شبكة المناطق */}
        <div className="row justify-content-center">
          {taxiDalarnaData.map((city) => (
            <div key={city.id} className="col-lg-4 col-md-6 mb-4">
              <div className="location-card">
                <h3>
                  <Link href={`/taxi-dalarna/${city.id}`}>
                    {city.title}
                  </Link>
                </h3>
                
                <p>
                  {city.seoDescription}
                </p>

                {/* الرابط أصبح يحمل كلاس boka-link للتصميم */}
                <Link href={`/taxi-dalarna/${city.id}`} className="boka-link">
                  Boka till {city.id.replace('taxi-', '').replace('-', ' ')} <i className="las la-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* رابط للمزيد */}
        <div className="text-center mt-4">
            <p>Hittar du inte din ort? <Link href="/kontakt" style={{textDecoration: 'underline', color: '#222', fontWeight: 'bold'}}>Kontakta oss</Link> för pris.</p>
        </div>

      </div>
    </section>
  );
}