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
  const wordRefLife4 = useRef([]);
  const wordContainerRef = useRef([]);

  const immersionContainer = useRef();
  const menuRef = useRef();
  const immersiveTitleRef = useRef([]);
  const immersiveImageRef = useRef([]);
  const immersive1Ref = useRef([]);
  const immersive2Ref = useRef([]);
  const immersive3Ref = useRef([]);
  const immersive4Ref = useRef([]);
  const immersive5Ref = useRef([]);
  const immersive6Ref = useRef([]);
  const immersive7Ref = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1500%",
        scrub: true,
        pin: true,
        markers: false,
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
          immersive1Ref.current[1],
          { x: "-100vw", y: "-45vw" },
          { x: "-25vw", y: "-15vw" },
          "<"
        );

      tl.to(immersiveImageRef.current[0], {
        delay: 0.5,
        x: "-75vw",
        y: "-20vw",
      })
        .to(immersiveImageRef.current[1], { x: "-75vw", y: "24vw" }, "<")
        .to(immersiveImageRef.current[2], { x: "-75vw", y: "24vw" }, "<")
        .to(immersiveImageRef.current[3], { x: "75vw", y: "-22vw" }, "<")
        .to(immersiveImageRef.current[4], { x: "75vw", y: "22vw" }, "<")
        .to(immersiveImageRef.current[5], { x: "75vw", y: "27vw" }, "<")
        .to(immersiveTitleRef.current[0], { opacity: 0, display: "none" }, "<")
        .to(immersiveTitleRef.current[1], { opacity: 0, display: "none" }, "<");

      tl.to(immersive1Ref.current[1], {
        width: "37.493vw",
        height: "45.417vw",
        y: "0vw",
        x: "20vw",
      }).fromTo(
        immersive2Ref.current[1],
        {
          x: "100vw",
          y: "16vw",
        },
        {
          x: "40vw",
        },
        "<"
      );

      tl.to(immersive1Ref.current[1], {
        width: "33.333vw",
        height: "40.377vw",
        delay: 0.5,
        y: "-4vw",
      })
        .to(
          immersive2Ref.current[1],

          {
            y: "9.5vw",
            scale: 1.2,
          },
          "<"
        )
        .fromTo(
          immersive1Ref.current[2],
          {
            opacity: 0,
            x: "-20vw",
          },
          {
            opacity: 1,
          },
          "<"
        )
        .fromTo(
          menuRef.current,
          {
            x: "36.5vw",
            y: "50.4vw",
            display: "none",
          },
          {
            y: "20.4vw",
            display: "block",
          },
          "<"
        );
      tl
        .to(immersive1Ref.current[2], {
          opacity: 0,
        })
        .to(
          immersive1Ref.current[1],
          {
            y: "-50vw",
            x: "-50vw",
          },
          "<"
        )
        .to(
          immersive1Ref.current[0],
          {
            display: "none",
          },
          "<"
        )
        .to(
          immersive2Ref.current[1],
          {
            x: 0,
            y: "-5vw",
            scale: 1,
            width: "30vw",
            height: "28.442vw",
          },
          "<"
        )
        .to(
          immersive2Ref.current[2],
          {
            x: 0,
            y: "10vw",
          },
          "<"
        )
        .fromTo(
          immersive2Ref.current[2],
          {
            opacity: 0,
          },
          {
            y: "15vw",
            opacity: 1,
          },
          "<"
        )
        .fromTo(
          immersive3Ref.current[1],
          {
            opacity: 0,
            y: "-5vw",
          },
          { opacity: 1 }
        ),
        "<";

      tl.to(immersive2Ref.current[1], {
        clipPath: "inset(0% 100% 0% 0%)",
      })
        .to(
          immersive3Ref.current[1],
          {
            y: "-5vw",
          },
          "<"
        )
        .to(
          immersive2Ref.current[2],
          {
            opacity: 0,
          },
          "<"
        )
        .fromTo(
          immersive3Ref.current[2],
          {
            opacity: 0,
            y: "18vw",
          },
          {
            y: "15vw",
            opacity: 1,
          },
          "<"
        );

      tl.to(immersive4Ref.current[1], {
        y: "-13vw",
      }).to(
        immersive4Ref.current[2],
        {
          y: "8vw",
        },
        "<"
      );

      tl.to(immersive3Ref.current[0], { opacity: 0, display: "none" }).fromTo(
        immersive4Ref.current[0],
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        "<"
      );

      tl.to(menuRef.current, {
        position: "fixed",
      });

      const life4Duration = 1; // Duration in seconds for the word animation
      const life4WordCount = wordRefLife4.current.length;
      const life4StaggerTime = life4Duration / life4WordCount;

      // Animate life4 words
      tl.fromTo(
        wordRefLife4.current,
        { opacity: 0.5 }, // Starting opacity
        {
          opacity: 1,
          stagger: life4StaggerTime,
          duration: life4Duration,
        },
        "<" // Start at the same time as life4 appearance
      );

      tl.to(immersive4Ref.current[0], {
        opacity: 0,
        display: "none",
      })
        .to(
          immersive5Ref.current[1],
          {
            y: "-5vw",
          },
          "<"
        )
        .to(
          immersive5Ref.current[2],
          {
            display: "block",
            y: "15vw",
          },
          "<"
        )
        .to(immersive5Ref.current[3], {
          scale: 2,
        })
        .fromTo(
          immersive5Ref.current[0],
          {
            opacity: 0,
          },
          {
            opacity: 1,
          }
        )
        .to(immersive5Ref.current[3], {
          scale: 1,
        });

      tl.to(immersive5Ref.current[1], {
        opacity: 0,
        delay: 1,
      }).to(
        immersive5Ref.current[2],
        {
          display: "none",
          opacity: 0,
        },
        "<"
      );

      tl.fromTo(
        immersive5Ref.current[4],
        {
          opacity: 0,
          y: "-5vw",
          x: "-19.5vw",
        },
        {
          opacity: 1,
        }
      )
        .fromTo(
          immersive5Ref.current[5],
          {
            opacity: 0,
            x: "36vw",
            bottom: "5vw",
          },
          {
            opacity: 1,
          },
          "<"
        )
        .fromTo(
          immersive5Ref.current[6],
          {
            opacity: 0,
            x: "25vw",
            y: "-8vw",
          },
          { opacity: 1 },
          "<"
        );
      tl.to(immersive5Ref.current[0], {
        delay: 1,
        opacity: 0,
        display: "none",
      });

      //life 6
      tl.fromTo(
        immersive6Ref.current[1],
        {
          y: "-8vw",
          scale: 0,
        },
        { scale: 1 }
      ).fromTo(
        immersive6Ref.current[2],
        {
          opacity: 0,
          y: "13.5vw",
        },
        {
          opacity: 1,
        },
        "<"
      );

      //life 7
      tl
        .fromTo(
          immersive7Ref.current[1],
          {
            y: "-8vw",
            opacity: 0,
          },
          { opacity: 1 }
        )
        .fromTo(
          immersive7Ref.current[3],
          {
            y: "-8vw",
            opacity: 0,
          },
          { opacity: 1 }
        ),
        "<";

      tl.to(immersive6Ref.current[1], {
        clipPath: "inset(0% 100% 0% 0%)",
      })
        .fromTo(
          immersive7Ref.current[2],
          {
            opacity: 0,
            y: "13.5vw",
          },
          {
            opacity: 1,
          },
          "<"
        )
        .to(
          immersive6Ref.current[2],
          {
            opacity: 0,
          },
          "<"
        );

      tl.to(immersive7Ref.current[1], {
        delay: 1,
        clipPath: "inset(0% 100% 0% 0%)",
      });
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
          { left: "-100%", top: "-100%" },
          { left: "0%", top: "30%" },
          "<"
        )
        .fromTo(
          immersiveImageRef.current[1],
          { left: "-100%", bottom: "-100%" },
          { left: "0%", bottom: "0%" },
          "<"
        )
        .fromTo(
          immersiveImageRef.current[2],
          { left: "-100%", bottom: "-100%" },
          { left: "8%", bottom: "25%" },
          "<"
        )
        .fromTo(
          immersiveImageRef.current[3],
          { right: "-100%", top: "-100%" },
          { right: "0", top: "15%" },
          "<"
        )
        .fromTo(
          immersiveImageRef.current[4],
          { right: "-100%", bottom: "-100%" },
          { right: "0", bottom: "20%" },
          "<"
        )
        .fromTo(
          immersiveImageRef.current[5],
          { right: "-100%", bottom: "-100%" },
          { right: "40%", bottom: "15%" },
          "<"
        )
        .fromTo(
          immersive1Ref.current[1],
          { left: "-100%", top: "-100%" },
          { left: "35%", top: "20%" },
          "<"
        );

      tl.to(immersiveImageRef.current[0], {
        delay: 0.5,
        left: "-100%",
        top: "-100%",
      })
        .to(immersiveImageRef.current[1], { left: "-100%", top: "-100%" }, "<")
        .to(immersiveImageRef.current[2], { x: "-75vw", y: "170vw" }, "<")
        .to(immersiveImageRef.current[3], { x: "75vw", y: "-170vw" }, "<")
        .to(immersiveImageRef.current[4], { x: "75vw", y: "170vw" }, "<")
        .to(immersiveImageRef.current[5], { x: "75vw", y: "170vw" }, "<")
        .to(immersiveTitleRef.current[0], { opacity: 0, display: "none" }, "<")
        .to(immersiveTitleRef.current[1], { opacity: 0, display: "none" }, "<");

      tl.to(immersive1Ref.current[1], {
        scale: 3.4,
        bottom: "100%",
        xPercent: 25,
      }).fromTo(
        immersive2Ref.current[1],
        {
          right: "-100%",
          top: "25%",
          opacity: 0,
        },
        {
          opacity: 1,
          right: "10%",
        },
        "<"
      );

      tl.to(
        immersive2Ref.current[1],

        {
          top: "40%",
        }
      )
        .fromTo(
          immersive1Ref.current[2],
          {
            opacity: 0,
            top: 400,
          },
          {
            opacity: 1,
          },
          "<"
        )
        .fromTo(
          menuRef.current,
          {
            // yPercent: 500,
            display: "none",
            opacity: 0,
            // right: "-100%",
          },
          {
            // right: 0,
            // yPercent: 450,
            bottom: 10,
            display: "block",
            opacity: 1,
          },
          "<"
        );

      tl
        .to(immersive1Ref.current[2], {
          opacity: 0,
        })
        .to(
          immersive1Ref.current[1],
          {
            top: "-100%",
          },
          "<"
        )
        .to(
          immersive1Ref.current[0],
          {
            display: "none",
          },
          "<"
        )
        .to(
          immersive2Ref.current[1],
          {
            top: "5%",
            width: 315,
            height: 300,
            scale: 1,
            left: "13%",
          },
          "<"
        )
        .to(
          immersive2Ref.current[2],
          {
            top: 350,
          },
          "<"
        )
        .fromTo(
          immersive2Ref.current[2],
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
          "<"
        )
        .fromTo(
          immersive3Ref.current[1],
          {
            opacity: 0,
            top: "5%",
            width: 315,
            height: 300,
          },
          { opacity: 1 }
        ),
        "<";

      tl.to(immersive2Ref.current[1], {
        clipPath: "inset(0% 100% 0% 0%)",
      })
        .fromTo(
          immersive3Ref.current[1],
          {
            clipPath: "inset(0% 0% 0% 100%)",
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
          },
          "<"
        )
        .to(
          immersive3Ref.current[1],
          {
            top: "5%",
          },
          "<"
        )
        .to(
          immersive2Ref.current[2],
          {
            opacity: 0,
          },
          "<"
        )
        .fromTo(
          immersive3Ref.current[2],
          {
            opacity: 0,
          },
          {
            top: 350,
            opacity: 1,
          },
          "<"
        );

      tl.to(immersive4Ref.current[1], {
        top: "5%",
      }).to(
        immersive4Ref.current[2],
        {
          top: 250,
        },
        "<"
      );

      tl.to(immersive3Ref.current[0], { opacity: 0, display: "none" }).fromTo(
        immersive4Ref.current[0],
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        "<"
      );

      // tl.to(menuRef.current, {
      //   position: "fixed",
      // });

      const life4Duration = 1; // Duration in seconds for the word animation
      const life4WordCount = wordRefLife4.current.length;
      const life4StaggerTime = life4Duration / life4WordCount;

      // Animate life4 words
      tl.fromTo(
        wordRefLife4.current,
        { opacity: 0.5 }, // Starting opacity
        {
          opacity: 1,
          stagger: life4StaggerTime,
          duration: life4Duration,
        },
        "<" // Start at the same time as life4 appearance
      );

      tl.to(immersive4Ref.current[0], {
        opacity: 0,
        display: "none",
      })
        .to(
          immersive5Ref.current[1],
          {
            top: "5%",
          },
          "<"
        )
        .to(
          immersive5Ref.current[2],
          {
            top: 360,
            display: "block",
          },
          "<"
        )
        .to(immersive5Ref.current[3], {
          scale: 2,
        })
        .fromTo(
          immersive5Ref.current[0],
          {
            opacity: 0,
          },
          {
            opacity: 1,
          }
        )
        .to(immersive5Ref.current[3], {
          scale: 1,
        });

      tl.to(immersive5Ref.current[1], {
        opacity: 0,
        delay: 1,
      }).to(
        immersive5Ref.current[2],
        {
          display: "none",
          opacity: 0,
        },
        "<"
      );

      tl.fromTo(
        immersive5Ref.current[4],
        {
          opacity: 0,
          top: "5%",
        },
        {
          opacity: 1,
        }
      )
        .fromTo(
          immersive5Ref.current[5],
          {
            opacity: 0,
            top: 270,
            right: 20,
          },
          {
            opacity: 1,
          },
          "<"
        )
        .fromTo(
          immersive5Ref.current[6],
          {
            opacity: 0,
            top: 450,
          },
          { opacity: 1 },
          "<"
        );
      tl.to(immersive5Ref.current[0], {
        delay: 1,
        opacity: 0,
        display: "none",
      });
    });
  }, []);

  const textContent = `What you hold in your hand is a painting of the sun, an earnest interpretation, but not comparable the touch of sunlight. Born amongst us, Pujya Gurudevshri Rakeshji lives beyond us. He walks the earth as an embodiment of enlightenment. He is here for a purpose: to uplift. A primal force of divinity, awakening souls to their pure, peaceful, powerful nature.`;
  const life4Content = `What you hold in your hand is a painting of the sun, an earnest interpretation, but not comparable the touch of sunlight. Born amongst us, Pujya Gurudevshri Rakeshji lives beyond us. He walks the earth as an embodiment of enlightenment. He is here for a purpose: to uplift. A primal force of divinity, awakening souls to their pure, peaceful, powerful nature.`;

  const words = textContent.split(" ");
  const lifeWord = life4Content.split(" ");

  return (
    <div
      ref={containerRef}
      className="relative h-[100lvh] lg:h-screen overflow-hidden"
    >
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
          <h6 className="capitalize heading seasons">Who is gurudev ?</h6>
          <p className="content ">
            {words.map((word, i) => (
              <span
                key={i}
                ref={(el) => (wordRefs.current[i] = el)}
                className=" opacity-50 inline-block mr-1"
              >
                {word}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* immersion */}
      <div
        ref={immersionContainer}
        className="absolute w-full h-full overflow-hidden "
      >
        <div className="relative flex flex-col items-center justify-center h-full lg:flex-row text-primary">
          <h6
            ref={(el) => (immersiveTitleRef.current[0] = el)}
            className="capitalize  heading seasons"
          >
            The immersive
          </h6>
          <h6
            ref={(el) => (immersiveTitleRef.current[1] = el)}
            className=" heading seasons  capitalize lg:ps-[1.5vw]"
          >
            journey
          </h6>
          <div
            ref={(el) => (immersiveImageRef.current[0] = el)}
            className=" w-[65px] h-[88px] lg:w-[10.573vw] lg:h-auto absolute"
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
            className=" w-[100.58px] lg:w-[13.143vw] h-[143.08px] lg:h-auto absolute"
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
            className=" w-[79.65px] h-[85.24px] lg:w-[9.219vw] lg:h-auto absolute"
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
            className=" w-[92px] h-[128px] lg:w-[11.88vw] lg:h-auto absolute"
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
            className=" w-[109.39px] lg:w-[14vw] h-[134px] lg:h-auto absolute"
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
            className=" w-[55px] lg:w-[8.281vw] h-[90px] lg:h-auto absolute"
          >
            <Image
              height={262}
              width={159}
              src={"/images/home/immersion/6.webp"}
              className=" size-full"
            />
          </div>

          {/* life 1 */}
          <div
            ref={(el) => (immersive1Ref.current[0] = el)}
            className=" absolute flex justify-center h-full w-full sm:w-[425px] lg:w-full items-center "
          >
            <div
              ref={(el) => (immersive1Ref.current[1] = el)}
              className=" w-[84.54px] h-[102.11px] lg:w-[10.99vw] lg:h-auto absolute"
            >
              <Image
                height={872}
                width={720}
                src={"/images/home/immersion/life1.webp"}
                className=" size-full"
              />
            </div>
            <div
              ref={(el) => (immersive1Ref.current[2] = el)}
              className=" w-[90%] lg:w-[25.615vw] max-lg:absolute"
            >
              <h6 className="mb-3 capitalize  heading-sm seasons">
                Early Years
              </h6>
              <p className=" content text-secondary">
                {" "}
                As a child, He was gifted. But few could imagine the
                extraordinary calibre concealed behind those eyes.
              </p>
            </div>
          </div>
          {/* life 2 */}
          <div className=" absolute flex justify-center h-full w-full sm:w-[425px] lg:w-full items-center ">
            <div
              ref={(el) => (immersive2Ref.current[1] = el)}
              className=" w-[78px]  lg:w-[10.966vw] h-auto absolute"
            >
              <Image
                height={513}
                width={574}
                src={"/images/home/immersion/life2.webp"}
                className=" size-full object-cover"
              />
            </div>
            <div
              ref={(el) => (immersive2Ref.current[2] = el)}
              className=" w-[90%] lg:w-[25.615vw] max-lg:absolute"
            >
              <h6 className="mb-3 capitalize  heading-sm seasons">birth</h6>
              <p className=" content text-secondary">
                {" "}
                26th September, 1966. 5:25 AM. T.P. Shah Clinic, Mumbai.
              </p>
            </div>
          </div>

          {/* life 3 */}
          <div
            ref={(el) => (immersive3Ref.current[0] = el)}
            className=" absolute z-[-1] flex justify-center h-full w-full sm:w-[425px] lg:w-full items-center "
          >
            <div
              ref={(el) => (immersive3Ref.current[1] = el)}
              className=" w-[78px]  lg:w-[29.967vw] h-auto lg:h-[28.442vw] absolute"
            >
              <Image
                height={513}
                width={574}
                src={"/images/home/immersion/life3.webp"}
                className=" size-full"
              />
            </div>
            <div
              ref={(el) => (immersive3Ref.current[2] = el)}
              className=" w-[90%] lg:w-[25.615vw] max-lg:absolute"
            >
              <h6 className="mb-3 capitalize  heading-sm seasons">family</h6>
              <p className=" content text-secondary">
                {" "}
                A father, a mother, their two children, and their Gurudev.
              </p>
            </div>
          </div>
          {/* life 4 */}
          <div
            ref={(el) => (immersive4Ref.current[0] = el)}
            className=" absolute z-[-1] flex justify-center h-full w-full sm:w-[425px] lg:w-full items-center "
          >
            <div
              ref={(el) => (immersive4Ref.current[1] = el)}
              className=" w-[332.31px]  lg:w-[29.797vw] h-auto lg:h-[15.234vw] absolute"
            >
              <Image
                height={293}
                width={572}
                src={"/images/home/immersion/life4.png"}
                className=" size-full"
              />
            </div>

            <div
              ref={(el) => (immersive4Ref.current[2] = el)}
              className=" w-[90%] lg:w-[25.615vw] max-lg:absolute"
            >
              {/* <h6 className="mb-3 capitalize  heading-sm seasons">family</h6> */}
              <p className="content ">
                {lifeWord.map((word, i) => (
                  <span
                    key={i}
                    ref={(el) => (wordRefLife4.current[i] = el)}
                    className=" opacity-50 inline-block mr-1"
                  >
                    {word}
                  </span>
                ))}
              </p>
            </div>
          </div>

          {/* life 5 */}
          <div
            ref={(el) => (immersive5Ref.current[0] = el)}
            className="  absolute z-[1] flex justify-center h-full w-full sm:w-[425px] lg:w-full items-center "
          >
            <div
              ref={(el) => (immersive5Ref.current[1] = el)}
              className=" w-[334px]  lg:w-[23.381vw] h-[317px] lg:h-[29.851vw] absolute overflow-hidden"
            >
              <Image
                height={574}
                width={449}
                ref={(el) => (immersive5Ref.current[3] = el)}
                src={"/images/home/immersion/life5-1.webp"}
                className=" size-full object-cover object-top"
              />
            </div>

            <div
              ref={(el) => (immersive5Ref.current[2] = el)}
              className="hidden w-[90%] lg:w-[25.615vw] absolute z-10 lenis lenis-scrolling "
            >
              <h6 className="mb-3 capitalize  heading-sm seasons">
                Pratham Milan{" "}
              </h6>
              <p className=" content text-secondary lg:h-[5vw] overflow-auto">
                {" "}
                At age eight, He encountered a book containing a picture of
                Shrimad Rajchandraji. Upon beholding the image, He recalled past
                associations from previous lifetimes and recognised Shrimadji as
                His Sadguru. He slipped into a trance for three continuous days
                and attained a high spiritual state.
              </p>
            </div>
            <div
              ref={(el) => (immersive5Ref.current[4] = el)}
              className=" w-[419px]  lg:w-[53.021vw] h-[200px] lg:h-[36.086vw] absolute overflow-hidden"
            >
              <Image
                height={693}
                width={1081}
                src={"/images/home/immersion/life5-2.webp"}
                className=" size-full object-cover"
              />
            </div>
            <div
              ref={(el) => (immersive5Ref.current[5] = el)}
              className=" w-[196px]  lg:w-[21.782vw] h-[172px] lg:h-[19.115vw] absolute overflow-hidden"
            >
              <Image
                height={367}
                width={419}
                src={"/images/home/immersion/life5-3.webp"}
                className=" size-full object-cover"
              />
            </div>
            <div
              ref={(el) => (immersive5Ref.current[6] = el)}
              className=" w-[90%] lg:w-[25.615vw] absolute z-10  "
            >
              <h6 className="mb-3 capitalize  heading-sm seasons">
                Young Guru{" "}
              </h6>
              <p className=" content text-secondary  overflow-auto">
                {" "}
                His divinity could barely stay hidden. His words, His actions,
                His silence. Everything had a profundity that was felt by those
                around Him.
              </p>
            </div>
          </div>

          {/* life 6 */}
          <div
            ref={(el) => (immersive6Ref.current[0] = el)}
            className=" absolute z-[1] flex justify-center h-full w-full sm:w-[425px] lg:w-full items-center "
          >
            <div
              ref={(el) => (immersive6Ref.current[1] = el)}
              className=" w-[78px]  lg:w-[25.134vw] h-auto lg:h-[26.594vw] absolute z-[1]"
            >
              <Image
                width={579}
                height={721}
                src={"/images/home/immersion/life6.webp"}
                className=" size-full object-cover"
              />
            </div>
            <div
              ref={(el) => (immersive6Ref.current[2] = el)}
              className=" w-[90%] lg:w-[25.615vw] max-lg:absolute"
            >
              <h6 className="mb-3 capitalize  heading-sm seasons">Diksha</h6>
              <p className=" content text-secondary">
                {" "}
                On Akhatrij in 1983, after completing His 10th standard
                examination, He formally renounced social and professional life,
                embracing lifelong celibacy.
              </p>
            </div>
          </div>

          {/* life 7 */}
          <div
            ref={(el) => (immersive7Ref.current[0] = el)}
            className=" absolute z-[-1] flex justify-center h-full w-full sm:w-[425px] lg:w-full items-center "
          >
            <div
              ref={(el) => (immersive7Ref.current[1] = el)}
              className=" w-[78px]  lg:w-[25.134vw] h-auto lg:h-[26.594vw] absolute z-[-1]"
            >
              <Image
                width={579}
                height={721}
                src={"/images/home/immersion/life7-1.webp"}
                className=" size-full object-cover"
              />
            </div>
            <div
              ref={(el) => (immersive7Ref.current[3] = el)}
              className=" w-[78px]  lg:w-[25.134vw] h-auto lg:h-[26.594vw] absolute z-[-2]"
            >
              <Image
                width={579}
                height={721}
                src={"/images/home/immersion/life7-2.webp"}
                className=" size-full object-cover"
              />
            </div>
            <div
              ref={(el) => (immersive7Ref.current[2] = el)}
              className=" w-[90%] lg:w-[25.615vw] max-lg:absolute"
            >
              <h6 className="mb-3 capitalize  heading-sm seasons">Sadhana</h6>
              <p className=" content text-secondary">
                {" "}
                Engaged in study and meditation, He took retreats to Idar, Mt.
                Abu, and Dumas, delving into Indian philosophy, Jain scriptures,
                Sanskrit, logic, yoga, and classical music.
              </p>
            </div>
          </div>

          <div
            ref={menuRef}
            className=" fixed px-4  w-full sm:w-[425px] lg:w-full z-10 "
          >
            <div className="  flex justify-between lg:justify-center items-center lg:items-end gap-4 lg:gap-[1.563vw]">
              <div className=" flex justify-between items-center max-lg:gap-[12px] p-[10px] lg:p-[0.833vw] bg-[#f3f2dd] custom-shadow">
                <h6 className=" max-lg:hidden lg:pe-[0.833vw]  border-r border-[#5E2A29] seasons lg:text-[1.458vw]">
                  01
                </h6>
                <p className=" content lg:mx-[0.833vw] capitalize">
                  early years
                </p>
                <Image
                  height={40}
                  width={40}
                  src={"/icons/plus-square.svg"}
                  onClick={() => console.log("clicked")}
                  className=" lg:size-[1.979vw] cursor-pointer"
                />
              </div>
              <button
                onClick={() => console.log("clicked b")}
                className=" border border-[#5E2A29] p-[10px] lg:py-[0.521vw] lg:px-[1.042vw] text-[14px] lg:text-[0.833vw] content flex justify-center items-center gap-2"
              >
                Skip
                <Image
                  height={18}
                  width={18}
                  src={"/icons/arrow-down.svg"}
                  className=" lg:size-[0.938vw]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebAnimationFrame1;
