import React from 'react'
import Image from 'next/image'
import { url } from 'inspector'

const missocontactform = () => {
    return (
        <div className=' bg-black relative bg-cover bg-center' style={{ backgroundImage: "url(/contact_desktop.png)" }}>
            <div className='max-w-300 mx-auto px-6 pb-20 pt-10'>
                <div className='text-left md:text-center text-[32px] md:text-[46px] font-bold leading-25 text-[#A961B5]'>
                    Contact <span className='text-white font-normal'>Us</span>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='space-y-2'>
                        <label htmlFor="hh" className='text-white'>Full Name:
                            <span className='text-red-600 text-[20px] font-normal'>*</span>
                        </label>
                        <input className="h-14 bg-transparent rounded-lg backdrop-blur-[30px] outline-none px-4 text-white font-light text-[16px] border border-white/50 w-full" placeholder="Type here..."></input>
                    </div>
                    <div className='space-y-2'>
                        <label htmlFor="hh" className='text-white'>Contact Number:
                            <span className='text-red-600 text-[20px] font-normal'>*</span>
                        </label>
                        <input className="h-14 bg-transparent rounded-lg backdrop-blur-[30px] outline-none px-4 text-white font-light text-[16px] border border-white/50 w-full" placeholder="Type here...."></input>
                    </div>
                    <div className='space-y-2'>
                        <label htmlFor="hh" className='text-white'>Email:
                            <span className='text-red-600 text-[20px] font-normal'>*</span>
                        </label>
                        <input className="h-14 bg-transparent rounded-lg backdrop-blur-[30px] outline-none px-4 text-white font-light text-[16px] border border-white/50 w-full" placeholder="Type here..."></input>
                    </div>
                    <div className='space-y-2'>
                        <label htmlFor="hh" className='text-white'>Message:
                            <span className='text-red-600 text-[20px] font-normal'>*</span>
                        </label>
                        <textarea className="h-40 bg-transparent rounded-lg backdrop-blur-[30px] outline-none px-4 bg-opacity-25 text-white font-light text-[16px] border border-white/50 w-full" placeholder="Type here..."></textarea>
                    </div>
                </div>
                <div className='text-center mt-20'>
                        <button className='text-white font-light text-[14px] disabled:opacity-50 w-30 h-10.75 bg-black rounded-lg px-4 '>
                         Submit
                        </button>

                    </div>
            </div>
        </div>
    )
}

export default missocontactform