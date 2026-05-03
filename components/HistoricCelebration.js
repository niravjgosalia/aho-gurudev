import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    num: "01",
    label: "Spiritual Festivals",
    desc:
      "Sacred gatherings of music, silence, and devotion held beneath open skies.",
    image: "/images/events/event1.jpg",
  },
  {
    num: "02",
    label: "Social Impact",
    desc:
      "Hospitals, schools, and eco-villages — service offered as worship.",
    image: "/images/socialprojects/1.jpg",
  },
  {
    num: "03",
    label: "Cultural Carnivals",
    desc:
      "Heritage walks and pilgrim journeys spanning continents and centuries.",
    image: "/images/historic-celeberation2.png",
  },
];

function HistoricCelebration() {
  const sectionRef = useRef(null);
  const dateRef = useRef(null);
  const titleAhoRef = useRef(null);
  const titleGuruRef = useRef(null);
  const titleKalyanRef = useRef(null);
  const subRef = useRef(null);
  const cardRefs = useRef([]);
  const cardImgRefs = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      tl.to(dateRef.current, {
        opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
      })
        .to(titleAhoRef.current, {
          opacity: 1, x: 0, duration: 0.7, ease: "power2.out",
        }, "-=0.3")
        .to(titleGuruRef.current, {
          opacity: 1, clipPath: "inset(-20% 0% -20% 0%)",
          duration: 0.9, ease: "power3.out",
        }, "-=0.4")
        .to(titleKalyanRef.current, {
          opacity: 1, clipPath: "inset(-20% 0% -20% 0%)",
          duration: 0.9, ease: "power3.out",
        }, "-=0.5")
        .to(subRef.current, {
          opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
        }, "-=0.4")
        .to(cardRefs.current.filter(Boolean), {
          opacity: 1,
          y: 0,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.16,
        }, "-=0.3")
        .to(ctaRef.current, {
          opacity: 1, y: 0, duration: 0.5, ease: "power2.out",
        }, "-=0.4");

      // Subtle parallax on each card image
      cardImgRefs.current.filter(Boolean).forEach((img, i) => {
        gsap.fromTo(
          img,
          { y: -20 },
          {
            y: 20,
            ease: "none",
            scrollTrigger: {
              trigger: img.closest(".hc-card"),
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="hc">
      <div className="hc-inner">
        {/* Date pill */}
        <div ref={dateRef} className="hc-date">
          <span className="hc-date-rule" />
          <span>26 Sep 2025&nbsp;&mdash;&nbsp;26 Sep 2026</span>
          <span className="hc-date-rule" />
        </div>

        {/* Editorial headline */}
        <h2 className="hc-title">
          <span ref={titleAhoRef} className="hc-title-aho seasons">60th</span>{" "}
          <span ref={titleGuruRef} className="hc-title-guru seasons">Year</span>{" "}
          <span ref={titleKalyanRef} className="hc-title-kalyan seasons">Events</span>
        </h2>

        <p ref={subRef} className="hc-sub">
          A year-long celebration honouring Pujya Gurudevshri's life — spiritual
          festivals, service initiatives, and cultural carnivals across&nbsp;
          <em className="hc-sub-em">60+ cities and 6 continents</em>.
        </p>

        {/* 3-up pillar cards */}
        <div className="hc-grid">
          {pillars.map((p, i) => (
            <article
              key={p.num}
              ref={(el) => (cardRefs.current[i] = el)}
              className="hc-card"
            >
              <div className="hc-card-img-wrap">
                <img
                  ref={(el) => (cardImgRefs.current[i] = el)}
                  src={p.image}
                  alt={p.label}
                  className="hc-card-img"
                />
                <div className="hc-card-grad" />
                <div className="hc-card-frame" />
                {/* corner brackets */}
                <span className="hc-corner hc-corner--tl" />
                <span className="hc-corner hc-corner--tr" />
                <span className="hc-corner hc-corner--bl" />
                <span className="hc-corner hc-corner--br" />
                {/* hover plus */}
                <span className="hc-plus" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" strokeWidth="1.5">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </div>
              <div className="hc-card-meta">
                <span className="hc-card-num seasons">{p.num}</span>
                <div className="hc-card-text">
                  <h3 className="hc-card-label">{p.label}</h3>
                  <p className="hc-card-desc">{p.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Final CTA */}
        <div ref={ctaRef} className="hc-cta">
          <a href="#calendar" className="hc-cta-link">
            <span>Explore the Calendar</span>
            <span className="hc-cta-arrow">
              <svg width="22" height="12" viewBox="0 0 22 12" fill="none">
                <path d="M0 6h20M16 1l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      <style jsx>{`
        .hc {
          position: relative;
          padding: clamp(80px, 9vw, 140px) clamp(24px, 4.167vw, 80px) clamp(80px, 9vw, 140px);
          background-color: #f5eddd;
          background-image:
            linear-gradient(180deg, rgba(252, 248, 238, 0.55) 0%, rgba(246, 239, 216, 0.65) 60%, rgba(241, 232, 210, 0.85) 100%),
            url("/images/home/aho-guru-kalyan-bg.png");
          background-size: cover, cover;
          background-position: center top, center top;
          background-repeat: no-repeat, no-repeat;
          background-attachment: scroll, scroll;
          overflow: hidden;
        }
        .hc::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.05;
          mix-blend-mode: multiply;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
        }
        .hc-inner {
          position: relative;
          z-index: 2;
          max-width: 1480px;
          margin: 0 auto;
        }

        .hc-date {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          font-family: "Montserrat", sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--color-rust, #8a432f);
          margin: 0 0 28px;
          opacity: 0;
          transform: translateY(8px);
        }
        .hc-date-rule {
          width: 28px;
          height: 1px;
          background: var(--color-gold, #c9a257);
        }

        .hc-title {
          margin: 0 0 28px;
          line-height: 0.95;
          font-weight: 400;
          color: var(--color-burgundy-deep, #331418);
          letter-spacing: -0.015em;
          font-size: clamp(56px, 9.5vw, 168px);
        }
        .hc-title-aho,
        .hc-title-guru,
        .hc-title-kalyan {
          display: inline-block;
          font-family: "The Seasons", serif !important;
        }
        .hc-title-aho {
          font-style: italic;
          color: var(--color-rust, #8a432f);
          opacity: 0;
          transform: translateX(-12px);
          margin-right: 8px;
        }
        .hc-title-guru {
          font-style: italic;
          color: var(--color-gold, #c9a257);
          opacity: 0;
          clip-path: inset(-20% 100% -20% 0%);
          padding: 0 0.05em;
        }
        .hc-title-kalyan {
          background: linear-gradient(180deg, #331418 0%, #5b1d33 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          opacity: 0;
          clip-path: inset(-20% 100% -20% 0%);
        }

        .hc-sub {
          font-family: "Montserrat", sans-serif;
          max-width: 580px;
          font-size: clamp(14px, 1.05vw, 16px);
          line-height: 1.8;
          color: rgba(40, 37, 38, 0.78);
          margin: 0 0 64px;
          opacity: 0;
          transform: translateY(10px);
        }
        .hc-sub-em {
          font-family: "The Seasons", serif !important;
          font-style: italic;
          color: var(--color-burgundy-deep, #331418);
          font-size: 1.05em;
        }

        /* === GRID === */
        .hc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(24px, 2.4vw, 44px);
          margin: 0 0 88px;
        }
        .hc-card {
          opacity: 0;
          transform: translateY(40px);
          clip-path: inset(0% 0% 100% 0%);
          cursor: pointer;
        }
        .hc-card-img-wrap {
          position: relative;
          aspect-ratio: 3 / 4.4;
          overflow: hidden;
          border-radius: 4px;
          box-shadow:
            0 30px 70px -22px rgba(51, 20, 24, 0.32),
            0 8px 18px -6px rgba(51, 20, 24, 0.18);
        }
        .hc-card-img {
          position: absolute;
          inset: -10% 0 -10% 0;
          width: 100%;
          height: 120%;
          object-fit: cover;
          will-change: transform;
          transition: transform 0.7s ease;
        }
        .hc-card:hover .hc-card-img {
          transform: scale(1.04);
        }
        .hc-card-grad {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 60%,
            rgba(51, 20, 24, 0.45) 100%
          );
          pointer-events: none;
          z-index: 1;
        }
        .hc-card-frame {
          position: absolute;
          inset: 12px;
          border: 1px solid rgba(248, 241, 229, 0.32);
          border-radius: 2px;
          pointer-events: none;
          z-index: 2;
        }
        .hc-corner {
          position: absolute;
          width: 22px;
          height: 22px;
          border: 1px solid var(--color-gold, #c9a257);
          z-index: 3;
          opacity: 0;
          transition: opacity 0.4s ease, transform 0.4s ease;
          pointer-events: none;
        }
        .hc-corner--tl { top: 18px; left: 18px;  border-right: none; border-bottom: none; transform: translate(-4px, -4px); }
        .hc-corner--tr { top: 18px; right: 18px; border-left: none;  border-bottom: none; transform: translate( 4px, -4px); }
        .hc-corner--bl { bottom: 18px; left: 18px;  border-right: none; border-top: none; transform: translate(-4px,  4px); }
        .hc-corner--br { bottom: 18px; right: 18px; border-left: none;  border-top: none; transform: translate( 4px,  4px); }
        .hc-card:hover .hc-corner {
          opacity: 1;
          transform: translate(0, 0);
        }
        .hc-plus {
          position: absolute;
          top: 22px;
          right: 22px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(248, 241, 229, 0.55);
          background: rgba(51, 20, 24, 0.20);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 4;
          color: #f8f1e5;
          opacity: 0;
          transform: scale(0.85);
          transition: opacity 0.35s ease, transform 0.35s ease, background 0.3s ease;
        }
        .hc-plus svg { stroke: currentColor; }
        .hc-card:hover .hc-plus {
          opacity: 1;
          transform: scale(1);
        }

        .hc-card-meta {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          padding: 26px 6px 0;
        }
        .hc-card-num {
          font-size: clamp(32px, 2.8vw, 44px);
          font-style: italic;
          color: var(--color-gold, #c9a257);
          line-height: 1;
          opacity: 0.85;
          font-family: "The Seasons", serif !important;
        }
        .hc-card-text { flex: 1; }
        .hc-card-label {
          font-family: "The Seasons", serif !important;
          font-size: clamp(22px, 1.9vw, 30px);
          color: var(--color-burgundy-deep, #331418);
          margin: 0 0 8px;
          font-weight: 500;
          line-height: 1.2;
        }
        .hc-card-desc {
          font-family: "Montserrat", sans-serif;
          font-size: 14px;
          line-height: 1.65;
          color: rgba(40, 37, 38, 0.7);
          margin: 0;
        }

        /* === CTA === */
        .hc-cta {
          display: flex;
          justify-content: center;
          opacity: 0;
          transform: translateY(8px);
        }
        .hc-cta-link {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          font-family: "Montserrat", sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--color-burgundy-deep, #331418);
          text-decoration: none;
          padding: 16px 32px;
          border: 1px solid var(--color-burgundy-deep, #331418);
          border-radius: 9999px;
          transition: gap 0.3s ease, background 0.3s ease, color 0.3s ease;
        }
        .hc-cta-arrow {
          display: inline-flex;
          align-items: center;
          color: var(--color-gold, #c9a257);
          transition: color 0.3s ease, transform 0.3s ease;
        }
        .hc-cta-link:hover {
          gap: 22px;
          background: var(--color-burgundy-deep, #331418);
          color: var(--color-cream, #f8f1e5);
        }
        .hc-cta-link:hover .hc-cta-arrow {
          color: var(--color-gold, #c9a257);
          transform: translateX(2px);
        }

        /* === RESPONSIVE === */
        @media (max-width: 1024px) {
          .hc-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 26px;
          }
          .hc-card:nth-child(3) {
            grid-column: 1 / -1;
            max-width: 600px;
            margin: 0 auto;
            width: 100%;
          }
          .hc-card-img-wrap { aspect-ratio: 4 / 5; }
        }
        @media (max-width: 700px) {
          .hc {
            padding: 64px 22px 80px;
          }
          .hc-grid {
            grid-template-columns: 1fr;
            gap: 32px;
            margin-bottom: 56px;
          }
          .hc-card:nth-child(3) { max-width: none; }
          .hc-card-img-wrap { aspect-ratio: 4 / 5; }
          .hc-title { font-size: clamp(46px, 12vw, 92px); }
          .hc-date {
            font-size: 10px;
            letter-spacing: 0.28em;
            gap: 10px;
          }
          .hc-date-rule { width: 18px; }
          .hc-sub { margin-bottom: 44px; font-size: 14px; }
          .hc-cta-link { padding: 14px 24px; font-size: 11px; gap: 12px; }
          .hc-corner { width: 18px; height: 18px; }
        }
        @media (max-width: 380px) {
          .hc-title { font-size: 42px; }
        }
      `}</style>
    </section>
  );
}

export default HistoricCelebration;
