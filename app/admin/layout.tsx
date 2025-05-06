import React, { type ReactNode } from "react"
import type { Metadata } from "next"
import { getServerSession } from "next-auth/next"
// import { redirect } from "next/navigation"      // ← remove redirect import
import { authOptions } from "@/lib/auth"
import { AdminSidebar } from "@/components/admin/sidebar"
import { AdminHeader } from "@/components/admin/header"
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "Admin Dashboard | SGTU",
  description: "Sikkim Global Technical University Admin Dashboard",
}

export default async function AdminLayout({
  children,
}: {
  children: ReactNode
}) {
  // still grab session for UI, but do NOT redirect here:
  const session = await getServerSession(authOptions)

  return (
    <div className="flex min-h-screen bg-background">
      {session && <AdminSidebar />}
      <div className="flex flex-col flex-1">
        {session && <AdminHeader user={session.user} />}
        <main className="flex-1 p-5 ml-0 md:ml-64 md:p-6">
          {children}
        </main>
      </div>
      <Toaster />
    </div>
  )
}