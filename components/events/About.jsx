import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className=" containerx containery">
      <h6 className=" heading text-primary seasons">Festival of bliss</h6>
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
        <div className="flex items-center gap-2 mt-2">
          {[
            "/images/guest1.png",
            "/images/guest1.png",
            "/images/guest1.png",
          ].map((src, i) => (
            <div
              key={i}
              className={`relative ${
                i === 0 ? "z-10" : i === 1 ? "z-20 -ml-4" : "z-30 -ml-4"
              }`}
            >
              <Image
                src={src}
                alt="Guest"
                width={56}
                height={56}
                className="size-[32px] lg:size-[1.667vw]"
              />
            </div>
          ))}
          <span className="text-[13px] md:text-[16px] lg:text-[1vw]">
            +200 are going
          </span>
        </div>
      </div>
      <h6 className=" heading text-primary seasons">About</h6>
      <p className=" content-sm">
        The beginning of a milestone year, as we celebrate growth and gratitude,
        reminds us how far we have come and how much more there is to look
        forward to. Every achievement, big or small, has been a step toward this
        moment, built upon dedication, resilience, and the support of those
        around us. This journey has not only shaped who we are today but also
        laid a strong foundation for the future we envision.
        <br />
        As we pause to reflect, we honor the challenges that tested us, the
        victories that inspired us, and the lessons that strengthened us. Each
        milestone has been a reminder that progress is rarely instant but always
        rewarding when fueled by persistence and passion. Looking ahead, this
        year stands as a symbol of new opportunities and fresh aspirations. With
        renewed energy and a collective spirit, we step forward with confidence,
        ready to embrace what lies ahead. Together, we celebrate not just what
        we have accomplished, but the endless possibilities that await us on
        this continued journey of growth.
      </p>
    </section>
  );
};

export default About;
