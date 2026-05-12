// components/HomeFaq.js

export default function HomeFaq() {
  return (
    <div className="accordion faq-accordion" id="faq-accordion">
      
      {/* السؤال الأول */}
      <div className="accordion-item">
        <h3 className="accordion-header" id="headingOne">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Kan man förboka taxi?
          </button>
        </h3>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faq-accordion">
          <div className="accordion-body">
            <p>Självklart! Vi rekommenderar att du förbokar din resa, antingen via vårt online formulär eller genom att ringa oss, för att garantera en bil vid önskad tidpunkt.</p>
          </div>
        </div>
      </div>

      {/* السؤال الثاني */}
      <div className="accordion-item">
        <h3 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Finns barnstol i taxin?
          </button>
        </h3>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faq-accordion">
          <div className="accordion-body">
            <p>Ja, vi erbjuder barnstolar och bälteskuddar till våra yngsta resenärer. Meddela oss vid bokning så ser vi till att bilen är rätt utrustad för ditt barns säkerhet. <br />
            <a href="/taxi-med-barnstol/" style={{color: '#ff9900', textDecoration: 'underline', fontWeight: 'bold'}}>Läs mer om resor med barn</a>
            </p>
          </div>
        </div>
      </div>

      {/* السؤال الثالث */}
      <div className="accordion-item">
        <h3 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Hur kan man betala?
          </button>
        </h3>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faq-accordion">
          <div className="accordion-body">
            <p> Du kan betala med Swish, de flesta bank- och kreditkort, eller kontant direkt till föraren. Företagskunder kan även ansöka om att betala via faktura.</p>
          </div>
        </div>
      </div>

      {/* السؤال الرابع */}
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

      {/* السؤال الخامس */}
      <div className="accordion-item">
        <h3 className="accordion-header" id="headingFive">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            Har Dala Taxi Borlänge fasta priser?
          </button>
        </h3>
        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faq-accordion">
          <div className="accordion-body">
            <p>Ja självklart har vi taxi med fasta priser i Borlänge</p>
          </div>
        </div>
      </div>

    </div>
  );
}