import React from 'react'
import Accordion from './components/Accordion'

const data = [
  {
    id: 1,
    ques: "How does Osumare measure campaign success?",
    ans: "We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into our strategies are driving growth for your brand.",
  },
  {
    id: 2,
    ques: "How does Osumare measure campaign success?",
    ans: "We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into our strategies are driving growth for your brand.",
  },
  {
    id: 3,
    ques: "How does Osumare measure campaign success?",
    ans: "We believe in measurable results. Our data-driven approach means that every campaign's performance is tracked, analyzed and refined for optimal outcomes. We provide regular reports that detail key metrics, giving you clear insights into our strategies are driving growth for your brand.",
  }
]

function Faq() {
  return (
    <div>
      <div className='text-center mx-auto w-5/6 my-20 lg:my-20'>
        <p className='text-lg font-bold px-1 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>Frequently Asked Questions</p>
        <p className='text-center w-2/3 text-xs mt-3 sm:text-base lg:text-xl xl:text-3xl xl:my-6 mx-auto '>Pinpoint Your audience with precision, ensuring your marketing research reach those most likely to engage with your brand.</p>

        <div className='my-6 shadow-2xl md:w-2/3 mx-auto'>
          {data.map((d,index)=>(
            <Accordion ques={d.ques} ans={d.ans} key={index} id={d.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faq