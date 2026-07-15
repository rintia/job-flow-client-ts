"use client";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { jobService } from "@/services/job.service";
import { Job } from "@/types/job";
import Link from "next/link";

export default function MyJobsTable() {
    const { user } = useCurrentUser();

    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);

    const handleDelete = async (id: string) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this job?"
        );

        if (!confirmDelete) return;

        try {
            await jobService.deleteJob(id);

            setJobs((prev) =>
                prev.filter((job) => job._id !== id)
            );

            toast.success("Job deleted successfully");
        } catch {
            toast.error("Failed to delete job");
        }
    };

    useEffect(() => {
        if (!user?.email) return;

        const fetchJobs = async () => {
            try {
                const data = await jobService.getMyJobs(user.email);

                console.log("API Response:", data);

                setJobs(data);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, [user]);

    if (loading) {
        return (
            <div className="py-20 text-center">
                Loading...
            </div>
        );
    }

    if (!jobs.length) {
        return (
            <div className="py-20 text-center text-slate-500">
                You haven't posted any jobs yet.
            </div>
        );
    }

    return (
        <div className="overflow-x-auto rounded-xl border bg-white">
            <table className="w-full">
                <thead className="bg-slate-100">
                    <tr>
                        <th className="p-4 text-left">Title</th>
                        <th className="p-4 text-left">Category</th>
                        <th className="p-4 text-left">Budget</th>
                        <th className="p-4 text-left">Deadline</th>
                        <th className="p-4 text-left">Status</th>
                        <th className="p-4 text-center">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {jobs.map((job) => (
                        <tr
                            key={job._id}
                            className="border-t"
                        >
                            <td className="p-4">{job.title}</td>

                            <td className="p-4">
                                {job.category}
                            </td>

                            <td className="p-4">
                                ৳{job.minPrice} - ৳{job.maxPrice}
                            </td>

                            <td className="p-4">
                                {job.deadline}
                            </td>

                            <td className="p-4">
                                <span
                                    className={`rounded-full px-3 py-1 text-xs font-medium ${job.status === "active"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                        }`}
                                >
                                    {job.status}
                                </span>
                            </td>

                            <td className="p-4">
                                <div className="flex justify-center gap-3">
                                    <Link
                                        href={`/dashboard/edit-job/${job._id}`}
                                        className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
                                    >
                                        Edit
                                    </Link>

                                    <button
                                        onClick={() => handleDelete(job._id!)}
                                        className="rounded bg-red-500 px-3 py-1 text-white"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}