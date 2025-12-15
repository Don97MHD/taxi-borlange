import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import CtaSection from '@/components/CtaSection';
import Link from 'next/link';

export const metadata = {
  title: 'Vanliga Frågor (FAQ) | Dala Taxi Borlänge',
  description: 'Här hittar du svar på de vanligaste frågorna om bokning, priser, barnstolar och betalning hos Dala Taxi Borlänge.',
}

export default function Faqs() {
  // قائمة الأسئلة والأجوبة لسهولة الإدارة والتعديل
  const faqData = [
    {
      question: "Hur bokar jag en taxi enklast?",
      answer: "Det snabbaste sättet är att ringa oss direkt på 0243-179 00. Vår växel är öppen dygnet runt. Du kan också boka via vårt onlineformulär på hemsidan för resor längre fram i tiden."
    },
    {
      question: "Har ni fasta priser?",
      answer: "Ja, vi erbjuder fasta priser till många populära destinationer som Falun (599 kr), Romme Alpin (440 kr), samt flygplatserna Arlanda och Dala Airport. För övriga resor kör vi oftast på taxameter, men du kan alltid fråga om ett fast pris innan resan."
    },
    {
      question: "Kan jag betala med Swish?",
      answer: "Ja, absolut. I alla våra bilar kan du betala med Swish, de flesta bank- och kreditkort samt kontanter. Vi erbjuder även fakturering för företagskunder."
    },
    {
      question: "Har ni bilar med barnstol?",
      answer: "Självklart. Vi har babyskydd, bakåtvända bilbarnstolar och bälteskuddar. Det är viktigt att du meddelar oss vid bokningstillfället att du behöver en barnstol samt barnets ålder, så att vi skickar rätt utrustad bil."
    },
    {
      question: "Vi är en stor grupp, har ni storbilar?",
      answer: "Ja, vi har minibussar (storbilar) som rymmer upp till 8 passagerare med bagage. Dessa är mycket populära så vi rekommenderar att ni bokar dessa i god tid."
    },
    {
      question: "Kör ni till Arlanda flygplats?",
      answer: "Ja, vi kör dagligen till och från Arlanda. Vi erbjuder ett fast pris från 4900 kr. Glöm inte att uppge ditt flightnummer vid bokning så vi kan bevaka eventuella förseningar."
    },
    {
      question: "Får man ta med husdjur i taxin?",
      answer: "Ja, men du måste meddela detta vid bokningen. Vi har specifika bilar där husdjur är tillåtna, och vi måste också ta hänsyn till att hålla vissa bilar helt allergifria."
    },
    {
      question: "Erbjuder ni företagskonto / faktura?",
      answer: "Ja, företag kan ansöka om att bli företagskund hos oss för att resa mot månadsfaktura. Det ger er enklare administration och prioriterad service. Kontakta oss för att sätta upp ett konto."
    },
    {
      question: "Vad händer om mitt tåg eller flyg är försenat?",
      answer: "Om du har förbokat en taxi och uppgett ditt tåg- eller flightnummer, så bevakar vi ankomsttiden. Vi anpassar upphämtningen så att bilen finns på plats när du anländer, oftast utan extra kostnad."
    },
    {
      question: "Kör ni bud och paket?",
      answer: "Ja, vi erbjuder snabba budtransporter för både företag och privatpersoner. Vi hämtar och levererar direkt utan omlastning, vilket är perfekt för brådskande eller ömtåliga leveranser."
    },
    {
      question: "Är er växel öppen dygnet runt?",
      answer: "Ja, Dala Taxi Borlänge är tillgängliga 24 timmar om dygnet, 7 dagar i veckan, året runt."
    },
    {
      question: "Tar ni ut extra avgift för nattkörning?",
      answer: "Vår taxameter har olika taxor beroende på tid på dygnet och helgdagar, enligt Transportstyrelsens regler. Fasta priser gäller dock oftast dygnet runt om inget annat anges."
    }
  ];

  return (
    <>
      <Header />
      
      <PageHeader 
        title={<span>Vanliga Frågor <br /> <span>& Svar</span></span>} 
        subtitle="Hjälp & FAQ" 
      />

      <section className="blog-section blog-page bg-grey padding">
        <div className="container">
          {/* تم استخدام justify-content-center لتوسيط القائمة بعد حذف السايد بار */}
          <div className="row justify-content-center">
            
            <div className="col-lg-10 sm-padding">
              
              {/* مقدمة بسيطة */}
              <div className="section-heading text-center mb-40">
                <div className="section-subtitle"><span></span>FAQ</div>
                <h2>Hitta Svaret Här</h2>
                <p>Har du funderingar inför din resa? Här har vi samlat de vanligaste frågorna vi får från våra kunder.</p>
              </div>

              <div className="accordion faq-accordion" id="faq-accordion">
                {faqData.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button 
                        className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`} 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target={`#collapse${index}`} 
                        aria-expanded={index === 0 ? "true" : "false"} 
                        aria-controls={`collapse${index}`}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div 
                      id={`collapse${index}`} 
                      className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} 
                      aria-labelledby={`heading${index}`} 
                      data-bs-parent="#faq-accordion"
                    >
                      <div className="accordion-body">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* رابط إضافي في حال لم يجد العميل الإجابة */}
              <div className="text-center mt-5">
                <p style={{fontSize: '18px', marginBottom: '20px'}}>Hittade du inte svaret på din fråga?</p>
                <Link href="/kontakt" className="default-btn">
                   Kontakta Oss Direkt
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* إضافة قسم CTA لتحفيز الحجز */}
      <CtaSection />

      <Footer />
    </>
  );
}