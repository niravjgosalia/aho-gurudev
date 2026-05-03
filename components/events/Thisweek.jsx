import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const events = [
  { title: "Festival of Bliss", img: "/images/events/event1.jpg" },
  { title: "Spiritual Journey", img: "/images/events/event2.jpg" },
  { title: "Global Satsang", img: "/images/events/event3.jpg" },
];

function Thisweek() {
  return (
    <>
      <div className="items-center justify-between lg:flex">
        <div className="relative lg:w-[84vw] lg:h-[375px] xl:h-[33.229vw]">
          <Swiper
            modules={[Autoplay, Navigation, Mousewheel, Pagination]}
            slidesPerView={1}
            loop={true}
            spaceBetween={20}
            direction="horizontal"
            speed={1200}
            navigation={{
              nextEl: ".event-swiper-button-next",
              prevEl: ".event-swiper-button-prev",
            }}
            pagination={{
              el: ".eventcal-pagination",
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
                  <div
                    className="mb-[1vw] p-[10px] lg:p-[1vw] w-full justify-content-center flex flex-col-reverse items-center lg:flex-row eventcard"
                    style={{ backgroundColor: "var(--color-burgundy)" }}
                  >
                    {/* Left Content */}
                    <div className="flex-1 p-3 lg:ps-[4vw] lg:p-[0.9vw] z-[2]">
                      {/* Title */}
                      <h2
                        className="text-[18px] font-bold md:text-2xl lg:text-[2.083vw] mb-2 md:mb-[1vw] seasons"
                        style={{ color: "var(--color-cream)" }}
                      >
                        {item?.title}
                      </h2>
                      <p
                        className="text-[14px] leading-normal lg:text-[1vw]"
                        style={{ color: "var(--color-cream)", opacity: 0.65 }}
                      >
                        Special launches and heartfelt offerings to enter a
                        milestone year.
                      </p>

                      {/* Date & Location */}
                      <div className="flex flex-wrap items-center gap-2 md:gap-[1.4vw] my-4 md:my-[1vw] text-sm">
                        <div
                          className="flex items-center gap-2 pr-4 md:border-r last:border-none"
                          style={{ borderColor: "var(--color-gold)" }}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="var(--color-gold)"
                            strokeWidth="1.5"
                          >
                            <rect
                              x="3"
                              y="4"
                              width="18"
                              height="18"
                              rx="2"
                              ry="2"
                            />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          <span
                            className="text-[13px] md:text-[16px] lg:text-[1vw]"
                            style={{ color: "var(--color-cream)" }}
                          >
                            Fri, Sep 26 to Sun, Sep 28
                          </span>
                        </div>

                        <div
                          className="flex items-center gap-2 pr-4 border-r last:border-none"
                          style={{ borderColor: "var(--color-gold)" }}
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="var(--color-gold)"
                            strokeWidth="1.5"
                          >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          <span
                            className="text-[13px] md:text-[16px] lg:text-[1vw]"
                            style={{ color: "var(--color-cream)" }}
                          >
                            Dharampur
                          </span>
                        </div>
                      </div>

                      {/* Schedule */}
                      <div className="hidden lg:block">
                        <h3
                          className="mt-6 md:mt-[1.1vw] font-medium text-[20px] lg:text-[1.2vw]"
                          style={{ color: "var(--color-gold)" }}
                        >
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
                              className="p-4 lg:p-[0.8vw] flex flex-col justify-between transition flex-1 min-w-[250px] lg:min-w-0"
                              style={{
                                border: "1px solid rgba(201, 162, 87, 0.3)",
                              }}
                            >
                              <div>
                                <div className="flex items-center justify-between">
                                  <span
                                    className="text-[20px] mb-[10px] lg:mb-[0.5vw] lg:text-[1vw] font-medium"
                                    style={{ color: "var(--color-gold)" }}
                                  >
                                    {item.day}
                                  </span>
                                  <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 17 17"
                                    fill="none"
                                  >
                                    <path
                                      d="M14.0472 8.57318L9.45105 13.1694C9.38072 13.2397 9.28534 13.2792 9.18588 13.2792C9.08643 13.2792 8.99104 13.2397 8.92072 13.1694C8.85039 13.099 8.81088 13.0037 8.81088 12.9042C8.81088 12.8047 8.85039 12.7094 8.92072 12.639L12.877 8.68278L2.46837 8.68278C2.37126 8.67935 2.27928 8.63836 2.2118 8.56846C2.14431 8.49855 2.1066 8.40518 2.1066 8.30801C2.1066 8.21084 2.14431 8.11747 2.2118 8.04756C2.27928 7.97766 2.37126 7.93667 2.46837 7.93324L12.877 7.93324L8.92072 3.97698C8.85039 3.90666 8.81088 3.81127 8.81088 3.71182C8.81088 3.61236 8.85039 3.51698 8.92072 3.44665C8.99104 3.37633 9.08643 3.33682 9.18588 3.33682C9.28534 3.33682 9.38072 3.37633 9.45105 3.44665L14.0472 8.04285C14.1176 8.11317 14.1571 8.20856 14.1571 8.30801C14.1571 8.40747 14.1176 8.50285 14.0472 8.57318Z"
                                      fill="var(--color-gold)"
                                      stroke="var(--color-gold)"
                                      strokeWidth="0.6"
                                    />
                                  </svg>
                                </div>
                                <ul
                                  className="pl-5 md:pl-[1vw] text-sm md:text-[0.7vw] list-disc [&>li]:pb-2 [&>li:last-child]:pb-0"
                                  style={{
                                    color: "var(--color-cream)",
                                    opacity: 0.7,
                                  }}
                                >
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
                          <h3
                            className="md:mt-[1.1vw] font-normal lg:font-medium text-[14px] lg:text-[1.2vw]"
                            style={{ color: "var(--color-gold)" }}
                          >
                            Guests
                          </h3>
                          <div className="flex items-center gap-2 mt-2">
                            {[
                              "/images/guest1.png",
                              "/images/guest2.png",
                              "/images/guest3.png",
                            ].map((src, i) => (
                              <div
                                key={i}
                                className={`relative ${
                                  i > 0 ? "z-" + (i * 10 + 10) + " -ml-4" : "z-10"
                                }`}
                              >
                                <img
                                  src={src}
                                  alt="Guest"
                                  className="w-[32px] h-[32px] lg:w-[2.9vw] lg:h-[2.9vw]"
                                  style={{ width: "100%", height: "auto", maxWidth: "100%" }}
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* Button */}
                        <div className="mt-6 md:mt-[1.1vw] btnwrap">
                          <button className="btn-brand btn-brand-filled" style={{ padding: "10px 24px" }}>
                            Register
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative flex-1 z-[2]">
                      <img
                        src={item?.img}
                        alt="Festival Event"
                        className="object-cover h-auto max-w-full lg:w-full"
                        style={{ width: "100%", height: "auto", maxWidth: "100%" }}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="hidden lg:block custnav transnav">
          <div className="flex flex-col items-center gap-4">
            <button
              className="text-center bg-transparent cursor-pointer event-swiper-button-prev rotate-90"
              style={{ border: "1px solid var(--color-gold)" }}
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                className="w-[24px] h-[24px] p-1 md:w-[2.083vw] md:h-[2.083vw] md:p-[0.4vw]"
              >
                <path
                  d="M18.4023 11.625H4.83984"
                  stroke="var(--color-gold)"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.6211 18.4062L4.83984 11.625L11.6211 4.84375"
                  stroke="var(--color-gold)"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              className="text-center bg-transparent cursor-pointer event-swiper-button-next rotate-90"
              style={{ border: "1px solid var(--color-gold)" }}
            >
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                className="w-[24px] h-[24px] p-1 md:w-[2.083vw] md:h-[2.083vw] md:p-[0.4vw]"
              >
                <path
                  d="M5.59766 11.625H19.1602"
                  stroke="var(--color-gold)"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.3789 18.4062L19.1602 11.625L12.3789 4.84375"
                  stroke="var(--color-gold)"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="block pb-1 lg:hidden">
          <div className="flex justify-center gap-3 mt-4 eventcal-pagination custom-pagination lightpagination"></div>
        </div>
      </div>
    </>
  );
}

export default Thisweek;
