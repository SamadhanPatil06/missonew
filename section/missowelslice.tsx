"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'


const missowelslice = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        autoplaySpeed:2000,
        speed:1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
    };
    return (
        <div className='bg-black'>
            <div className='grid grid-cols-1 md:grid-cols-5 items-center pb-27.5'>
                <div className='col-span-3 relative h-117.5 w-full'>
                    <div className='flex flex-col h-full w-full overflow-hidden'>
                        <Slider {...settings} className='w-full h-117.5 overflow-hidden'>
                            <div className='relative w-full h-117.5 text-white'>
                                <Image src="/bookNowSlider1.webp" alt="ggg" fill className="" />
                            </div>
                            <div className='relative w-full h-117.5 text-white'>
                                <Image src="/bookNowSlider2.webp" alt="ggg" fill className="" />
                            </div>
                            <div className='relative w-full h-117.5 text-white'>
                                <Image src="/bookNowSlider3.webp" alt="ggg" fill className="" />
                            </div>
                            <div className='relative w-full h-117.5 text-white'>
                                <Image src="/bookNowSlider4.webp" alt="ggg" fill className="" />
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className='col-span-2 px-12.5 md:px-7.5 overflow-hidden'>
                    <div className='space-y-13 mt-6 md:mt-0 mb-12.5 text-center md:text-left '>
                        <div className='space-y-13'>
                            <div className='text-[25px] font-medium text-left'>
                                <div className='text-white'>
                                    <span className='text-[#E3B028]'> Welcome </span>to the future of medical innovation!
                                </div>
                            </div>
                        </div>
                        <div className='text-white font-light text-[14px] md:text-[18px]'>
                            <p>Experience the future of healthcare with
                                <span className='font-medium'>  MISSO </span> the cutting-edge medical robotic system designed to enhance precision and efficiency in surgical procedures.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default missowelslice