import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WebAnimationFrame = () => {
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
  //start animation
  const immersive1Ref = useRef([]);
  const immersive2Ref = useRef([]);
  const immersive3Ref = useRef([]);
  const immersive4Ref = useRef([]);
  const immersive5Ref = useRef([]);
  const immersive6Ref = useRef([]);
  const immersive7Ref = useRef([]);
  const immersive8Ref = useRef([]);
  const immersive9Ref = useRef([]);

  const [smMob, setSmMob] = useState(false);

  useEffect(() => {
    const checkHeight = () => {
      setSmMob(window.innerHeight <= 690);
    };

    // Run on mount
    checkHeight();

    // Listen to resize events
    window.addEventListener("resize", checkHeight);

    return () => {
      window.removeEventListener("resize", checkHeight);
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=1800%",
        scrub: true,
        pin: true,
        markers: false,
      },
    });

    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Total timeline duration in seconds
      const totalDuration = tl.duration();
      const wordCount = wordRefs.current.length;
      const staggerTime = totalDuration / wordCount;

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
        );
      // .fromTo(
      //   menuRef.current,
      //   {
      //     x: "36.5vw",
      //     y: "50.4vw",
      //     display: "none",
      //   },
      //   {
      //     y: "20.4vw",
      //     display: "block",
      //   },
      //   "<"
      // );
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
            display: "none",
          },
          {
            opacity: 1,
            display: "flex",
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
        immersive6Ref.current[0],
        {
          display: "none",
        },
        {
          display: "flex",
        }
      );
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
      tl.fromTo(
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
        )
        .fromTo(
          immersive7Ref.current[4],
          {
            y: "-8vw",
            opacity: 0,
          },
          { opacity: 1 }
        );

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

      tl.to(immersive7Ref.current[3], {
        delay: 1,
        clipPath: "inset(0% 100% 0% 0%)",
      });

      //   tl.to(immersive7Ref.current[0], {
      //     opacity: 0,
      //     display: "none",
      //   });

      //   // life 8
      //   tl.fromTo(
      //     immersive8Ref.current[0],
      //     {
      //       display: "none",
      //     },
      //     {
      //       display: "flex",
      //     }
      //   );
      //   tl.fromTo(
      //     immersive8Ref.current[1],
      //     {
      //       opacity: 0,
      //       x: "-50vw",
      //     },
      //     { opacity: 1, x: "-31vw" },
      //     "<"
      //   ).fromTo(
      //     immersive8Ref.current[2],
      //     {
      //       opacity: 0,
      //       x: "10vw",
      //     },
      //     {
      //       opacity: 1,
      //       y: "-5vw",
      //       x: "5vw",
      //     },
      //     "<"
      //   );

      //   tl.to(immersive8Ref.current[0], {
      //     opacity: 0,
      //     delay: 1,
      //     display: "none",
      //   });

      //   //life 9
      //   tl.fromTo(
      //     immersive9Ref.current[0],
      //     {
      //       opacity: 0,
      //       display: "none",
      //     },
      //     {
      //       opacity: 1,
      //       display: "flex",
      //     },
      //     "<"
      //   );

      //   tl.fromTo(
      //     immersive9Ref.current[2],
      //     {
      //       opacity: 0,
      //     },
      //     {
      //       opacity: 1,
      //     }
      //   ).fromTo(
      //     immersive9Ref.current[1],
      //     {
      //       opacity: 0,
      //       y: "-10vw",
      //     },
      //     {
      //       opacity: 1,
      //     }
      //   );

      //   tl.to(immersive9Ref.current[1], {
      //     opacity: 0,
      //   })
      //     .to(
      //       immersive9Ref.current[2],
      //       {
      //         opacity: 0,
      //       },
      //       "<"
      //     )
      //     .fromTo(
      //       immersive9Ref.current[3],
      //       {
      //         opacity: 0,
      //         x: "-5.8vw",
      //       },
      //       {
      //         opacity: 1,
      //       }
      //     );
      //   tl.fromTo(
      //     immersive9Ref.current[4],
      //     {
      //       opacity: 0,
      //       y: "4vw",
      //     },
      //     {
      //       opacity: 1,
      //     }
      //   );
      //   tl.fromTo(
      //     immersive9Ref.current[6],
      //     {
      //       opacity: 0,
      //       y: "-10vw",
      //     },
      //     {
      //       opacity: 1,
      //     }
      //   );
      //   tl.fromTo(
      //     immersive9Ref.current[5],
      //     {
      //       opacity: 0,
      //       y: "8vw",
      //     },
      //     {
      //       opacity: 1,
      //     }
      //   );
    });

    mm.add("(min-width: 104px) and (max-width: 1023px)", () => {
      // Total timeline duration in seconds
      const totalDuration = tl.duration();
      const wordCount = wordRefs.current.length;
      const staggerTime = totalDuration / wordCount;

      tl.to(immersive1Ref.current[1], {
        scale: 3.4,
        bottom: "70%",
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
      ).fromTo(
        immersive1Ref.current[2],
        {
          opacity: 0,
          top: 420,
        },
        {
          opacity: 1,
        },
        "<"
      );
      // .fromTo(
      //   menuRef.current,
      //   {
      //     // yPercent: 500,
      //     display: "none",
      //     opacity: 0,
      //     // right: "-100%",
      //   },
      //   {
      //     // right: 0,
      //     // yPercent: 450,
      //     bottom: 20,
      //     display: "block",
      //     opacity: 1,
      //   },
      //   "<"
      // );

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
            top: "10%",
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
            top: 400,
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
            top: "10%",
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
            top: "10%",
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
            top: 400,
            opacity: 1,
          },
          "<"
        );

      tl.to(immersive4Ref.current[1], {
        top: "10%",
      }).to(
        immersive4Ref.current[2],
        {
          top: 280,
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
            top: "10%",
          },
          "<"
        )
        .to(
          immersive5Ref.current[2],
          {
            top: 410,
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
            display: "none",
          },
          {
            opacity: 1,
            display: "flex",
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
          top: "10%",
        },
        {
          opacity: 1,
        }
      )
        .fromTo(
          immersive5Ref.current[5],
          {
            opacity: 0,
            top: 300,
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
            top: 475,
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
        immersive6Ref.current[0],
        {
          display: "none",
        },
        {
          display: "flex",
        }
      );
      tl.fromTo(
        immersive6Ref.current[1],
        {
          top: "10%",
          scale: 0,
        },
        { scale: 1 }
      ).fromTo(
        immersive6Ref.current[2],
        {
          opacity: 0,
          top: 410,
        },
        {
          opacity: 1,
        },
        "<"
      );

      //life 7
      tl.fromTo(
        immersive7Ref.current[1],
        {
          top: "10%",

          opacity: 0,
        },
        { opacity: 1 }
      )
        .fromTo(
          immersive7Ref.current[3],
          {
            top: "10%",

            opacity: 0,
          },
          { opacity: 1 }
        )
        .fromTo(
          immersive7Ref.current[4],
          {
            top: "10%",

            opacity: 0,
          },
          { opacity: 1 }
        );

      tl.to(immersive6Ref.current[1], {
        clipPath: "inset(0% 100% 0% 0%)",
      })
        .fromTo(
          immersive7Ref.current[2],
          {
            opacity: 0,
            top: 410,
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

      tl.to(immersive7Ref.current[3], {
        delay: 1,
        clipPath: "inset(0% 100% 0% 0%)",
      });

      tl.to(immersive7Ref.current[0], {
        opacity: 0,
        display: "none",
      });

      //   // life 8
      //   tl.fromTo(
      //     immersive8Ref.current[0],
      //     {
      //       display: "none",
      //     },
      //     {
      //       display: "flex",
      //     }
      //   );
      //   tl.fromTo(
      //     immersive8Ref.current[1],
      //     {
      //       opacity: 0,
      //       top: "-50%",
      //     },
      //     { opacity: 1, top: "5%" },
      //     "<"
      //   ).fromTo(
      //     immersive8Ref.current[2],
      //     {
      //       opacity: 0,
      //       top: 360,
      //     },
      //     {
      //       opacity: 1,
      //       top: 350,
      //     },
      //     "<"
      //   );

      //   tl.to(immersive8Ref.current[0], {
      //     opacity: 0,
      //     delay: 1,
      //     display: "none",
      //   });

      //   //life 9
      //   tl.fromTo(
      //     immersive9Ref.current[0],
      //     {
      //       opacity: 0,
      //       display: "none",
      //     },
      //     {
      //       opacity: 1,
      //       display: "flex",
      //     },
      //     "<"
      //   );

      //   tl.fromTo(
      //     immersive9Ref.current[2],
      //     {
      //       opacity: 0,
      //     },
      //     {
      //       opacity: 1,
      //     }
      //   ).fromTo(
      //     immersive9Ref.current[1],
      //     {
      //       opacity: 0,
      //       y: -150,
      //     },
      //     {
      //       opacity: 1,
      //     }
      //   );

      //   tl.to(immersive9Ref.current[1], {
      //     opacity: 0,
      //   })
      //     .to(
      //       immersive9Ref.current[2],
      //       {
      //         opacity: 0,
      //       },
      //       "<"
      //     )
      //     .fromTo(
      //       immersive9Ref.current[3],
      //       {
      //         opacity: 0,
      //         left: 50,
      //       },
      //       {
      //         opacity: 1,
      //       }
      //     );
      //   tl.fromTo(
      //     immersive9Ref.current[4],
      //     {
      //       opacity: 0,
      //       y: 30,
      //       left: 50,
      //     },
      //     {
      //       opacity: 1,
      //     }
      //   );
      //   tl.fromTo(
      //     immersive9Ref.current[6],
      //     {
      //       opacity: 0,
      //       y: -150,
      //     },
      //     {
      //       opacity: 1,
      //     }
      //   );
      //   tl.fromTo(
      //     immersive9Ref.current[5],
      //     {
      //       opacity: 0,
      //       y: 60,
      //       left: 50,
      //     },
      //     {
      //       opacity: 1,
      //     }
      //   );
    });
  }, []);

  const textContent = `What you hold in your hand is a painting of the sun, an earnest interpretation, but not comparable the touch of sunlight. Born amongst us, Pujya Gurudevshri Rakeshji lives beyond us. He walks the earth as an embodiment of enlightenment. He is here for a purpose: to uplift. A primal force of divinity, awakening souls to their pure, peaceful, powerful nature.`;
  const life4Content = `What you hold in your hand is a painting of the sun, an earnest interpretation, but not comparable the touch of sunlight. Born amongst us, Pujya Gurudevshri Rakeshji lives beyond us. He walks the earth as an embodiment of enlightenment. He is here for a purpose: to uplift. A primal force of divinity, awakening souls to their pure, peaceful, powerful nature.`;

  const words = textContent.split(" ");
  const lifeWord = life4Content.split(" ");

  return (
    <>
      <div
        id="friend"
        ref={containerRef}
        className="relative h-[100lvh] lg:h-screen overflow-hidden"
      >
        {/* immersion */}
        <div
          ref={immersionContainer}
          className="absolute w-full h-full overflow-hidden "
        >
          <div className="relative flex flex-col items-center justify-center h-full lg:flex-row text-primary">
            {/* life 1 */}
            <div
              id="menu-start"
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
                className=" w-[90%] lg:w-[25.615vw] max-lg:absolute "
              >
                <h6 className="mb-3 capitalize  heading-sm seasons">
                  FRIEND & GUIDE
                </h6>
                <p className=" content text-secondary">
                  {" "}
                  His philosophy is rich. And His love enriches. More than a
                  guide. He is a friend. His is the way of devotion.
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
                className=" w-[90%] lg:w-[25.615vw] max-lg:absolute lenis lenis-scrolling"
              >
                <h6 className="mb-3 capitalize  heading-sm seasons">birth</h6>
                <p
                  className={`content text-secondary ${
                    smMob && "h-[5.5rem]"
                  } lg:h-[5vw] overflow-auto`}
                >
                  {" "}
                  We ate with Gurudev. We studied with Gurudev. We cooked with
                  Gurudev. We cycled with Gurudev. We sang, danced, and played
                  with Gurudev. Love turned to devotion. Devotion turned to
                  surrender. And we were ready to put it all on the line for
                  Him.
                </p>
              </div>
            </div>

            {/* life 3 */}
            {/* <div
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
            </div> */}
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
                className="hidden w-[90%] lg:w-[25.615vw] absolute z-20 lenis lenis-scrolling "
              >
                <h6 className="mb-3 capitalize  heading-sm seasons">
                  Different Generations
                </h6>
                <p
                  className={`content text-secondary ${
                    smMob && "h-[5.5rem]"
                  } lg:h-[5vw] overflow-auto`}
                >
                  Generations come and generations grow. Yet, each feel like He
                  is one of their own.
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
                className=" w-[90%] lg:w-[25.615vw] absolute z-10   "
              >
                <h6 className="mb-3 capitalize  heading-sm seasons">Youth</h6>
                <p
                  className={`content text-secondary  overflow-auto ${
                    smMob && "h-[2.5rem] lenis lenis-scrolling"
                  }`}
                >
                  {" "}
                  Why do the youth follow Him? Because when the heart gets care.
                  And the head gets clarity. The soul opens up to spirituality.
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
                className=" w-[275px]   lg:w-[25.134vw] h-[302.71px] lg:h-[26.594vw] absolute z-[1]"
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
                <h6 className="mb-3 capitalize  heading-sm seasons">
                  Children
                </h6>
                <p className=" content text-secondary">
                  {" "}
                  Children with straight A’s but bent values cannot thrive as
                  adults. He plants them with love. Waters them with values.
                  Lights their lives with smiles. And they grow in His shelter.
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
                className="  w-[275px]   lg:w-[25.134vw] h-[302.71px] lg:h-[26.594vw] absolute z-[-1]"
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
                className="  w-[275px]   lg:w-[25.134vw] h-[302.71px] lg:h-[26.594vw] absolute z-[-2]"
              >
                <Image
                  width={579}
                  height={721}
                  src={"/images/home/immersion/life7-2.webp"}
                  className=" size-full object-cover"
                />
              </div>
              <div
                ref={(el) => (immersive7Ref.current[4] = el)}
                className="  w-[275px]   lg:w-[25.134vw] h-[302.71px] lg:h-[26.594vw] absolute z-[-3]"
              >
                <Image
                  width={579}
                  height={721}
                  src={"/images/home/immersion/life7-3.webp"}
                  className=" size-full object-cover"
                />
              </div>

              <div
                ref={(el) => (immersive7Ref.current[2] = el)}
                className=" w-[90%] lg:w-[25.615vw] max-lg:absolute"
              >
                <h6 className="mb-3 capitalize  heading-sm seasons">
                  Non-Indians
                </h6>
                <p className=" content text-secondary">
                  {" "}
                  The language of love is understood by all.
                </p>
              </div>
            </div>

            {/* life 8 */}
            {/* <div
              ref={(el) => (immersive8Ref.current[0] = el)}
              className=" absolute z-[1] flex justify-center h-full w-full sm:w-[425px] lg:w-full items-center "
            >
              <div
                ref={(el) => (immersive8Ref.current[1] = el)}
                className="  w-[275px] lg:w-[29.868vw] h-[285px] lg:h-[42.899vw] absolute "
              >
                <Image
                  width={574}
                  height={721}
                  src={"/images/home/immersion/life8.webp"}
                  className=" size-full object-cover"
                />
              </div>
              <div
                ref={(el) => (immersive8Ref.current[2] = el)}
                className={` w-[90%] lg:w-[25.615vw] max-lg:absolute ${
                  smMob && "lenis lenis-scrolling"
                }`}
              >
                <h6 className="mb-3 capitalize  heading-sm seasons">Study </h6>
                <p
                  className={`content text-secondary max-lg:overflow-auto ${
                    smMob && "max-md:h-[10rem]"
                  } `}
                >
                  {" "}
                  Acing a five-year Bachelor’s degree in three months was easy.
                  A gold medal in M.A. (Philosophy) from the University of
                  Mumbai was easy. But completing His Ph.D. thesis on Shri
                  Atmasiddhi Shastra (Shrimad Rajchandraji’s magnum opus) was a
                  challenge. Not because it was tough, but because He couldn’t
                  find an end to the depths of the scripture.
                </p>
              </div>
            </div> */}

            {/* life 9 */}
            {/* <div
              ref={(el) => (immersive9Ref.current[0] = el)}
              className=" absolute z-[1] flex justify-center h-full w-full sm:w-[425px] lg:w-full items-center "
            >
              <div
                ref={(el) => (immersive9Ref.current[1] = el)}
                className="  w-[226px] lg:w-[21.106vw] h-[181px] lg:h-[16.876vw] absolute "
              >
                <Image
                  width={405}
                  height={324}
                  src={"/images/home/immersion/life9-1.webp"}
                  className=" size-full object-cover"
                />
              </div>
              <p
                ref={(el) => (immersive9Ref.current[2] = el)}
                className=" max-lg:w-[336px] lg:text-[1.458vw] text-[16px] text-[#322F35] absolute"
              >
                As He offered the doctorate at the Lotus Feet of His Master, 
              </p>
              <p
                ref={(el) => (immersive9Ref.current[3] = el)}
                className=" lg:text-[1.458vw] text-[16px] text-[#322F35] absolute text-start"
              >
                He confessed,
              </p>
              <p
                ref={(el) => (immersive9Ref.current[4] = el)}
                className=" lg:text-[1.458vw] text-[16px] font-semibold text-[#322F35] absolute"
              >
                “I have stopped, not finished.”
              </p>
              <p
                ref={(el) => (immersive9Ref.current[5] = el)}
                className=" lg:text-[1.458vw] text-[16px] text-[#322F35] absolute"
              >
                He has not used the title since.
              </p>
              <div
                ref={(el) => (immersive9Ref.current[6] = el)}
                className="  w-[332px] lg:w-[23.646vw] h-[220.28px] lg:h-[15.677vw] absolute "
              >
                <Image
                  width={454}
                  height={301}
                  src={"/images/home/immersion/life9-2.webp"}
                  className=" size-full object-cover"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default WebAnimationFrame;
