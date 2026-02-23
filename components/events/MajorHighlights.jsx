import Image from "next/image";
import React from "react";

const MajorHighlights = () => {
  return (
    <section className=" containerx containery">
      <h6 className=" heading text-primary seasons">Major Highlights</h6>
      <div className=" mt-[4vw]  max-lg:flex max-lg:gap-2">
        <div className=" max-lg:flex-col max-lg:gap-2 justify-center flex lg:justify-between items-center">
          <div>
            <Image
              width={871}
              height={435}
              src={"/images/about/highlights/1.png"}
              className=" lg:w-[45.365vw] lg:h-[22.656vw]"
            />
          </div>
          <div>
            <Image
              width={871}
              height={435}
              src={"/images/about/highlights/2.png"}
              className=" lg:w-[45.365vw] lg:h-[22.656vw]"
            />
          </div>
        </div>
        <div className="max-lg:flex-col max-lg:gap-2 flex justify-between items-center mt-[0.75vw]">
          <div>
            <Image
              width={574}
              height={283}
              src={"/images/about/highlights/3.png"}
              className=" lg:w-[29.896vw] lg:h-[14.74vw]"
            />
          </div>
          <div>
            <Image
              width={574}
              height={283}
              src={"/images/about/highlights/4.png"}
              className=" lg:w-[29.896vw] lg:h-[14.74vw]"
            />
          </div>
          <div className=" relative flex justify-center items-center">
            <Image
              width={574}
              height={283}
              src={"/images/about/highlights/5.png"}
              className=" lg:w-[29.896vw] lg:h-[14.74vw] opacity-35"
            />
            <p className=" absolute text-primary heading font-light">+15</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MajorHighlights;
