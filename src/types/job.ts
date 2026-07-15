export interface Job {
    _id?: string;

    title: string;
    company: string;
    location: string;
    category: string;

    employmentType:
    | "Full-time"
    | "Part-time"
    | "Remote"
    | "Internship";

    minPrice: number;
    maxPrice: number;

    deadline: string;

    description: string;

    requirements: string;

    companyLogo?: string;

    postedBy: string;

    postedByName: string;

     email: string;
     
    status: "active" | "closed";

    createdAt: string;
}