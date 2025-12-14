import React from "react";
import {
  IconHeart,
  IconMapPin,
} from "@tabler/icons-react";
import {  type Talent } from "./talents";

interface TalentCardProps {
  talent: Talent;
}

const TalentCard: React.FC<TalentCardProps> = ({ talent }) => {
  return (
    <div className="bg-mine-shaft-900 border border-mine-shaft-700 rounded-xl p-5 hover:border-bright-sun-400 transition">

      <div className="flex justify-between">
        <div className="flex gap-3">
          <img
            src={talent.image}
            className="h-12 w-12 rounded-full"
          />
          <div>
            <h3 className="font-semibold">{talent.name}</h3>
            <p className="text-sm text-mine-shaft-300">
              {talent.role} • {talent.company}
            </p>
          </div>
        </div>
        <IconHeart className="text-mine-shaft-400 hover:text-bright-sun-400 cursor-pointer" />
      </div>

      <div className="flex gap-2 flex-wrap mt-4">
        {talent.topSkills.map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs rounded-full bg-mine-shaft-800 text-bright-sun-400"
          >
            {skill}
          </span>
        ))}
      </div>

  
      <p className="text-sm text-mine-shaft-300 mt-4 line-clamp-3">
        {talent.about}
      </p>

      <div className="flex justify-between items-center mt-5 pt-4 border-t border-mine-shaft-700">
        <span className="font-semibold">{talent.expectedCtc}</span>
        <div className="flex items-center gap-1 text-sm text-mine-shaft-400">
          <IconMapPin size={16} />
          {talent.location}
        </div>
      </div>

     
      <div className="grid grid-cols-2 gap-3 mt-4">
        <button className="border border-bright-sun-400 text-bright-sun-400 py-1.5 rounded-md hover:bg-bright-sun-400 hover:text-black transition">
          Profile
        </button>
        <button className="bg-mine-shaft-800 py-1.5 rounded-md hover:bg-mine-shaft-700 transition">
          Message
        </button>
      </div>
    </div>
  );
};

export default TalentCard;
