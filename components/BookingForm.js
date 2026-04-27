'use client';
import Script from 'next/script';
import { usePathname } from 'next/navigation'; 

export default function BookingForm() {
  const pathname = usePathname();
  const isContactPage = pathname === '/kontakt';

  return (
    <div 
      className="booking-form-wrapper" 
      style={{ 
        width: '100%',
        background: isContactPage ? '#ffffff' : 'rgba(25, 25, 30, 0.55)', 
        backdropFilter: isContactPage ? 'none' : 'blur(16px)',
        WebkitBackdropFilter: isContactPage ? 'none' : 'blur(16px)',
        border: isContactPage ? '1px solid rgba(0,0,0,0.05)' : '1px solid rgba(255, 255, 255, 0.1)',
        borderTop: isContactPage ? '4px solid #ff7b00' : '1px solid rgba(255, 255, 255, 0.2)',
        padding: '35px 25px',
        borderRadius: '24px',
        boxShadow: isContactPage ? 'none' : '0 30px 60px rgba(0,0,0,0.3)',
        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
      }}
      onMouseEnter={(e) => {
        if(!isContactPage) {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 35px 65px rgba(255, 123, 0, 0.15)';
        }
      }}
      onMouseLeave={(e) => {
        if(!isContactPage) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.3)';
        }
      }}
    >
      <h3 style={{
          color: isContactPage ? '#222222' : '#ffffff', 
          marginBottom: '25px', 
          textAlign: 'center',
          fontWeight: '800',
          letterSpacing: '1px',
          textShadow: isContactPage ? 'none' : '0 2px 4px rgba(0,0,0,0.5)'
      }}>
        Boka Taxi Online
      </h3>
      
      {/* تم وضع الـ ID العام الخاص بالحجز هنا */}
      <div className="elfsight-app-8aa221ee-a21b-473d-ba02-254af40aa326" data-elfsight-app-lazy></div>
      
      <Script src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />
    </div>
  );
}