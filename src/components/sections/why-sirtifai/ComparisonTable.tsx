import { Check, X } from "lucide-react";

interface DesktopRow {
  feature: string;
  sirtifai: { note?: string; priceRange?: string } | null;
  internshala?: { note?: string; limited?: boolean } | null;
  apna?: { note?: string; limited?: boolean } | null;
  upgrad?: { note?: string; limited?: boolean } | null;
  type?: "pricing";
  upgradText?: string;
  internshalaText?: string;
  apnaText?: string;
  upgradHasX?: boolean;
}

export const ComparisonTable = () => {
  // Desktop detailed rows
  const desktopRows: DesktopRow[] = [
    {
      feature: "Real Paid Projects",
      sirtifai: { note: "Verified + Payroll" },
      internshala: null,
      apna: null,
      upgrad: { note: "Limited" },
    },
    {
      feature: "Job Guarantee / Lifetime Support",
      sirtifai: {},
      internshala: { note: "" },
      apna: { note: "" },
      upgrad: { note: "Limited" },
    },
    {
      feature: "Multi-Industry Tracks (24)",
      sirtifai: {},
      internshala: null,
      apna: null,
      upgrad: { note: "(mostly tech)" },
    },
    {
      feature: "AI-Powered LMS",
      sirtifai: {},
      internshala: null,
      apna: null,
      upgrad: null,
    },
    {
      feature: "NSQF Certification",
      sirtifai: {},
      internshala: null,
      apna: null,
      upgrad: null,
    },
    {
      feature: "Affordable Entry Plans",
      sirtifai: { priceRange: "₹60K" },
      internshala: { note: "Free/Low" },
      apna: { note: "Free" },
      upgrad: { note: "₹60K+" },
    },
  ];

  // Mobile simplified rows (Sirtifai vs Others)
  const mobileRows = [
    "Real Paid Projects",
    "Job Guarantee",
    "24 Industry Tracks",
    "AI-Powered LMS",
    "NSQF Certification",
  ];

  return (
    <section className="bg-[#F5F7F9] py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-3">
            How Sirtifai Is Different
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            See why we stand out from the competition
          </p>
        </div>

        {/* Desktop / Large Table */}
        <div className="hidden md:block">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full border-collapse text-sm md:text-base">
              <thead>
                <tr>
                  <th className="bg-orange-500 text-white text-left px-6 py-4 font-semibold rounded-tl-xl w-[23%]">
                    Feature
                  </th>
                  <th className="bg-[#cf5a2a] text-white px-6 py-4 font-semibold w-[22%]">
                    Sirtifai (PGCAP)
                  </th>
                  <th className="bg-orange-500 text-white px-6 py-4 font-semibold w-[15%]">
                    Internshala
                  </th>
                  <th className="bg-orange-500 text-white px-6 py-4 font-semibold w-[15%]">
                    Apna
                  </th>
                  <th className="bg-orange-500 text-white px-6 py-4 font-semibold rounded-tr-xl w-[25%]">
                    upGrad
                  </th>
                </tr>
              </thead>
              <tbody>
                {desktopRows.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-t border-gray-200 last:border-b-0"
                  >
                    {/* Feature */}
                    <td className="px-6 py-5 align-middle font-medium text-gray-700">
                      <div>{row.feature}</div>
                    </td>
                    {/* Sirtifai column */}
                    <td className="px-6 py-5 align-middle bg-green-50">
                      <div className="flex items-center gap-2 justify-start">
                        <span className="inline-flex w-6 h-6 rounded-md bg-green-600 items-center justify-center shrink-0">
                          <Check className="w-4 h-4 text-white" />
                        </span>
                        <div className="text-sm leading-none space-y-1">
                          {row.sirtifai?.note && (
                            <span className="text-gray-700 font-medium block">
                              {row.sirtifai.note}
                            </span>
                          )}
                          {row.sirtifai?.priceRange && (
                            <span className="text-green-600 font-semibold block">
                              {row.sirtifai.priceRange}
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    {/* Internshala */}
                    <td className="px-6 py-5 align-middle text-center">
                      <div className="flex items-center justify-center min-h-6">
                        {row.internshala?.note ? (
                          <span className="text-gray-600 text-sm leading-none">
                            {row.internshala.note}
                          </span>
                        ) : (
                          <span className="inline-flex w-6 h-6 rounded-md bg-red-100 items-center justify-center">
                            <X className="w-4 h-4 text-red-600" />
                          </span>
                        )}
                      </div>
                    </td>
                    {/* Apna */}
                    <td className="px-6 py-5 align-middle text-center">
                      <div className="flex items-center justify-center min-h-6">
                        {row.apna?.note ? (
                          <span className="text-gray-600 text-sm leading-none">
                            {row.apna.note}
                          </span>
                        ) : (
                          <span className="inline-flex w-6 h-6 rounded-md bg-red-100 items-center justify-center">
                            <X className="w-4 h-4 text-red-600" />
                          </span>
                        )}
                      </div>
                    </td>
                    {/* upGrad */}
                    <td className="px-6 py-5 align-middle text-center">
                      <div className="flex items-center justify-center min-h-6">
                        {row.upgrad?.note ? (
                          <span className="text-gray-600 text-sm leading-none">
                            {row.upgrad.note}
                          </span>
                        ) : (
                          <span className="inline-flex w-6 h-6 rounded-md bg-red-100 items-center justify-center">
                            <X className="w-4 h-4 text-red-600" />
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* subtle shadow bottom rounding fix */}
            <div className="h-2 bg-gradient-to-b from-transparent to-transparent rounded-b-xl" />
          </div>
        </div>

        {/* Mobile simplified table */}
        <div className="md:hidden">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-orange-50">
                  <th className="text-left px-4 py-4 font-medium text-gray-700">Feature</th>
                  <th className="px-4 py-4 font-semibold text-blue-600">Sirtifai</th>
                  <th className="px-4 py-4 font-medium text-gray-700">Others</th>
                </tr>
              </thead>
              <tbody>
                {mobileRows.map((f) => (
                  <tr key={f} className="border-t border-gray-200">
                    <td className="px-4 py-4 text-gray-800 font-medium">
                      {f}
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="inline-flex w-6 h-6 rounded-md bg-green-600 items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="inline-flex w-6 h-6 rounded-md bg-red-100 items-center justify-center">
                        <X className="w-4 h-4 text-red-600" />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
