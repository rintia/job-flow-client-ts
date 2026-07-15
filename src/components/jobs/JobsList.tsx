"use client";

import { useEffect, useState } from "react";
import { Job } from "@/types/job";
import { jobService } from "@/services/job.service";
import JobCard from "./JobCard";


export default function JobsList() {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("");

    const [minPrice, setMinPrice] = useState("");
    const fetchJobs = async () => {
        const data = await jobService.getAllJobs(
            search,
            category,
            minPrice
        );

        setJobs(data);
    };
    useEffect(() => {
        fetchJobs();
    }, [search, category, minPrice]);

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

            <div className="mb-8 grid gap-4 md:grid-cols-4">

                <input
                    placeholder="Search jobs..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border rounded-lg p-3"
                />

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border rounded-lg p-3"
                >

                    <option value="">All Categories</option>

                    <option>Web Development</option>

                    <option>UI/UX Design</option>

                    <option>Graphic Design</option>

                    <option>Mobile Development</option>

                    <option>Digital Marketing</option>

                </select>

                <input
                    type="number"
                    placeholder="Minimum Budget"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="border rounded-lg p-3"
                />

                <button
                    onClick={fetchJobs}
                    className="bg-blue-600 text-white rounded-lg"
                >

                    Search

                </button>

            </div>

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