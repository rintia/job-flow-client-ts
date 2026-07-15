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
};