"use client";

import { useEffect, useState } from "react";
import { Job } from "@/types/job";
import { jobService } from "@/services/job.service";
import JobCard from "./JobCard";

export default function JobsList() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const data = await jobService.getAllJobs();
        setJobs(data);
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, []);

  if (loading)
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">

      <h1 className="mb-8 text-3xl font-bold">
        Browse Jobs
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {jobs.map((job) => (
          <JobCard
            key={job._id}
            job={job}
          />
        ))}
      </div>

    </div>
  );
}