'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { taxiDalarnaData } from '@/data/taxiDalarnaData'; 

export default function Header() {
  const pathname = usePathname();
  
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSideboxOpen, setIsSideboxOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // حالة جديدة: لتخزين اسم القائمة المفتوحة في الموبايل (مثلاً: 'services', 'dalarna', 'info')
  const [openSubMenu, setOpenSubMenu] = useState('');

  // دالة لتبديل حالة القائمة الفرعية (فتح/إغلاق)
  const toggleSubMenu = (menuName) => {
    if (openSubMenu === menuName) {
      setOpenSubMenu(''); // إغلاق إذا كانت مفتوحة
    } else {
      setOpenSubMenu(menuName); // فتح القائمة الجديدة
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) setIsSticky(true);
      else setIsSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen) document.body.classList.add('open-search-box');
    else document.body.classList.remove('open-search-box');
  }, [isSearchOpen]);

  useEffect(() => {
    if (isSideboxOpen) document.body.classList.add('open-sidebox');
    else document.body.classList.remove('open-sidebox');
  }, [isSideboxOpen]);

  // إغلاق جميع القوائم عند الانتقال لصفحة جديدة
  useEffect(() => {
    setIsSearchOpen(false);
    setIsSideboxOpen(false);
    setIsMobileMenuOpen(false);
    setOpenSubMenu(''); // إعادة تعيين القوائم الفرعية
  }, [pathname]);

  // --- مكون القائمة الموحد (NavMenu) ---
  const NavMenu = () => (
    <ul className="nav-menu">
      
      {/* 1. Hem */}
      <li className={pathname === '/' ? 'active' : ''}>
        <Link href="/">Hem</Link>
      </li>

      {/* 2. Om Oss */}
      <li className={pathname === '/om-oss' ? 'active' : ''}>
        <Link href="/om-oss">Om Oss</Link>
      </li>
      
      {/* 3. Tjänster (مع زر الموبايل) */}
      <li className={`dropdown_menu ${pathname.startsWith('/vara-tjanster') ? 'active' : ''}`}>
        <Link href="/vara-tjanster">Tjänster</Link>
        {/* زر الزائد (+) يظهر فقط في الموبايل عبر CSS ويتحكم به React */}
        <span 
            className={`dropdown-plus ${openSubMenu === 'services' ? 'dropdown-open' : ''}`}
            onClick={(e) => { e.preventDefault(); toggleSubMenu('services'); }}
        ></span>
        <ul style={{ display: openSubMenu === 'services' ? 'block' : undefined }}>
            <li><Link href="/flygtaxi">Flygtaxi</Link></li>
            <li><Link href="/vara-tjanster/tagtaxi">Tågtaxi</Link></li>
            <li><Link href="/vara-tjanster/seniortaxa">Seniortaxa (65+)</Link></li>
            <li><Link href="/vara-tjanster/storbil-gruppresor">Storbil & Grupp</Link></li>
            <li><Link href="/bud-paket">Bud & Paket</Link></li>
            <li><Link href="/taxi-med-barnstol">Barnstol</Link></li>
        </ul>
      </li>

      {/* 4. Taxi Dalarna (مع زر الموبايل والقائمة المنسدلة) */}
      <li className={`dropdown_menu ${pathname.startsWith('/taxi-dalarna') ? 'active' : ''}`}>
        <Link href="/taxi-dalarna">Taxi Dalarna</Link>
        <span 
            className={`dropdown-plus ${openSubMenu === 'dalarna' ? 'dropdown-open' : ''}`}
            onClick={(e) => { e.preventDefault(); toggleSubMenu('dalarna'); }}
        ></span>
        <ul style={{ minWidth: '240px', display: openSubMenu === 'dalarna' ? 'block' : undefined }}>
            {taxiDalarnaData.map((item) => (
                <li key={item.id}>
                    <Link href={`/taxi-dalarna/${item.id}`}>
                      {item.title.split(' 440')[0].split(' 599')[0].split(' 1299')[0].split(' 1599')[0].split(' 1699')[0].split(' 699')[0]}
                    </Link>
                </li>
            ))}
        </ul>
      </li>

      {/* 5. Priser */}
      <li className={pathname.startsWith('/priser') ? 'active' : ''}>
        <Link href="/priser">Priser</Link>
      </li>

      {/* 6. Info (مع زر الموبايل) */}
       <li className={`dropdown_menu ${pathname.startsWith('/information') || pathname === '/bli-foretagskund' ? 'active' : ''}`}>
        <Link href="#">Info</Link>
        <span 
            className={`dropdown-plus ${openSubMenu === 'info' ? 'dropdown-open' : ''}`}
            onClick={(e) => { e.preventDefault(); toggleSubMenu('info'); }}
        ></span>
        <ul style={{ display: openSubMenu === 'info' ? 'block' : undefined }}>
            <li><Link href="/bli-foretagskund">Företagskund</Link></li>
            <li><Link href="/faqs">Vanliga Frågor</Link></li>
        </ul>
      </li>
      
      {/* 7. Kontakt */}
      <li className={pathname === '/kontakt' ? 'active' : ''}>
        <Link href="/kontakt">Kontakt</Link>
      </li>
    </ul>
  );

  return (
    <>
      <header className="main-header">
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
                  <li><a href="https://www.facebook.com/dalataxiborlange/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="https://x.com/tborlange/" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="https://www.instagram.com/taxi17070.se/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mid-header">
          <div className="container">
            <div className="mid-header-wrap">
              <div className="site-logo">
                <Link href="/">
                  <Image src="/assets/img/logo-dark.webp" alt="Dala Taxi Borlänge Logo" width={389} height={100} sizes="(max-width: 768px) 200px, 389px" priority />
                </Link>
              </div>
              <ul className="header-info">
                <li>
                  <div className="header-info-icon"><i className="las la-phone-volume"></i></div>
                  <div className="header-info-text">
                    <div className="contact-title">
                      <span>Ring Oss Dygnet Runt</span>
                      <a href="tel:024317900">0243-179 00</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="header-info-icon"><i className="las la-envelope-open"></i></div>
                  <div className="header-info-text">
                    <div className="contact-title">
                      <span>Mejla Oss</span>
                      <a href="mailto:taxi17900@gmail.com">taxi17900@gmail.com</a>
                    </div>
                  </div>
                </li>
                <li className="d-none d-xl-flex"> 
                  <div className="header-info-icon"><i className="las la-map-marker"></i></div>
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

        <div className="nav-menu-wrapper">
          <div className="container">
            <div className="nav-menu-inner">
              <div className="site-logo">
                <Link href="/">
                  <Image src="/assets/img/logo-dark.webp" alt="Logo" width={96} height={44} />
                </Link>
              </div>
              
              <div className="header-menu-wrap" style={{ display: isMobileMenuOpen ? 'block' : '' }}>
                <NavMenu />
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
                <div className={`burger-menu ${isMobileMenuOpen ? 'menu-open' : ''}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                  <div className="line-menu line-half first-line"></div>
                  <div className="line-menu"></div>
                  <div className="line-menu line-half last-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={`sticky-header ${isSticky ? 'sticky-fixed-top' : ''}`}>
        <div className="nav-menu-wrapper">
            <div className="container">
                <div className="nav-menu-inner">
                    <div className="site-logo">
                        <Link href="/">
                            <Image src="/assets/img/logo-dark.webp" alt="Logo" width={150} height={75} />
                        </Link>
                    </div>
                    <div className="header-menu-wrap">
                        <NavMenu />
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
                </div>
            </div>
        </div>
      </div>

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
      <div id="searchbox-overlay" onClick={() => setIsSearchOpen(false)} style={{ opacity: isSearchOpen ? 1 : 0, visibility: isSearchOpen ? 'visible' : 'hidden' }}></div>

      <div id="popup-sidebox" className={`popup-sidebox ${isSideboxOpen ? 'show' : ''}`}>
        <div className="sidebox-content">
          <div className="site-logo">
            <Link href="/">
                  <Image src="/assets/img/logo-light.webp" alt="Dala Taxi Borlänge Logo" width={389} height={100} sizes="(max-width: 768px) 200px, 389px" priority />
            </Link>
          </div>
          <p>Dala Taxi Borlänge levererar pålitlig och säker taxiservice i Borlänge, Dalarna. Öppet dygnet runt alla dagar i veckan.</p>
          <ul className="sidebox-list">
            <li className="call"><span>Ring oss:</span>0243-179 00</li>
            <li><span>Adress:</span>Järvstigen 1, 784 50 Borlänge</li>
            <li><span>E-post:</span>taxi17900@gmail.com</li>
          </ul>
          <div className="sidebox-social">
            <ul className="header-social-share" style={{justifyContent: 'flex-start', padding: 0, marginTop: '20px'}}>
                  <li><a href="https://www.facebook.com/dalataxiborlange/" target="_blank" rel="noopener noreferrer" aria-label="Besök Dala Taxi Borlänge på Facebook"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="https://x.com/tborlange/" target="_blank" rel="noopener noreferrer" aria-label="Besök Dala Taxi Borlänge på Twitter/X"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="https://www.instagram.com/taxi17070.se/" target="_blank" rel="noopener noreferrer" aria-label="Besök Dala Taxi Borlänge på Instagram"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div id="sidebox-overlay" onClick={() => setIsSideboxOpen(false)} style={{ display: isSideboxOpen ? 'block' : 'none' }}></div>
    </>
  );
}