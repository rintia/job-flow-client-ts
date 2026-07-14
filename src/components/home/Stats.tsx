import Container from "@/components/layout/Container";

const stats = [
  {
    value: "15K+",
    label: "Jobs Posted",
  },
  {
    value: "8K+",
    label: "Freelancers",
  },
  {
    value: "2K+",
    label: "Companies",
  },
  {
    value: "96%",
    label: "Success Rate",
  },
];

export default function Stats() {
  return (
    <section className="py-16">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:shadow-md"
            >
              <h2 className="text-4xl font-bold text-blue-600">
                {item.value}
              </h2>

              <p className="mt-2 text-slate-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}