import React from "react";
import Header from "@/components/layout/HeaderWeb";
import CommonBanner from "@/components/reusable/CommonBanner";
import About from "@/components/events/About";
import MajorHighlights from "@/components/events/MajorHighlights";
import Schedule from "@/components/events/Schedule";
import Registration from "@/components/events/Registration";
import Accomodation from "@/components/events/Accomodation";
import Laabhs from "@/components/events/Laabhs";
import Visionary from "@/components/events/Visionary";
import Influnce from "@/components/events/Influnce";
import Brochure from "@/components/events/Brochure";
import ContactForm from "@/components/events/ContactForm";
import Faq from "@/components/events/Faq";
import MobileHeader from "@/components/MobileHeader";

const eventDetail = () => {
  return (
    <div>
      <div className=" max-lg:hidden">
        <Header />
      </div>
      <div className=" lg:hidden">
        <MobileHeader />
      </div>

      <CommonBanner />
      <About />
      <MajorHighlights />
      <Schedule />
      <Registration />
      <Accomodation />
      <Laabhs />
      <Visionary />
      <Influnce />
      <Brochure />
      <ContactForm />
      <Faq />
    </div>
  );
};

export default eventDetail;
