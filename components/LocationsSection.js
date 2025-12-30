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
              <div className="location-card" style={{
                  border: '1px solid #eee', 
                  borderRadius: '5px', 
                  padding: '25px', 
                  height: '100%',
                  transition: 'all 0.3s ease',
                  backgroundColor: '#f9f9f9'
              }}>
                <h3 style={{fontSize: '20px', fontWeight: '700', marginBottom: '10px'}}>
                  <Link href={`/taxi-dalarna/${city.id}`} style={{color: '#222'}}>
                    {/* نستخدم العنوان المختصر هنا ليكون أجمل في العرض */}
                    {city.title}
                  </Link>
                </h3>
                
                {/* الوصف القصير الغني بالكلمات المفتاحية (نستخدم وصف السيو) */}
                <p style={{fontSize: '15px', color: '#666', lineHeight: '1.6', marginBottom: '15px'}}>
                  {city.seoDescription}
                </p>

                <Link href={`/taxi-dalarna/${city.id}`} style={{
                    color: '#ff9900', 
                    fontWeight: '600', 
                    fontSize: '14px', 
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                }}>
                  Boka till {city.id.replace('taxi-', '').replace('-', ' ')} <i className="las la-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* رابط للمزيد إذا أردت */}
        <div className="text-center mt-4">
            <p>Hittar du inte din ort? <Link href="/kontakt" style={{textDecoration: 'underline', color: '#222'}}>Kontakta oss</Link> för pris.</p>
        </div>

      </div>
    </section>
  );
}