import BidForm from "@/components/bids/BidForm";


interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function BidPage({ params }: Props) {
  const { id } = await params;
  return <BidForm jobId={id} />;
}