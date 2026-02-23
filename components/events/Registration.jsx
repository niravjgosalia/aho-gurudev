import React from "react";

const Registration = () => {
  const data = [
    {
      include: "Slab 1",
      allSession: "$105",
      dailySession: "$35",
    },
    {
      include: "Slab 2",
      allSession: "$105",
      dailySession: "$35",
    },
    {
      include: "Slab 3",
      allSession: "$105",
      dailySession: "$35",
    },
  ];
  return (
    <section className=" containerx containery">
      <h6 className=" heading text-primary seasons">Registration Details</h6>
      <p className=" content">
        Registration is mandatory for all attendees and package rates are highly
        subsidized to support broad participation.
      </p>
      <div className=" flex flex-col justify-start items-center border border-[#5E2A29] px-2 lg:px-[1.4vw] w-fit mt-5 lg:mt-[2vw]">
        <table class="table-auto border-collapse border-spacing-x-4 border-spacing-y-2 lg:border-spacing-x-[4vw] ">
          <thead className=" ">
            <tr>
              <th></th>
              <th className="py-4 lg:py-[1vw]">
                <div className="bg-[#E362260F] border lg:mx-auto border-[#E36226] w-fit p-1 lg:py-[0.1vw] lg:px-[2vw] text-[#5E2A29] content-sm font-light">
                  Full pass
                </div>
              </th>
              <th className="">
                <div className="bg-[#E362260F] border lg:mx-auto border-[#E36226] w-fit p-1 lg:py-[0.1vw] lg:px-[2vw] text-[#5E2A29] content-sm font-light">
                  Day pass
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-t border-[#5E2A29] content-sm">
              <td className=" text-[#5E2A29] font-semibold w-1/3 py-4 lg:min-w-[8vw] lg:py-[1vw] lg:text-center">
                Includes
              </td>
              <td className=" font-light lg:min-w-[15vw] lg:text-center">
                All sessions and meals
              </td>
              <td className=" font-light lg:min-w-[15vw] lg:text-center">
                Daily session and meals
              </td>
            </tr>
            {data?.map((item, index) => (
              <tr
                key={index}
                className=" border-t border-[#5E2A29] content-sm "
              >
                <td className=" text-[#5E2A29] font-semibold py-4 lg:py-[1vw] lg:text-center">
                  {item?.include}
                </td>
                <td className=" font-light lg:text-center">
                  {item?.allSession}
                </td>
                <td className=" font-light lg:text-center">
                  {item?.dailySession}
                </td>
              </tr>
            ))}
          </tbody>
        </table>{" "}
        <div className=" btnwrap w-full py-4 lg:hidden border-t border-[#5E2A29]">
          <button className="flatbtn w-full">Register</button>
        </div>
      </div>
    </section>
  );
};

export default Registration;
