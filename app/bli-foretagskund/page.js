import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata = {
  title: 'Bli Företagskund | Dala Taxi Borlänge',
  description: 'Bli företagskund och ring eller boka taxi i Borlänge via formuläret och få alla resor på en faktura en gång i månaden.',
  alternates: {
    canonical: '/bli-foretagskund/',
  },
}

export default function BusinessTaxi() {
  return (
    <>
      <Header />
      
      {/* 1. القسم العلوي - تصميم حديث */}
      <section className="business-hero" style={{ backgroundColor: '#1a1a1c', padding: '120px 0 80px', position: 'relative', overflow: 'hidden' }}>
        {/* إضاءة خلفية */}
        <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(255,123,0,0.15) 0%, rgba(0,0,0,0) 70%)', zIndex: 0 }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row">
            <div className="col-lg-8">
              <span className="section-subtitle white mb-3" style={{ background: 'rgba(255, 123, 0, 0.15)', color: '#ff7b00', padding: '6px 20px', borderRadius: '30px', fontWeight: '700', letterSpacing: '1px', display: 'inline-block' }}>För Företag</span>
              <h1 style={{ color: '#fff', fontSize: '48px', fontWeight: '800', marginBottom: '25px' }}>
                Bli Företagskund
              </h1>
              
              <div style={{ color: '#ccc', fontSize: '18px', lineHeight: '1.8' }}>
                <p>
                  Bli företagskund och ring eller boka <strong style={{color: '#ff7b00'}}>taxi i Borlänge</strong> via formuläret och få alla resor på en faktura en gång i månaden.
                </p>
                <p>
                  Genom att ansöka om att bli företagskund hos oss blir du en del av en säker och pålitlig resa, samt får du ett rabatterad pris för dig och alla dina medarbetare.
                </p>
                <p className="mb-5">
                  Ring oss eller ansök via formuläret nedan.
                </p>
              </div>

              <a href="tel:024317900" className="default-btn" style={{ fontSize: '18px', padding: '0 40px', height: '55px' }}>
                <i className="las la-phone-volume me-2" style={{fontSize: '24px'}}></i> Ring Oss: 0243-179 00
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. قسم الفورم - تم دمج فورم الشركات هنا */}
      <section className="business-form-section bg-grey padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              
              <div className="text-center mb-5">
                <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#222' }}>Ansökningsformulär</h2>
                <p style={{ color: '#666', fontSize: '18px' }}>Vi ringer upp dig sedan för att bekräfta ansökan!</p>
              </div>

              {/* فورم Elfsight الخاص بالشركات */}
              <div style={{
                  background: '#fff',
                  padding: '20px',
                  borderRadius: '24px',
                  border: '1px solid rgba(0,0,0,0.05)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
              }}>
                 {/* تم وضع الـ ID الخاص بالشركات هنا */}
                 <div className="elfsight-app-260245e3-9291-4ac8-8dfa-dbc48bce2ba1" data-elfsight-app-lazy></div>
                 <Script src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}