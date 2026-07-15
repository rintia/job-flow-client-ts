"use client";

import Link from "next/link";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export default function AdminDashboard() {
  const { user } = useCurrentUser();

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-slate-700 p-8 text-white">
        <h1 className="text-3xl font-bold">
          Welcome, {user?.name}! 👑
        </h1>

        <p className="mt-2 text-slate-300">
          Manage your freelancer marketplace from one place.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Total Users</p>
          <h2 className="mt-2 text-3xl font-bold">--</h2>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Total Jobs</p>
          <h2 className="mt-2 text-3xl font-bold">--</h2>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Total Bids</p>
          <h2 className="mt-2 text-3xl font-bold">--</h2>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Active Jobs</p>
          <h2 className="mt-2 text-3xl font-bold">--</h2>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-6 md:grid-cols-3">
        <Link
          href="/dashboard/users"
          className="rounded-xl border bg-white p-6 transition hover:shadow-md"
        >
          <h2 className="text-lg font-semibold">👥 Manage Users</h2>

          <p className="mt-2 text-sm text-slate-600">
            View and manage registered users.
          </p>
        </Link>

        <Link
          href="/dashboard/jobs"
          className="rounded-xl border bg-white p-6 transition hover:shadow-md"
        >
          <h2 className="text-lg font-semibold">💼 Manage Jobs</h2>

          <p className="mt-2 text-sm text-slate-600">
            Monitor and remove job postings.
          </p>
        </Link>

        <Link
          href="/dashboard/profile"
          className="rounded-xl border bg-white p-6 transition hover:shadow-md"
        >
          <h2 className="text-lg font-semibold">👤 My Profile</h2>

          <p className="mt-2 text-sm text-slate-600">
            View your administrator profile.
          </p>
        </Link>
      </div>

      {/* Note */}
      <div className="rounded-xl border bg-blue-50 p-6">
        <h2 className="text-lg font-semibold text-blue-700">
          Admin Panel
        </h2>

        <p className="mt-2 text-slate-600">
          From here you can oversee users, job listings, and platform activity.
        </p>
      </div>
    </div>
  );
}