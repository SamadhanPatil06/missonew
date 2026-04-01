import React from 'react'
import Image from 'next/image'


const missoFeatures = () => {
    return (
        <div className='relative min-h-screen bg-black'>
            <div className='max-w-7xl mx-auto px-6 space-y-18.75'>
                <div className='text-center text-[30px] md:text-[60px] font-bold leading-25'>
                    <span className='text-[#A961B5]'>Feature & Benefits</span>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-7.5 pb-10'>
                    <div className='col-span-1 w-full h-75 md:h-100 bg-white px-3.5 md:px-7 rounded-[25px]'>
                        <div className='grid grid-cols-10 h-full w-full'>
                            <div className='col-span-4'>
                                <div className='relative py-13'>
                                    <Image src="/Agile2.webp" alt="hhhh" height={202} width={400} className='object-cover ' />
                                </div>
                            </div>
                            <div className='col-span-6 relative flex flex-col justify-center pb-10 '>
                                <div className='h-22.5 md:h-37.5 relative'>
                                    <div className='absolute text-neutral-500/20 text-[75px] md:text-[150px] font-semibold leading-tight'>
                                        01
                                    </div>
                                    <div className='absolute top-[60%] left-0 -translate-y-[60%] text-black text-[25px] md:text-[50px] font-bold'>
                                        Agile
                                    </div>
                                </div>
                                <div>
                                    <ul className="list-disc pl-6 text-black font-light ">
                                        <li className='text-[11px] md:text-[16px]'>
                                            MISSO Robotic system offers real-time assistance to surgeons during procedures.
                                        </li>
                                        <li className='text-[11px] md:text-[16px]'>
                                            Surgeons can make precise adjustments and fine-tune implant placement with unparalleled accuracy.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 w-full h-75 md:h-100 bg-[#222222] px-7 rounded-[25px]'>
                        <div className='grid grid-cols-10 h-full w-full'>
                            <div className='col-span-6 relative flex flex-col justify-center pb-10 '>
                                <div className='h-22.5 md:h-37.5 relative'>
                                    <div className='absolute text-neutral-500/20 text-[75px] md:text-[150px] font-semibold leading-tight'>
                                        02
                                    </div>
                                    <div className='absolute top-[5%] left-0 translate-y-[60%] text-white text-[25px] md:text-[50px] font-bold'>
                                        Safe
                                    </div>
                                </div>
                                <div>
                                    <ul className="list-disc pl-6 text-black font-light">
                                        <li className='text-[11px] md:text-[16px] text-white'>
                                            The MISSO Robotic System ensures safety by halting if bone movement exceeds 4mm.
                                        </li>
                                        <li className='text-[11px] md:text-[16px] text-white'>
                                            Its autonomy reduces the need for human intervention, minimizing infection risks.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-span-4'>
                                <div className='relative py-13'>
                                    <Image src="/Safe2.webp" alt="hhhh" height={202} width={400} className='object-fit' />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-span-1 w-full h-75 md:h-100 bg-[#222222] px-7 rounded-[25px]'>
                        <div className='grid grid-cols-10 h-full w-full'>
                            <div className='col-span-6 relative flex flex-col justify-center pb-10 '>
                                <div className='h-22.5 md:h-37.5 relative'>
                                    <div className='absolute text-neutral-500/20 text-[75px] md:text-[150px] font-semibold leading-tight'>
                                        04
                                    </div>
                                    <div className='absolute top-[60%] left-0 -translate-y-[60%] text-white text-[25px] md:text-[50px] font-bold'>
                                        Personalized
                                    </div>
                                </div>
                                <div>
                                    <ul className="list-disc pl-6 text-black font-light">
                                        <li className='text-[11px] md:text-[16px] text-white'>
                                            MISSO robotic system utilizes 3D CT scans for personalized surgical plans.
                                        </li>
                                        <li className=' text-[11px] md:text-[16px] text-white'>
                                            It ensures optimal implant placement and alignment tailored to each patient's anatomy.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-span-4'>
                                <div className='relative ml-8 h-full py-5'>
                                    <Image src="/personalized3.webp" alt="hhhh" height={170} width={400} className='object-fit' />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-span-1 w-full h-75 md:h-100 bg-white px-7 rounded-[25px]'>
                        <div className='grid grid-cols-10 h-full w-full'>
                            <div className='col-span-4'>
                                <div className='relative '>
                                    <Image src="/precise3.webp" alt="hhhh" height={170} width={400} className='object-cover ' />
                                </div>
                            </div>
                            <div className='col-span-6 relative flex flex-col justify-center pb-10 '>
                                <div className='h-22.5 md:h-37.5 relative'>
                                    <div className='absolute text-neutral-500/20 text-[75px] md:text-[150px] font-semibold leading-tight'>
                                        03
                                    </div>
                                    <div className='absolute top-[60%] left-0 -translate-y-[60%] text-black text-[25px] md:text-[50px] font-bold'>
                                        Precise
                                    </div>
                                </div>
                                <div>
                                    <ul className="list-disc pl-6 text-black font-light">
                                        <li className='text-[11px] md:text-[16px]'>
                                            MISSO robotic system provides sub-millimeter precise cutting.
                                        </li>
                                        <li className='text-[11px] md:text-[16px]'>
                                            It employs computer-assisted navigation and robotic assistance for accurate alignment and shaping of knee joint components.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default missoFeatures