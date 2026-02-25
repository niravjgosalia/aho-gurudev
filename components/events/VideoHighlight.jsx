import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  Scrollbar,
  Mousewheel,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const VideoHighlight = () => {
  const data = [
    {
      month: "Oct",
      date: 12,
      title: "Shibir with Pujya Gurudevshri",
      video: "/video/1.mp4",
    },
    {
      month: "Oct",
      date: 12,
      title: "Shibir with Pujya Gurudevshri",
      video: "/video/1.mp4",
    },
    {
      month: "Oct",
      date: 12,
      title: "Shibir with Pujya Gurudevshri",
      video: "/video/1.mp4",
    },
    {
      month: "Oct",
      date: 12,
      title: "Shibir with Pujya Gurudevshri",
      video: "/video/1.mp4",
    },
    {
      month: "Oct",
      date: 12,
      title: "Shibir with Pujya Gurudevshri",
      video: "/video/1.mp4",
    },
  ];
  return (
    <section className=" containerx containery">
      <h6 className=" heading text-primary seasons lg:mb-[2vw] mb-5">
        Major Highlights
      </h6>
      <div>
        <Swiper
          modules={[Autoplay, Navigation, Mousewheel, Pagination, Scrollbar]}
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
          pagination={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
              //   centeredSlides: true,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
              //   centeredSlides: true,
            },
          }}
          className="video-highlight"
        >
          {data?.map((item, i) => {
            return (
              <SwiperSlide key={`schedule${i}`} className="pb-10 lg:pb-[4.5vw]">
                <div className=" bg-white p-4 lg:py-[1.25vw] lg:px-[2vw] lg:w-[29.896vw] text-primary flex justify-between items-center shadow-xl ">
                  <div className=" text-primary">
                    <p className="content seasons">{item?.month}</p>
                    <p className="heading-sm seasons">{item?.date}</p>
                  </div>
                  <p className=" content lg:w-[16.938vw] lg:px-[1.5vw] border-l border-[#5E2A29]">
                    {item?.title}
                  </p>
                  <div>
                    <Image
                      height={68}
                      width={68}
                      src={"/icons/video.svg"}
                      className=" lg:size-[3.542vw] cursor-pointer"
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default VideoHighlight;
