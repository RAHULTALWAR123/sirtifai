"use client";

import { Accordion, type FAQItem } from "@/components/Accordion";
import Image from "next/image";

interface GeneralFaqProps {
  items: FAQItem[];
}

export const GeneralFaq: React.FC<GeneralFaqProps> = ({ items }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-10 lg:gap-[120px]">
      <div className="lg:block hidden">
        <Accordion items={items} />
      </div>

      <div className="w-full lg:w-[40%] flex flex-row lg:flex-col justify-start items-start gap-[50px] lg:gap-[116px]">
        {/* <Image src="/assets/vector.svg" alt="Vector" width={500} height={500}  /> */}
        <Image
          src="/assets/vector.svg"
          alt="Vector"
          width={350}
          height={350}
          className="w-[180px] h-auto sm:w-[250px] md:w-[350px] lg:w-[500px]"
          priority
        />

        {/* <div className="w-full flex flex-col justify-start items-start gap-4"> */}
          {/* <h2 className="leading-[150%] font-inter text-[1.25rem] font-semibold">
            You can ask anything you want to know Feedback
          </h2> */}

          {/* <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col justify-start items-start gap-[5px][ w-full"
          >
            <label
              className="text-[#FE7743] text-[1rem] leading-[150%] font-inter font-semibold"
              htmlFor=""
            ></label>
            <input
              className="w-full py-2 px-2.5 border border-[#FE7743] rounded-full placeholder:text-black placeholder:font-semibold"
              placeholder="Enter Here"
              type="text"
              name=""
              id=""
            />
          </form> */}
        {/* </div> */}
      </div>
      <div className="lg:hidden block">
        <Accordion items={items} />
      </div>
    </div>
  );
};
