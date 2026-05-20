import React from 'react'
import Image from 'next/image'

const missovideogallery = () => {
  return (
    <div className="relative  bg-black ">
      <Image src="/video_gallery_desktop.png" alt="ggf" fill className='relative h-full object-cover bg-center rounded-t-[50px] ' />
      <div className='relative z-50 pt-8'>
        <h3 className='text-white text-center text-[35px] md:text-[60px] font-medium pb-4'>Video Gallery</h3>
      </div>
      <div className='max-w-300 mx-auto relative z-50 px-6  grid grid-cols-1 md:grid-cols-2 gap-6 pb-16'>
        <div className='flex h-87.5 md:h-125 rounded-[25px] overflow-hidden'>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/acEk7WaI7YU?si=eVOmUpkf5iuef9wm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
        <div className='flex h-87.5 md:h-125  rounded-[25px] overflow-hidden'>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Eg6yt1qLqVY?si=_ShCjSGHMFkttGoU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
      </div>
    </div>



  )
}

export default missovideogallery