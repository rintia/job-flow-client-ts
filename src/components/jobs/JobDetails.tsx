"use client";

import { Job } from "@/types/job";
import { jobService } from "@/services/job.service";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useCurrentUser } from "@/hooks/useCurrentUser";

interface Props {
    id: string;
}

export default function JobDetails({ id }: Props) {
    const [job, setJob] = useState<Job | null>(null);

    const [loading, setLoading] = useState(true);
    const { user } = useCurrentUser();

    useEffect(() => {
        const loadJob = async () => {
            try {
                const data = await jobService.getJobById(id);

                setJob(data);
            } finally {
                setLoading(false);
            }
        };

        loadJob();
    }, [id]);

    if (loading) {
        return (
            <div className="py-20 text-center">
                Loading...
            </div>
        );
    }

    if (!job) {
        return (
            <div className="py-20 text-center">
                Job not found
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-5xl px-4 py-10">
            <div className="rounded-xl border bg-white p-8 shadow">
                <Image
                    src={
                        job.companyLogo ||
                        "https://placehold.co/120x120?text=Logo"
                    }
                    alt={job.company}
                    width={200}
                    height={150}
                    className="rounded-xl border object-cover"
                />
                <h1 className="text-3xl font-bold">
                    {job.title}
                </h1>

                <p className="mt-2 text-gray-500">
                    {job.company}
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">

                    <div>
                        <h3 className="font-semibold">
                            Category
                        </h3>

                        <p>{job.category}</p>
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Location
                        </h3>

                        <p>{job.location}</p>
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Budget
                        </h3>

                        <p>
                            ৳{job.minPrice} - ৳{job.maxPrice}
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">
                            Deadline
                        </h3>

                        <p>{job.deadline}</p>
                    </div>

                </div>

                <div className="mt-8">

                    <h3 className="mb-2 text-xl font-semibold">
                        Requirements
                    </h3>

                    <p>{job.requirements}</p>

                </div>

                <div className="mt-8">

                    <h3 className="mb-2 text-xl font-semibold">
                        Description
                    </h3>

                    <p>{job.description}</p>

                </div>

               {!user ? (
  <Link
    href="/login"
    className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white"
  >
    Login to Place Bid
  </Link>
) : user.email === job.email ? (
  <div className="mt-8 rounded-lg bg-slate-100 p-4 text-center text-slate-600">
    This is your job post.
  </div>
) : (
  <Link
    href={`/jobs/${job._id}/bid`}
    className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white"
  >
    Place Bid
  </Link>
)}

            </div>

        </div>
    );
}