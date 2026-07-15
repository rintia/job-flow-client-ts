import axios from "axios";
import { JobFormData } from "@/schemas/job.schema";

const API = process.env.NEXT_PUBLIC_API_URL;

export const jobService = {
  createJob: async (payload: JobFormData) => {
    const { data } = await axios.post(
      `${API}/jobs`,
      payload,
      {
        withCredentials: true,
      }
    );

    return data;
  },

getAllJobs: async (
  search = "",
  category = "",
  minPrice = ""
) => {
  const params = new URLSearchParams();

  if (search) params.append("search", search);

  if (category) params.append("category", category);

  if (minPrice) params.append("minPrice", minPrice);

  const { data } = await axios.get(
    `${API}/jobs?${params.toString()}`
  );

  return data.data;
},


   getMyJobs: async (email: string) => {
    const { data } = await axios.get(
      `${API}/jobs?email=${email}`,
      {
        withCredentials: true,
      }
    );

    return data.data; // Assuming the API response has a 'data' property containing the jobs array
  },

  deleteJob: async (id: string) => {
    const { data } = await axios.delete(
      `${API}/jobs/${id}`,
      {
        withCredentials: true,
      }
    );

    return data.data; // Assuming the API response has a 'data' property containing the deleted job information
  },

  getJobById: async (id: string) => {
  const { data } = await axios.get(
    `${API}/jobs/${id}`,
    {
      withCredentials: true,
    }
  );

  return data.data;
},

updateJob: async (id: string, payload: any) => {
  const { data } = await axios.put(
    `${API}/jobs/${id}`,
    payload,
    {
      withCredentials: true,
    }
  );

  return data.data;
},
};