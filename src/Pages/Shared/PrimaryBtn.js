import React from "react";

const PrimaryBtn = ({ children }) => {
  return (
    <button className="btn btn-primary uppercase text-white bg-gradient-to-r from-secondary to-primary font-bold ">
      {children}
    </button>
  );
};

export default PrimaryBtn;
