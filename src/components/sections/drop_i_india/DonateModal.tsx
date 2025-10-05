/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import React, { useEffect, useState } from "react"

interface DonateModalProps {
  isOpen: boolean
  onClose: () => void
}

const donationOptions = ["₹500", "₹1000", "₹2500", "₹5000", "₹10000", "Custom"]

declare global {
  interface Window {
    Razorpay: any
  }
}


const MotionDiv = motion.div as React.ComponentType<
  React.HTMLAttributes<HTMLDivElement> & import('framer-motion').MotionProps
>;


export default function DonateModal({ isOpen, onClose }: DonateModalProps) {
  const [selected, setSelected] = useState<string | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    pan: "",
    orgName: "",
    corporateId: "",
    purpose: "",
    consent: false,
    anonymous: false,
  })

  // Load Razorpay script once
  useEffect(() => {
    if (!document.querySelector("#razorpay-script")) {
      const script = document.createElement("script")
      script.id = "razorpay-script"
      script.src = "https://checkout.razorpay.com/v1/checkout.js"
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleDonate = async () => {
    const rawAmount = selected === "Custom" ? customAmount : selected
    const amount = rawAmount?.replace(/[₹,]/g, "")

    if (!amount || isNaN(Number(amount))) {
      alert("Please select a valid donation amount.")
      return
    }
    if (!formData.fullName || !formData.email || !formData.mobile || !formData.address) {
      alert("Please fill in all required fields.")
      return
    }

    // ✅ Strong reminder about email correctness
    if (
      !window.confirm(
        "Please make sure your email is correct, as your donation receipt will be sent there. Continue?"
      )
    ) {
      return
    }

    const payload = {
      amount: Number(amount),
      donor: formData,
      timestamp: new Date().toISOString(),
    }

    try {
      setLoading(true)
      const res = await fetch("http://localhost:8000/api/v1/payments/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await res.json()
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Something went wrong")
      }

      // ✅ Trigger Razorpay checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // 🔑 set this in .env
        amount: data.amount, // in paise
        currency: data.currency,
        name: "Your NGO / Org Name",
        description: "Donation",
        order_id: data.orderId, // from backend
        handler: async function (response: any) {
          // response contains razorpay_payment_id, razorpay_order_id, razorpay_signature
          alert("✅ Payment Successful! Thank you for your support.")
          console.log("Payment success response:", response)

          // Optionally send to backend for verification
          await fetch("http://localhost:8000/api/v1/payments/verify-donate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...response,
              donor: formData,
              donationId: data.donationId,
            }),
          })

          onClose()
        },
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.mobile,
        },
        notes: {
          donorId: data.donationId,
          purpose: formData.purpose || "General Donation",
        },
        theme: {
          color: "#FE7743",
        },
      }

      const razorpay = new window.Razorpay(options)
      razorpay.open()
    } catch (error: any) {
      console.error("Donation error:", error)
      alert("❌ Failed to create donation order. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <MotionDiv
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
        >
          {/* Modal Container */}
          <MotionDiv
            key="modal"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-2xl rounded-2xl bg-white shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 rounded-full p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <X size={20} />
            </button>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-bold text-[#FE7743] text-center mb-4">
              Support Our Mission
            </h2>
            <p className="text-gray-600 text-sm sm:text-base text-center mb-6">
              Fill in your details to receive a valid 80G/CSR receipt.{" "}
              <span className="font-semibold text-[#FE7743]">
                Ensure your email is correct, as your receipt will be sent there.
              </span>
            </p>

            {/* Donation Amount */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {donationOptions.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelected(amount)}
                  className={`w-full rounded-lg border px-4 py-3 text-sm font-semibold transition-colors
                    ${
                      selected === amount
                        ? "border-[#FE7743] text-[#FE7743]"
                        : "border-gray-300 text-gray-700 hover:border-[#FE7743] hover:text-[#FE7743]"
                    }`}
                >
                  {amount}
                </button>
              ))}
            </div>

            {selected === "Custom" && (
              <div className="mb-6">
                <input
                  type="number"
                  placeholder="Enter amount (INR)"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-[#FE7743] focus:ring-[#FE7743]/40"
                />
              </div>
            )}

            {/* Required Donor Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <input name="fullName" placeholder="Full Name *" value={formData.fullName} onChange={handleChange} className="border rounded-lg px-3 py-2 text-sm" />
              <input name="email" type="email" placeholder="Email Address *" value={formData.email} onChange={handleChange} className="border rounded-lg px-3 py-2 text-sm" />
              <input name="mobile" type="tel" placeholder="Mobile Number *" value={formData.mobile} onChange={handleChange} className="border rounded-lg px-3 py-2 text-sm" />
              <input name="pan" placeholder="PAN (if > ₹10,000)" value={formData.pan} onChange={handleChange} className="border rounded-lg px-3 py-2 text-sm" />
              <input name="orgName" placeholder="Organization (CSR)" value={formData.orgName} onChange={handleChange} className="border rounded-lg px-3 py-2 text-sm" />
              <input name="corporateId" placeholder="Corporate ID (CSR)" value={formData.corporateId} onChange={handleChange} className="border rounded-lg px-3 py-2 text-sm" />
              <input name="city" placeholder="City *" value={formData.city} onChange={handleChange} className="border rounded-lg px-3 py-2 text-sm" />
              <input name="state" placeholder="State *" value={formData.state} onChange={handleChange} className="border rounded-lg px-3 py-2 text-sm" />
              <input name="country" placeholder="Country *" value={formData.country} onChange={handleChange} className="border rounded-lg px-3 py-2 text-sm" />
              <input name="postalCode" placeholder="Postal Code *" value={formData.postalCode} onChange={handleChange} className="border rounded-lg px-3 py-2 text-sm" />
            </div>

            <textarea
              name="address"
              placeholder="Full Address *"
              value={formData.address}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 text-sm mb-6"
              rows={3}
            />

            {/* Optional Fields */}
            <div className="mb-6 space-y-2">
              <select name="purpose" value={formData.purpose} onChange={handleChange} className="w-full border rounded-lg px-3 py-2 text-sm">
                <option value="">Select Purpose (optional)</option>
                <option value="education">Education</option>
                <option value="healthcare">Healthcare</option>
                <option value="green">Green Initiatives</option>
              </select>

              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} />
                I consent to receive digital receipts & updates
              </label>

              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" name="anonymous" checked={formData.anonymous} onChange={handleChange} />
                Donate Anonymously
              </label>
            </div>

            {/* Donate Button */}
            <button
              onClick={handleDonate}
              disabled={loading}
              className="w-full rounded-full bg-[#FE7743] hover:bg-[#e7652f] text-white font-medium text-base px-6 py-3 shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#FE7743]/40 disabled:opacity-50"
            >
              {loading ? "Processing..." : "Proceed to Donate"}
            </button>
          </MotionDiv>
        </MotionDiv>
      )}
    </AnimatePresence>
  )
}