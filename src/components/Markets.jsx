import './Markets.css';

const MARKETS = [
  {
    code: 'in',
    country: 'India',
    role: 'Home Base & Sourcing Hub',
    desc: 'Our primary sourcing and operations hub — where every trade journey begins.',
    highlight: true,
  },
  {
    code: 'us',
    country: 'United States',
    role: 'Premium Buyer Market',
    desc: 'A key destination for high-grade wood and building materials exports.',
  },
  {
    code: 'pa',
    country: 'Panama',
    role: 'Logistics & Trade Partner',
    desc: 'A strategic hub enabling smooth transhipment routes worldwide.',
  },
  {
    code: 'co',
    country: 'Colombia',
    role: 'Growing Export Destination',
    desc: 'Rapidly growing demand for metal scrap and building materials imports.',
  },
  {
    code: 'ke',
    country: 'Kenya',
    role: 'Strategic African Trade Link',
    desc: 'Our gateway into the booming East African raw materials market.',
  },
  {
    code: 'ec',
    country: 'Ecuador',
    role: 'Teak Wood Partner',
    desc: 'Key sourcing and supply partner for high-grade Teak wood round logs, square logs, and sawn timber.',
  },
];

export default function Markets() {
  return (
    <section id="markets" className="markets section">
      <div className="container">

        {/* Header */}
        <div className="markets__header">
          <span className="section-label">Our Export Markets</span>
          <h2 className="section-title">Serving International Clients</h2>
          <p className="section-subtitle">
            Our objective is to develop long-term business relationships with international buyers by providing reliable sourcing and transparent trade coordination.
          </p>
        </div>

        {/* Grid */}
        <div className="markets__grid">
          {MARKETS.map((m) => (
            <div key={m.code ?? 'more'} className={`market-card${m.highlight ? ' market-card--highlight' : ''}`}>

              {/* Top row: flag + role */}
              <div className="market-card__top">
                {m.code ? (
                  <img
                    src={`https://flagcdn.com/w80/${m.code}.png`}
                    srcSet={`https://flagcdn.com/w160/${m.code}.png 2x`}
                    alt={`${m.country} flag`}
                    className="market-card__flag"
                    loading="lazy"
                  />
                ) : (
                  <span className="market-card__globe">🌍</span>
                )}
                <span className="market-card__role">{m.role}</span>
              </div>

              {/* Country name + desc */}
              <h3 className="market-card__country">{m.country}</h3>
              <p className="market-card__desc">{m.desc}</p>

            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="markets__cta">
          <a href="#contact" className="btn-primary">Get in Touch</a>
          <p className="markets__cta-sub">Interested in trading with us? We'd love to connect.</p>
        </div>

      </div>
    </section>
  );
}
