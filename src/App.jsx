import React from 'react'
import Header from './Header.jsx'
import Banner from './Banner.jsx'
import Intro from './Intro.jsx'
import Services from './Services.jsx'
import Insights from './Insights.jsx'
import Strategies from './Strategies.jsx'
import InquiryConversion from './InquiryConversion.jsx'
import ExpertAction from './ExpertAction.jsx'
import Conclusion from './Conclusion.jsx'
import Testimonial from './Testimonial.jsx'
import Faq from './Faq.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'

function App() {
  return (
    <div>
        <Header />
        <Banner />
        <Intro />
        <Services />
        <Insights />
        <Strategies />
        <InquiryConversion />
        <ExpertAction />
        <Conclusion />
        <Testimonial />
        <Faq />
        <Contact />
        <Footer />
        <p className='text-center text-sm my-2 sm:my-4'>&#169;	2023 Osumare. All rights reserved.</p>
    </div>
  )
}

export default App