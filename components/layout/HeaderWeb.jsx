import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Link from "next/link";

const HeaderWeb = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const links = [
    { name: "Events", link: "/events/0" },
    { name: "About Gurudevshri", link: "#" },
    { name: "Social Initiatives", link: "#" },
    { name: "Contact Us", link: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 60);
      setHidden(currentY > 100 && currentY > lastScrollY);
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 24 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        padding: "0 clamp(20px, 4.167vw, 80px)",
        transition: "background-color 0.4s ease, backdrop-filter 0.4s ease",
        backgroundColor: scrolled
          ? "rgba(51, 20, 24, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Wordmark */}
        <Link href="/">
          <img
            src="/tag.png"
            alt="Aho Gurudev"
            style={{
              width: "clamp(140px, 14vw, 220px)",
              height: "auto",
              display: "block",
            }}
          />
        </Link>

        {/* Nav Links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(16px, 2vw, 40px)",
          }}
        >
          {links.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-cream)",
                opacity: 0.85,
                textDecoration: "none",
                transition: "opacity 0.25s ease",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = "1")}
              onMouseLeave={(e) => (e.target.style.opacity = "0.85")}
            >
              {item.name}
            </Link>
          ))}

          {/* Search icon */}
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-cream)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          {/* Register button */}
          <button
            className="btn-brand btn-brand-filled"
            style={{ padding: "10px 24px" }}
          >
            Register
          </button>
        </nav>
      </div>
    </motion.header>
  );
};

export default HeaderWeb;
