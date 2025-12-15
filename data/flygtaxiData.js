export const flygtaxiData = [
  {
    id: "dala-airport", // هذا هو الرابط (Slug)
    title: "Taxi till Dala Airport",
    subtitle: "Fast Pris Borlänge",
    
    // SEO
    seoTitle: "Boka Taxi till Dala Airport | Fast Pris Borlänge",
    seoDescription: "Res till Dala Airport från Borlänge med Dala Taxi. Vi erbjuder fast pris från 320 kr, flygbevakning och garanterad punktlighet. Boka din flygtaxi.",

    // Header Image (يمكنك تغيير الصورة لكل مطار)
    headerImage: "/assets/img/service-2.webp",

    // Intro Section
    introTitle: "Din Lokala Flygtaxi i Borlänge",
    introText: "Säkerställ en smidig och punktlig start på din resa med en förbokad taxi direkt till Dala Airport. Dala Taxi Borlänge är din lokala expert på flygplatstransporter. Vi kombinerar professionell service med lokalkännedom för att garantera att du anländer till flygplatsen i god tid, utan stress och till ett förutsägbart, fast pris.",

    // Pricing Section
    pricingTitle: "Fast Pris från Borlänge till Dala Airport",
    pricingDesc: "Vi tror på full transparens. Slipp oron för en tickande taxameter och res med vetskapen om den exakta kostnaden i förväg.",
    prices: [
      { type: "Vanlig Taxi (1-4 passagerare)", price: "Från 320 SEK" },
      { type: "Storbil Taxi (5-8 passagerare)", price: "Från 380 SEK" }
    ],
    pricingNote: "Priserna är fasta och inkluderar alla avgifter. Reser du från en annan ort i närheten? Kontakta oss för en exakt prisoffert.",
    pricingCtaPhone: "0243-179 00",

    // Features Section
    featuresTitle: "Varför Välja Oss?",
    featuresDesc: "Vi erbjuder mer än bara en transport – vi erbjuder en helhetslösning för din flygresa.",
    features: [
      {
        icon: "las la-clock",
        title: "Garanterad Punktlighet",
        text: "Vi vet att tid är allt när det kommer till flyg. Våra erfarna förare känner till de bästa rutterna och planerar din resa med god marginal för att du ska komma fram i tid, varje gång."
      },
      {
        icon: "las la-plane-arrival",
        title: "Flygbevakning ingår",
        text: "När du bokar en returresa från Dala Airport bevakar vi ditt flygs ankomsttid. Om planet är försenat justerar vi automatiskt upphämtningstiden utan extra kostnad."
      },
      {
        icon: "las la-car",
        title: "Alltid Rätt Bil för Dina Behov",
        text: "Oavsett om du reser ensam eller med hela familjen har vi rätt fordon. Vi erbjuder allt från bekväma personbilar till rymliga minibussar.",
        linkText: "Läs mer om våra storbilar här",
        linkUrl: "/vara-tjanster/storbil-gruppresor"
      },
      {
        icon: "las la-child",
        title: "Säkerheten Först",
        text: "Reser du med barn? Vi ser till att resan är säker för alla. Meddela oss vid bokning så utrustar vi bilen med rätt barnstol eller bälteskudde.",
        linkText: "Läs mer om att resa med barnstol här",
        linkUrl: "/taxi-med-barnstol"
      }
    ],

    // FAQ Section
    faqs: [
      {
        question: "Hur långt i förväg bör jag boka min taxi till flygplatsen?",
        answer: "För att garantera en bil rekommenderar vi att du bokar minst 24 timmar i förväg, särskilt om du behöver en storbil eller en resa under tidig morgon."
      },
      {
        question: "Erbjuder ni upphämtning direkt vid terminalen?",
        answer: "Absolut. Vid ankomst möter din förare upp dig på en avtalad plats precis utanför terminalen för en snabb och smidig avfärd."
      },
      {
        question: "Vad händer om mitt flyg blir inställt?",
        answer: "Kontakta oss så snart som möjligt så avbokar vi din resa utan kostnad."
      }
    ]
  },
  {
    id: "arlanda", // الرابط (Slug)
    title: "Taxi till Arlanda Airport",
    subtitle: "Fast Pris Borlänge",
    
    // SEO
    seoTitle: "Taxi Borlänge Arlanda | Fast Pris | Boka Flygtaxi",
    seoDescription: "Boka bekväm taxi från Borlänge till Arlanda. Dala Taxi erbjuder fast pris från 4900 kr. Vi garanterar en punktlig och stressfri resa. Boka idag!",

    // Header Image
    headerImage: "/assets/img/service-2.webp", // أو صورة أخرى إذا توفرت

    // Intro Section
    introTitle: "Res Bekvämt till Fast Pris",
    introText: "Planerar du en taxiresa från Borlänge till Arlanda? Låt oss på Dala Taxi Borlänge ta hand om den viktigaste delen av din resplan – en bekväm, säker och punktlig transport direkt från din dörr i Borlänge till rätt terminal på Arlanda. En resa på över två timmar kräver en transportpartner du kan lita på. Glöm stressen med tågbyten, dyra parkeringar och osäkerhet. Med oss börjar din semester eller affärsresa redan när du sätter dig i bilen.",

    // Pricing Section
    pricingTitle: "Fast Pris från Borlänge till Arlanda med Taxi",
    pricingDesc: "Vi erbjuder full transparens och trygghet med våra fasta priser. Du vet exakt vad resan kommer att kosta, oavsett trafikförhållanden.",
    prices: [
      { type: "Standardtaxi (1-4 passagerare)", price: "Från 4900 SEK" },
      { type: "Storbil (5-8 passagerare)", price: "Från 5600 SEK" }
    ],
    pricingNote: "Priserna är fasta, inkluderar alla avgifter och gäller för en adress i Borlänge tätort. Kontakta oss för en exakt offert från din specifika adress.",
    pricingCtaPhone: "0243-179 00",

    // Features Section
    featuresTitle: "Mer än Bara en Transport",
    featuresDesc: "Vi ser till att din långresa till Arlanda blir en angenäm del av din totala reseupplevelse.",
    features: [
      {
        icon: "las la-couch",
        title: "Total Avkoppling",
        text: "Luta dig tillbaka i våra moderna och bekväma bilar. Använd restiden till att arbeta, läsa eller bara koppla av. Våra erfarna förare sköter körningen tryggt och mjukt, så att du anländer utvilad."
      },
      {
        icon: "las la-clock",
        title: "Garanterad Punktlighet",
        text: "Vi planerar resan noggrant och startar i god tid för att du ska hinna med ditt flyg utan stress. Vid upphämtning från Arlanda bevakar vi ditt flyg och anpassar oss efter eventuella förseningar."
      },
      {
        icon: "las la-suitcase",
        title: "Plats för Allt Ditt Bagage",
        text: "Reser du med mycket bagage, skidor eller annan specialutrustning? Inga problem. Våra bilar har gott om utrymme.",
        linkText: "Läs mer om våra storbilar",
        linkUrl: "/vara-tjanster/storbil-gruppresor"
      },
      {
        icon: "las la-door-open",
        title: "Från Din Dörr Direkt till Terminalen",
        text: "Vi hämtar dig vid din hemadress och kör dig direkt till avgångshallen vid din terminal på Arlanda. Inga byten, inget krångel, bara en smidig och direkt transport."
      }
    ],

    // FAQ / Travel Info Section
    // قمت بصياغة "معلومات السفر" على شكل أسئلة وأجوبة لتتناسب مع القالب
    faqs: [
      {
        question: "Hur lång tid tar resan till Arlanda?",
        answer: "Beräknad restid är cirka 2,5 timmar, beroende på trafik och väderförhållanden."
      },
      {
        question: "Vad behöver jag uppge vid bokning?",
        answer: "Vänligen uppge ditt flightnummer vid bokning. Detta är viktigt för att vi ska kunna bevaka din resa och eventuella ändringar i flygtiderna."
      },
      {
        question: "När bör jag boka min resa?",
        answer: "Vi rekommenderar starkt att du bokar din Arlanda-resa minst 24-48 timmar i förväg för att garantera tillgänglighet."
      }
    ]
  }
];