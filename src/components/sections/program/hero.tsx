/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-screen bg-[#FEF7F1]">
      <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8 flex flex-col md:flex-row items-stretch justify-between gap-12">
        {/* LEFT COLUMN */}
        <div className="flex flex-col justify-between w-full md:w-full">
          <div className="space-y-6">
            <h2 className="text-[28px] sm:text-[40px] md:text-[80px] font-[600] tracking-tight leading-tight capitalize">
              Sirtifai SPP – Learn. Earn. Get Placed. Rise.
            </h2>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex items-center justify-center gap-4 w-full sm:w-auto md:max-w-[250px] bg-[#284050] border border-[rgba(255,255,255,0.45)] rounded-full px-4 py-2">
                <button className="text-base text-white font-[600]">
                  Book a Call
                </button>
                <img
                  className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] object-contain"
                  src="/assets/programs/phone.png"
                  alt="Phone"
                />
              </div>
              <span className="text-[16px] sm:text-[18px] font-[400] text-black/40 max-w-full sm:max-w-[370px]">
                From no experience to ₹35L/year global careers – your journey,
                your pace.
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-start my-8">
            <h3 className="text-[18px] sm:text-[21px] font-inter font-[400]">
              Join SPP Now
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <Link
                href="/programs/sirtifai-international"
                className="flex items-center justify-between sm:justify-center gap-4 bg-white shadow-[0_4px_4px_rgba(248,177,150,0.10)] p-4 text-[#FC4C03]"
              >
                International <ArrowRight />
              </Link>

              <Link
                href="/programs/freelancer"
                className="flex items-center justify-between sm:justify-center gap-4 bg-white shadow-[0_4px_4px_rgba(248,177,150,0.10)] p-4 text-[#FC4C03]"
              >
                FREELANCER <ArrowRight />
              </Link>

              <Link
                href="/programs/program"
                className="flex items-center justify-between sm:justify-center gap-4 bg-white shadow-[0_4px_4px_rgba(248,177,150,0.10)] p-4 text-[#FC4C03]"
              >
                SPP <ArrowRight />
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full md:w-1/2">
          <img
            src="/assets/programs/program-hero.png"
            alt="Program Hero"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
