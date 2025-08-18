import React, { memo, useEffect, useRef, useState } from "react";
import Counter from "./Counter";
import Map from "./Map";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const locations = [
  {
    name: "North America",
    position: { top: "20.07%", left: "31.52%" },
    mobilePosition: { top: "67px", left: "195px" }, // for w-620 h-332
    images: [
      { img: "/images/socialprojects/1.jpg" },
      { img: "/images/socialprojects/2.jpg" },
      { img: "/images/socialprojects/3.jpg" },
    ],
  },
  {
    name: "South America",
    position: { top: "83.81%", left: "29.56%" },
    mobilePosition: { top: "278px", left: "183px" },
    images: [
      { img: "/images/event1.png" },
      { img: "/images/historic-celeberation2.png" },
      { img: "/images/historic-celeberation.png" },
    ],
  },
  {
    name: "Europe",
    position: { top: "49.12%", left: "54.60%" },
    mobilePosition: { top: "163px", left: "338px" },
    images: [
      { img: "/images/socialprojects/1.jpg" },
      { img: "/images/socialprojects/2.jpg" },
      { img: "/images/socialprojects/3.jpg" },
    ],
  },
  {
    name: "Asia",
    position: { top: "60.07%", left: "79.70%" },
    mobilePosition: { top: "199px", left: "494px" },
    images: [
      { img: "/images/socialprojects/1.jpg" },
      { img: "/images/socialprojects/2.jpg" },
      { img: "/images/socialprojects/3.jpg" },
    ],
  },
  {
    name: "Australia",
    position: { top: "82.77%", left: "87.56%" },
    mobilePosition: { top: "275px", left: "543px" },
    images: [
      { img: "/images/socialprojects/1.jpg" },
      { img: "/images/socialprojects/2.jpg" },
      { img: "/images/socialprojects/3.jpg" },
    ],
  },
];

const Marker = memo(function Marker({
  location,
  isActive,
  setActiveMarker,
  index,
}) {
  const [currentImg, setCurrentImg] = useState(0);
  const intervalRef = useRef(null);

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
  const pos = isDesktopOrLaptop ? location.position : location.mobilePosition;

  // cycle through images when active
  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setCurrentImg((prev) => (prev + 1) % location.images.length);
      }, 2000);
    } else {
      clearInterval(intervalRef.current);
      setCurrentImg(0);
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive, location.images.length]);

  const handleInteraction = () => {
    if (!isDesktopOrLaptop) {
      setActiveMarker(index); // tell parent this marker is active
    }
  };

  return (
    <div
      className="absolute"
      style={{
        top: pos.top,
        left: pos.left,
        transform: "translate(-50%, -50%)",
      }}
      onMouseEnter={() => isDesktopOrLaptop && setActiveMarker(index)}
      onMouseLeave={() => isDesktopOrLaptop && setActiveMarker(null)}
      onClick={handleInteraction}
    >
      {/* marker */}
      <div className="relative flex items-center justify-center w-5 h-5 lg:w-[1.5vw] lg:h-[1.5vw]">
        <span className="absolute inline-flex w-full h-full bg-[#EE6324] rounded-full opacity-75 animate-ping"></span>
        <span className="absolute inline-flex w-full h-full border border-[#EE6324] rounded-full"></span>
        <div className="w-2 h-2 lg:w-[0.6vw] lg:h-[0.6vw] bg-[#EE6324] rounded-full"></div>
      </div>

      {/* popup images */}
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            key={currentImg}
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute z-50 w-[100px] h-[92px] lg:w-[7.813vw] lg:h-[5.833vw] overflow-hidden -translate-x-1/2  shadow-lg -top-11  lg:-top-[6.667vw] left-1/2"
          >
            <Image
              src={location.images[currentImg].img}
              alt="popup"
              fill
              className="object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

function Impact() {
  const [activeMarker, setActiveMarker] = useState(null); // track which marker is active
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <>
      <div className="my-[50px] lg:my-[4vw]">
        <div className="relative w-full containerx">
          <div className="headwrap mb-4 lg:mb-[2vw]">
            <h3 className="heading seasons text-[#5E2A29]">
              Impact across the globe
            </h3>
          </div>
          <div className="lg:flex gap-[1vw] flex-nowrap">
            <div className="w-full lg:w-3/12">
              <div className="flex lg:mt-[2vw] flex-row lg:flex-col flex-nowrap lg:flex-wrap gap-[20px] md:gap-[3rem] lg:gap-[3.646vw]">
                <div className="counteritem">
                  <Counter start={0} end={45} suffix={"+"} duration={2000} />
                  <p className="text-[#5E2A29] text-[14px] lg:text-[20px] xl:text-[1vw]">
                    Countries reached
                  </p>
                </div>
                <div className="counteritem">
                  <Counter start={0} end={1.2} suffix={"M"} duration={2000} />
                  <p className="text-[#5E2A29] text-[14px] lg:text-[20px] xl:text-[1vw]">
                    Lives transformed
                  </p>
                </div>
                <div className="counteritem">
                  <Counter start={0} end={10} suffix={"K"} duration={2000} />
                  <p className="text-[#5E2A29] text-[14px] lg:text-[20px] xl:text-[1vw]">
                    Community projects
                  </p>
                </div>
              </div>
              <div className="mapfooter mt-6 lg:mt-[4vw] lg:block hidden">
                <div className="subtitle mb-[0.6vw]">New Jersey</div>
                <div className=" text-[20px] text-[#322F35] lg:text-[1vw]">
                  On July 19, 2025, divine‑themed meditative practices and drew
                  approximately 400 to 600 participants.
                </div>
              </div>
            </div>
            <div className="w-full lg:w-9/12">
              <div className="relative overflow-x-auto my-9 mapwrapper whitespace-nowrap scrollbar-hide">
                <Map />

                {locations.map((location, index) => (
                  <Marker
                    key={location.name}
                    location={location}
                    index={index}
                    isActive={activeMarker === index}
                    setActiveMarker={setActiveMarker}
                  />
                ))}
              </div>
              <div className="mapfooter mt-6 lg:mt-[4vw] lg:hidden block  ">
                <div className="subtitle mb-[10px] lg:mb-[0.6vw]">
                  New Jersey
                </div>
                <div className="text-[14px] lg:text-[20px] text-[#322F35] xl:text-[1vw]">
                  On July 19, 2025, divine‑themed meditative practices and drew
                  approximately 400 to 600 participants.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Impact;
