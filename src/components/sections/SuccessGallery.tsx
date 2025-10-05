/* eslint-disable @next/next/no-img-element */
import { Button } from "../ui/Button"
import { ArrowRight } from "lucide-react"

export default function SuccessGallery() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Success Gallery</h2>
          <p className="text-lg text-gray-600">Moments and milestones from our learning community</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="space-y-6">
            <img
              src="/creative-hands-project.png"
              alt="Creative work"
              className="w-full h-64 object-cover rounded-2xl"
            />
            <img
              src="/placeholder-01zjq.png"
              alt="Achievement celebration"
              className="w-full h-48 object-cover rounded-2xl"
            />
          </div>

          <div className="space-y-6">
            <img src="/inspiring-sunset-landscape.png" alt="Inspiration" className="w-full h-48 object-cover rounded-2xl" />
            <img
              src="/modern-office-success.png"
              alt="Workspace motivation"
              className="w-full h-64 object-cover rounded-2xl"
            />
          </div>

          <div className="space-y-6">
            <img
              src="/collaborative-learning.png"
              alt="Team collaboration"
              className="w-full h-56 object-cover rounded-2xl"
            />
            <img
              src="/graduation-success.png"
              alt="Graduation success"
              className="w-full h-56 object-cover rounded-2xl"
            />
          </div>

          <div className="space-y-6">
            <img
              src="/abstract-success-growth.png"
              alt="Growth visualization"
              className="w-full h-64 object-cover rounded-2xl"
            />
            <img
              src="/professional-networking-career-growth.png"
              alt="Professional networking"
              className="w-full h-48 object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-center gap-4">
          <Button className="bg-[#ff7847] hover:bg-[#e56a3f] text-white px-8 py-3 rounded-full">Explore Gallery</Button>
          <Button variant="outline" className="w-10 h-10 rounded-full border-gray-300 bg-transparent p-0">
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
