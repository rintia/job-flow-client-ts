import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import {
  ShieldCheck,
  Clock3,
  CreditCard,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Verified Employers",
    description: "Every employer is verified for a safer hiring experience.",
    icon: <ShieldCheck className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Fast Hiring",
    description: "Connect with the right people without unnecessary delays.",
    icon: <Clock3 className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Secure Payments",
    description: "Reliable and transparent payment process for freelancers.",
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Growing Community",
    description: "Thousands of professionals and companies trust JobFlow.",
    icon: <Users className="h-8 w-8 text-blue-600" />,
  },
];

export default function WhyChooseJobFlow() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            Why Choose JobFlow?
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title}>
              <div>{feature.icon}</div>

              <h3 className="mt-4 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}