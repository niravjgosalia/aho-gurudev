import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const HeaderWeb = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const links = [
    {
      name: "Events",
      link: "#",
    },
    {
      name: "About Gurudevshri",
      link: "#",
    },
    {
      name: "Social Intiatives",
      link: "#",
    },
    {
      name: "Contact Us",
      link: "#",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        // Scrolling down
        setIsScrolledDown(true);
      } else {
        // Scrolling up or near the top
        setIsScrolledDown(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isScrolledDown ? -180 : 0 }} // Slides out when scrolling down
      transition={{ type: "spring", stiffness: 100, damping: 20 }} // Smooth motion
      className=" fixed z-10 lg:py-[0.625vw] w-full containerx bg-[#f3f2dd]"
    >
      <div className="flex items-center justify-between h-full text-primary">
        <div>
          <Image
            height={54}
            width={277}
            src={"/logo.svg"}
            className=" lg:w-[14.375vw] "
          />
        </div>
        <nav className=" flex items-center lg:gap-[2.083vw]">
          {links?.map((item, index) => (
            <Link
              href={item?.link}
              key={index}
              className="font-medium uppercase "
            >
              {item?.name}
            </Link>
          ))}
          <div>
            <Image height={24} width={24} src={"/icons/search.svg"} />
          </div>
          <div>
            <Button name={"Register now"} />
          </div>
        </nav>
      </div>
    </motion.div>
  );
};

export default HeaderWeb;
