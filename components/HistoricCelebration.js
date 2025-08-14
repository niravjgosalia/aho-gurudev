import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Montserrat } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import EventsHighlight from "./EventsHighlight";

gsap.registerPlugin(ScrollTrigger);

const montserrat = Montserrat({ subsets: ["latin"] });

function HistoricCelebration() {
  const sectionRef = useRef(null);
  const img2Ref = useRef(null);
  const eventsRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Initial states
      gsap.set(img2Ref.current, { clipPath: "inset(100% 0% 0% 0%)" }); // hide image2 from top
      gsap.set(eventsRef.current, { x: "100%", opacity: 0 }); // start EventsHighlight offscreen right

      // Timeline with ScrollTrigger
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      })
        // Step 1: Reveal second image
        .to(img2Ref.current, {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          duration: 1,
        })
        // Step 2: Slide in EventsHighlight from right
        .to(eventsRef.current, {
          x: "0%",
          opacity: 1,
          duration: 1,
          ease: "power3.out", // smooth animation
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={sectionRef} className="relative min-h-screen overflow-hidden">
        <div className="h-screen overflow-hidden">
          <div className="md:flex my-[4vw] container px-4 mx-auto content z-10 relative">
            <div className="w-full md:w-8/12">
              <h2 className="sec_title text-[#5E2A29] capitalize font-[700]">
                Historic Celebration
              </h2>
              <p
                className={`${montserrat.className} text-sm md:text-lg lg:text-[1.354vw] text-[#322F35]`}
              >
                Spiritual festivals, social impact initiatives. all around the
                globe, cultural carnivals. A year-long celebration honouring
                Pujya Gurudevshri’s inspiring life.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-screen imgwrapper">
              {/* First Image */}
              <Image
                src="/images/historic-celeberation.png"
                fill
                
                alt="image1"
                className="object-cover"
              />

              {/* Second Image */}
              <Image
                ref={img2Ref}
                src="/images/historic-celeberation2.png"
                fill
                alt="image2"
                className="absolute top-0 left-0 object-cover"
              />
            </div>
          </div>

          {/* EventsHighlight */}
          <div
            ref={eventsRef}
            className="md:absolute md:bottom-[5vw] right-0 z-50"
          >
            <EventsHighlight />
          </div>
        </div>
      </div>
    </>
  );
}

export default HistoricCelebration;
