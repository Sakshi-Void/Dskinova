import React from "react";
import GoogleReviewsAutoSlider from "../components/GoogleReviewsAutoSlider";

export default function ReviewsDemo() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            See what our customers are saying about our services
          </p>
        </div>
      </section>

      {/* Auto Slider Reviews Section */}
      <GoogleReviewsAutoSlider autoSlideInterval={5000} showControls={true} />

      {/* Additional Info */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Features of the Reviews Slider
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-blue-50">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Auto-Playing</h3>
              <p className="text-gray-600">
                Automatically slides every 5 seconds
              </p>
            </div>
            <div className="p-6 rounded-lg bg-green-50">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Responsive</h3>
              <p className="text-gray-600">
                Shows 1, 2, or 3 reviews based on screen size
              </p>
            </div>
            <div className="p-6 rounded-lg bg-purple-50">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Interactive</h3>
              <p className="text-gray-600">
                Manual controls with pause on hover
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
