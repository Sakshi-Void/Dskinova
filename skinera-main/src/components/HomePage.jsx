import React, { useState } from "react";
import Header from "./Header.jsx";
// import Hero from "./Hero.jsx";
import NewHeroSlider from "./NewHeroSlider.jsx";
import SecondSection from "./SecondSection.jsx";
import OurService from "./OurService.jsx";
import AboutUs from "./AboutUs.jsx";
import FounderMessage from "./FounderMessage.jsx";
import WhyChooseUs2 from "./WhyChooseUs2.jsx";
import GoogleReviewsAutoSlider from "./GoogleReviewsAutoSlider.jsx";
import JustdialReviewsAutoSlider from "./JustdialReviewsAutoSlider.jsx";
import ExpertSkincare from "./ExpertSkincare.jsx";
import GalleryCollection from "./GalleryCollection.jsx";
import ConsultationBanner from "./ConsultationBanner.jsx";
import LatestNews from "./LatestNews.jsx";
import FAQ from "./FAQ.jsx";
import ExclusiveUpdate from "./ExclusiveUpdate.jsx";
import Footer from "./Footer.jsx";
import AppointmentModal from "./AppointmentModal.jsx";
import InstaReels from "./InstaReels.jsx";
import YouTubeReels from "./YouTubeReels.jsx";

export default function HomePage() {
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const openAppointment = () => setAppointmentOpen(true);
  const closeAppointment = () => setAppointmentOpen(false);
  const handleAppointmentSubmit = (payload) => {
    // TODO: Wire to backend or service (email, API). For now, just log.
    console.log("Appointment request:", payload);
  };

  return (
    <div className="min-h-screen bg-[#e0a075]">
      <Header onBookAppointment={openAppointment} />
      {/* <Hero onBookAppointment={openAppointment} /> */}
      <NewHeroSlider onBookAppointment={openAppointment} />
  <SecondSection onBookAppointment={openAppointment} />
      <OurService onBookAppointment={openAppointment} />
      <WhyChooseUs2 />
      <AboutUs />
      <FounderMessage />
      <ExpertSkincare />
      <GalleryCollection />
      <ConsultationBanner onBookAppointment={openAppointment} />
      <InstaReels />
      <YouTubeReels
        title="Our YouTube Shorts"
        channelUrl="https://www.youtube.com/@DSKINOVA"
        shorts={[
          "https://www.youtube.com/shorts/DvfaYu7sab0",
          "https://www.youtube.com/shorts/tzi_7DWIrDk",
          "https://www.youtube.com/shorts/rHpx5qm-RkU",
          "https://www.youtube.com/shorts/uboMImQrmDM",
          "https://www.youtube.com/shorts/tBhBfmo2XQg",
          // the last link was repeated, Set ensures de-duplication inside component
          "https://www.youtube.com/shorts/tBhBfmo2XQg",
        ]}
      />
      <GoogleReviewsAutoSlider autoSlideInterval={4000} showControls={true} />
      <JustdialReviewsAutoSlider
        autoSlideInterval={4000}
        showControls={true}
        justdialUrl="#"
      />
      <FAQ />
      <LatestNews />
      <ExclusiveUpdate />
      <Footer />
      <AppointmentModal
        open={appointmentOpen}
        onClose={closeAppointment}
        onSubmit={handleAppointmentSubmit}
      />
    </div>
  );
}
