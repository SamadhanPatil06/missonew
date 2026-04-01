const Missomark = () => {
  return (
    <div className="relative bg-black min-h-screen overflow-hidden">

      {/* Marquee */}
      <div className="pt-18 bg-black">
        <div className="text-[#F9BD00] backdrop-blur-2xl bg-white/30 overflow-hidden py-3 h-13 w-full flex items-center">
          <div className="animate-marquee whitespace-nowrap">
            1 Year of MISSO. Powered by innovation, trusted by surgeons.
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative w-full h-[90vh]">

        {/* Video as background */}
        <video
          src="/a.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

          <h1 className="text-white uppercase font-extralight tracking-[2px]
                         text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight">

            <span>Versatility In</span>
            <br />
            <span className="font-semibold tracking-[4px]">
              Innovation
            </span>
          </h1>

          <p className="text-zinc-300 mt-6 text-base sm:text-lg md:text-2xl font-extralight max-w-3xl">
            Future-ready robotics from India: Innovation meeting global expectations.
          </p>

        </div>
      </div>
    </div>
  );
};

export default Missomark;
