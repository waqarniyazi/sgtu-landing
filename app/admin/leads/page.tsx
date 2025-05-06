import { LeadsTable } from "@/components/admin/leads-table"
import { getAllLeads } from "@/lib/models/lead"

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: { page?: string; search?: string }
}) {
  const page = searchParams.page ? Number.parseInt(searchParams.page) : 1
  const search = searchParams.search || ""

  const { leads, total, totalPages, currentPage } = await getAllLeads(page, 10, search)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Leads Management</h1>
        <p className="text-muted-foreground">Manage and track all prospective student leads</p>
      </div>

      <LeadsTable
        leads={leads}
        totalLeads={total}
        totalPages={totalPages}
        currentPage={currentPage}
        searchQuery={search}
      />
    </div>
  )
}
