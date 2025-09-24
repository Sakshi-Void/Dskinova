import React, { useMemo, useRef, useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import HeroTwo from "./HeroTwo.jsx";

// Build gallery datasets
const newHeroVideos = [
  "https://www.pexels.com/download/video/7581711/", // doctor feature
  "https://www.pexels.com/download/video/5524244/",
  "https://www.pexels.com/download/video/4264904/",
];

const providedVideos = [
  "https://www.pexels.com/download/video/4772531/",
  "https://www.pexels.com/video/relaxation-clinic-doctor-medicine-4772526/",
  "https://www.pexels.com/video/woman-getting-her-hair-done-by-a-hairdresser-4800225/",
  "https://www.pexels.com/video/woman-sitting-on-orange-chair-while-getting-her-hair-blow-dried-4800217/",
  "https://www.pexels.com/download/video/4783394/",
  "https://www.pexels.com/video/cosmetologist-using-a-device-on-a-patient-4824011/",
  "https://www.pexels.com/video/a-patient-receiving-a-facial-care-treatment-7581433/",
  "https://www.pexels.com/video/customer-looking-at-the-mirror-7754527/",
  "https://www.pexels.com/video/woman-getting-her-nails-done-4783402/",
];

const providedImages = [
  // Some Pexels links are page URLs (not direct images); we’ll treat them as external links.
  {
    kind: "external-image",
    url: "https://www.pexels.com/photo/a-cosmetologist-doing-beauty-treatment-to-a-woman-4586751/",
  },
  {
    kind: "external-image",
    url: "https://www.pexels.com/photo/a-woman-consulting-with-a-cosmetologist-doctor-4586740/",
  },
  {
    kind: "external-image",
    url: "https://www.pexels.com/photo/cosmetologist-injecting-a-woman-in-a-face-with-a-syringe-4586708/",
  },
  {
    kind: "image",
    url: "https://images.pexels.com/photos/6954012/pexels-photo-6954012.jpeg",
  },
  {
    kind: "image",
    url: "https://images.pexels.com/photos/7755525/pexels-photo-7755525.jpeg",
  },
  {
    kind: "image",
    url: "https://images.pexels.com/photos/4586753/pexels-photo-4586753.jpeg",
  },
  {
    kind: "image",
    url: "https://images.pexels.com/photos/21316247/pexels-photo-21316247.jpeg",
  },
  {
    kind: "image",
    url: "https://images.pexels.com/photos/8558253/pexels-photo-8558253.jpeg",
  },
];

function MediaCard({ item, onOpen }) {
  const isVideo = item.kind === "video";
  const isExternalImage = item.kind === "external-image";
  const vRef = useRef(null);
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white/50 shadow-sm ring-1 ring-black/5">
      {isVideo && (
        <div
          className="w-full block cursor-pointer relative"
          onClick={() => onOpen(item)}
          onMouseEnter={() => vRef.current && vRef.current.play()}
          onMouseLeave={() => {
            if (vRef.current) {
              vRef.current.pause();
              vRef.current.currentTime = 0;
            }
          }}
          aria-label="Open video"
        >
          <div className="aspect-video w-full overflow-hidden bg-black">
            <video
              ref={vRef}
              src={item.url}
              muted
              playsInline
              loop
              preload="metadata"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
          {/* Play icon overlay */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="transition opacity-90 group-hover:opacity-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/85 text-gray-900 shadow ring-1 ring-black/10 flex items-center justify-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}

      {item.kind === "image" && (
        <button
          type="button"
          className="w-full block"
          onClick={() => onOpen(item)}
          aria-label="Open image"
        >
          <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
            <img
              src={`${item.url}?auto=compress&cs=tinysrgb&w=1200`}
              alt="Gallery"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </button>
      )}

      {isExternalImage && (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="aspect-[4/3] w-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-100 text-gray-700">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/5 ring-1 ring-black/10 mb-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14l4-4h12a2 2 0 0 0 2-2Z" />
                </svg>
              </div>
              <p className="text-sm">View photo on Pexels</p>
            </div>
          </div>
        </a>
      )}
    </div>
  );
}

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState(null); // { kind, url, index }

  const media = useMemo(() => {
    const toDirectPexelsVideo = (url) => {
      if (!/pexels\.com\//.test(url)) return url;
      if (url.includes("/download/")) return url;
      // Try to convert page URL to download URL using trailing numeric ID
      const m = url.match(/\/video\/(?:[^/]*-)?(\d+)\/?/);
      if (m && m[1]) {
        return `https://www.pexels.com/download/video/${m[1]}/`;
      }
      return url;
    };
    const toDirectPexelsPhoto = (url) => {
      if (!/pexels\.com\//.test(url)) return null;
      // Matches /photo/...-<id>/
      const m1 = url.match(/\/photo\/.*-(\d+)\/?/);
      const id = m1 && m1[1] ? m1[1] : null;
      if (id)
        return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg`;
      return null;
    };
    const mkVideo = (url) => ({ kind: "video", url: toDirectPexelsVideo(url) });
    const list = [
      ...newHeroVideos.map(mkVideo),
      ...providedVideos.map(mkVideo),
      ...providedImages.map((it) => {
        if (it.kind === "external-image") {
          const direct = toDirectPexelsPhoto(it.url);
          return direct ? { kind: "image", url: direct } : it;
        }
        return it;
      }),
    ];
    return list;
  }, []);

  const open = (item) => setLightbox(item);
  const close = () => setLightbox(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroTwo
        title="Gallery"
        description="A glimpse into our clinic, treatments, and happy moments."
      />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <h2 className="font-domine text-2xl sm:text-3xl text-[#b37556]">
            Featured Moments
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Mixed photos and short video clips from our work and clinic
            ambiance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {media.map((m, idx) => (
            <MediaCard key={idx} item={m} onOpen={open} />
          ))}
        </div>
      </main>

      {/* Lightbox */}
      {lightbox && (lightbox.kind === "video" || lightbox.kind === "image") && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              className="absolute -top-3 -right-3 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-900 shadow"
              aria-label="Close"
            >
              ×
            </button>
            {lightbox.kind === "video" ? (
              <div className="w-full aspect-video bg-black rounded-lg overflow-hidden">
                <video
                  src={lightbox.url}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <div className="w-full bg-black rounded-lg overflow-hidden">
                <img
                  src={`${lightbox.url}?auto=compress&cs=tinysrgb&w=1920`}
                  alt="Gallery"
                  className="w-full h-auto"
                />
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
