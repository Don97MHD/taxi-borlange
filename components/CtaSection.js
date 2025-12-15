export default function CtaSection() {
  return (
    <section className="cta-section padding">
      <div className="cta-men wow fade-in-bottom" data-wow-delay="200ms"></div>
      <div className="container">
        <div className="cta-content">
          <h2>Ring Oss Nu <span>Boka Din Taxi</span> <br /> För Din Nästa Resa!</h2>
          <p>Vi erbjuder trygghet, komfort och fasta priser.</p>
          <div className="cta-call">
            <i className="las la-phone-volume"></i>
            <p><span>Ring För Taxi</span><a href="tel:024317900">0243-179 00</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}