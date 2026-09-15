import './Trade.css';

const SERVICES = [
  {
    icon: '📥',
    title: 'Import Services',
    description: 'End-to-end import support — sourcing, quality checks, and customs clearance handled seamlessly on your behalf.',
  },
  {
    icon: '📤',
    title: 'Export Services',
    description: 'Reliable export of wood, ply, and metal scrap to global markets with full documentation and compliance support.',
  },
  {
    icon: '📋',
    title: 'Documentation',
    description: 'We handle all export-import paperwork — invoices, certificates of origin, phytosanitary, and compliance documents.',
  },
  {
    icon: '🚢',
    title: 'Logistics',
    description: 'Shipping, freight coordination, and port-to-port handling for smooth, on-time delivery every time.',
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
          <span className="section-label">Our Trade Services</span>
          <h2 className="section-title">Import &amp; Export, End to End</h2>
          <p className="section-subtitle">
            From sourcing to shipment, we manage every step of the trade process — so you don't have to.
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
