import React from "react";
import {
  FaYoutube,
  FaPinterest,
  FaInstagram,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer name="footer" className="w-full bg-gray-100 py-14">
      <div className="max-w-[1170px] mx-auto flex flex-col ">
        <div className="sm:flex justify-between items-center text-center">
          <h2>BEACHES.</h2>
          <div className="flex justify-between w-full sm:max-w-[300px] my-4">
            <FaFacebook className="footer-icon" />
            <FaTwitter className="footer-icon" />
            <FaInstagram className="footer-icon" />
            <FaPinterest className="footer-icon" />
            <FaYoutube className="footer-icon" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <ul className="lg:flex">
            <li className="footer-link">About</li>
            <li className="footer-link">Partnerships</li>
            <li className="footer-link">Careers</li>
            <li className="footer-link">Newsroom</li>
            <li className="footer-link">Advertising</li>
          </ul>
          <ul className="lg:flex">
            <li className="footer-link">Home</li>
            <li className="footer-link">Destinations</li>
            <li className="footer-link">Travel</li>
            <li className="footer-link">View</li>
            <li className="footer-link">Book</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
