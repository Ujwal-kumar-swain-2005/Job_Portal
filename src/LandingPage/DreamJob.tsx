import React from "react";
import { TextInput, Avatar } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const DreamJob = () => {
  return (
    <div className="flex items-center px-20">
     
      <div className="flex flex-col w-[45%]">
        <div className="text-6xl font-bold text-mine-shaft-100 [&>span]:text-bright-sun-400">
          Find your <span>dream</span> <span>job</span> with us
        </div>

        <div className="mt-4 text-lg text-gray-400">
          Good life begins with a good company. Start explore thousands of jobs in one place.
        </div>

        <div className="mt-6">
          <div className="flex gap-6 items-end">
            <TextInput
              variant="unstyled"
              label="Job Title"
              placeholder="Software Engineer"
              className="bg-mine-shaft-900 rounded-lg px-3 py-2 border border-mine-shaft-700 w-60"
            />

            <TextInput
              variant="unstyled"
              label="Location"
              placeholder="Location"
              className="bg-mine-shaft-900 rounded-lg px-3 py-2 border border-mine-shaft-700 w-60"
            />

            <IconSearch
              size={42}
              className="bg-bright-sun-500 text-mine-shaft-950 p-2 rounded-lg cursor-pointer hover:bg-bright-sun-400 transition"
            />
          </div>
        </div>
      </div>
      <div className="w-[55%] flex items-center justify-center">
        <div className="w-[30rem] relative">
          <img src="boy.png" alt="dream job" />
          <div
            className="
              absolute -right-14 top-[50%] -translate-y-1/2
              w-fit bg-mine-shaft-900/40 border border-bright-sun-400
              backdrop-blur-md rounded-lg p-3 shadow-lg
            "
          >
            <div className="text-center text-sm text-mine-shaft-100 mb-1">
              10K+ got job
            </div>

            <Avatar.Group>
              <Avatar src="avatar.png" />
              <Avatar src="avatar1.png" />
              <Avatar src="avatar2.png" />
              <Avatar>+9K</Avatar>
            </Avatar.Group>
          </div>
          <div
            className="
              absolute -left-14 top-[28%]
              w-fit bg-mine-shaft-900/40 border border-bright-sun-400
              backdrop-blur-md rounded-xl p-3 shadow-lg
              flex flex-col gap-3
            "
          >
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg flex items-center justify-center">
                <img src="/Google.png" alt="Google" className="w-full h-full object-contain" />
              </div>

              <div className="text-sm text-mine-shaft-100">
                <div className="font-semibold">Software Engineer</div>
                <div className="text-mine-shaft-300 text-xs">New York</div>
              </div>
            </div>

            <div className="flex justify-between text-xs text-mine-shaft-200">
              <span>1 day ago</span>
              <span>120 Applicants</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
