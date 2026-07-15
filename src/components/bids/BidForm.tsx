"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { useCurrentUser } from "@/hooks/useCurrentUser";
import { jobService } from "@/services/job.service";
import { bidService } from "@/services/bid.service";

import { bidSchema, BidFormData, BidFormInput } from "@/schemas/bid.schema";
import { Job } from "@/types/job";

interface Props {
    jobId: string;
}

export default function BidForm({ jobId }: Props) {
    const router = useRouter();

    const { user } = useCurrentUser();

    const [job, setJob] = useState<Job | null>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<
        BidFormInput,
        any,
        BidFormData
    >({
        resolver: zodResolver(bidSchema),
    });

    useEffect(() => {
        const loadJob = async () => {
            const data = await jobService.getJobById(jobId);
            setJob(data);
        };

        loadJob();
    }, [jobId]);

    const onSubmit = async (data: BidFormData) => {
        if (!user || !job) return;

        try {
            await bidService.createBid({
                jobId: job._id!,
                jobTitle: job.title,

                clientEmail: job.email,

                freelancerEmail: user.email,
                freelancerName: user.name,

                bidAmount: data.bidAmount,
                deliveryDays: data.deliveryDays,
                coverLetter: data.coverLetter,

                status: "Pending",

                createdAt: new Date(),
            });

            toast.success("Bid submitted successfully!");

            router.push("/dashboard/my-bids");
        } catch {
            toast.error("Failed to submit bid");
        }
    };

    if (!job) {
        return (
            <div className="py-20 text-center">
                Loading...
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-2xl py-10">
            {/* Form goes here */}
            <h1 className="mb-6 text-3xl font-bold">
                Place Bid
            </h1>

            <p className="mb-8 text-slate-600">
                {job.title}
            </p>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5 rounded-xl border bg-white p-6"
            >
                <div>
                    <label className="mb-2 block font-medium">
                        Bid Amount
                    </label>

                    <input
                        type="number"
                        {...register("bidAmount")}
                        className="w-full rounded-lg border p-3"
                    />

                    <p className="text-sm text-red-500">
                        {errors.bidAmount?.message}
                    </p>
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        Delivery Days
                    </label>

                    <input
                        type="number"
                        {...register("deliveryDays")}
                        className="w-full rounded-lg border p-3"
                    />

                    <p className="text-sm text-red-500">
                        {errors.deliveryDays?.message}
                    </p>
                </div>

                <div>
                    <label className="mb-2 block font-medium">
                        Cover Letter
                    </label>

                    <textarea
                        rows={6}
                        {...register("coverLetter")}
                        className="w-full rounded-lg border p-3"
                    />

                    <p className="text-sm text-red-500">
                        {errors.coverLetter?.message}
                    </p>
                </div>

                <button
                    disabled={isSubmitting}
                    className="rounded-lg bg-blue-600 px-6 py-3 text-white"
                >
                    {isSubmitting ? "Submitting..." : "Submit Bid"}
                </button>
            </form>
        </div>
    );
}