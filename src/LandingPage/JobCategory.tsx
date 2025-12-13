import React from "react";
import { Carousel } from "@mantine/carousel";
import { jobCategory } from "../../public/Data/Data";

const JobCategory = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
        Browse <span className="text-bright-sun-400">Job</span> Category
      </div>

      <div className="text-mine-shaft-300 text-center w-1/2 mx-auto">
        Explore diverse job opportunities tailored to your skills and start your journey today!
      </div>

      <Carousel slideSize="22%" slideGap="md" className="mt-10">
        {jobCategory.map((category, index) => (
         <Carousel.Slide key={index}>
  <div
    className="
      group flex flex-col items-center 
      bg-mine-shaft-900 
      p-6 
      rounded-2xl 
      border border-mine-shaft-800 
      w-64 mx-auto shadow-lg 
      transition-all duration-300 
      hover:shadow-bright-sun-500/20 
      hover:bg-mine-shaft-800 
      hover:border-bright-sun-400
      hover:-translate-y-2
      hover:scale-[1.03]
    "
  >
    <div
      className="
        h-16 w-16 
        bg-mine-shaft-800 
        rounded-2xl 
        flex items-center justify-center
        border border-mine-shaft-700 
        shadow-inner 
        group-hover:border-bright-sun-400 
        group-hover:shadow-bright-sun-500/30
        transition-all duration-300
      "
    >
      <img
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=80&q=80"
        alt="category icon"
        className="h-9 w-9 group-hover:scale-110 transition-transform"
      />
    </div>
    <div
      className="
        mt-4 
        text-xl 
        font-semibold 
        text-mine-shaft-100 
        group-hover:text-bright-sun-400 
        transition
      "
    >
      {category.name}
    </div>
    <div className="text-sm text-center text-mine-shaft-300 mt-2 leading-5">
      {category.desc}
    </div>
    <div className="mt-3 text-bright-sun-300 text-lg font-medium group-hover:text-bright-sun-400 transition">
      {category.jobs}+ new jobs
    </div>
  </div>
</Carousel.Slide>


        ))}
      </Carousel>
    </div>
  );
};

export default JobCategory;
