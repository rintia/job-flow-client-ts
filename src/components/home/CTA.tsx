import Link from "next/link";
import Container from "@/components/layout/Container";

export default function CTA() {
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-3xl bg-blue-600 px-8 py-16 text-center text-white">
          <h2 className="text-4xl font-bold">
            Ready to Find Your Next Opportunity?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Join thousands of employers and freelancers building successful
            careers with JobFlow.
          </p>

          <Link
            href="/register"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3 font-semibold text-blue-600 transition hover:bg-slate-100"
          >
            Get Started Today
          </Link>
        </div>
      </Container>
    </section>
  );
}