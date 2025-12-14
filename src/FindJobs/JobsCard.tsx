import React from "react";
import { IconBookmark, IconClockHour3 } from "@tabler/icons-react";
import { Divider, Text } from "@mantine/core";

export interface Job {
  jobTitle: string;
  company: string;
  applicants: number;
  experience: string;
  jobType: string;
  location: string;
  package: string;
  postedDaysAgo: number;
  description: string;
}

interface JobsCardProps {
  job: Job;
}

const JobsCard: React.FC<JobsCardProps> = ({ job }) => {
  const logoSrc = `/Companies/${job.company}.png`;

  return (
    <div className="bg-mine-shaft-800 rounded-xl border border-mine-shaft-700 p-4 hover:border-bright-sun-400 transition">

      <div className="flex justify-between">
        <div className="flex gap-3">
          <div className="h-10 w-10 bg-mine-shaft-700 rounded-md flex items-center justify-center">
            <img
              src={logoSrc}
              alt={job.company}
              className="h-6 w-6"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </div>

          <div>
            <div className="font-semibold text-sm">
              {job.jobTitle}
            </div>
            <div className="text-xs text-mine-shaft-300">
              {job.company} · {job.applicants} Applicants
            </div>
          </div>
        </div>

        <IconBookmark className="text-mine-shaft-400 hover:text-bright-sun-400 cursor-pointer" />
      </div>

      <div className="flex gap-2 mt-3 text-xs">
        <span className="px-2 py-0.5 bg-mine-shaft-700 rounded-md text-bright-sun-400">
          {job.experience}
        </span>
        <span className="px-2 py-0.5 bg-mine-shaft-700 rounded-md text-bright-sun-400">
          {job.jobType}
        </span>
        <span className="px-2 py-0.5 bg-mine-shaft-700 rounded-md text-bright-sun-400">
          {job.location}
        </span>
      </div>
      <Text
        lineClamp={3}
        className="text-xs text-mine-shaft-300 mt-2"
      >
        {job.description}
      </Text>

      <Divider size="xs" className="my-3 opacity-40" />
      <div className="flex justify-between items-center">
        <div className="font-semibold">{job.package}</div>
        <div className="flex items-center gap-1 text-xs text-mine-shaft-400">
          <IconClockHour3 size={14} />
          {job.postedDaysAgo} days ago
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
