import './Footer.css';

const NAV_LINKS = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Products',   href: '#products' },
  { label: 'Trade',      href: '#trade' },
  { label: 'Markets',    href: '#markets' },
  { label: 'Quality',    href: '#quality' },
  { label: 'Why Us',     href: '#why-us' },
  { label: 'Gallery',    href: '#gallery' },
  { label: 'Contact',    href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">

        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <img src="/logo.png" alt="RJV Global Trade" className="footer__logo-img" />
            <span className="footer__logo-text">Rushiputra Joint Venture</span>
          </div>
          <p className="footer__tagline">
            “Your Requirement. Our Sourcing. Global Delivery.”
          </p>
          <div className="footer__social">
                        <a href="tel:+919033337131" aria-label="Call us" className="footer__social-btn">📞</a>
            <a href="https://wa.me/919033337131" aria-label="WhatsApp" className="footer__social-btn">💬</a>
            <a href="mailto:rushiputrajointventure@gmail.com" aria-label="Email" className="footer__social-btn">✉️</a>
          </div>
        </div>

        {/* Nav links */}
        <div className="footer__nav">
          <p className="footer__nav-title">Quick Links</p>
          <ul>
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a href={link.href} className="footer__nav-link">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div className="footer__contact">
          <p className="footer__nav-title">Contact</p>
          <ul className="footer__contact-list">
                        <li><a href="tel:+919033337131">📞 +91 90333 37131</a></li>
            <li><a href="https://wa.me/919033337131">💬 +91 90333 37131</a></li>
                        <li><a href="mailto:rushiputrajointventure@gmail.com">✉️ rushiputrajointventure@gmail.com</a></li>
            <li>📍 Anjar GIDC-370110, Gujarat</li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} RJV Global Trade. All Rights Reserved.</p>
          <p className="footer__bottom-right">Made with care in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
