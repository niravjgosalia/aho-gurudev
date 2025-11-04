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
    img: "/images/testimonials/2.jpg",
  },
  {
    comment:
      "I believe, we can understand this very well from the personality of Shrimad Rajchandraji that what we have missed out on",
    name: "Narendra Modi",
    pos: "Prime minister of india",
    img: "/images/testimonials/3.jpg",
  },
  {
    comment:
      "I believe, we can understand this very well from the personality of Shrimad Rajchandraji that what we have missed out on",
    name: "Narendra Modi",
    pos: "Prime minister of india",
    img: "/images/testimonials/4.jpg",
  },
  {
    comment:
      "I believe, we can understand this very well from the personality of Shrimad Rajchandraji that what we have missed out on",
    name: "Narendra Modi",
    pos: "Prime minister of india",
    img: "/images/testimonials/5.jpg",
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
    img: "/images/testimonials/2.jpg",
  },
  {
    comment:
      "I believe, we can understand this very well from the personality of Shrimad Rajchandraji that what we have missed out on",
    name: "Narendra Modi",
    pos: "Prime minister of india",
    img: "/images/testimonials/3.jpg",
  },
  {
    comment:
      "I believe, we can understand this very well from the personality of Shrimad Rajchandraji that what we have missed out on",
    name: "Narendra Modi",
    pos: "Prime minister of india",
    img: "/images/testimonials/4.jpg",
  },
  {
    comment:
      "I believe, we can understand this very well from the personality of Shrimad Rajchandraji that what we have missed out on",
    name: "Narendra Modi",
    pos: "Prime minister of india",
    img: "/images/testimonials/5.jpg",
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
  );
}

export default Testimonials;
