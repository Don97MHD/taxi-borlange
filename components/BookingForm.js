'use client';
import Script from 'next/script';

export default function BookingForm() {
  return (
    <div className="booking-form-wrapper" style={{ 
        width: '100%',
        backgroundColor: '#222', // خلفية داكنة لتمييز الفورم
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
    }}>
      {/* عنوان بسيط فوق الفورم */}
      <h3 style={{color: '#fff', marginBottom: '20px', textAlign: 'center'}}>Boka Online</h3>
      
      {/* كود الفورم */}
      <div className="elfsight-app-8aa221ee-a21b-473d-ba02-254af40aa326" data-elfsight-app-lazy></div>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
    </div>
  );
}