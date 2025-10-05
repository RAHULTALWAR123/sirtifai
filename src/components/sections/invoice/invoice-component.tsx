/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState, useEffect } from "react"
import { Download, Mail, Printer } from "lucide-react"

const InvoiceComponent = () => {
  const [paymentData, setPaymentData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [emailLoading, setEmailLoading] = useState(false)

  useEffect(() => {
    // Load payment data from localStorage
    const data = localStorage.getItem("paymentData")
    if (data) {
      setPaymentData(JSON.parse(data))
    }
    setLoading(false)
  }, [])

  const handlePrintInvoice = () => {
    window.print()
  }

  const handleDownloadPDF = () => {
    // In a real application, you would generate and download a PDF
    alert("PDF download functionality would be implemented here")
  }

  const handleEmailInvoice = async () => {
    if (!paymentData) return

    setEmailLoading(true)
    try {
      const backend_url = process.env.BACKEND_URL || "http://localhost:8000"
      const response = await fetch(`${backend_url}/api/v1/invoices/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studentEmail: paymentData.studentData?.email || paymentData.studentData?.studentEmail,
          studentName: paymentData.studentData?.fullName || paymentData.studentData?.studentName,
          invoiceData: {
            invoiceNumber: `SRTIFAI/${new Date().getFullYear()}/${paymentData.invoiceId || "INV001"}`,
            programName: paymentData.packageData?.program || "Program",
            duration: paymentData.packageData?.months || 3,
            addonName: paymentData.packageData?.addon || null,
            total: paymentData.packageData?.pricing?.total || paymentData.packageData?.total || 0,
            paymentStatus: "Completed",
            paymentDate: paymentData.paymentDate || new Date(),
          },
        }),
      })

      const result = await response.json()

      if (result.success) {
        alert("Invoice email sent successfully!")
      } else {
        alert("Failed to send email. Please try again.")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      alert("Error sending email. Please try again.")
    } finally {
      setEmailLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#FC4C03]"></div>
          <p className="mt-4 text-gray-600">Loading invoice...</p>
        </div>
      </div>
    )
  }

  if (!paymentData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Invoice Not Found</h2>
          <p className="text-gray-600">No payment data available. Please complete a payment first.</p>
        </div>
      </div>
    )
  }

  const invoiceDate = new Date(paymentData.paymentDate).toLocaleDateString()
  const invoiceNumber = `SRTIFAI/${new Date().getFullYear()}/${paymentData.invoiceId || "INV001"}`

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 mb-6 print:hidden">
          <button
            onClick={handlePrintInvoice}
            className="flex items-center space-x-2 px-4 py-2 bg-[#FC4C03] text-white rounded-lg hover:bg-[#e63d00] transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Print Invoice</span>
          </button>
          <button
            onClick={handleDownloadPDF}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
          <button
            onClick={handleEmailInvoice}
            disabled={emailLoading}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              emailLoading ? "bg-gray-400 text-gray-600 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>{emailLoading ? "Sending..." : "Email Invoice"}</span>
          </button>
        </div>

        {/* Invoice */}
        <div className="bg-white rounded-lg shadow-lg p-8 print:shadow-none print:rounded-none">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[#FC4C03] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#FC4C03]">SIRTIFAI - INVOICE</h1>
              </div>
            </div>
            <div className="text-right text-sm text-gray-600">
              <p>
                <strong>Registered Office (India):</strong>
              </p>
              <p>123 Tech Park, Whitefield</p>
              <p>Bangalore, Karnataka 560066</p>
              <p>
                <strong>Email:</strong> accounts@sirtifai.com
              </p>
              <p>
                <strong>Phone:</strong> +91-98-7654321
              </p>
              <p>
                <strong>Website:</strong> www.sirtifai.com
              </p>
            </div>
          </div>

          {/* Invoice Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Invoice No:</h3>
              <p className="text-gray-600">{invoiceNumber}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Invoice Date:</h3>
              <p className="text-gray-600">{invoiceDate}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Due Date:</h3>
              <p className="text-gray-600">{invoiceDate}</p>
            </div>
          </div>

          {/* Bill To */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-4">Bill To (Customer Details):</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p>
                    <strong>Name:</strong> {paymentData.studentData?.fullName || paymentData.studentData?.studentName}
                  </p>
                  <p>
                    <strong>Email:</strong> {paymentData.studentData?.email || paymentData.studentData?.studentEmail}
                  </p>
                  <p>
                    <strong>Phone:</strong>{" "}
                    {paymentData.studentData?.primaryPhone || paymentData.studentData?.studentPhone}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Address:</strong>
                  </p>
                  <p>{paymentData.studentData?.residentialAddress || paymentData.studentData?.address}</p>
                  <p>
                    {paymentData.studentData?.city}, {paymentData.studentData?.state}
                  </p>
                  <p>{paymentData.studentData?.zipCode || paymentData.studentData?.pincode}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Invoice Items */}
          <div className="mb-8">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Sr. No.</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Qty</th>
                  <th className="border border-gray-300 px-4 py-2 text-right">Unit Price (USD)</th>
                  <th className="border border-gray-300 px-4 py-2 text-right">Amount (USD)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">1</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div>
                      <p className="font-semibold">{paymentData.packageData?.program || "Program"}</p>
                      <p className="text-sm text-gray-600">
                        Training Program, Career Projects, AI Tools, PDF Initial Certification, Career Mapping
                      </p>
                    </div>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">{paymentData.packageData?.months || 3} months</td>
                  <td className="border border-gray-300 px-4 py-2">1</td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {((paymentData.packageData?.pricing?.total || paymentData.packageData?.total || 0) / 84).toFixed(2)}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {((paymentData.packageData?.pricing?.total || paymentData.packageData?.total || 0) / 84).toFixed(2)}
                  </td>
                </tr>

                {paymentData.packageData?.addon && (
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">2</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <div>
                        <p className="font-semibold">{paymentData.packageData.addon}</p>
                        <p className="text-sm text-gray-600">Additional service support</p>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">One-time</td>
                    <td className="border border-gray-300 px-4 py-2">1</td>
                    <td className="border border-gray-300 px-4 py-2 text-right">Included</td>
                    <td className="border border-gray-300 px-4 py-2 text-right">Included</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Payment Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Bank Wire (USD):</h3>
              <div className="text-sm space-y-1">
                <p>
                  <strong>Bank Name:</strong> Bank of America
                </p>
                <p>
                  <strong>Account Name:</strong> Sirtifai Technologies Inc
                </p>
                <p>
                  <strong>Account Number:</strong> 123456789012
                </p>
                <p>
                  <strong>SWIFT/BIC:</strong> BOFAUS3N
                </p>
                <p>
                  <strong>Routing Number (ABA):</strong> 026009593
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">PayPal:</h3>
              <p className="text-sm">paypal.me/SirtifaiAccount</p>

              <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>
                      ${" "}
                      {((paymentData.packageData?.pricing?.total || paymentData.packageData?.total || 0) / 84).toFixed(
                        2,
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sales Tax (if applicable):</span>
                    <span>$ 0.00</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total Invoice Value (USD):</span>
                    <span>
                      ${" "}
                      {((paymentData.packageData?.pricing?.total || paymentData.packageData?.total || 0) / 84).toFixed(
                        2,
                      )}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    In Words: US Dollars{" "}
                    {Math.floor((paymentData.packageData?.pricing?.total || paymentData.packageData?.total || 0) / 84)}{" "}
                    Only
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Terms */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-2">Notes & Terms:</h3>
            <p className="text-sm text-gray-600">
              Payment due within 7 business days of invoice date. Sirtifai reserves the right to delay service delivery
              until payment is confirmed. Candidate must complete training phases to access placement services.
            </p>
          </div>

          {/* Footer */}
          <div className="text-right">
            <div className="inline-block">
              <p className="font-semibold text-gray-900 mb-16">Authorized Signatory</p>
              <div className="border-t border-gray-300 pt-2">
                <p className="text-sm text-gray-600">Sirtifai Technologies</p>
              </div>
            </div>
          </div>

          {/* Payment Status */}
          <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="font-semibold text-green-800">Payment Status: PAID</span>
            </div>
            <p className="text-sm text-green-700 mt-1">
              Payment ID: {paymentData.paymentId} | Transaction Date: {invoiceDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvoiceComponent
