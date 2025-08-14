import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const data = [
  {
    title: "Oct 12th",
    desc: "Shibir with Pujya Gurudevshri Lorem Ipsum",
    img: "/images/event1.png",
  },
  {
    title: "Oct 12th",
    desc: "Shibir with Pujya Gurudevshri Lorem Ipsum",
    img: "/images/event1.png",
  },
  {
    title: "Oct 12th",
    desc: "Shibir with Pujya Gurudevshri Lorem Ipsum",
    img: "/images/event1.png",
  },
  {
    title: "Oct 12th",
    desc: "Shibir with Pujya Gurudevshri Lorem Ipsum",
    img: "/images/event1.png",
  },
];

function EventsHighlight() {
  return (
    <div className ='w-full h-full'>
      <div className="relative w-[30vw] max-md:w-[13rem] max-lg:w-[25rem] ml-auto">
        <Swiper
          modules={[Autoplay, Navigation, Scrollbar]}
          slidesPerView={1}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 22 },
            767: { slidesPerView: 1, spaceBetween: 22 },
            1199: { slidesPerView: 1.4, spaceBetween: 22 },
            1300: { slidesPerView: 1.4, spaceBetween: 22 },
          }}
          loop={true}
          navigation={{
            nextEl: ".cust-swiper-button-next",
            prevEl: ".cust-swiper-button-prev",
          }}
          scrollbar={{
            el: ".swiper-scrollbar",
            draggable: true,
            hide: false,
            dragSize: "auto",
            snapOnRelease: true,
          }}
          autoplay={{ delay: 2500 }}
          spaceBetween={15}
          speed={1200}
          className=""
        >
          {data &&
            data.map((item, index) => (
              <SwiperSlide key={`event_${index}`} className="custom-slide">
                <div className="relative bg-white p-3 md:p-[0.8vw]">
                  <div className="eventimg">
                    <Image
                      src={item.img}
                      width={377}
                      height={154}
                      style={{ objectFit: "cover" }}
                      className="w-full h-auto img-fluid"
                      alt="bgImage"
                    />
                  </div>

                  <div className="eventcontent mt-3 xl:mt-[1vw]">
                    <div className="flex justify-between gap-1 md:gap-[0.7vw]">
                      <h4 className="title text-md md:text-lg xl:text-[1.1vw] seasons text-[#5E2A29]">
                        {item.title}
                      </h4>
                      <div className="playbtn">
                        <svg
                          width={32}
                          height={32}
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[25px] h-[25px] md:w-[1.667vw] md:h-[1.667vw]"
                        >
                          <rect
                            x={0.5}
                            y={0.5}
                            width={31}
                            height={31}
                            rx={15.5}
                            fill="white"
                          />
                          <rect
                            x={0.5}
                            y={0.5}
                            width={31}
                            height={31}
                            rx={15.5}
                            stroke="#322F35"
                          />
                          <path
                            d="M12.6665 21.3337V10.667L21.3332 16.0003L12.6665 21.3337Z"
                            fill="#322F35"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="sm-text text-[#322F35] mt-2">{item.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="w-9/12 mt-5 md:w-7/12 custnav lightnav">
          <div className="flex items-center gap-3">
            <button className="text-center bg-white cursor-pointer cust-swiper-button-prev">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[24px] h-[24px] p-1 md:w-[2.083vw] md:h-[2.083vw] md:p-[0.4vw]"
              >
                <path
                  d="M18.4023 11.625H4.83984"
                  stroke="#322F35"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.6211 18.4062L4.83984 11.625L11.6211 4.84375"
                  stroke="#322F35"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className="swiper-scrollbar"
              style={{ position: "relative", bottom: "auto", top: "auto" }}
            ></div>
            <button className="text-center bg-white cursor-pointer cust-swiper-button-next">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[24px] h-[24px] p-1 md:w-[2.083vw] md:h-[2.083vw] md:p-[0.4vw]"
              >
                <path
                  d="M5.59766 11.625H19.1602"
                  stroke="#322F35"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.3789 18.4062L19.1602 11.625L12.3789 4.84375"
                  stroke="#322F35"
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
  );
}

export default EventsHighlight;
