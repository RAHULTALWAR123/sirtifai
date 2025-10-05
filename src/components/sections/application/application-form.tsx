/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Upload } from "lucide-react"
import RazorpayCheckout from "../../payment/razorpay-checkout"
import { formatPrice } from "../../../lib/pricing"
import type { StandardizedPackageData } from "../../../lib/products"

interface FormData {
  // Personal Details
  fullName: string
  dateOfBirth: {
    day: string
    month: string
    year: string
  }
  countryOfCitizenship: string
  referralCode: string

  // Contact Information
  primaryPhone: string
  secondaryPhone: string
  whatsappNotifications: boolean
  email: string
  residentialAddress: string
  city: string
  state: string
  zipCode: string
  country: string

  // Education
  highestQualification: string
  specialization: string

  // Professional
  currentProfession: string
  currentOrganization: string
  linkedinProfile: string

  // Identity Document
  idType: string
  idNumber: string
  idDocument: File | null
  studentPhoto: File | null

  // Confirmation
  agreedToTerms: boolean
  certifiedInformation: boolean 
}

const ApplicationForm = () => {
  const [selectedPackage, setSelectedPackage] = useState<StandardizedPackageData | null>(null)
  const [formData, setFormData] = useState<FormData>({
    // Personal Details
    fullName: "",
    dateOfBirth: { day: "", month: "", year: "" },
    countryOfCitizenship: "",
    referralCode: "",

    // Contact Information
    primaryPhone: "",
    secondaryPhone: "",
    whatsappNotifications: false,
    email: "",
    residentialAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",

    // Education
    highestQualification: "",
    specialization: "",

    // Professional
    currentProfession: "",
    currentOrganization: "",
    linkedinProfile: "",

    // Identity Document
    idType: "",
    idNumber: "",
    idDocument: null,
    studentPhoto: null,

    // Confirmation
    agreedToTerms: false,
    certifiedInformation: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [photoPreview, setPhotoPreview] = useState<string>("")
  const [documentPreview, setDocumentPreview] = useState<string>("")

  const isDevelopment = process.env.NODE_ENV === "development"

  useEffect(() => {
    // Load selected package from localStorage
    const packageData = localStorage.getItem("selectedPackage")
    if (packageData) {
      setSelectedPackage(JSON.parse(packageData))
    }
  }, [])

  const autoFillForm = () => {
    setFormData({
      fullName: "John Doe",
      dateOfBirth: { day: "15", month: "06", year: "1995" },
      countryOfCitizenship: "India",
      referralCode: "DEV123",
      primaryPhone: "+91 9876543210",
      secondaryPhone: "+91 9876543211",
      whatsappNotifications: true,
      email: "john.doe@example.com",
      residentialAddress: "123 Main Street, Sector 1",
      city: "Mumbai",
      state: "Maharashtra",
      zipCode: "400001",
      country: "India",
      highestQualification: "Bachelor's Degree",
      specialization: "Computer Science",
      currentProfession: "Software Developer",
      currentOrganization: "Tech Corp",
      linkedinProfile: "https://linkedin.com/in/johndoe",
      idType: "Passport",
      idNumber: "A1234567",
      idDocument: null,
      studentPhoto: null,
      agreedToTerms: true,
      certifiedInformation: true,
    })
  }

  const handleInputChange = (field: string, value: any) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".")
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...(prev as any)[parent],
          [child]: value,
        },
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }))
    }

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleFileUpload = (field: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null
    handleInputChange(field, file)

    if (file && field === "studentPhoto") {
      const reader = new FileReader()
      reader.onload = (e) => {
        setPhotoPreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }

    if (file && field === "idDocument") {
      setDocumentPreview(file.name)
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Personal Details validation
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
    if (formData.fullName.trim().length < 2) newErrors.fullName = "Full name must be at least 2 characters"

    if (!formData.dateOfBirth.day) newErrors["dateOfBirth.day"] = "Day is required"
    if (!formData.dateOfBirth.month) newErrors["dateOfBirth.month"] = "Month is required"
    if (!formData.dateOfBirth.year) newErrors["dateOfBirth.year"] = "Year is required"

    // Validate date ranges
    const day = Number.parseInt(formData.dateOfBirth.day)
    const month = Number.parseInt(formData.dateOfBirth.month)
    const year = Number.parseInt(formData.dateOfBirth.year)

    if (day < 1 || day > 31) newErrors["dateOfBirth.day"] = "Invalid day"
    if (month < 1 || month > 12) newErrors["dateOfBirth.month"] = "Invalid month"
    if (year < 1950 || year > 2010) newErrors["dateOfBirth.year"] = "Invalid year"

    if (!formData.countryOfCitizenship.trim()) newErrors.countryOfCitizenship = "Country of citizenship is required"

    // Contact Information validation
    if (!formData.primaryPhone.trim()) newErrors.primaryPhone = "Primary phone is required"
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/
    if (formData.primaryPhone && !phoneRegex.test(formData.primaryPhone.replace(/\s/g, ""))) {
      newErrors.primaryPhone = "Invalid phone number format"
    }

    if (!formData.email.trim()) newErrors.email = "Email is required"
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format"
    }

    if (!formData.residentialAddress.trim()) newErrors.residentialAddress = "Address is required"
    if (!formData.city.trim()) newErrors.city = "City is required"
    if (!formData.state.trim()) newErrors.state = "State is required"
    if (!formData.zipCode.trim()) newErrors.zipCode = "Zip code is required"
    if (!formData.country.trim()) newErrors.country = "Country is required"

    // Education validation
    if (!formData.highestQualification.trim()) newErrors.highestQualification = "Highest qualification is required"
    if (!formData.specialization.trim()) newErrors.specialization = "Specialization is required"

    // Professional validation
    if (!formData.currentProfession.trim()) newErrors.currentProfession = "Current profession is required"
    if (!formData.currentOrganization.trim()) newErrors.currentOrganization = "Current organization is required"
    if (!formData.linkedinProfile.trim()) newErrors.linkedinProfile = "LinkedIn profile is required"

    // LinkedIn URL validation
    const linkedinRegex = /^https:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9-]+\/?$/
    if (formData.linkedinProfile && !linkedinRegex.test(formData.linkedinProfile)) {
      newErrors.linkedinProfile = "Invalid LinkedIn profile URL"
    }

    // Identity Document validation
    if (!formData.idType.trim()) newErrors.idType = "ID type is required"
    if (!formData.idNumber.trim()) newErrors.idNumber = "ID number is required"
    if (!formData.idDocument) newErrors.idDocument = "ID document is required"
    if (!formData.studentPhoto) newErrors.studentPhoto = "Student photo is required"

    // File type validation
    if (formData.idDocument) {
      const allowedDocTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ]
      if (!allowedDocTypes.includes(formData.idDocument.type)) {
        newErrors.idDocument = "Only PDF, DOC, and DOCX files are allowed"
      }
    }

    if (formData.studentPhoto) {
      const allowedImageTypes = ["image/jpeg", "image/jpg", "image/png"]
      if (!allowedImageTypes.includes(formData.studentPhoto.type)) {
        newErrors.studentPhoto = "Only JPEG, JPG, and PNG images are allowed"
      }
    }

    // Confirmation validation
    if (!formData.agreedToTerms) newErrors.agreedToTerms = "You must agree to terms"
    if (!formData.certifiedInformation) newErrors.certifiedInformation = "You must certify information"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handlePaymentSuccess = (paymentData: any) => {
    console.log("Payment successful:", paymentData)
  }

  const handlePaymentError = (error: any) => {
    console.error("Payment failed:", error)
    alert("Payment failed. Please try again.")
  }

  return (
    <div className="min-h-screen bg-[#FEF7F1] py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-[#FC4C03] rounded-sm flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <h1 className="text-2xl font-bold text-[#FC4C03]">SIRTIFAI - Programme Application</h1>
          </div>

          {isDevelopment && (
            <button
              onClick={autoFillForm}
              className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              🚀 Auto-Fill Form (Dev Only)
            </button>
          )}
        </div>

        {/* Single Page Form with Sections */}
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          {/* Personal Details */}
          <section>
            <h2 className="text-lg font-semibold text-[#FC4C03] mb-4">Personal Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Legal Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent ${errors.fullName ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder="Daniel Brown"
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <input
                      type="text"
                      placeholder="DD"
                      required
                      value={formData.dateOfBirth.day}
                      onChange={(e) => handleInputChange("dateOfBirth.day", e.target.value)}
                      className={`w-16 px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent ${errors["dateOfBirth.day"] ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors["dateOfBirth.day"] && (
                      <p className="text-red-500 text-xs mt-1">{errors["dateOfBirth.day"]}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="MM"
                      required
                      value={formData.dateOfBirth.month}
                      onChange={(e) => handleInputChange("dateOfBirth.month", e.target.value)}
                      className={`w-16 px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent ${errors["dateOfBirth.month"] ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors["dateOfBirth.month"] && (
                      <p className="text-red-500 text-xs mt-1">{errors["dateOfBirth.month"]}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="YYYY"
                      required
                      value={formData.dateOfBirth.year}
                      onChange={(e) => handleInputChange("dateOfBirth.year", e.target.value)}
                      className={`w-16 px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent ${errors["dateOfBirth.year"] ? "border-red-500" : "border-gray-300"
                        }`}
                    />
                    {errors["dateOfBirth.year"] && (
                      <p className="text-red-500 text-xs mt-1">{errors["dateOfBirth.year"]}</p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country of Citizenship <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.countryOfCitizenship}
                  onChange={(e) => handleInputChange("countryOfCitizenship", e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent ${errors.countryOfCitizenship ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder="India"
                />
                {errors.countryOfCitizenship && (
                  <p className="text-red-500 text-xs mt-1">{errors.countryOfCitizenship}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Referral Code (optional)</label>
                <input
                  type="text"
                  value={formData.referralCode}
                  onChange={(e) => handleInputChange("referralCode", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent"
                  placeholder="eg:HUTTY720"
                />
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-lg font-semibold text-[#FC4C03] mb-4">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Primary Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.primaryPhone}
                  onChange={(e) => handleInputChange("primaryPhone", e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent ${errors.primaryPhone ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder="+91 7888089345"
                />
                {errors.primaryPhone && <p className="text-red-500 text-xs mt-1">{errors.primaryPhone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Secondary Phone Number</label>
                <input
                  type="tel"
                  value={formData.secondaryPhone}
                  onChange={(e) => handleInputChange("secondaryPhone", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent"
                  placeholder="+91 7888089345"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Do you want WhatsApp for notifications?
                </label>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="whatsapp"
                      checked={formData.whatsappNotifications === true}
                      onChange={() => handleInputChange("whatsappNotifications", true)}
                      className="w-4 h-4 text-[#FC4C03] border-gray-300 focus:ring-[#FC4C03]"
                    />
                    <span className="ml-2 text-sm text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="whatsapp"
                      checked={formData.whatsappNotifications === false}
                      onChange={() => handleInputChange("whatsappNotifications", false)}
                      className="w-4 h-4 text-[#FC4C03] border-gray-300 focus:ring-[#FC4C03]"
                    />
                    <span className="ml-2 text-sm text-gray-700">No</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email (Primary) <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent ${errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder="danielbrown@gmail.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Residential Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.residentialAddress}
                  onChange={(e) => handleInputChange("residentialAddress", e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent ${errors.residentialAddress ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder="985/bkmini cAsomgs"
                />
                {errors.residentialAddress && <p className="text-red-500 text-xs mt-1">{errors.residentialAddress}</p>}
              </div>

              <div className="grid grid-cols-4 gap-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent ${errors.city ? "border-red-500" : "border-gray-300"
                      }`}
                    placeholder="Indore"
                  />
                  {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                    className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent ${errors.state ? "border-red-500" : "border-gray-300"
                      }`}
                    placeholder="Mp"
                  />
                  {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Zip <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.zipCode}
                    onChange={(e) => handleInputChange("zipCode", e.target.value)}
                    className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent ${errors.zipCode ? "border-red-500" : "border-gray-300"
                      }`}
                    placeholder="453000"
                  />
                  {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => handleInputChange("country", e.target.value)}
                    className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent ${errors.country ? "border-red-500" : "border-gray-300"
                      }`}
                    placeholder="India"
                  />
                  {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-lg font-semibold text-[#FC4C03] mb-4">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Highest Qualification <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.highestQualification}
                  onChange={(e) => handleInputChange("highestQualification", e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent ${errors.highestQualification ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder="graduate"
                />
                {errors.highestQualification && (
                  <p className="text-red-500 text-xs mt-1">{errors.highestQualification}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Specialization <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.specialization}
                  onChange={(e) => handleInputChange("specialization", e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent ${errors.specialization ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder="Science"
                />
                {errors.specialization && <p className="text-red-500 text-xs mt-1">{errors.specialization}</p>}
              </div>
            </div>
          </section>

          {/* Professional */}
          <section>
            <h2 className="text-lg font-semibold text-[#FC4C03] mb-4">Professional</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Profession <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.currentProfession}
                  onChange={(e) => handleInputChange("currentProfession", e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent ${errors.currentProfession ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder="graduate"
                />
                {errors.currentProfession && <p className="text-red-500 text-xs mt-1">{errors.currentProfession}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Current Organisation <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.currentOrganization}
                  onChange={(e) => handleInputChange("currentOrganization", e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent ${errors.currentOrganization ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder="Science"
                />
                {errors.currentOrganization && (
                  <p className="text-red-500 text-xs mt-1">{errors.currentOrganization}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  LinkedIn <span className="text-red-500">*</span>
                </label>
                <input
                  type="url"
                  required
                  value={formData.linkedinProfile}
                  onChange={(e) => handleInputChange("linkedinProfile", e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent ${errors.linkedinProfile ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder="https://linkedin.com/in/yourprofile"
                />
                {errors.linkedinProfile && <p className="text-red-500 text-xs mt-1">{errors.linkedinProfile}</p>}
              </div>
            </div>
          </section>

          {/* Program Summary */}
          {/* <section>
            <h2 className="text-lg font-semibold text-[#FC4C03] mb-4">Select the Program</h2>
            {selectedPackage ? (
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{selectedPackage.productData.name}</span>
                    <span className="text-gray-600">
                      {selectedPackage.type === "freelancer"
                        ? `${(selectedPackage.productData.price)} one-time`
                        : `₹${(selectedPackage.productData.price)} × ${selectedPackage.productData.duration} months`}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Program Total:</span>
                    <span className="font-semibold">₹{(selectedPackage.pricing.programPrice)}</span>
                  </div>
                  {Array.isArray(selectedPackage.addonData) && selectedPackage.addonData.length > 0 && (
                    <>
                      {selectedPackage.addonData.map((addon) => (
                        <div key={addon.id} className="flex justify-between items-center">
                          <span className="text-sm">Add-on: {addon.name}</span>
                          <span className="font-semibold">₹{addon.price}</span>
                        </div>
                      ))}
                    </>
                  )}

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Subtotal:</span>
                    <span className="font-semibold">₹{(selectedPackage.pricing.subtotal)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Tax (18%):</span>
                    <span className="font-semibold">{(selectedPackage.pricing.gst)}</span>
                  </div>
                  <div className="flex justify-between items-center font-bold text-[#FC4C03]">
                    <span>Total Amount:</span>
                    <span>₹{(selectedPackage.pricing.total)}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800">No program selected. Please go back to select a program.</p>
              </div>
            )}
          </section> */}

          {/* Identity Document */}
          <section>
            <h2 className="text-lg font-semibold text-[#FC4C03] mb-4">Identity Document</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ID Type <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.idType}
                  onChange={(e) => handleInputChange("idType", e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent ${errors.idType ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder="E.g. Passport"
                />
                {errors.idType && <p className="text-red-500 text-xs mt-1">{errors.idType}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ID Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.idNumber}
                  onChange={(e) => handleInputChange("idNumber", e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#FC4C03] focus:border-transparent ${errors.idNumber ? "border-red-500" : "border-gray-300"
                    }`}
                  placeholder="777-888-444-11"
                />
                {errors.idNumber && <p className="text-red-500 text-xs mt-1">{errors.idNumber}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload ID Document <span className="text-red-500">*</span>
                </label>
                <div
                  className={`border-2 border-dashed rounded-lg p-4 text-center hover:border-[#FC4C03] transition-colors ${errors.idDocument ? "border-red-500" : "border-gray-300"
                    }`}
                >
                  <Upload className="mx-auto h-8 w-8 text-gray-400" />
                  <div className="mt-2">
                    <label className="cursor-pointer">
                      <span className="text-sm font-medium text-gray-900">Upload PDF/Doc</span>
                      <input
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        required
                        onChange={(e) => handleFileUpload("idDocument", e)}
                      />
                    </label>
                  </div>
                  {formData.idDocument && (
                    <p className="mt-1 text-xs text-green-600">File selected: {formData.idDocument.name}</p>
                  )}
                </div>
                {errors.idDocument && <p className="text-red-500 text-xs mt-1">{errors.idDocument}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Photo (Passport - Size) <span className="text-red-500">*</span>
                </label>
                <div
                  className={`border-2 border-dashed rounded-lg p-4 text-center hover:border-[#FC4C03] transition-colors ${errors.studentPhoto ? "border-red-500" : "border-gray-300"
                    }`}
                >
                  <Upload className="mx-auto h-8 w-8 text-gray-400" />
                  <div className="mt-2">
                    <label className="cursor-pointer">
                      <span className="text-sm font-medium text-gray-900">Upload Image</span>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        required
                        onChange={(e) => handleFileUpload("studentPhoto", e)}
                      />
                    </label>
                  </div>
                  {formData.studentPhoto && (
                    <p className="mt-1 text-xs text-green-600">File selected: {formData.studentPhoto.name}</p>
                  )}
                </div>
                {errors.studentPhoto && <p className="text-red-500 text-xs mt-1">{errors.studentPhoto}</p>}

                {photoPreview && (
                  <div className="mt-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Preview:</p>
                    <img
                      src={photoPreview || "/placeholder.svg"}
                      alt="Student photo preview"
                      className="w-32 h-32 object-cover rounded-lg border border-gray-300"
                    />
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Confirmation */}
          <section>
            <h2 className="text-lg font-semibold text-[#FC4C03] mb-4">Confirmation</h2>
            <div className="space-y-4">
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  required
                  checked={formData.agreedToTerms}
                  onChange={(e) => handleInputChange("agreedToTerms", e.target.checked)}
                  className="w-4 h-4 text-[#FC4C03] border-gray-300 rounded focus:ring-[#FC4C03] mt-1"
                />
                <span className="text-sm text-gray-700">
                  I have reviewed and understand the membership benefits, features, and services.{" "}
                  <span className="text-red-500">*</span>
                </span>
              </label>
              {errors.agreedToTerms && <p className="text-red-500 text-xs">{errors.agreedToTerms}</p>}

              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  required
                  checked={formData.certifiedInformation}
                  onChange={(e) => handleInputChange("certifiedInformation", e.target.checked)}
                  className="w-4 h-4 text-[#FC4C03] border-gray-300 rounded focus:ring-[#FC4C03] mt-1"
                />
                <span className="text-sm text-gray-700">
                  I agree to the terms, community guidelines, and privacy policy.{" "}
                  <span className="text-red-500">*</span>
                </span>
              </label>
              {errors.certifiedInformation && <p className="text-red-500 text-xs">{errors.certifiedInformation}</p>}

              <div className="mt-4">
                <p className="text-sm text-gray-700 mb-2">
                  I certify that all information provided is true and accurate.
                </p>
                <div className="flex items-center space-x-4">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Signature</label>
                    <div className="border-b border-gray-300 w-32 h-8"></div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Date</label>
                    <div className="border-b border-gray-300 w-24 h-8 flex items-end">
                      <span className="text-sm text-gray-600">__/__/__</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Section */}
          {selectedPackage && (
            <section className="border-t pt-8">
              <div className="bg-white border-2 border-[#FC4C03] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Payment Summary</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">
                      {selectedPackage.type === "freelancer"
                        ? `${selectedPackage.productData.name}:`
                        : `${selectedPackage.productData.name} (${selectedPackage.productData.duration} months):`}
                    </span>
                    <span className="font-semibold">{(selectedPackage.pricing.programPrice)}</span>
                  </div>

                  {Array.isArray(selectedPackage.addonData) && selectedPackage.addonData.length > 0 && (
                    <>
                      {selectedPackage.addonData.map((addon) => (
                        <div key={addon.id} className="flex justify-between items-center">
                          <span className="text-sm">Add-on: {addon.name}</span>
                          <span className="font-semibold">₹{addon.price}</span>
                        </div>
                      ))}
                    </>
                  )}


                  {/* <div className="flex justify-between items-center">
                    <span className="text-gray-700">Subtotal:</span>
                    <span className="font-semibold">{(selectedPackage.pricing.subtotal)}</span>
                  </div> */}

                  {/* <div className="flex justify-between items-center">
                    <span className="text-gray-700">Tax (18%):</span>
                    <span className="font-semibold">{(selectedPackage.pricing.gst)}</span>
                  </div> */}

                  <hr className="my-4" />

                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total Amount</span>
                    <span className="text-[#FC4C03]">{(selectedPackage.pricing.total)}</span>
                  </div>
                </div>

                <RazorpayCheckout
                  selectedProgram={selectedPackage.selectedProduct}
                  selectedMonths={selectedPackage.productData.duration || 1}
                  selectedAddon={selectedPackage.selectedAddon || undefined}
                  studentData={formData}
                  onSuccess={handlePaymentSuccess}
                  onError={handlePaymentError}
                  validateForm={validateForm}
                />
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}

export default ApplicationForm
