import React from "react";
import { Indicator } from "@mantine/core";
import { IconAsset, IconBell, IconSettings } from "@tabler/icons-react";
import Navlink from "./Navlink";

const Header = () => {
  return (
    <div className="w-full bg-mine-shaft-950 px-6 text-white h-28 flex justify-between items-center">

      <div className="flex gap-3 items-center">
        <IconAsset className="h-10 w-10" stroke={1.25} />
        <div className="text-3xl font-semibold text-bright-sun-500" >Job Hook</div>
    
      </div>
        <Navlink />
        
    
      <div className="flex gap-4 items-center">
      
        <Indicator color="red" size={10} offset={4}>
          <IconBell />
        </Indicator>

        <div className="flex items-center gap-2 text-bright-sun-500 ">
          <div>Ujwal</div>
        </div>

        <IconSettings />
      </div>

    </div>
  );
};

export default Header;
