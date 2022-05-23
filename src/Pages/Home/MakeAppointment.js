import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryBtn from "../Shared/PrimaryBtn";

const MakeAppointment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="flex justify-center items-center rounded-xl"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-120px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 text-white p-5 space-y-3">
        <h3 className="text-xl text-primary font-bold">Appointment</h3>
        <h2 className="text-2xl">Make an Appointment Today</h2>
        <p className="pr-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          nulla cupiditate, molestiae quia numquam quod facere eos, voluptatem
          commodi suscipit ipsam quisquam natus odit repudiandae asperiores.
          Quia voluptas atque dolorem ut, quo qui temporibus labore facere a
          consectetur iure architecto.
        </p>
        <PrimaryBtn>Get Started</PrimaryBtn>
      </div>
    </section>
  );
};

export default MakeAppointment;
