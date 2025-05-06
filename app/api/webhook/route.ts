import { type NextRequest, NextResponse } from "next/server"
import { createLead } from "@/lib/models/lead"

// This webhook endpoint can be used to receive lead submissions from external sources
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.course) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create the lead
    const lead = await createLead({
      name: body.name,
      email: body.email,
      phone: body.phone,
      course: body.course,
      graduation: body.graduation || "",
      gradYear: body.gradYear ? Number.parseInt(body.gradYear) : undefined,
      experienceMonths: body.experienceMonths ? Number.parseInt(body.experienceMonths) : undefined,
      consent: body.consent || false,
    })

    return NextResponse.json(lead, { status: 201 })
  } catch (error) {
    console.error("Error creating lead from webhook:", error)
    return NextResponse.json({ error: "Failed to create lead" }, { status: 500 })
  }
}
