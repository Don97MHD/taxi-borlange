'use client';
import Script from 'next/script';

export default function BookingForm() {
  return (
    <div className="booking-form-wrapper" style={{ 
        width: '100%',
        backgroundColor: '#222',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{color: '#fff', marginBottom: '20px', textAlign: 'center'}}>Boka Online</h3>
      
      {/* 
        1. قمنا بإزالة data-elfsight-app-lazy لمنع التعارض 
      */}
      <div className="elfsight-app-8aa221ee-a21b-473d-ba02-254af40aa326"></div>
      
      {/* 
        2. غيرنا strategy من lazyOnload إلى afterInteractive ليحمل بسرعة 
      */}
      <Script src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />
    </div>
  );
}