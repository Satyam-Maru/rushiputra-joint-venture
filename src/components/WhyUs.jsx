import './WhyUs.css';

const REASONS = [
  {
    icon: '🎯',
    title: 'Tailored Sourcing',
    desc: 'Every enquiry is evaluated according to specific client requirements — delivering suitable options rather than a one-size-fits-all solution.',
  },
  {
    icon: '🤝',
    title: 'Trust & Transparency',
    desc: 'Fair, transparent commercial terms and dependable coordination between suppliers and international buyers.',
  },
  {
    icon: '📦',
    title: 'Quality & Delivery Commitment',
    desc: 'Materials sourced and supplied according to agreed specifications, quality grades, pricing, packaging, and timelines.',
  },
  {
    icon: '📍',
    title: 'Strategic Hub in Gandhidham',
    desc: 'Located in Gandhidham, Gujarat — one of India’s foremost logistics and commercial hubs for seamless port and shipment coordination.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="whyus section">
      <div className="container">

        {/* Header */}
        <div className="whyus__header">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">The RJV Difference</h2>
          <p className="section-subtitle">
            Four reasons why businesses across the globe choose us as their trade partner.
          </p>
        </div>

        {/* Grid */}
        <div className="whyus__grid">
          {REASONS.map((r, i) => (
            <div key={r.title} className="whyus-card">
              <span className="whyus-card__number">0{i + 1}</span>
              <div className="whyus-card__icon">{r.icon}</div>
              <h3 className="whyus-card__title">{r.title}</h3>
              <p className="whyus-card__desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
