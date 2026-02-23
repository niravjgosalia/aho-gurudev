import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import Button from "./layout/Button";
import { useGSAP } from "@gsap/react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"] });

function MobileHeader({ onComplete }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);

  const textsRef = useRef([]);
  const progressRef = useRef(null);
  const loaderRef = useRef(null);
  const logoWrapperRef = useRef(null); // NEW: wrapper for logo
  const menuBtnRef = useRef(null);
  const afterlogoposRef = useRef(null);
  const logoContainerRef = useRef(null);

  useGSAP(() => {
    // Place logo above tag.png before animations
    const tagImg = loaderRef.current.querySelector(".logotagline");
    if (tagImg && logoWrapperRef.current) {
      const tagPos = tagImg.getBoundingClientRect();
      const logoPos = logoWrapperRef.current.getBoundingClientRect();
      const gap = 20; // space in px between logo and tag

      gsap.set(logoWrapperRef.current, {
        position: "fixed",
        top: tagPos.top - logoPos.height - gap,
        left: (window.innerWidth - logoPos.width) / 2, // center horizontally
        zIndex: 9999,
      });
    }
  }, [onComplete]);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      onComplete: onComplete,
    });

    // Hide all text initially
    gsap.set(textsRef.current, { opacity: 0 });

    // Phase 1: Animate texts
    textsRef.current.forEach((text, i) => {
      if (i === textsRef.current.length - 1) {
        tl.to(text, { opacity: 1, duration: 1 }, "+=0.2");
      } else {
        tl.to(text, { opacity: 1, duration: 1 }, "+=0.2").to(
          text,
          { opacity: 0, duration: 0.5 },
          "+=1"
        );
      }
    });

    // Progress bar sync
    gsap.fromTo(
      progressRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: tl.duration(),
        ease: "linear",
        transformOrigin: "left center",
      }
    );

    // Phase 2: Fade out loader + move logo
    tl.add(() => {
      if (!logoWrapperRef.current || !afterlogoposRef.current) return;

      const logoPos = logoWrapperRef.current.getBoundingClientRect();
      const finalPos = afterlogoposRef.current.getBoundingClientRect();

      const offsetX = 15; // move 5px to the left
      const offsetY = 3; // move 10px up

      const xMove = finalPos.left - logoPos.left + offsetX;
      const yMove = finalPos.top - logoPos.top + offsetY;

      const targetWidth = finalPos.width;
      const targetHeight = finalPos.height;

      // Set initial fixed positioning
      gsap.set(logoWrapperRef.current, {
        position: "fixed",
        top: logoPos.top,
        left: logoPos.left,
        zIndex: 99,
        width: logoPos.width,
        height: logoPos.height,
      });

      tl.to(loaderRef.current, {
        opacity: 0,
        duration: 0.6,
        zIndex: -1,
        ease: "power2.inOut",
      }).to(
        logoWrapperRef.current,
        {
          x: xMove,
          y: yMove,
          width: targetWidth,
          height: targetHeight,
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      );
    });
  }, [onComplete]);

  return (
    <>
      <header className="fixed z-[47] bg-[#f3f2dd] w-full">
        <div className="py-[10px] container px-4 mx-auto ">
          <div className="flex justify-between">
            <div>
              <button
                ref={menuBtnRef}
                className="menubtn"
                onClick={() => setMenuOpen(true)}
              >
                <Image
                  src="/images/menubtn.png"
                  width={24}
                  height={24}
                  alt="menu button"
                />
              </button>
              <button
                ref={afterlogoposRef}
                className="logoposRef ps-3 w-[46px] h-[36px]"
              ></button>
            </div>

            <div className="flex items-center gap-[1rem]">
              <button className="searchbtn">
                <Image
                  src="/images/serach.png"
                  width={24}
                  height={24}
                  alt="search"
                />
              </button>
              <div>
                <Button name={"Events"} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        ref={logoWrapperRef}
        // className="fixed logo-wrapper z-50 left-[35%] top-[24%]"
        className="fixed z-50 logo-wrapper"
      >
        <div className="logowrapper">
          <Image
            src="/logo.png"
            className="h-auto max-w-full logo"
            width={865}
            height={694}
            alt="logo"
          />
        </div>
      </div>
      {/* </div> */}

      {/* Loader */}
      <div
        ref={loaderRef}
        className="fixed inset-0 z-[48] flex flex-col items-center justify-center bg-white"
      >
        <div className="logowrapper text-center mx-auto flex flex-col justify-center items-center gap-[0.625vw]">
          <Image
            src="/tag.png"
            className="h-auto max-w-full logotagline"
            width={721}
            height={139}
            alt="logo tagline"
          />
        </div>

        {/* Animated Text */}
        <div className="relative my-10 md:my-4 lg:my-[2.5vw] h-[3.333vw] w-full flex items-center justify-center">
          {[
            <>
              The grace of the Guru. <br /> The gratitude of the devotees.
            </>,
            <>
              60+ spiritual and social impact projects. <br /> 60+ cities across
              6 continents.
            </>,
            <>A historic celebration.</>,
          ].map((text, i) => (
            <p
              key={i}
              className={`${montserrat.className} absolute font-[400] text-[16px] sm:text-lg md:text-[1.25vw] text-[#86422F] text-center opacity-0`}
              style={{ fontStyle: "italic" }}
              ref={(el) => (textsRef.current[i] = el)}
            >
              {text}
            </p>
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-[18rem] md:w-[22.135vw] h-[0.2rem] md:h-[0.2vw] bg-[#86422f42] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] overflow-hidden">
          <div
            ref={progressRef}
            className="progress-bar h-full bg-[#86422F]"
            style={{ transform: "scaleX(0)" }}
          ></div>
        </div>

        <div
          className={`${montserrat.className} absolute mb-5 md:mb-[2.396vw] bottom-0 mx-auto text-center w-full font-[500] text-[14px] md:text-lg lg:text-[1.25vw] text-[#5E2A29]`}
          style={{ fontStyle: "italic" }}
        >
          26 September 2025 - 26 September 2026
        </div>
      </div>

      {/* Off-canvas Menu */}
      <div
        className={`fixed inset-0 z-[1000] transition-all duration-300 ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 left-0 h-full max-w-full w-full md:max-w-xl bg-[#F3F2DD] shadow-lg transform transition-transform duration-300 z-[999] ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Menu content goes here */}
          <div className="bg-[#6B2C2C] text-white py-10 px-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src="/logo.svg"
                alt="Logo"
                width={272}
                height={53}
                className="w-[272] h-[53]"
              />
            </div>
            <button onClick={() => setMenuOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="p-4">
            <Link
              href={"/events/0"}
              className={`${montserrat.className} py-3 text-[20px] text-[#322F35]`}
            >
              Events
            </Link>
            <div
              className={`${montserrat.className} py-3 text-[20px] text-[#322F35]`}
            >
              About Pujya Gurudevshri
            </div>
            <div
              className={`${montserrat.className} py-3 text-[20px] text-[#322F35]`}
            >
              Social Impact
            </div>
            <div
              className={`${montserrat.className} py-3 text-[20px] text-[#322F35]`}
            >
              Contact Us
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default MobileHeader;
