import React from "react";
import TalentCard from "./TalentCard";
import { talents } from "../../public/Data/TalentData";
import {  type Talent } from "./talents";

interface TalentsProps {
  salary: [number, number];
  sortBy: "salary_desc" | "salary_asc";
}
const getMinSalary = (ctc: string): number => {
  const match = ctc.match(/\d+/);
  return match ? Number(match[0]) : 0;
};

const Talents: React.FC<TalentsProps> = ({ salary, sortBy }) => {
  const [min, max] = salary;

  const filteredTalents = talents
    .filter((talent: Talent) => {
      const sal = getMinSalary(talent.expectedCtc);
      return sal >= min && sal <= max;
    })
    .sort((a, b) => {
      const sa = getMinSalary(a.expectedCtc);
      const sb = getMinSalary(b.expectedCtc);
      return sortBy === "salary_desc" ? sb - sa : sa - sb;
    });

  return (
    <div className="mt-10 grid grid-cols-3 gap-8">
      {filteredTalents.map((talent, index) => (
        <TalentCard key={index} talent={talent} />
      ))}
    </div>
  );
};

export default Talents;
