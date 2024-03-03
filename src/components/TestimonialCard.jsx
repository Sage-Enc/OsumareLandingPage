import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function TestimonialCard(prop) {
  return (
    <div>
      <div
        id="card"
        className="flex flex-col shadow-2xl rounded-3xl sm:flex-row md:h-11/12"
      >
        <div className="sm:w-1/2 p-2">
          <iframe
          className="w-full rounded-lg h-full"
            src={prop.ReviewerVideo}
          ></iframe>
        </div>
        <dir className="sm:w-1/2" >
          <div id="ReviewerDetails" className="flex items-center pr-2">
            <img
              src={prop.ReviewerImg}
              alt="Reviewer-Image"
              className="rounded-full w-1/6 mr-4"
            />
            <p className="font-bold mr-4 text-center text-base md:text-lg lg:text-2xl xl:text-3xl px-2">{prop.ReviewerName}</p>
            <FontAwesomeIcon
              icon={faQuoteRight}
              style={{ color: "#1f9eff" }}
              className="text-4xl"
            />
          </div>
          <div id="Review">
            <p className="text-justify w-4/5 text-base md:text-lg lg:text-2xl xl:text-3xl px-2">{prop.Review}</p>
          </div>
        </dir>
      </div>
    </div>
  );
}

export default TestimonialCard;
