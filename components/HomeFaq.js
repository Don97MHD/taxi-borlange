export default function HomeFaq() {
  return (
    <div className="accordion faq-accordion" id="faq-accordion">
      {/* Q1 */}
      <div className="accordion-item">
        <h3 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Kan man förboka taxi?
          </button>
        </h3>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faq-accordion">
          <div className="accordion-body">
            <p>Självklart! Vi rekommenderar att du förbokar din resa, antingen via vårt onlineformulär eller genom att ringa oss, för att garantera en bil vid önskad tidpunkt.</p>
          </div>
        </div>
      </div>

      {/* Q2 */}
      <div className="accordion-item">
        <h3 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Finns barnstol i taxin?
          </button>
        </h3>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faq-accordion">
          <div className="accordion-body">
            <p>Ja, vi erbjuder barnstolar och bälteskuddar för våra yngsta resenärer. Meddela oss vid bokning så ser vi till att bilen är rätt utrustad för ditt barns säkerhet. <a href="https://dalataxiborlange.se/taxi-med-barnstol/">Läs mer om resor med barn</a></p>
          </div>
        </div>
      </div>

      {/* Q3 */}
      <div className="accordion-item">
        <h3 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Hur kan man betala?
          </button>
        </h3>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faq-accordion">
          <div className="accordion-body">
            <p>Du kan betala med Swish, de flesta bank- och kreditkort, eller kontant direkt till föraren. Företagskunder kan även ansöka om att betala via faktura.</p>
          </div>
        </div>
      </div>

      {/* Q4 */}
      <div className="accordion-item">
        <h3 className="accordion-header" id="headingFour">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            Hur bokar jag en taxi i Borlänge?
          </button>
        </h3>
        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faq-accordion">
          <div className="accordion-body">
            <p>Man kan boka en taxi i Borlänge genom att ringa 0243-179 00 eller boka online.</p>
          </div>
        </div>
      </div>

      {/* Q5 */}
      <div className="accordion-item">
        <h3 className="accordion-header" id="headingFive">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            Har Dala Taxi Borlänge fasta priser?
          </button>
        </h3>
        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faq-accordion">
          <div className="accordion-body">
            <p>Ja självklart har vi taxi med fasta priser i Borlänge.</p>
          </div>
        </div>
      </div>

      {/* Q6 */}
      <div className="accordion-item">
        <h3 className="accordion-header" id="headingSix">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
            Brukar Dala Taxi Borlänge köra taxi till olika Flygplatser?
          </button>
        </h3>
        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faq-accordion">
          <div className="accordion-body">
            <p>Ja självklart kör Dala Taxi Borlänge resor till Dala airport flygplatsen i Borlänge eller Arlanda flygplatsen i Stockholm med Fasta priser.</p>
          </div>
        </div>
      </div>

      {/* Q7 */}
      <div className="accordion-item">
        <h3 className="accordion-header" id="headingSeven">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
            Kör Dala Taxi Borlänge paket, Post, Bud samt frakt?
          </button>
        </h3>
        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#faq-accordion">
          <div className="accordion-body">
            <p>Absolut kör Dala Taxi Borlänge alla slags av paket och bud med snabb frakt till mottagare.</p>
          </div>
        </div>
      </div>

      {/* Q8 */}
      <div className="accordion-item">
        <h3 className="accordion-header" id="headingEight">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
            Vad kostar Taxi från Borlänge Till Romme Alpin med fast pris?
          </button>
        </h3>
        <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#faq-accordion">
          <div className="accordion-body">
            <p>Dala Taxi Borlänge kör med ett fast pris 440 kr från Borlänge till Romme Alpin.</p>
          </div>
        </div>
      </div>

      {/* Q9 */}
      <div className="accordion-item">
        <h3 className="accordion-header" id="headingNine">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
            Vad Kostar Taxi från Borlänge till Falun med fast pris?
          </button>
        </h3>
        <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#faq-accordion">
          <div className="accordion-body">
            <p>Dala Taxi Borlänge kör med ett fast pris 599 kr från Borlänge centrum till Falun centrum.</p>
          </div>
        </div>
      </div>
    </div>
  );
}