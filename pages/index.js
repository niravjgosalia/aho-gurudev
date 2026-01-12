import Menu from "@/components/AnimationFrame/Menu";
import HistoricCelebration from "@/components/HistoricCelebration";
import CTAcomp from "@/components/home/CTAcomp";
import DailyOffering from "@/components/home/DailyOffering";
import EventCalender from "@/components/home/EventCalender";
import Gratitudetree from "@/components/home/Gratitudetree";
import Impact from "@/components/home/Impact";
import MobAnimationFrame1 from "@/components/home/MobAnimationFrame1";
import SocialProjects from "@/components/home/SocialProjects";
import Testimonials from "@/components/home/Testimonials";
import WebAnimationFrame from "@/components/home/animationFrame/WebAnimationFrame";
import WebAnimationFrameMain from "@/components/home/animationFrame/WebAnimationFrameMain";
import HomeBanner from "@/components/HomeBanner";
import HeaderMob from "@/components/layout/HeaderMob";
import Header from "@/components/layout/HeaderWeb";
import MobileBanner from "@/components/layout/MobileBanner";
import Loader from "@/components/Loader";
import MobileHeader from "@/components/MobileHeader";
import MenuModal from "@/components/modal/MenuModal";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import WebAnimationFrame2 from "@/components/home/animationFrame/WebAnimationFrame2";
import AnimationFrame from "@/components/home/animationFrame/AnimationFrame";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const [showEnquireModal, setShowEnquireModal] = useState(false);

  const onMenuOpen = () => {
    setShowEnquireModal(true);
    // setJobDescription(item?.jobDescription);
  };

  const onClose = () => {
    setShowEnquireModal(false);
  };

  useEffect(() => {
    // Simulate loader completion or call your actual onComplete logic
    const timer = setTimeout(() => setLoading(false), 7600);
    return () => clearTimeout(timer);
  }, []);

  const voices = [
    {
      section: "normal2",
      img: "/images/home/immersion/alt.png",
      title: "VOICE THAT AWAKENS",
      desc: "Satsang is the rain song of the Sadguru. The gift He keeps giving. Over 40 years and counting. ",
    },
    {
      section: "normal",
      img: "/images/home/immersion/alt.png",
      title: "Guru for the Now",
      desc: "His message is free from constraints of time, space, faith, and geography.It is a path for all, within all.",
    },
    {
      section: "normal",
      img: "/images/home/immersion/alt.png",
      title: "Scriptural Philosophy",
      desc: "Gurudev has used the key of scriptures to open the treasure in His chest.",
    },
    {
      section: "normal",
      img: "/images/frames/mastery.jpg",
      title: "Personal Mastery",
      desc: "His personal mastery deep-dives enable a shifting of paradigms through His penetrating insight and signature wit.",
    },
    {
      section: "normal",
      img: "/images/home/immersion/alt.png",
      title: "Multilingual",
      desc: "Wisdom in regional Gujarati evolved into AI-powered multilingual breakthroughs.",
    },
    {
      section: "youtube",
      img: "/images/home/immersion/alt.png",
      link: "https://www.youtube.com/shorts/ukOAzI2Qfpk",
      // title: "Multilingual",
      // desc: "Wisdom in regional Gujarati evolved into AI-powered multilingual breakthroughs.",
    },
    {
      section: "normal",
      img: "/images/home/immersion/alt.png",
      title: "Outside the hall",
      desc: "Water does not originate from the tap. The tap just channels it. His wisdom does not originate from scriptures. The text just channels His inner experience. So, satsang is never limited to a formal gathering. ",
    },
  ];
  const data2 = [
    {
      section: "normal",
      img: "/images/home/immersion/alt.png",
      title: "UNRAVELLING THE PATH",
      desc: "Sadhana is applied spirituality.The walk to freedom. The stride towards the unknown home.",
    },
    {
      section: "normal",
      img: "/images/home/immersion/alt.png",
      title: "Essence",
      desc: "Look within. Love all. Eyes closed. Palms open. An inner journey extending outwards.",
    },
    {
      section: "normal",
      img: "/images/home/immersion/alt.png",
      title: "Introspection",
      desc: "The first step is not a step, it’s a turn. From world to within. In the floodlight of satsang, read yourself. This is introspection.",
    },
    {
      section: "normal",
      img: "/images/home/immersion/alt.png",
      title: "Contemplation",
      desc: "With this, one realises that all the wealth acquired, objects procured, relations maintained,  have no relevance to inner joy. The twilight before dawn. Renewed strength, right direction. This is contemplation. ",
    },
    {
      section: "normal",
      img: "/images/home/immersion/alt.png",
      title: "Meditation",
      desc: "Start with introspection. Stay in contemplation. And dissolve in meditation. Thrilled emptiness. Blissful nothingness.  Skyscraper state of cloudless awareness.  ",
    },
    {
      section: "audio",
      img: "/images/home/immersion/alt.png",
      link: "https://www.youtube.com/shorts/ukOAzI2Qfpk",
      title: "Turn Within for 30 Seconds",
    },
    {
      section: "normal",
      img: "/images/home/immersion/alt.png",
      title: "Yoga",
      desc: "Yoga is meditation with extra steps. Every asana a signal to the soul. Every breath a bridge to the breathtaking. Every flow a rendezvous between the consciousness and cosmos. ",
    },
  ];
  const divine = [
    {
      section: "normal",
      img: "/images/home/immersion/alt.png",
      title: "DIVINE ARCHITECT",
      desc: "Shrimad Rajchandra Ashram is not a cluster of buildings. It is an extension of His existence — pulsating with peace, power, and purity. ",
    },
    {
      section: "normal",
      img: "/images/home/immersion/alt.png",
      title: "Ashram",
      desc: "An ashram is a home for the soul.",
    },
    {
      section: "normal",
      img: "/images/home/immersion/alt.png",
      title: "Aerial Shots:",
      desc: "The grand masterplan of a mystic.",
    },
    {
      section: "normal",
      img: "/images/home/immersion/alt.png",
      title: "Aerial Shots:",
      desc: "Welcome to the Spiritual Valley.",
    },
    {
      section: "normal",
      img: "/images/home/immersion/alt.png",
      title: "Aerial Shots:",
      desc: "City of stars.",
    },
    {
      section: "youtube",
      img: "/images/home/immersion/alt.png",
      link: "https://www.instagram.com/p/C7CEF44C_SW/",
      title: "Virtual Tour of Ashram",
      // desc: "Wisdom in regional Gujarati evolved into AI-powered multilingual breakthroughs.",
    },
    {
      section: "normal",
      img: "/images/home/immersion/alt.png",
      title: "Jimandir",
      desc: "The Jimandir is a temple that stirs one’s spirit, regardless of their faith.Gurudev has defined it by experience, not by exclusion. ",
    },
    {
      section: "normal",
      img: "/images/home/immersion/gurumandir.jpg",
      title: "Gurumandir",
      desc: "The Gurumandir is the royal seat of Shrimad Rajchandraji.  A meditative expanse. A blissed out silence. The view is better with eyes closed. ",
    },
    {
      section: "normal",
      img: "/images/home/immersion/alt.png",
      title: "Raj Darbar",
      desc: "The Raj Darbar comprises of two things: The world’s tallest idol of Shrimad Rajchandraji, and the sky. Both limitless.  ",
    },
    {
      section: "normal",
      img: "/images/home/immersion/alt.png",
      title: "Raj Sabhagruh",
      desc: "This iconic lantern-shaped structure is where the lighthouse of His satsang shines.Like moths drawn to a flame, seekers enter, and their doubts and delusion burn away.",
    },
    {
      section: "normal",
      img: "/images/home/immersion/alt.png",
      title: "Warmth of Ashram",
      desc: "From a distance, the ashram inspires awe.Up close, it’s an embrace of warmth. ",
    },
    {
      section: "normal",
      img: "/images/home/immersion/alt.png",
      title: "Global Footprint",
      desc: "200+ centres across six continents. Seekers within those centres. Exploring their centres within. ",
    },
    {
      section: "normal",
      img: "/images/home/immersion/usa-ashram.jpg",
      title: "USA Ashram",
      desc: "Shrimad Rajchandra Ashram, USA. Sprawling across 400 acres in Poconos, Pennsylvania. Heart of wellness, wisdom, and welfare.  ",
    },
    {
      section: "normal",
      img: "/images/home/immersion/alt.png",
      title: "Australia Ashram",
      desc: "An island of peace on the island continent.Ushering a new wave of inner evolution, Shrimad Rajchandra Ashram, Australia. ",
    },
  ];
  const love = [
    {
      section: "normal",
      img: "/images/home/immersion/alt.png",
      title:
        "LOVE IN MOTION - chapter we need to redo as content is more and its not fitting well",
      desc: "Bliss manufactured within, extends as love, care, and compassion. A true seeker cannot help but be a true sevak.  ",
    },
    {
      section: "normal",
      img: "/images/home/immersion/alt.png",
      title: "Gurudev’s compassion",
      desc: "In the lineage of the enlightened, a prodigy emerges. A saviour to those suffering, a light in these modern dark ages. ",
    },
    {
      section: "normal",
      img: "/images/frames/srhrc.jpg",
      title: "SRHRC - Shrimad Rajchandra Hospital and Research Centre",
      desc: "For those with less than nothing, nothing less than the best. Shrimad Rajchandra Hospital and Research Centre — a 250-bed multi-specialty charitable institute, treating patients from over 500 villages. ",
      hugeContent: true,
    },
    {
      section: "normal",
      img: "/images/frames/srsu.jpg",
      title: "SRSU - Shrimad Rajchandra Sarvamangal University",
      desc: "Where schools were nothing more than four walls and a leaking roof, children can now dream to become what they’re meant to be. The sky of Dharampur is filled with aspirations. Because the land of Dharampur has Shrimad Rajchandra Sarvamangal University. ",
      hugeContent: true,
    },
    {
      section: "normal",
      img: "/images/frames/srj.jpg",
      title: "SRJ - Shrimad Rajchandra Jivamaitridham",
      desc: "A breakthrough in animal care, a revolution in animal wellness. A hospital, a shelter, an experience centre, and a veterinary college, in a 40-acre care-for-life facility. Capacity for 2,000. Small and big animals. No euthanasia. The phrase — to treat someone like an animal — changes its meaning at Shrimad Rajchandra Jivamaitridham. ",
      hugeContent: true,
    },

    {
      section: "normal",
      img: "/images/frames/srcew.jpg",
      title: "SRCEW - Shrimad Rajchandra Centre of Excellence for Women",
      desc: "Behind every flourishing society are empowered women. And behind the women of Dharampur is Shrimad Rajchandra Centre of Excellence for Women. A lab of innovation. A school of learning. A building for building confidence. A home for holistic development. ",
      hugeContent: true,
    },
    {
      section: "normal",
      img: "/images/frames/global.jpg",
      title: "Global Outreach & Volunteer Army",
      desc: "As thousands around the world form this growing movement, their smallest act of service becomes an offering at the altar of compassion.  ",
    },
    {
      section: "normal",
      img: "/images/frames/africa.jpg",
      title: "Raj Darbar",
      desc: "Mission Africa: Rise Of A New Dawn. A 360° community development programme 50,000+ plates filled every single day. 175+ institutes opening doors to a better life. 16+ countries advancing towards a better future.  ",
    },
    {
      section: "normal",
      img: "/images/frames/smiling.jpg",
      title: "Smiling beneficiary faces",
      desc: "Gurudev was here.",
    },
  ];

  return (
    <>
      {isDesktopOrLaptop ? (
        <>
          <div className="relative">
            <Header />
            <HomeBanner startAnimation={!loading} />
            <div className=" relative">
              <WebAnimationFrameMain />
              <WebAnimationFrame />
              <AnimationFrame id={"awakens"} data={voices} />
              <AnimationFrame id={"unravelling"} data={data2} />
              <AnimationFrame id={"divine"} data={divine} />
              <AnimationFrame id={"love"} data={love} />
              {/* <WebAnimationFrame2 /> */}
              <Menu onMenuOpen={onMenuOpen} />
            </div>
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
          <div className=" relative">
            <WebAnimationFrameMain />
            <WebAnimationFrame />
            <AnimationFrame id={"awakens"} data={voices} />
            <AnimationFrame id={"awakens"} data={voices} />
            <AnimationFrame id={"unravelling"} data={data2} />
            <AnimationFrame id={"divine"} data={divine} />
            <AnimationFrame id={"love"} data={love} />
            <Menu onMenuOpen={onMenuOpen} />
          </div>
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
      <MenuModal showEnquireModal={showEnquireModal} onClose={onClose} />
    </>
  );
};

export default Home;
