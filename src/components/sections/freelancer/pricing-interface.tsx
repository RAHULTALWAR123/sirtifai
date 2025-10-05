/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Plus } from "lucide-react"
import { useRouter } from "next/navigation"

import {
  getProgramAddons,
  getSkillPhaseProducts,
  getPracticePhaseProducts,
  getProgressPhaseProducts,
  createStandardizedPackageData,
  getProductPrice,
} from "../../../lib/products"

import products from "@/data/products.json"
import ProgramSelection from "@/components/common/ProgramSelection"
import AddonSection from "@/components/common/AddonSection"

const PricingInterface = () => {
  const router = useRouter()

  type ProgramKey = "freelancer-basic" | "freelancer-pro" | "freelancer-elite";
  const [selectedProgram, setSelectedProgram] = useState<ProgramKey>("freelancer-basic")
  const [selectedDurations, setSelectedDurations] = useState<{ [key: string]: number }>({
    "freelancer-basic": 1,
    "freelancer-pro": 1,
    "freelancer-elite": 1,
  })
  const [selectedAddons, setSelectedAddons] = useState<{ [key: string]: string }>({
    payroll: "",
    ca: "",
    legal: ""
  });

  type SectionKey = "payroll" | "legal" | "tax" | "business";

  const [expandedSections, setExpandedSections] = useState<Record<SectionKey, boolean>>({
    payroll: true,

    legal: true,
    tax: true,
    business: true
  });

  const toggleSection = (key: SectionKey) =>
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));

  const handleAddonSelect = (sectionKey: string, addonId: string) =>
    setSelectedAddons((prev) => ({ ...prev, [sectionKey]: addonId }));

  const handleBuyNow = () => {
    proceedToPurchase()
  }

  const selectedAddonIds = Object.values(selectedAddons).filter(id => id);

  const proceedToPurchase = () => {
    const packageData = createStandardizedPackageData(
      "freelancer",
      selectedProgram,
      Object.values(selectedAddons).filter(id => id !== ""),
      selectedDurations[selectedProgram] || 1
    );

    localStorage.setItem("selectedPackage", JSON.stringify(packageData))
    router.push("/application")
  }

  const calculateTotal = () => {
    const program = products.freelancer?.[selectedProgram];
    const duration = selectedDurations[selectedProgram] || 1;
    const programCost = program ? program.price * duration : 0;

    const allAddons: { [key: string]: { price: number } } = { ...products.programAddons, ...products.freelancerAddons };

    const addonCosts = Object.values(selectedAddons).reduce((sum, addonId) => {
      const addon = allAddons[addonId];
      return sum + (addon ? addon.price : 0);
    }, 0);

    const subtotal = programCost + addonCosts;

    return {
      programCost,
      addonCosts,
      subtotal,
      tax: 0,
      total: subtotal
    };
  };

  const costs = calculateTotal()

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Simple, Transparent Pricing</h1>
          <p className="text-gray-600">One-time payment for lifetime access to our comprehensive program, with on-going support.</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border">
          {/* Select Program Header */}
          <div className="flex items-center justify-between p-6 border-b bg-gray-50">
            <h2 className="text-lg font-semibold">Select the Program</h2>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium">
              + Add Ons
            </button>
          </div>

          {/* Skill Phase */}
          {/* <div className="p-6 border-b">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold">Freelancer Basic Package</h3>
                
              </div>
             
            </div>

            <ProgramSelection
              programIds={["freelancer-basic"]}
              category="freelancer"
              products={products}
              selectedProgram={selectedProgram}
              setSelectedProgram={(id: string) => setSelectedProgram(id as ProgramKey)}
              selectedDurations={selectedDurations}
              setSelectedDurations={setSelectedDurations}
            />
          </div> */}

          {/* Practice Phase */}
          {/* <div className="p-6 border-b">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold">Freelancer Pro Package</h3>
              
              </div>
            
            </div>

            <ProgramSelection
              programIds={["freelancer-pro"]}
              category="freelancer"
              products={products}
              selectedProgram={selectedProgram}
              setSelectedProgram={(id: string) => setSelectedProgram(id as ProgramKey)}
              selectedDurations={selectedDurations}
              setSelectedDurations={setSelectedDurations}
            />
          </div> */}

          {/* Progress Phase */}
          <div className="p-6 border-b">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold">
                PGCAP
                   Package
                   </h3>
                {/* <div className="text-2xl font-bold text-gray-900 mt-1">
                  ₹7199 <span className="text-sm font-normal text-gray-500">Inclusive GST</span>
                </div> */}
              </div>
              {/* <div className="flex items-center gap-4">
                <select className="border rounded px-3 py-2 text-sm">
                  <option>1 Month</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div> */}
            </div>

            <ProgramSelection
              programIds={["freelancer-elite"]}
              category="freelancer"
              products={products}
              selectedProgram={selectedProgram}
              setSelectedProgram={(id: string) => setSelectedProgram(id as ProgramKey)}
              selectedDurations={selectedDurations}
              setSelectedDurations={setSelectedDurations}
            />
          </div>

          {/* Add-On Services */}
          <div className="p-6">
            <h3 className="text-xl font-bold mb-6">Add-On Services</h3>

            <AddonSection
              title="Payroll Services"
              description="Streamline your payroll operations"
              color="blue"
              sectionKey="payroll"
              addonIds={['payroll-epf']}
              allAddons={products.freelancerAddons}
              expandedSections={expandedSections}
              toggleSection={(key: string) => toggleSection(key as SectionKey)}
              selectedAddons={selectedAddons}
              onSelect={handleAddonSelect}
            />

            <AddonSection
              title="Tax Filing"
              description="Professional accounting support"
              color="yellow"
              sectionKey="tax"
              addonIds={['tax-filing']}
              allAddons={products.freelancerAddons}
              expandedSections={expandedSections}
              toggleSection={(key: string) => toggleSection(key as SectionKey)}
              selectedAddons={selectedAddons}
              onSelect={handleAddonSelect}
            />

            <AddonSection
              title="Legal Services"
              description="Comprehensive legal support"
              color="red"
              sectionKey="legal"
              addonIds={['legal-support']}
              allAddons={products.freelancerAddons}
              expandedSections={expandedSections}
              toggleSection={(key: string) => toggleSection(key as SectionKey)}
              selectedAddons={selectedAddons}
              onSelect={handleAddonSelect}
            />

            {/* <AddonSection
              title="Business Setup"
              description="Comprehensive business setup support"
              color="orange"
              sectionKey="business"
              addonIds={['business-setup']}
              allAddons={products.freelancerAddons}
              expandedSections={expandedSections}
              toggleSection={(key: string) => toggleSection(key as SectionKey)}
              selectedAddons={selectedAddons}
              onSelect={handleAddonSelect}
            /> */}
          </div>
        </div>

        {/* Program Summary */}
        <div className="mt-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            Your Program Summary
            <Plus className="w-5 h-5" />
          </h3>

          <div className="space-y-3">
            {selectedProgram && products.freelancer[selectedProgram] && (
              <div className="flex justify-between items-center">
                <span className="text-white/90">{products.freelancer[selectedProgram].name}</span>
                <span className="font-semibold">₹{costs.programCost.toLocaleString()}</span>
              </div>
            )}

            {["payroll", "tax", "legal", "business"].map((key) => {
              const addonId = selectedAddons[key];
              const addon = { ...products.programAddons, ...products.freelancerAddons }[addonId];
              return (
                <div key={key} className="flex justify-between items-center">
                  <span className="text-white/90">
                    Add-on {key.charAt(0).toUpperCase() + key.slice(1)} Services (Optional)
                  </span>
                  <span className="font-semibold">₹{addon ? addon.price.toLocaleString() : "0"}</span>
                </div>
              );
            })}

            <hr className="border-white/30 my-4" />

            <div className="flex justify-between items-center font-bold text-xl">
              <span>Total</span>
              <span>₹{costs.total.toLocaleString()}</span>
            </div>
          </div>

          <div className="mt-6 text-sm text-white/80 leading-relaxed">
            This module provides hands-on training in web design, covering HTML, CSS, JavaScript, and responsive design techniques. Students will learn to create professional websites from scratch using modern tools and frameworks. Join now!
          </div>

          <button
            onClick={handleBuyNow}
            className="w-full bg-white text-orange-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors mt-6 text-lg"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default PricingInterface