/* eslint-disable @typescript-eslint/no-unused-vars */
import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "../../../../lib/prisma"
import crypto from "crypto"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderId } = body

    console.log("Payment verification data:", {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature: razorpay_signature?.substring(0, 10) + "...",
    })

    const body_string = `${razorpay_order_id}|${razorpay_payment_id}`
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET || "0oZnTjgtBeJP9vbY9xMc0O8T")
      .update(body_string)
      .digest("hex")

    const isSignatureValid = expectedSignature === razorpay_signature

    if (isSignatureValid) {
      console.log("Signature verification successful")

      const existingStudent = await prisma.student.findFirst({
        where: {
          razorpayOrderId: razorpay_order_id,
          paymentStatus: "PROCESSING",
        },
        orderBy: {
          createdAt: "desc",
        },
      })

      if (existingStudent) {
        const updatedStudent = await prisma.student.update({
          where: { id: existingStudent.id },
          data: {
            paymentId: razorpay_payment_id,
            paymentStatus: "COMPLETED",
            paymentMethod: "Razorpay",
            paymentDate: new Date(),
            razorpayPaymentId: razorpay_payment_id, // Fixed field name from razorpay_payment_id to razorpayPaymentId to match Prisma schema
            razorpaySignature: razorpay_signature,
          },
        })

        console.log("Payment completed successfully")

        try {
          const protocol = request.headers.get("x-forwarded-proto") || "https"
          const host = request.headers.get("host") || request.headers.get("x-forwarded-host")
          const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || (host ? `${protocol}://${host}` : "http://localhost:3000")
          const backend_url = process.env.BACKEND_URL || "http://localhost:8000"
          await fetch(`${backend_url}/api/v1/invoices/send`, {

          // await fetch(`${baseUrl}/api/send-invoice-email`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              studentEmail: updatedStudent.email,
              studentName: updatedStudent.fullName,
              invoiceLink: updatedStudent.invoiceLink,
              invoiceData: {
                invoiceNumber: updatedStudent.invoiceNumber,
                programName: updatedStudent.programName,
                duration: updatedStudent.programDuration,
                addonName: updatedStudent.addonName,
                total: updatedStudent.totalINR,
                paymentStatus: "Completed",
                paymentDate: updatedStudent.paymentDate,
              },
            }),
          })
          console.log("Invoice email sent successfully")
        } catch (emailError) {
          console.error("Error sending invoice email:", emailError)
        }

        return NextResponse.json({
          success: true,
          paymentId: razorpay_payment_id,
          orderId: razorpay_order_id,
          invoiceId: updatedStudent.invoiceLink,
          studentId: updatedStudent.id,
          invoiceLink: updatedStudent.invoiceLink,
        })
      } else {
        console.log("No PROCESSING student record found for order:", razorpay_order_id)
        return NextResponse.json(
          {
            success: false,
            error: "No pending application found for this payment",
          },
          { status: 404 },
        )
      }
    } else {
      console.log("Signature verification failed - payment remains PROCESSING")
      return NextResponse.json(
        {
          success: false,
          error: "Invalid signature",
        },
        { status: 400 },
      )
    }
  } catch (error) {
    console.error("Error verifying payment:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Payment verification failed",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
