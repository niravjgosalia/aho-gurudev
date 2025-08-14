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
  const imageContainerRef = useRef([]);
  const wordRefs = useRef([]);
  const wordContainerRef = useRef([]);

  const immersionContainer = useRef();
  const immersiveTitleRef = useRef([]);
  const immersiveImageRef = useRef([]);
  const immersive1Ref = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=500%",
        scrub: true,
        pin: true,
      },
    });

    let mm = gsap.matchMedia();

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
        )
        .fromTo(
          immersiveImageRef.current[0],
          { x: "-100vw", y: "-40vw" },
          { x: "-45vw", y: "-10vw" },
          "<"
        )
        .fromTo(
          immersiveImageRef.current[1],
          { x: "-100vw", y: "44vw" },
          { x: "-40vw", y: "14vw" },
          "<"
        )
        .fromTo(
          immersiveImageRef.current[2],
          { x: "-100vw", y: "44vw" },
          { x: "-25vw", y: "14vw" },
          "<"
        )
        .fromTo(
          immersiveImageRef.current[3],
          { x: "100vw", y: "-42vw" },
          { x: "40vw", y: "-12vw" },
          "<"
        )
        .fromTo(
          immersiveImageRef.current[4],
          { x: "100vw", y: "42vw" },
          { x: "30vw", y: "12vw" },
          "<"
        )
        .fromTo(
          immersiveImageRef.current[5],
          { x: "100vw", y: "47vw" },
          { x: "45.8vw", y: "17vw" },
          "<"
        )
        .fromTo(
          immersive1Ref.current[0],
          { x: "-100vw", y: "-45vw" },
          { x: "-25vw", y: "-15vw" },
          "<"
        );

      tl.to(immersiveImageRef.current[0], { x: "-75vw", y: "-20vw" })
        .to(immersiveImageRef.current[1], { x: "-75vw", y: "24vw" }, "<")
        .to(immersiveImageRef.current[2], { x: "-75vw", y: "24vw" }, "<")
        .to(immersiveImageRef.current[3], { x: "75vw", y: "-22vw" }, "<")
        .to(immersiveImageRef.current[4], { x: "75vw", y: "22vw" }, "<")
        .to(immersiveImageRef.current[5], { x: "75vw", y: "27vw" }, "<")
        .to(immersiveTitleRef.current[0], { opacity: 0, display: "none" }, "<")
        .to(immersiveTitleRef.current[1], { opacity: 0, display: "none" }, "<");
    });
    mm.add("(min-width: 104px) and (max-width: 1023px)", () => {
      // IMAGE animations
      tl.to(imageRef.current[0], {
        // width: "124px",
        // height: "133.55px",
        scale: 0.5,
        xPercent: -30,
        yPercent: -40,
      }).fromTo(
        imageRef.current[1],
        { yPercent: 55, xPercent: 150 },
        { yPercent: 40, xPercent: 10 },
        "<"
      );

      tl.to(imageRef.current[0], {
        scale: 0.4,
        yPercent: -75,
        xPercent: -35,
      })
        .to(
          imageRef.current[1],
          { yPercent: -50, xPercent: -15, scale: 0.5 },

          "<"
        )
        .fromTo(
          imageRef.current[2],
          { xPercent: 150, yPercent: 100 },
          { xPercent: 10, yPercent: 20 },
          "<"
        );

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
        scale: 0.7,
        rotate: "-8",
        xPercent: -5,
        yPercent: 0,
      })
        .to(
          imageRef.current[1],
          {
            scale: 0.8,
            rotate: "8",
            xPercent: 0,
            yPercent: 0,
          },
          "<"
        )
        .to(
          imageRef.current[2],
          {
            rotate: "-4",
            xPercent: 0,
            yPercent: 30,
          },
          "<"
        )
        .to(imageContainerRef.current, {
          overflow: "visible",
        })
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
      })
        .fromTo(
          immersiveTitleRef.current[0],
          {
            xPercent: -500,
          },
          { xPercent: 0 },
          "<"
        )
        .fromTo(
          immersiveTitleRef.current[1],
          {
            xPercent: 500,
          },
          { xPercent: 0 },
          "<"
        )
        .fromTo(
          immersiveImageRef.current[0],
          { x: "-100vw", y: "-100vw" },
          { x: "-38vw", y: "-50vw" },
          "<"
        )
        .fromTo(
          immersiveImageRef.current[1],
          { x: "-100vw", y: "100vw" },
          { x: "-32vw", y: "80vw" },
          "<"
        )
        .fromTo(
          immersiveImageRef.current[2],
          { x: "-100vw", y: "100vw" },
          { x: "-32vw", y: "30vw" },
          "<"
        )
        .fromTo(
          immersiveImageRef.current[3],
          { x: "100vw", y: "-170vw" },
          { x: "35vw", y: "-70vw" },
          "<"
        )
        .fromTo(
          immersiveImageRef.current[4],
          { x: "100vw", y: "170vw" },
          { x: "34.5vw", y: "70vw" },
          "<"
        )
        .fromTo(
          immersiveImageRef.current[5],
          { x: "100vw", y: "170vw" },
          { x: "5vw", y: "77vw" },
          "<"
        )
        .fromTo(
          immersive1Ref.current[0],
          { x: "-100vw", y: "-45vw" },
          { x: "-5vw", y: "-55vw" },
          "<"
        );

      tl.to(immersiveImageRef.current[0], { x: "-75vw", y: "-170vw" })
        .to(immersiveImageRef.current[1], { x: "-75vw", y: "170vw" }, "<")
        .to(immersiveImageRef.current[2], { x: "-75vw", y: "170vw" }, "<")
        .to(immersiveImageRef.current[3], { x: "75vw", y: "-170vw" }, "<")
        .to(immersiveImageRef.current[4], { x: "75vw", y: "170vw" }, "<")
        .to(immersiveImageRef.current[5], { x: "75vw", y: "170vw" }, "<")
        .to(immersiveTitleRef.current[0], { opacity: 0, display: "none" }, "<")
        .to(immersiveTitleRef.current[1], { opacity: 0, display: "none" }, "<");
    });
  }, []);

  const textContent = `What you hold in your hand is a painting of the sun, an earnest interpretation, but not comparable the touch of sunlight. Born amongst us, Pujya Gurudevshri Rakeshji lives beyond us. He walks the earth as an embodiment of enlightenment. He is here for a purpose: to uplift. A primal force of divinity, awakening souls to their pure, peaceful, powerful nature.`;

  const words = textContent.split(" ");

  return (
    <div ref={containerRef} className="h-screen relative overflow-hidden">
      {/* overview */}
      <div
        ref={overviewRef}
        className="flex flex-col lg:flex-row h-full justify-center items-center lg:gap-[8vw]  absolute w-full z-[1] containerx "
      >
        {/* IMAGES */}
        <div
          ref={imageContainerRef}
          className="flex flex-col justify-center items-center lg:justify-end lg:items-end h-[60%] lg:h-full relative lg:w-1/2 max-lg:overflow-hidden w-full sm:w-[425px] "
        >
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
            className=" w-[290px] h-[230px] lg:h-[25.896vw] lg:w-[34.357vw] absolute "
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
          className=" max-lg:pt-5 max-lg:h-[40%] max-lg:overflow-auto   lg:w-[25.781vw] w-full md:w-[600px] text-primary max-lg:bg-[#f3f2dd] max-lg:relative z-[1]  "
        >
          <h6 className="heading capitalize">Who is gurudev ?</h6>
          <p className="content ">
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
      <div ref={immersionContainer} className=" absolute w-full h-full">
        <div className=" flex flex-col lg:flex-row h-full justify-center items-center text-primary relative">
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
          <div
            ref={(el) => (immersiveImageRef.current[0] = el)}
            className=" w-[65px] lg:w-[10.573vw] h-auto absolute"
          >
            <Image
              height={276}
              width={203}
              src={"/images/home/immersion/1.webp"}
              className=" size-full"
            />
          </div>
          <div
            ref={(el) => (immersiveImageRef.current[1] = el)}
            className=" w-[100.58px] lg:w-[13.143vw] h-auto absolute"
          >
            <Image
              height={359}
              width={252}
              src={"/images/home/immersion/2.webp"}
              className=" size-full"
            />
          </div>
          <div
            ref={(el) => (immersiveImageRef.current[2] = el)}
            className=" w-[79.65px] lg:w-[9.219vw] h-auto absolute"
          >
            <Image
              height={190}
              width={177}
              src={"/images/home/immersion/3.webp"}
              className=" size-full"
            />
          </div>
          <div
            ref={(el) => (immersiveImageRef.current[3] = el)}
            className=" w-[92px] lg:w-[11.88vw] h-auto absolute"
          >
            <Image
              height={317}
              width={289}
              src={"/images/home/immersion/4.webp"}
              className=" size-full"
            />
          </div>
          <div
            ref={(el) => (immersiveImageRef.current[4] = el)}
            className=" w-[109.39px] lg:w-[14vw] h-auto absolute"
          >
            <Image
              height={341}
              width={278}
              src={"/images/home/immersion/5.webp"}
              className=" size-full"
            />
          </div>
          <div
            ref={(el) => (immersiveImageRef.current[5] = el)}
            className=" w-[55px] lg:w-[8.281vw] h-auto absolute"
          >
            <Image
              height={262}
              width={159}
              src={"/images/home/immersion/6.webp"}
              className=" size-full"
            />
          </div>

          {/* life 1 */}
          <div className=" absolute flex justify-center h-full w-full items-center ">
            <div
              ref={(el) => (immersive1Ref.current[0] = el)}
              className=" w-[84.54px] lg:w-[10.99vw] h-auto absolute"
            >
              <Image
                height={262}
                width={159}
                src={"/images/home/immersion/life1.webp"}
                className=" size-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebAnimationFrame1;
