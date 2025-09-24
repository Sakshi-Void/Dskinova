import React, { useEffect, useRef, useState } from "react";

// Import videos so Vite bundles them from the project root
import v1 from "../../Videos/insta-video/1.mp4";
import v2 from "../../Videos/insta-video/2.mp4";
import v3 from "../../Videos/insta-video/3.mp4";
import v4 from "../../Videos/insta-video/4.mp4";

const videos = [v1, v2, v3, v4];

export default function InstaReels() {
  const videoRefs = useRef([]);
  const [muted, setMuted] = useState(videos.map(() => true));

  // Ensure all videos auto-play when in view; handle browser auto-play policies
  useEffect(() => {
    const playAll = async () => {
      for (const vid of videoRefs.current) {
        if (!vid) continue;
        try {
          vid.muted = true;
          await vid.play();
        } catch (e) {
          // Some browsers block autoplay; try muted and play on user interaction
          vid.muted = true;
          vid.play().catch(() => {});
        }
      }
    };
    playAll();
  }, []);

  const toggleMute = (i) => {
    const v = videoRefs.current[i];
    if (!v) return;
    const next = !muted[i];
    v.muted = next;
    // Ensure it keeps playing after toggle
    if (v.paused) {
      v.play().catch(() => {});
    }
    setMuted((arr) => arr.map((m, idx) => (idx === i ? next : m)));
  };

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <h2 className="text-center text-[28px] sm:text-[32px] font-semibold text-[#7a1121]">
          Our Instagram <span className="text-[#7a1121]">_dskinova</span>
        </h2>

        <div className="mt-8 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6">
          {videos.map((src, idx) => (
            <div
              key={idx}
              className="relative aspect-[9/16] w-full overflow-hidden rounded-md bg-black shadow"
            >
              <video
                ref={(el) => (videoRefs.current[idx] = el)}
                src={src}
                className="h-full w-full object-cover"
                autoPlay
                muted={muted[idx]}
                loop
                playsInline
                controls={false}
                preload="metadata"
              />
              <button
                type="button"
                onClick={() => toggleMute(idx)}
                className="absolute bottom-2 right-2 inline-flex items-center justify-center w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                aria-label={muted[idx] ? "Unmute video" : "Mute video"}
                aria-pressed={!muted[idx]}
              >
                {muted[idx] ? (
                  // volume-off icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M3 10v4a1 1 0 0 0 1 1h3l3.293 3.293A1 1 0 0 0 12 18v-12a1 1 0 0 0-1.707-.707L7 8H4a1 1 0 0 0-1 1Z" />
                    <path d="M16.95 7.05a.75.75 0 1 1 1.06 1.06L16.12 10l1.89 1.89a.75.75 0 1 1-1.06 1.06L15.06 11.06l-1.89 1.89a.75.75 0 0 1-1.06-1.06L14 10l-1.89-1.89a.75.75 0 1 1 1.06-1.06L15.06 8.94l1.89-1.89Z" />
                  </svg>
                ) : (
                  // volume-on icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M3 10v4a1 1 0 0 0 1 1h3l3.293 3.293A1 1 0 0 0 12 18V6a1 1 0 0 0-1.707-.707L7 8H4a1 1 0 0 0-1 1Z" />
                    <path d="M15 8a1 1 0 0 1 1.707-.707 6 6 0 0 1 0 9.414A1 1 0 1 1 15.293 15.3a4 4 0 0 0 0-6.6A1 1 0 0 1 15 8Z" />
                    <path d="M17.5 5.5a1 1 0 0 1 1.707-.707 9 9 0 0 1 0 13.414A1 1 0 0 1 17.5 17.5a7 7 0 0 0 0-10.001 1 1 0 0 1 0-1.999Z" />
                  </svg>
                )}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://www.instagram.com/_dskinova/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#c98963] px-6 sm:px-8 py-3 text-white text-sm sm:text-base font-medium hover:bg-[#be7f58] transition-colors"
            aria-label="Follow us on Instagram"
          >
            Follow us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
