"use client";

import Link from "next/link";

interface ComingSoonProps {
  title: string;
}

export default function ComingSoon({ title }: ComingSoonProps) {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="max-w-xl rounded-2xl border bg-white p-10 text-center shadow-sm">
        <div className="mb-6 text-6xl">🚧</div>

        <h1 className="text-3xl font-bold text-slate-900">
          {title}
        </h1>

        <p className="mt-4 leading-7 text-slate-600">
          This feature is currently under development and will be available in a
          future update.
        </p>

        <p className="mt-2 text-slate-500">
          We're actively working on bringing this feature to JobFlow.
        </p>

        <Link
          href="/dashboard"
          className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}