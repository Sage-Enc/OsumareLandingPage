import React from 'react'
import PicServiceCard from './components/PicServiceCard'

function InquiryConversion() {
  return (
    <div>
      <div className='md:my-20'>
        <p className='text-lg font-bold px-1 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center'>
          Driving Inquiries to Conversion
        </p>
        <div id='picServices' className='flex flex-col sm:px-10 md:my-10 lg:my-20'>
          <div className='flex flex-col sm:flex-row'>
            <PicServiceCard CardTitle="Call-to-Action Optimization" CardDetail="Our carefully crafted CTAs guide potential buyers to the property journey, enhancing engagement and conversion rates." CardImg="cubepointer.png" ImgAlt="Pressing-A-Button" />
            <PicServiceCard CardTitle="Landing Page Efficiency" CardDetail="Tailored Landing Pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission." CardImg="landing-page.png" ImgAlt="Landing-Page-Icon" />
          </div>
          <div className='flex flex-col sm:flex-row'>
            <PicServiceCard CardTitle="Social Proof Utilization" CardDetail="Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action" CardImg="cube.png" ImgAlt="Holding-Cube-Icon" />
            <PicServiceCard CardTitle="Mobile Friendly Experience" CardDetail="With a Responsive design approach, our strategies ensures a seamless browsing experience across all devices. This responsiveness enhances engagement and conversion by accomodating the prefernces of on-the-go property seekers." CardImg="virtual-reality.png" ImgAlt="User-Scrolling-Icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default InquiryConversion