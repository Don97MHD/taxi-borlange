import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Script from 'next/script';

export const metadata = {
  title: 'Omdömen & Recensioner | Dala Taxi Borlänge',
  description: 'Alltid punktliga och pålitliga, vilket gör resorna stressfria. Många kunder rekommenderar dem starkt för taxi-tjänster i Borlänge och Falun.',
}

export default function ReviewsPage() {
  return (
    <>
      <Header />
      
    
      <PageHeader 
        title="Omdömen & Recensioner" 
        subtitle="Vad Våra Kunder Säger" 
      />

      
      <section className="padding" style={{ backgroundColor: '#111111', position: 'relative', overflow: 'hidden' }}>
       
        <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(255,123,0,0.1) 0%, rgba(0,0,0,0) 70%)', zIndex: 0 }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              
              <div className="text-center mb-5">
                <span className="section-subtitle white mb-3" style={{ background: 'rgba(255, 123, 0, 0.15)', color: '#ff7b00', padding: '6px 20px', borderRadius: '30px', fontWeight: '700', letterSpacing: '1px', display: 'inline-block' }}>Omdömen</span>
                <h2 style={{ color: '#fff', fontSize: '40px', fontWeight: '800' }}>Varför våra kunder väljer att åka med oss</h2>
                <p style={{ color: '#aaa', fontSize: '18px' }}>Taxi med komfort & kvalitet!</p>
              </div>

              
              <div style={{
                  background: 'rgba(255,255,255,0.02)',
                  backdropFilter: 'blur(15px)',
                  WebkitBackdropFilter: 'blur(15px)',
                  padding: '15px',
                  borderRadius: '24px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.4)'
              }}>
                
                 <div className="elfsight-app-ea8ca6c2-0029-4413-a976-ccf6060e8b35" data-elfsight-app-lazy></div>
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