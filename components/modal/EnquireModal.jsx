import Image from "next/image";
import React, { useEffect } from "react";
import TitleSm from "../layout/TitleSm";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { cleanImage } from "../services/imageHandling";
import axios from "axios";

const EnquireModal = ({
  showEnquireModal,
  onClose,
  brochure,
  srd,
  source,
  type,
  projects,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const router = useRouter();
  const { slug } = router.query;

  const onSubmit = async (data) => {
    console.log(data, "data");
  };

  return (
    <div>
      {showEnquireModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 glass">
          <div className="rounded-lg shadow-lg w-[90%] lg:w-[34.792vw] relative border-[8px] border-white">
            <Image
              width={1052}
              height={620}
              src={"/images/home/1.png"}
              className="absolute size-full object-cover z-[-2]"
              alt="background"
            />
            <div className="glass bg-black bg-opacity-55 absolute size-full z-[-1]" />
            <button onClick={onClose} className="absolute top-4 right-4">
              <div className="relative ml-3">
                <Image
                  width={30}
                  height={30}
                  src={"/icons/close.svg"}
                  alt="close"
                />
              </div>
            </button>
            <div className="mt-8">
              {/* <TitleSm first={"Co-create"} second={"With Us"} gold={false} /> */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full lg:px-[2.969vw] p-5 lg:py-[2.708vw] flex flex-wrap gap-3 justify-between relative"
              >
                <div className="w-full">
                  <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="Your Name"
                    className="w-full p-2 lg:p-[0.75vw] bg-transparent border-[1.5px] border-white text-white outline-none"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="w-full ">
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email",
                      },
                    })}
                    placeholder="Email ID"
                    className="w-full  p-2 lg:p-[0.75vw] bg-transparent border-[1.5px] border-white text-white outline-none"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="w-full ">
                  <input
                    type="number"
                    {...register("phone", {
                      required: "phone no. is required",
                    })}
                    placeholder="Mob No."
                    className="w-full  p-2 lg:p-[0.75vw] bg-transparent border-[1.5px] border-white text-white outline-none"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <input
                  type="text"
                  {...register("hiddenField")}
                  className="border-none outline-none bg-transparent size-0 absolute z-[-10]"
                />

                <div className="mx-auto text-center w-full">
                  <button type="submit" className="btn-white group glass mt-5">
                    <span className="content text-white group-hover:text-black transition-colors duration-300">
                      Submit
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnquireModal;
