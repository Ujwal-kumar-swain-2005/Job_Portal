import React from "react";
import { Button, Divider, ActionIcon } from "@mantine/core";
import { IconBookmark } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { card, skills } from "../../public/Data/JobDescData";
import { desc } from "../../public/Data/JobDescData";
import DOMPurify from "dompurify";
import RecomondedJobs from "./RecomondedJobs";

const JobDesc: React.FC = () => {
  return (
    <div className="w-2/3  ">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="p-3 bg-mine-shaft-800 rounded-xl">
            <img
              className="h-14"
              src="/Companies/Google.png"
              alt="Google"
            />
          </div>

          <div className="flex flex-col gap-1">
            <div className="font-semibold text-2xl text-bright-sun-400">
              Software Engineer III
            </div>
            <div className="text-lg text-mine-shaft-300">
              Google &bull; 3 days ago &bull; 48 Applicants
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Link to="/apply-job">
            <Button
              color="brightSun.4"
              size="sm"
              variant="light"
            >
              Apply
            </Button>
          </Link>

          <IconBookmark
            className="cursor-pointer text-bright-sun-400"
            stroke={1.5}
          />
        </div>
      </div>
      <Divider my="xl" />

      <div className="flex gap-10 flex-wrap">
        {card.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex flex-col items-center gap-1"
            >
              <ActionIcon
                color="brightSun.4"
                variant="light"
                radius="xl"
                className="h-12 w-12"
              >
                <Icon className="h-4/5 w-4/5" stroke={1.5} />
              </ActionIcon>

              <div className="text-sm text-mine-shaft-300">
                {item.name}
              </div>
              <div className="font-semibold text-bright-sun-400">
                {item.value}
              </div>
            </div>
          );
        })}
      </div>
      <Divider my="xl" />

      <div>
        <div className="text-xl font-semibold mb-5 text-bright-sun-400">
          Required Skills
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((item, index) => (
            <ActionIcon
              key={index}
              color="brightSun.4"
              variant="light"
              radius="xl"
              className="!h-fit !w-fit !px-3 !py-1 text-sm font-medium"
              aria-label={item}
            >
              {item}
            </ActionIcon>
          ))}
        </div>
        
      </div>

    </div>
  );
};

export default JobDesc;
