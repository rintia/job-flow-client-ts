import Container from "@/components/layout/Container";

const faqs = [
  {
    question: "How do I apply for a job?",
    answer:
      "Create an account, browse available jobs, and submit your bid or application.",
  },
  {
    question: "Is JobFlow free?",
    answer:
      "Yes, creating an account and browsing jobs is completely free.",
  },
  {
    question: "How do employers hire freelancers?",
    answer:
      "Employers review applications, compare bids, and hire the best candidate.",
  },
  {
    question: "Are payments secure?",
    answer:
      "JobFlow is designed to support secure and transparent transactions.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-4xl font-bold">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <summary className="cursor-pointer font-semibold">
                  {faq.question}
                </summary>

                <p className="mt-3 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}