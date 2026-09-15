import './Quality.css';

const STANDARDS = [
  {
    icon: '🔍',
    title: 'Pre-Shipment Inspection',
    desc: 'Every shipment is physically inspected and graded before dispatch — no compromises on quality.',
  },
  {
    icon: '📜',
    title: 'International Certifications',
    desc: 'We comply with international trade and quality certifications across all product categories.',
  },
  {
    icon: '📁',
    title: 'Transparent Documentation',
    desc: 'Complete, clear paperwork for every order — invoices, CoO, phytosanitary, and more. No surprises.',
  },
  {
    icon: '⚖️',
    title: 'Trade Compliance',
    desc: 'Full adherence to import-export regulations, customs requirements, and bilateral trade agreements.',
  },
];

const COMMITMENTS = [
  { value: '100%', label: 'Shipments Inspected' },
  { value: 'Zero', label: 'Compliance Failures' },
  { value: 'Full', label: 'Documentation Support' },
  { value: '24/7', label: 'Trade Desk Support' },
];

export default function Quality() {
  return (
    <section id="quality" className="quality section">
      <div className="container quality__inner">

        {/* Left — text + commitments */}
        <div className="quality__content">
          <span className="section-label">Quality & Compliance</span>
          <h2 className="section-title">Quality You Can Trust</h2>
          <p className="quality__lead">
            We don't just ship goods — we ship confidence. Every product that leaves our hands meets
            strict quality standards and is backed by complete, transparent documentation.
          </p>

          {/* Commitment stats */}
          <div className="quality__commitments">
            {COMMITMENTS.map(c => (
              <div key={c.label} className="quality__commitment">
                <span className="quality__commitment-value">{c.value}</span>
                <span className="quality__commitment-label">{c.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — standard cards */}
        <div className="quality__standards">
          {STANDARDS.map(s => (
            <div key={s.title} className="quality-card">
              <span className="quality-card__icon">{s.icon}</span>
              <div>
                <h3 className="quality-card__title">{s.title}</h3>
                <p className="quality-card__desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
