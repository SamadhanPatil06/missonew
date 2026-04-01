"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'

const keyPointsData = [
    {
        id: "01",
        title: "3D bone model with fast and easy CT image data",
        image: "/2.webp",
        gradientFrom: "#7F73DC",
        gradientTo: "#AB77D9"
    },
    {
        id: "02",
        title: "Saves time in  OR",
        image: "/4.webp",
        gradientFrom: "#7F73DC",
        gradientTo: "#AB77D9"
    },
    {
        id: "03",
        title: "Improved workspace check",
        image: "/personalized3.webp",
        gradientFrom: "#7F73DC",
        gradientTo: "#AB77D9"
    },
]

const missokey = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        // Change content at 2.5 seconds (50% of animation, when elements are fully slid out)
        const changeTimeout = setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % keyPointsData.length)
        }, 2500)

        const interval = setInterval(() => {
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % keyPointsData.length)
            }, 2500)
        }, 5000)

        return () => {
            clearInterval(interval)
            clearTimeout(changeTimeout)
        }
    }, [])

    const currentPoint = keyPointsData[currentIndex]

    return (
      <div>
        <div className='bg-black pb-20 '>
            <div className='text-center text-5xl pb-3'>
                <span className='text-white '>Key </span>
                <span className='text-[#9747FF] text-'>Points</span>
            </div>
            
            <div className="relative h-full ">
                <div className="grid grid-cols-8 gap-10 items-center">

                    <div className="col-span-3 w-48 md:w-auto relative z-50 ">
                        <div className="relative h-[25vh] md:h-[40vh] rounded-tr-[30px] rounded-br-[30px] md:rounded-tr-[50px] md:rounded-br-[50px] border-r border-t border-b border-white/35 backdrop-blur-[30px] shadow-2xl flex items-center bg-white/5">
                            <div className="border-l-4 border-l-[#333333] pl-6 ml-6 text-content">
                                <h3 className="text-white text-[17px] md:text-4xl font-light pr-4 leading-snug left-box transition-all duration-700">
                                    {currentPoint.title}
                                </h3>

                                <div className="opacity-20 text-white text-[55px] md:text-[100px] font-semibold -mt-6 md:-mt-14 transition-all duration-700">
                                    {currentPoint.id}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-5 ml-[3%] md:-ml-[20%] right-box">
                        <div className="h-[65vh] md:h-[80vh] rounded-tl-[25px] rounded-bl-[25px] md:rounded-tl-[75px] md:rounded-bl-[75px] relative overflow-hidden transition-all duration-700"
                            style={{
                                backgroundImage: `linear-gradient(to bottom, ${currentPoint.gradientFrom}, ${currentPoint.gradientTo})`
                            }}>
                            <div className="relative h-full w-full">
                                <div className="flex justify-center items-center relative h-[65vh] md:h-[80vh] image-container">
                                    <div className="relative h-full w-full transition-all duration-700">
                                        <Image 
                                            src={currentPoint.image} 
                                            alt={currentPoint.title} 
                                            fill 
                                            className="object-contain" 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style jsx global>{`
        .image-container img {
          animation: slideImage 5s ease-in-out infinite;
        }

        .text-content {
          animation: slideText 5s ease-in-out infinite;
        }

        @keyframes slideImage {
          0% {
            transform: translateX(0);
          }
          30% {
            transform: translateX(600px);
          }
          50% {
            transform: translateX(600px);
          }
          80% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes slideText {
          0% {
            transform: translateX(0);
          }
          30% {
            transform: translateX(-418px);
          }
          50% {
            transform: translateX(-418px);
          }
          80% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
        </div>
        </div>
    )
}

export default missokey