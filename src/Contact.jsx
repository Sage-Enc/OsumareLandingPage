import React from 'react'
import RoundedButton from './components/RoundedButton'

function Contact() {
  return (
    <div>
      <div className='mx-auto text-base text-center lg:my-40'>
        <p className='text-lg font-bold px-1 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl md:mb-2 lg:mb-4 xl:mb-6'>Connect with Our Digital Marketing Experts</p>
        <p className='text-base md:text-lg lg:text-xl xl:text-2xl px-6'>Reach Out for Tailored Strategies and Results-Driven Solutions.</p>
        <p className='text-base md:text-lg lg:text-xl xl:text-2xl px-6'>Lets Elevate Your Online Presence Together</p>
        
        <div className='w-11/12 border-2 border-gray-200 mx-auto rounded-lg my-5 px-10 shadow-lg text-left py-4 md:w-3/5'>
          <form action="" className='flex flex-col md:justify-between text-sm md:text-base lg:text-lg xl:text-xl'>
            <div className='flex flex-col md:flex-row'>
              <div id="formLeft" className='md:w-1/2 md:px-6'>
                <label htmlFor="" className='font-bold'>Name</label>
                <br />
                <input type="text" required className='w-full border-2 border-gray-400 rounded-lg px-2 my-2 ' placeholder='Enter your name' />
                <br />
                <label htmlFor="" className='font-bold'>Phone</label>
                <br />
                <input type="tel" required className='w-full border-2 border-gray-400 rounded-lg px-2 my-2' placeholder='Enter your number' />
                <br />
                <label htmlFor="" className='font-bold'>Email</label>
                <br />
                <input type="text" required className='w-full border-2 border-gray-400 rounded-lg px-2 my-2' placeholder='Enter your email address' />
              </div>
              <div id="formRight" className='md:w-1/2 md:px-6'>
                <label htmlFor="" className='font-bold'>Message</label>
                <br />
                <textarea name="" id="" cols="30" rows="7" required className='w-full border-2 border-gray-400 rounded-lg px-2 my-2' placeholder='Enter your message'></textarea>
              </div>
            </div>
            <RoundedButton value="Get Started" text="text-white" btnColor="bg-blue-600" bdrColor="border-blue-600 border-2 sm:mt-10" customCss="text-base md:text-lg lg:text-xl xl:text-2xl mt-2 mb-5 sm:w-3/5 mx-auto md:w-1/4" />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact