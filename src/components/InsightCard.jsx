import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function InsightCard(prop) {
  return (
    <div className={`${prop.customCss} flex justify-start border-2 border-gray-300 rounded-lg h-28 w-11/12 my-0.5`}>
        <div className='flex justify-center items-center bg-gray-100 rounded-full my-auto w-1/6 h-fit mx-5 py-3 sm:py-2'>
            <FontAwesomeIcon icon={prop.cardIcon} style={{color: "#1f9eff",}} className='w-2/5 h-8' />
        </div>
        <div className='w-5/6 my-auto sm:my-0 sm:flex sm:flex-col sm:justify-center'>
            <p className='text-base md:text-lg lg:text-xl xl:text-2xl font-bold w-5/6'>
                {prop.cardTitle}
            </p>
            <p className='text-sm md:text-base lg:text-lg xl:text-xl w-5/6'>
                {prop.cardDetail}
            </p>
        </div>
    </div>
  )
}

export default InsightCard