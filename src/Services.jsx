import React from "react";
import {
  faChartSimple,
  faArrowPointer,
  faUserGroup,
  faBook,
  faNewspaper,
  faChartLine,
  faBrain,
  faFilm,
} from "@fortawesome/free-solid-svg-icons";
import ServiceCard from "./components/ServiceCard";
import RoundedButton from "./components/RoundedButton";

function Services() {
  return (
    <>
      <div className="bg-gray-100 flex flex-col items-center pb-10 sm:pt-10 ">
        <p className="text-center font-bold text-lg mt-10 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          Our Service Offerings
        </p>
        <p className="text-center text-base md:text-lg lg:text-2xl xl:text-3xl px-2">
          Strategies that Drive Property Market Excellence
        </p>
        <div id="ServiceCards" className="flex flex-col mt-10 mb-6 sm:w-5/6 lg:pt-10">
          <div className="flex flex-col lg:flex-row">
            <div className="flex justify-between mb-4 h-full lg:w-1/2">
              <ServiceCard
                cardIcon={faChartSimple}
                cardTitle="Automotive SEO"
                cardDetail="Drive You Success Wih Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today."
              />
              <ServiceCard
                cardIcon={faArrowPointer}
                cardTitle="PPC Precision"
                cardDetail="Maximize Visibility and Drive Quality Traffic with meticulously targeted Pay-Per-Click Campaigns."
              />
            </div>
            <div className="flex justify-between mb-4 h-full lg:w-1/2">
              <ServiceCard
                cardIcon={faUserGroup}
                cardTitle="Social Acceletarion"
                cardDetail="Engage and Influence your Audience across Social Media platforms, Aplifing your Brand's Presence and Connection."
              />
              <ServiceCard
                cardIcon={faBook}
                cardTitle="Content Excellence"
                cardDetail="Craft Compelling Automotive-specific content, that resonates with enthusiasts and drives engagement."
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="flex justify-between mb-4 h-full lg:w-1/2">
              <ServiceCard
                cardIcon={faNewspaper}
                cardTitle="Web Design"
                cardDetail="Transform Visitors into Customers with high-performance websites designed for seamless user experience and increased conversions."
              />
              <ServiceCard
                cardIcon={faChartLine}
                cardTitle="Data-Driven Insights"
                cardDetail="Leverage Data to Define Your Strategies, making informed decisions that drive revenue growth."
              />
            </div>
            <div className="flex justify-between mb-4 h-full lg:w-1/2">
              <ServiceCard
                cardIcon={faBrain}
                cardTitle="End-to-End Solutions"
                cardDetail="From Initial Awareness to Post-purchase Loyalty, we offer full funnel sollutions that guide customers through every step of their journey."
              />
              <ServiceCard
                cardIcon={faFilm}
                cardTitle="Video Marketing"
                cardDetail="Unleash the Power of Video Marketing: Captive, Engage, and Elevate your Brand with Compelling Visual Stories."
              />
            </div>
          </div>
        </div>
        <RoundedButton
          value="Get Started"
          text="text-white"
          btnColor="bg-blue-600"
          bdrColor="border-blue-600 border-2"
          customCss="text-base md:text-lg lg:text-xl xl:text-2xl mt-2 mb-5 w-1/3 lg:w-1/6 lg:my-20"
        />
      </div>
    </>
  );
}

export default Services;
