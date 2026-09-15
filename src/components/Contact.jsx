import './Contact.css';

const DETAILS = [
  {
    icon: '📞',
    label: 'Phone',
    value: '+91 90333 37131',
    href: 'tel:+919033337131',
  },
  {
    icon: '💬',
    label: 'WhatsApp',
    value: '+91 90333 37131',
    href: 'https://wa.me/919033337131',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'rushiputrajointventure@gmail.com',
    href: 'mailto:rushiputrajointventure@gmail.com',
  },
  {
    icon: '📍',
    label: 'Address',
    value: 'Navkar Industrial Park, Sr. No. 475, Plot No 13, Shri Ram Party Plot Road, Anjar GIDC-370110, Gujarat',
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container contact__inner">

        {/* Left — details */}
        <div className="contact__info">
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">Let's Talk Trade</h2>
          <p className="contact__lead">
            Have a sourcing requirement or want to discuss a trade opportunity?
            Reach out — our team is ready to help.
          </p>

          <div className="contact__details">
            {DETAILS.map(d => (
              <div key={d.label} className="contact-detail">
                <span className="contact-detail__icon">{d.icon}</span>
                <div>
                  <p className="contact-detail__label">{d.label}</p>
                  {d.href ? (
                    <a href={d.href} className="contact-detail__value contact-detail__value--link">
                      {d.value}
                    </a>
                  ) : (
                    <p className="contact-detail__value">{d.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="contact__actions">
                      <a href="tel:+919033337131" className="btn-primary">
              📞 Call Now
            </a>
            <a href="https://wa.me/919033337131" className="btn-outline">
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
