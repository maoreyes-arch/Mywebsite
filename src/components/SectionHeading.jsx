export default function SectionHeading({ number, label, title, accent, className = "" }) {
  return (
    <div className={`section-heading ${className}`}>
      {number && <span className="section-number">{number}</span>}

      <div>
        <span className="section-label">{label}</span>
        <h2>
          {title} <span>{accent}</span>
        </h2>
      </div>
    </div>
  );
}
