import {
  IconAnchor,
  IconBrandFacebook,
  IconBrandInstagram,
    
} from "@tabler/icons-react";

import { footerLinks } from "../../public/Data/Data";

const Footer = () => {
  return (
    <div className="mt-20 pb-16 px-16 flex justify-between">
      <div className="w-1/3 flex flex-col gap-4">
        <div className="flex items-center gap-2 text-bright-sun-400">
          <IconAnchor className="h-6 w-6" stroke={2.5} />
          <div className="text-xl font-semibold text-mine-shaft-100">JobHook</div>
        </div>
        <div className="text-sm text-mine-shaft-300 w-4/5 leading-relaxed">
          Job portal with user profiles, skill updates, certifications, 
          work experience and admin job postings.
        </div>
        <div className="flex gap-4 mt-4">
          {[
            <IconBrandFacebook />,
            <IconBrandInstagram />,
            
          ].map((Icon, index) => (
            <div
              key={index}
              className="p-3 rounded-full bg-mine-shaft-900 text-bright-sun-400 
                         hover:bg-mine-shaft-700 cursor-pointer transition shadow-md"
            >
              {Icon}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-10">
        {footerLinks.map((group, index) => (
          <div
            key={index}
            className="bg-mine-shaft-900/60 backdrop-blur-md 
                       px-8 py-6 rounded-3xl shadow-xl w-56"
          >
           
            <div className="text-bright-sun-400 font-semibold text-lg mb-3">
              {group.title}
            </div>

         
            <div className="flex flex-col gap-2">
              {group.links.map((link, i) => (
                <div
                  key={i}
                  className="text-mine-shaft-300 hover:text-bright-sun-400 
                             cursor-pointer hover:translate-x-2 "
                >
                  {link}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Footer;
