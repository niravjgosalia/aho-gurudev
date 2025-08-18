import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Thisweek from "../events/Thisweek";

const tabs = [
  { id: "this-week", title: "This week", content: <Thisweek /> },
  { id: "upcoming", title: "Upcoming", content: <Thisweek /> },
  { id: "previous", title: "Previous", content: <Thisweek /> },
  { id: "near-me", title: "Near me", content: <Thisweek /> },
];

function EventCalender() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="my-[50px] lg:my-[4vw] lg:h-screen overflow-hidden">
      <div className="relative w-full containerx">
        <div className="headwrap">
          <h3 className="heading seasons text-[#5E2A29]">The Event Calendar</h3>
        </div>
        <div className="w-full my-6 md:my-6 lg:my-[1.2vw] flex gap-5 md:gap-[2vw] text-[#5E2A29] font-medium relative overflow-x-auto whitespace-nowrap scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative pb-1 text-[16px] lg:text-[1vw] transition-all duration-300 shrink-0 ${
                activeTab === tab.id ? "opacity-100" : "opacity-40"
              }`}
            >
              {tab.title}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 bottom-0 h-[2px] bg-[#5E2A29]"
                  initial={false}
                  animate={{ width: "100%" }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab} // ensures animation on change
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {tabs.find((tab) => tab.id === activeTab)?.content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default EventCalender;
