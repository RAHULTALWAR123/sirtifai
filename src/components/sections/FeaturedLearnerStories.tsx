/* eslint-disable @next/next/no-img-element */

import { Button } from "../ui/Button"
import { Card } from "../ui/Card"
import { Play, ArrowRight } from "lucide-react"

export default function FeaturedLearnerStories() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Learner Stories</h2>
          <p className="text-lg text-gray-600">
            Real people, real transformations. See how our learners turned skills into careers.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Video Testimonial Card */}
          <Card className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="relative mb-6">
              <img
                src="/cozy-laptop-work.png"
                alt="Video testimonial"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#ff7847] rounded-full p-4">
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <span className="text-[#ff7847] text-sm font-medium">Video Testimonial</span>
              <h3 className="text-xl font-bold text-gray-900">Skill → Practice → Progress Journey</h3>
              <p className="text-gray-600">
                Watch how Rahul transformed from a college graduate to a full-stack developer earning 3x his previous
                salary.
              </p>

              <div className="pt-4 border-t border-gray-100">
                <p className="font-semibold text-gray-900">Rahul Sharma</p>
                <p className="text-sm text-gray-500">Full-Stack Developer</p>
              </div>
            </div>
          </Card>

          {/* Career Transformation Card */}
          <Card className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="space-y-6">
              <span className="text-[#ff7847] text-sm font-medium">Before & After</span>

              <h3 className="text-xl font-bold text-gray-900">Career Transformation</h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">BEFORE</p>
                    <p className="font-semibold text-gray-900">Customer Support</p>
                    <p className="text-sm text-gray-600">₹18,000/month</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#ff7847]" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">AFTER</p>
                    <p className="font-semibold text-gray-900">UI/UX Designer</p>
                    <p className="text-sm text-[#ff7847] font-semibold">₹85,000/month</p>
                  </div>
                </div>

                <p className="text-gray-600">
                  Priya went from basic computer skills to mastering design tools in just 6 months. Now works with
                  international clients.
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Figma</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">UI Design</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Prototyping</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">User Research</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <p className="font-semibold text-gray-900">Priya Patel</p>
                <p className="text-sm text-gray-500">UI/UX Designer</p>
              </div>
            </div>
          </Card>

          {/* Spotlight Article Card */}
          <Card className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="space-y-6">
              <span className="text-[#ff7847] text-sm font-medium">Spotlight Article</span>

              <h3 className="text-xl font-bold text-gray-900">From College to Global Career</h3>

              <p className="text-gray-600">
                How Amit leveraged Sirtifai&apos;s international track to land a remote position with a US tech company.
              </p>

              <blockquote className="text-gray-700 italic border-l-4 border-[#ff7847] pl-4">
                &quot;The structured learning path and practical projects gave me real-world experience that my college never
                provided. The mentorship was invaluable.&quot;
              </blockquote>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#ff7847] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">$</span>
                  </div>
                  <span className="text-sm text-gray-700">Software Engineer at US Tech Firm</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#ff7847] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">$</span>
                  </div>
                  <span className="text-sm text-gray-700">$4,500/month (Remote)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#ff7847] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">🎓</span>
                  </div>
                  <span className="text-sm text-gray-700">International Career Track Graduate</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <p className="font-semibold text-gray-900">Amit Kumar</p>
                <p className="text-sm text-gray-500">Software Engineer</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-end gap-4">
          <Button className="bg-[#ff7847] hover:bg-[#e56a3f] text-white px-8 py-3 rounded-full">
            View All Stories
          </Button>
          <Button variant="outline" size="sm" className="rounded-full border-gray-300 bg-transparent">
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}