import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";
import treatment from "../../assets/images/treatment.png";
import PrimaryBtn from "../Shared/PrimaryBtn";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      img: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      img: whitening,
    },
  ];

  return (
    <div className="my-28 px-12">
      <div className=" text-center font-bold">
        <h3 className="text-primary font-bold uppercase text-2xl font-mono">
          Our Services
        </h3>
        <h2 className="text-3xl font-mono font-bold">Service We Provide</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div>
        <div className="hero min-h-screen">
          <div
            className="hero-content grid lg:grid-cols-2 bg-gradient sm:grid-cols-1
            px-12 space-y-4"
          >
            <img
              src={treatment}
              className="max-w-sm w-full rounded-lg shadow-2xl"
              alt=""
            />
            <div>
              <h1 className="text-5xl font-bold">
                Exceptional Dental Care, on Your Terms
              </h1>
              <p className="py-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page
              </p>
              <PrimaryBtn>Get Started</PrimaryBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
