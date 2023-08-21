import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import BoraBora from "../assets/images/borabora.jpg";
import BoraBora2 from "../assets/images/borabora2.jpg";
import Keywest from "../assets/images/keywest.jpg";
import Maldives from "../assets/images/maldives.jpg";
import Maldives2 from "../assets/images/maldives2.jpg";
import Maldives3 from "../assets/images/maldives3.jpg";

const Slider = () => {
  return (
    <div name="view" className="max-w-[1170px] mx-auto py-16 px-4">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
      >
        <div>
          <img src={BoraBora} alt="borabora" />
        </div>
        <div>
          <img src={BoraBora2} alt="borabora2" />
        </div>
        <div>
          <img src={Maldives} alt="maldives" />
        </div>
        <div>
          <img src={Maldives2} alt="maldives2" />
        </div>
        <div>
          <img src={Maldives3} alt="maldives3" />
        </div>
        <div>
          <img src={Keywest} alt="keywest" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
