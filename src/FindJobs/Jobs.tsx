import React from "react";
import JobCard from "./JobsCard";
import { jobList } from "../../public/Data/JobsData";

type SortBy = "salary_desc" | "salary_asc";

interface JobsProps {
  salary: [number, number];
  sortBy: SortBy;
}

const Jobs: React.FC<JobsProps> = ({ salary, sortBy }) => {
  // convert "32 LPA" -> 32
  const getSalaryNumber = (pkg: string) =>
    Number(pkg.replace(" LPA", ""));

  const filteredJobs = jobList
    .filter((job) => {
      const sal = getSalaryNumber(job.package);
      return sal >= salary[0] && sal <= salary[1];
    })
    .sort((a, b) => {
      const salA = getSalaryNumber(a.package);
      const salB = getSalaryNumber(b.package);
      return sortBy === "salary_desc" ? salB - salA : salA - salB;
    });

  return (
    <>
      <h2 className="text-2xl font-semibold mt-10 mb-6">
        Recommended Jobs
      </h2>

      <div className="grid grid-cols-4 gap-6">
        {filteredJobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </>
  );
};

export default Jobs;
