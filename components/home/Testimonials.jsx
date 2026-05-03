import React, { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    quote:
      "The presence of Pujya Gurudevshri transforms not just the seeker, but every space He inhabits. Dharampur has become a living temple of consciousness.",
    name: "Narendra Modi",
    title: "Prime Minister of India",
    image: "/images/testimonials/1.jpg",
  },
  {
    id: 2,
    quote:
      "In an age of noise, His silence speaks the loudest. A living master whose wisdom crosses every border of faith and geography.",
    name: "Testimonial Name 2",
    title: "Title / Role 2",
    image: "/images/testimonials/2.jpg",
  },
  {
    id: 3,
    quote:
      "What I witnessed in Dharampur is nothing short of a modern miracle born of pure compassion.",
    name: "Testimonial Name 3",
    title: "Title / Role 3",
    image: "/images/testimonials/3.jpg",
  },
  {
    id: 4,
    quote:
      "Gurudev does not merely teach spirituality — He lives it, breathes it, and makes it available to every soul.",
    name: "Testimonial Name 4",
    title: "Title / Role 4",
    image: "/images/testimonials/4.jpg",
  },
  {
    id: 5,
    quote:
      "The Mission Africa initiative under His guidance has brought dignity and hope to hundreds of thousands.",
    name: "Testimonial Name 5",
    title: "Title / Role 5",
    image: "/images/testimonials/5.jpg",
  },
];

const AUTO_INTERVAL = 8500;

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const sectionRef   = useRef(null);
  const eyebrowRef   = useRef(null);
  const titleARef    = useRef(null);
  const titleBRef    = useRef(null);
  const subRef       = useRef(null);
  const stageRef     = useRef(null);
  const portraitImgRef = useRef(null);
  const quoteRef     = useRef(null);
  const attrRef      = useRef(null);
  const thumbsRef    = useRef(null);
  const autoIdRef    = useRef(null);
  const pausedRef    = useRef(false);

  const total = testimonials.length;

  /* === Section entrance === */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
      });
      tl.to(eyebrowRef.current, {
        opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
      })
        .to(titleARef.current, {
          opacity: 1, clipPath: "inset(-20% 0% -20% 0%)",
          duration: 1.0, ease: "power3.out",
        }, "-=0.25")
        .to(titleBRef.current, {
          opacity: 1, clipPath: "inset(-20% 0% -20% 0%)",
          duration: 1.0, ease: "power3.out",
        }, "-=0.7")
        .to(subRef.current, {
          opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
        }, "-=0.5")
        .to(stageRef.current, {
          opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
        }, "-=0.4")
        .to(thumbsRef.current, {
          opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
        }, "-=0.5");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  /* === Switching transition — horizontal slide === */
  const goTo = useCallback((nextIdx, dir = 1) => {
    // dir: 1 = next (slide left out, in from right). -1 = prev.
    if (nextIdx === current) return;

    const exitX = dir === 1 ? -80 : 80;
    const enterX = dir === 1 ? 80 : -80;
    const portraitExit = dir === 1 ? -50 : 50;
    const portraitEnter = dir === 1 ? 50 : -50;

    if (quoteRef.current && attrRef.current && portraitImgRef.current) {
      const tl = gsap.timeline();

      // Slide current OUT
      tl.to([quoteRef.current, attrRef.current], {
        opacity: 0, x: exitX, duration: 0.45, ease: "power2.in",
      });
      tl.to(portraitImgRef.current, {
        opacity: 0, x: portraitExit, scale: 1.04, duration: 0.5, ease: "power2.in",
      }, "<");

      // Swap content at the midpoint
      tl.add(() => setCurrent(nextIdx));

      // Slide new IN from the opposite side
      tl.fromTo(
        portraitImgRef.current,
        { opacity: 0, x: portraitEnter, scale: 1.06 },
        { opacity: 1, x: 0, scale: 1, duration: 0.75, ease: "power3.out" },
        ">"
      );
      tl.fromTo(
        [quoteRef.current, attrRef.current],
        { opacity: 0, x: enterX },
        { opacity: 1, x: 0, duration: 0.65, ease: "power3.out", stagger: 0.08 },
        "<+=0.05"
      );
    } else {
      setCurrent(nextIdx);
    }
  }, [current]);

  /* === Auto-advance === */
  useEffect(() => {
    autoIdRef.current = setInterval(() => {
      if (!pausedRef.current) {
        goTo((current + 1) % total, 1);
      }
    }, AUTO_INTERVAL);
    return () => clearInterval(autoIdRef.current);
  }, [current, total, goTo]);

  const item = testimonials[current];

  return (
    <section
      ref={sectionRef}
      className="ts"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div className="ts-inner">
        {/* === HEADER === */}
        <div className="ts-head">
          <p ref={eyebrowRef} className="ts-eyebrow">
            <span className="ts-eyebrow-rule" />
            Praise · Reverence · Grace
          </p>
          <h2 className="ts-title">
            <span ref={titleARef} className="ts-title-a seasons">In Their</span>
            <span ref={titleBRef} className="ts-title-b seasons">Words</span>
          </h2>
          <p ref={subRef} className="ts-sub">
            Voices of leaders, seekers, and souls touched by Pujya Gurudevshri's
            living wisdom and the work of the mission.
          </p>
        </div>

        {/* === STAGE === */}
        <div ref={stageRef} className="ts-stage">
          <div className="ts-portrait-col">
            <div className="ts-portrait">
              <img
                ref={portraitImgRef}
                src={item.image}
                alt={item.name}
                className="ts-portrait-img"
              />
              <span className="ts-portrait-frame" />
              <span className="ts-corner ts-corner--tl" />
              <span className="ts-corner ts-corner--tr" />
              <span className="ts-corner ts-corner--bl" />
              <span className="ts-corner ts-corner--br" />
            </div>
            <div className="ts-portrait-num seasons">
              {String(current + 1).padStart(2, "0")}
              <span className="ts-portrait-total">/{String(total).padStart(2, "0")}</span>
            </div>
          </div>

          <div className="ts-quote-col">
            <span className="ts-quote-mark seasons">“</span>
            <p ref={quoteRef} className="ts-quote seasons">
              {item.quote}
            </p>
            <div ref={attrRef} className="ts-attr">
              <span className="ts-attr-rule" />
              <div className="ts-attr-text">
                <p className="ts-attr-name seasons">{item.name}</p>
                <p className="ts-attr-role">{item.title}</p>
              </div>
            </div>
          </div>
        </div>

        {/* === THUMBNAILS === */}
        <div ref={thumbsRef} className="ts-thumbs">
          <span className="ts-thumbs-label">More voices</span>
          <div className="ts-thumbs-row">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                aria-label={t.name}
                className={`ts-thumb ${i === current ? "is-active" : ""}`}
              >
                <span className="ts-thumb-ring" />
                <img src={t.image} alt={t.name} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .ts {
          position: relative;
          padding: clamp(96px, 10vw, 160px) clamp(24px, 4.167vw, 80px);
          overflow: hidden;
          background:
            radial-gradient(70% 50% at 18% 0%, rgba(201, 162, 87, 0.10), transparent 60%),
            radial-gradient(60% 50% at 100% 100%, rgba(167, 98, 40, 0.07), transparent 60%),
            linear-gradient(180deg, #fbf6e7 0%, #f4ebd0 100%);
          color: var(--color-burgundy-deep, #331418);
        }
        .ts::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.05;
          mix-blend-mode: multiply;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
        }
        .ts-inner {
          position: relative;
          z-index: 2;
          max-width: 1480px;
          margin: 0 auto;
        }

        /* === HEADER === */
        .ts-head {
          margin: 0 0 64px;
          max-width: 740px;
        }
        .ts-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          font-family: "Montserrat", sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--color-rust, #8a432f);
          margin: 0 0 24px;
          opacity: 0;
          transform: translateY(8px);
        }
        .ts-eyebrow-rule {
          width: 28px;
          height: 1px;
          background: var(--color-gold, #c9a257);
        }
        .ts-title {
          display: block;
          margin: 0 0 24px;
          font-family: "The Seasons", serif !important;
          font-weight: 400;
          color: var(--color-burgundy-deep, #331418);
        }
        .ts-title-a {
          display: block;
          font-family: "The Seasons", serif !important;
          font-size: clamp(28px, 3.2vw, 52px);
          color: rgba(51, 20, 24, 0.78);
          letter-spacing: -0.005em;
          line-height: 1.1;
          margin-bottom: 0.04em;
          padding-left: 0.05em;
          opacity: 0;
          clip-path: inset(-20% 100% -20% 0%);
        }
        .ts-title-b {
          display: block;
          font-family: "The Seasons", serif !important;
          font-style: italic;
          color: var(--color-gold, #c9a257);
          font-size: clamp(80px, 11.5vw, 192px);
          letter-spacing: -0.025em;
          line-height: 0.92;
          padding: 0.05em 0.04em 0;
          margin-left: -0.04em;
          opacity: 0;
          clip-path: inset(-20% 100% -20% 0%);
        }
        .ts-sub {
          font-family: "Montserrat", sans-serif;
          max-width: 580px;
          font-size: clamp(14px, 1.05vw, 16px);
          line-height: 1.8;
          color: rgba(40, 37, 38, 0.75);
          margin: 24px 0 0;
          opacity: 0;
          transform: translateY(10px);
        }

        /* === STAGE === */
        .ts-stage {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: clamp(40px, 5vw, 96px);
          align-items: center;
          margin: 0 0 80px;
          opacity: 0;
          transform: translateY(20px);
        }

        /* Portrait column */
        .ts-portrait-col {
          position: relative;
        }
        .ts-portrait {
          position: relative;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          border-radius: 4px;
          background: #efe6cf;
          box-shadow:
            0 30px 70px -22px rgba(51, 20, 24, 0.25),
            0 8px 18px -6px rgba(51, 20, 24, 0.10);
        }
        .ts-portrait-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
        }
        .ts-portrait-frame {
          position: absolute;
          inset: 14px;
          border: 1px solid rgba(248, 241, 229, 0.42);
          border-radius: 2px;
          pointer-events: none;
          z-index: 2;
        }
        .ts-corner {
          position: absolute;
          width: 24px;
          height: 24px;
          border: 1px solid var(--color-gold, #c9a257);
          z-index: 3;
          pointer-events: none;
        }
        .ts-corner--tl { top: 18px; left: 18px;  border-right: none; border-bottom: none; }
        .ts-corner--tr { top: 18px; right: 18px; border-left: none;  border-bottom: none; }
        .ts-corner--bl { bottom: 18px; left: 18px;  border-right: none; border-top: none; }
        .ts-corner--br { bottom: 18px; right: 18px; border-left: none;  border-top: none; }
        .ts-portrait-num {
          position: absolute;
          top: -8px;
          right: -10px;
          font-family: "The Seasons", serif !important;
          font-style: italic;
          font-size: clamp(48px, 4vw, 72px);
          color: var(--color-gold, #c9a257);
          line-height: 1;
          z-index: 4;
          pointer-events: none;
          text-shadow: 0 6px 24px rgba(51, 20, 24, 0.18);
        }
        .ts-portrait-total {
          font-size: 0.5em;
          color: rgba(51, 20, 24, 0.42);
          font-style: italic;
          margin-left: 2px;
        }

        /* Quote column */
        .ts-quote-col {
          position: relative;
          padding-left: 0;
        }
        .ts-quote-mark {
          display: block;
          font-family: "The Seasons", serif !important;
          font-size: clamp(120px, 11vw, 180px);
          line-height: 0.5;
          color: var(--color-gold, #c9a257);
          margin: 0 0 28px;
          opacity: 0.45;
        }
        .ts-quote {
          font-family: "The Seasons", serif !important;
          font-style: italic;
          font-size: clamp(22px, 2.4vw, 36px);
          line-height: 1.4;
          color: var(--color-burgundy-deep, #331418);
          margin: 0 0 36px;
          letter-spacing: -0.005em;
          max-width: 720px;
        }
        .ts-attr {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .ts-attr-rule {
          width: 56px;
          height: 1px;
          background: var(--color-gold, #c9a257);
          flex-shrink: 0;
        }
        .ts-attr-name {
          font-family: "The Seasons", serif !important;
          font-size: clamp(18px, 1.5vw, 22px);
          color: var(--color-burgundy-deep, #331418);
          margin: 0 0 4px;
          letter-spacing: 0.02em;
        }
        .ts-attr-role {
          font-family: "Montserrat", sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--color-rust, #8a432f);
          margin: 0;
        }

        /* === THUMBNAILS === */
        .ts-thumbs {
          padding-top: 36px;
          border-top: 1px solid rgba(51, 20, 24, 0.14);
          opacity: 0;
          transform: translateY(12px);
        }
        .ts-thumbs-label {
          display: block;
          font-family: "Montserrat", sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--color-rust, #8a432f);
          margin-bottom: 18px;
        }
        .ts-thumbs-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .ts-thumb {
          position: relative;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          padding: 0;
          border: none;
          background: none;
          cursor: pointer;
          overflow: visible;
          transition: transform 0.3s ease;
        }
        .ts-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          object-position: center 30%;
          opacity: 0.6;
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        .ts-thumb-ring {
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 1px solid var(--color-gold, #c9a257);
          opacity: 0;
          transform: scale(0.94);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        .ts-thumb:hover img { opacity: 0.9; }
        .ts-thumb.is-active img {
          opacity: 1;
          transform: scale(1.04);
        }
        .ts-thumb.is-active .ts-thumb-ring {
          opacity: 1;
          transform: scale(1);
        }
        .ts-thumb.is-active {
          transform: translateY(-2px);
        }

        /* === RESPONSIVE === */
        @media (max-width: 1024px) {
          .ts-stage {
            grid-template-columns: 1fr;
            gap: 56px;
          }
          .ts-portrait-col { max-width: 460px; }
          .ts-portrait-num { right: 0; }
        }
        @media (max-width: 700px) {
          .ts {
            padding: 72px 22px;
          }
          .ts-head { margin-bottom: 40px; }
          .ts-title-a { font-size: clamp(22px, 6.5vw, 36px); }
          .ts-title-b { font-size: clamp(58px, 16vw, 100px); line-height: 0.95; }
          .ts-sub { font-size: 14px; line-height: 1.7; }
          .ts-stage { gap: 36px; margin-bottom: 56px; }
          .ts-portrait-col { max-width: 100%; }
          .ts-portrait { aspect-ratio: 4 / 4.4; }
          .ts-quote-mark { font-size: 84px; margin-bottom: 14px; }
          .ts-quote { font-size: 19px; line-height: 1.55; margin-bottom: 24px; }
          .ts-attr { gap: 12px; }
          .ts-attr-rule { width: 32px; }
          .ts-attr-name { font-size: 16px; }
          .ts-attr-role { font-size: 10px; letter-spacing: 0.2em; }
          .ts-corner { width: 18px; height: 18px; }
          .ts-corner--tl { top: 12px; left: 12px; }
          .ts-corner--tr { top: 12px; right: 12px; }
          .ts-corner--bl { bottom: 12px; left: 12px; }
          .ts-corner--br { bottom: 12px; right: 12px; }
          .ts-portrait-num { font-size: 40px; top: -2px; right: -2px; }
          .ts-thumbs { padding-top: 28px; }
          .ts-thumbs-row {
            gap: 12px;
            overflow-x: auto;
            scrollbar-width: none;
            padding-bottom: 4px;
            margin: 0 -22px;
            padding-left: 22px;
            padding-right: 22px;
          }
          .ts-thumbs-row::-webkit-scrollbar { display: none; }
          .ts-thumb { width: 56px; height: 56px; flex-shrink: 0; }
        }
      `}</style>
    </section>
  );
}

export default Testimonials;
