import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Roundeffect from "../layout/Roundeffect";

const events = [
  { title: "Festival of Bliss", img: "/images/events/event1.jpg" },
  { title: "Spiritual Journey", img: "/images/events/event1.jpg" },
  { title: "Global Satsang", img: "/images/events/event1.jpg" },
];

function Thisweek() {
  return (
    <>
      <div className="items-center justify-between lg:flex">
        <div className="relative lg:w-[84vw] lg:h-[375px] ] xl:h-[33.229vw]">
          <Swiper
            modules={[Autoplay, Navigation, Mousewheel, Pagination]}
            slidesPerView={1}
            loop={true}
            // mousewheel={true}
            spaceBetween={20}
            direction="horizontal"
            // autoplay={{
            //   delay: 5000,
            //   disableOnInteraction: false,
            // }}
            speed={1200}
            navigation={{
              nextEl: ".event-swiper-button-next",
              prevEl: ".event-swiper-button-prev",
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
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
                direction: "horizontal",
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
                direction: "horizontal",
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 20,
                direction: "vertical",
              },
            }}
            className="h-full"
          >
            {events?.map((item, i) => {
              return (
                <SwiperSlide key={`event${i}`} className="relative">
                  <div className="mb-[1vw] p-[10px] lg:p-[1vw] w-full bg-white justify-content-center flex flex-col-reverse items-center lg:flex-row eventcard">
                    
                    {/* Left Content */}
                    <div className="flex-1 p-3 lg:ps-[4vw] lg:p-[0.9vw] z-[2]">
                      {/* Title */}
                      <h2 className="text-[18px] font-bold md:text-2xl lg:text-[2.083vw] mb-2 md:mb-[1vw] seasons text-[#5E2A29]">
                        {item?.title}
                      </h2>
                      <p className="text-gray-600 text-[14px] leading-normal lg:text-[1vw]">
                        Special launches and heartfelt offerings to enter a
                        milestone year.
                      </p>

                      {/* Date & Location */}
                      <div className="flex flex-wrap items-center gap-2 md:gap-[1.4vw] my-4 md:my-[1vw] text-sm text-[#322F35]">
                        <div className="flex items-center gap-2 pr-4 md:border-r border-[#E2BE86] last:border-none">
                          <div className="iconwrap lg:w-[1.2vw] lg:h-[1.2vw] w-[16px] h-[16px]">
                            <Image
                              src="/icons/calender.png"
                              alt="icons"
                              width={24}
                              height={24}
                              className="w-full h-auto max-w-full"
                            />
                          </div>
                          <span className="text-[13px] md:text-[16px] lg:text-[1vw]">
                            Fri, Sep 26 to Sun, Sep 28
                          </span>
                        </div>

                        <div className="flex items-center gap-2 pr-4 border-r border-[#E2BE86] last:border-none">
                          <div className="iconwrap lg:w-[1.2vw] lg:h-[1.2vw] w-[16px] h-[16px]">
                            <Image
                              src="/icons/loc.png"
                              alt="icons"
                              width={25}
                              height={24}
                              className="w-full h-auto max-w-full"
                            />
                          </div>
                          <span className="text-[13px] md:text-[16px] lg:text-[1vw]">
                            Dharampur
                          </span>
                        </div>
                      </div>

                      {/* Schedule */}
                      <div className="hidden lg:block">
                        <h3 className="mt-6 md:mt-[1.1vw] font-medium text-[20px] lg:text-[1.2vw] text-[#5E2A29]">
                          Schedule
                        </h3>
                        <div className="flex gap-3 lg:gap-[0.6vw] mt-3 md:mt-[0.5] flex-wrap lg:flex-nowrap">
                          {[
                            {
                              day: "Day 1",
                              events: [
                                "Pujya Gurudevshri's 60th Year Flag-Off",
                                "Lakeside Lotus Veneration",
                              ],
                            },
                            {
                              day: "Day 2",
                              events: [
                                "Discourse by Pujya Gurudevshri",
                                "20 Years of Grace in the United States",
                              ],
                            },
                            {
                              day: "Day 3",
                              events: [
                                "Discourse by Pujya Gurudevshri",
                                "Atmarpit Diksha Ceremony",
                              ],
                            },
                          ].map((item, i) => (
                            <div
                              key={i}
                              className="border border-[#E36226] p-4 lg:p-[0.8vw] flex flex-col justify-between hover:bg-[#fff7f5] transition flex-1 min-w-[250px] lg:min-w-0"
                            >
                              <div>
                                <div className="flex items-center justify-between">
                                  <span className="text-[20px] mb-[10px] lg:mb-[0.5vw] lg:text-[1vw] font-medium text-[#5E2A29]">
                                    {item.day}
                                  </span>
                                  <span className="text-[#E36226] font-bold">
                                    <svg
                                      width="17"
                                      height="17"
                                      viewBox="0 0 17 17"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M14.0472 8.57318L9.45105 13.1694C9.38072 13.2397 9.28534 13.2792 9.18588 13.2792C9.08643 13.2792 8.99104 13.2397 8.92072 13.1694C8.85039 13.099 8.81088 13.0037 8.81088 12.9042C8.81088 12.8047 8.85039 12.7094 8.92072 12.639L12.877 8.68278L2.46837 8.68278C2.37126 8.67935 2.27928 8.63836 2.2118 8.56846C2.14431 8.49855 2.1066 8.40518 2.1066 8.30801C2.1066 8.21084 2.14431 8.11747 2.2118 8.04756C2.27928 7.97766 2.37126 7.93667 2.46837 7.93324L12.877 7.93324L8.92072 3.97698C8.85039 3.90666 8.81088 3.81127 8.81088 3.71182C8.81088 3.61236 8.85039 3.51698 8.92072 3.44665C8.99104 3.37633 9.08643 3.33682 9.18588 3.33682C9.28534 3.33682 9.38072 3.37633 9.45105 3.44665L14.0472 8.04285C14.1176 8.11317 14.1571 8.20856 14.1571 8.30801C14.1571 8.40747 14.1176 8.50285 14.0472 8.57318Z"
                                        fill="#87412E"
                                        stroke="#87412E"
                                        strokeWidth="0.6"
                                      />
                                    </svg>
                                  </span>
                                </div>
                                <ul className="pl-5 md:pl-[1vw] text-sm md:text-[0.7vw]  text-gray-700 list-disc [&>li]:pb-2 [&>li:last-child]:pb-0">
                                  {item.events.map((e, idx) => (
                                    <li
                                      key={idx}
                                      className="text-[16px] leading-[1.6] lg:text-[0.8vw]"
                                    >
                                      {e}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Guests */}
                      <div className="flex flex-wrap items-end justify-between">
                        <div>
                          <h3 className="md:mt-[1.1vw] font-normal lg:font-medium text-[14px] lg:text-[1.2vw] text-[#5E2A29]">
                            Guests
                          </h3>
                          <div className="flex items-center gap-2 mt-2">
                            {[
                              "/images/guest1.png",
                              "/images/guest1.png",
                              "/images/guest1.png",
                            ].map((src, i) => (
                              <div
                                key={i}
                                className={`relative ${
                                  i === 0
                                    ? "z-10"
                                    : i === 1
                                    ? "z-20 -ml-4"
                                    : "z-30 -ml-4"
                                }`}
                              >
                                <Image
                                  src={src}
                                  alt="Guest"
                                  width={56}
                                  height={56}
                                  className="w-[32px] h-[32px] lg:w-[2.9vw] lg:h-[2.9vw]"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* Button */}
                        <div className="mt-6 md:mt-[1.1vw] btnwrap ">
                          <button className="flatbtn">Register</button>
                        </div>
                      </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative flex-1 z-[2]">
                      <Image
                        src="/images/events/event1.jpg"
                        alt="Festival Event"
                        //   fill
                        width={779}
                        height={598}
                        className="object-cover h-auto max-w-full lg:w-full"
                      />
                    </div>
                    
                    <div className="roundimg max-lg:-top-[15px] max-lg:left-0 max-lg:-scale-y-[1] absolute right-0 z-[3]">
                      <Roundeffect />
                    </div>
                    <div className="roundimg max-lg:-bottom-[13px] max-lg:right-0 absolute -scale-x-[1] left-0 z-[3]">
                      <Roundeffect />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="hidden lg:block custnav transnav">
          <div className="flex flex-col items-center gap-4">
            <button className="text-center bg-transparent border border-[#5E2A29] cursor-pointer event-swiper-button-prev hover:bg-[#5E2A29] rotate-90">
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

            <button className="text-center bg-transparent border border-[#5E2A29] cursor-pointer event-swiper-button-next hover:bg-[#5E2A29] rotate-90">
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
        <div className="block pb-1 lg:hidden">
          <div className="flex justify-center gap-3 mt-4 custom-pagination"></div>
        </div>
      </div>
    </>
  );
}

export default Thisweek;
