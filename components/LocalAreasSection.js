import Link from 'next/link';

export default function LocalAreasSection() {
  // قائمة المناطق كما طلبها المنافس وأكثر
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
    <section className="local-areas-section bg-white padding-bottom" style={{paddingTop: '60px'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center">
            
            {/* عنوان سيو قوي */}
            <h3 style={{fontSize: '24px', fontWeight: '700', marginBottom: '20px', color: '#222'}}>
              Vi hämtar dig överallt – <span style={{color: '#ff9900'}}>Din Taxi i hela Borlänge</span>
            </h3>
            
            {/* نص وصفي غني بالكلمات المفتاحية */}
            <p style={{marginBottom: '30px', color: '#666'}}>
              Dala Taxi Borlänge är ditt lokala taxibolag. Vi erbjuder snabb framkörning oavsett var i kommunen du befinner dig. 
              Ska du från <strong>Kvarnsveden</strong> till centrum? Eller behöver du hämtning i <strong>Ornäs</strong> för resa till tåget? 
              Vi täcker alla stadsdelar och byar runt Borlänge.
            </p>

            {/* قائمة المناطق بتصميم أنيق */}
            <div className="areas-list" style={{
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'center', 
                gap: '10px'
            }}>
              {areas.map((area, index) => (
                <span key={index} style={{
                    backgroundColor: '#f4f5f8',
                    padding: '8px 15px',
                    borderRadius: '50px',
                    fontSize: '14px',
                    color: '#555',
                    border: '1px solid #eee',
                    fontWeight: '500'
                }}>
                  <i className="las la-map-marker" style={{color: '#ff9900', marginRight: '5px'}}></i>
                  {area}
                </span>
              ))}
            </div>

            <div style={{marginTop: '30px', fontSize: '14px', fontStyle: 'italic', color: '#999'}}>
              Bor du i ett område som inte står med? Ring oss ändå – vi kör i hela Dalarna!
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}