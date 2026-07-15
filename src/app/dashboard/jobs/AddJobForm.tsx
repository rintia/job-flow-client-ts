"use client";
interface AddJobFormProps {
    isEdit?: boolean;
    jobId?: string;
}
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import {
    JobFormData,
    jobSchema,
} from "@/schemas/job.schema";

import { jobService } from "@/services/job.service";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export default function AddJobForm({
    isEdit = false,
    jobId,
}: AddJobFormProps) {
    const categories = [
        "Web Development",
        "Mobile Development",
        "UI/UX Design",
        "Graphic Design",
        "Digital Marketing",
        "Content Writing",
        "Data Entry",
        "Customer Support",
        "Accounting",
        "Sales & Marketing",
        "Business",
        "Teaching",
        "Engineering",
        "Other",
    ];
    const router = useRouter();
    const { user } = useCurrentUser();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<JobFormData>({
        resolver: zodResolver(jobSchema),
    });

    useEffect(() => {
        if (!isEdit || !jobId) return;

        const fetchJob = async () => {
            try {
                const job = await jobService.getJobById(jobId);

                reset({
                    title: job.title,
                    company: job.company,
                    companyLogo: job.companyLogo,
                    location: job.location,
                    category: job.category,
                    employmentType: job.employmentType,
                    minPrice: job.minPrice,
                    maxPrice: job.maxPrice,
                    deadline: job.deadline,
                    requirements: job.requirements,
                    description: job.description,
                });
            } catch (error) {
                console.error(error);
                toast.error("Failed to load job");
            }
        };

        fetchJob();
    }, [isEdit, jobId, reset]);

const onSubmit = async (data: JobFormData) => {
    try {

        const payload = {
            ...data,
            email: user?.email,
            clientName: user?.name,
            status: "active",
            createdAt: new Date(),
        };
        if (isEdit && jobId) {
            await jobService.updateJob(jobId, payload);

            toast.success("Job updated successfully!");
        } else {
            await jobService.createJob(payload);

            toast.success("Job posted successfully!");
        }

        reset();

        router.push("/dashboard/my-jobs");
    } catch (error) {
        console.error(error);

        toast.error("Failed to post job");
    }
};

return (
    <div className="mx-auto max-w-5xl rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="mb-2 text-3xl font-bold">
            Post a New Job
        </h1>

        <p className="mb-8 text-slate-500">
            Fill in the job details below.
        </p>

        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
        >
            {/* ================== BASIC INFO ================== */}

            <div>
                <h2 className="mb-5 text-lg font-semibold">
                    Job Information
                </h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {/* Job Title */}

                    <InputField
                        label="Job Title"
                        placeholder="Frontend Developer"
                        register={register("title")}
                        error={errors.title?.message}
                    />

                    {/* Company */}

                    <InputField
                        label="Company"
                        placeholder="Google"
                        register={register("company")}
                        error={errors.company?.message}
                    />

                    {/* Logo */}

                    <InputField
                        label="Company Logo URL"
                        placeholder="https://..."
                        register={register("companyLogo")}
                        error={errors.companyLogo?.message}
                    />

                    {/* Location */}

                    <InputField
                        label="Location"
                        placeholder="Dhaka"
                        register={register("location")}
                        error={errors.location?.message}
                    />

                    {/* Category */}

                    <div>
                        <label className="mb-2 block font-medium">
                            Category
                        </label>

                        <select
                            {...register("category")}
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                        >
                            <option value="">Select Category</option>

                            {categories.map((category) => (
                                <option
                                    key={category}
                                    value={category}
                                >
                                    {category}
                                </option>
                            ))}
                        </select>

                        {errors.category && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.category.message}
                            </p>
                        )}
                    </div>

                    {/* Minimum Price */}

                    <InputField
                        label="Minimum Budget"
                        type="number"
                        placeholder="10000"
                        register={register("minPrice", {
                            valueAsNumber: true,
                        })}
                        error={errors.minPrice?.message}
                    />

                    {/* Maximum Price */}

                    <InputField
                        label="Maximum Budget"
                        type="number"
                        placeholder="50000"
                        register={register("maxPrice", {
                            valueAsNumber: true,
                        })}
                        error={errors.maxPrice?.message}
                    />

                    {/* Employment */}

                    <div>
                        <label className="mb-2 block font-medium">
                            Employment Type
                        </label>

                        <select
                            {...register("employmentType")}
                            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                        >
                            <option value="">Select Type</option>

                            <option value="Full-time">
                                Full-time
                            </option>

                            <option value="Part-time">
                                Part-time
                            </option>

                            <option value="Remote">
                                Remote
                            </option>

                            <option value="Internship">
                                Internship
                            </option>
                        </select>

                        {errors.employmentType && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.employmentType.message}
                            </p>
                        )}
                    </div>

                    {/* Deadline */}

                    <InputField
                        label="Application Deadline"
                        type="date"
                        register={register("deadline")}
                        error={errors.deadline?.message}
                    />
                </div>
            </div>

            {/* ================= REQUIREMENTS ================= */}

            <div>
                <label className="mb-2 block font-medium">
                    Requirements
                </label>

                <textarea
                    rows={5}
                    {...register("requirements")}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                />

                {errors.requirements && (
                    <p className="mt-1 text-sm text-red-500">
                        {errors.requirements.message}
                    </p>
                )}
            </div>

            {/* ================= DESCRIPTION ================= */}

            <div>
                <label className="mb-2 block font-medium">
                    Description
                </label>

                <textarea
                    rows={7}
                    {...register("description")}
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
                />

                {errors.description && (
                    <p className="mt-1 text-sm text-red-500">
                        {errors.description.message}
                    </p>
                )}
            </div>

            {/* ================= BUTTON ================= */}

            <button
                disabled={isSubmitting}
                className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
                {isSubmitting
                    ? isEdit
                        ? "Updating..."
                        : "Publishing..."
                    : isEdit
                        ? "Update Job"
                        : "Publish Job"}
            </button>
        </form>
    </div>
);
}

interface InputProps {
    label: string;
    placeholder?: string;
    type?: string;
    register: any;
    error?: string;
}

function InputField({
    label,
    placeholder,
    type = "text",
    register,
    error,
}: InputProps) {
    return (
        <div>
            <label className="mb-2 block font-medium">
                {label}
            </label>

            <input
                type={type}
                placeholder={placeholder}
                {...register}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
            />

            {error && (
                <p className="mt-1 text-sm text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
}