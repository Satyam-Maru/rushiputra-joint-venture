import './About.css';

const PILLARS = [
  {
    icon: '🤝',
    title: 'Our Story',
    text: 'Started with a simple goal — make cross-border trade of wood, ply, and metal scrap easier, faster, and more reliable.',
  },
  {
    icon: '🌐',
    title: 'Our Vision',
    text: 'To be a globally trusted trade partner known for quality, consistency, and integrity across every market we serve.',
  },
  {
    icon: '👥',
    title: 'Management',
    text: 'Led by a team with deep industry expertise across sourcing, logistics, and international trade compliance.',
  },
];

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container about__inner">

        {/* Left — text */}
        <div className="about__content">
          <span className="section-label">Who We Are</span>
          <h2 className="section-title">
            A Trusted Name in<br />Global Raw Material Trade
          </h2>
          <p className="about__lead">
            We are a trusted name in the import-export trade of wood, plywood,
            and metal scrap. With years of hands-on experience and a strong
            global network, we help businesses source and supply raw materials
            with confidence.
          </p>
          <a href="#contact" className="btn-primary about__cta">
            Learn More About Us
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
