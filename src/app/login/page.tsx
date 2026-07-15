"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import AuthCard from "@/components/auth/AuthCard";
import { authService } from "@/services/auth.service";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface LoginFormData{
    email:string;
    password:string;
}

export default function LoginPage() {
    const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
  try {

    const result = await authService.signIn({
      email:data.email,
      password:data.password
    });

    console.log(data);

    toast.success("Logged in successfully");
    router.push("/");
  } catch (error) {

    toast.error("Invalid credentials");

  }
};

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-16">
      <AuthCard
        title="Login to Your Account"
        subtitle="Join JobFlow and start your journey today."
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
       

          {/* Email */}

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="john@email.com"
              {...register("email", {
                required: "Email is required",
              })}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}

          <div>
            <label className="mb-2 block text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="********"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Minimum 8 characters",
                },
              })}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
            />

            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>


          {/* Button */}

          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-blue-600 hover:underline"
          >
            Register Now
          </Link>
        </p>
      </AuthCard>
    </main>
  );
}