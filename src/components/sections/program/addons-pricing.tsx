const AddOnsPricing = () => {
  return (
    <section className="min-h-screen w-screen flex flex-col justify-center items-center">
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-[30px] font-open-sans md:text-[60px] font-[600] text-black capitalize text-center">
          Add-On Services & Pricing
        </h1>
        <p className="text-[#4B5563] font-inter text-xs md:text-base max-w-[538px] text-center mt-4">
          Boost your SPP Experience with professional services that support real work, payroll,taxes, and legal
          compliance—perfect for serious freelancers, global aspirants, and career-track professionals.
        </p>
      </div>

      {/* cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-4 md:gap-8 sm:grid-cols-3 md:grid-cols-3 mt-8 sm:mt-12 md:mt-16">
        {/* card 1 */}
        <div className="w-full rounded-[12px] shadow-[0 4px 6px 0 rgba(0, 0, 0, 0.10), 0 10px 15px 0 rgba(0, 0, 0, 0.10)] bg-white border border-[#E5E7EB] flex flex-col">
          {/* Header */}
          <div className="bg-[#AB735D] px-4 py-2 rounded-t-[12px]">
            <h3 className="text-white text-lg font-[700] font-inter">Payroll Services (via Deel™)</h3>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4 flex-grow">
            <p className="text-[#4B5563] text-base mt-4 font-inter">
              Get paid like a professional with verified income, payslips, and statutory benefits.
            </p>

            <div>
              <h4 className="text-[#1F2937] text-base font-[600] font-inter">Payroll + EPF/ESI</h4>
              <p className="text-[#4B5563] text-sm font-inter">
                Full compliance with Indias PF/ESI structure verified salary slips
              </p>
            </div>

            <h2 className="text-[#AB735D] font-[700] font-inter">$400</h2>

            <hr className="w-full bg-[#E5E7EB]" />

            <div>
              <h4 className="text-[#1F2937] text-base font-[600] font-inter">Global Freelance Payroll</h4>
              <p className="text-[#4B5563] text-sm font-inter">
                International structure for US/UK/Canada clients, tax-ready payout
              </p>
            </div>

            <h2 className="text-[#AB735D] font-[700] font-inter">$500</h2>
          </div>

          {/* Button at bottom */}
          <div className="p-4">
            <button className="w-full text-white font-inter bg-[#AB735D] rounded-full py-2 px-3">Buy Now</button>
          </div>
        </div>

        {/* card 2 */}
        <div className="w-full rounded-[12px] shadow-[0 4px 6px 0 rgba(0, 0, 0, 0.10), 0 10px 15px 0 rgba(0, 0, 0, 0.10)] bg-white border border-[#E5E7EB] flex flex-col">
          {/* Header */}
          <div className="bg-[#FE7743] px-4 py-2 rounded-t-[12px]">
            <h3 className="text-white text-lg font-[700] font-inter">CA Services</h3>
            <p className="text-base font-[400] text-white/80 font-inter">Chartered Accountant Support</p>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4 flex-grow">
            <p className="text-[#4B5563] text-base mt-4 font-inter">
              Manage your income, taxes, and filings with expert CA assistance.
            </p>

            <div>
              <h4 className="text-[#1F2937] text-base font-[600] font-inter">CA Basic</h4>
              <p className="text-[#4B5563] text-sm font-inter">Income Tax Return filing + basic invoicing</p>
            </div>
            <h2 className="text-[#FE7743] font-[700] font-inter">$24</h2>

            <hr className="w-full bg-[#E5E7EB]" />

            <div>
              <h4 className="text-[#1F2937] text-base font-[600] font-inter">CA Pro</h4>
              <p className="text-[#4B5563] text-sm font-inter">GST, advance tax, bank reconciliation, income mapping</p>
            </div>
            <h2 className="text-[#FE7743] font-[700] font-inter">$48</h2>

            <hr className="w-full bg-[#E5E7EB]" />

            <div>
              <h4 className="text-[#1F2937] text-base font-[600] font-inter">CA Elite</h4>
              <p className="text-[#4B5563] text-sm font-inter">
                Dedicated CA, startup compliance, international remittance guidance
              </p>
            </div>
            <h2 className="text-[#FE7743] font-[700] font-inter">$96</h2>
          </div>

          {/* Button at bottom */}
          <div className="p-4">
            <button className="w-full text-white bg-[#FE7743] rounded-full py-2 font-inter px-3">Buy Now</button>
          </div>
        </div>

        {/* card 3 */}
        <div className="w-full rounded-[12px] shadow-[0_4px_6px_0_rgba(0,0,0,0.10),0_10px_15px_0_rgba(0,0,0,0.10)] bg-white border border-[#E5E7EB] flex flex-col">
          {/* Header */}
          <div className="bg-[#FC4C03] px-4 py-2 rounded-t-[12px]">
            <h3 className="text-white text-lg font-[700] font-inter">Legal Services</h3>
            <p className="text-base font-inter font-[400] text-white/80">Contract & IP Support</p>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4 flex-grow">
            <p className="text-[#4B5563] text-base mt-4 font-inter">
              Stay legally protected while working with clients—India or abroad.
            </p>

            <div>
              <h4 className="text-[#1F2937] text-base font-[600] font-inter">Legal Starter</h4>
              <p className="text-[#4B5563] text-sm font-inter">NDA + Service Agreement Templates</p>
            </div>
            <h2 className="text-[#FC4C03] font-[700] font-inter">
              $12<sub>one time</sub>
            </h2>

            <hr className="w-full bg-[#E5E7EB]" />

            <div>
              <h4 className="text-[#1F2937] text-base font-[600] font-inter">Legal Freelancer Pro</h4>
              <p className="text-[#4B5563] text-sm font-inter">5 legal drafts, IP rights, basic dispute advisory</p>
            </div>
            <h2 className="text-[#FC4C03] font-[700] font-inter">$60/month</h2>

            <hr className="w-full bg-[#E5E7EB]" />

            <div>
              <h4 className="text-[#1F2937] text-base font-[600] font-inter">Legal Global Elite</h4>
              <p className="text-[#4B5563] text-sm font-inter">
                Unlimited contracts, legal notices, client dispute handling
              </p>
            </div>
            <h2 className="text-[#FC4C03] font-[700] font-inter">$120/month</h2>
          </div>

          {/* Button at bottom */}
          <div className="p-4">
            <button className="w-full text-white bg-[#FC4C03] rounded-full py-2 font-inter px-3">Buy Now</button>
          </div>
        </div>
      </div>

      {/* combo pack */}
      <div
        className="max-w-7xl mx-auto w-full mt-16 shadow-[0_4px_6px_0_rgba(0,0,0,0.10),_0_10px_15px_0_rgba(0,0,0,0.10)] border border-[#E5E7EB] rounded-[12px] px-4 py-4 md:px-8 md:py-8 flex items-center justify-between"
        style={{
          background: "linear-gradient(90deg, #FE7743 0%, #DD8A6A 100%)",
        }}
      >
        <div>
          <h1 className="text-2xl font-bold text-white font-inter">Freelancer Shield Combo Pack</h1>
          <p className="text-sm text-white/70 font-normal font-inter">
            Complete Protection for Serious Freelancers & Remote Workers
          </p>

          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clipPath="url(#clip0_406_6699)">
                  <path
                    d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_406_6699">
                    <path d="M0 0H16V16H0V0Z" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p className="text-sm font-[400] text-white font-inter">Payroll + EPF/ESI</p>
            </li>
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clipPath="url(#clip0_406_6699)">
                  <path
                    d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_406_6699">
                    <path d="M0 0H16V16H0V0Z" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p className="text-sm font-[400] text-white font-inter">CA Pro Services</p>
            </li>
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clipPath="url(#clip0_406_6699)">
                  <path
                    d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM11.5312 6.53125L7.53125 10.5312C7.2375 10.825 6.7625 10.825 6.47188 10.5312L4.47188 8.53125C4.17813 8.2375 4.17813 7.7625 4.47188 7.47188C4.76562 7.18125 5.24062 7.17813 5.53125 7.47188L7 8.94063L10.4688 5.46875C10.7625 5.175 11.2375 5.175 11.5281 5.46875C11.8187 5.7625 11.8219 6.2375 11.5281 6.52812L11.5312 6.53125Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_406_6699">
                    <path d="M0 0H16V16H0V0Z" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p className="text-sm font-[400] text-white font-inter">Legal Freelancer Pro</p>
            </li>
          </ul>
        </div>
        <div className="flex items-end justify-end flex-col">
          <button className=" bg-white text-[#FE7743] font-bold rounded-full py-2 px-3 font-inter">$480/month</button>
          <p className="text-sm text-white/70 font-normal mt-2 font-inter">
            Save $100/month compared to individual plans
          </p>
        </div>
      </div>
    </section>
  )
}

export default AddOnsPricing
