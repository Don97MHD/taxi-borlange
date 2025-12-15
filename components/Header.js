'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();
  
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSideboxOpen, setIsSideboxOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isSearchOpen) {
      document.body.classList.add('open-search-box');
    } else {
      document.body.classList.remove('open-search-box');
    }
  }, [isSearchOpen]);

  useEffect(() => {
    if (isSideboxOpen) {
      document.body.classList.add('open-sidebox');
    } else {
      document.body.classList.remove('open-sidebox');
    }
  }, [isSideboxOpen]);

  useEffect(() => {
    setIsSearchOpen(false);
    setIsSideboxOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="main-header">
        {/* --- Top Header --- */}
        <div className="top-header">
          <div className="container">
            <div className="top-header-wrap">
              <div className="top-left">
                <p>Din pålitliga taxi i Borlänge – Öppet dygnet runt!</p>
              </div>
              <div className="top-right">
                <ul className="top-header-nav">
                  <li><Link href="/information/anvandarvillkor">Villkor</Link></li>
                  <li><Link href="/information/integritetspolicy">Policy</Link></li>
                  <li><Link href="/faqs">FAQ</Link></li>
                </ul>
                <ul className="header-social-share">
                  <li><a href="https://www.facebook.com/dalataxiborlange/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="https://x.com/tborlange/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="https://www.instagram.com/taxi17070.se/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* --- Mid Header --- */}
        <div className="mid-header">
          <div className="container">
            <div className="mid-header-wrap">
              <div className="site-logo">
                <Link href="/">
                  <Image src="/assets/img/logo-dark.webp" alt="Dala Taxi Borlänge Logo" width={389} height={179}/>
                </Link>
              </div>
              <ul className="header-info">
                {/* 1. Phone */}
                <li>
                  <div className="header-info-icon">
                    <i className="las la-phone-volume"></i>
                  </div>
                  <div className="header-info-text">
                    <div className="contact-title">
                      <span>Ring Oss Dygnet Runt</span>
                      <a href="tel:024317900">0243-179 00</a>
                    </div>
                  </div>
                </li>

                {/* 2. Email */}
                <li>
                  <div className="header-info-icon">
                    <i className="las la-envelope-open"></i>
                  </div>
                  <div className="header-info-text">
                    <div className="contact-title">
                      <span>Mejla Oss</span>
                      <a href="mailto:Taxi17900@Gmail.Com">Taxi17900@Gmail.Com</a>
                    </div>
                  </div>
                </li>

                {/* 3. Address */}
                <li className="d-none d-xl-flex"> 
                  <div className="header-info-icon">
                    <i className="las la-map-marker"></i> 
                  </div>
                  <div className="header-info-text">
                    <div className="contact-title">
                      <span>Hitta Till Oss</span>
                      <div className="address-text">Järvstigen 1, Borlänge</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- Nav Menu --- */}
        <div className="nav-menu-wrapper">
          <div className="container">
            <div className="nav-menu-inner">
              <div className="site-logo">
                <Link href="/">
                  <Image src="/assets/img/logo-dark.webp" alt="Logo" width={194} height={70}/>
                </Link>
              </div>
              
              <div className="header-menu-wrap" style={{ display: isMobileMenuOpen ? 'block' : '' }}>
                <ul className="nav-menu">
                  <li className={pathname === '/' ? 'active' : ''}>
                    <Link href="/">Hem</Link>
                  </li>
                  <li className={pathname === '/om-oss' ? 'active' : ''}>
                    <Link href="/om-oss">Om Oss</Link>
                  </li>
                  <li className={pathname.startsWith('/vara-tjanster') ? 'active' : ''}>
                    <Link href="/vara-tjanster">Tjänster</Link>
                    <ul>
                        <li><Link href="/flygtaxi">Flygtaxi</Link></li>
                        <li><Link href="/vara-tjanster/tagtaxi">Tågtaxi</Link></li>
                        <li><Link href="/vara-tjanster/storbil-gruppresor">Storbil & Grupp</Link></li>
                        <li><Link href="/bud-paket">Bud & Paket</Link></li>
                        <li><Link href="/taxi-med-barnstol">Barnstol</Link></li>
                    </ul>
                  </li>
                  <li className={pathname.startsWith('/priser') ? 'active' : ''}>
                    <Link href="/priser">Priser</Link>
                  </li>
                   <li className={pathname.startsWith('/information') || pathname === '/bli-foretagskund' ? 'active' : ''}>
                    <Link href="#">Info</Link>
                    <ul>
                        <li><Link href="/bli-foretagskund">Företagskund</Link></li>
                        <li><Link href="/taxi-dalarna">Destinationer</Link></li>
                        <li><Link href="/faqs">Vanliga Frågor</Link></li>
                    </ul>
                  </li>
                  
                  <li className={pathname === '/kontakt' ? 'active' : ''}>
                    <Link href="/kontakt">Kontakt</Link>
                  </li>
                </ul>
              </div>

              <div className="menu-right-item">
                <div className="search-icon dl-search-icon" onClick={() => setIsSearchOpen(true)}>
                  <i className="las la-search"></i>
                </div>
                <div className="sidebox-icon dl-sidebox-icon" onClick={() => setIsSideboxOpen(true)}>
                  <i className="las la-bars"></i>
                </div>
                <Link href="/book-taxi" className="menu-btn">Boka Taxi</Link>
              </div>

              <div className="mobile-menu-icon">
                <div 
                  className={`burger-menu ${isMobileMenuOpen ? 'menu-open' : ''}`} 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <div className="line-menu line-half first-line"></div>
                  <div className="line-menu"></div>
                  <div className="line-menu line-half last-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- Popups code remains same ... --- */}
      <div id="popup-search-box" className={isSearchOpen ? 'toggled' : ''}>
        <div className="box-inner-wrap d-flex align-items-center">
          <form id="form" action="#" method="get" role="search">
            <input id="popup-search" type="text" name="s" placeholder="Sök här..." />
            <button id="popup-search-button" type="submit" name="submit">
              <i className="las la-search"></i>
            </button>
          </form>
          <div className="search-close" onClick={() => setIsSearchOpen(false)}>
            <i className="las la-times"></i>
          </div>
        </div>
      </div>
      <div 
        id="searchbox-overlay" 
        onClick={() => setIsSearchOpen(false)}
        style={{ opacity: isSearchOpen ? 1 : 0, visibility: isSearchOpen ? 'visible' : 'hidden' }}
      ></div>

      <div id="popup-sidebox" className={`popup-sidebox ${isSideboxOpen ? 'show' : ''}`}>
        <div className="sidebox-content">
          <div className="site-logo">
            <Link href="/">
              <Image src="/assets/img/logo-light.webp" alt="logo" width={194} height={90}/>
            </Link>
          </div>
          <p>Dala Taxi Borlänge levererar pålitlig och säker taxiservice i Borlänge, Dalarna. Öppet dygnet runt alla dagar i veckan.</p>
          <ul className="sidebox-list">
            <li className="call"><span>Ring oss:</span>0243-179 00</li>
            <li>
              <span>Adress:</span>Järvstigen 1, 784 50 Borlänge
            </li>
            <li><span>E-post:</span>taxi17900@gmail.com</li>
          </ul>
          <div className="sidebox-social">
            <ul className="header-social-share" style={{justifyContent: 'flex-start', padding: 0, marginTop: '20px'}}>
                  <li><a href="https://www.facebook.com/dalataxiborlange/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="https://x.com/tborlange/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="https://www.instagram.com/taxi17070.se/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div 
        id="sidebox-overlay" 
        onClick={() => setIsSideboxOpen(false)}
        style={{ display: isSideboxOpen ? 'block' : 'none' }}
      ></div>
    </>
  );
}