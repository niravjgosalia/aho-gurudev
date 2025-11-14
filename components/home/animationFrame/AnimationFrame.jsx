import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

gsap.registerPlugin(ScrollTrigger);

const AnimationFrame = ({ id, data }) => {
  const containerRef = useRef();
  const frameRef = useRef([]);
  const textStartRef = useRef([]);
  const imageStartRef = useRef([]);

  useEffect(() => {
    NativeFancybox.bind("[data-fancybox]", {});

    return () => {
      NativeFancybox.unbind("[data-fancybox]");
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=800%",
        scrub: true,
        pin: true,
        markers: false,
      },
    });

    tl.from(imageStartRef.current[0], {
      scale: 0.5,
      y: "15vw",
    });
    tl.from(textStartRef.current[0], {
      opacity: 0,
    });

    frameRef.current.forEach((el, index) => {
      if (index === frameRef.current.length - 1) return;

      if ((index + 1) % 2 === 0) {
        tl.to(el, {
          clipPath: "inset(0% 100% 0% 0%)",
          ease: "power2.inOut",
        });
      } else {
        tl.to(el, {
          clipPath: "inset(100% 0% 0% 0%)",
          ease: "power2.inOut",
        });
      }
    });
  });
  return (
    <div id={id} ref={containerRef} className=" h-screen relative ">
      {data?.map((item, index) => (
        <div
          key={index}
          style={{
            zIndex: `-${index + 1}`,
          }}
          ref={(el) => (frameRef.current[index] = el)}
          className=" absolute bg-[#f3f2dd] size-full flex justify-center items-center "
        >
          {item?.section === "normal" && (
            <div>
              <div className=" w-[275px]   lg:w-[25.134vw] h-full seasons">
                <div
                  ref={(el) => (imageStartRef.current[index] = el)}
                  className="  w-full  h-[302.71px] lg:h-[26.594vw] "
                >
                  <Image
                    width={579}
                    height={721}
                    src={item?.img}
                    className=" size-full object-cover"
                  />
                </div>
                <div ref={(el) => (textStartRef.current[index] = el)}>
                  <h6 className="my-3 capitalize  heading-sm season text-[#5E2A29] text-center lg:text-start">
                    {item?.title}
                  </h6>
                  <p
                    className={`content text-secondary seasons text-center lg:text-start  ${
                      item?.hugeContent &&
                      "h-[7.5rem] lenis lenis-scrolling overflow-auto"
                    }`}
                  >
                    {item?.desc}
                  </p>
                </div>
              </div>
            </div>
          )}
          {item?.section === "youtube" && (
            <div>
              <div className=" w-[275px]   lg:w-[25.134vw] h-full seasons">
                <div className="  w-full  h-[302.71px] lg:h-[26.594vw] relative flex justify-center items-center  ">
                  <Image
                    height={50}
                    width={50}
                    src={"/icons/play.svg"}
                    className=" absolute z-[1] cursor-pointer"
                    data-src={item?.link}
                    data-fancybox="animation"
                  />
                  <div className=" bg-black bg-opacity-30 absolute size-full" />
                  <Image
                    width={579}
                    height={721}
                    src={item?.img}
                    className=" size-full object-cover"
                  />
                </div>
                <h6 className="my-3 capitalize  heading-sm season text-[#5E2A29] text-center lg:text-start">
                  {item?.title}
                </h6>
                <p className=" content text-secondary seasons text-center lg:text-start">
                  {item?.desc}
                </p>
              </div>
            </div>
          )}
          {item?.section === "audio" && (
            <div>
              <div className=" w-[275px]   lg:w-[25.134vw] h-full seasons">
                <div
                  ref={(el) => (imageStartRef.current[index] = el)}
                  className="  w-full   lg:h-[15.234vw] "
                >
                  <Image
                    height={293}
                    width={572}
                    src={item?.img}
                    className=" size-full object-cover"
                  />
                </div>
                <div ref={(el) => (textStartRef.current[index] = el)}>
                  <h6 className="my-3 capitalize  heading-sm season text-[#5E2A29] text-center lg:text-start">
                    {item?.title}
                  </h6>
                  <p className=" content text-secondary seasons text-center lg:text-start  ">
                    {item?.desc}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AnimationFrame;
