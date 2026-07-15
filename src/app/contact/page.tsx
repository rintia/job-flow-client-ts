import Container from "@/components/layout/Container";

export default function ContactPage() {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-3xl rounded-2xl border bg-white p-10 shadow-sm">
          <h1 className="mb-6 text-4xl font-bold text-slate-900">
            Contact Us
          </h1>

          <p className="mb-10 text-slate-600">
            We'd love to hear from you. Feel free to reach out using the
            information below.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="font-semibold text-slate-900">Email</h2>
              <p className="text-slate-600">
                contact@jobflow.com
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-slate-900">Phone</h2>
              <p className="text-slate-600">
                +880 1700-000000
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-slate-900">Address</h2>
              <p className="text-slate-600">
                Dhaka, Bangladesh
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-slate-900">
                Business Hours
              </h2>
              <p className="text-slate-600">
                Sunday - Thursday: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}