import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { talents } from "../../public/Data/TalentData";
import Talents from "../FindTalent/Talent";

import {
  MultiSelect,
  RangeSlider,
  type ComboboxItem,
  type OptionsFilter,
} from "@mantine/core";

import { searchFields } from "../../public/Data/TalentData";

/* ================= SEARCH FILTER ================= */

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const words = search.toLowerCase().trim().split(" ");
  return (options as ComboboxItem[]).filter((option) =>
    words.every((w) => option.label.toLowerCase().includes(w))
  );
};

/* ================= COMPONENT ================= */

const FindTalent: React.FC = () => {
  const [salary, setSalary] = useState<[number, number]>([3, 30]);

  const [sortBy, setSortBy] = useState<"salary_desc" | "salary_asc">(
    "salary_desc"
  );

  return (
    <div className="min-h-screen bg-mine-shaft-950 text-mine-shaft-100">
      <Header />

      <div className="px-20 pt-14">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6">
          Find <span className="text-bright-sun-400">Talent</span>
        </h1>

        {/* Filters */}
        <div className="bg-mine-shaft-900 p-6 rounded-xl border border-mine-shaft-700 grid grid-cols-4 gap-6">

          {searchFields.map((item, index) => (
            <MultiSelect
              key={index}
              label={
                <div className="flex items-center gap-2">
                  <item.icon size={18} className="text-bright-sun-400" />
                  <span>{item.title}</span>
                </div>
              }
              placeholder={item.title}
              data={item.options}
              searchable
              filter={optionsFilter}
              variant="filled"
              radius="md"
              classNames={{
                input:
                  "bg-mine-shaft-800 text-white border border-mine-shaft-700",
                dropdown:
                  "bg-mine-shaft-900 border border-mine-shaft-700",
              }}
            />
          ))}

          {/* Salary */}
          <div className="flex flex-col justify-end">
            <div className="flex justify-between text-xs mb-1 text-mine-shaft-300">
              <span>Expected Salary</span>
              <span>
                ₹{salary[0]} – ₹{salary[1]} LPA
              </span>
            </div>

            <RangeSlider
              value={salary}
              onChange={setSalary}
              min={1}
              max={50}
              step={1}
              color="brightSun.4"
            />

            <div className="flex justify-end mt-3">
              <button
                onClick={() =>
                  setSortBy((prev) =>
                    prev === "salary_desc" ? "salary_asc" : "salary_desc"
                  )
                }
                className="px-4 py-1.5 rounded-full text-sm border border-bright-sun-400 text-bright-sun-400 hover:bg-bright-sun-400 hover:text-mine-shaft-950 transition"
              >
                Salary {sortBy === "salary_desc" ? "↓" : "↑"}
              </button>
            </div>
          </div>
        </div>

        {/* Talents */}
        <Talents salary={salary} sortBy={sortBy} />
      </div>

      <Footer />
    </div>
  );
};

export default FindTalent;
