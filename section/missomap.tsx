import React from 'react'
import Image from 'next/image'
const missomap = () => {
    return (
        <div className='bg-black relative '>
            <div className='max-w-300 mx-auto px-6 '>
                <div className='text-center text-zinc-100 text-[22px]  md:text-[40px] font-extralight py-10 '>
                    <h3>Explore Our Global Presence</h3>
                    <h3 className='font-medium'>Mapping Our Worldwide Footprint</h3>
                    
                         <Image src="/images/map.svg" alt="World Map" width={1280} height={720} />
                     
                </div>
            </div>
        </div>
    )
}

export default missomap
