import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const VoiceQuote = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacityText = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 1, 1, 0]
  );

  return (
    <section ref={ref} className="vq">
      <div className="vq-glow" aria-hidden />

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
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(96px, 11vw, 160px) clamp(20px, 4vw, 80px);
          overflow: hidden;
          isolation: isolate;
          color: #2a1110;
          background: linear-gradient(180deg, #fbf7ee 0%, #f4ecd9 100%);
        }
        .vq-glow {
          position: absolute;
          inset: 0;
          z-index: -1;
          background: radial-gradient(60% 55% at 50% 50%, rgba(201, 162, 90, 0.16), transparent 70%);
          pointer-events: none;
        }
        .vq-content {
          position: relative;
          max-width: 940px;
          text-align: center;
        }
        .vq-flourish {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #c9a25a, transparent);
          margin: 0 auto 24px;
        }
        .vq-eyebrow {
          font-family: "Montserrat", sans-serif;
          font-size: 11px;
          letter-spacing: 0.36em;
          text-transform: uppercase;
          color: #8a432f;
          margin: 0 0 36px;
        }
        .vq-quote {
          font-family: "The Seasons", serif !important;
          font-size: clamp(28px, 4.2vw, 60px);
          line-height: 1.28;
          letter-spacing: 0.005em;
          color: #2a1110;
          margin: 0 0 40px;
          font-weight: 400;
          position: relative;
        }
        .vq-quote em {
          font-style: italic;
          color: #8a432f;
        }
        .vq-mark {
          display: inline-block;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 1.4em;
          color: #c9a25a;
          margin-right: 6px;
          line-height: 0;
          position: relative;
          top: 0.22em;
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
          color: rgba(42, 17, 16, 0.7);
        }

        @media (max-width: 600px) {
          .vq { padding: 72px 22px; }
          .vq-quote { font-size: 26px; line-height: 1.34; margin-bottom: 32px; }
          .vq-eyebrow { margin-bottom: 28px; }
        }
      `}</style>
    </section>
  );
};

export default VoiceQuote;
