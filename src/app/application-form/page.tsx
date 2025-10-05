/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

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
  inid: string;
  signature: string;
  date: string;
  confirmations: Record<ConfirmationKey, boolean>;
}

type ConfirmationKey = "benefits" | "terms" | "certify";

interface GoogleUserData {
  email: string;
  name: string;
  picture?: string;
  sub: string;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

const SirtifaiPGCAPForm = () => {
  const [selectedType, setSelectedType] = useState("College Students");
  const [showChoice, setShowChoice] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<GoogleUserData | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

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
    inid: "",
    signature: "",
    date: "",
    confirmations: {
      benefits: false,
      terms: false,
      certify: false,
    },
  });

  const types = ["College Students", "Professional", "School student", "Fresher"];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowChoice(false), 15000);
    return () => clearTimeout(timer);
  }, []);

  const handleGoogleSuccess = (credentialResponse: any) => {
    try {
      const decoded: any = jwtDecode(credentialResponse.credential);
      const user: GoogleUserData = {
        email: decoded.email,
        name: decoded.name,
        picture: decoded.picture,
        sub: decoded.sub
      };
      setUserData(user);
      setIsLoggedIn(true);
      setFormData({
        ...formData,
        fullName: user.name,
        email: user.email,
      });
      setShowChoice(false);
    } catch (error) {
      console.error("Error decoding Google token:", error);
      alert("Failed to process Google login. Please try again.");
    }
  };

  const handleGoogleError = () => {
    console.error("Google Login Failed");
    alert("Failed to login with Google. Please try again.");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      dobDD: "",
      dobMM: "",
      dobYYYY: "",
      citizenship: "",
      gender: "",
      organization: "",
      inid: "",
      signature: "",
      date: "",
      confirmations: {
        benefits: false,
        terms: false,
        certify: false,
      },
    });
  };

  const createRazorpayOrder = async () => {
    try {
      const response = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 79900,
          currency: 'INR',
          receipt: `receipt_${Date.now()}`,
          notes: {
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            type: selectedType,
            inid: formData.inid || 'None'
          },
          formData: formData,
          selectedType: selectedType
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  };

  const verifyPayment = async (paymentData: any) => {
    try {
      const response = await fetch('/api/razorpay/verify-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      if (!response.ok) {
        throw new Error('Payment verification failed');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error verifying payment:', error);
      throw error;
    }
  };

  const handlePayment = async () => {
    setIsProcessing(true);

    try {
      const orderData = await createRazorpayOrder();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'SIRTIFAI',
        description: 'PGCAP Application Fee',
        order_id: orderData.id,
        handler: async function (response: any) {
          try {
            const verificationData = {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              formData: formData,
              selectedType: selectedType,
              userData: userData
            };

            const verifyResult = await verifyPayment(verificationData);

            if (verifyResult.success) {
              alert('Payment successful! Your application has been submitted.');
              console.log('Payment ID:', response.razorpay_payment_id);
            } else {
              alert('Payment verification failed. Please contact support.');
            }
          } catch (error) {
            console.error('Verification error:', error);
            alert('Payment verification failed. Please contact support.');
          } finally {
            setIsProcessing(false);
          }
        },
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.phone,
        },
        notes: {
          type: selectedType,
          inid: formData.inid || 'None',
          organization: formData.organization
        },
        theme: {
          color: '#F97316',
        },
        modal: {
          ondismiss: function() {
            setIsProcessing(false);
            alert('Payment cancelled. Please try again when ready.');
          }
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();

    } catch (error) {
      console.error('Payment error:', error);
      alert('Failed to initiate payment. Please try again.');
      setIsProcessing(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.phone || !formData.gender || !formData.organization) {
      alert("Please fill in all required fields marked with *");
      return;
    }
    
    if (!formData.confirmations.benefits || !formData.confirmations.terms || !formData.confirmations.certify) {
      alert("Please check all confirmation boxes");
      return;
    }
    
    if (!formData.signature || !formData.date) {
      alert("Please provide your signature and date");
      return;
    }
    
    await handlePayment();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 font-sans flex justify-center py-10">
      <div className="max-w-4xl mx-auto w-full px-4">

        {isLoggedIn && userData && (
          <div className="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl shadow-lg border-2 border-green-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center sm:gap-4 gap-1">
                {userData.picture && (
                  <img
                    src={userData.picture}
                    alt="Profile"
                    className="sm:w-14 sm:h-14 h-10 w-10 rounded-full border-3 border-green-400 shadow-md"
                  />
                )}
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-gray-800 text-lg">{userData.name}</p>
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600">{userData.email}</p>
                  <p className="text-xs text-green-600 mt-1">✓ Logged in with Google</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="px-5 py-2 text-sm ml-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all transform hover:scale-105 shadow-md"
              >
                Logout
              </button>
            </div>
          </div>
        )}


        {formData.inid && (
          <div className="mb-8 bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl shadow-lg border-2 border-purple-200">
            <div className="flex items-center gap-3">
              <div className="bg-purple-500 p-3 rounded-full">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-purple-800">Referral Code: {formData.inid}</p>
                <p className="text-sm text-purple-600">You&apos;re applying with a referral code</p>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center gap-4 mb-8 p-6 rounded-xl">
          {/* <div className="bg-orange-100 p-3 rounded-lg">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
          </div> */}
          <img src="favicon.ico" alt="icon"  className="h-10 w-10"/>
          <div>
            <h1 className="text-3xl font-bold text-orange-600">
              SIRTIFAI – PGCAP Application Form
            </h1>
            <p className="text-sm text-gray-500">Post Graduate Certificate in Applied Profession</p>
          </div>
        </div>

        {showChoice && !isLoggedIn && (
          <div className="mb-8 bg-white p-8 rounded-xl shadow-lg text-center border-2 border-orange-200">
            <div className="mb-4">
              <svg className="w-16 h-16 mx-auto text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            {/* <h2 className="text-2xl font-bold text-orange-600 mb-2">
              Welcome to SIRTIFAI PGCAP
            </h2> */}
            <p className="text-gray-600 mb-6">Login with Google to auto-fill your details and save time!</p>
            <div className="flex justify-center">
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
                theme="outline"
                size="large"
                text="continue_with"
                shape="rectangular"
                width="280"
              />
            </div>
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="h-px bg-gray-300 w-20"></div>
              <p className="text-sm text-gray-500">or fill manually</p>
              <div className="h-px bg-gray-300 w-20"></div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-8 bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-orange-600 mb-6 border-b-2 border-orange-200 pb-2">
              Candidate Details
            </h2>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Legal Name*
              </label>
              <input
                type="text"
                placeholder="Daniel Brown"
                required
                className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  E-Mail Address*
                </label>
                <input
                  type="email"
                  placeholder="danielbrown@gmail.com"
                  required
                  className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number*
                </label>
                <input
                  type="tel"
                  placeholder="+91 xxxxxxxxxx"
                  required
                  className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Date of Birth
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <input
                    type="text"
                    placeholder="DD"
                    maxLength={2}
                    className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition text-center"
                    value={formData.dobDD}
                    onChange={(e) =>
                      setFormData({ ...formData, dobDD: e.target.value.replace(/\D/g, '') })
                    }
                  />
                  <input
                    type="text"
                    placeholder="MM"
                    maxLength={2}
                    className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition text-center"
                    value={formData.dobMM}
                    onChange={(e) =>
                      setFormData({ ...formData, dobMM: e.target.value.replace(/\D/g, '') })
                    }
                  />
                  <input
                    type="text"
                    placeholder="YYYY"
                    maxLength={4}
                    className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition text-center"
                    value={formData.dobYYYY}
                    onChange={(e) =>
                      setFormData({ ...formData, dobYYYY: e.target.value.replace(/\D/g, '') })
                    }
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Citizenship
                </label>
                <input
                  type="text"
                  placeholder="India"
                  className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                  value={formData.citizenship}
                  onChange={(e) =>
                    setFormData({ ...formData, citizenship: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Gender*
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition text-gray-700"
                  value={formData.gender}
                  onChange={(e) =>
                    setFormData({ ...formData, gender: e.target.value })
                  }
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Organisation / Institute Name*
                </label>
                <input
                  type="text"
                  placeholder="SirtiGr"
                  required
                  className="w-full px-4 py-3 border-2 border-orange-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
                  value={formData.organization}
                  onChange={(e) =>
                    setFormData({ ...formData, organization: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                INID (Referral Code)
                <span className="text-gray-500 font-normal ml-2">(Optional)</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter referral code if you have one"
                  className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition uppercase"
                  value={formData.inid}
                  onChange={(e) =>
                    setFormData({ ...formData, inid: e.target.value.toUpperCase() })
                  }
                />
                {formData.inid && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-2">
                💡 INID is a referral code from institutes, influencers, or partners
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">Type*</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {types.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all transform hover:scale-105 ${
                      selectedType === type
                        ? "bg-orange-500 text-white shadow-lg"
                        : "bg-orange-50 border-2 border-orange-200 text-gray-700 hover:bg-orange-100"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
            <h2 className="text-2xl font-bold text-orange-600 mb-6 border-b-2 border-orange-200 pb-2">
              Confirmation
            </h2>

            <div className="space-y-4 mb-8">
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
                  className="flex items-start gap-3 cursor-pointer p-3 rounded-lg hover:bg-orange-50 transition"
                >
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-5 h-5 text-orange-500 border-2 border-orange-300 rounded focus:ring-orange-500 cursor-pointer"
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t-2 border-orange-200">
              <div>
                <label className="block text-sm font-semibold text-orange-600 mb-3">
                  Signature*
                </label>
                <input
                  type="text"
                  placeholder="Type your full name as signature"
                  required
                  className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-orange-500 transition italic text-lg"
                  value={formData.signature}
                  onChange={(e) =>
                    setFormData({ ...formData, signature: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-orange-600 mb-3">
                  Date*
                </label>
                <input
                  type="date"
                  required
                  className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-orange-500 transition"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={isProcessing}
              className={`w-full mt-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 rounded-lg transition-all transform shadow-lg flex items-center justify-center gap-2 ${
                isProcessing 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:from-orange-600 hover:to-orange-700 hover:scale-105'
              }`}
            >
              {isProcessing ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing Payment...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Pay ₹799 & Submit Application
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SirtifaiPGCAPForm;