import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const counters = [
  { value: 60,  suffix: "+",  label: "Countries Reached"  },
  { value: 1,   suffix: "M+", label: "Lives Transformed"  },
  { value: 60,  suffix: "+",  label: "Community Projects" },
  { value: 200, suffix: "+",  label: "Active Centres"     },
];

const projects = [
  {
    num: "01",
    acronym: "SRHRC",
    name: "Hospital & Research Centre",
    stat: "250-bed charity hospital · 500+ villages",
    desc: "For those with less than nothing — nothing less than the best.",
    image: "/images/frames/srhrc.jpg",
  },
  {
    num: "02",
    acronym: "SRSU",
    name: "Sarvamangal University",
    stat: "Higher education for rural Dharampur",
    desc: "The sky of Dharampur, filled with aspirations.",
    image: "/images/frames/srsu.jpg",
  },
  {
    num: "03",
    acronym: "SRJ",
    name: "Jivamaitridham",
    stat: "40 acres · 2,000 animals · zero euthanasia",
    desc: "A revolution in animal wellness. No animal turned away.",
    image: "/images/frames/srj.jpg",
  },
  {
    num: "04",
    acronym: "SRCEW",
    name: "Centre of Excellence for Women",
    stat: "Empowering the women of Dharampur",
    desc: "Behind every flourishing society are empowered women.",
    image: "/images/frames/srcew.jpg",
  },
  {
    num: "05",
    acronym: "AFRICA",
    name: "Mission Africa",
    stat: "50,000+ meals · 175+ institutes · 16+ countries",
    desc: "Rise of a new dawn — 360° community development.",
    image: "/images/frames/africa.jpg",
  },
  {
    num: "06",
    acronym: "GLOBAL",
    name: "Volunteer Army",
    stat: "200+ centres across 6 continents",
    desc: "Their smallest act of service becomes an offering.",
    image: "/images/frames/global.jpg",
  },
];

// Build characters for "Love in Motion" with metadata for emphasis
function buildTitle() {
  const text = "Love in Motion";
  const motionStart = text.indexOf("Motion");
  return text.split("").map((char, i) => ({
    char,
    em: i >= motionStart,
    space: char === " ",
  }));
}
const titleChars = buildTitle();

function SocialImpact() {
  const sectionRef    = useRef(null);
  const eyebrowRef    = useRef(null);
  const charsRef      = useRef([]);
  const subRef        = useRef(null);
  const cardsRef      = useRef(null);
  const cardItemRefs  = useRef([]);
  const statsRef      = useRef(null);
  const counterRefs   = useRef([]);
  const ctaRef        = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 0) Pin the previous section (Event Calendar) so this one slides up over it
      // Skip the pin overlap on mobile/tablet — it's unreliable on touch devices and
      // can hijack natural scroll. Sections flow normally below 1024px.
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      const prevSection = document.querySelector(".ec");
      if (prevSection && isDesktop) {
        ScrollTrigger.create({
          trigger: prevSection,
          start: "bottom bottom",
          endTrigger: sectionRef.current,
          end: "top top",
          pin: true,
          pinSpacing: false,
        });
      }

      // 1) Curtain reveal — clip-path scrub-tied to scroll progress as section rises
      // Use a gentler curtain on small screens
      const initialClip = isDesktop
        ? "inset(40% 6% 40% 6%)"
        : "inset(15% 3% 15% 3%)";
      gsap.fromTo(
        sectionRef.current,
        { clipPath: initialClip },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top top",
            scrub: 0.6,
          },
        }
      );

      // 2) Header — eyebrow → char-by-char title → subhead
      const headTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 55%",
          toggleActions: "play none none none",
        },
      });
      headTl.to(eyebrowRef.current, {
        opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
      });
      headTl.to(
        charsRef.current.filter(Boolean),
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(-35% -10% -15% -10%)",
          duration: 0.95,
          ease: "power3.out",
          stagger: 0.05,
        },
        "-=0.25"
      );
      headTl.to(
        subRef.current,
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.6"
      );

      // 3) Cards — each enters from right, staggered
      gsap.fromTo(
        cardItemRefs.current.filter(Boolean),
        { opacity: 0, x: 140 },
        {
          opacity: 1,
          x: 0,
          duration: 1.0,
          ease: "power3.out",
          stagger: 0.14,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // 4) Stats — counters tween up
      gsap.fromTo(
        statsRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: statsRef.current, start: "top 82%" },
          onStart: () => {
            counters.forEach((c, i) => {
              const el = counterRefs.current[i];
              if (!el) return;
              const obj = { v: 0 };
              gsap.to(obj, {
                v: c.value,
                duration: 1.8,
                ease: "power2.out",
                onUpdate: () => { el.textContent = Math.round(obj.v); },
              });
            });
          },
        }
      );

      // 5) CTA
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power2.out",
          scrollTrigger: { trigger: ctaRef.current, start: "top 85%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="lim">
      <div className="lim-inner">

        {/* === HEADER === */}
        <div className="lim-head">
          <p ref={eyebrowRef} className="lim-eyebrow">
            <span className="lim-eyebrow-rule" />
            Seva · Compassion · Action
            <span className="lim-eyebrow-rule" />
          </p>

          <h2 className="lim-title">
            {titleChars.map((c, i) => (
              <span
                key={i}
                ref={(el) => (charsRef.current[i] = el)}
                className={`lim-char seasons ${c.em ? "lim-char--em" : ""}`}
                aria-hidden={c.space ? "true" : undefined}
              >
                {c.space ? " " : c.char}
              </span>
            ))}
          </h2>

          <p ref={subRef} className="lim-sub">
            Bliss manufactured within, extends as love, care, and compassion.
            <em className="lim-sub-em"> A true seeker cannot help but be a true sevak.</em>
          </p>
        </div>

        {/* === CARDS === */}
        <div ref={cardsRef} className="lim-cards">
          {projects.map((p, i) => (
            <article
              key={p.num}
              ref={(el) => (cardItemRefs.current[i] = el)}
              className="lim-card"
            >
              <div className="lim-card-img-wrap">
                <img src={p.image} alt={p.name} className="lim-card-img" />
                <div className="lim-card-grad" />
                <span className="lim-card-frame" />
                <span className="lim-card-num seasons">{p.num}</span>
              </div>
              <div className="lim-card-rule" />
              <div className="lim-card-body">
                <h3 className="lim-card-acronym seasons">{p.acronym}</h3>
                <p className="lim-card-name">{p.name}</p>
                <p className="lim-card-stat seasons">{p.stat}</p>
                <p className="lim-card-desc">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* === STATS === */}
        <div ref={statsRef} className="lim-stats">
          {counters.map((c, i) => (
            <div key={c.label} className="lim-stat">
              <div className="lim-stat-num seasons">
                <span ref={(el) => (counterRefs.current[i] = el)}>0</span>
                <span className="lim-stat-suffix seasons">{c.suffix}</span>
              </div>
              <div className="lim-stat-label">{c.label}</div>
            </div>
          ))}
        </div>

        {/* === CTA === */}
        <div ref={ctaRef} className="lim-cta">
          <p className="lim-cta-quote seasons">
            <span className="lim-cta-quote-mark">“</span>
            <em>Compassion in action is the hallmark of a seeker.</em>
          </p>
          <div className="lim-cta-buttons">
            <a href="#" className="lim-cta-btn lim-cta-btn--primary">
              Donate
              <svg width="16" height="10" viewBox="0 0 22 12" fill="none">
                <path d="M0 6h20M16 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#" className="lim-cta-btn lim-cta-btn--ghost">Volunteer</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .lim {
          position: relative;
          z-index: 2;
          padding: clamp(96px, 10vw, 160px) clamp(24px, 4.167vw, 80px);
          overflow: hidden;
          color: var(--color-cream, #f8f1e5);
          will-change: clip-path;
          background:
            radial-gradient(60% 50% at 78% 0%, rgba(201, 162, 87, 0.20), transparent 60%),
            radial-gradient(80% 60% at 18% 100%, rgba(170, 60, 50, 0.18), transparent 60%),
            linear-gradient(180deg, #2c100e 0%, #4a1f1a 60%, #5b271f 100%);
        }
        .lim::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.06;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
        }
        .lim-inner {
          position: relative;
          z-index: 2;
          max-width: 1480px;
          margin: 0 auto;
        }

        /* === HEADER === */
        .lim-head {
          text-align: center;
          margin: 0 0 96px;
        }
        .lim-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          font-family: "Montserrat", sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--color-gold, #c9a257);
          margin: 0 0 36px;
          opacity: 0;
          transform: translateY(8px);
        }
        .lim-eyebrow-rule {
          width: 32px;
          height: 1px;
          background: var(--color-gold, #c9a257);
        }

        .lim-title {
          display: block;
          text-align: center;
          margin: 0 auto 36px;
          line-height: 1.08;
          letter-spacing: -0.015em;
          font-weight: 400;
          font-size: clamp(46px, 7.4vw, 124px);
          color: var(--color-cream, #f8f1e5);
          font-family: "The Seasons", serif !important;
          max-width: 100%;
          padding: 0.06em 8px;
          white-space: nowrap;
          overflow: visible;
        }
        .lim-char {
          display: inline-block;
          font-family: "The Seasons", serif !important;
          opacity: 0;
          transform: translateY(64px);
          clip-path: inset(0% -10% 110% -10%);
          padding: 0 0.005em;
          white-space: pre;
        }
        .lim-char--em {
          font-style: italic;
          color: var(--color-gold, #c9a257);
        }

        .lim-sub {
          font-family: "Montserrat", sans-serif;
          max-width: 640px;
          margin: 0 auto;
          font-size: clamp(14px, 1.05vw, 16px);
          line-height: 1.8;
          color: rgba(248, 241, 229, 0.72);
          opacity: 0;
          transform: translateY(10px);
        }
        .lim-sub-em {
          font-family: "The Seasons", serif !important;
          font-style: italic;
          color: var(--color-cream, #f8f1e5);
          font-size: 1.05em;
        }

        /* === CARDS === */
        .lim-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(28px, 2.8vw, 48px);
          margin: 0 0 96px;
        }
        .lim-card {
          opacity: 0;
        }
        .lim-card-img-wrap {
          position: relative;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          border-radius: 4px;
          box-shadow:
            0 30px 70px -22px rgba(0, 0, 0, 0.55),
            0 8px 18px -6px rgba(0, 0, 0, 0.30);
        }
        .lim-card-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
        }
        .lim-card:hover .lim-card-img { transform: scale(1.04); }
        .lim-card-grad {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(20, 8, 8, 0.55) 100%);
          z-index: 1;
        }
        .lim-card-frame {
          position: absolute;
          inset: 12px;
          border: 1px solid rgba(201, 162, 87, 0.25);
          z-index: 2;
          pointer-events: none;
        }
        .lim-card-num {
          position: absolute;
          top: 18px;
          right: 22px;
          z-index: 3;
          font-family: "The Seasons", serif !important;
          font-style: italic;
          font-size: 32px;
          color: var(--color-gold, #c9a257);
          line-height: 1;
        }
        .lim-card-rule {
          height: 1px;
          background: linear-gradient(90deg, var(--color-gold, #c9a257) 0%, transparent 100%);
          margin: 24px 0 18px;
        }
        .lim-card-acronym {
          font-family: "The Seasons", serif !important;
          font-size: clamp(24px, 2.2vw, 32px);
          color: var(--color-cream, #f8f1e5);
          letter-spacing: 0.04em;
          font-weight: 500;
          margin: 0 0 6px;
          line-height: 1;
        }
        .lim-card-name {
          font-family: "Montserrat", sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.20em;
          text-transform: uppercase;
          color: rgba(248, 241, 229, 0.55);
          margin: 0 0 14px;
        }
        .lim-card-stat {
          font-family: "The Seasons", serif !important;
          font-style: italic;
          font-size: 16px;
          color: var(--color-gold, #c9a257);
          margin: 0 0 8px;
          line-height: 1.4;
        }
        .lim-card-desc {
          font-family: "Montserrat", sans-serif;
          font-size: 13px;
          line-height: 1.65;
          color: rgba(248, 241, 229, 0.65);
          margin: 0;
        }

        /* === STATS === */
        .lim-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding: 56px 0;
          border-top: 1px solid rgba(201, 162, 87, 0.30);
          border-bottom: 1px solid rgba(201, 162, 87, 0.30);
          margin: 0 0 96px;
        }
        .lim-stat {
          padding: 0 24px;
          border-right: 1px solid rgba(201, 162, 87, 0.18);
          text-align: center;
        }
        .lim-stat:last-child { border-right: none; }
        .lim-stat-num {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 2px;
          font-family: "The Seasons", serif !important;
          font-size: clamp(46px, 4.8vw, 80px);
          line-height: 1;
          color: var(--color-cream, #f8f1e5);
          font-weight: 500;
        }
        .lim-stat-num span { font-family: "The Seasons", serif !important; }
        .lim-stat-suffix {
          color: var(--color-gold, #c9a257);
          font-style: italic;
        }
        .lim-stat-label {
          margin-top: 14px;
          font-family: "Montserrat", sans-serif;
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--color-gold, #c9a257);
          font-weight: 700;
        }

        /* === CTA === */
        .lim-cta {
          text-align: center;
          padding-top: 80px;
          border-top: 1px solid rgba(201, 162, 87, 0.22);
        }
        .lim-cta-quote {
          font-family: "The Seasons", serif !important;
          font-size: clamp(26px, 2.8vw, 42px);
          color: var(--color-cream, #f8f1e5);
          line-height: 1.4;
          max-width: 760px;
          margin: 0 auto 36px;
        }
        .lim-cta-quote-mark {
          font-family: "The Seasons", serif !important;
          color: var(--color-gold, #c9a257);
          font-size: 1.6em;
          line-height: 0;
          position: relative;
          top: 0.18em;
          margin-right: 6px;
        }
        .lim-cta-quote em { font-style: italic; }
        .lim-cta-buttons {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .lim-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: "Montserrat", sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          padding: 15px 32px;
          border-radius: 9999px;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .lim-cta-btn--primary {
          background: var(--color-gold, #c9a257);
          color: var(--color-burgundy-deep, #331418);
          border: 1px solid var(--color-gold, #c9a257);
        }
        .lim-cta-btn--primary svg { stroke: var(--color-burgundy-deep, #331418); }
        .lim-cta-btn--primary:hover { gap: 14px; filter: brightness(1.08); }
        .lim-cta-btn--ghost {
          background: transparent;
          color: var(--color-cream, #f8f1e5);
          border: 1px solid rgba(248, 241, 229, 0.45);
        }
        .lim-cta-btn--ghost:hover {
          background: var(--color-cream, #f8f1e5);
          color: var(--color-burgundy-deep, #331418);
        }

        /* === RESPONSIVE === */
        @media (max-width: 1100px) {
          .lim-cards {
            grid-template-columns: repeat(2, 1fr);
          }
          .lim-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px 0;
          }
          .lim-stat {
            border-right: none;
            border-bottom: 1px solid rgba(201, 162, 87, 0.18);
            padding: 0 16px 28px;
          }
          .lim-stat:nth-child(odd) { border-right: 1px solid rgba(201, 162, 87, 0.18); }
          .lim-stat:nth-last-child(-n+2) { border-bottom: none; padding-bottom: 0; }
        }
        @media (max-width: 700px) {
          .lim {
            padding: 80px 22px;
          }
          .lim-head { margin-bottom: 64px; }
          .lim-title {
            white-space: normal;
            font-size: clamp(40px, 11vw, 72px);
            line-height: 1.05;
          }
          .lim-eyebrow {
            font-size: 10px;
            letter-spacing: 0.25em;
            gap: 10px;
            margin-bottom: 28px;
          }
          .lim-eyebrow-rule { width: 22px; }
          .lim-cards {
            grid-template-columns: 1fr;
            gap: 28px;
            margin-bottom: 64px;
          }
          .lim-stats {
            grid-template-columns: 1fr 1fr;
            gap: 28px 0;
            padding: 36px 0;
            margin-bottom: 64px;
          }
          .lim-stat-num { font-size: 46px; }
          .lim-stat-label { font-size: 10px; letter-spacing: 0.20em; }
          .lim-cta { padding-top: 56px; }
          .lim-cta-btn { padding: 13px 24px; font-size: 11px; }
        }
      `}</style>
    </section>
  );
}

export default SocialImpact;
