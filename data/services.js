export const servicesData = [
  {
    id: "tagtaxi",
    slug: "tagtaxi", // لاستخدامه في الرابط
    title: "Tågtaxi Borlänge", // العنوان الذي يظهر في الهيدر والقائمة
    
    // بيانات SEO الخاصة بالصفحة
    seoTitle: "Tågtaxi Borlänge | Alltid i Tid till Tåget | Boka Nu",
    seoDescription: "Säkerställ en stressfri anslutning till ditt tåg med Dala Taxis tågtaxi i Borlänge. Vi kör dig till och från resecentrum. Boka i förväg för garanterad punktlighet.",

    // الصور (تأكد من وجود الصور في مجلد assets أو استبدلها بالمسار الصحيح)
    image: "/assets/img/service-1.webp", 
    detailImage: "/assets/img/service-1.webp", 

    // المقدمة والنص الرئيسي
    description: "Att resa med tåg ska vara enkelt och effektivt. Men att ta sig till och från tågstationen, särskilt med bagage eller under tidspress, kan vara en stressfaktor. Dala Taxi Borlänge erbjuder en dedikerad tågtaxi service som är utformad för att göra din anslutning till Borlänge resecentrum så smidig och punktlig som möjligt. Låt oss ta hand om transporten, så att du kan fokusera på din tågresa.",

    // المميزات (Benefits) - تم توزيع النص عليها
    features: [
      { 
        icon: "las la-clock", 
        title: "Punktlighet som Prioritet", 
        text: "Vi förstår att ett missat tåg inte är ett alternativ. När du förbokar en tågtaxi hos oss planerar våra erfarna förare din resa med goda tidsmarginaler. Vi tar hänsyn till aktuell trafik och väderförhållanden." 
      },
      { 
        icon: "las la-suitcase-rolling", 
        title: "Bekväm Transport med Bagage", 
        text: "Reser du med tunga väskor? Inga problem. Våra förare hjälper dig att lasta i och ur ditt bagage och ser till att du blir avsläppt så nära ingången som möjligt." 
      },
      { 
        icon: "las la-map-marker-alt", 
        title: "Hämtning vid Ankomst", 
        text: "Anländer du med tåg till Borlänge? Förboka en taxi som väntar på dig när du kliver av. Vi håller koll på eventuella förseningar och anpassar upphämtningstider därefter." 
      },
      { 
        icon: "las la-shield-alt", 
        title: "Trygghet, Oavsett Tid på Dygnet", 
        text: "Tågen går tidiga morgnar och sena kvällar. Vår tågtaxi service i Borlänge är tillgänglig 24/7, vilket ger dig en trygg och säker transport till eller från stationen." 
      },
    ],

    // محتوى إضافي في أسفل الصفحة (التخطيط + زر الاتصال)
    extraContent: {
      heading: "Planera Din Resa till Resecentrum",
      text1: "För att säkerställa en smidig upplevelse rekommenderar vi att du bokar din tågtaxi i förväg, särskilt om du reser under rusningstid eller med mycket bagage. Ange gärna ditt tågnummer vid bokningen så kan vi lättare hålla koll på din resa.",
      text2: "Behöver du transport för en större grupp? Våra storbilar är ett perfekt alternativ för familjer eller arbetsgrupper som reser tillsammans.",
      linkText: "Läs mer om Storbilar",
      linkUrl: "/vara-tjanster/storbil-gruppresor", // تم تعديل الرابط ليكون داخلياً
      ctaHeading: "Boka Din Tågtaxi Redan Idag",
      ctaText: "Säkra din plats och res utan stress. Ring oss för att boka din taxi till eller från Borlänge resecentrum.",
      phone: "0243-179 00"
    }
  },
  {
    id: "storbil-gruppresor",
    slug: "storbil-gruppresor",
    title: "Storbil & Gruppresor",
    
    // SEO
    seoTitle: "Storbil & Gruppresor i Borlänge | Taxi för Upp till 8 Personer",
    seoDescription: "Res tillsammans i Borlänge! Dala Taxi erbjuder rymliga storbilar och minibussar för grupper, familjer och företag. Boka en taxi för 5, 6, 7 eller 8 personer.",

    // Images
    image: "/assets/img/service-3.webp", // تأكد من أن الصورة هي صورة الـ Van/Minibus
    detailImage: "/assets/img/service-3.webp",

    // Main Description
    description: "Stor taxi i Borlänge – Res Tillsammans, Smidigt och Ekonomiskt. Ska ni resa som en större grupp? Oavsett om det är familjen som ska till flygplatsen, kompisgänget som ska på utflykt, eller kollegorna som ska till en konferens, är det alltid enklare och trevligare att resa tillsammans. Dala Taxi Borlänge erbjuder rymliga stora bilar och minibussar som är den perfekta lösningen när en vanlig personbil inte räcker till. Glöm krånglet med att samordna och boka flera bilar. Med vår storbilservice reser hela sällskapet i ett och samma fordon – bekvämt, socialt och kostnadseffektivt.",

    // Features Section
    featuresTitle: "Fördelarna med Att Boka en Stor taxi", // العنوان الديناميكي الجديد
    features: [
      { 
        icon: "las la-users", 
        title: "Res Tillsammans i Sällskap", 
        text: "Den största fördelen är att hela gruppen kan resa tillsammans. Det innebär att ni kan prata, planera och umgås under resans gång. Ni anländer samtidigt och slipper vänta in varandra." 
      },
      { 
        icon: "las la-wallet", 
        title: "Kostnadseffektiv Lösning", 
        text: "Att boka en storbil är ofta billigare än att boka två eller flera vanliga taxibilar. Ni delar på en enda kostnad, vilket gör det till ett mycket ekonomiskt val." 
      },
      { 
        icon: "las la-suitcase", 
        title: "Gott om Plats för Bagage", 
        text: "Våra storbilar erbjuder inte bara fler sittplatser, utan också betydligt mer utrymme för bagage, sportutrustning eller annat skrymmande gods. Idealiskt för flygplatsresor eller skidresor." 
      },
      { 
        icon: "las la-couch", 
        title: "Bekvämlighet och Komfort", 
        text: "Res bekvämt med gott om benutrymme och plats för alla. Våra minibussar är moderna, rena och utrustade för att ge ert sällskap en angenäm reseupplevelse." 
      },
    ],

    // Extra Content (CTA & Planning)
    extraContent: {
      heading: "Boka Er Gruppresa i Förväg",
      text1: "Vår storataxi är perfekt för familjer, företagsevent, kompisgäng på väg till konserter, eller skidresor till Romme Alpin. Eftersom efterfrågan på våra storbilar är hög rekommenderar vi starkt att ni bokar er gruppresa i god tid.",
      text2: "Informera oss om antalet passagerare och eventuellt specialbagage. För prisuppgifter, se våra",
      linkText: "Fasta Priser",
      linkUrl: "/priser",
      ctaHeading: "Boka Storbil Nu",
      ctaText: "Ring oss nu för att boka en storbil för upp till 8 personer.",
      phone: "0243-179 00"
    }
  },
];