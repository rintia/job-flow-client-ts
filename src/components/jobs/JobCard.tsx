import Link from "next/link";
import { Job } from "@/types/job";

interface Props {
  job: Job;
}

export default function JobCard({ job }: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition">
      <div className="space-y-3">

        <h2 className="text-xl font-bold">
          {job.title}
        </h2>

        <p className="text-gray-500">
          {job.company}
        </p>

        <div className="flex justify-between text-sm">
          <span>{job.category}</span>

          <span>{job.location}</span>
        </div>

        <div className="font-semibold text-blue-600">
          ৳ {job.minPrice} - ৳ {job.maxPrice}
        </div>

        <div className="text-sm">
          Deadline: {job.deadline}
        </div>

        <Link
          href={`/jobs/${job._id}`}
          className="mt-3 inline-block rounded bg-blue-600 px-4 py-2 text-white"
        >
          View Details
        </Link>

      </div>
    </div>
  );
}