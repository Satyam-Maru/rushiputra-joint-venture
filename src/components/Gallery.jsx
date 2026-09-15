import { useState } from 'react';
import './Gallery.css';

const IMAGES = [
  { src: '/3.jpeg', label: 'Timber Logs — Container', tag: 'Packaging' },
  { src: '/4.jpeg', label: 'Fresh Cut Timber', tag: 'Products' },
  { src: '/5.jpeg', label: 'Log Loading Operations', tag: 'Shipment' },
  { src: '/1.jpeg', label: 'Metal Scrap', tag: 'Shipment'  },
  { src: '/2.jpeg', label: 'Metal Scrap Yard', tag: 'Products'  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="gallery" className="gallery section">
      <div className="container">

        {/* Header */}
        <div className="gallery__header">
          <span className="section-label">Our Work in Action</span>
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">
            Real products, real shipments — a look at how we operate on the ground.
          </p>
        </div>

        {/* Grid */}
        <div className="gallery__grid">
          {IMAGES.map((img, i) => (
            <button
              key={i}
              className={`gallery-item gallery-item--${i}`}
              onClick={() => setLightbox(img)}
              aria-label={`View ${img.label}`}
            >
              <img src={img.src} alt={img.label} loading="lazy" />
              <div className="gallery-item__overlay">
                <span className="gallery-item__tag">{img.tag}</span>
                <span className="gallery-item__label">{img.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <button className="lightbox__close" onClick={() => setLightbox(null)} aria-label="Close">✕</button>
          <div className="lightbox__content" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.label} />
            <p className="lightbox__caption">{lightbox.label}</p>
          </div>
        </div>
      )}
    </section>
  );
}
