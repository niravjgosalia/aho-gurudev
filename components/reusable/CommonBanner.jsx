import Image from "next/image";
import React from "react";

const CommonBanner = () => {
  return (
    <div>
      <div className=" pt-[4.5vw]  max-lg:hidden">
        <Image
          height={1080}
          width={1920}
          src={"/images/banner/event.png"}
          alt="banner"
          className=" w-full"
        />
      </div>
      <div className="pt-[4.5rem] lg:hidden">
        <Image
          height={1080}
          width={1920}
          src={"/images/banner/event-mob.png"}
          alt="banner"
          className=" w-full"
        />
      </div>
    </div>
  );
};

export default CommonBanner;
