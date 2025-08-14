import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

function Loader({ onComplete }) {
  const textsRef = useRef([]);
  const progressRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power2.out" },
      onComplete: () => {
        if (onComplete) onComplete(); // tell parent we're done
      },
    });

    // Hide all text initially
    gsap.set(textsRef.current, { opacity: 0 });

    // Animate texts one after another at same position
    textsRef.current.forEach((text, i) => {
      if (i === textsRef.current.length - 1) {
        // Last text stays visible
        tl.to(text, { opacity: 1 }, "+=0.2");
      } else {
        tl.to(text, { opacity: 1 }, "+=0.2") // fade in
          .to(text, { opacity: 0 }, "+=1"); // fade out
      }
    });

    // Progress bar animation
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
  }, [onComplete]);

  return (
    <div className="relative w-full h-full bg-white">
      <div className="flex flex-col items-center justify-center w-full h-full loader">
        {/* Text container with fixed position */}
        <div className="logowrapper text-center mx-auto flex flex-col justify-center items-center gap-[0.625vw]">
          <Image
            src="/logo.png"
            className="h-auto max-w-full"
            width={865}
            height={694}
            alt="logo"
          />
          <Image
            src="/tag.png"
            className="h-auto max-w-full"
            width={721}
            height={139}
            alt="logo tagline"
          />
        </div>
        <div className="relative my-10 md:my-4 lg:my-[2.5vw] h-[3.333vw] w-full flex items-center justify-center">
          <p
            className={`${montserrat.className} absolute font-[400] text-sm sm:text-lg md:text-[1.25vw] text-[#86422F] text-center opacity-0`}
            style={{ fontStyle: "italic" }}
            ref={(el) => (textsRef.current[0] = el)}
          >
            The grace of the Guru. <br /> The gratitude of the devotees.
          </p>
          <p
            className={`${montserrat.className} absolute font-[400] text-sm sm:text-lg md:text-[1.25vw] text-[#86422F] text-center opacity-0`}
            style={{ fontStyle: "italic" }}
            ref={(el) => (textsRef.current[1] = el)}
          >
            60+ spiritual and social impact projects. <br />
            60+ cities across 6 continents.
          </p>
          <p
            className={`${montserrat.className} absolute font-[400] text-sm sm:text-lg md:text-[1.25vw] text-[#86422F] text-center opacity-0`}
            style={{ fontStyle: "italic" }}
            ref={(el) => (textsRef.current[2] = el)}
          >
            A historic celebration.
          </p>
        </div>

        {/* Progress bar container */}
        <div className="w-[12rem] md:w-[22.135vw] h-[0.2rem] md:h-[0.2vw] bg-[#86422f42] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] overflow-hidden">
          <div
            ref={progressRef}
            className="progress-bar h-full bg-[#86422F]"
            style={{ transform: "scaleX(0)" }}
          ></div>
        </div>
      </div>

      <div
        className={`${montserrat.className} absolute mb-5 md:mb-[2.396vw] bottom-0 mx-auto tetx-center flex items-center justify-center w-full font-[500] text-sm md:text-lg lg:text-[1.25vw] text-[#5E2A29] text-center`}
        style={{ fontStyle: "italic" }}
      >
        26 September 2025 - 26 September 2026
      </div>
    </div>
  );
}

export default Loader;
