import axios from "axios";


import { Bid } from "@/types/bid";

const API = process.env.NEXT_PUBLIC_API_URL;

export const bidService = { 

createBid: async (payload: Bid) => {
  const { data } = await axios.post(
    `${API}/bids`,
    payload,
    {
      withCredentials: true,
    }
  );

  return data;
},

getMyBids: async (email: string) => {
  const { data } = await axios.get(
    `${API}/bids?email=${email}`,
    {
      withCredentials: true,
    }
  );

  return data.data;
},
}