import React, { useState } from "react";

const faqs = [
  {
    q: "Do I need a consultation before getting treatment?",
    a: "Yes. A consultation allows our cosmetologist to assess your skin or hair concerns, discuss goals, and tailor an evidence‑based plan before any procedure.",
  },
  {
    q: "Are your treatments suitable for all skin types?",
    a: "Treatments are customized. We evaluate sensitivity, tone, and current routines to select safe modalities for every skin type.",
  },
  {
    q: "Do you offer cosmetic cosmetology services?",
    a: "We provide a full spectrum: corrective facials, anti‑aging solutions, laser modalities, hair restoration approaches, and maintenance programs.",
  },
  {
    q: "What should I expect during my first visit?",
    a: "You'll receive a structured assessment, baseline imaging/observation if needed, discussion of options, timelines, and a personalized after‑care outline.",
  },
  {
    q: "Is a cosmetologist included in the RGHS scheme?",
    a: "Please contact support for current panel associations. We'll guide you on documentation and eligibility if applicable.",
  },
];

function FAQItem({ item, index, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index;
  return (
    <button
      onClick={() => setOpenIndex(isOpen ? null : index)}
      className="group w-full text-left border-b border-white/40 py-5 focus:outline-none"
      aria-expanded={isOpen}
    >
      <div className="flex items-start justify-between gap-6">
        <span className="font-medium text-base sm:text-lg text-white leading-snug pr-4">
          {item.q}
        </span>
        <span className="text-white text-xl sm:text-2xl font-light transition-transform duration-300 select-none">
          {isOpen ? "−" : "+"}
        </span>
      </div>
      <div
        className={`grid transition-all duration-300 ease-out text-white/90 text-sm sm:text-[15px] leading-relaxed ${
          isOpen
            ? "mt-4 grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pr-6">{item.a}</p>
        </div>
      </div>
    </button>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="relative bg-[#E0A075] py-20 sm:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Heading */}
          <div className="lg:col-span-5">
            <span className="text-xs tracking-[0.35em] text-white font-semibold block mb-6">
              FAQ
            </span>
            <h2 className="font-domine font-medium text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-8">
              Frequently Asked <br className="hidden sm:block" /> Questions —
              Find Out <br className="hidden sm:block" /> More
            </h2>
            <p className="text-white/90 text-sm sm:text-base max-w-md leading-relaxed">
              Have questions about our cosmetology services? Explore our FAQs
              for quick answers.
            </p>
          </div>
          {/* Right: Accordion List */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-white/40 border-t border-b border-white/40">
              {faqs.map((item, i) => (
                <FAQItem
                  key={i}
                  item={item}
                  index={i}
                  openIndex={openIndex}
                  setOpenIndex={setOpenIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
