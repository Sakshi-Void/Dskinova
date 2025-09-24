import React from "react";

// Helper: convert a YouTube shorts or video URL to an embeddable URL
function toEmbedUrl(url) {
  try {
    // Normalize and parse
    const u = new URL(url);
    // shorts: https://www.youtube.com/shorts/<id>
    if (u.pathname.startsWith("/shorts/")) {
      const id = u.pathname.split("/")[2];
      return `https://www.youtube.com/embed/${id}?modestbranding=1&rel=0&controls=1&autoplay=0&loop=1&playsinline=1`;
    }
    // watch: https://www.youtube.com/watch?v=<id>
    if (u.pathname === "/watch" && u.searchParams.get("v")) {
      const id = u.searchParams.get("v");
      return `https://www.youtube.com/embed/${id}?modestbranding=1&rel=0&controls=1&autoplay=0&loop=1&playsinline=1`;
    }
    return url;
  } catch {
    return url;
  }
}

export default function YouTubeReels({
  shorts = [],
  channelUrl = "",
  title = "Our YouTube Shorts",
}) {
  // Remove duplicates and empty strings
  const uniqueShorts = Array.from(new Set(shorts.filter(Boolean)));

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <h2 className="text-center text-[28px] sm:text-[32px] font-semibold text-[#7a1121]">
          {title}
        </h2>

        <div className="mt-8 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6">
          {uniqueShorts.map((url, idx) => (
            <div key={idx} className="relative aspect-[9/16] w-full overflow-hidden rounded-md bg-black shadow">
              <iframe
                className="h-full w-full"
                src={toEmbedUrl(url)}
                title={`YouTube short ${idx + 1}`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ))}
        </div>

        {channelUrl && (
          <div className="mt-8 flex justify-center">
            <a
              href={channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#c98963] px-6 sm:px-8 py-3 text-white text-sm sm:text-base font-medium hover:bg-[#be7f58] transition-colors"
              aria-label="Visit our YouTube channel"
            >
              Visit our YouTube Channel
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
