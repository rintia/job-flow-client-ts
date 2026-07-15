import Container from "@/components/layout/Container";

export default function AboutPage() {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-bold text-slate-900">
            About JobFlow
          </h1>

          <p className="mb-6 text-lg leading-8 text-slate-600">
            JobFlow is a modern freelance marketplace that connects talented
            freelancers with clients looking for quality services. Our goal is
            to make hiring and finding freelance opportunities simple, secure,
            and efficient.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <h2 className="mb-3 text-xl font-semibold text-blue-600">
                Our Mission
              </h2>

              <p className="text-slate-600">
                Empower freelancers and clients by providing a reliable platform
                to collaborate and grow together.
              </p>
            </div>

            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <h2 className="mb-3 text-xl font-semibold text-blue-600">
                What We Offer
              </h2>

              <p className="text-slate-600">
                Browse jobs, post projects, submit bids, and manage everything
                from one easy-to-use dashboard.
              </p>
            </div>

            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <h2 className="mb-3 text-xl font-semibold text-blue-600">
                Why Choose Us
              </h2>

              <p className="text-slate-600">
                Clean interface, secure authentication, and an efficient bidding
                system designed for modern freelancers.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}