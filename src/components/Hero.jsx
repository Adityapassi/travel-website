import React from "react";
import beachVid from "../assets/images/beachVid.mp4";
import Navbar from "./Navbar";
import { AiOutlineSearch } from "react-icons/ai";
const Hero = () => {
  return (
    <div name="home" className="relative w-full h-screen">
      <Navbar />
      <video
        src={beachVid}
        className="object-cover w-full h-full"
        autoPlay
        loop
        muted
      />
      <div className="absolute h-full w-full top-0 bg-gray-900/30"></div>
      <div className="w-full h-full absolute top-0 flex flex-col justify-center text-center text-white p-4">
        <h1>First Class Travel</h1>
        <h2 className="py-4">Top 1% Location Worldwide</h2>
        <form className="flex justify-between items-center max-w-[700px] w-[90%] border mx-auto mt-3 rounded-md p-1 bg-gray-100/90 text-black">
          <div className="w-full">
            <input
              className="bg-transparent w-full p-1 focus:outline-none"
              type="text"
              placeholder="Search Destinations"
            />
          </div>
          <div>
            <button className="btn">
              <AiOutlineSearch size={20} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
