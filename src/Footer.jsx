import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import React from "react";

function Footer() {
  return (
    <div>
      <div className="w-11/12 rounded-xl bg-blue-200 flex flex-col md:flex-row mx-auto py-10 sm:py-2 sm:my-8 text-base md:text-lg lg:text-lg xl:text-xl">
        <div id="leftFooter" className="md:flex md:flex-col md:w-1/3 px-2">
          <div className="flex mb-5 items-center md:items-start md:flex-col">
            <img
              src="osumare-logo.png"
              alt="osumare-logo"
              className="w-1/2 mx-auto sm:w-1/4 md:w-1/2 md:mx-0"
            />
            <p className="px-1">The best digital marketing agency in Pune with the proven track record of consistently deliverying quality services.</p>
          </div>
          <div className="flex justify-center sm:justify-between sm:text-center md:flex-col md:text-justify">
            <div id="address" className="mx-auto w-4/5 px-3 md:p-0 md:mx-0 md:my-4">
              <p className="font-bold">Address</p>
              <p className="w-2/3 sm:mx-auto md:mx-0">
                Survey no. 43, Pathare, Thube Nagar, Nagar Road, Kharadi,
                Pune-14, Maharashtra, India
              </p>
            </div>
            <div id="contact" className="mx-auto w-3/5 md:w-5/6 px-3 md:mx-0 md:px-0 md:my-4">
              <p className="font-bold">Contacts</p>
              <p>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#000000" }}
                />
                &nbsp;
                <a href="mail:hello@osumare.in">hello@osumare.in</a>
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} style={{ color: "#000000" }} />
                &nbsp;
                <a href="tel:+918459876226">+91 8459 8762 26</a>
              </p>
            </div>
          </div>
        </div>
        <div id="midFooter" className="md:w-1/3">
          <div className="mx-auto w-11/12 sm:my-10">
            <p className="font-bold sm:text-center">
              Menu
            </p>
            <ul className="flex justify-between md:flex-col md:items-center md:mt-5">
              <li className="md:my-2"><a href="#">Home</a></li>
              <li className="md:my-2"><a href="#">About</a></li>
              <li className="md:my-2"><a href="#">Services</a></li>
              <li className="md:my-2"><a href="#">Work</a></li>
              <li className="md:my-2"><a href="#">Blog</a></li>
              <li className="md:my-2"><a href="#">Career</a></li>
            </ul>
          </div>
        </div>
        <div id="rightFooter" className="md:w-1/3">
          <div className="mx-auto w-11/12 md:my-10">
            <p className="font-bold sm:text-center">
              Social
            </p>
            <ul className="flex justify-between sm:my-2 md:flex-col items-center md:mt-5">
              <li className="bg-white rounded-full w-1/12 h-1/12 p-1 sm:flex sm:justify-center md:my-2 md:w-1/6">
                <a href="#" className="sm:w-5/6"><img src="social/XTwitter.png" alt="Twitter-Icon" /></a>
              </li>
              <li className="bg-white rounded-full w-1/12 h-1/12 p-1 sm:flex sm:justify-center md:my-2 md:w-1/6">
                <a href="#" className="sm:w-5/6"><img src="social/facebook.png" alt="Facebook-Icon" /></a>
              </li>
              <li className="bg-white rounded-full w-1/12 h-1/12 p-1 sm:flex sm:justify-center md:my-2 md:w-1/6">
                <a href="#" className="sm:w-5/6"><img src="social/youtube.png" alt="Youtube-Icon" /></a>
              </li>
              <li className="bg-white rounded-full w-1/12 h-1/12 p-1 sm:flex sm:justify-center md:my-2 md:w-1/6">
                <a href="#" className="sm:w-5/6"><img src="social/pinterest.png" alt="Pinterest-Icon" /></a>
              </li>
              <li className="bg-white rounded-full w-1/12 h-1/12 p-1 sm:flex sm:justify-center md:my-2 md:w-1/6">
                <a href="#" className="sm:w-5/6"><img src="social/whatsapp.png" alt="Whatsapp-Icon" /></a>
              </li>
              <li className="bg-white rounded-full w-1/12 h-1/12 p-1 sm:flex sm:justify-center md:my-2 md:w-1/6">
                <a href="#" className="sm:w-5/6"><img src="social/insta.png" alt="Instagram-Icon" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;