import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const bannerdata = [
  { img: "/images/banner.webp", title: "aho gurudev" },
  // { img: "/images/historic-celeberation2.png", title: " aho <br /> gurudev 2" },
  // { img: "/images/banner.webp", title: " aho <br /> gurudev 3" },
];

function HomeBanner({ startAnimation }) {
  let refs = useRef([]);

  const container = useRef(null);
  const splitWords = (phrase) => {
    let body = [];

    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);

      body.push(
        <span className="block word" key={word + "_" + i}>
          {letters}
        </span>
      );
    });

    return body;
  };

  const splitLetters = (word) => {
    let letters = [];

    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          className="char"
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>
      );
    });

    return letters;
  };

  useEffect(() => {
  if (refs.current.length > 0 && startAnimation) {
    gsap.set(refs.current, { clipPath: "inset(0 100% 0 0)" }); // hidden from right

    gsap.to(refs.current, {
      clipPath: "inset(0 0% 0 0)", // fully visible
      duration: 1,
      ease: "power3.out",
      stagger: 0.05,
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
      },
    });
  }
}, [startAnimation]);


  return (
    <div
      className="relative overflow-hidden md:h-screen homebanner"
      ref={container}
    >
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        slidesPerView={1}
        loop={true}
        spaceBetween={0}
        effect="fade"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets",
          renderBullet: (index, className) => `
                <span class="${className}">
                  <i></i>
                  <b></b>
                </span>
              `,
        }}
        speed={1200}
        className=""
      >
        {bannerdata &&
          bannerdata.map((item, index) => (
            <SwiperSlide key={`homebanner_${index}`} className="home-slide">
              <div className="relative bannerimg">
                <Image
                  src={item.img}
                  width={1920}
                  height={1052}
                  style={{ objectFit: "cover" }}
                  className="w-full h-auto max-w-full"
                  alt="home banner"
                />
                <h3 className="bannertitle tracking-[-0.3vw] letter w-[30.208vw] right-[7vw] leading-[7vw] z-[9] bottom-[40%] text-white absolute capitalize text-[7.708vw]">
                  {splitWords(item?.title)}
                </h3>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="swiper-pagination"></div>
    </div>
  );
}

export default HomeBanner;
