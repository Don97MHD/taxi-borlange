export default function SectionHeading({ subtitle, title, description, align = 'center', color = 'dark' }) {
  const isLeft = align === 'left';
  const isWhite = color === 'white';

  return (
    <div 
      className={`section-heading mb-40 ${isLeft ? '' : 'text-center'} wow fade-in-bottom`} 
      data-wow-delay="200ms"
    >
<div className={`section-subtitle ${isWhite ? 'white' : ''}`}><span></span>{subtitle}</div>
      <h2 className={isWhite ? 'white' : ''}>{title}</h2>
      {description && <p className={isWhite ? 'white' : ''}>{description}</p>}
    </div>
  );
}