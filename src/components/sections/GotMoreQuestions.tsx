import { IoIosArrowForward } from "react-icons/io"

export const GotMoreQuestions = () => {
    return (
        <section className="w-full bg-[#FE7743] px-4 sm:px-6 lg:px-10 py-6 lg:py-0 flex flex-col lg:flex-row justify-center lg:justify-between items-center">
            <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
                <div className="w-full lg:w-[60%] flex flex-col justify-start items-start gap-2.5 text-center lg:text-left">
                    <h1 className="text-white font-inter text-[1.5rem] sm:text-[1.75rem] font-bold leading-[142%]">
                        Got More Questions? Let&apos;s Talk.
                    </h1>
                    <p className="text-white font-inter text-[1rem] sm:text-[1.125rem] leading-[142%] font-normal">
                        Our advisors will help you choose the right plan — domestic or international — based on your  career goals.
                    </p>
                </div>
                {/* <button className="mt-2 lg:mt-0 py-4 sm:py-5 pl-6 sm:pl-8 pr-4 sm:pr-5 flex justify-center items-center gap-2.5 bg-white rounded-[42px] text-[#FE7743] font-inter font-semibold text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] leading-[100%]">
                    <p>Book free career call</p>
                    <IoIosArrowForward/>
                </button> */}
            </div>
        </section>
    )
}