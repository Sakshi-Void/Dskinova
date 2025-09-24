import React, { useEffect, useRef, useState } from "react";
import imgClinic from "../../Images/clinic-images/clinic.webp";
import imgThree from "../../Images/clinic-images/3.jpg";
import hemoDermImg from "../../Images/newServicesComponent/Mesotherapy.jpg";
import doctorImg from "../../Images/Doctor-img/1.jpeg";
import heroReplace from "../../Images/misc/1.png";
import heroTagline from "../../Images/misc/2.png";
import heroFive from "../../Images/misc/5.png";
import mobSkin from "../../Images/misc/mob-skin.jpg";
import mobHair from "../../Images/misc/mob-hair.jpeg";

// Slides order (moved Doctor as the second slide). Flags drive behavior instead of hardcoded indexes.
const slides = [
  // 1) Image with caption
  { type: "image", src: imgClinic, alt: "Clinic reception" },
  // 2) Doctor image (replaced former video)
  {
    type: "image",
    src: heroReplace,
    alt: "Featured clinic moment",
    doctor: true,
    noCaption: true,
  },
  // 3) Tagline slide using different background image
  {
    type: "image",
    src: heroTagline,
    mobileSrc: mobSkin, // Mobile-only replacement image
    alt: "Confidence tagline background",
    doctor: true,
    hideDoctorPhoto: true,
    noCaption: true,
  },
  // 4) Image without caption/gradient (now auto-advances after 4s)
  {
    type: "image",
    src: imgThree,
    alt: "Clinic interior",
    noCaption: true,
    noGradient: true,
  },
  // 5) Homeopathy Dermatology slide
  {
    type: "image",
    src: hemoDermImg,
    alt: "Homeopathy Dermatology",
  },
  // 5) Image with caption (replaced previous video)
  {
    type: "image",
    src: heroFive,
    mobileSrc: mobHair, // Mobile-only replacement image
    alt: "Clinic ambiance",
  },
];

// Per-slide captions (same character counts as original)
// Heading length: ~30 chars, Paragraph length: ~77 chars
const captions = [
  // For each slide above (indexes 0..5)
  {
    h: "Discover Aesthetic Skin & Glow",
    p: "Elevated care with personalised paths. Science-backed, softer, and efficient.",
  },
  null, // Doctor slide uses custom overlay
  null, // Duplicate doctor slide also no caption
  null, // Static image with no caption
  {
    h: "Homeopathy Dermatology",
    p: "Holistic care that aligns wellness with advanced skin treatments for lasting results.",
  },
  {
    h: "Transform Your Hair, Transform Your Look",
    p: "Because silky, healthy hair never goes out of style.",
  },
];

export default function NewHeroSlider({ onBookAppointment }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);
  const timerRef = useRef(null);
  const videoRef = useRef(null);
  // Slide durations (ms)
  const IMAGE_DURATION = 6000; // 6s (slower for smoother viewing)
  const VIDEO_DURATION = 7000; // 7s
  // Inline call-back mini form (slide 1) state and config
  const FORM_ACTION = "https://formsubmit.co/kunalking01grd@gmail.com";
  const [cbName, setCbName] = useState("");
  const [cbPhone, setCbPhone] = useState("");
  const [cbError, setCbError] = useState("");
  const [cbSent, setCbSent] = useState(false);

  // Auto-hide success message after 3 seconds
  useEffect(() => {
    if (cbSent && !cbError) {
      const t = setTimeout(() => setCbSent(false), 3000);
      return () => clearTimeout(t);
    }
  }, [cbSent, cbError]);

  // Track mobile breakpoint (Tailwind 'sm' breakpoint ~640px)
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const handler = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    try {
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    } catch (_) {
      // Safari fallback
      mq.addListener(handler);
      return () => mq.removeListener(handler);
    }
  }, []);

  // Trigger fade-in on slide change for smoother transitions
  useEffect(() => {
    setFadeIn(false);
    const id = requestAnimationFrame(() => setFadeIn(true));
    return () => cancelAnimationFrame(id);
  }, [index]);

  // Advance helpers
  const goNext = () => setIndex((i) => (i + 1) % slides.length);
  const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  // Auto-advance unified: images (4s) or custom duration; videos (7s default). Removed noAuto logic to prevent accidental stops.
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    const current = slides[index];
    if (paused) return;

    const duration =
      current.type === "video"
        ? current.durationMs || VIDEO_DURATION
        : current.durationMs || IMAGE_DURATION;

    if (current.type === "video" && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
    timerRef.current = setTimeout(goNext, duration);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [index, paused]);

  const current = slides[index];
  const cap = captions[index];
  const isDoctorSlide = !!current.doctor;

  // Keyboard navigation (left/right) when not typing in inputs/textarea
  useEffect(() => {
    function onKey(e) {
      const tag = (e.target && e.target.tagName) || "";
      const isTyping = /INPUT|TEXTAREA|SELECT/.test(tag);
      if (isTyping) return;
      if (e.key === "ArrowLeft") {
        setPaused(true);
        goPrev();
      } else if (e.key === "ArrowRight") {
        setPaused(true);
        goNext();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // simple validation and submit for inline callback form
  function validateCb() {
    if (!cbName.trim()) return "Enter your name";
    if (!cbPhone.trim()) return "Enter your phone";
    return "";
  }

  function submitCallback(e) {
    e.preventDefault();
    const v = validateCb();
    if (v) {
      setCbError(v);
      return;
    }
    const fd = new FormData();
    fd.append("Name", cbName);
    fd.append("Phone", cbPhone);
    // FormSubmit controls
    fd.append("_captcha", "false");
    fd.append("_template", "table");
    fd.append("_subject", "Request A Call Back");
    setCbError("");
    setCbSent(true);
    fetch(FORM_ACTION, {
      method: "POST",
      body: fd,
      headers: { Accept: "application/json" },
    })
      .then((res) => {
        if (!res.ok) throw new Error("submit failed");
        setCbName("");
        setCbPhone("");
      })
      .catch(() => {
        setCbSent(false);
        setCbError("Could not send. Please try again.");
      });
  }

  return (
    <section
      className="relative bg-white text-gray-900 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Full-bleed media background with fade-in transition */}
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-700 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        {current.type === "image" ? (
          <img
            src={
              isMobile && current.mobileSrc ? current.mobileSrc : current.src
            }
            alt={current.alt || ""}
            className="w-full h-full object-cover"
            draggable={false}
          />
        ) : (
          <video
            ref={videoRef}
            src={current.src}
            autoPlay
            muted
            playsInline
            controls={false}
            loop={false}
            onEnded={(e) => {
              // Do not loop automatically; keep the last frame when finished.
              e.currentTarget.pause();
            }}
            className="w-full h-full object-cover"
          />
        )}
        {/* gradient overlay (can be disabled per slide); doctor slide uses neutral dark overlay */}
        {!current.noGradient &&
          (isDoctorSlide ? (
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-r from-[#E0A075]/75 via-[#E0A075]/50 to-transparent" />
          ))}
      </div>

      <div
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[56vh] sm:min-h-[65vh] lg:min-h-[70vh] ${
          isDoctorSlide
            ? "flex items-center justify-center"
            : "grid grid-cols-1 lg:grid-cols-2 items-center"
        }`}
      >
        {/* Left: heading + optional inline form overlay on first slide; full-width centered for doctor slide */}
        <div
          className={`py-14 sm:py-16 lg:py-0 z-20 ${
            isDoctorSlide
              ? "w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center text-center gap-6 lg:pr-0"
              : "lg:pr-8"
          }`}
        >
          {/* Show captions when not doctor and not suppressed by slide */}
          {!isDoctorSlide && !current.noCaption && cap && (
            <>
              <h1
                className="leading-tight font-domine font-medium text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[80px] text-white"
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.65)" }}
              >
                {cap.h}
              </h1>
              <p
                className="mt-5 max-w-xl text-white/90 text-base sm:text-lg"
                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.7)" }}
              >
                {cap.p}
              </p>
            </>
          )}

          {/* Doctor overlay on the 5th slide */}
          {isDoctorSlide && (
            <div className="py-2 w-full">
              <div
                className={`flex flex-col ${
                  current.hideDoctorPhoto
                    ? "items-center text-center gap-6"
                    : "lg:flex-row items-center gap-6 sm:gap-8"
                } justify-center`}
              >
                {current.hideDoctorPhoto ? (
                  <div className="max-w-4xl text-center space-y-6">
                    <h2
                      className="font-domine font-medium text-white text-4xl sm:text-5xl md:text-6xl leading-tight"
                      style={{ textShadow: "0 2px 10px rgba(0,0,0,0.65)" }}
                    >
                      Advanced Skin Care & Glow
                    </h2>
                    <div className="w-24 h-1 mx-auto bg-white/70 rounded-full" />
                    <p
                      className="text-white/90 text-lg sm:text-xl md:text-2xl font-light tracking-wide leading-snug max-w-3xl mx-auto"
                      style={{ textShadow: "0 1px 6px rgba(0,0,0,0.55)" }}
                    >
                      Because radiant, healthy skin is for everyone.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="relative">
                      <div className="rounded-full p-1 ring-4 ring-white/90 shadow-2xl">
                        <img
                          src={doctorImg}
                          alt="Dr. Kirti Kothari"
                          className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="max-w-2xl">
                      <h2
                        className="font-domine font-medium text-white text-4xl sm:text-5xl md:text-6xl leading-tight"
                        style={{ textShadow: "0 2px 8px rgba(0,0,0,0.65)" }}
                      >
                        Dr. Kirti Kothari
                      </h2>
                      <p
                        className="mt-2 text-white/90 text-lg sm:text-xl"
                        style={{ textShadow: "0 1px 4px rgba(0,0,0,0.7)" }}
                      >
                        Founder & Lead Cosmetologist
                      </p>
                      <div className="mt-4 space-y-3 text-white/95 text-sm sm:text-base">
                        <div className="max-w-xl">
                          <p className="leading-relaxed bg-black/45 px-4 py-3 rounded-xl shadow-md ring-1 ring-white/10 backdrop-blur-[2px]">
                            Qualified cosmetologist & founder of DSkinova
                            focused on healthy, radiant skin & hair through
                            evidence‑based, personalised care.
                          </p>
                        </div>
                        <div>
                          <a
                            href="tel:+917878867379"
                            className="underline-offset-4 hover:underline"
                          >
                            +91 78788 67379
                          </a>
                        </div>
                        <div>
                          <a
                            href="mailto:dskinova@gmail.com"
                            className="underline-offset-4 hover:underline"
                          >
                            dskinova@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Inline Call-back form when first slide is showing (image-1) */}
          {index === 0 && (
            <div className="mt-8">
              <form
                onSubmit={submitCallback}
                className="bg-black/70 backdrop-blur-sm rounded-2xl sm:rounded-[999px] shadow-lg max-w-full"
                onFocus={() => setPaused(true)}
                onBlur={() => setPaused(false)}
                noValidate
              >
                <div className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-3 px-3 py-3 sm:px-4 sm:py-3">
                  <span className="text-lg sm:text-2xl font-domine text-white whitespace-nowrap px-1 sm:px-2 flex items-center">
                    Request A Call Back
                  </span>
                  <div className="hidden sm:block w-px bg-white/30 my-1" />
                  <div className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-3 flex-1 min-w-0">
                    <input
                      type="text"
                      value={cbName}
                      onChange={(e) => setCbName(e.target.value)}
                      placeholder="Name*"
                      className="bg-transparent border-b border-white/70 outline-none px-2 h-11 text-white placeholder-white/70 flex-1 min-w-0"
                      aria-label="Your name"
                    />
                    <input
                      type="tel"
                      value={cbPhone}
                      onChange={(e) => setCbPhone(e.target.value)}
                      placeholder="Phone*"
                      className="bg-transparent border-b border-white/70 outline-none px-2 h-11 text-white placeholder-white/70 flex-1 min-w-0"
                      aria-label="Your phone"
                    />
                    <button
                      type="submit"
                      className="bg-white hover:bg-gray-100 text-black px-4 sm:px-5 h-11 rounded-xl sm:rounded-full font-semibold whitespace-nowrap w-full sm:w-auto"
                    >
                      Proceed
                    </button>
                  </div>
                </div>
              </form>
              {cbError && (
                <p className="mt-2 text-sm text-red-600">{cbError}</p>
              )}
              {cbSent && !cbError && (
                <p className="mt-2 text-sm text-white">
                  Thanks! We'll call you soon.
                </p>
              )}
            </div>
          )}
        </div>

        {/* Right column placeholder only when not doctor slide */}
        {!isDoctorSlide && <div className="hidden lg:block" />}
      </div>

      {/* Prev/Next arrows */}
      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-between">
        <button
          type="button"
          aria-label="Previous slide"
          className="pointer-events-auto ml-2 sm:ml-3 lg:ml-4 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/35 hover:bg-black/50 text-white backdrop-blur-sm shadow-md transition focus:outline-none focus:ring-2 focus:ring-white/70"
          onClick={goPrev}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next slide"
          className="pointer-events-auto mr-2 sm:mr-3 lg:mr-4 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/35 hover:bg-black/50 text-white backdrop-blur-sm shadow-md transition focus:outline-none focus:ring-2 focus:ring-white/70"
          onClick={goNext}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      {/* Dots (bottom center over hero) */}
      <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2 bottom-6 flex items-center gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === index ? "bg-gray-900 w-6" : "bg-gray-900/50"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
