import React from "react";
import { Avatar, Rating } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { testimonials } from "../../public/Data/Data";

const Testimonials = () => {
  return (
    <div className="mt-20 pb-10">
      <div className="text-4xl text-center font-semibold mb-8 text-mine-shaft-100">
        What our <span className="text-bright-sun-400">users say</span>
      </div>

      <Carousel
        slideSize="33%"
        slideGap="md"
        className="px-10"
      >
        {testimonials.map((user, index) => (
          <Carousel.Slide key={index}>
            <div className="bg-mine-shaft-900 border border-mine-shaft-800 rounded-xl p-6 shadow-lg hover:border-bright-sun-400 transition h-full">
              <div className="flex items-center gap-4 mb-3">
                <Avatar src="/avatar.png" className="!h-14 !w-14" />
                <div>
                  <div className="text-lg font-semibold text-mine-shaft-100">
                    {user.name}
                  </div>
                  <Rating value={user.rating} readOnly fractions={2} />
                </div>
              </div>
              <div className="text-sm text-mine-shaft-300 leading-relaxed">
                {user.testimonial}
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
