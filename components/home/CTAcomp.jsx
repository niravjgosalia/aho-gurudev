import React from "react";
import Button from "../layout/Button";

function CTAcomp() {
  return (
    <>
      <div className="my-[50px] lg:my-[4vw]">
        <div className="relative w-full mx-auto md:text-center containerx">
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
        </div>
      </div>
    </>
  );
}

export default CTAcomp;
