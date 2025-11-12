import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const MenuModal = ({ showEnquireModal, onClose }) => {
  const data = [
    { title: "early years", id: "early-year" },
    { title: "Friend & Guide", id: "friend" },
    { title: "Voice that Awakens", id: "friend" },
    { title: "Unravelling the Path", id: "friend" },
    { title: "Divine Architect", id: "friend" },
    { title: "Love in Motion", id: "friend" },
  ];
  return (
    <div>
      {showEnquireModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center ">
          <div className="rounded-lg shadow-lg w-[90%] p-3 lg:w-[18vw] absolute bottom-10 lg:right-[7vw] lg:bottom-[6vw] bg-white">
            <div className=" absolute size-full z-[-1] " />
            <button onClick={onClose} className="absolute top-4 right-4">
              <Image
                width={30}
                height={30}
                src={"/icons/close.svg"}
                alt="close"
              />
            </button>
            <div className="mt-8">
              {data?.map((item, index) => (
                <div
                  key={index}
                  className=" border-b border-[#5E2A29] last:border-none my-4"
                >
                  <Link
                    onClick={onClose}
                    href={`#${item?.id}`}
                    className=" content capitalize text-[#5E2A29] cursor-pointer"
                  >
                    {item?.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuModal;
