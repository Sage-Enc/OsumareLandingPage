import React from 'react'
import RoundedButton from './components/RoundedButton'

function Conclusion() {
  return (
    <div className='flex flex-col items-center my-10 sm:my-28 lg:my-48'>
      <p className='text-center w-3/4 text-base sm:w-3/5 sm:text-xl md:w-3/5 md:text-2xl lg:w-1/2 lg:text-3xl xl:text-4xl font-bold'>
        Your Peace of Mind
      </p>
      <p className='text-center w-3/5 text-xs mt-3 sm:text-base lg:text-xl xl:text-3xl font-normal text-slate-600 xl:my-6'>
        Through our conversion-focused strategies, we ensure that property seekers are not just visitors, but engaged prospects ready to make their next move in the real estate market
      </p>
      <RoundedButton value="Get Started" text="text-white" btnColor="bg-blue-600" bdrColor="border-blue-600 border-2" customCss="w-1/3 text-xs sm:text-sm md:text-base md:w-1/4 lg:text-lg xl:py-4 xl:text-2xl my-5" />
    </div>
  )
}

export default Conclusion