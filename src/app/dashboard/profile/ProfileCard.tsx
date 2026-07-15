"use client";

import Image from "next/image";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export default function ProfileCard() {
    const { user, loading } = useCurrentUser();

    if (loading) {
        return (
            <div className="py-20 text-center">
                Loading...
            </div>
        );
    }

    if (!user) {
        return (
            <div className="py-20 text-center">
                User not found.
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-3xl rounded-2xl border bg-white p-8 shadow-sm">
            <div className="flex flex-col items-center gap-6 md:flex-row">


                <div className="flex-1">
                    <h1 className="text-3xl font-bold text-slate-900">
                        {user.name}
                    </h1>

                    <p className="mt-2 text-slate-600">
                        {user.email}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                        <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
                            {(user as any).role}
                        </span>

                        <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
                            Verified Account
                        </span>
                    </div>

                    <div className="rounded-xl mt-2 border p-6">
                        <p className="text-sm text-slate-500">
                            Email Status
                        </p>

                        <h2 className="mt-2 text-2xl font-bold text-green-600">
                            Verified
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}