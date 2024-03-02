import React from 'react'
import RoundedButton from './components/RoundedButton'

function Header() {
  return (
    <>
      <div className='flex justify-around items-center w-full h-28'>
        <div className='w-1/2 flex justify-around sm:w-1/3 md:w-1/4'>
            <img src='/osumare-logo.png' alt="Osumare-logo" className='w-1/2 '/>
        </div>
        <div className='w-1/2 h-1/6 flex items-center justify-around md:justify-end'>
          <RoundedButton value="Contact" text="text-black" btnColor="bg-white" bdrColor="border-slate-900 border-[1px]" customCss="w-1/2 sm:w-1/3 lg:text-lg" />
        </div>
      </div>
    </>
  )
}

export default Header