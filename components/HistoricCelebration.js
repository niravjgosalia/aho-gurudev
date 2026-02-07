import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Montserrat } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import EventsHighlight from "./EventsHighlight";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const montserrat = Montserrat({ subsets: ["latin"] });

function HistoricCelebration() {
  const sectionRef = useRef(null);
  const img2Ref = useRef(null);
  const eventsRef = useRef(null);
  const overlayref = useRef(null);

  useGSAP(() => {
    let ctx = gsap.context(() => {
      // Initial states
      gsap.set(img2Ref.current, { clipPath: "inset(100% 0% 0% 0%)" }); // hide image2 from top
      gsap.set(eventsRef.current, { x: "100%", opacity: 0 }); // start EventsHighlight offscreen right
      // Timeline with ScrollTrigger
      gsap
        .timeline({
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
        // Step 1: Reveal second image
        .to(
          overlayref.current,
          {
            // clipPath: "inset(0% 0% 0% 0%)", // fully revealed
            // ease: "none",
            opacity: 1,
            duration: 1,
          },
          "start"
        )

        // Step 2: Slide in EventsHighlight from right
        .to(
          eventsRef.current,
          {
            x: "0%",
            opacity: 1,
            duration: 1,
            ease: "power3.out", // smooth animation
          },
          "start"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        id="celebration"
        ref={sectionRef}
        className="relative min-h-screen overflow-hidden"
      >
        <div className="h-screen overflow-hidden">
          <div className="md:flex my-[4vw] w-full containerx content z-10 max-lg:h-[40%] relative">
            <div className="w-full md:w-10/12 ">
              <h2 className="heading seasons text-[#5E2A29] capitalize max-lg:pt-20">
                aho guru kalyan
              </h2>
              <p className={`content`}>
                Spiritual festivals, social impact initiatives. all around the
                globe, cultural carnivals.
                <br /> A year-long celebration honouring Pujya Gurudevshri’s
                inspiring life.
              </p>
            </div>
          </div>

          <div className="relative h-full">
            <div className="relative w-full h-[60%] lg:h-screen imgwrapper">
              {/* First Image */}
              <Image
                src="/images/historic-celeberation.png"
                fill
                alt="image1"
                className="object-cover image1 max-lg:hidden"
              />
              <Image
                src="/images/historic/1.png"
                fill
                alt="image1"
                className="object-cover image1 lg:hidden"
              />

              {/* Second Image */}
              <Image
                ref={img2Ref}
                src="/images/historic-celeberation2.png"
                fill
                alt="image2"
                className="absolute top-0 left-0 object-cover image2 max-lg:hidden"
              />
              <Image
                ref={img2Ref}
                src="/images/historic/2.png"
                fill
                alt="image2"
                className="absolute top-0 left-0 object-cover image2 lg:hidden"
              />

              <div
                className="absolute top-0 right-0 w-full h-full opacity-0 overlay max-sm:inline-block"
                ref={overlayref}
              ></div>
            </div>
          </div>

          {/* EventsHighlight */}
          <div
            ref={eventsRef}
            className="absolute bottom-[2rem] md:bottom-[6rem] lg:bottom-[5vw] max-sm:right-0 max-sm:mx-auto  max-sm:left-0 right-2 md:right-0 z-50"
          >
            <EventsHighlight />
          </div>
        </div>
      </div>
    </>
  );
}

export default HistoricCelebration;
