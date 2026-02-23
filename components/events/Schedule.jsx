import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Scrollbar, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";
import LeftButton from "../layout/LeftButton";
import RightButton from "../layout/RightButton";
const Schedule = () => {
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
  ];
  return (
    <section className=" containerx containery">
      <h6 className=" heading text-primary seasons">Event Schedule</h6>
      <div className="">
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
            nextEl: ".testimonial-swiper-button-next",
            prevEl: ".testimonial-swiper-button-prev",
          }}
          scrollbar={{
            el: ".testimonial-swiper-scrollbar",
            draggable: true,
            hide: false,
            dragSize: "auto",
            snapOnRelease: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
              centeredSlides: true,
            },
            // 768: {
            //   slidesPerView: 2.5,
            //   spaceBetween: 0,
            // },
            // 1024: {
            //   slidesPerView: 3.9,
            //   spaceBetween: 0,
            //   centeredSlides: true,
            // },
          }}
          className=""
        >
          {data?.map((item, i) => {
            return (
              <SwiperSlide key={`schedule${i}`} className="">
                <div className=" bg-white p-4 lg:p-[1.85vw]  text-primary">
                  <p className=" heading-sm seasons">{item?.title}</p>
                  <div className=" lg:border-t lg:border-[#5E2A29] mt-2 pt-2 lg:mt-[0.5vw] lg:pt-[0.5vw] grid grid-cols-1 lg:grid-cols-3">
                    {item?.subData?.map((subItem, index) => (
                      <div
                        key={index}
                        className="lg:p-[1vw] py-4 max-lg:border-t max-lg:border-[#5E2A29]"
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
        <div className="w-full px-5 mt-5 lg:px-0 lg:mx-auto lg:w-2/12 custnav transnav">
          <div className="relative flex lg:justify-end items-center gap-4">
            <LeftButton name={"testimonial-swiper-button-prev"} />
            <div
              className="hidden testimonial-swiper-scrollbar swiper-scrollbar dark lg:block"
              style={{
                position: "relative",
                left: "auto",
                bottom: "auto",
                top: "auto",
              }}
            ></div>
            <RightButton name={"testimonial-swiper-button-next"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
