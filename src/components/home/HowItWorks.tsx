import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import { UserPlus, BriefcaseBusiness, BadgeCheck } from "lucide-react";

const steps = [
  {
    title: "Create an Account",
    description:
      "Sign up as an employer or freelancer in just a few minutes.",
    icon: <UserPlus className="h-10 w-10 text-blue-600" />,
  },
  {
    title: "Post or Find Jobs",
    description:
      "Employers post projects while freelancers browse opportunities.",
    icon: <BriefcaseBusiness className="h-10 w-10 text-blue-600" />,
  },
  {
    title: "Hire & Get Paid",
    description:
      "Collaborate securely and complete projects with confidence.",
    icon: <BadgeCheck className="h-10 w-10 text-blue-600" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            How It Works
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={step.title}>
              <span className="text-sm font-bold text-blue-600">
                0{index + 1}
              </span>

              <div className="my-4">{step.icon}</div>

              <h3 className="text-xl font-semibold">{step.title}</h3>

              <p className="mt-3 text-slate-600">{step.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}