import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import TestimonialCard from "./components/TestimonialCard";

const data = [
  {
    ReviewerVideo: "https://www.youtube.com/embed/nnEZVVC4Ap8",
    ReviewerImg: "ashneer.png",
    ReviewerName: "Ashneer Grover",
    Review: "We as a start-up company approached Osumare to launch our product online. THey on-point delivered the best result. For us, Osumare stands to be the best digital marketing.",
  },
  {
    ReviewerVideo: "https://www.youtube.com/embed/f2kNGLAAUdY",
    ReviewerImg: "aman.png",
    ReviewerName: "Aman Gupta",
    Review: "It was a great experience working with Osumare.",
  },
  {
    ReviewerVideo: "https://www.youtube.com/embed/xxtmt62-Pq0",
    ReviewerImg: "Peyush.png",
    ReviewerName: "Peyush Bansal",
    Review: "It was a great experience working with Osumare.",
  },
];

function Testimonial() {
  let obj = data[0];

  // let sliderRef = useRef(null);
  // const next = () => {
  //   sliderRef.slickNext();
  // };
  // const previous = () => {
  //   sliderRef.slickPrev();
  // };

  // const settings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  return (
    <div>
      <div className="">
        <p className="text-lg font-bold px-1 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center">
          What Our Pharma Partners Say
        </p>
        <p className="text-center text-base md:text-lg lg:text-2xl xl:text-3xl px-2">
          Driving Transformations, One Brand at a Time
        </p>

        <div id="TestimonialContainer" className="w-3/4 mx-auto">
          <div className="mt-10">
            {/* <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              {data.map((obj) => (
                <div key={obj.ReviewerName}>
                  <TestimonialCard
                    ReviewerVideo={obj.ReviewerVideo}
                    ReviewerImg={obj.ReviewerImg}
                    ReviewerName={obj.ReviewerName}
                    Review={obj.Review}
                    className="" />
                </div>
              ))}
            </Slider> */}
            
            <TestimonialCard
                    ReviewerVideo={obj.ReviewerVideo}
                    ReviewerImg={obj.ReviewerImg}
                    ReviewerName={obj.ReviewerName}
                    Review={obj.Review}
                    className="" />
          </div>
          {/* <div style={{ textAlign: "center" }}>
            <button className="button" onClick={previous}>
              Previous
            </button>
            <button className="button" onClick={next}>
              Next
            </button>
          </div> */}
          <div className="my-2 flex justify-around sm:justify-center md:mt-6 lg:mt-8 xl:mt-10">
            <button className="rounded-full border-2 border-blue-400 p-3 sm:mx-10">
              <FontAwesomeIcon
                icon={faArrowLeft}
                style={{ color: "#1f9eff" }}
                className="text-4xl"/>
            </button>
            <button className="rounded-full border-2 border-blue-400 p-3 sm:mx-10">
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "#1f9eff" }}
                className="text-4xl"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
