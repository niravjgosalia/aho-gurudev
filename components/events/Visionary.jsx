import Image from "next/image";
import React from "react";

const Visionary = () => {
  return (
    <section className=" containerx containery max-lg:flex-col-reverse flex justify-between items-center">
      <Image
        width={869}
        height={506}
        src={"/images/events/visionary.png"}
        className=" lg:w-[45.26vw] max-lg:mt-4"
      />
      <div className=" lg:w-[37.656vw]">
        <h6 className=" heading text-primary seasons">The Visionary</h6>
        <p className=" content">
          An enlightened visionary and global ambassador of peace. Deeply
          inspired by the life and teachings of Shrimad Rajchandraji, He
          empowers individuals to embark on a joyful journey of self-discovery
          and purposeful living.
        </p>
      </div>
    </section>
  );
};

export default Visionary;
