import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

function Accordion(prop) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className="py-2 px-0.5">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className={`flex justify- items-center text-base w-full sm:py-4 shadow-sm hover:bg-blue-500 ${ accordionOpen? "bg-blue-500 text-white shadow-lg shadow-blue-600": "bg-white text-black"}`}
      >
        <span className="w-5/6 text-justify ml-2 text-xs sm:text-base lg:text-lg xl:text-2xl">{prop.id}. {prop.ques}</span>
        {accordionOpen ? <FontAwesomeIcon icon={faChevronUp} className="w-1/6" /> : <FontAwesomeIcon icon={faChevronDown} className="w-1/6" />}
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden w-11/12 text-justify ml-2 text-xs sm:text-sm lg:text-lg xl:text-xl">{prop.ans}</div>
      </div>
    </div>
  );
}

export default Accordion;
