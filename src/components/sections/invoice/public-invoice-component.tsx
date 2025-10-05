/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState, useEffect } from "react"
import { Button } from "../../ui/Button"
import { Download, Printer, Mail } from "lucide-react"
import { getProductById } from "../../../lib/products"

interface AddonData {
  id: string
  name: string
  price: number
}

interface ApiResponse {
  invoice: {
    id: string
    invoiceNumber: string
    createdAt: string
    programName: string
    programUnitPrice: number
    programUnitPriceExclusiveGST: number
    programPrice: number
    programPriceINR: number
    programPriceExclusiveGST: number
    programDuration: number
    selectedAddonNames?: string
    addonsData?: AddonData[]
    addonPriceINR?: number
    addonPriceExclusiveGST?: number
    subtotalINR: number
    subtotalExclusiveGST: number
    gstRate: number
    gstAmountINR: number
    totalINR: number
    paymentStatus: string
    paymentMethod: string
    paymentDate: string
    type: string
  }
  student: {
    fullName: string
    email: string
    primaryPhone: string
    residentialAddress: string
    city: string
    state: string
    zipCode: string
    country: string
  }
}

interface PublicInvoiceComponentProps {
  invoiceId: string
}

const numberToWords = (num: number): string => {
  const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
  const teens = [
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ]
  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]

  if (num === 0) return "Zero"
  if (num < 10) return ones[num]
  if (num < 20) return teens[num - 10]
  if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 ? " " + ones[num % 10] : "")
  if (num < 1000) return ones[Math.floor(num / 100)] + " Hundred" + (num % 100 ? " " + numberToWords(num % 100) : "")
  if (num < 100000)
    return numberToWords(Math.floor(num / 1000)) + " Thousand" + (num % 1000 ? " " + numberToWords(num % 1000) : "")
  if (num < 10000000)
    return numberToWords(Math.floor(num / 100000)) + " Lakh" + (num % 100000 ? " " + numberToWords(num % 100000) : "")
  return (
    numberToWords(Math.floor(num / 10000000)) + " Crore" + (num % 10000000 ? " " + numberToWords(num % 10000000) : "")
  )
}

export function PublicInvoiceComponent({ invoiceId }: PublicInvoiceComponentProps) {
  const [invoiceData, setInvoiceData] = useState<ApiResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [emailAddress, setEmailAddress] = useState("")
  const [emailLoading, setEmailLoading] = useState(false)
  const [emailSuccess, setEmailSuccess] = useState(false)

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const backend_url = process.env.BACKEND_URL || "http://localhost:8000"
        const response = await fetch(`${backend_url}/api/v1/invoices/${invoiceId}`)
        if (!response.ok) {
          throw new Error("Invoice not found")
        }
        const data = await response.json()
        setInvoiceData(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load invoice")
      } finally {
        setLoading(false)
      }
    }

    fetchInvoice()
  }, [invoiceId])

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    window.print()
  }

  const handleEmailInvoice = () => {
    setShowEmailModal(true)
    setEmailAddress(invoiceData?.student.email || "")
  }

  const sendEmailInvoice = async () => {
    if (!emailAddress.trim()) {
      alert("Please enter a valid email address")
      return
    }

    setEmailLoading(true)
    try {
      const backend_url = process.env.BACKEND_URL || "http://localhost:8000"
      const response = await fetch(`${backend_url}/api/v1/invoices/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentEmail: emailAddress,
          invoiceLink: invoiceId,
        }),
      })

      if (response.ok) {
        setEmailSuccess(true)
        setTimeout(() => {
          setShowEmailModal(false)
          setEmailSuccess(false)
          setEmailAddress("")
        }, 2000)
      } else {
        throw new Error("Failed to send email")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      alert("Failed to send email. Please try again.")
    } finally {
      setEmailLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading invoice...</p>
        </div>
      </div>
    )
  }

  if (error || !invoiceData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Invoice Not Found</h1>
          <p className="text-gray-600 mb-4">{error || "The requested invoice could not be found."}</p>
          <Button onClick={() => window.history.back()}>Go Back</Button>
        </div>
      </div>
    )
  }

  const { invoice, student } = invoiceData

  const isFreelancerPackageOrInternational = () => {
    return (
      invoice.type === "freelancer" ||
      invoice.programName.toLowerCase().includes("freelancer") ||
      invoice.type === "international" || 
      invoice.programName.toLowerCase().includes("international")
    );
  };

  const getDurationText = () => {
    if (isFreelancerPackageOrInternational()) {
      return "One-time"
    }
    return invoice.programDuration > 1 ? `${invoice.programDuration} Months` : `${invoice.programDuration} Month`
  }

  const getQtyFromDuration = () => {
    if (isFreelancerPackageOrInternational()) {
      return 1
    }
    return invoice.programDuration
  }

  const getServiceDetails = (programName: string) => {
    const programProduct = getProductById(programName.toLowerCase().replace(/\s+/g, "-"))
    if (programProduct) {
      return {
        title: programProduct.name,
        description: programProduct.description,
        sacCode: programProduct.sacCode,
      }
    }
    // Fallback dummy data
    return {
      title: programName,
      description: "Training & Certification - Recorded + Live Classes, Projects, AI Tools, NSQF Global Certification, Career Mapping",
      sacCode: "999293",
    }
  }

  const getAddonDetails = (addonName: string) => {
    console.log("Fetching addon details for:", addonName)
    const addonProduct = getProductById(addonName.toLowerCase().replace(/\s+/g, "-"))
    console.log("addonProduct:", addonProduct)
    if (addonProduct) {
      return {
        title: addonProduct.name,
        description: addonProduct.description,
        sacCode: addonProduct.sacCode,
      }
    }
    // Fallback dummy data
    return {
      title: addonName,
      description: "Employer Connect, Visa Sponsorship Support, Resume & Interview Prep, Lifetime Re-Entry",
      sacCode: "998596",
    }
  }

  const serviceDetails = getServiceDetails(invoice.programName)
  const cgstAmount = invoice.gstAmountINR / 2
  const sgstAmount = invoice.gstAmountINR / 2

  // Calculate individual addon prices (exclusive of GST)
  const getAddonPriceExclusiveGST = (addonPrice: number) => {
    const gstMultiplier = 1 + (invoice.gstRate / 100)
    return Math.round(addonPrice / gstMultiplier)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto p-8">
        <div className="border-2 border-black">
          <div className="bg-white p-6">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center">
                <div className="w-16 h-16 mr-4">
                  <img src="/assets/logo.png" alt="SIRTIFAI Logo" />
                </div>
                <h1 className="text-3xl font-bold text-orange-500">SIRTIFAI - TAX INVOICE</h1>
              </div>
              <div className="text-right text-sm">
                <p className="font-semibold">Registered Office:</p>
                <p>123 Tech Park, Whitefield</p>
                <p>Bangalore, Karnataka 560066</p>
                <p className="mt-2"><strong>CIN:</strong> U72900KA2020PTC123456</p>
                <p><strong>GSTIN:</strong> 29AABCS1234A1Z5</p>
                <p><strong>Email:</strong> accounts@sirtifai.com</p>
                <p><strong>Phone:</strong> +91-9876543210</p>
                <p><strong>Website:</strong> www.sirtifai.com</p>
              </div>
            </div>

            {/* First Row - Invoice Details and Bill To */}
            <div className="grid grid-cols-2 gap-8 mb-6">
              {/* Left Column - Invoice Details */}
              <div className="border border-black p-4 space-y-3 text-sm">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <p className="font-semibold">Invoice No:</p>
                    <p>{invoice.invoiceNumber}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Invoice Date:</p>
                    <p>{new Date(invoice.createdAt).toLocaleDateString("en-GB")}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold">Due Date:</p>
                    <p>
                      {new Date(new Date(invoice.paymentDate).getTime() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString("en-GB")}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">Place of Supply:</p>
                    <p>Karnataka</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Bill To */}
              <div className="border border-black p-4 bg-gray-50">
                <h3 className="font-bold mb-3">Bill To:</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <div>
                      <span className="font-semibold">Name:</span>
                      <p>{student.fullName}</p>
                    </div>
                    <div>
                      <span className="font-semibold">City:</span>
                      <p>{student.city}</p>
                    </div>
                    <div>
                      <span className="font-semibold">PIN:</span>
                      <p>{student.zipCode}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div>
                      <span className="font-semibold">Address:</span>
                      <p>{student.residentialAddress}</p>
                    </div>
                    <div>
                      <span className="font-semibold">State:</span>
                      <p>{student.state}</p>
                    </div>
                    <div>
                      <span className="font-semibold">Email:</span>
                      <p>{student.email}</p>
                    </div>
                    <div>
                      <span className="font-semibold">Mobile:</span>
                      <p>{student.primaryPhone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Row - Products Table */}
            <div className="mb-6">
              <table className="w-full border-collapse border border-black text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-black p-2 text-left w-12">Sr. No.</th>
                    <th className="border border-black p-2 text-left">Description of Service</th>
                    <th className="border border-black p-2 text-left w-20">SAC Code</th>
                    <th className="border border-black p-2 text-left w-20">Duration</th>
                    <th className="border border-black p-2 text-left w-16">Qty</th>
                    <th className="border border-black p-2 text-right w-24">Unit Price (₹)</th>
                    <th className="border border-black p-2 text-right w-24">Total Value (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-black p-2 text-center">1</td>
                    <td className="border border-black p-2">
                      <div>
                        <p className="font-semibold">{serviceDetails.title}</p>
                        <p className="text-xs text-gray-600">{serviceDetails.description}</p>
                      </div>
                    </td>
                    <td className="border border-black p-2 text-center">{serviceDetails.sacCode}</td>
                    <td className="border border-black p-2 text-center">{getDurationText()}</td>
                    <td className="border border-black p-2 text-center">{getQtyFromDuration()}</td>
                    <td className="border border-black p-2 text-right">
                      {(invoice.programUnitPriceExclusiveGST || 0).toLocaleString()}.00
                    </td>
                    <td className="border border-black p-2 text-right">
                      {(invoice.programPriceExclusiveGST || 0).toLocaleString()}.00
                    </td>
                  </tr>
                  {invoice.addonsData && invoice.addonsData.length > 0 && 
                    invoice.addonsData.map((addon, index) => {
                      const addonDetails = getAddonDetails(addon.id)
                      const addonPriceExclusive = getAddonPriceExclusiveGST(addon.price)
                      
                      return (
                        <tr key={addon.id}>
                          <td className="border border-black p-2 text-center">{index + 2}</td>
                          <td className="border border-black p-2">
                            <div>
                              <p className="font-semibold">{addonDetails.title}</p>
                              <p className="text-xs text-gray-600">{addonDetails.description}</p>
                            </div>
                          </td>
                          <td className="border border-black p-2 text-center">{addonDetails.sacCode}</td>
                          <td className="border border-black p-2 text-center">One-time</td>
                          <td className="border border-black p-2 text-center">1</td>
                          <td className="border border-black p-2 text-right">
                            {addonPriceExclusive > 0 ? `${addonPriceExclusive.toLocaleString()}.00` : "Included"}
                          </td>
                          <td className="border border-black p-2 text-right">
                            {addonPriceExclusive.toLocaleString()}.00
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>

            {/* Third Row - Tax Details */}
            <div className="grid grid-cols-2 gap-8 mb-6">
              {/* Left - Tax Type */}
              <div>
                <table className="w-full border-collapse border border-black text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-black p-2 text-left">Tax Type</th>
                      <th className="border border-black p-2 text-center">Rate</th>
                      <th className="border border-black p-2 text-right">Amount (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-black p-2">CGST</td>
                      <td className="border border-black p-2 text-center">9%</td>
                      <td className="border border-black p-2 text-right">
                        {Math.round(cgstAmount).toLocaleString()}.00
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-2">SGST</td>
                      <td className="border border-black p-2 text-center">9%</td>
                      <td className="border border-black p-2 text-right">
                        {Math.round(sgstAmount).toLocaleString()}.00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Right - Totals */}
              <div>
                <table className="w-full border-collapse border border-black text-sm">
                  <tbody>
                    <tr>
                      <td className="border border-black p-2 font-semibold">Total Value:</td>
                      <td className="border border-black p-2 text-right">
                        ₹ {(invoice.subtotalExclusiveGST || 0).toLocaleString()}.00
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-2 font-semibold">GST(18%):</td>
                      <td className="border border-black p-2 text-right">
                        ₹ {Math.round(invoice.gstAmountINR).toLocaleString()}.00
                      </td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="border border-black p-2 font-bold">Total Invoice Value (INR):</td>
                      <td className="border border-black p-2 text-right font-bold">
                        ₹ {invoice.totalINR.toLocaleString()}.00
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* <p className="mt-2 text-xs">
                  <strong>In Words:</strong> {numberToWords(invoice.totalINR)} Only
                </p> */}
              </div>
            </div>

            {/* Fourth Row - Payment Details and Terms */}
            <div className="grid grid-cols-2 gap-8 mb-6">
              {/* Payment Details */}
              <div className="text-sm">
                <h3 className="font-bold mb-2">Payment Details:</h3>
                <p><strong>Bank Name:</strong> HDFC Bank</p>
                <p><strong>Account Name:</strong> Sirtifai Technologies Pvt Ltd</p>
                <p><strong>A/c No.:</strong> 50100123456789</p>
                <p><strong>IFSC Code:</strong> HDFC0001234</p>
                <p><strong>UPI:</strong> accounts@sirtifai@hdfc</p>
              </div>

              {/* Notes & Terms and Authorized Signatory */}
              <div className="text-sm">
                <h3 className="font-bold mb-2">Notes & Terms:</h3>
                <p className="mb-8">This invoice is valid only upon receipt of payment.</p>
                
                <div className="text-right">
                  <div className="inline-block">
                    <div className="w-32 h-16 mb-2"></div>
                    <div className="border-t border-black pt-1">
                      <p className="font-semibold text-center">Authorized Signatory</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-8 print:hidden">
          <Button onClick={handlePrint} className="bg-orange-500 hover:bg-orange-600">
            <Printer className="w-4 h-4 mr-2" />
            Print Invoice
          </Button>
          <Button onClick={handleDownload} variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
          <Button onClick={handleEmailInvoice} variant="outline">
            <Mail className="w-4 h-4 mr-2" />
            Email Invoice
          </Button>
        </div>

        {showEmailModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
              <h3 className="text-lg font-semibold mb-4">Email Invoice</h3>
              {emailSuccess ? (
                <div className="text-center">
                  <div className="text-green-600 mb-2">✓</div>
                  <p className="text-green-600">Invoice sent successfully!</p>
                </div>
              ) : (
                <>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Enter email address"
                      disabled={emailLoading}
                    />
                  </div>
                  <div className="flex gap-3 justify-end">
                    <Button variant="outline" onClick={() => setShowEmailModal(false)} disabled={emailLoading}>
                      Cancel
                    </Button>
                    <Button
                      onClick={sendEmailInvoice}
                      disabled={emailLoading}
                      className="bg-orange-500 hover:bg-orange-600"
                    >
                      {emailLoading ? "Sending..." : "Send Email"}
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}