import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ServiceCard(prop) {
  return (
    <div className='w-1/2 h-11/12'>
        <div className='flex flex-col h-full items-center rounded-lg bg-white text-center w-11/12 mx-auto pb-8'>
            <div className='bg-gray-100 rounded-full flex justify-center mt-4 mb-6 p-4 w-4/12'>
                <FontAwesomeIcon icon={prop.cardIcon} style={{color: "#1f9eff",}} className='w-fit h-8' />
            </div>
            <p className='text-base md:text-lg lg:text-xl xl:text-2xl font-bold w-5/6'>
                {prop.cardTitle}
            </p>
            <p className='text-sm md:text-base lg:text-lg xl:text-xl w-11/12'>
                {prop.cardDetail}
            </p>
        </div>
    </div>
  )
}

export default ServiceCard