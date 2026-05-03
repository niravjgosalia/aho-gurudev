import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroBanner = ({ loading }) => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const ruleRef = useRef(null);
  const taglineRef = useRef(null);
  const actionsRef = useRef(null);
  const scrollRef = useRef(null);
  const hasStarted = useRef(false);

  // Start video + entrance animation after loader finishes
  useEffect(() => {
    if (loading || hasStarted.current) return;
    hasStarted.current = true;

    const video = videoRef.current;
    if (video) {
      const t = setTimeout(() => video.play().catch(() => {}), 200);
      // play timeline alongside video start
      const tl = gsap.timeline({ delay: 0.3 });
      tl.to(eyebrowRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" })
        .to(titleRef.current,   { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" }, "-=0.3")
        .to(ruleRef.current,    { opacity: 1, duration: 0.5 }, "-=0.3")
        .to(taglineRef.current, { opacity: 1, duration: 0.6 }, "-=0.2")
        .to(actionsRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.2")
        .to(scrollRef.current,  { opacity: 1, duration: 0.5 }, "-=0.1");
      return () => clearTimeout(t);
    }
  }, [loading]);

  // Fade scroll cue when user scrolls
  useEffect(() => {
    const onScroll = () => {
      if (!scrollRef.current) return;
      scrollRef.current.style.opacity = window.scrollY > 80 ? "0" : "1";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="hero-redesign">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="auto"
        className="hero-redesign__video"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Cinematic bottom vignette */}
      <div className="hero-redesign__vignette" />

      {/* Subtle grain */}
      <div className="hero-redesign__grain" />

      <div className="hero-redesign__content">
        <h1 ref={titleRef} className="hero-redesign__title seasons">
          Aho&nbsp;<em>Gurudev</em>
        </h1>

        <div ref={ruleRef} className="hero-redesign__rule" />

        <p ref={taglineRef} className="hero-redesign__tagline">
          A Celebration of Grace, Wisdom &amp; Unconditional Love
        </p>

        <div ref={actionsRef} className="hero-redesign__actions">
          <a href="#events" className="hero-redesign__btn hero-redesign__btn--primary">
            Explore Events
          </a>
          <a href="#who" className="hero-redesign__btn hero-redesign__btn--ghost">
            His Journey
          </a>
        </div>
      </div>

      <div ref={scrollRef} className="hero-redesign__scroll">
        <span>Scroll</span>
        <div className="hero-redesign__scroll-line" />
      </div>

      <style jsx>{`
        .hero-redesign {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          background: #000;
        }
        .hero-redesign__video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }
        .hero-redesign__vignette {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.1) 0%,
            rgba(0, 0, 0, 0.04) 40%,
            rgba(40, 20, 10, 0.6) 75%,
            rgba(40, 20, 10, 0.88) 100%
          );
          pointer-events: none;
        }
        .hero-redesign__grain {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          opacity: 0.05;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
        }
        .hero-redesign__content {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 2;
          text-align: center;
          padding: 0 24px 80px;
        }
        .hero-redesign__eyebrow {
          display: inline-block;
          font-family: "Montserrat", sans-serif;
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(248, 241, 229, 0.75);
          border: 1px solid rgba(248, 241, 229, 0.22);
          padding: 6px 18px;
          border-radius: 9999px;
          margin-bottom: 18px;
          opacity: 0;
          transform: translateY(8px);
        }
        .hero-redesign__title {
          font-size: clamp(54px, 9vw, 112px);
          font-weight: 300;
          color: #fff;
          letter-spacing: 0.02em;
          line-height: 1;
          margin: 0;
          opacity: 0;
          transform: translateY(12px);
        }
        .hero-redesign__title :global(em) {
          font-style: italic;
          color: #f5c842;
        }
        .hero-redesign__rule {
          width: 1px;
          height: 44px;
          background: linear-gradient(
            180deg,
            transparent,
            rgba(248, 241, 229, 0.45),
            transparent
          );
          margin: 14px auto;
          opacity: 0;
        }
        .hero-redesign__tagline {
          font-family: "Montserrat", sans-serif;
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(248, 241, 229, 0.65);
          margin: 0 0 28px;
          opacity: 0;
        }
        .hero-redesign__actions {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(8px);
        }
        .hero-redesign__btn {
          display: inline-flex;
          align-items: center;
          padding: 13px 30px;
          border-radius: 9999px;
          font-family: "Montserrat", sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-decoration: none;
          cursor: pointer;
          transition: filter 0.2s, transform 0.2s, background 0.2s;
        }
        .hero-redesign__btn--primary {
          background: var(--color-amber, #a76228);
          color: #fff;
          border: none;
        }
        .hero-redesign__btn--primary:hover {
          filter: brightness(1.1);
          transform: translateY(-1px);
        }
        .hero-redesign__btn--ghost {
          background: transparent;
          border: 1.5px solid rgba(248, 241, 229, 0.4);
          color: #fff;
          font-weight: 600;
        }
        .hero-redesign__btn--ghost:hover {
          background: rgba(248, 241, 229, 0.1);
        }
        .hero-redesign__scroll {
          position: absolute;
          bottom: 22px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .hero-redesign__scroll span {
          font-family: "Montserrat", sans-serif;
          font-size: 0.5rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(248, 241, 229, 0.4);
        }
        .hero-redesign__scroll-line {
          width: 1px;
          height: 36px;
          background: linear-gradient(
            180deg,
            rgba(248, 241, 229, 0.3),
            transparent
          );
          animation: heroScrollPulse 2s ease-in-out infinite;
        }
        @keyframes heroScrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50%      { opacity: 1;   transform: scaleY(1.2); }
        }

        /* === MOBILE === */
        @media (max-width: 700px) {
          .hero-redesign__content {
            padding: 0 20px 56px;
          }
          .hero-redesign__eyebrow {
            font-size: 0.56rem;
            letter-spacing: 0.28em;
            padding: 5px 14px;
            margin-bottom: 14px;
          }
          .hero-redesign__title {
            font-size: clamp(40px, 12vw, 80px);
            line-height: 1.05;
          }
          .hero-redesign__rule {
            height: 32px;
            margin: 10px auto;
          }
          .hero-redesign__tagline {
            font-size: 0.6rem;
            letter-spacing: 0.22em;
            margin-bottom: 22px;
          }
          .hero-redesign__btn {
            padding: 11px 22px;
            font-size: 0.72rem;
          }
          .hero-redesign__scroll { bottom: 14px; }
          .hero-redesign__scroll span { font-size: 0.45rem; }
          .hero-redesign__scroll-line { height: 28px; }
        }
        @media (max-width: 380px) {
          .hero-redesign__title { font-size: 36px; }
          .hero-redesign__actions { gap: 10px; }
        }
      `}</style>
    </section>
  );
};

export default HeroBanner;
