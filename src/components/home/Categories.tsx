import Container from "@/components/layout/Container";
import Card from "@/components/ui/Card";
import {
  Code2,
  Palette,
  Database,
  Smartphone,
  Megaphone,
  PenTool,
} from "lucide-react";

const categories = [
  {
    title: "Web Development",
    jobs: 320,
    icon: <Code2 className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "UI/UX Design",
    jobs: 185,
    icon: <Palette className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Backend Development",
    jobs: 240,
    icon: <Database className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Mobile Development",
    jobs: 150,
    icon: <Smartphone className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Digital Marketing",
    jobs: 112,
    icon: <Megaphone className="h-8 w-8 text-blue-600" />,
  },
  {
    title: "Graphics Design",
    jobs: 198,
    icon: <PenTool className="h-8 w-8 text-blue-600" />,
  },
];

export default function Categories() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Browse Categories
          </h2>
          <p className="mt-3 text-slate-600">
            Find opportunities that match your expertise.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Card key={category.title}>
              <div className="mb-4">{category.icon}</div>

              <h3 className="text-xl font-semibold text-slate-900">
                {category.title}
              </h3>

              <p className="mt-2 text-slate-600">
                {category.jobs}+ Jobs Available
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}