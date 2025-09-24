import React, { useEffect, useState, useRef } from "react";
import {
  googleReviewsSummary,
  googleReviews,
} from "../data/googleReviewsMock.js";

function Star({ filled = false, className = "w-4 h-4" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.52.442c.499.04.701.663.321.988l-4.204 3.57a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L7.988 20.508a.562.562 0 01-.84-.61l1.285-5.386a.563.563 0 00-.182-.557l-4.204-3.57a.563.563 0 01.321-.988l5.52-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
}

function StarsRow({ value = 5 }) {
  const rounded = Math.round(value);
  return (
    <div className="inline-flex items-center gap-1 text-yellow-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} filled={i < rounded} className="w-5 h-5" />
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  const initials = React.useMemo(() => {
    if (!review.author) return "?";
    const parts = String(review.author).trim().split(/\s+/);
    return parts
      .map((p) => p[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  }, [review.author]);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 h-full flex flex-col">
      {/* Header with user info */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#e9f1ff] text-[#1a73e8] flex items-center justify-center font-semibold text-base">
            {initials}
          </div>
          <div>
            <div className="font-semibold text-gray-900 text-base leading-tight">
              {review.author}
            </div>
            <div className="text-sm text-gray-500">{review.date}</div>
          </div>
        </div>
        <div className="text-[#1a73e8] shrink-0" aria-label="Google icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-6 h-6"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303C33.731,32.657,29.277,36,24,36c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C33.64,6.053,29.082,4,24,4C12.955,4,4,12.955,4,24 s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            />
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C33.64,6.053,29.082,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            />
            <path
              fill="#4CAF50"
              d="M24,44c5.192,0,9.899-1.986,13.469-5.229l-6.211-5.238C29.308,35.091,26.715,36,24,36 c-5.247,0-9.708-3.356-11.289-7.824l-6.543,5.04C9.49,39.556,16.227,44,24,44z"
            />
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-1.246,3.657-4.39,6.447-8.303,7.617l6.211,5.238 C32.976,41.205,44,36,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            />
          </svg>
        </div>
      </div>

      {/* Stars and verification */}
      <div className="flex items-center gap-3 mb-4">
        <StarsRow value={review.rating || 5} />
        {review.verified && (
          <span className="inline-flex items-center text-sm text-[#1a73e8] font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 mr-1"
            >
              <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l.613 1.475a1.35 1.35 0 001.011.82l1.58.26c1.164.192 1.636 1.616.832 2.45l-1.12 1.146a.75.75 0 00-.363.557l.293 1.565c.216 1.153-1.003 2.033-2.033 1.48l-1.41-.742a.75.75 0 00-.586 0l-1.41.742c-1.03.553-2.249-.327-2.033-1.48l.293-1.565a.75.75 0 00-.363-.557L6.752 8.215c-.804-.834-.332-2.258.832-2.45l1.58-.26a1.35 1.35 0 001.011-.82l.613-1.475z" />
            </svg>
            Verified
          </span>
        )}
      </div>

      {/* Review text */}
      <p className="text-gray-700 leading-relaxed text-base flex-1">
        {review.text}
      </p>
    </div>
  );
}

export default function GoogleReviewsAutoSlider({
  reviews = [],
  autoSlideInterval = 4000,
  showControls = true,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  // Use provided reviews or default mock data
  const reviewsData = reviews.length > 0 ? reviews : googleReviews;

  // Responsive slide calculation
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Calculate total slides based on screen size
  const reviewsPerSlide = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(reviewsData.length / reviewsPerSlide);

  // Auto slide functionality
  useEffect(() => {
    if (isAutoPlaying && !isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
      }, autoSlideInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, isPaused, totalSlides, autoSlideInterval]);

  // Manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000); // Resume auto-play after 5 seconds
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section
      className="relative z-10 bg-gradient-to-r from-[#f7e6d9] from-60% to-white py-16 border-t border-b border-gray-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="uppercase tracking-widest text-sm text-gray-500 font-medium mb-3">
            {googleReviewsSummary.label}
          </div>
          <div className="flex items-center justify-center gap-4 mb-3">
            <StarsRow value={googleReviewsSummary.rating} />
            <span className="text-3xl font-bold text-gray-900">
              {googleReviewsSummary.rating.toFixed(1)}
            </span>
          </div>
          <div className="text-gray-600 text-lg mb-4">Based on 50+ reviews</div>
          <div className="flex items-center justify-center gap-3 opacity-90">
            <div className="w-8 h-8">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303C33.731,32.657,29.277,36,24,36c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C33.64,6.053,29.082,4,24,4C12.955,4,4,12.955,4,24 s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C33.64,6.053,29.082,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.192,0,9.899-1.986,13.469-5.229l-6.211-5.238C29.308,35.091,26.715,36,24,36 c-5.247,0-9.708-3.356-11.289-7.824l-6.543,5.04C9.49,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.246,3.657-4.39,6.447-8.303,7.617l6.211,5.238 C32.976,41.205,44,36,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
            </div>
            <div className="text-xl font-semibold text-gray-900">Google</div>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Reviews Grid - Shows 1 review on mobile, 3 reviews on desktop */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  {isMobile ? (
                    // Mobile: Show 1 review per slide
                    <div className="flex justify-center px-2">
                      {reviewsData
                        .slice(slideIndex * 1, slideIndex * 1 + 1)
                        .map((review, reviewIndex) => (
                          <div
                            key={`${slideIndex}-${reviewIndex}`}
                            className="h-80 w-full max-w-sm"
                          >
                            <ReviewCard review={review} />
                          </div>
                        ))}
                    </div>
                  ) : (
                    // Desktop: Show 3 reviews per slide (existing logic)
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-2">
                      {reviewsData
                        .slice(slideIndex * 3, slideIndex * 3 + 3)
                        .map((review, reviewIndex) => (
                          <div
                            key={`${slideIndex}-${reviewIndex}`}
                            className="h-80 md:h-96"
                          >
                            <ReviewCard review={review} />
                          </div>
                        ))}

                      {/* Fill empty slots if less than 3 reviews */}
                      {Array.from({
                        length: Math.max(
                          0,
                          3 -
                            reviewsData.slice(
                              slideIndex * 3,
                              slideIndex * 3 + 3
                            ).length
                        ),
                      }).map((_, emptyIndex) => (
                        <div
                          key={`empty-${slideIndex}-${emptyIndex}`}
                          className="h-80 md:h-96 invisible"
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {showControls && totalSlides > 1 && (
            <>
              <button
                onClick={goToPrev}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-200 flex items-center justify-center"
                aria-label="Previous reviews"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-200 flex items-center justify-center"
                aria-label="Next reviews"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-white"
                >
                  <path d="M8.25 4.5L15.75 12l-7.5 7.5" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Dots Indicator */}
        {showControls && totalSlides > 1 && (
          <div className="flex items-center justify-center gap-3 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentIndex === index
                    ? "bg-[#1a73e8] scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
