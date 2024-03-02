import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function TestimonialCard(prop) {
  return (
    <div>
      <div
        id="card"
        className="flex flex-col border-2 border-gray-400 rounded-lg"
      >
        <div>
          <iframe
          className="w-full"
            src={prop.ReviewerVideo}
          ></iframe>
        </div>
        <dir>
          <div id="ReviewerDetails" className="flex items-center">
            <img
              src={prop.ReviewerImg}
              alt="Reviewer-Image"
              className="rounded-full w-1/6 mr-4"
            />
            <p className="text-base font-bold mr-4">{prop.ReviewerName}</p>
            <FontAwesomeIcon
              icon={faQuoteRight}
              style={{ color: "#1f9eff" }}
              className="text-4xl"
            />
          </div>
          <div id="Review">
            <p className="text-justify w-4/5">{prop.Review}</p>
          </div>
        </dir>
      </div>
    </div>
  );
}

export default TestimonialCard;
