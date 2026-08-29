"use client";

import { useEffect, useState } from "react";

const Missopopvideo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // 3 second baad modal open
    setTimeout(() => {
      setIsOpen(true);

      // open hone ke turant baad zoom
      setTimeout(() => setZoom(true), 10);
    }, 3000);
  }, []);

  const handleClose = () => {
    setZoom(false); // zoom out
    setShowVideo(false); // video band karo

    setTimeout(() => {
      setIsOpen(false);
    }, 2000); // thoda aur time rakha zoom out ke liye
  };

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black px-4 sm:px-8 md:px-12 lg:px-16">
      <div
        className="relative bg-white rounded-xl p-2 w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] shadow-2xl flex flex-col items-center"
        style={{
          transform: zoom ? "scale(1)" : "scale(0)",
          transition: "transform 2s cubic-bezier(0.4, 0, 0.2, 1)",
          height: "auto",
          aspectRatio: "16/9"
        }}
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 bg-gray-800 opacity-55 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 z-20"
          aria-label="Close video modal"
          style={{ zIndex: 20 }}
        >
          ×
        </button>

        <div className="w-full h-full flex items-center justify-center cursor-pointer relative rounded-lg overflow-hidden">
          {!showVideo ? (
            <>
              <img
                src="/images/video_thumbnail.png"
                alt="MISSO Journey so far"
                className="w-full h-full object-cover"
              />
              <div
                onClick={handlePlayVideo}
                className="absolute inset-0 flex items-center justify-center"
              >
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform hover:scale-110"
                >
                  <circle cx="40" cy="40" r="40" fill="rgba(0,0,0,0.6)" />
                  <polygon points="32,25 60,40 32,55" fill="white" />
                </svg>
              </div>
            </>
          ) : (
            <video
              src="/video/Low_MISSO Teaser Video (1).mp4"
              controls
              autoPlay
              className="w-full h-full object-contain rounded-lg"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Missopopvideo;
