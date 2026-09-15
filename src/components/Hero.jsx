import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Trusted Global Trade Partner
          </div>

          <h1 className="hero__headline">
            Connecting Global Markets with<br />
            <em>Reliable Indian Supply</em>
          </h1>

          <p className="hero__sub">
            Trusted importers &amp; exporters of Wood, Metal Scrap, and Building Materials —<br />
            delivering quality, on time, worldwide.
          </p>

          <div className="hero__actions">
            <a href="#products" className="btn-primary">
              Explore Products
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
