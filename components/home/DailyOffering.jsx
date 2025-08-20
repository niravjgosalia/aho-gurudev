import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const frames = [
  "/images/frames/1.png",
  "/images/frames/2.png",
  "/images/frames/3.png",
  "/images/frames/5.png",
];

function DailyOffering() {
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const tl = useRef(null);
  const [showButton, setShowButton] = useState(true);

  const [count, setCount] = useState(100);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/offerLotus")
      .then((res) => res.json())
      .then((data) => setCount(data.count || 100));
  }, []);

  const playSequence = async () => {
    const res = await fetch("/api/offerLotus", { method: "POST" });
    const data = await res.json();

    if (!data.success) {
      toast.error(data.message || "Something went wrong ❌");
      return;
    }

    setCount(data.count);
    

    setShowButton(false);

    const images = containerRef.current.querySelectorAll(".frame");

    // Reset all invisible
    gsap.set(images, { opacity: 0 });

    // Inside playSequence()
    tl.current = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      // onComplete: () => {
      //   // Smooth fade out after sequence
      //   gsap.to(images, {
      //     opacity: 0,
      //     duration: 2,
      //     ease: "power2.inOut",
      //     onComplete: () => {
      //       // toast.success(data.message);
      //       setShowButton(true);
      //       gsap.fromTo(
      //         buttonRef.current,
      //         { autoAlpha: 0, y: 20 },
      //         { autoAlpha: 1, y: 0, duration: 1.2, ease: "power2.out" }
      //       );
      //     },
      //   });
      // },
    });

    // Slower + more visible frames
    images.forEach((img, i) => {
      // Fade in
      tl.current.to(img, { opacity: 1, duration: 2 }, i * 3); // start every 4s

      // Fade out previous frame with small overlap
      if (i > 0) {
        tl.current.to(images[i - 1], { opacity: 0, duration: 2 }, i * 3 + 0.5);
      }
    });
  };

  return (
    <div className="my-[50px] lg:mt-[4vw] md:h-screen">
      <ToastContainer position="bottom-right" autoClose={2000} />

      <div className="relative w-full h-full containerx">
        <div className="flex items-center h-full lg:justify-center flex-wrap gap-6 lg:gap-[4vw]">
          <div className="headwrap">
            <h3 className="heading leading-[1.2] mb-[10px] lg:mb-[0.7vw] seasons capitalize text-[#5E2A29]">
              Daily Offering to <br /> Gurudevshri
            </h3>
            <p className="text-[14px] md:text-[20px] lg:text-[1.3vw] text-[#5E2A29]">
              {count} people have offered a lotus today.
            </p>
          </div>
          <div className="relative flex flex-col justify-center w-full text-center lg:w-auto offerlotus pb-[3vw]">
            <div className="w-full text-center imgwrapper mb-[2rem] lg:mb-0">
              <Image
                src="/images/gurudevshri.png"
                alt="Gurudevshri"
                width={601}
                height={772}
                className="w-[344px] h-[441px] lg:w-[26.302vw] mx-auto lg:h-auto"
              />
            </div>

            {/* Frame container */}
            <div
              ref={containerRef}
              className="absolute left-0 right-0 mx-auto bottom-0 w-[9rem] h-[18rem] lg:w-[19.323vw] lg:h-[25.208vw] overflow-hidden"
            >
              {frames.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`frame-${index}`}
                  fill
                  className="absolute z-[2] top-0 left-0 object-cover opacity-0 frame"
                />
              ))}
            </div>

            {/* Button */}
            {showButton && (
              <button
                onClick={playSequence}
                ref={buttonRef}
                className={`absolute left-0 right-0 -bottom-0 text-[#5E2A29] z-[9] max-lg:mt-[25px] seasons text-[16px] lg:text-[1.198vw] leading-[1.3]`}
              >
                Click here to <br /> offer a lotus.
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyOffering;
