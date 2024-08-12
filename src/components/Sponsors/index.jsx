import React from "react";
import logo from "../../assets/logo.png";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";

const Sponsors = () => {
  return (
      <div className="bg-gradient-to-r from-red-50 via-gray-200 to-blue-50 text-center py-8">
        <h2 className="text-4xl font-bold mb-4">Our Partners</h2>
        <div className="grid grid-cols-2 grid-cols-6 items-center justify-between justify-items-end">
          <div className="p-4 h-full w-full">
            <img src={logo} className="h-full w-full" />
          </div>
          <div className="p-4 h-20 w-64">
            <img src={logo1} className="h-full w-full" />
          </div>
          <div className="p-4 h-20 w-56">
            <img src={logo2} className="h-full w-full" />
          </div>
          <div className="p-4 h-32 w-28">
            <img src={logo3} className="h-full w-full" />
          </div>
          <div className="p-4 h-20 w-60">
            <img src={logo4} className="h-full w-full" />
          </div>
          <div className="p-4 h-32 w-44">
            <img src={logo5} className="h-full w-full" />
          </div>
        </div>
      </div>
  );
};

export default Sponsors;
