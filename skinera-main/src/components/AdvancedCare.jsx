import React from "react";
import expertImg from "../../Images/clinic-images/clinic.webp";

const Bullet = ({ children }) => (
  <li className="flex items-start gap-2 text-[#4b5563]">
    <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-sm border-2 border-[#7a0b1a]/60 text-[#7a0b1a]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-3 w-3"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0Zm14.28-2.28a.75.75 0 10-1.06-1.06l-4.72 4.72-2.22-2.22a.75.75 0 10-1.06 1.06l2.75 2.75a.75.75 0 001.06 0l5.25-5.25Z"
          clipRule="evenodd"
        />
      </svg>
    </span>
    <span>{children}</span>
  </li>
);

export default function AdvancedCare() {
  return (
    <section className="bg-[#f7f3f1]">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Image */}
        <div>
          <div className="rounded-2xl overflow-hidden bg-white shadow-md">
            <img
              src={expertImg}
              alt="Advanced care consultation"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-sm font-semibold text-[#6b7280] mb-2">
            Our Process
          </p>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-[#7a0b1a] leading-tight mb-4">
            Advanced Care for Skin & Hair Health
          </h3>
          <p className="text-[#6b7280] mb-5 max-w-xl">
            We provide cutting-edge solutions for skin, hair, and cosmetic
            concerns, ensuring the best care at every stage.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-6">
            <ul className="space-y-2">
              <Bullet>Expert Cosmetologists</Bullet>
              <Bullet>Personalized Care</Bullet>
              <Bullet>Advanced Technology</Bullet>
            </ul>
            <ul className="space-y-2">
              <Bullet>Comprehensive Services</Bullet>
              <Bullet>Effective Solution</Bullet>
              <Bullet>Comfortable Environment</Bullet>
            </ul>
          </div>

          <p className="text-[#6b7280]">
            Your skin & hair transformation starts here —{" "}
            <a
              href="#"
              className="text-[#b8734a] underline-offset-2 hover:underline"
            >
              Book today!
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
