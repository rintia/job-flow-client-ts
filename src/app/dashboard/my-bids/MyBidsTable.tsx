"use client";

import { useEffect, useState } from "react";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { bidService } from "@/services/bid.service";
import { Bid } from "@/types/bid";

export default function MyBidsTable() {
  const { user } = useCurrentUser();

  const [bids, setBids] = useState<Bid[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    const fetchBids = async () => {
      try {
        const data = await bidService.getMyBids(user.email);
        setBids(data);
      } finally {
        setLoading(false);
      }
    };

    fetchBids();
  }, [user]);

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );
  }

  if (!bids.length) {
    return (
      <div className="py-20 text-center text-slate-500">
        You haven't placed any bids yet.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border bg-white">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-4 text-left">Job</th>
            <th className="p-4 text-left">Client</th>
            <th className="p-4 text-left">Bid Amount</th>
            <th className="p-4 text-left">Delivery</th>
            <th className="p-4 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {bids.map((bid) => (
            <tr
              key={bid._id}
              className="border-t"
            >
              <td className="p-4 font-medium">
                {bid.jobTitle}
              </td>

              <td className="p-4">
                {bid.clientEmail}
              </td>

              <td className="p-4">
                ৳{bid.bidAmount}
              </td>

              <td className="p-4">
                {bid.deliveryDays} Days
              </td>

              <td className="p-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    bid.status === "Pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : bid.status === "Accepted"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {bid.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}