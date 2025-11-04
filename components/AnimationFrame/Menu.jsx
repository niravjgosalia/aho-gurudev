import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Menu = () => {
  const menuRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  const data = [
    {
      num: 1,
      title: "early years",
      id: "early-year",
    },
    {
      num: 2,
      title: "Friend & Guide",
      id: "friend",
    },
    // Add more sections as needed
  ];

  useEffect(() => {
    const menu = menuRef.current;

    // Create a timeline for better control
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#menu-start",
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      menu,
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Hide animation when celebration section enters
    gsap.timeline({
      scrollTrigger: {
        trigger: "#celebration",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse",
        onEnter: () =>
          gsap.to(menu, {
            y: 200,
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
          }),
        onLeaveBack: () =>
          gsap.to(menu, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.inOut",
          }),
      },
    });

    // Create ScrollTriggers for each section to track active section
    data.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: `#${section.id}`,
        start: "top center",
        end: "bottom center",
        onEnter: () => setActiveSection(index),
        onEnterBack: () => setActiveSection(index),
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  const currentSection = data[activeSection];

  return (
    <div
      ref={menuRef}
      className="fixed translate-y-[200px] opacity-0 transition-all duration-700 
                 px-4 w-full sm:w-[425px] lg:w-full z-10 right-0 bottom-5 lg:bottom-[1.5vw] 
                 text-[#5E2A29]"
    >
      <div className="flex justify-between lg:justify-end items-center lg:items-end gap-4 lg:gap-[1.563vw]">
        <div className="flex justify-between items-center max-lg:gap-[12px] p-[10px] lg:p-[0.833vw] bg-[#f3f2dd] custom-shadow">
          <h6 className="max-lg:hidden lg:pe-[0.833vw] border-r border-[#5E2A29] seasons lg:text-[1.458vw]">
            {String(currentSection.num).padStart(2, "0")}
          </h6>
          <p className="content lg:mx-[0.833vw] capitalize">
            {currentSection.title}
          </p>
          <Image
            height={40}
            width={40}
            src="/icons/plus-square.svg"
            alt="plus"
            onClick={() => console.log("clicked", currentSection)}
            className="lg:size-[1.979vw] cursor-pointer"
          />
        </div>

        <Link
          href="/#celebration"
          className="border border-[#5E2A29] bg-[#f3f2dd] p-[10px] lg:py-[0.521vw] lg:px-[1.042vw] text-[14px] lg:text-[0.833vw] content flex justify-center items-center gap-2"
        >
          Skip
          <Image
            height={18}
            width={18}
            src="/icons/arrow-down.svg"
            alt="arrow"
            className="lg:size-[0.938vw]"
          />
        </Link>
      </div>
    </div>
  );
};

export default Menu;
