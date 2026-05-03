import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, useMotionValue, animate } from "framer-motion";

const stats = [
  { target: 60, suffix: "+", l: "Cities" },
  { target: 6, suffix: "", l: "Continents" },
  { target: 1.2, suffix: "M+", decimals: 1, l: "Seekers" },
  { target: 60, suffix: "", l: "Years" },
];

const StatCounter = ({ target, suffix = "", decimals = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const mv = { v: 0 };
    const controls = animate(0, target, {
      duration: 1.8,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (latest) => setVal(latest),
    });
    return () => controls.stop();
  }, [inView, target]);

  return (
    <span ref={ref} className="jm-stat-v">
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const JoinMovement = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [40, -80]);

  return (
    <section ref={ref} className="jm">
      <motion.div className="jm-bg" style={{ y: yBg }} />
      <div className="jm-overlay" />
      <div className="jm-grain" aria-hidden />

      <div className="jm-inner">
        <motion.div
          className="jm-head"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="jm-flourish" />
          <p className="jm-eyebrow">Be a Part of History</p>
          <h2 className="jm-title seasons">
            A year. A lifetime. <em>A movement.</em>
          </h2>
          <p className="jm-sub">
            Stand with millions of seekers across the world as we honour 60
            years of an enlightened existence — a celebration not of one life,
            but of every life it has touched.
          </p>
        </motion.div>

        <motion.div
          className="jm-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              className="jm-stat"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.2, 0.8, 0.2, 1],
              }}
            >
              <StatCounter target={s.target} suffix={s.suffix} decimals={s.decimals || 0} />
              <span className="jm-stat-l">{s.l}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="jm-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a href="#register" className="jm-btn jm-btn-primary">
            <span>Reserve Your Seat</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="1.6" stroke="currentColor">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="13 6 19 12 13 18" />
            </svg>
          </a>
          <a href="#newsletter" className="jm-btn jm-btn-ghost">
            Receive Updates
          </a>
        </motion.div>

        <p className="jm-foot">
          25 – 26 September 2026 · Jio World Convention Centre, Mumbai
        </p>
      </div>

      <style jsx>{`
        .jm {
          position: relative;
          padding: clamp(100px, 12vw, 180px) clamp(20px, 4vw, 80px);
          overflow: hidden;
          isolation: isolate;
          color: #f5e3ba;
          text-align: center;
          background: #0a0504;
        }
        .jm-bg {
          position: absolute;
          inset: -80px 0 -80px 0;
          z-index: -2;
          background-image: url("/images/venues/jio-world.jpg");
          background-size: cover;
          background-position: center 60%;
          filter: brightness(0.35) saturate(0.85);
        }
        .jm-overlay {
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            radial-gradient(60% 50% at 50% 50%, rgba(201, 162, 90, 0.15), transparent 70%),
            linear-gradient(180deg, rgba(10,5,4,0.6) 0%, rgba(10,5,4,0.4) 50%, rgba(10,5,4,0.85) 100%);
        }
        .jm-grain {
          position: absolute;
          inset: 0;
          z-index: -1;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.06;
          mix-blend-mode: overlay;
        }
        .jm-inner {
          position: relative;
          max-width: 1040px;
          margin: 0 auto;
        }
        .jm-flourish {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #c9a25a, transparent);
          margin: 0 auto 22px;
        }
        .jm-eyebrow {
          font-family: "Montserrat", sans-serif;
          font-size: 11px;
          letter-spacing: 0.36em;
          text-transform: uppercase;
          color: #c9a25a;
          margin: 0 0 22px;
        }
        .jm-inner { max-width: 1200px; }
        .jm-title {
          font-family: "The Seasons", serif !important;
          font-size: clamp(34px, 5vw, 72px);
          line-height: 1.05;
          color: #f5e3ba;
          margin: 0 0 22px;
          white-space: nowrap;
        }
        @media (max-width: 720px) {
          .jm-title { white-space: normal; font-size: clamp(30px, 8vw, 44px); }
        }
        .jm-title em {
          font-style: italic;
          background: linear-gradient(180deg, #fbecc4 0%, #d6a85d 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .jm-sub {
          font-family: "Montserrat", sans-serif;
          font-size: clamp(14px, 1.1vw, 17px);
          line-height: 1.85;
          color: rgba(245, 227, 186, 0.78);
          margin: 0 auto 56px;
          max-width: 720px;
        }
        :global(.jm-stats) {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          padding: 32px 0;
          border-top: 1px solid rgba(201, 162, 90, 0.25);
          border-bottom: 1px solid rgba(201, 162, 90, 0.25);
          margin-bottom: 56px;
        }
        :global(.jm-stat) {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .jm-stat-v {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 400;
          font-size: clamp(36px, 4.5vw, 64px);
          line-height: 1;
          background: linear-gradient(180deg, #fbecc4 0%, #c9a25a 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: -0.01em;
        }
        .jm-stat-l {
          font-family: "Montserrat", sans-serif;
          font-size: 10px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(201, 162, 90, 0.85);
        }
        :global(.jm-cta) {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }
        :global(.jm-head) { /* motion wrapper */ }
        .jm-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 20px 44px;
          font-family: "Montserrat", sans-serif;
          font-size: 12px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          border-radius: 999px;
          text-decoration: none;
          transition: transform 0.25s ease, filter 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, color 0.25s ease;
          position: relative;
          overflow: hidden;
        }
        .jm-btn-primary {
          color: #1a0a09;
          background: linear-gradient(180deg, #fbecc4 0%, #d6a85d 100%);
          box-shadow:
            0 18px 40px -10px rgba(201, 162, 90, 0.55),
            0 0 0 1px rgba(245, 220, 160, 0.3) inset;
        }
        .jm-btn-primary::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255, 255, 255, 0.5) 50%, transparent 70%);
          transform: translateX(-100%);
          transition: transform 0.7s ease;
        }
        .jm-btn-primary:hover { transform: translateY(-2px); filter: brightness(1.06); }
        .jm-btn-primary:hover::before { transform: translateX(100%); }
        .jm-btn-ghost {
          color: #f5e3ba;
          background: transparent;
          border: 1px solid rgba(245, 227, 186, 0.4);
        }
        .jm-btn-ghost:hover {
          background: rgba(245, 227, 186, 0.08);
          border-color: #c9a25a;
        }
        .jm-foot {
          font-family: "The Seasons", serif;
          font-style: italic;
          font-size: 14px;
          color: rgba(201, 162, 90, 0.75);
          margin: 0;
        }

        @media (max-width: 720px) {
          :global(.jm-stats) { grid-template-columns: repeat(2, 1fr); gap: 28px 16px; }
        }
        @media (max-width: 600px) {
          .jm { padding: 80px 22px; }
          :global(.jm-cta) { flex-direction: column; gap: 12px; }
          .jm-btn { width: 100%; justify-content: center; padding: 18px 32px; }
        }
      `}</style>
    </section>
  );
};

export default JoinMovement;
