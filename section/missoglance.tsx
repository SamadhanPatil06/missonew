import React from 'react'
import Image from 'next/image'

const missoglance = () => {
    return (
        <div className='relative h-screen bg-black py-6'>
            <div className='max-w-300 mx-auto px-6'>
                <div className='text-right md:text-left text-[40px] md:text-[60px] font-bold leading-normal md:leading-25'>
                    <span className='text-white font-light'>At a</span>
                    <br className="md:hidden block"/>
                    <span className='text-[#A961B5] mx-3'>Glance</span>
                </div>
                <div className='pt-6'>
                    {/* TODO: Convert MOV to MP4 for better performance */}
                    <video src="Low_MISSO Teaser Video (1).mp4" className='h-[70vh] rounded-[65px] min-h-full min-w-full object-cover' autoPlay loop muted playsInline>
                    </video>
                </div>
                {/* <div className='max-w-300 mx-auto text-center text-[60px] font-bold leading-25'>
                     <span className='font-normal text-[46px] text-white'>Key </span>
                    <span className='text-[46px] text-[#9747FF]'>Points</span>
                    <div className="relative h-full w-full">
                        <div className="grid grid-cols-8 gap-10 items-center">

                            <div className="col-span-8 md:col-span-3 relative z-50">
                                <div
                                    className="relative h-[25vh] md:h-[40vh] rounded-tr-[30px] rounded-br-[30px] md:rounded-tr-[50px] md:rounded-br-[50px] border-r border-t border-b border-white/35 backdrop-blur-[30px] shadow-2xl flex items-center bg-white/5" >
                                    <div className="border-l-[4px] border-l-[#333333] pl-6 ml-6">
                                        <h3 className="text-white text-[17px] md:text-4xl font-light pr-4 leading-snug">
                                            3D bone model with fast and easy CT image data
                                        </h3>

                                        <div className="opacity-20 text-white text-[55px] md:text-[100px] font-semibold -mt-6 md:-mt-14">
                                            04
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-8 md:col-span-5 md:-ml-[20%]">
                                <div
                                    className="h-[65vh] md:h-[80vh]  rounded-tl-[25px] rounded-bl-[25px] md:rounded-tl-[75px] md:rounded-bl-[75px] bg-gradient-to-b from-[#7F73DC] to-[#AB77D9] relative overflow-hidden"
                                >
                                    <Image src="" alt="" fill className="" priority />
                                </div>
                            </div>

                        </div>
                    </div> 
                </div>
                <div className="relative h-full">
                    <div className='grid grid-cols-8 gap-10 items-center'>
                        <div className='relative col-span-3 w-auto z-50'>
                        </div>
                    </div>
            </div> */}              
            </div>
        </div>
    )
}

export default missoglance