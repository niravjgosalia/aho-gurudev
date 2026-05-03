import React from "react";

const LeftButton = ({ name }) => {
  return (
    <button
      className={`text-center bg-transparent border border-[#5E2A29] cursor-pointer  hover:bg-[#5E2A29] ${name}`}
    >
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[36px] h-[36px] p-[8px] xl:w-[2.083vw] xl:h-[2.083vw] xl:p-[0.4vw] "
      >
        <path
          d="M18.4023 11.625H4.83984"
          stroke="#5E2A29"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.6211 18.4062L4.83984 11.625L11.6211 4.84375"
          stroke="#5E2A29"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default LeftButton;
