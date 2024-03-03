import React from 'react'
import RoundedButton from './components/RoundedButton'

function Banner() {
  return (
    <div className=''>
      <div className='glowBlue right-0 w-1/2'></div>
      <div className='flex justify-center flex-col items-center bg-[url("/cityscape.png")] bg-no-repeat sm:bg-cover lg:mt-6 z-[-1]'>
        <p className='text-center w-3/4 text-base sm:w-3/5 sm:text-2xl md:w-3/5 md:text-3xl lg:w-1/2 lg:text-4xl xl:text-5xl z-[1]'>
          Elevate <span className='text-blue-600 font-semibold'>Real Estate Success</span> with Osumare's Digital Expertise
        </p>
        <p className='text-center w-2/3 text-xs mt-3 sm:text-base lg:text-xl xl:text-3xl xl:my-6 z-[1]'>
          Tailored Solutions for Thriving in the Digital Real Estate Landscape
        </p>
        <br />
        <RoundedButton value="Get Started" text="text-white" btnColor="bg-blue-600" bdrColor="border-blue-600 border-2" customCss="w-1/3 text-xs sm:text-sm md:text-base md:w-1/4 lg:text-lg xl:py-4 xl:text-3xl  z-[1]" />
        <img src="Header-image.png" alt="Header-image" className='w-1/2 mt-14 sm:mt-10 sm:-mb-14 md:-mb-16 lg:-mb-24'/>
      </div>
    </div>
  )
}

export default Banner