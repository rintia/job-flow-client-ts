import Link from "next/link";
import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechNova",
    location: "Remote",
    salary: "$2500 - $3500",
    category: "Web Development",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Pixel Studio",
    location: "Dhaka",
    salary: "$1800 - $2500",
    category: "Design",
  },
  {
    id: 3,
    title: "Backend Engineer",
    company: "CloudCore",
    location: "Hybrid",
    salary: "$3000 - $4500",
    category: "Backend",
  },
  {
    id: 4,
    title: "Digital Marketer",
    company: "GrowthLab",
    location: "Remote",
    salary: "$1500 - $2200",
    category: "Marketing",
  },
];

export default function FeaturedJobs() {
  return (
    <section className="py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Featured Jobs
          </h2>

          <p className="mt-3 text-slate-600">
            Explore some of the latest opportunities from trusted employers.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {jobs.map((job) => (
            <Card key={job.id}>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                {job.category}
              </span>

              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {job.title}
              </h3>

              <p className="mt-2 text-slate-600">
                {job.company}
              </p>

              <p className="mt-1 text-sm text-slate-500">
                📍 {job.location}
              </p>

              <p className="mt-3 font-semibold text-blue-600">
                {job.salary}
              </p>

              <Link
                href={`/jobs/${job.id}`}
                className="mt-6 inline-block font-medium text-blue-600 hover:underline"
              >
                View Details →
              </Link>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/jobs"
            className="inline-flex rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Browse All Jobs
          </Link>
        </div>
      </Container>
    </section>
  );
}