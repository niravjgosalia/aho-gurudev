import React, { useState } from "react";

export const venues = [
  {
    city: "Mumbai",
    country: "India",
    venue: "Jio World Convention Centre",
    date: "25 – 26 Sep 2026",
    capacity: "16,000+",
    session: "A Divine Assembly · Grand Inauguration",
    image: "/images/venues/jio-world.jpg",
  },
  {
    city: "London",
    country: "United Kingdom",
    venue: "Wembley Stadium",
    date: "12 Jul 2026",
    capacity: "90,000",
    session: "European Satsang & Cultural Tribute",
    image: "/images/venues/wembley.jpg",
  },
  {
    city: "Dubai",
    country: "UAE",
    venue: "Dubai Opera",
    date: "14 Mar 2026",
    capacity: "2,000",
    session: "An Evening of Awakening",
    image: "/images/venues/dubai-opera.jpg",
  },
  {
    city: "Sydney",
    country: "Australia",
    venue: "ICC Sydney Theatre",
    date: "9 Aug 2026",
    capacity: "9,000",
    session: "Pacific Seekers Summit",
    image: "/images/venues/icc-sydney.jpg",
  },
  {
    city: "New York",
    country: "USA",
    venue: "Madison Square Garden",
    date: "4 Oct 2026",
    capacity: "20,000",
    session: "American Discourse & Diksha",
    image: "/images/venues/msg-newyork.jpg",
  },
  {
    city: "Singapore",
    country: "Singapore",
    venue: "Marina Bay Sands Expo",
    date: "21 Jun 2026",
    capacity: "8,000",
    session: "Asia Pacific Satsang",
    image: "/images/venues/marina-bay-sands.jpg",
  },
];

const WorldStage = () => {
  const [active, setActive] = useState(0);
  const a = venues[active];

  return (
    <section className="ws">
      <div className="ws-head">
        <div className="ws-flourish" />
        <p className="ws-eyebrow">A World Stage · 6 Continents · 60 Cities</p>
        <h2 className="ws-title seasons">
          Where the <em>World</em> Gathers
        </h2>
        <p className="ws-sub">
          The 60th year unfolds on the world's most iconic stages — from the
          Royal Opera in Dubai to Wembley in London — each gathering at a scale
          worthy of the occasion.
        </p>
      </div>

      <div className="ws-stage">
        <div
          className="ws-hero"
          style={{ backgroundImage: `url(${a.image})` }}
          key={a.city}
        >
          <div className="ws-hero-grad" />
          <div className="ws-hero-content">
            <p className="ws-hero-date">{a.date}</p>
            <h3 className="ws-hero-city seasons">{a.city}</h3>
            <p className="ws-hero-country">{a.country}</p>
            <div className="ws-hero-meta">
              <div>
                <span className="ws-meta-label">Venue</span>
                <span className="ws-meta-val">{a.venue}</span>
              </div>
              <div>
                <span className="ws-meta-label">Capacity</span>
                <span className="ws-meta-val">{a.capacity}</span>
              </div>
              <div>
                <span className="ws-meta-label">Session</span>
                <span className="ws-meta-val">{a.session}</span>
              </div>
            </div>
            <a href="#register" className="ws-hero-cta">
              Reserve a Seat
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </a>
          </div>
        </div>

        <div className="ws-list">
          {venues.map((v, i) => (
            <button
              key={v.city}
              className={`ws-item ${i === active ? "is-active" : ""}`}
              onClick={() => setActive(i)}
            >
              <span className="ws-item-num">0{i + 1}</span>
              <span className="ws-item-body">
                <span className="ws-item-city">{v.city}</span>
                <span className="ws-item-venue">{v.venue}</span>
              </span>
              <span className="ws-item-date">{v.date}</span>
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .ws {
          position: relative;
          padding: clamp(80px, 9vw, 140px) clamp(20px, 4vw, 80px);
          background: linear-gradient(180deg, #f7eedb 0%, #efe2c5 100%);
          color: #331418;
          overflow: hidden;
        }
        .ws-head {
          text-align: center;
          max-width: 720px;
          margin: 0 auto clamp(40px, 4vw, 64px);
        }
        .ws-flourish {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #c9a25a, transparent);
          margin: 0 auto 18px;
        }
        .ws-eyebrow {
          font-family: "Montserrat", sans-serif;
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #8a432f;
          margin: 0 0 16px;
        }
        .ws-title {
          font-family: "The Seasons", serif !important;
          font-size: clamp(36px, 5vw, 72px);
          line-height: 1.05;
          color: #331418;
          margin: 0 0 18px;
        }
        .ws-title em {
          font-style: italic;
          color: #8a432f;
        }
        .ws-sub {
          font-family: "Montserrat", sans-serif;
          font-size: clamp(14px, 1vw, 16px);
          line-height: 1.7;
          color: rgba(40, 37, 38, 0.7);
          margin: 0;
        }

        .ws-stage {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: clamp(20px, 2.4vw, 36px);
          max-width: 1320px;
          margin: 0 auto;
          align-items: stretch;
        }

        .ws-hero {
          position: relative;
          border-radius: 6px;
          overflow: hidden;
          background-size: cover;
          background-position: center;
          box-shadow: 0 30px 80px -20px rgba(51, 20, 24, 0.35);
          animation: heroFade 0.6s ease;
          min-height: 480px;
        }
        @keyframes heroFade {
          from { opacity: 0; transform: scale(1.02); }
          to { opacity: 1; transform: scale(1); }
        }
        .ws-hero-grad {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(51, 20, 24, 0.1) 0%,
            rgba(51, 20, 24, 0.55) 60%,
            rgba(51, 20, 24, 0.92) 100%
          );
        }
        .ws-hero-content {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: clamp(28px, 3vw, 48px);
          color: #f5e3ba;
        }
        .ws-hero-date {
          font-family: "Montserrat", sans-serif;
          font-size: 12px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #c9a25a;
          margin: 0 0 10px;
        }
        .ws-hero-city {
          font-family: "The Seasons", serif !important;
          font-size: clamp(48px, 6vw, 96px);
          line-height: 1;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .ws-hero-country {
          font-family: "The Seasons", serif;
          font-style: italic;
          font-size: clamp(16px, 1.2vw, 20px);
          color: rgba(245, 227, 186, 0.8);
          margin: 6px 0 24px;
        }
        .ws-hero-meta {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          padding: 18px 0;
          border-top: 1px solid rgba(201, 162, 90, 0.35);
          border-bottom: 1px solid rgba(201, 162, 90, 0.35);
          margin-bottom: 22px;
        }
        .ws-meta-label {
          display: block;
          font-family: "Montserrat", sans-serif;
          font-size: 9px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: rgba(201, 162, 90, 0.7);
          margin-bottom: 6px;
        }
        .ws-meta-val {
          display: block;
          font-family: "The Seasons", serif;
          font-size: 14px;
          color: #f5e3ba;
          line-height: 1.3;
        }
        .ws-hero-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          font-family: "Montserrat", sans-serif;
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #331418;
          background: linear-gradient(180deg, #f5dca0 0%, #c9a25a 100%);
          border-radius: 999px;
          text-decoration: none;
          transition: transform 0.25s ease, filter 0.25s ease;
        }
        .ws-hero-cta:hover { transform: translateY(-2px); filter: brightness(1.06); }

        .ws-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .ws-item {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 18px;
          padding: 18px 22px;
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(201, 162, 90, 0.25);
          border-radius: 4px;
          cursor: pointer;
          text-align: left;
          transition: all 0.3s ease;
        }
        .ws-item:hover {
          border-color: rgba(201, 162, 90, 0.55);
          background: rgba(255, 255, 255, 0.75);
        }
        .ws-item.is-active {
          background: #331418;
          border-color: #c9a25a;
        }
        .ws-item.is-active .ws-item-num,
        .ws-item.is-active .ws-item-city,
        .ws-item.is-active .ws-item-venue,
        .ws-item.is-active .ws-item-date {
          color: #f5e3ba;
        }
        .ws-item-num {
          font-family: "The Seasons", serif;
          font-size: 13px;
          color: #c9a25a;
          letter-spacing: 0.18em;
        }
        .ws-item-body {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .ws-item-city {
          font-family: "The Seasons", serif;
          font-size: 18px;
          color: #331418;
        }
        .ws-item-venue {
          font-family: "Montserrat", sans-serif;
          font-size: 11px;
          letter-spacing: 0.06em;
          color: rgba(40, 37, 38, 0.6);
        }
        .ws-item-date {
          font-family: "Montserrat", sans-serif;
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(40, 37, 38, 0.55);
        }
        .ws-item.is-active .ws-item-venue { color: rgba(245, 227, 186, 0.65); }
        .ws-item.is-active .ws-item-date { color: rgba(201, 162, 90, 0.85); }

        @media (max-width: 1024px) {
          .ws-stage { grid-template-columns: 1fr; }
          .ws-hero { min-height: 380px; }
        }
        @media (max-width: 600px) {
          .ws { padding: 72px 22px; }
          .ws-hero-meta { grid-template-columns: 1fr 1fr; gap: 14px; }
          .ws-item { padding: 14px 16px; gap: 12px; }
        }
      `}</style>
    </section>
  );
};

export default WorldStage;
