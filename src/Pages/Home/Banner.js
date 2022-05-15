import React from "react";
import chair from "../../assets/images/chair.png";
import PrimaryBtn from "../Shared/PrimaryBtn";
import bg from "../../assets/images/bg.png";

const Banner = () => {
  return (
    <div>
      <div
        style={{
          background: `url(${bg})`,
          backgroundSize: "70%",
          backgroundPosition: "left",
        }}
        className="hero min-h-screen rounded-xl"
      >
        <div className="hero-content flex-col lg:flex-row-reverse space-y-4">
          <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold font-serif">
              Your New Smile Starts Here
            </h1>
            <p className="py-6 font-serif">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryBtn>Get Started</PrimaryBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
