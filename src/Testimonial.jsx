import React, { useRef } from "react";
import Slider from "react-slick";
import TestimonialCard from "./components/TestimonialCard";

const data = [
  {
    ReviewerVideo: "https://www.youtube.com/embed/nnEZVVC4Ap8",
    ReviewerImg: "ashneer.png",
    ReviewerName: "Ashneer Grover",
    Review: "It was a great experience working with Osumare.",
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
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="">
        <p className="font-bold text-lg text-center">
          What Our Pharma Partners Say
        </p>
        <p className="text-base text-center">
          Driving Transformations, One Brand at a Time
        </p>

        <div id="TestimonialContainer" className="w-3/4 mx-auto">
          <div className="mt-10">
            <Slider
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
            </Slider>
          </div>
          <div style={{ textAlign: "center" }}>
            <button className="button" onClick={previous}>
              Previous
            </button>
            <button className="button" onClick={next}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
