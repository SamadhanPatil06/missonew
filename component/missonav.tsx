"use client"
import Image from 'next/image'
import { useState } from 'react'

const missonav = () => {
  const [isnav, setIsnav] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems = ['Home', 'At a Glance', 'Features & Benefits', 'Video Gallery', 'Resources', 'Contact Us']

  return (
    <>
      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 bg-black z-[999] w-[70%] lg:hidden transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-[100%]'}`}>
        <div className="flex flex-col h-full relative  overflow-hidden">
          <div className="flex justify-between items-center px-4 pt-8 pb-4">
            <Image src="/misso_logo.avif" alt="MISSO Logo" height={45} width={140} />
            <div className="w-10 h-10 rounded-full bg-purple-600/30 flex items-center justify-center cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#ffffff">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>
          <ul className="flex flex-col space-y-6   text-white text-base px-4 mt-6 relative z-10">
            {menuItems.map((item) => (
              <li key={item} className="cursor-pointer hover:text-[#F9BD00] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                {item}
              </li>
            ))}
          </ul>
          <div className="absolute bottom-0 left-0 w-full h-[50%]">
            <Image src="/2.webp" alt="" fill className="object-contain object-bottom" />
          </div>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className='w-full bg-black/30 fixed top-0 left-0 right-0 z-999 px-3'>
        <nav className='max-w-287.5 flex justify-between items-center py-3 mx-auto md:px-3 rounded-full backdrop-blur-[5px]'>
          <Image src="/misso_logo.avif" alt="MISSO Logo" height={40} width={126} />
          
          {isnav && (
            <ul className="hidden lg:flex space-x-12 text-[14px]">
              {menuItems.map((item) => (
                <li key={item} className="text-white cursor-pointer hover:text-[#F9BD00] transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          )}

          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" 
            className={`hidden lg:block cursor-pointer transform ${isnav ? 'rotate-0' : 'rotate-180'}`} 
            onClick={() => setIsnav(!isnav)}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>

          <button className="lg:hidden flex flex-col gap-1.5" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>
      </div>
    </>
  )
}

export default missonav
