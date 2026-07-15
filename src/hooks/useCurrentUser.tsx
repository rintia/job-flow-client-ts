"use client";

import { useSession } from "@/lib/auth-client";

export function useCurrentUser() {
  const { data, isPending, error, refetch } = useSession();

  return {
    user: data?.user,
    session: data?.session,
    loading: isPending,
    error,
    refetch,
  };
}