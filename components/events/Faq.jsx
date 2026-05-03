"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const data = [
    {
      que: "How do I register for this event?",
      ans: "The beginning of a milestone year, as we celebrate growth and gratitude, reminds us",
    },
    {
      que: "How do I register for this event?",
      ans: "The beginning of a milestone year, as we celebrate growth and gratitude, reminds us",
    },
    {
      que: "How do I register for this event?",
      ans: "The beginning of a milestone year, as we celebrate growth and gratitude, reminds us",
    },
    {
      que: "How do I register for this event?",
      ans: "The beginning of a milestone year, as we celebrate growth and gratitude, reminds us",
    },
    {
      que: "How do I register for this event?",
      ans: "The beginning of a milestone year, as we celebrate growth and gratitude, reminds us",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="containerx containery">
      <div className="lg:flex justify-between">
        <h6 className="heading text-primary seasons max-lg:mb-5">FAQ’s</h6>

        <div className="lg:w-[45.156vw] grid grid-cols-1 gap-4">
          {data.map((item, index) => (
            <div key={index} className="border-b border-[#5E2A29]/30 pb-4">
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <h6 className="text-[18px] lg:text-[1.458vw] seasons text-[#5E2A29] font-[700]">
                  {item.que}
                </h6>

                <motion.div
                  //   animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    width={24}
                    height={24}
                    src={
                      activeIndex === index
                        ? "/icons/minus.svg"
                        : "/icons/plus.svg"
                    }
                    alt="toggle"
                  />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="content-sm lg:w-[30.26vw] mt-3 ">
                      {item.ans}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
