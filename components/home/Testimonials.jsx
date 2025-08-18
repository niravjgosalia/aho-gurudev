import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Scrollbar, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";

const testimonialsdata = [
  {
    comment:
      "I believe, we can understand this very well from the personality of Shrimad Rajchandraji that what we have missed out on",
    name: "Narendra Modi",
    pos: "Prime minister of india",
    img: "/images/testimonials/1.jpg",
  },
  {
    comment:
      "I believe, we can understand this very well from the personality of Shrimad Rajchandraji that what we have missed out on",
    name: "Narendra Modi",
    pos: "Prime minister of india",
    img: "/images/testimonials/1.jpg",
  },
  {
    comment:
      "I believe, we can understand this very well from the personality of Shrimad Rajchandraji that what we have missed out on",
    name: "Narendra Modi",
    pos: "Prime minister of india",
    img: "/images/testimonials/1.jpg",
  },
  {
    comment:
      "I believe, we can understand this very well from the personality of Shrimad Rajchandraji that what we have missed out on",
    name: "Narendra Modi",
    pos: "Prime minister of india",
    img: "/images/testimonials/1.jpg",
  },
  {
    comment:
      "I believe, we can understand this very well from the personality of Shrimad Rajchandraji that what we have missed out on",
    name: "Narendra Modi",
    pos: "Prime minister of india",
    img: "/images/testimonials/1.jpg",
  },
  {
    comment:
      "I believe, we can understand this very well from the personality of Shrimad Rajchandraji that what we have missed out on",
    name: "Narendra Modi",
    pos: "Prime minister of india",
    img: "/images/testimonials/1.jpg",
  },
  {
    comment:
      "I believe, we can understand this very well from the personality of Shrimad Rajchandraji that what we have missed out on",
    name: "Narendra Modi",
    pos: "Prime minister of india",
    img: "/images/testimonials/1.jpg",
  },
  {
    comment:
      "I believe, we can understand this very well from the personality of Shrimad Rajchandraji that what we have missed out on",
    name: "Narendra Modi",
    pos: "Prime minister of india",
    img: "/images/testimonials/1.jpg",
  },
  {
    comment:
      "I believe, we can understand this very well from the personality of Shrimad Rajchandraji that what we have missed out on",
    name: "Narendra Modi",
    pos: "Prime minister of india",
    img: "/images/testimonials/1.jpg",
  },
];

function Testimonials() {
  return (
    <div className="mt-[50px] lg:my-[4vw]">
      <div className="relativew-full containerx">
        <div className="lg:text-center headwrap">
          <h3 className="heading seasons text-[#5E2A29]">Testimonials</h3>
        </div>
      </div>
      <div className="relative">
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
              slidesPerView: 1.3,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 3.9,
              spaceBetween: 0,
              centeredSlides: true,
            },
          }}
          className="testimonialslider"
        >
          {testimonialsdata?.map((item, i) => {
            return (
              <SwiperSlide
                key={`testimonial${i}`}
                className="relative xl:py-[1vw]"
              >
                <div className="testimonialitem">
                  <div className="imgwrap">
                    <Image
                      src={item.img}
                      alt="image"
                      width={573}
                      height={412}
                      className="object-cover h-auto max-w-full"
                    />
                  </div>
                  <div className="testcont">
                    <h2 className="text-[20px] xl:leading-[1.6] md:text-xl xl:text-[1.2vw] my-4 lg:my-[1vw] seasons text-[#5E2A29]">
                      "{item?.comment}"
                    </h2>
                    <p className=" text-[#322F35] font-[500] text-[14px] leading-normal xl:text-[1vw]">
                      {item?.name}
                    </p>
                    <p className=" text-[#322F35] text-[14px] leading-normal xl:text-[0.8vw]">
                      {item?.pos}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="w-full px-5 mt-5 lg:px-0 lg:mx-auto lg:w-2/12 custnav transnav">
        <div className="relative flex items-center gap-4">
          <button className="text-center bg-transparent border border-[#5E2A29] cursor-pointer testimonial-swiper-button-prev hover:bg-[#5E2A29]">
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
          <div
            className="hidden testimonial-swiper-scrollbar swiper-scrollbar dark lg:block"
            style={{
              position: "relative",
              left: "auto",
              bottom: "auto",
              top: "auto",
            }}
          ></div>
          <button className="text-center bg-transparent border border-[#5E2A29] cursor-pointer testimonial-swiper-button-next hover:bg-[#5E2A29]">
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
  );
}

export default Testimonials;
