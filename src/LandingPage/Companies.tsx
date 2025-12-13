import React from "react";
import Marquee from "react-fast-marquee";
import {companies } from "../../public/Data/Data";
const Companies = () => {
  return (
    <div className="mt-20 pb-5">
    
      <div className="text-4xl text-center font-semibold text-mine-shaft-100 mb-10">
        Trusted By <span className="text-bright-sun-400">1000+</span> Companies
      </div>
      <Marquee pauseOnHover speed={50} className="py-4">
  {companies.map((company, index) => (
    <div
      key={index}
      className="mx-8 px-4 py-2 hover:bg-mine-shaft-900 rounded-xl cursor-pointer transition"
    >
      <img
        className="h-14 object-contain"
        src={`/Companies/${company}.png`}
        alt={company}
      />
    </div>
  ))}
</Marquee>

    </div>
  );
};

export default Companies;
