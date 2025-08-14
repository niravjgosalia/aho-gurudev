import MobAnimationFrame1 from "@/components/home/MobAnimationFrame1";
import WebAnimationFrame1 from "@/components/home/WebAnimationFrame1";
import HeaderMob from "@/components/layout/HeaderMob";
import Header from "@/components/layout/HeaderWeb";
import React from "react";

const index = () => {
  return (
    <>
      <div className=" max-lg:hidde">
        <Header />
        <div className=" h-[50vh]" />
        <WebAnimationFrame1 />
      </div>
      {/* <div className=" lg:hidden">
        <HeaderMob />
        <MobAnimationFrame1 />
      </div> */}
    </>
  );
};

export default index;
