import React from 'react'

function PicServiceCard(prop) {
  return (
    <div className={`m-5 sm:w-full`}>
        <div className='text-center flex flex-col items-center w-10/12 mx-auto '>
            <div className='bg-gray-100 rounded-full w-1/4 h-1/4 py-6 my-2 sm:w-2/3'>
                <img src={prop.CardImg} alt={prop.ImgAlt} className='w-1/2 h-1/2 mx-auto' />
            </div>
            <p className='text-base md:text-lg lg:text-xl xl:text-2xl font-bold w-5/6 my-2'>
                {prop.CardTitle}
            </p>
            <p className='text-sm md:text-base lg:text-lg xl:text-xl w-11/12'>
                {prop.CardDetail}
            </p>
        </div>
    </div>
  )
}

export default PicServiceCard