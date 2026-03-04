import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Scrollbar, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";
import LeftButton from "../layout/LeftButton";
import RightButton from "../layout/RightButton";
const Schedule2 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    {
      title: "Day 1 - 26th Sep ",
      subData: [
        {
          time: "8:00 AM",
          title: "Pujya Gurudevshri’s 60th Year Flag-Off",
          desc: "The beginning of a milestone year, as we celebrate growth and gratitude, reminds us ",
        },
        {
          time: "8:00 AM",
          title: "Pujya Gurudevshri’s 60th Year Flag-Off",
          desc: "The beginning of a milestone year, as we celebrate growth and gratitude, reminds us ",
        },
        {
          time: "8:00 AM",
          title: "Pujya Gurudevshri’s 60th Year Flag-Off",
          desc: "The beginning of a milestone year, as we celebrate growth and gratitude, reminds us ",
        },
        {
          time: "8:00 AM",
          title: "Pujya Gurudevshri’s 60th Year Flag-Off",
          desc: "The beginning of a milestone year, as we celebrate growth and gratitude, reminds us ",
        },
        {
          time: "8:00 AM",
          title: "Pujya Gurudevshri’s 60th Year Flag-Off",
          desc: "The beginning of a milestone year, as we celebrate growth and gratitude, reminds us ",
        },
      ],
    },
    {
      title: "Day 2 - 27th Sep ",
      subData: [
        {
          time: "8:00 AM",
          title: "Pujya Gurudevshri’s 60th Year Flag-Off",
          desc: "The beginning of a milestone year, as we celebrate growth and gratitude, reminds us ",
        },
        {
          time: "8:00 AM",
          title: "Pujya Gurudevshri’s 60th Year Flag-Off",
          desc: "The beginning of a milestone year, as we celebrate growth and gratitude, reminds us ",
        },
        {
          time: "8:00 AM",
          title: "Pujya Gurudevshri’s 60th Year Flag-Off",
          desc: "The beginning of a milestone year, as we celebrate growth and gratitude, reminds us ",
        },
        {
          time: "8:00 AM",
          title: "Pujya Gurudevshri’s 60th Year Flag-Off",
          desc: "The beginning of a milestone year, as we celebrate growth and gratitude, reminds us ",
        },
        {
          time: "8:00 AM",
          title: "Pujya Gurudevshri’s 60th Year Flag-Off",
          desc: "The beginning of a milestone year, as we celebrate growth and gratitude, reminds us ",
        },
      ],
    },
    {
      title: "Day 1 - 26th Sep ",
      subData: [
        {
          time: "8:00 AM",
          title: "Pujya Gurudevshri’s 60th Year Flag-Off",
          desc: "The beginning of a milestone year, as we celebrate growth and gratitude, reminds us ",
        },
        {
          time: "8:00 AM",
          title: "Pujya Gurudevshri’s 60th Year Flag-Off",
          desc: "The beginning of a milestone year, as we celebrate growth and gratitude, reminds us ",
        },
        {
          time: "8:00 AM",
          title: "Pujya Gurudevshri’s 60th Year Flag-Off",
          desc: "The beginning of a milestone year, as we celebrate growth and gratitude, reminds us ",
        },
        {
          time: "8:00 AM",
          title: "Pujya Gurudevshri’s 60th Year Flag-Off",
          desc: "The beginning of a milestone year, as we celebrate growth and gratitude, reminds us ",
        },
        {
          time: "8:00 AM",
          title: "Pujya Gurudevshri’s 60th Year Flag-Off",
          desc: "The beginning of a milestone year, as we celebrate growth and gratitude, reminds us ",
        },
      ],
    },
    {
      title: "Day 2 - 27th Sep ",
      subData: [
        {
          time: "8:00 AM",
          title: "Pujya Gurudevshri’s 60th Year Flag-Off",
          desc: "The beginning of a milestone year, as we celebrate growth and gratitude, reminds us ",
        },
        {
          time: "8:00 AM",
          title: "Pujya Gurudevshri’s 60th Year Flag-Off",
          desc: "The beginning of a milestone year, as we celebrate growth and gratitude, reminds us ",
        },
        {
          time: "8:00 AM",
          title: "Pujya Gurudevshri’s 60th Year Flag-Off",
          desc: "The beginning of a milestone year, as we celebrate growth and gratitude, reminds us ",
        },
        {
          time: "8:00 AM",
          title: "Pujya Gurudevshri’s 60th Year Flag-Off",
          desc: "The beginning of a milestone year, as we celebrate growth and gratitude, reminds us ",
        },
        {
          time: "8:00 AM",
          title: "Pujya Gurudevshri’s 60th Year Flag-Off",
          desc: "The beginning of a milestone year, as we celebrate growth and gratitude, reminds us ",
        },
      ],
    },
  ];
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className=" containerx containery">
      <h6 className=" heading text-primary seasons mb-5 lg:mb-[2.5vw]">
        Event Schedule
      </h6>
      <div className=" max-md:hidden">
        <Swiper
          modules={[Autoplay, Navigation, Mousewheel, Scrollbar]}
          slidesPerView={1}
          loop={true}
          spaceBetween={20}
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: false,
          // }}
          speed={1200}
          navigation={{
            nextEl: ".schedule2-swiper-button-next",
            prevEl: ".schedule2-swiper-button-prev",
          }}
          scrollbar={{
            el: ".schedule2-swiper-scrollbar",
            draggable: true,
            hide: false,
            dragSize: "auto",
            snapOnRelease: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          className=""
        >
          {data?.map((item, i) => {
            return (
              <SwiperSlide key={`schedule${i}`} className="">
                <div className=" bg-white p-4 lg:p-[1.85vw]  text-primary">
                  <p className=" heading-sm seasons">{item?.title}</p>
                  <div className=" lg:border-t lg:border-[#5E2A29] mt-2 pt-2 lg:mt-[0.5vw] lg:pt-[0.5vw] grid grid-cols-1 ">
                    {item?.subData?.map((subItem, index) => (
                      <div
                        key={index}
                        className="lg:p-[1vw] py-4 max-lg:border-t max-lg:border-[#b36665] lg:border-b lg:border-[#5E2A2933] last:lg:border-b-0"
                      >
                        <div className=" bg-[#E362260F] border border-[#E36226] w-fit p-1 lg:p-[0.2vw]">
                          {subItem?.time}
                        </div>
                        <p className=" content seasons my-2 lg:my-[0.5vw]">
                          {subItem?.title}
                        </p>
                        <p className=" content-sm text-[#322F35]">
                          {subItem?.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className=" relative">
          <div className="w-full px-5 mt-5 lg:px-0 lg:mx-auto lg:w-2/12 custnav transnav lg:absolute right-[4vw]">
            <div className="relative flex lg:justify-end items-center gap-4">
              <LeftButton name={"schedule2-swiper-button-prev"} />
              <div
                className="hidden schedule2-swiper-scrollbar swiper-scrollbar dark lg:block"
                style={{
                  position: "relative",
                  left: "auto",
                  bottom: "auto",
                  top: "auto",
                }}
              ></div>
              <RightButton name={"schedule2-swiper-button-next"} />
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden grid grid-cols-1 gap-5 ">
        {data?.map((item, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={index}
              className="bg-white p-4 lg:p-[1.85vw] text-primary shadow-lg"
            >
              {/* Clickable Title */}
              <p
                onClick={() => toggleFAQ(index)}
                className="heading-sm seasons cursor-pointer flex justify-between items-center"
              >
                {item?.title}
                <Image
                  width={12}
                  height={6}
                  alt="arrow"
                  src={"/icons/arrow.svg"}
                  className={`${!isOpen ? "rotate-0" : "rotate-180"}`}
                />
                {/* <span>{isOpen ? "-" : "+"}</span> */}
              </p>

              {/* AnimatePresence MUST wrap conditional content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-2 pt-2 grid grid-cols-1">
                      {item?.subData?.map((subItem, subIndex) => (
                        <div
                          key={subIndex}
                          className="py-4 border-t border-[#b36665]"
                        >
                          <div className="bg-[#E362260F] border border-[#E36226] w-fit p-1">
                            {subItem?.time}
                          </div>
                          <p className="content seasons my-2">
                            {subItem?.title}
                          </p>
                          <p className="content-sm text-[#322F35]">
                            {subItem?.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Schedule2;
