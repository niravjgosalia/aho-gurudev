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
const Influnce = () => {
  const data = [
    {
      img: "/images/events/influence.png",
      desc: "The endeavour by Shri Rakeshji to present the essence of atmasiddhi shastra ina lucid manner through its commentary in english is athoughtful gesture, aimed at the spiritual welfare of the youth",
      name: "Sri Sri Ravi Shankar",
      title: "The Art of Living",
    },
    {
      img: "/images/events/influence.png",
      desc: "The endeavour by Shri Rakeshji to present the essence of atmasiddhi shastra ina lucid manner through its commentary in english is athoughtful gesture, aimed at the spiritual welfare of the youth",
      name: "Sri Sri Ravi Shankar",
      title: "The Art of Living",
    },
    {
      img: "/images/events/influence.png",
      desc: "The endeavour by Shri Rakeshji to present the essence of atmasiddhi shastra ina lucid manner through its commentary in english is athoughtful gesture, aimed at the spiritual welfare of the youth",
      name: "Sri Sri Ravi Shankar",
      title: "The Art of Living",
    },
    {
      img: "/images/events/influence.png",
      desc: "The endeavour by Shri Rakeshji to present the essence of atmasiddhi shastra ina lucid manner through its commentary in english is athoughtful gesture, aimed at the spiritual welfare of the youth",
      name: "Sri Sri Ravi Shankar",
      title: "The Art of Living",
    },
  ];
  return (
    <section className=" containerx containery lg:!pr-0">
      <h6 className=" heading text-primary seasons lg:mb-[1.5vw] mb-2">
        Voices of Influence
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
            nextEl: ".voice-swiper-button-next",
            prevEl: ".voice-swiper-button-prev",
          }}
          scrollbar={{
            el: ".voice-swiper-scrollbar",
            draggable: true,
            hide: false,
            dragSize: "auto",
            snapOnRelease: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 0,
              centeredSlides: false,
            },
            593: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 1.2,
              spaceBetween: 0,
              //   centeredSlides: true,
            },
          }}
          className="influence"
        >
          {data?.map((item, i) => (
            <SwiperSlide key={`schedule-${i}`}>
              <div className="flex max-md:flex-col justify-center gap-5 md:gap-10 lg:gap-[2.75vw] items-center">
                <Image
                  width={721}
                  height={530}
                  src={item?.img}
                  alt={item?.name}
                  className=" lg:w-[37.552vw] md:w-1/2 object-cover"
                />
                <div className=" lg:w-[38.49vw]">
                  <h6 className=" content lg:!text-[1.667vw] font-bold text-primary seasons">
                    "{item?.desc}"
                  </h6>

                  <p className=" content">{item?.name}</p>
                  <p className=" content-sm">{item?.title}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className=" relative">
          <div className="w-full px-5 mt-5 lg:px-0 lg:mx-auto lg:w-2/12 custnav transnav lg:absolute right-[4vw]">
            <div className="relative flex lg:justify-end items-center gap-4">
              <LeftButton name={"voice-swiper-button-prev"} />
              <div
                className="hidden voice-swiper-scrollbar swiper-scrollbar dark lg:block"
                style={{
                  position: "relative",
                  left: "auto",
                  bottom: "auto",
                  top: "auto",
                }}
              ></div>
              <RightButton name={"voice-swiper-button-next"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Influnce;
