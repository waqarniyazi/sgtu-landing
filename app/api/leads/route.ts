import { type NextRequest, NextResponse } from "next/server"
import { getAllLeads, createLead } from "@/lib/models/lead"
import { sendLeadNotificationEmail, sendLeadNotificationTelegram } from "@/lib/utils/notification"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const searchParams = request.nextUrl.searchParams
  const page = Number.parseInt(searchParams.get("page") || "1")
  const limit = Number.parseInt(searchParams.get("limit") || "10")
  const search = searchParams.get("search") || ""

  try {
    const result = await getAllLeads(page, limit, search)
    return NextResponse.json(result)
  } catch (error) {
    console.error("Error fetching leads:", error)
    return NextResponse.json({ error: "Failed to fetch leads" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const lead = await createLead(body)

    // send email and telegram notifications in parallel
    await Promise.all([
      sendLeadNotificationEmail(lead),
      sendLeadNotificationTelegram(lead),
    ])

    return NextResponse.json(lead, { status: 201 })
  } catch (error) {
    console.error("Error creating lead:", error)
    return NextResponse.json({ error: "Failed to create lead" }, { status: 500 })
  }
}