import React from "react";
import { work } from "../../public/Data/Data"; 
import { Avatar } from "@mantine/core";

const Working = () => {
  return (
    <div className="mt-20 pb-10">
   
      <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
        How it <span className="text-bright-sun-400">works</span>
      </div>

      <div className="text-mine-shaft-300 text-center w-1/2 mx-auto">
        Effortlessly understand how our platform helps you land your dream job.
      </div>
      <div className="flex gap-20 px-16 justify-start mt-14">

  <div className="relative w-[45%]">

    <img
      className="w-[35rem] drop-shadow-xl ml-10"
      src="/Working/Girl.png"
      alt="working"
    />
    <div
      className="
        absolute 
        bottom-[6rem]      /* Lifts avatar higher */
        left-[12rem]       /* Moves avatar toward laptop */
        w-48 
        flex flex-col items-center gap-2 
        border border-bright-sun-400 
        rounded-xl py-4 px-2 
        backdrop-blur-md bg-mine-shaft-900/40
        shadow-lg
      "
    >
      <Avatar className="!h-16 !w-16" src="/avatar1.png" alt="avatar" />

      <div className="text-sm font-semibold text-mine-shaft-100 text-center">
        Complete your profile
      </div>

      <div className="text-xs text-mine-shaft-300">
        70% Completed
      </div>
    </div>
  </div>
  <div className="flex flex-col gap-12 w-[40%]">
    {work.map((step, index) => (
      <div
        key={index}
        className="
          flex items-center gap-5 
          bg-mine-shaft-900 p-5 rounded-xl 
          border border-mine-shaft-800 
          hover:border-bright-sun-400 
          transition shadow-lg
        "
      >
        <div
          className="
            w-20 h-20 p-3 rounded-2xl 
            bg-gradient-to-br from-mine-shaft-800 to-mine-shaft-900
            border border-mine-shaft-700 
            shadow-md flex items-center justify-center
          "
        >
          <img
            className="w-full h-full object-contain"
            src={`/Working/${step.name}.png`}
            alt={step.name}
          />
        </div>
        <div>
          <div className="text-xl font-semibold text-mine-shaft-100">
            {step.name}
          </div>
          <div className="text-mine-shaft-300 mt-1">
            {step.desc}
          </div>
        </div>
      </div>
    ))}
  </div>

</div>

    </div>
  );
};

export default Working;
