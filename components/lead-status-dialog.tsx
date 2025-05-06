"use client"

import { useState } from "react"
import type { Lead } from "@/lib/models/lead"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

interface LeadStatusDialogProps {
  lead: Lead | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onStatusUpdate: (id: string, status: Lead["status"]) => void
}

const statusOptions: Lead["status"][] = [
  "No Answer",
  "Visit Office",
  "Home Visit",
  "Not Interested",
  "Call Back Later",
  "Enrolled",
]

export function LeadStatusDialog({ lead, open, onOpenChange, onStatusUpdate }: LeadStatusDialogProps) {
  const [status, setStatus] = useState<Lead["status"]>(lead?.status || "No Answer")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async () => {
    if (!lead?.id) return

    setIsLoading(true)
    await onStatusUpdate(lead.id, status)
    setIsLoading(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Lead Status</DialogTitle>
          <DialogDescription>Update the status for {lead?.name}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <div id="name" className="col-span-3">
              {lead?.name}
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <div id="email" className="col-span-3">
              {lead?.email}
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              Phone
            </Label>
            <div id="phone" className="col-span-3">
              {lead?.phone}
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <Select value={status} onValueChange={(value) => setStatus(value as Lead["status"])} disabled={isLoading}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)} disabled={isLoading}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? "Updating..." : "Update Status"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
