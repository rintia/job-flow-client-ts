import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";

const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Frontend Developer",
    review:
      "JobFlow helped me land my first remote job within a week. The process was simple and smooth.",
  },
  {
    name: "David Wilson",
    role: "Startup Founder",
    review:
      "We hired an excellent React developer through JobFlow in just three days.",
  },
  {
    name: "Nusrat Jahan",
    role: "UI/UX Designer",
    review:
      "A clean platform with quality job opportunities and verified employers.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            What Our Users Say
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <p className="text-lg">⭐⭐⭐⭐⭐</p>

              <p className="mt-4 italic text-slate-600">
                "{testimonial.review}"
              </p>

              <h4 className="mt-6 font-bold">
                {testimonial.name}
              </h4>

              <p className="text-sm text-slate-500">
                {testimonial.role}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}