export interface Bid {
  _id?: string;

  jobId: string;
  jobTitle: string;

  clientEmail: string;

  freelancerEmail: string;
  freelancerName: string;

  bidAmount: number;
  deliveryDays: number;

  coverLetter: string;

  status: "Pending" | "Accepted" | "Rejected";

  createdAt: Date;
}