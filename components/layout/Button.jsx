import React from "react";

const Button = ({ name, fill, onClick, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`border-[1.5px] border-[#5E2A29] py-[8px] px-[10px] lg:py-[0.521vw] lg:px-[1.042vw] relative after:absolute after:z-[1] after:h-full after:left-0 after:top-0 after:w-0 hover:after:w-full after:transition-all duration-150 ${
        fill
          ? "bg-[#5E2A29] after:bg-[#fff] text-white hover:text-[#5E2A29]"
          : "after:bg-[#5E2A29] hover:text-white text-[#5E2A29]"
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      <span className="relative z-[2]">{name}</span>
    </button>
  );
};

export default Button;
