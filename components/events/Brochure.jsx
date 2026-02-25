import React from "react";
import Button from "../layout/Button";
import Image from "next/image";
import Link from "next/link";

const Brochure = () => {
  return (
    <section className=" containerx containery">
      <div className=" flex justify-center items-center lg:items-stretch lg:gap-[1vw] max-lg:hidden">
        <div className=" bg-white lg:w-1/2 flex justify-center items-center flex-col lg:py-[2vw]">
          <h6 className=" text-[18px] lg:text-[1.458vw] text-primary seasons lg:w-[20vw] text-center">
            “ Compassion in action is the hallmark of a seeker ”
          </h6>
          <div className="btnwrapper ctabtns flex gap-4 lg:gap-[1vw]">
            <Button name="Donate" fill />
            <Button name="Volunteer" />
          </div>
        </div>
        <div className=" bg-white lg:w-1/2 flex justify-center items-center lg:gap-[1vw] lg:p-[2vw]">
          <Image width={330} height={195} src={"/images/events/brochure.png"} />
          <div className=" text-start">
            <h6 className=" text-[18px] lg:text-[1.458vw] text-primary seasons lg:w-[20vw] ">
              Download Event Details
            </h6>
            <p className=" content-sm">
              Find the details of the event in the detailed brochure
            </p>
            <Link href={"#"} className=" flex gap-2">
              <p className=" w-fit content-sm border-b font-bold text-primary border-[#5E2A29]">
                Download Brochure
              </p>
              <Image width={28} height={28} src={"/icons/download.svg"} />
            </Link>
          </div>
        </div>
      </div>
      <div className=" lg:hidden">
        <div className="inline-block bg-white ctawrapper mx-auto p-[20px] md:p-[20px] lg:p-[1.563vw]">
          <div className="flex items-center flex-wrap gap-4 lg:gap-[3.49vw]">
            <h3 className="text-[18px] lg:text-[1.458vw] seasons text-[#5E2A29] font-[700]">
              “ Compassion in action is the hallmark of a seeker ”
            </h3>
            <div className="btnwrapper ctabtns flex gap-4 lg:gap-[1vw]">
              <Button name="Donate" fill />
              <Button name="Volunteer" />
            </div>
          </div>
        </div>
        <div>
          <h6 className="text-primary seasons heading-sm mt-10">
            Download Event Details
          </h6>
          <p className=" content-sm">
            Find the details of the event in the detailed brochure
          </p>
          <div className=" bg-white p-3 mt-2">
            <Image
              width={330}
              height={195}
              src={"/images/events/brochure.png"}
            />
            <Link href={"#"} className=" flex justify-end gap-2 mt-2">
              <p className=" w-fit content-sm border-b text-primary border-[#5E2A29]">
                Download Brochure
              </p>
              <Image width={28} height={28} src={"/icons/download.svg"} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brochure;
