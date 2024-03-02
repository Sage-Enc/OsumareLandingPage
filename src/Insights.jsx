import React from 'react'
import InsightCard from './components/InsightCard'
import { faArrowTrendUp, faBolt, faFileCircleCheck, faShieldVirus } from '@fortawesome/free-solid-svg-icons'

function Insights() {
  return (
    <div>
      <div className='flex flex-col items-center my-10 lg:my-20'>
        <p className='text-lg text-center font-bold px-1 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>Navigating Real Estate's Digital Landscape</p>
        <p className='text-center text-base md:text-lg lg:text-xl xl:text-2xl mt-2 mb-5'>Insights for Real Estate Marketing Advantage</p>
        <div id='InsightBanner' className='sm:flex'>
          <div id='InsightImage' className='flex justify-center sm:w-1/2 sm:items-center'>
            <img src="expert.png" alt="An-Expert-Teaching-Insights" className='w-2/3 sm:w-full' />
          </div>
          <div id="InsightCards" className='w-full flex flex-col items-center my-10 sm:w-1/2'>
            <InsightCard
              cardIcon={faArrowTrendUp} 
              cardTitle="Market Trends Analysis"
              cardDetail="Predictive insight to Guide Real Estate Strategies."
              className="" />
            <InsightCard
              cardIcon={faBolt} 
              cardTitle="Targeted Buyer Persona"
              cardDetail="Understand and Connect with your Ideal Property Buyers." />
            <InsightCard
              cardIcon={faShieldVirus} 
              cardTitle="Competitor Insights"
              cardDetail="Stand out in the Property Market with Informed Strategies." />
            <InsightCard
              cardIcon={faFileCircleCheck} 
              cardTitle="Visual Content Appeal"
              cardDetail="Captive Buyers with Appealing Visuals and Immersive Experience." />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Insights