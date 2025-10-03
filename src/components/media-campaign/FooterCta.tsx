import { Button } from "../ui/Button"

export default function FooterCTA() {
  return (
    <section className="bg-[#ff7847] py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Be the Next Sirtifai Success Story</h2>
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          Join thousands of learners who have transformed their careers. Start your journey today and become part of our
          success community.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="sm:bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full">Join PGCAP</Button>
          {/* <Button
            variant="outline"
            className="border-white text-black hover:bg-transparent hover:text-white px-8 py-3 rounded-full bg-white"
          >
            Book a Free Session
          </Button> */}
          {/* <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-[#ff7847] px-8 py-3 rounded-full bg-transparent"
          >
           See Income Tracker
          </Button> */}
        </div>
      </div>
    </section>
  )
}