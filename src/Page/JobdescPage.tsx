import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import JobDesc from "../JobDesc/JobDesc";
import RecomondedJobs from "../JobDesc/RecomondedJobs";
import { Divider } from "@mantine/core";

const JobdescPage = () => {
  return (
    <div className="min-h-screen bg-mine-shaft-950 text-mine-shaft-100">
      <Header />

      <Divider my="xl" />
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <div className="flex gap-8">
          <div className="w-2/3">
            <JobDesc />
          </div>
          <div className="w-1/3 sticky top-24 h-fit">
            <RecomondedJobs />
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JobdescPage;
