import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CompletedProj from "../socialprojects/CompletedProj";

const tabs = [
  { id: "upcoming", title: "Upcoming", content: <CompletedProj /> },
  { id: "completed", title: "Completed", content: <CompletedProj /> },
];

function SocialProjects() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="my-[50px] lg:my-[4vw]">
      <div className="relative w-full containerx">
        <div className="headwrap">
          <h3 className="heading seasons text-[#5E2A29]">Social Impact Projects</h3>
        </div>
        <div className="w-full mt-4 mb-10 md:py-6 lg:mt-0 lg:py-[1.2vw] flex gap-5 md:gap-[2vw] text-[#5E2A29] font-medium relative overflow-x-auto whitespace-nowrap scrollbar-hide">
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
  );
}

export default SocialProjects;
