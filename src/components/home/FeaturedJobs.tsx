'use client';

import { useEffect, useState } from "react";
import Link from "next/link";

import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";

import { jobService } from "@/services/job.service";
import { Job } from "@/types/job";

export default function FeaturedJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await jobService.getAllJobs();

        setJobs(data.slice(0, 4));
      } catch (error) {
        console.error(error);
      }
    };

    fetchJobs();
  }, []);
  return (
    <section className="py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Featured Jobs
          </h2>

          <p className="mt-3 text-slate-600">
            Explore some of the latest opportunities from trusted employers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {jobs.map((job) => (
            <Card key={job._id}>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                {job.category}
              </span>

              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {job.title}
              </h3>

              <p className="mt-2 text-slate-600">
                {job.company}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                📍 {job.location}
              </p>

              <p className="mt-3 font-semibold text-blue-600">
                ৳{job.minPrice} - ৳{job.maxPrice}
              </p>

              <Link
                href={`/jobs/${job._id}`}
                className="mt-6 inline-block font-medium text-blue-600 hover:underline"
              >
                View Details →
              </Link>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/jobs"
            className="inline-flex rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Browse All Jobs
          </Link>
        </div>
      </Container>
    </section>
  );
}