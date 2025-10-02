import React from "react";

type Program = {
  id: string;
  name: string;
  description: string;
  category: string;
  type: string;
  monthlyOptions?: string; // ← make optional
  sacCode: string;
  priceEnvVar: string;
  price: number;
  features: string[];
};

type Products = {
  [category: string]: {
    [key: string]: Program;
  };
};

type ProgramSelectionProps = {
  programIds: string[];
  products: Products;
  category: string; // Added category prop
  selectedProgram: string;
  setSelectedProgram: (id: string) => void;
  selectedDurations: { [key: string]: number };
  setSelectedDurations: React.Dispatch<React.SetStateAction<{ [key: string]: number }>>;
};

const ProgramSelection: React.FC<ProgramSelectionProps> = ({
  programIds,
  products,
  category, // Added category prop
  selectedProgram,
  setSelectedProgram,
  selectedDurations,
  setSelectedDurations,
}) => {
  return (
    <div className="space-y-4">
      {/* Desktop Table View */}
      <div className="hidden lg:block">
        {/* Table header */}
        <div className="grid grid-cols-5 gap-6 text-sm font-semibold text-gray-700 pb-2 border-b border-gray-200 px-5">
          <div>Plan Name</div>
          {/* <div>Duration</div> */}
          <div>Price (₹)</div>
          <div>Key Features</div>
          <div className="text-center">Select</div>
        </div>

        {programIds.map((programId) => {
          const program = products[category]?.[programId]; // Dynamic category access
          console.log("Program Details:", program);
          if (!program) return null;

          const isMonthly = program.type === "monthly";
          const duration = selectedDurations[programId] || (isMonthly ? 6 : 3);
          const price = isMonthly ? program.price * duration : program.price;

          const durationOptions = isMonthly
            ? (() => {
                if (!program.monthlyOptions) return [12];
                const [min, max] = program.monthlyOptions.split("-").map(Number);
                return Array.from({ length: max - min + 1 }, (_, i) => min + i);
              })()
            : [12];

          return (
            <div
              key={programId}
              className={`grid grid-cols-5 gap-6 text-sm py-5 px-5 rounded-lg border transition-all mt-2 ${
                selectedProgram === programId
                  ? "border-orange-500 bg-orange-50 shadow-sm"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              {/* Name */}
              <div className="flex flex-col justify-center">
                <div className="font-semibold text-gray-900">{program.name}</div>
                <div className="text-xs text-gray-500 mt-1">{program.description}</div>
              </div>

              {/* Duration dropdown */}
              {/* <div className="flex items-center">
                <select
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white"
                  value={duration}
                  onChange={(e) =>
                    setSelectedDurations((prev) => ({
                      ...prev,
                      [programId]: parseInt(e.target.value),
                    }))
                  }
                >
                  {durationOptions.map((month) => (
                    <option key={month} value={month}>
                      {month} Month{month > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div> */}

              {/* Price */}
              <div className="flex items-center font-bold text-gray-900">
                ₹60,000

              </div>

              {/* Features */}
              <div className="flex items-start">
                <ul className="space-y-1 text-gray-600">
                  {program.features.slice(0, 10).map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-orange-500 mr-2 text-xs mt-[6px]">●</span>
                      <span className="text-xs leading-snug">{feature}</span>
                    </li>
                  ))}
                  {/* {program.features.length > 4 && (
                    <li className="text-xs text-gray-500 ml-4">
                      +{program.features.length - 4} more
                    </li>
                  )} */}
                </ul>
              </div>

              {/* Radio button */}
              <div className="flex items-center justify-center">
                <div 
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all ${
                    selectedProgram === programId 
                      ? 'border-orange-500 bg-orange-500' 
                      : 'border-gray-300 hover:border-orange-400'
                  }`}
                  onClick={() => setSelectedProgram(programId)}
                >
                  {selectedProgram === programId && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <input
                  type="radio"
                  name="program"
                  checked={selectedProgram === programId}
                  onChange={() => setSelectedProgram(programId)}
                  className="sr-only"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Card View */}
      <div className="lg:hidden space-y-4">
        {programIds.map((programId) => {
          const program = products[category]?.[programId]; // Dynamic category access
          if (!program) return null;

          const isMonthly = program.type === "monthly";
          const duration = selectedDurations[programId] || (isMonthly ? 6 : 3);
          const price = isMonthly ? program.price * duration : program.price;

          const durationOptions = isMonthly
            ? (() => {
                if (!program.monthlyOptions) return [3, 6];
                const [min, max] = program.monthlyOptions.split("-").map(Number);
                return Array.from({ length: max - min + 1 }, (_, i) => min + i);
              })()
            : [3, 6];

          return (
            <div
              key={programId}
              className={`p-4 rounded-lg border transition-all ${
                selectedProgram === programId
                  ? "border-orange-500 bg-orange-50 shadow-sm"
                  : "border-gray-200"
              }`}
            >
              {/* Mobile Header with Radio */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 text-base">{program.name}</div>
                  <div className="text-sm text-gray-500 mt-1">{program.description}</div>
                </div>
                <div 
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all ${
                    selectedProgram === programId 
                      ? 'border-orange-500 bg-orange-500' 
                      : 'border-gray-300 hover:border-orange-400'
                  }`}
                  onClick={() => setSelectedProgram(programId)}
                >
                  {selectedProgram === programId && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <input
                  type="radio"
                  name="program"
                  checked={selectedProgram === programId}
                  onChange={() => setSelectedProgram(programId)}
                  className="sr-only ml-3 mt-1"
                />
              </div>

              {/* Mobile Duration and Price Row */}
              <div className="grid grid-cols-1 gap-5 mb-4">
                <div>
                  {/* <label className="block text-sm font-medium text-gray-700 mb-2">Duration</label> */}
                  <select
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white"
                    value={duration}
                    onChange={(e) =>
                      setSelectedDurations((prev) => ({
                        ...prev,
                        [programId]: parseInt(e.target.value),
                      }))
                    }
                  >
                    {durationOptions.map((month) => (
                      <option key={month} value={month}>
                        {month} Month{month > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                  <div className="font-bold text-gray-900 text-lg py-2">
                    ₹{price.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Mobile Features */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Key Features</label>
                <ul className="space-y-2 text-gray-600">
                  {program.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-orange-500 mr-2 text-sm mt-[2px]">●</span>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                  {program.features.length > 4 && (
                    <li className="text-sm text-gray-500 ml-6">
                      +{program.features.length - 4} more features
                    </li>
                  )}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgramSelection;