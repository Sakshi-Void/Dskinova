import React from "react";
import doctorImg from "../../Images/Doctor-img/1.jpeg";

export default function DoctorBio() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left: Heading + concise Bio text */}
          <div className="md:h-[560px] flex flex-col justify-center">
            <div className="inline-block mb-2">
              <span className="text-xs tracking-[0.25em] text-[#b8734a] font-semibold pb-1 border-b-2 border-[#b8734a]/70">
                ABOUT
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#111] mb-4 md:mb-6">
              Dr. Kirti Kothari
            </h3>
            <div className="text-[#333] leading-7 space-y-3 text-[0.95rem] md:text-base max-w-[620px]">
              <p>
                Qualified cosmetologist and founder of DSkinova with 3+ years of
                experience in clinical and aesthetic cosmetology. Focused on
                healthy, radiant skin and hair through evidence‑based,
                personalized care.
              </p>
              <p>
                Skilled in acne, pigmentation, early aging, hair thinning, and
                scalp concerns—combining medical insight with cosmetic science
                to tailor every plan.
              </p>
              <p>
                Committed to modern techniques and continuous learning to
                deliver safe, effective, and reliable outcomes in a supportive,
                patient‑first environment.
              </p>
            </div>
          </div>

          {/* Right: Doctor image */}
          <div className="md:justify-self-end order-first md:order-none md:h-[560px] flex items-stretch">
            <div className="rounded-3xl overflow-hidden border-4 border-[#7a0b1a]/60 shadow-md bg-white w-full">
              <img
                src={doctorImg}
                alt="Dr. Kirti Kothari"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
