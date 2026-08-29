"use client"
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

const keyPointsData = [
  {
    id: "01",
    title: "Saves time in or",
    image: "/images/1.webp",
    gradientFrom: "#7F73DC",
    gradientTo: "#AB77D9"
  },
  {
    id: "02",
    title: "Quick  calibration, verification & registration",
    image: "/images/2.webp",
    gradientFrom: "#7F73DC",
    gradientTo: "#AB77D9"
  },
  {
    id: "03",
    title: "Improved workspace check",
    image: "/images/3.webp",
    gradientFrom: "#7F73DC",
    gradientTo: "#AB77D9"
  },
  {
    id: "04",
    title: "3D bone model with fast and easy CT image data",
    image: "/images/4.webp",
    gradientFrom: "#7F73DC",
    gradientTo: "#AB77D9"
  },
]

const missokey = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const textRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const animateContent = () => {
      const tl = gsap.timeline()

      // Hold visible for 3 seconds first
      tl.to({}, { duration: 3 })

        // Step 1: Slide out - Text LEFT ko, Image RIGHT ko (opposite directions)
        .to(textRef.current, {
          x: -600,   // Text LEFT ko jayega
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut"
        }, "slideOut")
        .to(imageRef.current, {
          x: 800,  // Image RIGHT ko jayega (opposite)
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => {
            // Content change after slide out
            setCurrentIndex((prev) => (prev + 1) % keyPointsData.length)
          }
        }, "slideOut")

        // Step 2: Slide in - Text LEFT se, Image RIGHT se (opposite directions)
        .fromTo(textRef.current,
          {
            x: -600,  // Text LEFT se start
            opacity: 0
          },
          {
            x: 0,     // Center pe aaye
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            immediateRender: false
          }, "slideIn"
        )
        .fromTo(imageRef.current,
          {
            x: 600,   // Image RIGHT se start (opposite)
            opacity: 0
          },
          {
            x: 0,     // Center pe aaye
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            immediateRender: false
          }, "slideIn"
        )

      return tl
    }

    // Start the animation loop
    const mainTimeline = gsap.timeline({ repeat: -1 })
    mainTimeline.add(animateContent())

    return () => {
      mainTimeline.kill()
    }
  }, [])

  const currentPoint = keyPointsData[currentIndex]

  return (
    <div>
      <div className='bg-black pb-20 '>
        <div className='text-center text-[50px] py-5 font-bold'>
          <span className='text-white '>Key </span>
          <span className='text-[#9747FF]'>Points</span>
        </div>

        <div className="relative h-full ">
          <div className="grid grid-cols-8 gap-10 items-center">

            <div className="col-span-3 w-48 md:w-auto relative z-50 ">
              <div className="relative h-[25vh] md:h-[40vh] rounded-tr-[30px] rounded-br-[30px] md:rounded-tr-[50px] md:rounded-br-[50px] border-r border-t border-b border-white/35 backdrop-blur-[30px] shadow-2xl flex items-center bg-white/5 overflow-hidden">
                <div className="border-l-4 border-l-[#333333] pl-6 ml-6">
                  <div ref={textRef}>
                    <h3 className="text-white text-[17px] md:text-4xl font-light pr-4 leading-snug">
                      {currentPoint.title}
                    </h3>

                    <div className="opacity-20 text-white text-[55px] md:text-[100px] font-semibold -mt-6 md:-mt-14">
                      {currentPoint.id}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-5 ml-[3%] md:-ml-[20%]">
              <div className="h-[65vh] md:h-[80vh] rounded-tl-[25px] rounded-bl-[25px] md:rounded-tl-[75px] md:rounded-bl-[75px] relative overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(to bottom, ${currentPoint.gradientFrom}, ${currentPoint.gradientTo})`
                }}>
                <div className="relative h-full w-full">
                  <div ref={imageRef} className="flex justify-center items-center relative h-[65vh] md:h-[80vh]">
                    {currentPoint.image && (
                      <div className="relative h-full w-full">
                        <Image
                          src={currentPoint.image}
                          alt={currentPoint.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default missokey