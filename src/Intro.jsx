import React from 'react'
import RoundedButton from './components/RoundedButton'

function Intro() {
  return (
    <div className='sm:pt-20 lg:mt-20'>
      <div className='my-10 text-center'>
       <p className='text-lg font-bold px-1 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl '>Real Estate-Focused Digital Marketing</p>
       <div className='sm:flex sm:mt-10 sm:px-10'>
        <div id="introleft" className='flex justify-center sm:items-center sm:w-1/2'>
          <img src="./grow-image.png" alt="image-of-woman-supporting-growth" className='w-2/3 sm:w-11/12 lg:w-3/4' />
        </div>
        <div className="introright flex flex-col items-center sm:w-1/2 sm:text-justify sm:py-14 px-4 md:items-start md:mt-10">
          <p className='font-bold text-lg w-2/3 text-center md:text-justify sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl sm:w-full'>
            Unlock the Potential of Digital Real Estate Excellence
          </p>
          <p className='text-base md:text-lg lg:text-xl xl:text-2xl mt-2 mb-5 xl:my-8'>
            At Osumare,  we understand the real estate landscape and demands a digital presence that aligns with the intricacies of property marketing. Our range of specialized service is meticulously designed to catapult your brand's success in the ever-evolving digital property market.
          </p>
          <RoundedButton value="Get Started" text="text-white" btnColor="bg-blue-600" bdrColor="border-blue-600 border-2 sm:w-full sm:mt-10" customCss="text-base md:text-lg lg:text-xl xl:text-2xl mt-2 mb-5 md:mt-0 w-1/3 md:w-1/2 lg:mt-28 xl:mt-20" />
        </div>
       </div>
      </div>
    </div>
  )
}

export default Intro