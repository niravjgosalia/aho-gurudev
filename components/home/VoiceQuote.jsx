import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const VoiceQuote = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const yText = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacityText = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 1, 1, 0]
  );

  return (
    <section ref={ref} className="vq">
      <motion.div className="vq-bg" style={{ y: yBg }} />
      <div className="vq-vignette" />
      <div className="vq-grain" aria-hidden />

      <motion.div
        className="vq-content"
        style={{ y: yText, opacity: opacityText }}
      >
        <div className="vq-flourish" aria-hidden />
        <p className="vq-eyebrow">In His Words</p>
        <blockquote className="vq-quote seasons">
          <span className="vq-mark" aria-hidden>"</span>
          A life lived in grace and compassion <em>transcends time</em>,
          finding its truest measure in the hearts <em>it awakens.</em>
        </blockquote>
        <div className="vq-attrib">
          <span className="vq-attrib-rule" />
          <span className="vq-attrib-name">Pujya Gurudevshri Rakeshji</span>
        </div>
      </motion.div>

      <style jsx>{`
        .vq {
          position: relative;
          min-height: clamp(560px, 90vh, 800px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(80px, 9vw, 140px) clamp(20px, 4vw, 80px);
          overflow: hidden;
          isolation: isolate;
          color: #f5e3ba;
          background: #0a0504;
        }
        .vq-bg {
          position: absolute;
          inset: -120px 0 -120px 0;
          z-index: -2;
          background-image: url("/images/gurudev-portrait.jpg");
          background-size: cover;
          background-position: center 30%;
          filter: brightness(0.32) saturate(0.85) contrast(1.05);
        }
        .vq-vignette {
          position: absolute;
          inset: 0;
          z-index: -1;
          background:
            radial-gradient(60% 50% at 50% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 100%),
            linear-gradient(180deg, rgba(10,5,4,0.6) 0%, rgba(10,5,4,0.15) 35%, rgba(10,5,4,0.15) 65%, rgba(10,5,4,0.85) 100%);
        }
        .vq-grain {
          position: absolute;
          inset: 0;
          z-index: -1;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.06;
          mix-blend-mode: overlay;
        }
        .vq-content {
          position: relative;
          max-width: 1040px;
          text-align: center;
        }
        .vq-flourish {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #c9a25a, transparent);
          margin: 0 auto 22px;
        }
        .vq-eyebrow {
          font-family: "Montserrat", sans-serif;
          font-size: 11px;
          letter-spacing: 0.36em;
          text-transform: uppercase;
          color: #c9a25a;
          margin: 0 0 32px;
        }
        .vq-quote {
          font-family: "The Seasons", serif !important;
          font-size: clamp(28px, 4.4vw, 64px);
          line-height: 1.25;
          letter-spacing: 0.005em;
          color: #f5e3ba;
          margin: 0 0 44px;
          font-weight: 400;
          position: relative;
        }
        .vq-quote em {
          font-style: italic;
          background: linear-gradient(180deg, #fbecc4 0%, #d6a85d 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .vq-mark {
          display: inline-block;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1.1em;
          color: #c9a25a;
          margin-right: 8px;
          line-height: 0;
          position: relative;
          top: 0.18em;
        }
        .vq-attrib {
          display: inline-flex;
          align-items: center;
          gap: 14px;
        }
        .vq-attrib-rule {
          width: 32px;
          height: 1px;
          background: #c9a25a;
        }
        .vq-attrib-name {
          font-family: "Montserrat", sans-serif;
          font-size: 11px;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(245, 227, 186, 0.9);
        }

        @media (max-width: 600px) {
          .vq { min-height: 70vh; padding: 80px 22px; }
          .vq-quote { font-size: 26px; line-height: 1.32; }
        }
      `}</style>
    </section>
  );
};

export default VoiceQuote;
