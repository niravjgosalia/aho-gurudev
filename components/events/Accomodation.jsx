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
const Accomodation = () => {
  const data = [
    {
      tab: "Onsite",
      data: [
        {
          img: "/images/events/accomodation/1.png",
          name: "Ashram Accomodation",
          desc: "The beginning of a milestone year, as we celebrate growth and gratitude <br/><br/>Check-in: Thu, Sep 25, Check-out: Thu, Sep 25",
          price: "$45 ",
        },
        {
          img: "/images/events/accomodation/1.png",
          name: "Ashram Accomodation",
          desc: "The beginning of a milestone year, as we celebrate growth and gratitude <br/><br/>Check-in: Thu, Sep 25, Check-out: Thu, Sep 25",
          price: "$45 ",
        },
        {
          img: "/images/events/accomodation/1.png",
          name: "Ashram Accomodation",
          desc: "The beginning of a milestone year, as we celebrate growth and gratitude <br/><br/>Check-in: Thu, Sep 25, Check-out: Thu, Sep 25",
          price: "$45 ",
        },
        {
          img: "/images/events/accomodation/1.png",
          name: "Ashram Accomodation",
          desc: "The beginning of a milestone year, as we celebrate growth and gratitude <br/><br/>Check-in: Thu, Sep 25, Check-out: Thu, Sep 25",
          price: "$45 ",
        },
      ],
    },
    {
      tab: "External Hotels",
      data: [
        {
          img: "/images/events/accomodation/2.png",
          name: "Ashram Accomodation",
          desc: "The beginning of a milestone year, as we celebrate growth and gratitude <br/><br/>Check-in: Thu, Sep 25, Check-out: Thu, Sep 25",
          price: "$45 ",
        },
        {
          img: "/images/events/accomodation/2.png",
          name: "Ashram Accomodation",
          desc: "The beginning of a milestone year, as we celebrate growth and gratitude <br/><br/>Check-in: Thu, Sep 25, Check-out: Thu, Sep 25",
          price: "$45 ",
        },
        {
          img: "/images/events/accomodation/2.png",
          name: "Ashram Accomodation",
          desc: "The beginning of a milestone year, as we celebrate growth and gratitude <br/><br/>Check-in: Thu, Sep 25, Check-out: Thu, Sep 25",
          price: "$45 ",
        },
      ],
    },
  ];
  const [activeTab, setActiveTab] = useState(data[0].tab);
  const activeTabData = data.find((tab) => tab.tab === activeTab);

  return (
    <section className=" containerx containery">
      <h6 className=" heading text-primary seasons">Accomodation</h6>
      <div className="w-full my-6 md:my-6 lg:my-[1.2vw] pb-[1vw] flex gap-5 md:gap-[2vw] text-[#5E2A29] font-medium relative overflow-x-auto whitespace-nowrap scrollbar-hide">
        {data.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(item.tab)}
            className={`relative pb-1 text-[16px] lg:text-[1vw] transition-all duration-300 shrink-0 ${
              activeTab === item.tab ? "opacity-100" : "opacity-40"
            }`}
          >
            {item.tab}

            {activeTab === item.tab && (
              <motion.div
                layoutId="activeTabUnderline"
                className="absolute left-0 bottom-0 h-[2px] w-full bg-[#5E2A29]"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
          </button>
        ))}
      </div>
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
            nextEl: ".accomodation-swiper-button-next",
            prevEl: ".accomodation-swiper-button-prev",
          }}
          scrollbar={{
            el: ".accomodation-swiper-scrollbar",
            draggable: true,
            hide: false,
            dragSize: "auto",
            snapOnRelease: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
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
          {activeTabData?.data?.map((item, i) => (
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
                  <div className=" flex justify-between items-center mt-4">
                    <div className=" content-sm">
                      <p>Price</p>
                      <p>
                        <span className=" text-primary font-bold">
                          {item?.price}
                        </span>
                        /Night
                      </p>
                    </div>
                    <div className=" btnwrap ">
                      <button className="flatbtn w-full">Book Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-full px-5 mt-5 lg:px-0 lg:mx-auto lg:w-2/12 custnav transnav">
          <div className="relative flex lg:justify-end items-center gap-4">
            <LeftButton name={"accomodation-swiper-button-prev"} />
            <div
              className="hidden accomodation-swiper-scrollbar swiper-scrollbar dark lg:block"
              style={{
                position: "relative",
                left: "auto",
                bottom: "auto",
                top: "auto",
              }}
            ></div>
            <RightButton name={"accomodation-swiper-button-next"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accomodation;
