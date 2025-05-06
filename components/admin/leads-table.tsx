"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import type { Lead } from "@/lib/models/lead"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { LeadStatusDialog } from "@/components/admin/lead-status-dialog"
import { Search, PhoneCall, Plus, Download } from "lucide-react"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ApplyDialog } from "@/components/apply-dialog"
import * as XLSX from "xlsx"

interface LeadsTableProps {
  leads: Lead[]
  totalLeads: number
  totalPages: number
  currentPage: number
  searchQuery: string
}

export function LeadsTable({
  leads,
  totalLeads,
  totalPages,
  currentPage,
  searchQuery,
}: LeadsTableProps) {
  const router = useRouter()
  const [search, setSearch] = useState(searchQuery)
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [courseFilter, setCourseFilter] = useState<string>("all")
  const [statusFilter, setStatusFilter] = useState<Lead["status"] | "all">("all")

  const courseOptions = Array.from(new Set(leads.map((l) => l.course))).sort()
  const statusOptions: Lead["status"][] = [
    "No Answer",
    "Visit Office",
    "Home Visit",
    "Not Interested",
    "Call Back Later",
    "Enrolled",
  ]

  const filteredLeads = leads.filter(
    (lead) =>
      (courseFilter === "all" || lead.course === courseFilter) &&
      (statusFilter === "all" || lead.status === statusFilter)
  )

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/admin/leads?search=${encodeURIComponent(search)}`)
  }

  const handleStatusUpdate = async (id: string, status: Lead["status"]) => {
    try {
      const response = await fetch(`/api/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      })
      if (!response.ok) throw new Error("Failed to update lead status")
      toast.success("Lead status updated successfully")
      router.refresh()
    } catch (error) {
      toast.error("Failed to update lead status")
      console.error(error)
    } finally {
      setIsDialogOpen(false)
      setSelectedLead(null)
    }
  }

  const formatDate = (date: Date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })

  async function exportLeads() {
    try {
      const res = await fetch(`/api/leads?limit=${totalLeads}`, { method: "GET" })
      if (!res.ok) throw new Error("Failed to fetch leads")
      const { leads: allLeads } = await res.json()
      const ws = XLSX.utils.json_to_sheet(allLeads)
      const wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, ws, "Leads")
      XLSX.writeFile(wb, "leads.xlsx")
    } catch (err) {
      console.error(err)
      toast.error("Failed to export leads")
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 items-end sm:items-center justify-between">
        <form onSubmit={handleSearch} className="flex flex-wrap w-full sm:w-auto gap-2">
          <Input
            placeholder="Search leads..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-xs"
          />
          <Button type="submit" size="icon">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>

          {/* Course Filter */}
          <Select
            value={courseFilter}
            onValueChange={(val) => setCourseFilter(val)}
          >
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Filter Course</SelectItem>
              {courseOptions.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Status Filter */}
          <Select
            value={statusFilter}
            onValueChange={(val) => setStatusFilter(val as Lead["status"] | "all")}
          >
            <SelectTrigger className="w-36">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Filter Status</SelectItem>
              {statusOptions.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Add New Lead */}
          <ApplyDialog>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              <Plus className="mr-1 w-4 h-4" /> New Lead
            </Button>
          </ApplyDialog>

          {/* Export Leads */}
          <Button variant="secondary" size="sm" onClick={exportLeads}>
            <Download className="mr-1 w-4 h-4" /> Export Leads
          </Button>
        </form>

        <div className="text-sm text-muted-foreground">
          Showing {filteredLeads.length} of {totalLeads} leads
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="hidden md:table-cell">Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead className="hidden lg:table-cell">Course</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">Last Updated</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLeads.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                  No leads found
                </TableCell>
              </TableRow>
            ) : (
              filteredLeads.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell className="font-medium">{lead.name}</TableCell>
                  <TableCell className="hidden md:table-cell">{lead.email}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="hidden sm:inline">{lead.phone}</span>
                      <Button
                        variant="default"
                        size="icon"
                        className="bg-[#EF7F1B] hover:bg-[#e8711a] text-white"
                        onClick={() => window.open(`tel:${lead.phone}`)}
                      >
                        <PhoneCall className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell
                    className="hidden lg:table-cell max-w-[200px] truncate"
                    title={lead.course}
                  >
                    {lead.course}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        lead.status === "Enrolled"
                          ? "default"
                          : lead.status === "Not Interested"
                          ? "destructive"
                          : "secondary"
                      }
                    >
                      {lead.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{formatDate(lead.updatedAt)}</TableCell>
                  <TableCell>
                    <Button
                      variant="default"
                      size="sm"
                      className="bg-[#EF7F1B] hover:bg-[#e8711a] text-white"
                      onClick={() => {
                        setSelectedLead(lead)
                        setIsDialogOpen(true)
                      }}
                    >
                      Update
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={
                  currentPage > 1
                    ? `/admin/leads?page=${currentPage - 1}&search=${encodeURIComponent(searchQuery)}`
                    : "#"
                }
                aria-disabled={currentPage <= 1}
                className={currentPage <= 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href={`/admin/leads?page=${page}&search=${encodeURIComponent(searchQuery)}`}
                  isActive={page === currentPage}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href={
                  currentPage < totalPages
                    ? `/admin/leads?page=${currentPage + 1}&search=${encodeURIComponent(searchQuery)}`
                    : "#"
                }
                aria-disabled={currentPage >= totalPages}
                className={currentPage >= totalPages ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}

      <LeadStatusDialog
        lead={selectedLead}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onStatusUpdate={handleStatusUpdate}
      />
    </div>
  )
}