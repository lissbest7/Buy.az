import React from "react";

const Info = () => {
  return (
      <div className="bg-[#DDDDDD] py-16 h-72">
        <div className="max-w-7xl mx-auto flex justify-between align-center gap-8 text-center px-4 mt-10">
          <div>
            <h3 className="text-6xl font-extrabold text-[#5429dd]">100K+</h3>
            <p className="mt-2 font-bold text-base text-[#696e6e]">USERS</p>
          </div>
          <div>
            <h3 className="text-6xl font-extrabold text-[#5429dd]">500K+</h3>
            <p className="mt-2 font-bold text-base text-[#696e6e]">CLASSIFIEDS</p>
          </div>
          <div>
            <h3 className="text-6xl font-extrabold text-[#5429dd]">25000+</h3>
            <p className="mt-2 font-bold text-base text-[#696e6e]">USERS/DAY</p>
          </div>
        </div>
      </div>
  );
};

export default Info;
