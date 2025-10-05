/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface RazorpayCheckoutProps {
  selectedProgram: string
  selectedMonths: number
  selectedAddon?: string[]
  studentData: any
  onSuccess?: (paymentData: any) => void
  onError?: (error: any) => void
  validateForm?: () => boolean
}

declare global {
  interface Window {
    Razorpay: any
  }
}

const RazorpayCheckout: React.FC<RazorpayCheckoutProps> = ({
  selectedProgram,
  selectedMonths,
  selectedAddon,
  studentData,
  onSuccess,
  onError,
  validateForm,
}) => {
  const [loading, setLoading] = useState(false)
  const [paymentProcessing, setPaymentProcessing] = useState(false)
  const router = useRouter()

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script")
      script.src = "https://checkout.razorpay.com/v1/checkout.js"
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = (error) => reject(error)
    })
  }

  const handlePayment = async () => {
    if (validateForm && !validateForm()) {
      alert("Please fill in all required fields before proceeding with payment.")
      return
    }

    setLoading(true)

    try {
      const processedStudentData = { ...studentData }

      if (studentData.idDocument) {
        try {
          processedStudentData.idDocumentBase64 = await fileToBase64(studentData.idDocument)
          processedStudentData.idDocumentName = studentData.idDocument.name
          processedStudentData.idDocumentType = studentData.idDocument.type
        } catch (error) {
          console.error("Error processing ID document:", error)
          alert("Error processing ID document. Please try again.")
          setLoading(false)
          return
        }
      }

      if (studentData.studentPhoto) {
        try {
          processedStudentData.studentPhotoBase64 = await fileToBase64(studentData.studentPhoto)
          processedStudentData.studentPhotoName = studentData.studentPhoto.name
          processedStudentData.studentPhotoType = studentData.studentPhoto.type
        } catch (error) {
          console.error("Error processing student photo:", error)
          alert("Error processing student photo. Please try again.")
          setLoading(false)
          return
        }
      }

      delete processedStudentData.idDocument
      delete processedStudentData.studentPhoto

      const scriptLoaded = await loadRazorpayScript()
      if (!scriptLoaded) {
        alert("Failed to load Razorpay. Please check your internet connection.")
        setLoading(false)
        return
      }

      const packageData = JSON.parse(localStorage.getItem("selectedPackage") || "{}")
      console.log("Creating order with package data:", packageData)

      const backend_url = process.env.BACKEND_URL || "http://localhost:8000"

      const orderResponse = await fetch(`${backend_url}/api/v1/payments/create-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          packageData,
          studentData: processedStudentData,
          currency: "USD",
          receipt: `receipt_${Date.now()}`,
        }),
      })

      const order = await orderResponse.json()

      if (!orderResponse.ok) {
        alert(`Order creation failed: ${order.error}`)
        setLoading(false)
        return
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_R5adtKeIAinkvB",
        amount: order.amount,
        currency: order.currency,
        name: "Sirtifai",
        description: `Payment for ${selectedProgram}`,
        order_id: order.id,
        prefill: {
          name: processedStudentData.fullName || processedStudentData.studentName,
          email: processedStudentData.email || processedStudentData.studentEmail,
          contact: processedStudentData.primaryPhone || processedStudentData.studentPhone,
        },
        theme: {
          color: "#FC4C03",
        },
        handler: async (response: any) => {
          try {
            setPaymentProcessing(true)
            setLoading(false)

            const backend_url = process.env.BACKEND_URL || "http://localhost:8000"

            const verifyResponse = await fetch(`${backend_url}/api/v1/payments/verify`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                orderId: order.id,
              }),
            })

            const verifyResult = await verifyResponse.json()

            if (verifyResult.success) {
              if (verifyResult.invoiceLink) {
                router.push(`/invoice/${verifyResult.invoiceLink}`)
              } else {
                router.push("/invoice")
              }

              if (onSuccess) {
                onSuccess(verifyResult)
              }
            } else {
              alert(`Payment verification failed: ${verifyResult.error}`)
              setPaymentProcessing(false)
            }
          } catch (error) {
            console.error("Payment verification error:", error)
            alert("Payment verification failed. Please contact support.")
            setPaymentProcessing(false)
            if (onError) {
              onError(error)
            }
          }
        },
        modal: {
          ondismiss: () => {
            setLoading(false)
          },
        },
      }

      const razorpay = new window.Razorpay(options)
      razorpay.open()
    } catch (error) {
      console.error("Payment error:", error)
      alert("Payment failed. Please try again.")
      setLoading(false)
      if (onError) {
        onError(error)
      }
    }
  }

  if (paymentProcessing) {
    return (
      <div className="w-full bg-[#FC4C03] text-white py-4 px-6 rounded-lg text-lg font-semibold text-center">
        <div className="flex items-center justify-center space-x-2">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
          <span>Processing payment and generating invoice...</span>
        </div>
      </div>
    )
  }

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className={`w-full font-semibold py-4 px-6 rounded-lg text-lg transition-colors ${
        loading ? "bg-gray-400 text-gray-600 cursor-not-allowed" : "bg-[#FC4C03] text-white hover:bg-[#e63d00]"
      }`}
    >
      {loading ? "Processing..." : "Buy Now"}
    </button>
  )
}

export default RazorpayCheckout
