"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function MobileBanner() {
  const sectionRef = useRef(null);
  const image2Ref = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top-=63px top",
          end: "+=100%", // animation length
          scrub: true,
          pin: true,
          pinSpacing: true, // ensures space is added so next section doesn't overlap
          // markers:true,
        },
      });

      tl.to(image2Ref.current, { opacity: 1, ease: "none" }, 0.3).to(
        textRef.current,
        { y: 200, opacity: 0.8, ease: "none" },
        0
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden ">
      <div className="flex items-center justify-start h-full">
        {/* First image */}
        <Image
          src="/images/banner/mob1.jpg"
          className="object-cover w-full h-full"
          width={375}
          height={748}
          alt="mobile1"
        />

        {/* Second image */}
        <div
          ref={image2Ref}
          className="absolute inset-0 w-full h-full opacity-0"
        >
          <Image
            src="/images/banner/mob2.jpg"
            className="object-cover w-full h-full"
            width={375}
            height={748}
            alt="mobile2"
          />
        </div>

        {/* Text */}
        <h3
          ref={textRef}
          className="bannertitle px-4 container seasons text-white absolute capitalize text-[80px] leading-[1.1] text-start seasons"
        >
          Aho <br /> gurudev
        </h3>
      </div>
    </section>
  );
}

export default MobileBanner;
