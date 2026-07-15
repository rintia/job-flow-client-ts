"use client";

import Link from "next/link";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export default function DashboardPage() {
  const { user } = useCurrentUser();

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
        <h1 className="text-3xl font-bold">
          Welcome back, {user?.name}! 👋
        </h1>

        <p className="mt-2 text-blue-100">
          Manage your jobs, bids, and profile from one place.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-6 md:grid-cols-3">
        <Link
          href="/dashboard/profile"
          className="rounded-xl border bg-white p-6 transition hover:shadow-md"
        >
          <h2 className="text-lg font-semibold">👤 Profile</h2>
          <p className="mt-2 text-sm text-slate-600">
            View your account information.
          </p>
        </Link>

        <Link
          href="/dashboard/jobs"
          className="rounded-xl border bg-white p-6 transition hover:shadow-md"
        >
          <h2 className="text-lg font-semibold">💼 My Jobs</h2>
          <p className="mt-2 text-sm text-slate-600">
            Manage your posted jobs.
          </p>
        </Link>

        <Link
          href="/dashboard/my-bids"
          className="rounded-xl border bg-white p-6 transition hover:shadow-md"
        >
          <h2 className="text-lg font-semibold">📝 My Bids</h2>
          <p className="mt-2 text-sm text-slate-600">
            Track your submitted bids.
          </p>
        </Link>
      </div>

      {/* Tips */}
      <div className="rounded-xl border bg-white p-6">
        <h2 className="text-xl font-semibold">
          Getting Started
        </h2>

        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
          <li>Complete your profile information.</li>
          <li>Browse jobs and submit competitive bids.</li>
          <li>Clients can post and manage job listings.</li>
        </ul>
      </div>
    </div>
  );
}