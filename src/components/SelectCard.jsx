import React from "react";

const SelectCard = ({ bg, text }) => {
  return (
    <div className="relative">
      <img src={bg} alt={bg} className="object-cover w-full h-full" />
      <div className="bg-gray-800/30 absolute top-0 left-0 w-full h-full">
        <p className="absolute bottom-4 left-4 text-white text-2xl font-bold ">
          {text}
        </p>
      </div>
    </div>
  );
};

export default SelectCard;
