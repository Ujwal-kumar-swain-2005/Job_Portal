import { TextInput, Button } from "@mantine/core";
import React from "react";

const Subscribe = () => {
  return (
    <div className="mt-20 flex items-center justify-center">
      <div className="
        backdrop-blur-xl bg-white/10 
        border border-white/20 
        mx-20 px-10 py-10 rounded-2xl shadow-2xl 
        flex flex-col items-center gap-8
        w-full max-w-2xl
      ">
        <div className="text-4xl text-center font-semibold text-white">
          Never want to miss any  
          <span className="text-bright-sun-400"> Job News?</span>
        </div>
        <div className="
          flex gap-4 items-center w-full 
          bg-white/10 border border-white/20 
          rounded-xl px-4 py-3 backdrop-blur-md
        ">
          
          <TextInput
            className="[&_input]:text-white font-semibold w-full"
            variant="unstyled"
            placeholder="Enter your email"
            size="lg"
          />
       <Button
        className="
    !rounded-lg !font-semibold shrink-0
    transition-all duration-300
    hover:scale-105 hover:shadow-[0_0_20px_#FFD54F]
  "
  size="lg"
  color="brightSun.4"
  variant="filled"
>
  Subscribe
</Button>

        </div>

      </div>
    </div>
  );
};

export default Subscribe;
