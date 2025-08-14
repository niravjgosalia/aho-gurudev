import React from "react";

const Button = ({ name }) => {
  return (
    <button className=" border-[1.5px] border-[#5E2A29] py-[4px] px-[10px] lg:py-[0.521vw] lg:px-[1.042vw] relative after:absolute after:z-[-1] after:bg-[#5E2A29] after:h-full after:left-0 after:top-0 after:w-0 hover:after:w-full hover:text-white after:transition-all duration-150">
      <span>{name}</span>
    </button>
  );
};

export default Button;
