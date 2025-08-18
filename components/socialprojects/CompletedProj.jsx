import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  Pagination,
  Controller,
  EffectFade,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import Image from "next/image";
import gsap from "gsap";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Shrimad Rajchandra Sarvamangal University",
    subtitle: "Seva",
    img: "/images/socialprojects/1.jpg",
    desc: "Special launches and heartfelt offerings mark the beginning of a milestone year, as we celebrate growth, gratitude, and the journey ahead with renewed purpose and passion.",
  },
  {
    title: "Shrimad Rajchandra Jivamaitridam",
    subtitle: "Seva",
    img: "/images/socialprojects/2.jpg",
    desc: "Special launches and heartfelt offerings mark the beginning of a milestone year, as we celebrate growth, gratitude, and the journey ahead with renewed purpose and passion.",
  },
  {
    title: "Shrimad Rajchandra Hospital",
    subtitle: "Seva",
    img: "/images/socialprojects/3.jpg",
    desc: "Special launches and heartfelt offerings mark the beginning of a milestone year, as we celebrate growth, gratitude, and the journey ahead with renewed purpose and passion.",
  },
];

const parent = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      delay: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    y: -20,
    transition: {
      when: "afterChildren",
    },
  },
};
const child = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

function CompletedProj() {
  const slidesRef = useRef([]);
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  // const slidesRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0); // State to track active slide

  useEffect(() => {
    if (slidesRef.current[0]) {
      gsap.to(slidesRef.current[0], {
        width: "100%",
        height: "100%",
        duration: 1.7,
        ease: "power3.inOut",
      });
    }
  }, []);

  // Handle slide changes
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.realIndex;

    // Reset all slides to initial small size
    slidesRef.current.forEach((el) => {
      if (el) {
        gsap.set(el, {
          width: "20px",
          height: "100%",
        });
      }
    });

    // Animate active slide to full size
    gsap.to(slidesRef.current[currentIndex], {
      width: "100%",
      height: "100%",
      duration: 1.7,
      ease: "power3.inOut",
    });
  };

  return (
    <>
      <div className="relative lg:flex h-full lg:gap-[3vw]">
        <div className="w-full lg:w-8/12 firstslider">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, Controller, EffectFade]}
            slidesPerView={1}
            loop={true}
            spaceBetween={20}
            effect="fade"
            // autoplay={{
            //   delay: 5000,
            //   disableOnInteraction: false,
            // }}
            speed={1200}
            navigation={{
              nextEl: ".proj-swiper-button-next",
              prevEl: ".proj-swiper-button-prev",
            }}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
              bulletClass: "custom-bullet",
              bulletActiveClass: "custom-bullet-active",
              renderBullet: (index, className) => {
                return `<span class="${className}"></span>`;
              },
            }}
            className=""
            onSlideChange={handleSlideChange}
            onSwiper={setFirstSwiper}
            controller={{ control: secondSwiper }}
          >
            {projects?.map((item, i) => {
              return (
                <SwiperSlide key={`projimg${i}`} className="relative">
                  <div
                    ref={(el) => (slidesRef.current[i] = el)}
                    className="w-full h-full overflow-hidden"
                    style={{
                      width: "20px", // Initial small width
                      height: "100%", // Initial small height
                      margin: "0 auto", // Centers the expanding box
                    }}
                  >
                    <Image
                      src={item.img}
                      alt="projects"
                      width={1247}
                      height={610}
                      className="object-cover w-full h-[20rem] lg:h-[70vh]"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="w-full lg:w-[26.615vw] relative  secondslider">
          <div className="flex items-center h-full">
            <Swiper
              modules={[Autoplay, Navigation, Pagination, Controller]}
              slidesPerView={1}
              loop={true}
              spaceBetween={20}
              // autoplay={{
              //   delay: 5000,
              //   disableOnInteraction: false,
              // }}
              speed={1200}
              navigation={{
                nextEl: ".proj-swiper-button-next",
                prevEl: ".proj-swiper-button-prev",
              }}
              pagination={{
                el: ".custom-pagination",
                clickable: true,
                bulletClass: "custom-bullet",
                bulletActiveClass: "custom-bullet-active",
                renderBullet: (index, className) => {
                  return `<span class="${className}"></span>`;
                },
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              onSwiper={setSecondSwiper}
              controller={{ control: firstSwiper }}
              className=""
            >
              {projects?.map((item, i) => {
                return (
                  <SwiperSlide key={`proj${i}`} className="relative py-[1vw]">
                    <motion.div
                      className="px-5 pt-6 projcard lg:px-0 lg:pt-0"
                      initial="hidden"
                      whileInView="visible"
                      variants={parent}
                      key={activeIndex}
                    >
                      <motion.p variants={child} className="subtitle mb-4 lg:mb-[1vw]">
                        {item?.subtitle}
                      </motion.p>
                      <motion.h2
                        variants={child}
                        className="text-[20px] leading-[1.4] xl:leading-[2.3vw] md:text-2xl xl:text-[2.083vw] mb-1 xl:mb-[1vw] seasons text-[#5E2A29]"
                      >
                        {item?.title}
                      </motion.h2>
                      <motion.p
                        variants={child}
                        className="text-[#322F35] text-[14px] leading-normal xl:text-[1vw] mt-3 mb-5 xl:my-[1.1vw]"
                      >
                        {item?.desc}
                      </motion.p>
                      <motion.div variants={child} className="btnwrap">
                        <button className="flatbtn">Discover</button>
                      </motion.div>
                    </motion.div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="bottom-0 right-0 px-5 lg:px-0 lg:absolute custnav transnav">
            <div className="flex items-center justify-end gap-4">
              <button className="text-center bg-transparent border border-[#5E2A29] cursor-pointer proj-swiper-button-prev hover:bg-[#5E2A29]">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[36px] h-[36px] p-[8px] xl:w-[2.083vw] xl:h-[2.083vw] xl:p-[0.4vw]"
                >
                  <path
                    d="M18.4023 11.625H4.83984"
                    stroke="#5E2A29"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.6211 18.4062L4.83984 11.625L11.6211 4.84375"
                    stroke="#5E2A29"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              
              <button className="text-center bg-transparent border border-[#5E2A29] cursor-pointer proj-swiper-button-next hover:bg-[#5E2A29]">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[36px] h-[36px] p-[8px] xl:w-[2.083vw] xl:h-[2.083vw] xl:p-[0.4vw]"
                >
                  <path
                    d="M5.59766 11.625H19.1602"
                    stroke="#5E2A29"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.3789 18.4062L19.1602 11.625L12.3789 4.84375"
                    stroke="#5E2A29"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompletedProj;
