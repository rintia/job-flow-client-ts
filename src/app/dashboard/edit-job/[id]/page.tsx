import AddJobForm from "../../jobs/AddJobForm";


interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditJobPage({ params }: Props) {
  const { id } = await params;

  return <AddJobForm isEdit={true} jobId={id} />;
}