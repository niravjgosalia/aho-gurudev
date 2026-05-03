import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function WhoIsGurudev() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleSmallRef = useRef(null);
  const titleBigRef = useRef(null);
  const titleQRef = useRef(null);
  const bodyRef = useRef(null);
  const quoteRef = useRef(null);
  const ctaRef = useRef(null);
  const photoWrapRef = useRef(null);
  const photoImgRef = useRef(null);
  const yearRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });

      tl.to(eyebrowRef.current, {
        opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
      })
        .to(titleSmallRef.current, {
          opacity: 1, x: 0, duration: 0.6, ease: "power2.out",
        }, "-=0.3")
        .to(titleBigRef.current, {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.0, ease: "power3.out",
        }, "-=0.3")
        .to(titleQRef.current, {
          opacity: 1, scale: 1, rotation: 0, duration: 0.7, ease: "back.out(1.7)",
        }, "-=0.5")
        .to(bodyRef.current, {
          opacity: 1, y: 0, duration: 0.7, ease: "power2.out",
        }, "-=0.5")
        .to(quoteRef.current, {
          opacity: 1, x: 0, duration: 0.7, ease: "power2.out",
        }, "-=0.4")
        .to(ctaRef.current, {
          opacity: 1, y: 0, duration: 0.5, ease: "power2.out",
        }, "-=0.3")
        // Photo reveals from the bottom with a clip mask
        .to(photoWrapRef.current, {
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.3, ease: "power3.out",
        }, "-=1.2")
        .to(yearRef.current, {
          opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
        }, "-=0.4");

      // Slow Ken Burns drift on the portrait while in view
      gsap.fromTo(
        photoImgRef.current,
        { scale: 1.0 },
        {
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="wig">
      <div className="wig-stack">
        <p ref={eyebrowRef} className="wig-eyebrow">
          <span className="wig-eyebrow-mark" />
          The Living Master&nbsp;·&nbsp;A 60 Year Journey
        </p>

        <h2 className="wig-title seasons">
          <span ref={titleSmallRef} className="wig-title-sm">Who is</span>
          <span className="wig-title-row">
            <span ref={titleBigRef} className="wig-title-big">Gurudev</span>
            <span ref={titleQRef} className="wig-title-q seasons">?</span>
          </span>
        </h2>

        <div ref={photoWrapRef} className="wig-photo">
          <img
            ref={photoImgRef}
            src="/images/gurudev-portrait.jpg"
            alt="Pujya Gurudevshri Rakeshji"
          />
          <div className="wig-photo-frame" />
          <div className="wig-photo-grad" />
        </div>

        <p ref={bodyRef} className="wig-body">
          Born amongst us, Pujya Gurudevshri Rakeshji lives beyond us. He walks
          the earth as an embodiment of enlightenment — a primal force of
          divinity, awakening souls to their pure, peaceful, powerful nature.
        </p>

        <div ref={quoteRef} className="wig-quote">
          <span className="wig-quote-mark">“</span>
          <em>To uplift, to awaken, to liberate.</em>
        </div>

        <div ref={ctaRef} className="wig-cta">
          <button className="wig-cta-arrow" aria-label="Explore">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </button>
          <button className="wig-cta-pill">His Sacred Life</button>
        </div>
      </div>

      <style jsx>{`
        .wig {
          position: relative;
          padding: clamp(80px, 10vw, 160px) clamp(24px, 4.167vw, 80px);
          overflow: hidden;
          background:
            radial-gradient(80% 60% at 80% 30%, rgba(201, 162, 87, 0.08), transparent 60%),
            linear-gradient(180deg, #fbf7ee 0%, #f4ecd9 100%);
        }
        .wig::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.04;
          mix-blend-mode: multiply;
          pointer-events: none;
          z-index: 0;
        }

        .wig-stack {
          position: relative;
          z-index: 2;
          max-width: 760px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .wig-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
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
        .wig-eyebrow-mark {
          width: 28px;
          height: 1px;
          background: var(--color-gold, #c9a257);
        }

        .wig-title {
          margin: 0 0 28px;
          line-height: 0.95;
          font-weight: 400;
          color: var(--color-burgundy-deep, #331418);
          letter-spacing: -0.01em;
        }
        .wig-title-sm {
          display: inline-block;
          font-family: "The Seasons", serif !important;
          font-style: italic;
          color: var(--color-rust, #8a432f);
          font-size: clamp(22px, 2.4vw, 38px);
          letter-spacing: 0.005em;
          margin-bottom: 6px;
          opacity: 0;
          transform: translateX(-12px);
        }
        .wig-title-row {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 6px;
          margin-top: 4px;
        }
        .wig-title-big {
          display: inline-block;
          font-family: "The Seasons", serif !important;
          font-size: clamp(52px, 9vw, 156px);
          letter-spacing: -0.025em;
          opacity: 0;
          clip-path: inset(0% 100% 0% 0%);
          background: linear-gradient(180deg, #331418 0%, #5b1d33 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .wig-title-q {
          display: inline-block;
          font-family: "The Seasons", serif !important;
          font-size: clamp(52px, 9vw, 156px);
          font-style: italic;
          color: var(--color-gold, #c9a257);
          line-height: 0.95;
          opacity: 0;
          transform: scale(0.6) rotate(-12deg);
          transform-origin: bottom left;
          margin-left: 4px;
        }

        .wig-body {
          font-family: "Montserrat", sans-serif;
          font-size: clamp(14px, 1.05vw, 16px);
          color: rgba(40, 37, 38, 0.78);
          opacity: 0;
          transform: translateY(12px);
          line-height: 1.8;
          max-width: 560px;
          margin: 0 auto 32px;
        }

        .wig-quote {
          position: relative;
          padding: 16px 28px;
          margin: 0 auto 36px;
          border-top: 1px solid rgba(201, 162, 87, 0.4);
          border-bottom: 1px solid rgba(201, 162, 87, 0.4);
          font-family: "The Seasons", serif;
          font-size: clamp(18px, 1.5vw, 22px);
          color: var(--color-burgundy-deep, #331418);
          line-height: 1.5;
          max-width: 520px;
          opacity: 0;
          transform: translateX(-12px);
          text-align: center;
        }
        .wig-quote em {
          font-style: italic;
        }
        .wig-quote-mark {
          font-family: "The Seasons", serif;
          color: var(--color-gold, #c9a257);
          font-size: 1.6em;
          line-height: 0;
          position: relative;
          top: 0.18em;
          margin-right: 6px;
        }

        .wig-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          opacity: 0;
          transform: translateY(8px);
        }
        .wig-cta-arrow {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1px solid var(--color-burgundy-deep, #331418);
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .wig-cta-arrow svg { stroke: var(--color-burgundy-deep, #331418); transition: stroke 0.3s ease, transform 0.3s ease; }
        .wig-cta-arrow:hover { background: var(--color-burgundy-deep, #331418); }
        .wig-cta-arrow:hover svg { stroke: var(--color-gold, #c9a257); transform: translate(2px, -2px); }

        .wig-cta-pill {
          font-family: "Montserrat", sans-serif;
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--color-burgundy-deep, #331418);
          background: transparent;
          border: 1px solid var(--color-burgundy-deep, #331418);
          border-radius: 9999px;
          padding: 14px 32px;
          cursor: pointer;
          transition: background 0.3s ease, color 0.3s ease;
        }
        .wig-cta-pill:hover {
          background: var(--color-burgundy-deep, #331418);
          color: var(--color-gold, #c9a257);
        }

        /* === PORTRAIT === */
        .wig-photo {
          position: relative;
          width: 100%;
          max-width: 460px;
          aspect-ratio: 4 / 5;
          margin: 0 auto 36px;
          border-radius: 4px;
          overflow: hidden;
          box-shadow:
            0 30px 80px -20px rgba(51, 20, 24, 0.28),
            0 8px 22px -8px rgba(51, 20, 24, 0.18);
          opacity: 0;
          clip-path: inset(0% 0% 100% 0%);
        }
        .wig-photo img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 25%;
          will-change: transform;
        }
        .wig-photo-frame {
          position: absolute;
          inset: 14px;
          border: 1px solid rgba(248, 241, 229, 0.45);
          border-radius: 2px;
          pointer-events: none;
          z-index: 2;
        }
        .wig-photo-grad {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 55%,
            rgba(51, 20, 24, 0.35) 100%
          );
          pointer-events: none;
          z-index: 1;
        }
        .wig-photo-year {
          position: absolute;
          left: 24px;
          bottom: 22px;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 12px;
          color: #f8f1e5;
          font-size: 18px;
          letter-spacing: 0.04em;
          opacity: 0;
          transform: translateY(8px);
        }
        .wig-photo-year span {
          font-family: "The Seasons", serif !important;
        }
        .wig-photo-year-dash {
          width: 28px;
          height: 1px;
          background: var(--color-gold, #c9a257);
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .wig-photo { aspect-ratio: 5 / 6; max-width: 380px; }
        }
        /* Phone */
        @media (max-width: 600px) {
          .wig {
            padding: 72px 22px;
          }
          .wig-eyebrow {
            font-size: 10px;
            letter-spacing: 0.28em;
          }
          .wig-eyebrow-mark { width: 18px; }
          .wig-title-sm { font-size: 22px; }
          .wig-title-big { font-size: 56px; }
          .wig-title-q { font-size: 56px; }
          .wig-body { font-size: 14px; line-height: 1.7; }
          .wig-quote {
            font-size: 17px;
            padding-left: 18px;
          }
          .wig-cta { gap: 12px; flex-wrap: wrap; }
          .wig-cta-arrow { width: 46px; height: 46px; }
          .wig-cta-pill { padding: 12px 24px; font-size: 11px; }
          .wig-photo { aspect-ratio: 4 / 5; }
          .wig-photo-year {
            left: 18px;
            bottom: 18px;
            font-size: 15px;
            gap: 10px;
          }
          .wig-photo-year-dash { width: 22px; }
        }
        @media (max-width: 380px) {
          .wig-title-big { font-size: 48px; }
          .wig-title-q { font-size: 48px; }
        }
      `}</style>
    </section>
  );
}

export default WhoIsGurudev;
