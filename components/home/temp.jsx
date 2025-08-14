import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WebAnimationFrame1 = () => {
  const containerRef = useRef();

  const overviewRef = useRef();
  const imageRef = useRef([]);
  const wordRefs = useRef([]);
  const wordContainerRef = useRef([]);

  const immersiveTitleRef = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%",
        scrub: true,
        pin: true,
      },
    });

    let mm = gsap.matchMedia();
    mm.add("(min-width: 104px)", () => {
      // IMAGE animations
      tl.to(imageRef.current[0], {
        // width: "124px",
        // height: "133.55px",
        scale: 0.5,
        x: "-100px",
        y: "-100px",
      })
        .fromTo(
          imageRef.current[1],
          { y: "150%", xPercent: 100 },
          { y: "0%" },
          "<"
        )
        .fromTo(imageRef.current[2], { y: "50.073vw" }, { y: "26.073vw" }, "<");

      // tl.to(imageRef.current[0], {
      //   width: "9.115vw",
      //   height: "9.817vw",
      //   x: "-40vw",
      //   y: "-34vw",
      // })
      //   .to(
      //     imageRef.current[1],
      //     {
      //       width: "14.479vw",
      //       height: "10.052vw",
      //       x: "-27vw",
      //       y: "-27vw",
      //     },
      //     "<"
      //   )
      //   .to(imageRef.current[2], { y: "-3vw" }, "<");

      // Total timeline duration in seconds
      const totalDuration = tl.duration();
      const wordCount = wordRefs.current.length;
      const staggerTime = totalDuration / wordCount;

      // WORD animations in sync with whole timeline
      // tl.fromTo(
      //   wordRefs.current,
      //   { opacity: 0.3 },
      //   { opacity: 1, stagger: staggerTime },
      //   0 // starts exactly at the start
      // );

      // tl.to(imageRef.current[0], {
      //   width: "20.781vw",
      //   height: "24.063vw",
      //   rotate: "-8",
      //   x: "13vw",
      //   y: "-10vw",
      // })
      //   .to(
      //     imageRef.current[1],
      //     {
      //       width: "37.552vw",
      //       height: "26.077vw",
      //       rotate: "8",
      //       x: "13vw",
      //       y: "-10vw",
      //     },
      //     "<"
      //   )
      //   .to(
      //     imageRef.current[2],
      //     {
      //       width: "35.104vw",
      //       height: "26.46vw",
      //       rotate: "-4",
      //       x: "13vw",
      //       y: "-10vw",
      //     },
      //     "<"
      //   )
      //   .to(
      //     wordContainerRef.current,
      //     {
      //       opacity: 0,
      //     },
      //     "<"
      //   );

      // tl.to(overviewRef.current, {
      //   scale: 0,
      //   display: "none",
      //   zIndex: "-1",
      //   x: "8vw",
      // })
      //   .fromTo(
      //     immersiveTitleRef.current[0],
      //     {
      //       x: "-75vw",
      //     },
      //     { x: 0 },
      //     "<"
      //   )
      //   .fromTo(
      //     immersiveTitleRef.current[1],
      //     {
      //       x: "50vw",
      //     },
      //     { x: 0 },
      //     "<"
      //   );
    });

    mm.add("(min-width: 1024px)", () => {
      // IMAGE animations
      tl.to(imageRef.current[0], {
        width: "17.333vw",
        height: "18.844vw",
        x: "-32vw",
        y: "-24vw",
      })
        .fromTo(imageRef.current[1], { y: "24.073vw" }, { y: "-2vw" }, "<")
        .fromTo(imageRef.current[2], { y: "50.073vw" }, { y: "26.073vw" }, "<");

      tl.to(imageRef.current[0], {
        width: "9.115vw",
        height: "9.817vw",
        x: "-40vw",
        y: "-34vw",
      })
        .to(
          imageRef.current[1],
          {
            width: "14.479vw",
            height: "10.052vw",
            x: "-27vw",
            y: "-27vw",
          },
          "<"
        )
        .to(imageRef.current[2], { y: "-3vw" }, "<");

      // Total timeline duration in seconds
      const totalDuration = tl.duration();
      const wordCount = wordRefs.current.length;
      const staggerTime = totalDuration / wordCount;

      // WORD animations in sync with whole timeline
      tl.fromTo(
        wordRefs.current,
        { opacity: 0.3 },
        { opacity: 1, stagger: staggerTime },
        0 // starts exactly at the start
      );

      tl.to(imageRef.current[0], {
        width: "20.781vw",
        height: "24.063vw",
        rotate: "-8",
        x: "13vw",
        y: "-10vw",
      })
        .to(
          imageRef.current[1],
          {
            width: "37.552vw",
            height: "26.077vw",
            rotate: "8",
            x: "13vw",
            y: "-10vw",
          },
          "<"
        )
        .to(
          imageRef.current[2],
          {
            width: "35.104vw",
            height: "26.46vw",
            rotate: "-4",
            x: "13vw",
            y: "-10vw",
          },
          "<"
        )
        .to(
          wordContainerRef.current,
          {
            opacity: 0,
          },
          "<"
        );

      tl.to(overviewRef.current, {
        scale: 0,
        display: "none",
        zIndex: "-1",
        x: "8vw",
      })
        .fromTo(
          immersiveTitleRef.current[0],
          {
            x: "-75vw",
          },
          { x: 0 },
          "<"
        )
        .fromTo(
          immersiveTitleRef.current[1],
          {
            x: "50vw",
          },
          { x: 0 },
          "<"
        );
    });
  }, []);

  const textContent = `What you hold in your hand is a painting of the sun, an earnest interpretation, but not comparable the touch of sunlight. Born amongst us, Pujya Gurudevshri Rakeshji lives beyond us. He walks the earth as an embodiment of enlightenment. He is here for a purpose: to uplift. A primal force of divinity, awakening souls to their pure, peaceful, powerful nature.`;

  const words = textContent.split(" ");

  return (
    <div ref={containerRef} className="h-screen relative overflow-hidden">
      {/* overview */}
      <div
        ref={overviewRef}
        className="flex flex-col lg:flex-row h-full justify-between lg:justify-center items-center lg:gap-[8vw]  absolute w-full z-[1] containerx"
      >
        {/* IMAGES */}
        <div className="flex flex-col justify-center items-center lg:justify-end lg:items-end max-lg:h-1/2 relative lg:w-1/2 ">
          <div
            ref={(el) => (imageRef.current[0] = el)}
            className="lg:h-[42.031vw] lg:w-[38.542vw] w-[315px] h-[340.8px] max-lg:bottom-0 absolute"
          >
            <Image
              height={937}
              width={870}
              src={"/images/home/overview/1.webp"}
              className="size-full"
              alt=""
            />
          </div>
          <div
            ref={(el) => (imageRef.current[1] = el)}
            className="lg:h-[24.073vw] lg:w-[36.03vw] w-[335.61px] h-[233px] absolute"
          >
            <Image
              height={500}
              width={700}
              src={"/images/home/overview/2.webp"}
              className="size-full"
              alt=""
            />
          </div>
          <div
            ref={(el) => (imageRef.current[2] = el)}
            className="lg:h-[25.896vw] lg:w-[34.357vw] absolute"
          >
            <Image
              height={508}
              width={674}
              src={"/images/home/overview/3.webp"}
              className="size-full"
              alt=""
            />
          </div>
        </div>

        {/* TEXT */}
        <div
          ref={wordContainerRef}
          className=" max-lg:pt-5   lg:w-[25.781vw] w-full text-primary bg-[#f3f2dd] max-lg:relative z-[1] max-lg:h-1/2 "
        >
          <h6 className="heading capitalize">Who is gurudev ?</h6>
          <p className="content">
            {words.map((word, i) => (
              <span
                key={i}
                ref={(el) => (wordRefs.current[i] = el)}
                style={{
                  opacity: 0.5,
                  display: "inline-block",
                  marginRight: "0.3em",
                }}
              >
                {word}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* immersion */}
      <div className=" absolute w-full h-full">
        <div className=" flex h-full justify-center items-center text-primary">
          <h6
            ref={(el) => (immersiveTitleRef.current[0] = el)}
            className=" heading capitalize"
          >
            The immersive
          </h6>
          <h6
            ref={(el) => (immersiveTitleRef.current[1] = el)}
            className=" heading capitalize lg:ps-[1.5vw]"
          >
            journey
          </h6>
        </div>
      </div>
    </div>
  );
};

export default WebAnimationFrame1;
