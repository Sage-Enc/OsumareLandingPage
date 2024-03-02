import React from 'react'
import PicServiceCard from './components/PicServiceCard'

function ExpertAction() {
  return (
    <div>
      <div className='my-16'>
        <p className='text-lg font-bold px-1 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center'>
          Our Expertise in Action
        </p>
        <div id='picServices' className='flex flex-col md:my-20'>
          <div className='flex flex-col sm:flex-row'>
            <PicServiceCard CardTitle="Effective CTAs" CardDetail="See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency." CardImg="cta.png" ImgAlt="Icon-for-CTA" />
            <PicServiceCard CardTitle="Conversion Optimized Landing Pages" CardDetail="Explore a case study where our landing page optimization increased property lead conversion rates by 30%" CardImg="lp.png" ImgAlt="Landing-Page-Icon" />
          </div>
          <div className='flex flex-col sm:flex-row'>
            <PicServiceCard CardTitle="Trust Building with Social Proof" CardDetail="Discover how leveraging client testimonials boosted buyer's confidence, leading to higher conversion rates for a property development project." CardImg="product.png" ImgAlt="Holding-Cube-Icon" />
            <PicServiceCard CardTitle="Mobile-First Success" CardDetail="Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real-estate agency." CardImg="medal.png" ImgAlt="Medal-Icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpertAction