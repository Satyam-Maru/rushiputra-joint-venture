import './Trade.css';

const SERVICES = [
  {
    icon: '🎯',
    title: 'Client Requirement Based Sourcing',
    description: 'We understand the buyer\'s exact requirements and identify suitable products and suppliers accordingly.',
  },
  {
    icon: '🪵',
    title: 'Wood Scrap Trading',
    description: 'We facilitate the sourcing and export of wood scrap based on agreed specifications and commercial requirements.',
  },
  {
    icon: '🚢',
    title: 'International Export',
    description: 'We coordinate the export process from India to international destinations, working with relevant logistics and shipping partners.',
  },
  {
    icon: '🤝',
    title: 'Supplier & Buyer Coordination',
    description: 'We act as a bridge between suppliers and international buyers to facilitate smooth commercial transactions.',
  },
  {
    icon: '📋',
    title: 'Documentation & Logistics Coordination',
    description: 'We coordinate necessary commercial documentation and shipment-related activities with the respective parties.',
  },
];

const STEPS = [
  { number: '01', label: 'Enquiry & Requirements' },
  { number: '02', label: 'Sourcing & Quality Check' },
  { number: '03', label: 'Documentation & Compliance' },
  { number: '04', label: 'Shipping & Delivery' },
];

export default function Trade() {
  return (
    <section id="trade" className="trade section">
      <div className="container">

        {/* Header */}
        <div className="trade__header">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Professional Trade Coordination</h2>
          <p className="section-subtitle">
            From client-specific sourcing to final delivery, we coordinate every stage of the international trade process.
          </p>
        </div>

        {/* Services grid */}
        <div className="trade__grid">
          {SERVICES.map((s) => (
            <div key={s.title} className="trade-card">
              <span className="trade-card__icon">{s.icon}</span>
              <h3 className="trade-card__title">{s.title}</h3>
              <p className="trade-card__desc">{s.description}</p>
            </div>
          ))}
        </div>

        {/* Process strip */}
        <div className="trade__process">
          <p className="trade__process-label">How It Works</p>
          <div className="trade__steps">
            {STEPS.map((step, i) => (
              <div key={step.number} className="trade__step">
                <div className="trade__step-inner">
                  <span className="trade__step-num">{step.number}</span>
                  <span className="trade__step-label">{step.label}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="trade__step-line" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="trade__cta">
          <a href="#contact" className="btn-primary">Talk to Our Team</a>
        </div>

      </div>
    </section>
  );
}
