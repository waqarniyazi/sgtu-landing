import { ObjectId } from "mongodb"
import clientPromise from "@/lib/mongodb"

export interface Lead {
  _id?: string | ObjectId
  id?: string
  name: string
  email: string
  phone: string
  course: string
  graduation?: string
  gradYear?: number
  experienceMonths?: number
  consent: boolean
  status: "No Answer" | "Visit Office" | "Home Visit" | "Not Interested" | "Call Back Later" | "Enrolled"
  createdAt: Date
  updatedAt: Date
}

export const getLeadsCollection = async () => {
  const client = await clientPromise
  const db = client.db("SGTU")
  return db.collection<Lead>("Leads")
}

export const getAllLeads = async (page = 1, limit = 10, search = "") => {
  const collection = await getLeadsCollection()
  const skip = (page - 1) * limit

  let query = {}
  if (search) {
    query = {
      $or: [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
        { course: { $regex: search, $options: "i" } },
      ],
    }
  }

  const leads = await collection.find(query).sort({ updatedAt: -1 }).skip(skip).limit(limit).toArray()
  const total = await collection.countDocuments(query)

  return {
    leads: leads.map((lead) => ({
      ...lead,
      id: lead._id.toString(),
      _id: lead._id.toString(),
    })),
    total,
    totalPages: Math.ceil(total / limit),
    currentPage: page,
  }
}

export const getLeadById = async (id: string) => {
  const collection = await getLeadsCollection()
  const lead = await collection.findOne({ _id: new ObjectId(id) })

  if (!lead) return null

  return {
    ...lead,
    id: lead._id.toString(),
    _id: lead._id.toString(),
  }
}

export const updateLeadStatus = async (id: string, status: Lead["status"]) => {
  const collection = await getLeadsCollection()
  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        status,
        updatedAt: new Date(),
      },
    },
  )

  return result.modifiedCount > 0
}

export const createLead = async (lead: Omit<Lead, "_id" | "id" | "createdAt" | "updatedAt" | "status">) => {
  const collection = await getLeadsCollection()
  const now = new Date()

  const newLead = {
    ...lead,
    status: "No Answer" as const,
    createdAt: now,
    updatedAt: now,
  }

  const result = await collection.insertOne(newLead)

  return {
    ...newLead,
    id: result.insertedId.toString(),
    _id: result.insertedId.toString(),
  }
}
