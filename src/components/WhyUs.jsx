import './WhyUs.css';

const REASONS = [
  {
    icon: '🏆',
    title: 'Experience',
    desc: 'Years of hands-on expertise in wood, metal scrap, and building materials trade — we know the market inside out.',
  },
  {
    icon: '💰',
    title: 'Competitive Pricing',
    desc: 'Fair, transparent pricing on every deal. No hidden margins, no last-minute surprises.',
  },
  {
    icon: '📦',
    title: 'Reliable Supply',
    desc: 'Consistent product quality and on-time delivery, shipment after shipment, order after order.',
  },
  {
    icon: '🌐',
    title: 'Global Network',
    desc: 'Strong trade partnerships across India, USA, Panama, Colombia, Kenya, and beyond.',
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
