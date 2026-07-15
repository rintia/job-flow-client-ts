import JobDetails from "@/components/jobs/JobDetails";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function JobDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  return <JobDetails id={id} />;
}