import './About.css';

const PILLARS = [
  {
    icon: '🤝',
    title: 'Our Approach',
    text: 'Every enquiry is evaluated according to the client’s specific requirements, enabling us to provide suitable sourcing options built on trust, transparency, quality, and commitment.',
  },
  {
    icon: '🎯',
    title: 'Our Vision',
    text: 'To establish Rushiputra Joint Venture as a trusted merchant trading partner for wood scrap and other internationally traded commodities, connecting reliable suppliers with buyers across global markets.',
  },
  {
    icon: '🌐',
    title: 'Our Mission',
    text: '“Your Requirement. Our Sourcing. Global Delivery.” — Committed to creating dependable international trade partnerships and delivering value through professional sourcing, coordination, and export services.',
  },
];

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container about__inner">

        {/* Left — text */}
        <div className="about__content">
          <span className="section-label">About Us</span>
          <h2 className="section-title">
            Rushiputra Joint Venture
          </h2>
          <p className="about__subtitle">
            Merchant Import &amp; Export | Wood Scrap Trading
          </p>
          <div className="about__lead">
            <p>
              Rushiputra Joint Venture, based in Gandhidham, Gujarat, India, is a merchant import-export company specializing in wood scrap trading and international sourcing based on client requirements.
            </p>
            <p>
              We work with suppliers and buyers to source and supply suitable wood scrap materials according to the quality, specifications, quantity, pricing, packaging, and delivery requirements of our clients.
            </p>
            <p>
              With our location in Gandhidham, one of India's important commercial and logistics hubs, we focus on efficient coordination of sourcing, documentation, logistics, and international shipments.
            </p>
          </div>
          <a href="#contact" className="btn-primary about__cta">
            Connect With Us
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* Right — pillars */}
        <div className="about__pillars">
          {PILLARS.map((p, i) => (
            <div key={i} className="about__pillar">
              <div className="about__pillar-icon">{p.icon}</div>
              <div>
                <h3 className="about__pillar-title">{p.title}</h3>
                <p className="about__pillar-text">{p.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
