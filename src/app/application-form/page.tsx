"use client";
import { Footer } from "../../components/layout/Footer";
import React, { useState, useEffect } from "react";

// Strong typing for form
interface FormData {
  fullName: string;
  email: string;
  phone: string;
  dobDD: string;
  dobMM: string;
  dobYYYY: string;
  citizenship: string;
  gender: string;
  organization: string;
  signature: string;
  date: string;
  confirmations: Record<ConfirmationKey, boolean>;
}

type ConfirmationKey = "benefits" | "terms" | "certify";

const SirtifaiPGCAPForm = () => {
  const [selectedType, setSelectedType] = useState("College Students");
  const [showChoice, setShowChoice] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    dobDD: "",
    dobMM: "",
    dobYYYY: "",
    citizenship: "",
    gender: "",
    organization: "",
    signature: "",
    date: "",
    confirmations: {
      benefits: false,
      terms: false,
      certify: false,
    },
  });

  const types = ["College Students", "Professional", "School student", "Fresher"];

  // Hide the temporary choice after 15 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowChoice(false), 15000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-[#FEF7F1] font-sans flex justify-center shadow-2xl py-10">
        <div className="max-w-4xl mx-auto w-full">

          {/* Temporary Choice Box */}
          {showChoice && (
            <div className="mb-8 bg-white p-6 rounded-lg shadow-md text-center">
              <h2 className="text-lg font-semibold text-orange-500 mb-4">
                Do you want to ?
              </h2>
              <div className="flex justify-center gap-6">
                <button className="px-6 py-2 rounded-md bg-red-500 text-white font-medium hover:bg-red-600 transition">
                  Login with Google
                </button>
                <button className="px-6 py-2 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-600 transition">
                  Register as Guest
                </button>
              </div>
            </div>
          )}

          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-white p-2 rounded">
              <img
                src="/favicon.ico"
                alt="Sirtifai Logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <h1 className="text-3xl font-semibold text-orange-500">
              SIRTIFAI – PGCAP Application Form
            </h1>
          </div>

          {/* Candidate Details */}
          <div className="mb-8 bg-white p-6 rounded-lg">
            <h2 className="text-lg font-semibold text-orange-500 mb-6">
              Candidate Details
            </h2>

            {/* Full Name */}
            <div className="mb-6">
              <label className="block text-sm text-gray-700 mb-2">
                Full Legal Name*
              </label>
              <input
                type="text"
                placeholder="Daniel Brown"
                className="w-full px-4 py-2 border border-orange-400 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  E-Mail Address*
                </label>
                <input
                  type="email"
                  placeholder="eg:danielbrown@gmail.com"
                  className="w-full px-4 py-2 border border-orange-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  placeholder="eg:+xx xxxxxxxxxx"
                  className="w-full px-4 py-2 border border-orange-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>

            {/* DOB + Citizenship */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Date of Birth
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <input
                    type="text"
                    placeholder="DD"
                    maxLength={2}
                    className="w-full px-4 py-2 border border-orange-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={formData.dobDD}
                    onChange={(e) =>
                      setFormData({ ...formData, dobDD: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="MM"
                    maxLength={2}
                    className="w-full px-4 py-2 border border-orange-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={formData.dobMM}
                    onChange={(e) =>
                      setFormData({ ...formData, dobMM: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="YYYY"
                    maxLength={4}
                    className="w-full px-4 py-2 border border-orange-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={formData.dobYYYY}
                    onChange={(e) =>
                      setFormData({ ...formData, dobYYYY: e.target.value })
                    }
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Citizenship
                </label>
                <input
                  type="text"
                  placeholder="India"
                  className="w-full px-4 py-2 border border-orange-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={formData.citizenship}
                  onChange={(e) =>
                    setFormData({ ...formData, citizenship: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Gender + Organization */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Gender*
                </label>
                <select
                  className="w-full px-4 py-2 border border-orange-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-600"
                  value={formData.gender}
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                >
                  <option value="">eg: Female</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Organisation / Institute Name*
                </label>
                <input
                  type="text"
                  placeholder="eg:SirtiGr"
                  className="w-full px-4 py-2 border border-orange-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={formData.organization}
                  onChange={(e) =>
                    setFormData({ ...formData, organization: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Type Selection */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">Type*</label>
              <div className="grid grid-cols-4 gap-3">
                {types.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      selectedType === type
                        ? "bg-[#FAB89F] text-black"
                        : "bg-white border border-orange-300 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Confirmation */}
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-lg font-semibold text-orange-500 mb-4">
              Confirmation
            </h2>

            <div className="space-y-4 mb-6">
              {(
                [
                  {
                    key: "benefits",
                    text: "I have reviewed and understand the membership benefits, features, and services.",
                  },
                  {
                    key: "terms",
                    text: "I agree to the terms, community guidelines, and privacy policy.",
                  },
                  {
                    key: "certify",
                    text: "I certify that all information provided is true and accurate.",
                  },
                ] as { key: ConfirmationKey; text: string }[]
              ).map((item) => (
                <label
                  key={item.key}
                  className="flex items-start gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-orange-500 border-orange-300 rounded-full focus:ring-orange-500"
                    checked={formData.confirmations[item.key]}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmations: {
                          ...formData.confirmations,
                          [item.key]: e.target.checked,
                        },
                      })
                    }
                  />
                  <span className="text-sm text-gray-700">{item.text}</span>
                </label>
              ))}
            </div>

            {/* Signature + Date */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex justify-center">
                <label className="block text-sm text-orange-500 mb-1">
                  Signature*
                </label>
                <div className="border-b border-gray-400 w-3/4 py-2 text-sm text-gray-500">
                  {formData.signature || ""}
                </div>
              </div>
              <div className="flex justify-center">
                <label className="block text-sm text-orange-500 mb-1">
                  Date*
                </label>
                <div className="border-b border-gray-400 w-3/4 py-2 text-lg text-gray-500">
                  {formData.date || "__/__/__"}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default SirtifaiPGCAPForm;
