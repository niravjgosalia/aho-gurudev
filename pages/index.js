import HistoricCelebration from "@/components/HistoricCelebration";
import MobAnimationFrame1 from "@/components/home/MobAnimationFrame1";
import WebAnimationFrame1 from "@/components/home/WebAnimationFrame1";
import HomeBanner from "@/components/HomeBanner";
import HeaderMob from "@/components/layout/HeaderMob";
import Header from "@/components/layout/HeaderWeb";
import Loader from "@/components/Loader";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loader completion or call your actual onComplete logic
    const timer = setTimeout(() => setLoading(false), 7600);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <div className="relative max-lg:hidde">
        <Header />
        <HomeBanner startAnimation={!loading} />
        <WebAnimationFrame1 />
        <HistoricCelebration />
        {/* Loader overlay */}
        {/* <AnimatePresence>
          {loading && (
            <motion.div
              key="loader"
              className="fixed inset-0 z-50 flex items-center justify-center bg-white"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <Loader />
            </motion.div>
          )}
        </AnimatePresence> */}
      </div>
      {/* <div className=" lg:hidden">
        <HeaderMob />
        <MobAnimationFrame1 />
      </div> */}
    </>
  );
};

export default Home;
