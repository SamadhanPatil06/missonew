import React from 'react'
import Image from 'next/image'


const missoglobal = () => {
  return (
    <div className="min-h-screen relative bg-black bg-[url('/images/mask.png')] bg-bottom bg-cover flex items-center overflow-x-hidden">
      <div className='w-full max-w-7xl mx-auto py-6 px-4'>
      <div className='grid grid-cols-1 md:grid-cols-5 items-center gap-6 md:gap-10'>
          <div className='text-white col-span-3 pb-0 md:space-y-12'>
            <div className='text-white font-light py-5 px-2 md:px-6'>
              <div className='text-3xl md:text-[48px] leading-tight md:leading-[77.49px]'>
                <span className='font-light'>Global</span>
                <span className='font-semibold ml-2'>Inspiration</span>
              </div>
              <div className='text-[22px] md:text-[48px] pl-[25%] md:pl-[9%] leading-tight md:leading-[77.49px]'>
                <span className='font-light'>Transcending</span>
                <span className='font-semibold ml-2'>Borders</span>
              </div>
            </div>
            <div className='font-extralight text-base text-[13px] md:text-[25px] text-justify leading-relaxed md:leading-10 px-2 md:px-6'>
              The MISSO Robotic System is a cutting-edge surgical technology that aids surgeons with personalized pre-planning and precise cutting for consistent joint replacement results.
            </div>
          </div>
          <div className='relative col-span-2 flex justify-center'>
            <Image src="/updatedImage.png" alt="hhh" height={500} width={400} className="h-auto max-h-[50vh] md:max-h-[70vh] w-auto max-w-full" />
          </div>
        </div>
      </div>
    </div >
  )
}

export default missoglobal