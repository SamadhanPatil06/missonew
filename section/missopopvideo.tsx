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
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/70 px-4">
      <div
        className={`relative bg-white rounded-xl p-2 max-w-4xl w-full h-100 shadow-2xl flex flex-col items-center
        transition-transform duration-[2000ms] ease-in-out
        ${zoom ? "scale-100" : "scale-0"}`}
      >
        <div className="w-full h-full flex items-center justify-center relative">
          {!showVideo ? (
            <>
              <img
                src="/video_thumbnail.png"
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
              <button
                onClick={handlePlayVideo}
                className="absolute inset-0 flex items-center justify-center"
              >
               <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="rgba(0,0,0,0.5)"></circle><polygon points="32,25 60,40 32,55" fill="white"></polygon></svg>
              </button>
            </>
          ) : (
            <video
              src="/Low_MISSO Teaser Video (1).mp4"
              controls
              autoPlay
              className="w-full h-full object-cover rounded-lg"
            />
          )}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 z-20 bg-gray-800/55 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl hover:bg-gray-800"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default Missopopvideo;
