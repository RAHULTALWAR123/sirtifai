/* eslint-disable @next/next/no-img-element */
// import { Button } from "../ui/Button"
import { Card } from "../ui/Card"
import { Calendar, Clock, Users } from "lucide-react"

export default function UpcomingWebinars() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Upcoming Webinars & Events</h2>
          <p className="text-lg text-gray-600">Join live sessions with industry experts and successful alumni</p>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Event 1 */}
          <Card className="overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
              alt="Global Career Webinar"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Mastering APIs for Global Career</h3>
              <p className="text-gray-600">
                Learn essential API development skills that international companies are looking for.
              </p>

              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Dec 15, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>7:00 PM IST</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>234 registered</span>
                </div>
              </div>

              {/* <Button className="w-full bg-[#ff7847] hover:bg-[#e56a3f] text-white">Register Free</Button> */}
            </div>
          </Card>

          {/* Event 2 */}
          <Card className="overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg"
              alt="Placement Drive"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-gray-900">International Placement Drive</h3>
              <p className="text-gray-600">Connect directly with hiring managers from top international companies.</p>

              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Dec 18, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>6:00 PM IST</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>156 registered</span>
                </div>
              </div>

              {/* <Button className="w-full bg-[#ff7847] hover:bg-[#e56a3f] text-white">Join Event</Button> */}
            </div>
          </Card>

          {/* Event 3 */}
          <Card className="overflow-hidden">
            <img
              src="https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg"
              alt="Alumni Networking"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Alumni Networking Seminar</h3>
              <p className="text-gray-600">Network with successful alumni and learn from their career journeys.</p>

              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Dec 22, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>8:00 PM IST</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>89 registered</span>
                </div>
              </div>

              {/* <Button className="w-full bg-[#ff7847] hover:bg-[#e56a3f] text-white">Reserve Spot</Button> */}
            </div>
          </Card>
        </div>

        {/* Bottom Navigation */}
        {/* <div className="flex items-center justify-center gap-4">
          <Button className="bg-[#ff7847] hover:bg-[#e56a3f] text-white px-8 py-3 rounded-full">
            Register for Next Webinar
          </Button>
          <Button variant="outline" size="icon" className="rounded-full border-gray-300 bg-transparent">
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div> */}
      </div>
    </section>
  )
}