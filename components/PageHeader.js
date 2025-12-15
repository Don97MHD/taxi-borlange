export default function PageHeader({ title, subtitle }) {
  return (
    <section className="page-header">
      <div className="page-header-shape"></div>
      <div className="container">
        <div className="page-header-info">
          {/* العنوان الفرعي: div بدلاً من h4 مع الكلاس الصحيح */}
          <div className="section-subtitle">{subtitle}</div>
          
          {/* العنوان الرئيسي: h1 بدلاً من h2 */}
          <h1>{title}</h1>
          
          <p>Din kompletta transportlösning i Dalarna!</p>
        </div>
      </div>
    </section>
  );
}