"use client";

import Link from "next/link";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import type { AppUser } from "@/types/auth";

export default function DashboardSidebar() {
  const { user } = useCurrentUser();

  const currentUser = user as AppUser | undefined;

  return (
    <aside className="min-h-screen w-72 border-r bg-white p-6">
      <h2 className="mb-8 text-2xl font-bold text-blue-600">
        Dashboard
      </h2>

      <div className="space-y-2">
        {currentUser?.role === "admin" ? (
          <>
            <Link
              href="/dashboard/admin"
              className="block rounded-lg px-4 py-3 hover:bg-slate-100"
            >
              Dashboard
            </Link>

            <Link
              href="/dashboard/admin/users"
              className="block rounded-lg px-4 py-3 hover:bg-slate-100"
            >
              Manage Users
            </Link>

            <Link
              href="/dashboard/admin/jobs"
              className="block rounded-lg px-4 py-3 hover:bg-slate-100"
            >
              Manage Jobs
            </Link>
          </>
        ) : (
          <>
            <Link
              href="/dashboard"
              className="block rounded-lg px-4 py-3 hover:bg-slate-100"
            >
              Dashboard
            </Link>

            <Link
              href="/dashboard/add-job"
              className="block rounded-lg px-4 py-3 hover:bg-slate-100"
            >
              Add Job
            </Link>

            <Link
              href="/dashboard/my-jobs"
              className="block rounded-lg px-4 py-3 hover:bg-slate-100"
            >
              My Jobs
            </Link>

            <Link
              href="/dashboard/my-bids"
              className="block rounded-lg px-4 py-3 hover:bg-slate-100"
            >
              My Bids
            </Link>

            <Link
              href="/dashboard/profile"
              className="block rounded-lg px-4 py-3 hover:bg-slate-100"
            >
              Profile
            </Link>
          </>
        )}
      </div>
    </aside>
  );
}