import HistoricCelebration from "@/components/HistoricCelebration";
import CTAcomp from "@/components/home/CTAcomp";
import DailyOffering from "@/components/home/DailyOffering";
import EventCalender from "@/components/home/EventCalender";
import Gratitudetree from "@/components/home/Gratitudetree";
import Impact from "@/components/home/Impact";
import MobAnimationFrame1 from "@/components/home/MobAnimationFrame1";
import SocialProjects from "@/components/home/SocialProjects";
import Testimonials from "@/components/home/Testimonials";
import WebAnimationFrame1 from "@/components/home/WebAnimationFrame1";
import HomeBanner from "@/components/HomeBanner";
import HeaderMob from "@/components/layout/HeaderMob";
import Header from "@/components/layout/HeaderWeb";
import MobileBanner from "@/components/layout/MobileBanner";
import Loader from "@/components/Loader";
import MobileHeader from "@/components/MobileHeader";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  useEffect(() => {
    // Simulate loader completion or call your actual onComplete logic
    const timer = setTimeout(() => setLoading(false), 7600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isDesktopOrLaptop ? (
        <>
          <div className="relative">
            <Header />
            <HomeBanner startAnimation={!loading} />
            <WebAnimationFrame1 />
            <HistoricCelebration />
            <EventCalender />
            <SocialProjects />
            <Testimonials />
            <CTAcomp />
            <Impact />
            <DailyOffering />
            <Gratitudetree />
            {/* Loader overlay */}
            <AnimatePresence>
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
            </AnimatePresence>
          </div>
        </>
      ) : (
        <>
          <MobileHeader />
          <MobileBanner />
          <WebAnimationFrame1 />
          <HistoricCelebration />
          <EventCalender />
          <SocialProjects />
          <Testimonials />
          <CTAcomp />
          <Impact />
          <DailyOffering />
          <Gratitudetree />
        </>
      )}
    </>
  );
};

export default Home;
