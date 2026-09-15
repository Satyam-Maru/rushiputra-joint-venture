import './Products.css';

const PRODUCTS = [
  {
    id: 'wood',
    emoji: '🪵',
    name: 'Wood',
    tagline: 'Timber & Sawn Wood',
    description:
      'Premium timber logs and sawn wood, sourced and graded for durability and finish. Suitable for construction, furniture, and industrial use.',
    specs: ['Hardwood & Softwood', 'Graded & Certified', 'Multiple Species', 'Custom Sizing'],
  },
  {
    id: 'plywood',
    emoji: '🪚',
    name: 'Plywood',
    tagline: 'Marine, Commercial & Shuttering',
    description:
      'Marine, commercial, and shuttering plywood in multiple sizes and grades — built to international quality standards for every application.',
    specs: ['Marine Grade', 'Commercial Grade', 'Shuttering Ply', 'ISI & BWR Certified'],
  },
  {
    id: 'metal-scrap',
    emoji: '🔩',
    name: 'Metal Scrap',
    tagline: 'Ferrous & Non-Ferrous',
    description:
      'Ferrous and non-ferrous scrap — including steel, copper, and aluminium — sorted, quality-checked, and ready for export.',
    specs: ['Steel Scrap', 'Copper Scrap', 'Aluminium Scrap', 'Quality Sorted'],
  },
];

export default function Products() {
  return (
    <section id="products" className="products section">
      <div className="container">

        {/* Header */}
        <div className="products__header">
          <span className="section-label">What We Trade</span>
          <h2 className="section-title">Our Product Categories</h2>
          <p className="section-subtitle">
            Three core commodities. Consistent quality. Reliable supply — from India to the world.
          </p>
        </div>

        {/* Cards */}
        <div className="products__grid">
          {PRODUCTS.map((p) => (
            <div key={p.id} className="product-card">
              <div className="product-card__top">
                <div className="product-card__icon">{p.emoji}</div>
                <div>
                  <p className="product-card__tagline">{p.tagline}</p>
                  <h3 className="product-card__name">{p.name}</h3>
                </div>
              </div>

              <p className="product-card__desc">{p.description}</p>

              <ul className="product-card__specs">
                {p.specs.map(s => (
                  <li key={s} className="product-card__spec">
                    <span className="product-card__spec-dot" />
                    {s}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="product-card__cta">
                Enquire Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
