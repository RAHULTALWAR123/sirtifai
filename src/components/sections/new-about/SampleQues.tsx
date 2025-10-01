import React from "react";
import { CheckCircle2 } from "lucide-react";

function SampleQues() {
  return (
    <div className="mt-10 bg-[url('/ss1.jpg')] bg-cover bg-center p-4 sm:p-10">
      <h2 className="relative text-xl sm:text-5xl font-semibold text-gray-800 text-center sm:text-start mb-8 drop-shadow-lg sm:left-40">
        Sample Questions (Short)
      </h2>

      <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 border-l-4 border-[#FF6B2C] sm:w-4xl w-full space-y-6">
        {/* Domain */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2 text-center sm:text-left">
            Domain (MCQ)
          </h3>
          <div className="flex items-start gap-2 text-gray-700">
            <CheckCircle2 className="w-5 h-5 text-[#FF6B2C] mt-1" />
            <p className="text-sm sm:text-base">
              Which deliverable comes first in a client project? <br />
              A) Final design &nbsp; B) Scope document &nbsp; C) Marketing plan &nbsp; D) QA report
            </p>
          </div>
        </div>

        {/* Practical */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2 text-center sm:text-left">
            Practical (short)
          </h3>
          <div className="flex items-start gap-2 text-gray-700">
            <CheckCircle2 className="w-5 h-5 text-[#FF6B2C] mt-1" />
            <p className="text-sm sm:text-base">
              Client doubles workload mid-project without extra pay. Write 3–4 lines on how you’d respond.
            </p>
          </div>
        </div>

        {/* Aptitude */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2 text-center sm:text-left">
            Aptitude (MCQ)
          </h3>
          <div className="flex items-start gap-2 text-gray-700">
            <CheckCircle2 className="w-5 h-5 text-[#FF6B2C] mt-1" />
            <p className="text-sm sm:text-base">
              If 5 freelancers finish in 20 days, how long for 10 freelancers? → 10 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SampleQues;


