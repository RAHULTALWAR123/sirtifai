/* eslint-disable @next/next/no-img-element */
import { Button } from "../ui/Button"
import {  ArrowRight } from "lucide-react"

export default function SuccessGallery() {
  return (
    <section className="bg-[#FEF7F1] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Success Gallery
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Moments and milestones from our learning community
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          <img
            src="/assets/media-campaign/gallery/1.jpg"
            alt="Creative work"
            className="w-full h-40 sm:h-56 md:h-64 object-cover rounded-2xl"
          />
          <img
            src="/assets/media-campaign/gallery/2.jpg"
            alt="Achievement celebration"
            className="w-full h-40 sm:h-56 md:h-64 object-cover rounded-2xl"
          />
          <img
            src="/assets/media-campaign/gallery/3.jpg"
            alt="Workspace motivation"
            className="w-full h-40 sm:h-56 md:h-64 object-cover rounded-2xl"
          />
          <img
            src="/assets/media-campaign/gallery/4.jpg"
            alt="Team collaboration"
            className="w-full h-40 sm:h-56 md:h-64 object-cover rounded-2xl"
          />
        </div>

        {/* Bottom Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="bg-[#ff7847] hover:bg-[#e56a3f] text-white px-6 py-3 rounded-full w-full sm:w-auto">
            Explore Gallery
          </Button>

        <Button variant="outline" size="icon" className="rounded-full border-gray-300 bg-black">
            <ArrowRight color="white" className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
