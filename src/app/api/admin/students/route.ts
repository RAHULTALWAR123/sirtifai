import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "../../../../../lib/prisma"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status")
    const program = searchParams.get("program")
    const search = searchParams.get("search")

    // Build where clause for filtering
    const whereClause: any = {}

    if (status && status !== "all") {
      whereClause.paymentStatus = status
    }

    if (program && program !== "all") {
      whereClause.selectedProgram = program
    }

    if (search) {
      whereClause.OR = [
        { fullName: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
        { razorpayPaymentId: { contains: search, mode: "insensitive" } },
      ]
    }

    // Fetch students from database with all fields
    const students = await prisma.student.findMany({
      where: whereClause,
      orderBy: { createdAt: "desc" },
    })

    // Transform data for frontend (convert binary data to base64 for display)
    const transformedStudents = students.map((student) => ({
      ...student,
      // Convert binary data to base64 for frontend display
      photoBase64: student.photo ? Buffer.from(student.photo).toString("base64") : null,
      idDocumentBase64: student.idDocument ? Buffer.from(student.idDocument).toString("base64") : null,
      // Format dates for display
      dateOfBirth: student.dateOfBirth.toISOString().split("T")[0],
      createdAt: student.createdAt.toISOString(),
      updatedAt: student.updatedAt.toISOString(),
    }))

    return NextResponse.json({
      success: true,
      data: transformedStudents,
      total: transformedStudents.length,
    })
  } catch (error) {
    console.error("Error fetching students:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch students",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}