import React, { type ReactElement, type ReactNode } from "react"
import type { Metadata } from "next"
import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import { AdminSidebar } from "@/components/admin/sidebar"
import { AdminHeader } from "@/components/admin/header"
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: "Admin Dashboard | SGTU",
  description: "Sikkim Global Technical University Admin Dashboard",
}

type ChildProps = {
  childProp?: {
    segment?: string
  }
}

export default async function AdminLayout({
  children,
}: {
  children: ReactNode
}) {
  const session = await getServerSession(authOptions)

  // figure out if the child route is the login page
  let childSegment: string | undefined
  if (React.isValidElement(children)) {
    const props = (children as ReactElement<ChildProps>).props
    childSegment = props.childProp?.segment
  }

  if (!session && childSegment !== "login") {
    redirect("/admin/login")
  }

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