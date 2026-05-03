import React, { useState, useEffect, useRef, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const allEvents = [
  // Past
  { id: 1,  date: "2026-01-01", day: "01", month: "Jan", title: "New Year Sadhana",         location: "Worldwide · Online", category: "Sadhana",  img: "/images/events/event2.jpg" },
  { id: 2,  date: "2026-02-14", day: "14", month: "Feb", title: "Vasant Sammelan",           location: "Surat, IN",          category: "Festival", img: "/images/events/event3.jpg" },
  { id: 3,  date: "2026-03-08", day: "08", month: "Mar", title: "Mahashivratri Vigil",       location: "Dharampur, IN",      category: "Vigil",    img: "/images/events/event1.jpg" },
  { id: 4,  date: "2026-04-05", day: "05", month: "Apr", title: "Atma Siddhi Day",           location: "Mumbai, IN",         category: "Spiritual", img: "/images/events/event2.jpg", featured: true },

  // This Week
  { id: 5,  date: "2026-04-22", day: "22", month: "Apr", title: "Boston Satsang Retreat",    location: "Boston, USA",        category: "Retreat",  img: "/images/events/event3.jpg" },
  { id: 6,  date: "2026-04-26", day: "26", month: "Apr", title: "Aho! Anniversary Day",      location: "Dharampur, IN",      category: "Festival", img: "/images/events/event1.jpg", featured: true },
  { id: 7,  date: "2026-04-28", day: "28", month: "Apr", title: "Daylong Meditation",        location: "Mumbai, IN",         category: "Sadhana",  img: "/images/events/event2.jpg" },

  // Upcoming
  { id: 8,  date: "2026-05-10", day: "10", month: "May", title: "Spring Yuva Camp",          location: "Dharampur, IN",      category: "Camp",     img: "/images/events/event3.jpg" },
  { id: 9,  date: "2026-05-22", day: "22", month: "May", title: "London Ahimsa Walk",        location: "London, UK",         category: "Service",  img: "/images/events/event1.jpg", featured: true },
  { id: 10, date: "2026-06-14", day: "14", month: "Jun", title: "Sydney Seekers Summit",     location: "Sydney, AU",         category: "Satsang",  img: "/images/events/event2.jpg" },
  { id: 11, date: "2026-07-21", day: "21", month: "Jul", title: "Guru Purnima",              location: "Dharampur, IN",      category: "Festival", img: "/images/events/event3.jpg", featured: true },
  { id: 12, date: "2026-08-26", day: "26", month: "Aug", title: "Janmashtami Celebration",   location: "Mumbai, IN",         category: "Festival", img: "/images/events/event1.jpg" },
  { id: 13, date: "2026-09-26", day: "26", month: "Sep", title: "Closing Maha-Festival",     location: "Dharampur, IN",      category: "Finale",   img: "/images/events/event2.jpg", featured: true },
];

const filters = [
  { id: "week",     label: "This Week"  },
  { id: "upcoming", label: "Upcoming"   },
  { id: "past",     label: "Past"       },
  { id: "featured", label: "Featured"   },
];

const today = new Date("2026-04-26"); // freeze "today" for consistent demo state

function EventCalender() {
  const [activeFilter, setActiveFilter] = useState("upcoming");
  const sectionRef    = useRef(null);
  const eyebrowRef    = useRef(null);
  const titleARef     = useRef(null);
  const titleBRef     = useRef(null);
  const subRef        = useRef(null);
  const tabsRef       = useRef(null);
  const featuredRef   = useRef(null);
  const listHeadRef   = useRef(null);

  const featured = useMemo(() => {
    const t = today.getTime();
    return [...allEvents]
      .map((e) => ({ ...e, _diff: Math.abs(new Date(e.date).getTime() - t) }))
      .sort((a, b) => a._diff - b._diff)[0];
  }, []);

  const visibleEvents = useMemo(() => {
    const t = today.getTime();
    const list = allEvents.filter((e) => {
      const d = new Date(e.date).getTime();
      const diffDays = (d - t) / (1000 * 60 * 60 * 24);
      switch (activeFilter) {
        case "week":     return Math.abs(diffDays) <= 7;
        case "upcoming": return diffDays > 0;
        case "past":     return diffDays < 0;
        case "featured": return !!e.featured;
        default:         return true;
      }
    });
    return list.sort((a, b) => new Date(a.date) - new Date(b.date));
  }, [activeFilter]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
      tl.to(eyebrowRef.current,  { opacity: 1, y: 0,  duration: 0.5, ease: "power2.out" })
        .to(titleARef.current,    { opacity: 1, clipPath: "inset(-20% 0% -20% 0%)", duration: 1.0, ease: "power3.out" }, "-=0.2")
        .to(titleBRef.current,    { opacity: 1, clipPath: "inset(-20% 0% -20% 0%)", duration: 1.0, ease: "power3.out" }, "-=0.7")
        .to(subRef.current,       { opacity: 1, y: 0,  duration: 0.6, ease: "power2.out" }, "-=0.4")
        .to(tabsRef.current,      { opacity: 1, y: 0,  duration: 0.5, ease: "power2.out" }, "-=0.3")
        .to(featuredRef.current,  { opacity: 1, y: 0,  clipPath: "inset(0% 0% 0% 0%)", duration: 1.0, ease: "power3.out" }, "-=0.2")
        .to(listHeadRef.current,  { opacity: 1, y: 0,  duration: 0.5, ease: "power2.out" }, "-=0.4");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="ec">
      <div className="ec-inner">

        {/* HEADER */}
        <p ref={eyebrowRef} className="ec-eyebrow">
          <span className="ec-eyebrow-rule" />
          A Year of Celebrations
        </p>

        <h2 className="ec-title">
          <span ref={titleARef} className="ec-title-1 seasons">The Event</span>
          <span ref={titleBRef} className="ec-title-2 seasons">Calendar</span>
        </h2>

        <p ref={subRef} className="ec-sub">
          Every milestone, satsang, and seva initiative of the 60th year — gathered in one place.
        </p>

        {/* TABS */}
        <div ref={tabsRef} className="ec-tabs">
          <div className="ec-tabs-inner">
            {filters.map((t) => {
              const active = activeFilter === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveFilter(t.id)}
                  className={`ec-tab ${active ? "is-active" : ""}`}
                >
                  <span className="ec-tab-label">{t.label}</span>
                  {active && (
                    <motion.span
                      layoutId="ec-tab-underline"
                      className="ec-tab-underline"
                      transition={{ type: "spring", stiffness: 500, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* FEATURED HERO */}
        <article ref={featuredRef} className="ec-featured">
          <div className="ec-featured-img-wrap">
            <img
              src={featured.img}
              alt={featured.title}
              className="ec-featured-img"
            />
            <div className="ec-featured-grad" />
            <span className="ec-featured-frame" />
            <span className="ec-corner ec-corner--tl" />
            <span className="ec-corner ec-corner--tr" />
            <span className="ec-corner ec-corner--bl" />
            <span className="ec-corner ec-corner--br" />
            <span className="ec-featured-pill seasons">Featured&nbsp;·&nbsp;Next</span>
          </div>

          <div className="ec-featured-body">
            <div className="ec-featured-date">
              <span className="ec-featured-day seasons">{featured.day}</span>
              <span className="ec-featured-mo">
                <span className="ec-featured-mo-name">{featured.month}</span>
                <span className="ec-featured-mo-year">2026</span>
              </span>
            </div>

            <span className="ec-featured-tag">{featured.category}</span>

            <h3 className="ec-featured-title seasons">{featured.title}</h3>

            <p className="ec-featured-loc">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {featured.location}
            </p>

            <div className="ec-featured-cta">
              <a href="#" className="ec-btn ec-btn-primary">
                Register Now
                <svg width="16" height="10" viewBox="0 0 22 12" fill="none">
                  <path d="M0 6h20M16 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#" className="ec-btn ec-btn-ghost">View Details</a>
            </div>
          </div>
        </article>

        {/* LIST HEADER */}
        <div ref={listHeadRef} className="ec-list-head">
          <p className="ec-list-label">
            <span className="ec-list-rule" />
            All {filters.find((f) => f.id === activeFilter)?.label} Events
          </p>
          <span className="ec-list-count seasons">{visibleEvents.length}</span>
        </div>

        {/* LIST */}
        <AnimatePresence mode="wait">
          <motion.ul
            key={activeFilter}
            className="ec-list"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {visibleEvents.length === 0 && (
              <li className="ec-empty">
                <span className="seasons">No events in this period.</span>
              </li>
            )}
            {visibleEvents.map((ev, i) => (
              <motion.li
                key={ev.id}
                className="ec-row"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.45, ease: "easeOut" }}
              >
                <a href="#" className="ec-row-link">
                  <div className="ec-row-date">
                    <span className="ec-row-day seasons">{ev.day}</span>
                    <span className="ec-row-month">{ev.month}</span>
                  </div>
                  <div className="ec-row-thumb">
                    <img src={ev.img} alt={ev.title} />
                  </div>
                  <div className="ec-row-info">
                    <span className="ec-row-tag">{ev.category}</span>
                    <h4 className="ec-row-title seasons">{ev.title}</h4>
                    <p className="ec-row-loc">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {ev.location}
                    </p>
                  </div>
                  <span className="ec-row-arrow" aria-hidden="true">
                    <svg width="22" height="12" viewBox="0 0 22 12" fill="none">
                      <path d="M0 6h20M16 1l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>

        {/* CLOSING CTA */}
        <div className="ec-foot">
          <a href="#" className="ec-foot-link">
            <span>View The Full 60-Year Archive</span>
            <svg width="22" height="12" viewBox="0 0 22 12" fill="none">
              <path d="M0 6h20M16 1l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        .ec {
          position: relative;
          padding: clamp(80px, 9vw, 140px) clamp(24px, 4.167vw, 80px);
          background:
            radial-gradient(60% 50% at 80% 0%, rgba(201, 162, 87, 0.08), transparent 60%),
            linear-gradient(180deg, #fcf8ee 0%, #f6efd8 100%);
          overflow: hidden;
        }
        .ec::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.04;
          mix-blend-mode: multiply;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
        }
        .ec-inner {
          position: relative;
          z-index: 2;
          max-width: 1480px;
          margin: 0 auto;
        }

        /* === HEADER === */
        .ec-eyebrow {
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
        .ec-eyebrow-rule {
          width: 28px;
          height: 1px;
          background: var(--color-gold, #c9a257);
        }

        .ec-title {
          margin: 0 0 22px;
          line-height: 0.95;
          letter-spacing: -0.015em;
          font-weight: 400;
          color: var(--color-burgundy-deep, #331418);
          font-size: clamp(48px, 8.5vw, 156px);
          display: flex;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 0.18em;
        }
        .ec-title-1,
        .ec-title-2 {
          display: inline-block;
          font-family: "The Seasons", serif !important;
          opacity: 0;
          padding: 0 0.04em;
          clip-path: inset(-20% 100% -20% 0%);
        }
        .ec-title-1 {
          background: linear-gradient(180deg, #331418 0%, #5b1d33 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .ec-title-2 {
          font-style: italic;
          color: var(--color-gold, #c9a257);
        }

        .ec-sub {
          font-family: "Montserrat", sans-serif;
          max-width: 580px;
          font-size: clamp(14px, 1.05vw, 16px);
          line-height: 1.8;
          color: rgba(40, 37, 38, 0.75);
          margin: 0 0 48px;
          opacity: 0;
          transform: translateY(10px);
        }

        /* === TABS === */
        .ec-tabs {
          margin: 0 0 56px;
          opacity: 0;
          transform: translateY(8px);
          border-bottom: 1px solid rgba(51, 20, 24, 0.12);
        }
        .ec-tabs-inner {
          display: flex;
          gap: clamp(20px, 3vw, 56px);
          overflow-x: auto;
          scrollbar-width: none;
        }
        .ec-tabs-inner::-webkit-scrollbar { display: none; }
        .ec-tab {
          position: relative;
          background: none;
          border: none;
          padding: 16px 0;
          cursor: pointer;
          flex-shrink: 0;
          color: rgba(51, 20, 24, 0.45);
          transition: color 0.3s ease;
        }
        .ec-tab.is-active { color: var(--color-burgundy-deep, #331418); }
        .ec-tab:hover { color: var(--color-burgundy-deep, #331418); }
        .ec-tab-label {
          font-family: "Montserrat", sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }
        .ec-tab-underline {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -1px;
          height: 2px;
          background: var(--color-gold, #c9a257);
        }

        /* === FEATURED === */
        .ec-featured {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 0;
          background: #fffaf0;
          border: 1px solid rgba(201, 162, 87, 0.32);
          border-radius: 4px;
          overflow: hidden;
          margin: 0 0 80px;
          opacity: 0;
          transform: translateY(28px);
          clip-path: inset(0% 0% 100% 0%);
          box-shadow:
            0 30px 70px -22px rgba(51, 20, 24, 0.22),
            0 8px 18px -6px rgba(51, 20, 24, 0.10);
        }
        .ec-featured-img-wrap {
          position: relative;
          min-height: 380px;
          overflow: hidden;
        }
        .ec-featured-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.9s ease;
        }
        .ec-featured:hover .ec-featured-img { transform: scale(1.03); }
        .ec-featured-grad {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(51, 20, 24, 0) 50%, rgba(51, 20, 24, 0.45) 100%);
          z-index: 1;
        }
        .ec-featured-frame {
          position: absolute;
          inset: 14px;
          border: 1px solid rgba(248, 241, 229, 0.32);
          z-index: 2;
          pointer-events: none;
        }
        .ec-featured-pill {
          position: absolute;
          top: 22px;
          left: 22px;
          z-index: 3;
          font-family: "The Seasons", serif !important;
          font-style: italic;
          font-size: 14px;
          color: var(--color-cream, #f8f1e5);
          background: rgba(51, 20, 24, 0.55);
          backdrop-filter: blur(8px);
          padding: 8px 16px;
          border: 1px solid rgba(201, 162, 87, 0.55);
          border-radius: 9999px;
          letter-spacing: 0.04em;
        }
        .ec-corner {
          position: absolute;
          width: 22px;
          height: 22px;
          border: 1px solid var(--color-gold, #c9a257);
          z-index: 3;
          pointer-events: none;
        }
        .ec-corner--tl { top: 18px;    left: 18px;    border-right: none; border-bottom: none; }
        .ec-corner--tr { top: 18px;    right: 18px;   border-left: none;  border-bottom: none; }
        .ec-corner--bl { bottom: 18px; left: 18px;    border-right: none; border-top: none; }
        .ec-corner--br { bottom: 18px; right: 18px;   border-left: none;  border-top: none; }

        .ec-featured-body {
          padding: clamp(28px, 3.5vw, 56px);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .ec-featured-date {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding-bottom: 22px;
          margin-bottom: 24px;
          border-bottom: 1px solid rgba(51, 20, 24, 0.12);
        }
        .ec-featured-day {
          font-family: "The Seasons", serif !important;
          font-size: clamp(56px, 5.5vw, 88px);
          line-height: 0.85;
          color: var(--color-burgundy-deep, #331418);
          font-weight: 500;
        }
        .ec-featured-mo {
          display: flex;
          flex-direction: column;
          padding-top: 10px;
        }
        .ec-featured-mo-name {
          font-family: "Montserrat", sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--color-rust, #8a432f);
        }
        .ec-featured-mo-year {
          font-family: "The Seasons", serif !important;
          font-style: italic;
          font-size: 22px;
          color: var(--color-gold, #c9a257);
          margin-top: 4px;
        }
        .ec-featured-tag {
          display: inline-flex;
          align-self: flex-start;
          font-family: "Montserrat", sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--color-gold, #c9a257);
          padding: 5px 12px;
          border: 1px solid rgba(201, 162, 87, 0.45);
          border-radius: 9999px;
          margin-bottom: 14px;
        }
        .ec-featured-title {
          font-family: "The Seasons", serif !important;
          font-size: clamp(28px, 3vw, 44px);
          color: var(--color-burgundy-deep, #331418);
          font-weight: 500;
          line-height: 1.1;
          margin: 0 0 14px;
        }
        .ec-featured-loc {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: "Montserrat", sans-serif;
          font-size: 13px;
          letter-spacing: 0.04em;
          color: rgba(40, 37, 38, 0.75);
          margin: 0 0 28px;
        }
        .ec-featured-loc svg { stroke: var(--color-gold, #c9a257); flex-shrink: 0; }
        .ec-featured-cta {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .ec-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: "Montserrat", sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 13px 26px;
          border-radius: 9999px;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .ec-btn-primary {
          background: var(--color-burgundy-deep, #331418);
          color: var(--color-cream, #f8f1e5);
          border: 1px solid var(--color-burgundy-deep, #331418);
        }
        .ec-btn-primary svg { stroke: var(--color-gold, #c9a257); }
        .ec-btn-primary:hover { background: #5b1d33; gap: 14px; }
        .ec-btn-ghost {
          background: transparent;
          color: var(--color-burgundy-deep, #331418);
          border: 1px solid var(--color-burgundy-deep, #331418);
        }
        .ec-btn-ghost:hover {
          background: var(--color-burgundy-deep, #331418);
          color: var(--color-cream, #f8f1e5);
        }

        /* === LIST HEAD === */
        .ec-list-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 0 0 12px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(51, 20, 24, 0.14);
          opacity: 0;
          transform: translateY(8px);
        }
        .ec-list-label {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          font-family: "Montserrat", sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--color-rust, #8a432f);
          margin: 0;
        }
        .ec-list-rule {
          width: 24px;
          height: 1px;
          background: var(--color-gold, #c9a257);
        }
        .ec-list-count {
          font-family: "The Seasons", serif !important;
          font-style: italic;
          font-size: 22px;
          color: var(--color-burgundy-deep, #331418);
        }

        /* === LIST === */
        .ec-list {
          list-style: none;
          padding: 0;
          margin: 0 0 56px;
        }
        .ec-empty {
          padding: 60px 0;
          text-align: center;
          color: rgba(40, 37, 38, 0.45);
          font-size: 18px;
        }
        .ec-row + .ec-row .ec-row-link { border-top: 1px solid rgba(51, 20, 24, 0.10); }
        .ec-row-link {
          display: grid;
          grid-template-columns: 92px 132px 1fr 44px;
          align-items: center;
          gap: 28px;
          padding: 22px 12px;
          text-decoration: none;
          color: inherit;
          transition: background 0.3s ease, padding 0.3s ease;
          position: relative;
        }
        .ec-row-link::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -1px;
          height: 2px;
          background: var(--color-gold, #c9a257);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s ease;
        }
        .ec-row-link:hover {
          background: rgba(255, 250, 240, 0.7);
          padding-left: 22px;
          padding-right: 22px;
        }
        .ec-row-link:hover::after { transform: scaleX(1); }
        .ec-row-date {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1;
        }
        .ec-row-day {
          font-family: "The Seasons", serif !important;
          font-size: clamp(38px, 3.6vw, 54px);
          color: var(--color-burgundy-deep, #331418);
          font-weight: 500;
          line-height: 0.85;
        }
        .ec-row-month {
          margin-top: 4px;
          font-family: "Montserrat", sans-serif;
          font-size: 11px;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--color-rust, #8a432f);
          font-weight: 700;
        }
        .ec-row-thumb {
          width: 132px;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border-radius: 2px;
          background: #efe6cf;
        }
        .ec-row-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
        }
        .ec-row-link:hover .ec-row-thumb img { transform: scale(1.06); }
        .ec-row-info { min-width: 0; }
        .ec-row-tag {
          display: inline-block;
          font-family: "Montserrat", sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--color-gold, #c9a257);
          margin-bottom: 6px;
        }
        .ec-row-title {
          font-family: "The Seasons", serif !important;
          font-size: clamp(20px, 1.8vw, 28px);
          color: var(--color-burgundy-deep, #331418);
          font-weight: 500;
          margin: 0 0 6px;
          line-height: 1.2;
          transition: color 0.3s ease;
        }
        .ec-row-link:hover .ec-row-title { color: #5b1d33; }
        .ec-row-loc {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: "Montserrat", sans-serif;
          font-size: 12px;
          color: rgba(40, 37, 38, 0.6);
          margin: 0;
        }
        .ec-row-loc svg { stroke: var(--color-rust, #8a432f); flex-shrink: 0; }
        .ec-row-arrow {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(51, 20, 24, 0.20);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-burgundy-deep, #331418);
          transition: background 0.3s ease, border-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
        }
        .ec-row-arrow svg { stroke: currentColor; }
        .ec-row-link:hover .ec-row-arrow {
          background: var(--color-burgundy-deep, #331418);
          border-color: var(--color-burgundy-deep, #331418);
          color: var(--color-gold, #c9a257);
        }

        /* === FOOT === */
        .ec-foot {
          display: flex;
          justify-content: center;
          padding-top: 12px;
        }
        .ec-foot-link {
          display: inline-flex;
          align-items: center;
          gap: 14px;
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
        .ec-foot-link svg { stroke: var(--color-gold, #c9a257); transition: stroke 0.3s ease; }
        .ec-foot-link:hover {
          gap: 22px;
          background: var(--color-burgundy-deep, #331418);
          color: var(--color-cream, #f8f1e5);
        }

        /* === RESPONSIVE === */
        @media (max-width: 1100px) {
          .ec-featured {
            grid-template-columns: 1fr;
          }
          .ec-featured-img-wrap { min-height: 320px; }
        }
        @media (max-width: 800px) {
          .ec-row-link {
            grid-template-columns: 76px 100px 1fr 38px;
            gap: 18px;
            padding: 18px 6px;
          }
          .ec-row-thumb { width: 100px; }
        }
        @media (max-width: 600px) {
          .ec {
            padding: 64px 22px;
          }
          .ec-title {
            gap: 0.1em;
            font-size: clamp(40px, 11vw, 80px);
          }
          .ec-tabs-inner { gap: 24px; }
          .ec-tab-label { font-size: 11px; letter-spacing: 0.16em; }
          .ec-featured-img-wrap { min-height: 240px; }
          .ec-featured-pill { font-size: 12px; padding: 6px 12px; top: 14px; left: 14px; }
          .ec-corner { width: 18px; height: 18px; }
          .ec-corner--tl { top: 12px; left: 12px; }
          .ec-corner--tr { top: 12px; right: 12px; }
          .ec-corner--bl { bottom: 12px; left: 12px; }
          .ec-corner--br { bottom: 12px; right: 12px; }
          .ec-featured-day { font-size: 56px; }
          .ec-featured-mo-year { font-size: 18px; }
          .ec-featured-title { font-size: 24px; }

          .ec-row-link {
            grid-template-columns: 60px 1fr 32px;
            gap: 14px;
            padding: 16px 4px;
          }
          .ec-row-thumb { display: none; }
          .ec-row-day { font-size: 34px; }
          .ec-row-month { font-size: 10px; letter-spacing: 0.22em; }
          .ec-row-title { font-size: 17px; }
          .ec-row-tag { font-size: 9px; letter-spacing: 0.22em; }
          .ec-row-arrow { width: 36px; height: 36px; }
        }
      `}</style>
    </section>
  );
}

export default EventCalender;
