import React from "react";
import BoraBora from "../assets/images/borabora.jpg";
import BoraBora2 from "../assets/images/borabora2.jpg";
import Keywest from "../assets/images/keywest.jpg";
import Maldives from "../assets/images/maldives.jpg";
import Maldives2 from "../assets/images/maldives2.jpg";

const Destinations = () => {
  return (
    <div name="destination" className="max-w-[1170px] mx-auto py-16 px-4 text-center">
      <h1>All Inclusive Resorts</h1>
      <p className="py-4">On the Caribbean's Best Beach</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={BoraBora}
          alt="BoraBora"
        />
        <img
          className="w-full h-full object-cover"
          src={BoraBora2}
          alt="BoraBora2"
        />
        <img
          className="w-full h-full object-cover"
          src={Keywest}
          alt="Keywest"
        />
        <img
          className="w-full h-full object-cover"
          src={Maldives}
          alt="Maldives"
        />
        <img
          className="w-full h-full object-cover"
          src={Maldives2}
          alt="Maldives2"
        />
      </div>
    </div>
  );
};

export default Destinations;
