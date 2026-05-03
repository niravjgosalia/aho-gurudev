import SocialImpact from "@/components/home/SocialImpact";
import DailyOffering from "@/components/home/DailyOffering";
import DivineAssembly from "@/components/home/DivineAssembly";
import WorldStage from "@/components/home/WorldStage";
import VoiceQuote from "@/components/home/VoiceQuote";
import JoinMovement from "@/components/home/JoinMovement";
import Testimonials from "@/components/home/Testimonials";
import HeroBanner from "@/components/home/HeroBanner";
import WhoIsGurudev from "@/components/home/WhoIsGurudev";
import Header from "@/components/layout/HeaderWeb";
import Footer from "@/components/layout/Footer";
import MobileHeader from "@/components/MobileHeader";
import MenuModal from "@/components/modal/MenuModal";
import ScrollProgress from "@/components/ScrollProgress";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";

const Globe = dynamic(() => import("@/components/home/Globe"), { ssr: false });

const Home = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [showEnquireModal, setShowEnquireModal] = useState(false);

  const onClose = () => setShowEnquireModal(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isDesktop ? (
        <div className="relative">
          <Header />
          <HeroBanner loading={false} />
          <WhoIsGurudev />
          <VoiceQuote />
          <DivineAssembly />
          <WorldStage />
          <SocialImpact />
          <Globe />
          <Testimonials />
          <DailyOffering />
          <JoinMovement />
          <Footer />
        </div>
      ) : (
        <>
          <MobileHeader />
          <HeroBanner loading={false} />
          <WhoIsGurudev />
          <VoiceQuote />
          <DivineAssembly />
          <WorldStage />
          <SocialImpact />
          <Globe />
          <Testimonials />
          <DailyOffering />
          <JoinMovement />
          <Footer />
        </>
      )}
      <ScrollProgress />
      <MenuModal showEnquireModal={showEnquireModal} onClose={onClose} />
    </>
  );
};

export default Home;
