import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    mass: 0.4,
  });

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "0% 50%",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        background: "linear-gradient(90deg, #c9a25a 0%, #f5dca0 50%, #c9a25a 100%)",
        zIndex: 9999,
        pointerEvents: "none",
        boxShadow: "0 0 12px rgba(201, 162, 90, 0.6)",
      }}
    />
  );
};

export default ScrollProgress;
