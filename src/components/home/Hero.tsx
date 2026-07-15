import Link from "next/link";
import Container from "@/components/layout/Container";
import HeroJobCard from "./HeroJobCard";
import { mockJobs } from "@/data/mockJobs";

export default function Hero() {
    return (
        <section className="bg-slate-50 py-20 lg:py-28">
            <Container>
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left Side */}
                    <div>
                        <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                            🚀 Modern Freelancing Platform
                        </span>

                        <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
                            Connect with the right people.
                            <span className="block text-blue-600">
                                Build your future.
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                            Whether you're hiring top talent or looking for your next
                            freelance opportunity, JobFlow makes it simple, secure, and fast.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="/jobs"
                                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                            >
                                Explore Jobs
                            </Link>

                            <Link
                                href="/dashboard/add-job"
                                className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
                            >
                                Post a Job
                            </Link>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="relative hidden min-h-[550px] lg:block">
                        <HeroJobCard
                            {...mockJobs[0]}
                            className="absolute top-0 right-0 w-96 rotate-3"
                        />

                        <HeroJobCard
                            {...mockJobs[1]}
                            className="absolute top-44 left-0 w-80 -rotate-6"
                        />

                        <HeroJobCard
                            {...mockJobs[2]}
                            className="absolute bottom-0 right-8 w-80 rotate-2"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}