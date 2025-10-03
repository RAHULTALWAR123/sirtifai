import Link from "next/link"
import { CtaButton } from "../../common/cta-button"

export default function CtaBand() {
  return (
    <section className="bg-orange-500">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-8 sm:flex-col sm:py-10 md:flex-row md:items-center md:justify-between">
        
        {/* Text Block */}
        <div className="max-w-2xl text-center md:text-left">
          <h3 className="text-pretty font-sans text-lg sm:text-xl md:text-2xl font-bold text-white">
            Start your journey today and build a successful career.
          </h3>
          <p className="mt-2 text-sm sm:text-base leading-6 text-orange-50">
            Our expert advisors are here to guide you in selecting the perfect plan—
            whether local or global—to align with your professional aspirations.
          </p>
        </div>

        {/* Button Block */}
        <div className="w-full sm:w-auto flex justify-center md:justify-end">
          <CtaButton
            href="#volunteer"
            variant="solid"
            className="bg-white text-orange-600 hover:bg-orange-50 rounded-4xl w-full sm:w-auto"
            >
          <Link href={"/contact"}>
            <p className="text-base sm:text-lg md:text-xl font-semibold">
              Volunteer Today
            </p>
            </Link>
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
