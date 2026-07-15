import DashboardSidebar from "@/components/dashboard/DashboardSidebar";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="mx-auto flex max-w-7xl">
        <DashboardSidebar />

        <section className="flex-1 p-6">
          {children}
        </section>
      </div>
    </main>
  );
}