import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const events = [
  { title: "Festival of Bliss", img: "/images/events/event1.jpg" },
  { title: "Spiritual Journey", img: "/images/events/event1.jpg" },
  { title: "Global Satsang", img: "/images/events/event1.jpg" },
];

function EventCalenderbackup() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [sliderMode, setSliderMode] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % events.length);
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  useGSAP(
    () => {
      const cards = cardsRef.current;
      const offset = 2; // vertical offset in vw between stacked cards
      const topCardY = 13; // final top position

      // Initial state
      gsap.set(cards, {
        // y: "50vw",
        // x: "2vw",
        opacity: 0,
        scale: 0.5,
        zIndex: (i) => cards.length - i,
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        end: "+=100%",
        markers: true,
        onEnter: () => {
          const tl = gsap.timeline();

          // Step 1: Bring cards up slowly
          cards.forEach((card, i) => {
            tl.to(
              card,
              {
                y: `${topCardY + i * offset}vw`,
                opacity: 1,
                scale: 0.8 + i * 0.05,
                duration: 1,
                ease: "power3.out",
                zIndex: cards.length + i,
              },
              i * 1.2
            );
          });

          // Step 2: Merge all to topmost card position FAST
          tl.to(
            cards,
            {
              y: `${topCardY}vw`,
              scale: 0.93,
              zIndex: (i) => cards.length + i,
              duration: 0.4, // much faster merge
              ease: "power3.in",
            },
            `+=1`
          );
        },
        onLeaveBack: () => {
          // Reset for replay
          gsap.set(cards, {
            y: "40vw",
            x: "2vw",
            opacity: 0,
            scale: 0.5,
            zIndex: (i) => cards.length - i,
          });
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <div className="pt-[1vw] h-screen" ref={sectionRef}>
      <div className="relative w-full containerx">
        <div className="headwrap">
          <h3 className="heading seasons text-[#5E2A29]">The Event Calendar</h3>
        </div>
        {/* <div className="relative"> */}
        {events?.map((item, i) => {
          return (
            <div
              key={`event${i}`}
              ref={(el) => (cardsRef.current[i] = el)}
              className="absolute top-0 left-0 w-[82vw]"
            >
              <div className="mb-[1vw] w-full bg-white flex flex-col md:flex-row eventcard">
                {/* Left Content */}
                <div className="flex-1 p-6 md:p-10 z-[2]">
                  {/* Title */}
                  <h2 className="text-2xl md:text-[2.083vw] mb-3 seasons text-[#5E2A29]">
                    {item?.title}
                  </h2>
                  <p className="max-w-md mt-2 text-gray-600 text-[1vw]">
                    Special launches and heartfelt offerings to enter a
                    milestone year.
                  </p>

                  {/* Date & Location */}
                  <div className="flex items-center gap-6 my-8 text-sm text-[#322F35]">
                    <div className="flex items-center gap-2">
                      <div className="iconwrap lg:w-[1.2vw] lg:h-[1.2vw]">
                        <Image
                          src="/icons/calender.png"
                          alt="icons"
                          width={24}
                          height={24}
                          className="h-auto max-w-full"
                        />
                      </div>
                      <span className="text-[20px] md:text-[1vw]">
                        Fri, Sep 26 to Sun, Sep 28
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="iconwrap lg:w-[1.2vw] lg:h-[1.2vw]">
                        <Image
                          src="/icons/loc.png"
                          alt="icons"
                          width={25}
                          height={24}
                          className="h-auto max-w-full"
                        />
                      </div>
                      <span className="text-[20px] md:text-[1vw]">
                        Dharampur
                      </span>
                    </div>
                  </div>

                  {/* Schedule */}
                  <h3 className="mt-6 font-medium text-[20px] lg:text-[1.2vw] text-[#5E2A29]">
                    Schedule
                  </h3>
                  <div className="flex gap-3 lg:gap-[0.6vw] mt-3 flex-wrap lg:flex-nowrap">
                    {[
                      {
                        day: "Day 1",
                        events: [
                          "Pujya Gurudevshri's 60th Year Flag-Off",
                          "Lakeside Lotus Veneration",
                        ],
                      },
                      {
                        day: "Day 2",
                        events: [
                          "Discourse by Pujya Gurudevshri",
                          "20 Years of Grace in the United States",
                        ],
                      },
                      {
                        day: "Day 3",
                        events: [
                          "Discourse by Pujya Gurudevshri",
                          "Atmarpit Diksha Ceremony",
                        ],
                      },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="border border-[#E36226] p-4 lg:p-[0.8vw] flex flex-col justify-between hover:bg-[#fff7f5] transition flex-1 min-w-[250px] lg:min-w-0"
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="text-[20px] mb-[10px] lg:mb-[0.5vw] lg:text-[1vw] font-medium text-[#5E2A29]">
                              {item.day}
                            </span>
                            <span className="text-[#E36226] font-bold">
                              <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14.0472 8.57318L9.45105 13.1694C9.38072 13.2397 9.28534 13.2792 9.18588 13.2792C9.08643 13.2792 8.99104 13.2397 8.92072 13.1694C8.85039 13.099 8.81088 13.0037 8.81088 12.9042C8.81088 12.8047 8.85039 12.7094 8.92072 12.639L12.877 8.68278L2.46837 8.68278C2.37126 8.67935 2.27928 8.63836 2.2118 8.56846C2.14431 8.49855 2.1066 8.40518 2.1066 8.30801C2.1066 8.21084 2.14431 8.11747 2.2118 8.04756C2.27928 7.97766 2.37126 7.93667 2.46837 7.93324L12.877 7.93324L8.92072 3.97698C8.85039 3.90666 8.81088 3.81127 8.81088 3.71182C8.81088 3.61236 8.85039 3.51698 8.92072 3.44665C8.99104 3.37633 9.08643 3.33682 9.18588 3.33682C9.28534 3.33682 9.38072 3.37633 9.45105 3.44665L14.0472 8.04285C14.1176 8.11317 14.1571 8.20856 14.1571 8.30801C14.1571 8.40747 14.1176 8.50285 14.0472 8.57318Z"
                                  fill="#87412E"
                                  stroke="#87412E"
                                  strokeWidth="0.6"
                                />
                              </svg>
                            </span>
                          </div>
                          <ul className="pl-5 mt-2 text-sm text-gray-700 list-disc [&>li]:pb-2 [&>li:last-child]:pb-0">
                            {item.events.map((e, idx) => (
                              <li
                                key={idx}
                                className="text-[14px] lg:text-[0.8vw]"
                              >
                                {e}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Guests */}
                  <div className="flex flex-wrap items-end justify-between">
                    <div>
                      <h3 className="mt-6 font-medium text-[20px] lg:text-[1.2vw] text-[#5E2A29]">
                        Guests
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        {[
                          "/images/guest1.png",
                          "/images/guest1.png",
                          "/images/guest1.png",
                        ].map((src, i) => (
                          <div
                            key={i}
                            className={`relative ${
                              i === 0
                                ? "z-10"
                                : i === 1
                                ? "z-20 -ml-4"
                                : "z-30 -ml-4"
                            }`}
                          >
                            <Image
                              src={src}
                              alt="Guest"
                              width={56}
                              height={56}
                              className="w-[50px] h-[50px] lg:w-[2.9vw] lg:h-[2.9vw]"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Button */}
                    <div className="mt-6 btnwrap ">
                      <button className="bg-[#5E2A29] text-[14px] lg:text-[0.8vw] text-white px-6 py-2 hover:bg-[#472119] transition">
                        Register
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative flex-1 z-[2]">
                  <Image
                    src="/images/events/event1.jpg"
                    alt="Festival Event"
                    fill
                    className="object-cover p-[1.2vw]"
                  />
                </div>
              </div>
            </div>
          );
        })}
        {/* </div> */}
      </div>
    </div>
  );
}

export default EventCalenderbackup;
