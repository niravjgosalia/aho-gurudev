import React from "react";
import Button from "../layout/Button";

const ContactForm = () => {
  return (
    <section className=" containerx containery">
      <div className=" bg-white containerx containery lg:flex justify-between items-start">
        <div className=" lg:w-[28.135vw] max-lg:mb-4">
          <h6 className=" heading text-primary seasons">Contact Us</h6>
          <p className=" content-sm">
            Find the details of the event in the detailed brochure
          </p>
        </div>
        <form
          action=""
          className=" lg:w-[45.156vw] flex flex-wrap justify-between gap-y-6 lg:gap-y-[1.5vw]"
        >
          <div className=" w-full lg:w-[49%] relative">
            <input className=" border border-[#5E2A29] w-full p-2 lg:p-[0.45vw] outline-none" />
            <span className=" text-sm absolute bg-white top-[-8px] px-1 left-4">
              Full Name
            </span>
          </div>
          <div className=" w-full lg:w-[49%] relative">
            <input className=" border border-[#5E2A29] w-full p-2 lg:p-[0.45vw] outline-none" />
            <span className=" text-sm absolute bg-white top-[-8px] px-1 left-4">
              Email ID
            </span>
          </div>
          <div className=" w-full lg:w-[49%] relative">
            <input className=" border border-[#5E2A29] w-full p-2 lg:p-[0.45vw] outline-none" />
            <span className=" text-sm absolute bg-white top-[-8px] px-1 left-4">
              Ph Number
            </span>
          </div>
          <div className=" w-full lg:w-[49%] relative">
            <input className=" border border-[#5E2A29] w-full p-2 lg:p-[0.45vw] outline-none" />
            <span className=" text-sm absolute bg-white top-[-8px] px-1 left-4">
              What is your query?
            </span>
          </div>
          <div className=" w-full relative">
            <input className=" border border-[#5E2A29] w-full p-2 lg:p-[0.45vw] outline-none" />
            <span className=" text-sm absolute bg-white top-[-8px] px-1 left-4">
              When can we contact you ?
            </span>
          </div>
          <div className=" w-full relative">
            <textarea
              rows={7}
              className=" border border-[#5E2A29] w-full p-2 lg:p-[0.45vw] outline-none"
            />
            <span className=" text-sm absolute bg-white top-[-8px] px-1 left-4">
              Write about your query
            </span>
          </div>
          <div className=" lg:hidden w-full">
            <Button name="Submit" fill width={true} />
          </div>
          <div className=" max-lg:hidden lg:flex justify-end w-full">
            <Button name="Submit" fill />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
