import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-top-wrap bg-grey">
        <div className="container">
          <div className="footer-top">
            <div className="row align-items-end">
              <div className="col-lg-8">
                <div className="brand">
                  <Link className="footer-logo" href="/">
                    <img src="/assets/img/logo-light.webp" alt="Dala Taxi Borlänge" />
                  </Link>
                  <p>Dala Taxi Borlänge levererar pålitlig och säker taxiservice i Borlänge, Dalarna. Vi finns här för dig dygnet runt.</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="footer-call">
                  <i className="las la-phone-volume"></i>
                  <p><span>Ring och Boka</span><a href="tel:024317900">0243-179 00</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-mid-wrap">
        <div className="container">
          <div className="row">
            {/* Column 1: Working Hours */}
            <div className="col-lg-3 col-md-6 sm-padding">
              <div className="footer-item">
                <div className="widget-title">
                  <h3>Öppettider</h3>
                </div>
                <ul className="footer-contact">
                  <li><span>Alla dagar:</span> Öppet dygnet runt</li>
                  <li><span>Telefon:</span> 24/7 Support</li>
                </ul>
              </div>
            </div>

            {/* Column 2: Useful Links */}
            <div className="col-lg-3 col-md-6 sm-padding">
              <div className="footer-item footer-list">
                <div className="widget-title">
                  <h3>Snabblänkar</h3>
                </div>
                <ul className="footer-links">
                  <li><Link href="/book-taxi">Boka Taxi Online</Link></li>
                  <li><Link href="/priser">Våra Priser</Link></li>
                  <li><Link href="/information/integritetspolicy">Integritetspolicy</Link></li>
                  <li><Link href="/information/anvandarvillkor">Användarvillkor</Link></li>
                  <li><Link href="/faqs">Vanliga Frågor</Link></li>
                </ul>
              </div>
            </div>

            {/* Column 3: Contact Info */}
            <div className="col-lg-3 col-md-6 sm-padding">
              <div className="footer-item">
                <div className="widget-title">
                  <h3>Kontakt</h3>
                </div>
                <ul className="footer-contact">
                  <li><span>Adress:</span> Järvstigen 1, 784 50 Borlänge</li>
                  <li><span>E-post:</span> <a href="mailto:taxi17900@gmail.com">taxi17900@gmail.com</a></li>
                  <li><span>Tel:</span> <a href="tel:024317900">0243-179 00</a></li>
                </ul>
              </div>
            </div>

            {/* Column 4: Social Media (Instead of Newsletter) */}
            <div className="col-lg-3 col-md-6 sm-padding">
              <div className="footer-item subscribe-wrap">
                <div className="widget-title">
                  <h3>Följ Oss</h3>
                </div>
                <p style={{marginBottom: '15px', color: '#ccc'}}>Följ oss på sociala medier för nyheter och uppdateringar.</p>
                
                {/* Social Icons Style */}
                <ul className="header-social-share" style={{display: 'flex', gap: '10px', padding: 0}}>
                  <li style={{listStyle: 'none'}}>
                    <a href="https://www.facebook.com/dalataxiborlange/" target="_blank" rel="noopener noreferrer" style={{width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#3b5998', color: '#fff', borderRadius: '50%'}}>
                        <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li style={{listStyle: 'none'}}>
                    <a href="https://x.com/tborlange/" target="_blank" rel="noopener noreferrer" style={{width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#000', color: '#fff', borderRadius: '50%'}}>
                        <i className="fab fa-twitter"></i> {/* Or fa-x-twitter if available in your fontawesome */}
                    </a>
                  </li>
                  <li style={{listStyle: 'none'}}>
                    <a href="https://www.instagram.com/taxi17070.se/" target="_blank" rel="noopener noreferrer" style={{width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#E1306C', color: '#fff', borderRadius: '50%'}}>
                        <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        
        {/* Animated Taxi */}
        <div className="running-taxi">
          <div className="taxi"></div>
          <div className="taxi-2"></div>
          <div className="taxi-3"></div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="copyright-wrap">
        <div className="container">
          <p>© {new Date().getFullYear()} Dala Taxi Borlänge. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
}