/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import { Header } from "../../components/layout/Header"
import { Footer } from "../../components/layout/Footer"

import Hero from "../../components/sections/program/hero"
import About from "../../components/sections/program/about"
import Benefits from "../../components/sections/program/benefits"
import Features from "../../components/sections/program/features"
import WhoCanUse from "../../components/sections/program/who-can-use"
import FAQ from "../../components/sections/program/faq"
import ProgramSelection from "../../components/sections/program/program-selection"

type ProgramProps = {
  params: { variant: string }
}

export default function ProgramPage({ params }: ProgramProps) {
  const [variant, setVariant] = useState(params.variant || "skill")

  return (
    <div className="bg-[#FEF7F1] font-sans min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Benefits />
      <Features />

      <ProgramSelection />

      {/* Adds on pricing */}

      {/* <AddOnsPricing /> */}

      {/* who can use it */}
      <WhoCanUse />
      {/* FAQS */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  )
}
