import Image from 'next/image'

const missoresources = () => {

    return (

        <div className='relative bg-black py-10 md:py-16'>

            <div className='max-w-300 mx-auto px-4 md:px-6'>

                <div className='text-left text-[32px] md:text-[60px] font-bold leading-tight mb-8 md:mb-12'>

                    <span className='font-normal text-white'>Re</span>

                    <span className='text-[#A961B5]'>sources</span>

                </div>



                <div className='overflow-x-auto md:overflow-visible pb-10 scrollbar-hide'>

                    <div className='flex md:grid md:grid-cols-2 gap-6 md:gap-15 min-w-max md:min-w-0'>

                        {/* For Patient Card */}

                        <div className='w-80 md:w-auto'>

                            <div className='rounded-[30px] md:rounded-[50px] border-[#ffffff80] border px-6 md:px-12.5 pt-5 pb-6 text-center space-y-4 md:space-y-5 h-full'>

                                <h3 className='text-[24px] md:text-[35px] text-white'>For Patient</h3>

                                <div className='relative h-48 md:h-65.25 w-full'>

                                    <Image

                                        src="/Group509.webp"

                                        alt="Patient Resources"

                                        fill

                                        className='rounded-[20px] md:rounded-[35px] object-cover'

                                    />

                                </div>

                                <div className='flex flex-col justify-center items-center mt-4 md:mt-6'>

                                    <a

                                        href="https://www.misso.ai/pdf/for_resources/patientEducationBrochure.pdf"

                                        className='flex items-center space-x-2 md:space-x-3.25 hover:opacity-80 transition-opacity'

                                    >

                                        <p className='text-[16px] md:text-[22px] text-white font-light'>

                                            Patient Education Brochure

                                        </p>

                                        <svg

                                            xmlns="http://www.w3.org/2000/svg"

                                            fill="none"

                                            viewBox="0 0 24 24"

                                            strokeWidth={1.5}

                                            stroke="#ffffff"

                                            className="w-4 h-4 md:w-5 md:h-5"

                                        >

                                            <path

                                                strokeLinecap="round"

                                                strokeLinejoin="round"

                                                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"

                                            />

                                        </svg>

                                    </a>

                                </div>

                            </div>

                        </div>

                        {/* For HCP Card */}

                        <div className='w-80 md:w-auto'>

                            <div className='rounded-[30px] md:rounded-[50px] border-[#ffffff80] border px-6 md:px-12.5 pt-5 pb-6 text-center space-y-4 md:space-y-5 h-full'>

                                <h3 className='text-[24px] md:text-[35px] text-white'>For HCP</h3>

                                <div className='relative h-48 md:h-65.25 w-full'>

                                    <Image

                                        src="/Group508.webp"

                                        alt="HCP Resources"

                                        fill

                                        className='rounded-[20px] md:rounded-[35px] object-cover'

                                    />

                                </div>

                                <div className='flex flex-col justify-center items-center mt-4 md:mt-6'>

                                    <a

                                        href="https://www.misso.ai/pdf/for_resources/patientEducationBrochure.pdf"

                                        className='flex items-center space-x-2 md:space-x-3.25 hover:opacity-80 transition-opacity'

                                    >

                                        <p className='text-[16px] md:text-[22px] text-white font-light'>

                                            Product Brochure

                                        </p>

                                        <svg

                                            xmlns="http://www.w3.org/2000/svg"

                                            fill="none"

                                            viewBox="0 0 24 24"

                                            strokeWidth={1.5}

                                            stroke="#ffffff"

                                            className="w-4 h-4 md:w-5 md:h-5"

                                        >

                                            <path

                                                strokeLinecap="round"

                                                strokeLinejoin="round"

                                                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"

                                            />

                                        </svg>

                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
              </div>.
            </div>

            )

}

export default missoresources