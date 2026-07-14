import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="text-3xl font-bold tracking-tight">
      <span className="text-slate-900">Job</span>
      <span className="text-blue-600">Flow</span>
    </Link>
  );
}