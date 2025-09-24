import React from "react";
import clinic from "../../Images/clinic-images/8.webp";

function Item({ title, children }) {
  return (
    <div className="py-4 border-t border-gray-200 first:border-t-0">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0Zm14.28-2.28a.75.75 0 10-1.06-1.06l-4.72 4.72-2.22-2.22a.75.75 0 10-1.06 1.06l2.75 2.75a.75.75 0 001.06 0l5.25-5.25Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div>
          <h4 className="text-xl font-serif font-semibold text-[#7a0b1a]">
            {title}
          </h4>
          <p className="text-sm text-gray-600 mt-1">{children}</p>
        </div>
      </div>
    </div>
  );
}

export default function HowWeWork() {
  return (
    <section className="bg-[#fff7f5]">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div>
          <p className="text-sm font-semibold text-gray-500">How We Work</p>
          <h2 className="mt-2 text-4xl md:text-5xl font-serif font-semibold leading-tight text-[#7a0b1a]">
            A Commitment to Your
            <br /> Skin & Hair Health
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl">
            At <span className="font-semibold text-[#7a0b1a]">DSkinova</span>,
            we blend expertise with care to give you the best skin, hair, and
            cosmetic treatments.
          </p>

          <div className="mt-6">
            <Item title="Personalized Consultation">
              We assess your concerns and create a customized treatment plan
              tailored to your needs.
            </Item>
            <Item title="Tailored Treatment Plans">
              Each treatment is designed to deliver the best possible results
              for your skin and hair.
            </Item>
            <Item title="Continuous Care & Follow-Up">
              We provide post-treatment support and regular follow-ups to ensure
              lasting improvements.
            </Item>
          </div>
        </div>

        {/* Right: Image Card with overlay */}
        <div>
          <div className="relative overflow-hidden rounded-3xl shadow-md">
            <img
              src={clinic}
              alt="Treatment in clinic"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-lg font-semibold">
                Have Question? We’re Here to Help You!
              </p>
              <a
                href="tel:+917878867379"
                className="mt-3 inline-flex items-center gap-2 text-white/90 hover:text-white"
              >
                <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-white/15">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M2.25 3.75A1.5 1.5 0 0 1 3.75 2.25h2.273a1.5 1.5 0 0 1 1.48 1.246l.517 3.102a1.5 1.5 0 0 1-.826 1.626l-1.29.602a.75.75 0 0 0-.36.992 13.51 13.51 0 0 0 7.55 7.55.75.75 0 0 0 .992-.36l.602-1.29a1.5 1.5 0 0 1 1.626-.826l3.102.517a1.5 1.5 0 0 1 1.246 1.48v2.273a1.5 1.5 0 0 1-1.5 1.5H18A15.75 15.75 0 0 1 2.25 6V3.75Z" />
                  </svg>
                </span>
                <span className="text-lg font-semibold tracking-wide">
                  +91 78788 67379
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
