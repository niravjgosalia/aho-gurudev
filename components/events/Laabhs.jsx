import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Scrollbar, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";
import LeftButton from "../layout/LeftButton";
import RightButton from "../layout/RightButton";
const Laabhs = () => {
  const data = [
    {
      img: "/images/events/laabhs/1.png",
      name: "Aarthi",
      desc: "Be part of the divine Aarthi by offering your donation. Join in spreading light, devotion, and positivity.",
    },
    {
      img: "/images/events/laabhs/1.png",
      name: "Aarthi",
      desc: "Be part of the divine Aarthi by offering your donation. Join in spreading light, devotion, and positivity.",
    },
    {
      img: "/images/events/laabhs/1.png",
      name: "Aarthi",
      desc: "Be part of the divine Aarthi by offering your donation. Join in spreading light, devotion, and positivity.",
    },
    {
      img: "/images/events/laabhs/1.png",
      name: "Aarthi",
      desc: "Be part of the divine Aarthi by offering your donation. Join in spreading light, devotion, and positivity.",
    },
  ];

  return (
    <section className=" containerx containery">
      <h6 className=" heading text-primary seasons lg:mb-[1.5vw] mb-2">
        Laabhs
      </h6>

      <div className=" w-full">
        <Swiper
          modules={[Autoplay, Navigation, Mousewheel, Scrollbar]}
          slidesPerView={1}
          loop={true}
          spaceBetween={20}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={1200}
          navigation={{
            nextEl: ".laabhs-swiper-button-next",
            prevEl: ".laabhs-swiper-button-prev",
          }}
          scrollbar={{
            el: ".laabhs-swiper-scrollbar",
            draggable: true,
            hide: false,
            dragSize: "auto",
            snapOnRelease: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
              centeredSlides: false,
            },
            593: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
              //   centeredSlides: true,
            },
          }}
          className=""
        >
          {data?.map((item, i) => (
            <SwiperSlide key={`schedule-${i}`}>
              <div className="lg:w-[29.844vw] bg-white">
                <Image
                  height={320}
                  width={573}
                  src={item?.img}
                  alt={item?.name}
                  className="lg:h-[16.615vw] w-full object-cover"
                />
                <div className=" p-2 lg:p-[0.75vw]">
                  <h6 className=" heading-sm text-primary seasons">
                    {item?.name}
                  </h6>
                  <p
                    className=" content-sm"
                    dangerouslySetInnerHTML={{ __html: item?.desc }}
                  ></p>
                  <div className=" flex justify-end items-center mt-4 lg:mt-[1vw]">
                    <div className=" btnwrap ">
                      <button className="flatbtn w-full">Take Pledge </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-full px-5 mt-5 lg:px-0 lg:mx-auto lg:w-2/12 custnav transnav">
          <div className="relative flex lg:justify-end items-center gap-4">
            <LeftButton name={"laabhs-swiper-button-prev"} />
            <div
              className="hidden laabhs-swiper-scrollbar swiper-scrollbar dark lg:block"
              style={{
                position: "relative",
                left: "auto",
                bottom: "auto",
                top: "auto",
              }}
            ></div>
            <RightButton name={"laabhs-swiper-button-next"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Laabhs;
