import Link from 'next/link';

export default function LocalAreasSection() {
  const areas = [
    "Backgården", "Baggbo", "Bullermyren", "Centrum", "Dalsjö",
    "Duvnäs", "Fagerbacken", "Gagnbro", "Gimsbärke", "Grevbo",
    "Murbo", "Hinsbo", "Hyttingsheden", "Järpbo", "Kyna",
    "Lennheden", "Länsbodarna", "Norr Amsberg", "Ornäs",
    "Repbäcken", "Romme", "Sifferbo", "Skärsjö", "Spraxkya",
    "Strandbro", "Tomnäs", "Kvarnsveden", "Dala Storsund",
    "Borlänge Resecentrum", "Domnarvet", "Hagalund", "Jakobsgårdarna"
  ];

  return (
    // أضفنا مسافة علوية لتجنب التداخل مع القسم الرمادي
    <section className="local-areas-section bg-white padding" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            
            <div className="section-heading mb-40 wow fade-in-bottom">
              <div className="section-subtitle"><span></span>Din Taxi i hela Borlänge</div>
              <h2>Vi hämtar dig <span>överallt</span></h2>
              <p>
                Dala Taxi Borlänge är ditt lokala taxibolag. Vi erbjuder snabb framkörning oavsett var i kommunen du befinner dig. 
                Ska du från <strong>Kvarnsveden</strong> till centrum? Eller behöver du hämtning i <strong>Ornäs</strong> för resa till tåget? 
                Vi täcker alla stadsdelar och byar runt Borlänge.
              </p>
            </div>

            <div className="areas-list">
              {areas.map((area, index) => (
                // تم نقل التصميم إلى ملف CSS
                <span key={index} className="area-badge wow fade-in-bottom" data-wow-delay={`${(index % 10) * 100}ms`}>
                  <i className="las la-map-marker"></i>
                  {area}
                </span>
              ))}
            </div>

            <div className="mt-50 mb-20 wow fade-in-bottom">
              <p style={{fontSize: '16px', fontStyle: 'italic', color: '#888'}}>
                Bor du i ett område som inte står med? Ring oss ändå – vi kör i hela Dalarna!
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}