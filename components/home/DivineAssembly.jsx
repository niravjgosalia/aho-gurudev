import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sessions = [
  {
    code: "01",
    slotDate: "25 Sep",
    slotTime: "Evening",
    name: "SAMARPAN",
    meaning: "Surrender",
    day: "Friday, 25 September 2026",
    time: "7:30 – 10:00 pm",
    accent: "#a14a2a",
    image: "/images/sessions/samarpan.jpg",
    pull:
      "An invocation of grace — the curtain rises on a year of celebration.",
    items: [
      "The 60th Year Curtain Raiser",
      "A Global Offering of Spiritual & Seva Milestones",
      "Unveiling of Landmark Initiatives",
      "Addresses by Eminent Saints & Leaders",
      "Inaugural Discourse by Pujya Gurudevshri",
    ],
  },
  {
    code: "02",
    slotDate: "26 Sep",
    slotTime: "Morning",
    name: "SANKALP",
    meaning: "Resolve",
    day: "Saturday, 26 September 2026",
    time: "10:00 am – 12:30 pm",
    accent: "#c9a25a",
    image: "/images/sessions/sankalp.jpg",
    pull:
      "A morning of vows — the sacred Atmarpit Diksha and a symphony of global wishes.",
    items: [
      "A Symphony of Global Wishes",
      "The Sacred Atmarpit Diksha Ceremony",
      "A Heartfelt Tribute by Atmarpit Nemiji",
      "Blessings by Revered Masters & Dignitaries",
      "Awakening Discourse by Pujya Gurudevshri",
    ],
  },
  {
    code: "03",
    slotDate: "26 Sep",
    slotTime: "Evening",
    name: "SAANIDHYA",
    meaning: "Divine Presence",
    day: "Saturday, 26 September 2026",
    time: "7:30 – 10:00 pm",
    accent: "#8a432f",
    image: "/images/sessions/saanidhya.jpg",
    pull:
      "An evening of homage — 60 glorious years honoured in light, music, and word.",
    items: [
      "60 Glorious Years: A Spectacular Cultural Tribute",
      "Global Release of 'Beyond': A Commemorative Book",
      "Historic Inauguration of Shrimad Rajchandra Jivamaitridham",
      "Wishes by Renowned Saints & Achievers",
      "Culminating Discourse by Pujya Gurudevshri",
    ],
  },
];

function useCountdown(targetISO) {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const target = new Date(targetISO).getTime();
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setT({ d, h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetISO]);
  return t;
}

const DivineAssembly = () => {
  const { d, h, m, s } = useCountdown("2026-09-25T19:30:00+05:30");

  return (
    <section className="da">
      {/* HERO */}
      <div className="da-hero">
        <div
          className="da-hero-img"
          style={{ backgroundImage: "url(/images/venues/jio-world.jpg)" }}
        />
        <div className="da-hero-overlay" />
        <div className="da-hero-content">
          <div className="da-flourish" />
          <p className="da-eyebrow">|| Glory to Shrimad Rajchandraji ||</p>
          <h2 className="da-title seasons">
            The <em>Divine</em> Assembly
          </h2>
          <div className="da-rule" />
          <p className="da-date">25 – 26 September 2026</p>
          <p className="da-venue seasons">
            Jio World Convention Centre · Mumbai
          </p>

          <div className="da-countdown">
            <p className="da-countdown-label">The historic gathering begins in</p>
            <div className="da-countdown-grid">
              {[
                { v: d, l: "Days" },
                { v: h, l: "Hours" },
                { v: m, l: "Minutes" },
                { v: s, l: "Seconds" },
              ].map((c) => (
                <div key={c.l} className="da-countdown-item">
                  <span className="da-countdown-num">
                    {String(c.v).padStart(2, "0")}
                  </span>
                  <span className="da-countdown-l">{c.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CONNECTOR — links hero to sessions */}
      <div className="da-connector" aria-hidden>
        <div className="da-connector-line" />
        <div className="da-connector-flourish">
          <span className="da-connector-dot" />
        </div>
      </div>

      {/* INTRO STRIP */}
      <div className="da-intro">
        <div className="da-intro-inner">
          <p className="da-intro-eyebrow">A Three-Act Ceremony</p>
          <h3 className="da-intro-title seasons">
            Three sacred sessions. <em>One historic gathering.</em>
          </h3>
          <p className="da-intro-body">
            Across two days at Mumbai's Jio World Convention Centre, the 60th
            year unfolds through three profound chapters — Samarpan, Sankalp,
            and Saanidhya — each a movement in a single, unfolding offering of
            grace.
          </p>
        </div>
      </div>

      {/* SESSIONS */}
      <div className="da-sessions">
        {sessions.map((sess, idx) => (
          <SessionRow key={sess.code} sess={sess} idx={idx} />
        ))}
      </div>

      {/* CTA */}
      <div className="da-cta-wrap">
        <p className="da-cta-line seasons">
          It is with deep humility and joy that we invite you.
        </p>
        <a href="#register" className="da-cta-btn">
          <span>Reserve Your Seat</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="1.6" stroke="currentColor">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="13 6 19 12 13 18" />
          </svg>
        </a>
        <p className="da-cta-note">
          16,000+ seats · By invitation & priority registration
        </p>
      </div>

      <style jsx global>{`
        .da {
          position: relative;
          color: #2a1110;
          background: #fbf6e9;
        }

        /* HERO */
        .da-hero {
          position: relative;
          min-height: clamp(520px, 80vh, 760px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(80px, 8vw, 140px) clamp(20px, 4vw, 80px);
          overflow: hidden;
          isolation: isolate;
        }
        .da-hero-img {
          position: absolute;
          inset: 0;
          z-index: -2;
          background-size: cover;
          background-position: center 30%;
          filter: brightness(0.55) saturate(0.95);
        }
        .da-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            radial-gradient(60% 50% at 50% 50%, rgba(255,255,255,0.05), transparent 70%),
            linear-gradient(180deg, rgba(26, 10, 9, 0.4) 0%, rgba(26, 10, 9, 0.7) 70%, rgba(26, 10, 9, 0.95) 100%);
        }
        .da-hero-content {
          position: relative;
          text-align: center;
          color: #f5e3ba;
          max-width: 880px;
        }
        .da-flourish {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #c9a25a, transparent);
          margin: 0 auto 20px;
        }
        .da-eyebrow {
          font-family: "Montserrat", sans-serif;
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #c9a25a;
          margin: 0 0 24px;
        }
        .da-title {
          font-family: "The Seasons", serif !important;
          font-size: clamp(48px, 8vw, 112px);
          line-height: 1.02;
          letter-spacing: 0.005em;
          margin: 0 0 24px;
          color: #f5e3ba;
        }
        .da-title em {
          font-style: italic;
          background: linear-gradient(180deg, #fbecc4 0%, #d6a85d 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .da-rule {
          width: 220px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #c9a25a 50%, transparent);
          margin: 0 auto 24px;
        }
        .da-date {
          font-family: "Montserrat", sans-serif;
          font-size: clamp(13px, 1vw, 16px);
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #f5e3ba;
          margin: 0 0 8px;
        }
        .da-venue {
          font-family: "The Seasons", serif !important;
          font-style: italic;
          font-size: clamp(16px, 1.3vw, 20px);
          color: rgba(245, 227, 186, 0.85);
          margin: 0 0 44px;
        }

        /* COUNTDOWN */
        .da-countdown {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          padding: 22px 36px;
          background: rgba(26, 10, 9, 0.45);
          border: 1px solid rgba(201, 162, 90, 0.4);
          border-radius: 6px;
          backdrop-filter: blur(8px);
        }
        .da-countdown-label {
          font-family: "Montserrat", sans-serif;
          font-size: 10px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(201, 162, 90, 0.9);
          margin: 0 0 14px;
        }
        .da-countdown-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }
        .da-countdown-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          min-width: 56px;
        }
        .da-countdown-num {
          font-family: "Montserrat", "Inter", sans-serif;
          font-weight: 200;
          font-size: clamp(30px, 3.6vw, 44px);
          line-height: 1;
          color: #f5e3ba;
          font-variant-numeric: tabular-nums;
          letter-spacing: 0.02em;
        }
        .da-countdown-l {
          font-family: "Montserrat", sans-serif;
          font-size: 9px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(201, 162, 90, 0.85);
        }

        /* CONNECTOR — visual bridge from hero to sessions */
        .da-connector {
          position: relative;
          height: clamp(80px, 8vw, 120px);
          margin-top: -1px;
          background: linear-gradient(180deg, rgba(26, 10, 9, 0.95) 0%, #fbf6e9 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
        }
        .da-connector-line {
          width: 1px;
          height: 60%;
          background: linear-gradient(180deg, rgba(201, 162, 90, 0.9) 0%, rgba(201, 162, 90, 0.2) 100%);
        }
        .da-connector-flourish {
          width: 11px;
          height: 11px;
          border-radius: 50%;
          border: 1px solid rgba(201, 162, 90, 0.55);
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fbf6e9;
        }
        .da-connector-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #c9a25a;
        }

        /* INTRO STRIP */
        .da-intro {
          padding: clamp(40px, 5vw, 80px) clamp(20px, 4vw, 80px) clamp(40px, 5vw, 80px);
          text-align: center;
        }
        .da-intro-inner {
          max-width: 800px;
          margin: 0 auto;
        }
        .da-intro-eyebrow {
          font-family: "Montserrat", sans-serif;
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #8a432f;
          margin: 0 0 18px;
        }
        .da-intro-title {
          font-family: "The Seasons", serif !important;
          font-size: clamp(28px, 3.6vw, 48px);
          line-height: 1.2;
          color: #2a1110;
          margin: 0 0 22px;
        }
        .da-intro-title em {
          font-style: italic;
          color: #8a432f;
        }
        .da-intro-body {
          font-family: "Montserrat", sans-serif;
          font-size: clamp(14px, 1.05vw, 16px);
          line-height: 1.85;
          color: rgba(42, 17, 16, 0.7);
          margin: 0;
        }

        /* SESSIONS — editorial vertical stack */
        .da-sessions {
          display: flex;
          flex-direction: column;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 clamp(20px, 4vw, 80px);
        }
        :global(.da-session) {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, 520px) 1fr;
          align-items: center;
          gap: clamp(40px, 5vw, 96px);
          padding: clamp(60px, 7vw, 120px) 0;
          border-bottom: 1px solid rgba(201, 162, 90, 0.25);
          isolation: isolate;
        }
        :global(.da-session:last-child) { border-bottom: none; }
        :global(.da-session.is-flipped) .da-session-img-wrap { order: 2; }
        :global(.da-session.is-flipped) .da-session-content { order: 1; }

        .da-session-img-wrap {
          position: relative;
          aspect-ratio: 1 / 1;
          width: 100%;
          max-width: 520px;
          margin: 0 auto;
          overflow: hidden;
          border-radius: 4px;
          box-shadow:
            0 40px 90px -25px rgba(42, 17, 16, 0.4),
            0 12px 28px -10px rgba(42, 17, 16, 0.2);
        }
        .da-session-img {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 1.5s ease;
        }
        :global(.da-session):hover .da-session-img { transform: scale(1.04); }
        .da-session-img-wrap::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 50%, rgba(26, 10, 9, 0.3) 100%);
          pointer-events: none;
        }
        .da-session-img-frame {
          position: absolute;
          inset: 16px;
          border: 1px solid rgba(245, 227, 186, 0.4);
          border-radius: 2px;
          pointer-events: none;
          z-index: 2;
        }
        .da-session-img-num {
          position: absolute;
          right: -28px;
          top: -28px;
          z-index: 3;
          font-family: "The Seasons", serif !important;
          font-size: clamp(80px, 10vw, 160px);
          line-height: 1;
          color: var(--accent);
          letter-spacing: -0.03em;
          text-shadow: 0 4px 24px rgba(0,0,0,0.25);
        }
        .da-session-slot {
          position: absolute;
          right: 18px;
          top: 18px;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 14px 18px 12px;
          background: rgba(26, 10, 9, 0.78);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(245, 227, 186, 0.35);
          border-radius: 4px;
          color: #f5e3ba;
          min-width: 84px;
        }
        .da-session-slot-date {
          font-family: "The Seasons", serif !important;
          font-size: clamp(20px, 2vw, 28px);
          line-height: 1;
          letter-spacing: 0.01em;
          margin-bottom: 6px;
        }
        .da-session-slot-time {
          font-family: "Montserrat", sans-serif;
          font-size: 10px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--accent);
        }

        .da-session-content {
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .da-session-meaning-eyebrow {
          font-family: "The Seasons", serif !important;
          font-style: italic;
          font-size: clamp(22px, 2vw, 32px);
          line-height: 1;
          letter-spacing: 0.01em;
          background: linear-gradient(180deg, #d6a85d 0%, var(--accent) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0 0 6px;
        }
        .da-session-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: "Montserrat", sans-serif;
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--accent);
          margin: 0 0 22px;
        }
        .da-session-eyebrow-rule {
          width: 36px;
          height: 1px;
          background: var(--accent);
          opacity: 0.7;
        }
        .da-session-name {
          font-family: "The Seasons", serif !important;
          font-size: clamp(56px, 7vw, 112px);
          line-height: 0.95;
          letter-spacing: 0.02em;
          color: #2a1110;
          margin: 0 0 14px;
          background: linear-gradient(180deg, #2a1110 0%, var(--accent) 180%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .da-session-meaning {
          font-family: "The Seasons", serif;
          font-style: italic;
          font-size: clamp(18px, 1.4vw, 22px);
          color: var(--accent);
          margin: 0 0 32px;
          letter-spacing: 0.04em;
        }
        .da-session-pull {
          font-family: Georgia, "Times New Roman", serif;
          font-style: italic;
          font-size: clamp(18px, 1.5vw, 24px);
          line-height: 1.55;
          color: rgba(42, 17, 16, 0.78);
          margin: 0 0 32px;
          padding-left: 22px;
          border-left: 2px solid var(--accent);
        }
        .da-session-meta {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          padding: 18px 0;
          border-top: 1px solid rgba(42, 17, 16, 0.12);
          border-bottom: 1px solid rgba(42, 17, 16, 0.12);
          margin-bottom: 28px;
        }
        .da-meta-label {
          display: block;
          font-family: "Montserrat", sans-serif;
          font-size: 9px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(42, 17, 16, 0.5);
          margin-bottom: 6px;
        }
        .da-meta-val {
          display: block;
          font-family: "The Seasons", serif;
          font-size: 15px;
          color: #2a1110;
          line-height: 1.3;
        }
        .da-session-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .da-session-list li {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          font-family: "Montserrat", sans-serif;
          font-size: 14px;
          line-height: 1.7;
          color: rgba(42, 17, 16, 0.78);
          padding: 9px 0;
          border-bottom: 1px solid rgba(42, 17, 16, 0.07);
        }
        .da-session-list li:last-child { border-bottom: none; }
        .da-bullet {
          flex-shrink: 0;
          width: 6px;
          height: 6px;
          margin-top: 9px;
          border-radius: 50%;
          background: var(--accent);
        }

        /* CTA */
        .da-cta-wrap {
          text-align: center;
          padding: clamp(32px, 4vw, 56px) clamp(20px, 4vw, 80px) clamp(56px, 6vw, 88px);
          background: linear-gradient(180deg, transparent 0%, rgba(201, 162, 90, 0.12) 100%);
        }
        .da-cta-line {
          font-family: "The Seasons", serif !important;
          font-style: italic;
          font-size: clamp(20px, 2vw, 32px);
          color: #2a1110;
          margin: 0 auto 24px;
          max-width: 640px;
          line-height: 1.4;
        }
        .da-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          padding: 22px 52px;
          font-family: "Montserrat", sans-serif;
          font-size: 12px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #1a0a09;
          background: linear-gradient(180deg, #fbecc4 0%, #d6a85d 100%);
          border: none;
          border-radius: 999px;
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease, filter 0.25s ease;
          box-shadow:
            0 18px 40px -10px rgba(201, 162, 90, 0.55),
            0 0 0 1px rgba(245, 220, 160, 0.3) inset;
          position: relative;
          overflow: hidden;
          margin: 0 0 18px;
        }
        .da-cta-btn::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255, 255, 255, 0.5) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.7s ease;
        }
        .da-cta-btn:hover { transform: translateY(-2px); filter: brightness(1.06); }
        .da-cta-btn:hover::before { transform: translateX(100%); }
        .da-cta-note {
          margin: 0;
          font-family: "Montserrat", sans-serif;
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(138, 67, 47, 0.7);
        }

        /* Tablet */
        @media (max-width: 1024px) {
          :global(.da-session) {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 64px 0;
          }
          :global(.da-session.is-flipped) .da-session-img-wrap { order: 1; }
          :global(.da-session.is-flipped) .da-session-content { order: 2; }
          .da-session-img-wrap { max-width: 520px; }
        }
        /* Mobile */
        @media (max-width: 600px) {
          .da-hero { min-height: 70vh; padding: 80px 20px; }
          .da-countdown { padding: 18px 22px; }
          .da-countdown-grid { gap: 14px; }
          .da-countdown-item { min-width: 48px; }
          :global(.da-session) { padding: 36px 0; gap: 22px; }
          .da-session-img-wrap { aspect-ratio: 16 / 10; max-width: 100%; }
          .da-session-name { font-size: 44px !important; }
          .da-session-meaning { margin-bottom: 16px; }
          .da-session-pull { font-size: 14px; padding-left: 14px; margin-bottom: 18px; line-height: 1.45; }
          .da-session-meta { padding: 12px 0; margin-bottom: 16px; }
          .da-session-list li { font-size: 13px; padding: 6px 0; line-height: 1.5; }
          .da-session-list li .da-bullet { margin-top: 7px; }
          .da-cta-btn { padding: 18px 36px; font-size: 11px; }
        }
      `}</style>
    </section>
  );
};

const SessionRow = ({ sess, idx }) => {
  return (
    <motion.article
      className={`da-session ${idx % 2 === 1 ? "is-flipped" : ""}`}
      style={{ "--accent": sess.accent }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="da-session-img-wrap">
        <div
          className="da-session-img"
          style={{ backgroundImage: `url(${sess.image})` }}
        />
        <div className="da-session-img-frame" />
        <div className="da-session-slot">
          <span className="da-session-slot-date seasons">{sess.slotDate}</span>
          <span className="da-session-slot-time">{sess.slotTime}</span>
        </div>
      </div>

      <div className="da-session-content">
        <p className="da-session-eyebrow">
          <span className="da-session-eyebrow-rule" />
          {sess.slotDate} · {sess.slotTime}
        </p>
        <p className="da-session-meaning-eyebrow seasons">{sess.meaning}</p>
        <h3 className="da-session-name seasons">{sess.name}</h3>

        <p className="da-session-pull">{sess.pull}</p>

        <div className="da-session-meta">
          <div>
            <span className="da-meta-label">When</span>
            <span className="da-meta-val">{sess.day}</span>
          </div>
          <div>
            <span className="da-meta-label">Time</span>
            <span className="da-meta-val">{sess.time}</span>
          </div>
        </div>

        <ul className="da-session-list">
          {sess.items.map((it) => (
            <li key={it}>
              <span className="da-bullet" />
              {it}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
};

export default DivineAssembly;
