import React from 'react'

import SelectInput from "./SelectInput";
import { fields } from "../../public/Data/PostJob";
import { TagsInput } from '@mantine/core';

const PostJob = () => {
  return (
    <div className="w-4/5 mx-auto">
      <div className="text-2xl font-semibold mb-5">
        Post a Job
      </div>

      <div className="flex flex-col gap-5">
       
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...fields[0]} />
          <SelectInput {...fields[1]} />
        </div>

     
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...fields[2]} />
          <SelectInput {...fields[3]} />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...fields[4]} />
          <SelectInput {...fields[5]} />
        </div>
        <TagsInput withAsterisk label = "Skills" placeholder='Enter skills' splitChars={[',',' ','|']} clearable acceptValueOnBlur/>
      </div>
    </div>
  );
};

export default PostJob;
