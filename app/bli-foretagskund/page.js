import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata = {
  title: 'Bli Företagskund | Dala Taxi Borlänge',
  description: 'Bli företagskund och ring eller boka taxi i Borlänge via formuläret och få alla resor på en faktura en gång i månaden.',
}

export default function BusinessTaxi() {
  return (
    <>
      <Header />
      
      {/* 1. القسم العلوي (الداكن) - Hero Section */}
      <section className="business-hero" style={{ backgroundColor: '#111317', padding: '100px 0', borderBottom: '2px solid #ff9900' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 style={{ color: '#ffcc00', fontSize: '42px', fontWeight: 'bold', marginBottom: '25px' }}>
                Bli Företagskund
              </h1>
              
              <div style={{ color: '#ccc', fontSize: '18px', lineHeight: '1.8' }}>
                <p>
                  Bli företagskund och ring eller boka <strong style={{color: '#ffcc00'}}>taxi i Borlänge</strong> via formuläret och få alla resor på en faktura en gång i månaden.
                </p>
                <p>
                  Genom att ansöka om att bli företagskund hos oss blir du en del av en säker och pålitlig resa, samt får du ett rabatterad pris för dig och alla dina medarbetare.
                </p>
                <p style={{ marginBottom: '30px' }}>
                  Ring oss eller ansök via formuläret nedan
                </p>
              </div>

              <a href="tel:024317900" className="default-btn" style={{ backgroundColor: '#ffcc00', color: '#111', fontWeight: 'bold', padding: '12px 30px', fontSize: '16px', borderRadius: '4px' }}>
                Ring Oss
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. قسم الفورم (الأبيض) - Elfsight Form */}
      <section className="business-form-section" style={{ backgroundColor: '#fff', padding: '80px 0' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              
              <div className="text-center mb-5">
                <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#222' }}>Ansökningsformulär</h2>
                <p style={{ color: '#666' }}>Vi ringer upp dig sedan för att bekräfta ansökan!</p>
              </div>

              {/* ---------- كود Elfsight للفورم المطلوب ---------- */}
              <div className="elfsight-app-8aa221ee-a21b-473d-ba02-254af40aa326"></div>
              <Script src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />
              {/* ------------------------------------------ */}

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}