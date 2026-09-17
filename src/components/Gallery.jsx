import { useState, useEffect, useRef, useCallback } from "react";
import "./Gallery.css";

const IMAGES = [
  { src: "/1.jpeg",  label: "Metal Scrap Bales",           tag: "Shipment"  },
  { src: "/2.jpeg",  label: "Metal Scrap Yard",            tag: "Products"  },
  { src: "/3.jpeg",  label: "Teak Wood Round Logs",        tag: "Packaging" },
  { src: "/4.jpeg",  label: "Teak Wood Square Logs",       tag: "Products"  },
  { src: "/5.jpeg",  label: "Teak Wood Sawn Timber",       tag: "Shipment"  },
  { src: "/6.jpeg"  },
  { src: "/7.jpeg"  },
  { src: "/8.jpeg"  },
  { src: "/9.jpeg"  },
  { src: "/10.jpeg" },
  { src: "/11.jpeg" },
  { src: "/12.jpeg" },
  { src: "/13.jpeg" },
  { src: "/14.jpeg" },
  { src: "/15.jpeg" },
  { src: "/16.jpeg" },
  { src: "/17.jpeg" },
  { src: "/18.jpeg" },
  { src: "/19.jpeg" },
  { src: "/20.jpeg" },
  { src: "/21.jpeg" },
  { src: "/22.jpeg" },
  { src: "/23.jpeg" },
  { src: "/24.jpeg" },
  { src: "/25.jpeg" },
];

const AUTOPLAY_DELAY = 4000;

export default function Gallery() {
  const [current, setCurrent]   = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isInView, setIsInView]  = useState(false);
  const thumbsRef  = useRef(null);
  const timerRef   = useRef(null);
  const sectionRef = useRef(null);
  const total      = IMAGES.length;

  // Start autoplay only when the gallery section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback((index, skipAnim = false) => {
    if (isAnimating && !skipAnim) return;
    const next = (index + total) % total;
    setIsAnimating(true);
    setCurrent(next);
    setTimeout(() => setIsAnimating(false), 450);
    // Scroll only the thumbnail strip horizontally — never touch page scroll
    if (thumbsRef.current) {
      const strip = thumbsRef.current;
      const thumb = strip.children[next];
      if (thumb) {
        const thumbLeft  = thumb.offsetLeft;
        const thumbWidth = thumb.offsetWidth;
        const stripWidth = strip.offsetWidth;
        strip.scrollTo({
          left: thumbLeft - stripWidth / 2 + thumbWidth / 2,
          behavior: 'smooth',
        });
      }
    }
  }, [isAnimating, total]);

  const goNext = useCallback(() => goTo(current + 1), [current, goTo]);
  const goPrev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    if (!isInView || isPaused || lightbox) { clearInterval(timerRef.current); return; }
    timerRef.current = setInterval(goNext, AUTOPLAY_DELAY);
    return () => clearInterval(timerRef.current);
  }, [isInView, isPaused, lightbox, goNext]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft")  goPrev();
      if (e.key === "Escape" && lightbox) setLightbox(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev, lightbox]);

  const img = IMAGES[current];

  return (
    <section id="gallery" className="gallery section" ref={sectionRef}>
      <div className="container">
        <div className="gallery__header">
          <span className="section-label">Our Work in Action</span>
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">
            Real products, real shipments — a look at how we operate on the ground.
          </p>
        </div>

        <div className="carousel" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div className="carousel__stage" onClick={() => setLightbox(true)}>
            <img key={current} src={img.src} alt={img.label || `Gallery image ${current + 1}`} className="carousel__image" loading="lazy" />
            {(img.tag || img.label) && (
              <div className="carousel__overlay">
                {img.tag && <span className="carousel__tag">{img.tag}</span>}
                {img.label && <span className="carousel__label">{img.label}</span>}
              </div>
            )}
            <span className="carousel__counter">{current + 1} / {total}</span>
            <span className="carousel__expand-hint" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
              Click to expand
            </span>
          </div>

          <button className="carousel__arrow carousel__arrow--prev" onClick={(e) => { e.stopPropagation(); goPrev(); }} aria-label="Previous image">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button className="carousel__arrow carousel__arrow--next" onClick={(e) => { e.stopPropagation(); goNext(); }} aria-label="Next image">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </button>

          <div className="carousel__progress">
            <div className="carousel__progress-bar" style={{ animationDuration: `${AUTOPLAY_DELAY}ms`, animationPlayState: (!isInView || isPaused) ? "paused" : "running" }} key={`${current}-${isPaused}-${isInView}`} />
          </div>
        </div>

        <div className="carousel__thumbs" ref={thumbsRef} role="list" aria-label="Image thumbnails">
          {IMAGES.map((im, i) => (
            <button
              key={i}
              role="listitem"
              className={`carousel__thumb${i === current ? " carousel__thumb--active" : ""}`}
              onClick={() => { goTo(i, true); setIsPaused(true); setTimeout(() => setIsPaused(false), 3000); }}
              aria-label={`Go to image ${i + 1}: ${im.label}`}
              aria-current={i === current ? "true" : undefined}
            >
              <img src={im.src} alt={im.label} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(false)} role="dialog" aria-modal="true">
          <button className="lightbox__close" onClick={() => setLightbox(false)} aria-label="Close lightbox">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
          <button className="lightbox__arrow lightbox__arrow--prev" onClick={(e) => { e.stopPropagation(); goPrev(); }} aria-label="Previous image">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img src={IMAGES[current].src} alt={IMAGES[current].label || `Gallery image ${current + 1}`} />
            <div className="lightbox__meta">
              {IMAGES[current].tag && <span className="lightbox__tag">{IMAGES[current].tag}</span>}
              {IMAGES[current].label && <p className="lightbox__caption">{IMAGES[current].label}</p>}
              <span className="lightbox__count">{current + 1} of {total}</span>
            </div>
          </div>
          <button className="lightbox__arrow lightbox__arrow--next" onClick={(e) => { e.stopPropagation(); goNext(); }} aria-label="Next image">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      )}
    </section>
  );
}
