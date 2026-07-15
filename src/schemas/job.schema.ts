import { z } from "zod";

export const jobSchema = z.object({
  title: z
    .string()
    .min(5, "Job title must be at least 5 characters"),

  company: z
    .string()
    .min(2, "Company name is required"),

  companyLogo: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),

  location: z
    .string()
    .min(2, "Location is required"),

  category: z.enum([
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Graphics Design",
    "Digital Marketing",
    "Content Writing",
    "Data Entry",
    "Customer Support",
    "Sales",
    "Accounting",
    "Other",
  ]),

  employmentType: z.enum([
    "Full-time",
    "Part-time",
    "Remote",
    "Internship",
  ]),

  minPrice: z
    .number()
    .min(1, "Minimum budget must be greater than 0"),

  maxPrice: z
    .number()
    .min(1, "Maximum budget must be greater than 0"),

  deadline: z.string().min(1, "Deadline is required"),

  requirements: z
    .string()
    .min(20, "Requirements should be at least 20 characters"),

  description: z
    .string()
    .min(30, "Description should be at least 30 characters"),
});

export type JobFormData = z.input<typeof jobSchema>;