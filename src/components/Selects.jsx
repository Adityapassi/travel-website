import React from "react";
import BoraBora from "../assets/images/borabora.jpg";
import BoraBora2 from "../assets/images/borabora2.jpg";
import Keywest from "../assets/images/keywest.jpg";
import Maldives from "../assets/images/maldives.jpg";
import Maldives2 from "../assets/images/maldives2.jpg";
import Maldives3 from "../assets/images/maldives3.jpg";
import SelectCard from "./SelectCard";

const Selects = () => {
  return (
    <div
      name="travel"
      className=" max-w-[1170px] mx-auto py-16 px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      <SelectCard bg={BoraBora} text="Bora Bora" />
      <SelectCard bg={BoraBora2} text="Maldives" />
      <SelectCard bg={Maldives} text="Antigua" />
      <SelectCard bg={Maldives2} text="Cozumel" />
      <SelectCard bg={Maldives3} text="Jamaica" />
      <SelectCard bg={Keywest} text="Key West" />
    </div>
  );
};

export default Selects;
