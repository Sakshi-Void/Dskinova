import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Hero from "./Hero.jsx";
import AppointmentModal from "./AppointmentModal.jsx";
import clinicImg from "../../Images/clinic-images/clinic.webp";

export default function Wellness() {
  // Appointment modal state (reuse homepage pattern)
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const openAppointment = () => setAppointmentOpen(true);
  const closeAppointment = () => setAppointmentOpen(false);
  const handleAppointmentSubmit = (payload) => {
    console.log("Appointment request:", payload);
  };
  // Simple stat animation inspired by AboutUs but with new copy
  const [programs, setPrograms] = useState(0);
  const [clients, setClients] = useState(0);
  const statsRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const animate = (to, setter) => {
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / 1000, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setter(Math.round(to * eased));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          animate(25, setPrograms);
          animate(1200, setClients);
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#e0a075]">
      {/* Same header as homepage */}
      <Header onBookAppointment={openAppointment} />

      {/* Use existing hero */}
      <Hero onBookAppointment={openAppointment} />

      <main className="bg-gradient-to-r from-[#f7e6d9] from-60% to-white">
        {/* Wellness Intro Section with Image (restored) */}
        <section className="py-14 sm:py-18 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-domine text-[#2d2d2d] leading-tight font-medium">
                Wellness, Designed For Your Skin Health
              </h1>
              <p className="mt-4 text-[#6b6b6b] text-sm sm:text-base leading-relaxed">
                Build healthy skin habits with evidence-backed treatments and
                personalised care plans. Our wellness programs focus on
                prevention, nourishment, and long-term radiance—so you can feel
                great, every day.
              </p>
              <div className="mt-7 flex gap-3">
                <button
                  type="button"
                  onClick={openAppointment}
                  className="inline-flex items-center bg-[#c98963] hover:bg-[#be7f58] text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 text-sm"
                >
                  Start Your Plan
                </button>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-[#c98963] hover:text-[#be7f58] px-4 py-3 text-sm font-medium"
                >
                  Talk to an Expert →
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src={clinicImg}
                alt="Calm skincare wellness studio"
                className="w-full h-[320px] sm:h-[420px] md:h-[520px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-10 sm:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Skin Nutrition",
                  desc: "Holistic guidance on diet and lifestyle to support healthy skin from within.",
                },
                {
                  title: "Maintenance Rituals",
                  desc: "Monthly facials and non-invasive therapies tailored to your skin type.",
                },
                {
                  title: "Progress Tracking",
                  desc: "Check-ins and adjustments with your clinician to ensure consistent results.",
                },
              ].map((f, i) => (
                <div
                  key={i}
                  className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow ring-1 ring-black/5"
                >
                  <h3 className="text-lg font-semibold text-[#2d2d2d]">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#6b6b6b]">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8" ref={statsRef}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 gap-6">
            <div>
              <div className="text-2xl sm:text-3xl font-domine font-medium text-[#c4a484]">
                {programs}+
              </div>
              <div className="text-sm text-[#6b6b6b] mt-1">Active Programs</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-domine font-medium text-[#c4a484]">
                {clients}+
              </div>
              <div className="text-sm text-[#6b6b6b] mt-1">
                Clients Supported
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-10 sm:py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl sm:text-3xl font-domine font-medium text-gray-800">
              Ready to put your skin on a routine?
            </h3>
            <p className="mt-2 text-gray-600 text-base">
              Book a free consultation and we’ll craft a wellness plan built for
              you.
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={openAppointment}
                className="inline-block bg-[#c98963] hover:bg-[#be7f58] text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 text-sm"
              >
                GET STARTED FOR FREE
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Same footer as homepage */}
      <Footer />

      {/* Appointment Modal */}
      <AppointmentModal
        open={appointmentOpen}
        onClose={closeAppointment}
        onSubmit={handleAppointmentSubmit}
      />
    </div>
  );
}
