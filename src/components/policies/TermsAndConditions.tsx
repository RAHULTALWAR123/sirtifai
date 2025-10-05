/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState } from 'react';

function TermsAndConditions() {
  const [revealedSections, setRevealedSections] = useState<number[]>([0, 1, 2, 3]); // Start with first 4 sections visible for better UX

  const contentSections = [
    {
      id: 0,
      title: "1. Introduction",
      content: (
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">1.1 Purpose of the Agreement</h5>
            <p className="text-gray-700 leading-relaxed">
              This Terms & Conditions Agreement ("Agreement") establishes the legally binding relationship 
              between you ("Learner," "User," or "Client") and Sirtifai EdTech Pvt. Ltd. (India) and Sirtifai 
              Inc. (USA) (collectively referred to as "Sirtifai," "we," "our," or "us").
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              The purpose of this Agreement is to:
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
              <li>Define the rights, responsibilities, and obligations of all parties involved in the use of Sirtifai's programs, platforms, and services, including Skill Practice Progress (SPP) in all its editions (Domestic Fresher, Domestic Freelancer, and International), Sirtifai Empowerment Rise (SER), and any associated services.</li>
              <li>Ensure transparency in program deliverables, payment terms, benefits, and limitations.</li>
              <li>Protect the intellectual property, confidentiality, and data privacy of all parties.</li>
              <li>Provide clarity on our role as an education, project facilitation, and career advancement platform — not as a direct employer, unless specifically stated in writing.</li>
              <li>Establish the governing laws, dispute resolution mechanisms, and jurisdiction applicable based on your country of enrollment (India or USA).</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-2">
              By enrolling in any Sirtifai program or using our website/platforms, you acknowledge that you
              have read, understood, and agreed to be bound by this Agreement.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "1.2 Scope of Services Covered",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            This Agreement applies to all services, programs, and platforms operated by Sirtifai EdTech
            Pvt. Ltd. (India) and Sirtifai Inc. (USA), including but not limited to:
          </p>
          
          <div className="space-y-4 mt-3">
            <div>
              <h6 className="font-medium text-gray-800 mb-2">1. Educational & Training Programs</h6>
              <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
                <li>Skill Practice Progress (SPP) – Domestic Fresher, Domestic Freelancer, and International editions.</li>
                <li>Sirtifai Empowerment Rise (SER) – Career acceleration and leadership development programs.</li>
                <li>Industry-specific learning tracks across 24 sectors with AI-powered LMS (LearnX) access.</li>
              </ul>
            </div>

            <div>
              <h6 className="font-medium text-gray-800 mb-2">2. Project Facilitation & Work Experience</h6>
              <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
                <li>Verified, paid real-world projects with payroll processing via DEEL™ or other approved partners.</li>
                <li>Mentor-backed assignments and portfolio building.</li>
                <li>EPF/ESI (India) and equivalent benefits where applicable in the USA.</li>
              </ul>
            </div>

            <div>
              <h6 className="font-medium text-gray-800 mb-2">3. Career Support Services</h6>
              <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
                <li>Lifetime placement assistance under the Progress Phase.</li>
                <li>Job-switch and career re-entry support.</li>
                <li>Global career mapping and visa documentation guidance (for International SPP).</li>
              </ul>
            </div>

            <div>
              <h6 className="font-medium text-gray-800 mb-2">4. Digital Platforms & Tools</h6>
              <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
                <li>Access to Sirtifai's proprietary learning management systems, AI resume builders, career analytics tools, and certification verification systems.</li>
                <li>Participation in Sirtifai community channels, webinars, and networking events.</li>
              </ul>
            </div>

            <div>
              <h6 className="font-medium text-gray-800 mb-2">5. Additional Services & Add-ons (if purchased separately)</h6>
              <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
                <li>Payroll & compliance handling.</li>
                <li>CA/legal services for freelancers and self-employed learners.</li>
                <li>International relocation guidance in collaboration with verified partners.</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mt-3">
            This scope covers all current and future services provided directly by Sirtifai or through its
            authorized representatives, partners, and affiliates in both India and the USA, unless explicitly
            stated otherwise in a separate agreement.
          </p>
        </div>
      )
    },
    {
      id: 2,
      title: "2. Programs (SPP, SER, etc.)",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            For the purposes of this Agreement, the following terms describe the programs and services 
            offered under the Sirtifai brand:
          </p>
          
          <div className="space-y-4 mt-3">
            <div>
              <h6 className="font-medium text-gray-800 mb-2">a) Skill Practice Progress (SPP)</h6>
              <p className="text-gray-700 leading-relaxed">
                A structured, multi-phase career development model consisting of:
              </p>
              <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
                <li><strong>Skill Phase</strong> – Learning job-ready skills through AI-powered LMS (LearnX), live mentor sessions, and certified coursework.</li>
                <li><strong>Practice Phase</strong> – Execution of real-world, paid projects with verified clients, including payroll processing via DEEL™ and benefits such as EPF/ESI (India) or equivalent (USA).</li>
                <li><strong>Progress Phase</strong> – Lifetime career assistance, including job-switch and re-entry support, global career mapping, and visa documentation guidance (International edition only).</li>
              </ul>
              
              <p className="text-gray-700 leading-relaxed mt-3">
                SPP is delivered in multiple editions:
              </p>
              <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
                <li><strong>SPP – Domestic Fresher:</strong> Designed for students, graduates, and career starters in India seeking their first professional role.</li>
                <li><strong>SPP – Domestic Freelancer (Sirtifai Freelancer):</strong> Tailored for Indian freelancers and career restarters, offering verified projects, stable income, and payroll benefits.</li>
                <li><strong>SPP – International (Sirtifai International):</strong> Designed for Indian and international learners aiming for overseas job placement, with employer-led visa sponsorship guidance and global career preparation.</li>
              </ul>
            </div>

            <div>
              <h6 className="font-medium text-gray-800 mb-2">b) Sirtifai Empowerment Rise (SER)</h6>
              <p className="text-gray-700 leading-relaxed">
                A high-tier, placement-linked professional development program targeting mid-level 
                professionals, leadership aspirants, and domain specialists. Includes advanced skill mastery, 
                industry-assigned projects, personalized mentorship, recruiter access, and guaranteed interview 
                support.
              </p>
            </div>

            <div>
              <h6 className="font-medium text-gray-800 mb-2">c) Sirtifai Freelancer</h6>
              <p className="text-gray-700 leading-relaxed">
                A sub-brand of SPP Domestic Freelancer, this program focuses exclusively on verified freelance 
                projects with:
              </p>
              <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
                <li>One-time program fees and immediate earning opportunities.</li>
                <li>Access to client networks, legal support, and payroll compliance.</li>
                <li>Earnings potential up to ₹35,000/month (India) or equivalent in USD for U.S.-based freelancers.</li>
              </ul>
            </div>

            <div>
              <h6 className="font-medium text-gray-800 mb-2">d) Sirtifai International</h6>
              <p className="text-gray-700 leading-relaxed">
                The global career accelerator under SPP, designed to help learners secure high-paying 
                overseas roles in countries such as the USA, Canada, and Germany.
              </p>
              <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
                <li>Includes globally recognized certifications (NSQF/NSF), AI-driven resume optimization, and employer-specific profile building.</li>
                <li>Employer visa sponsorship facilitation (SPP Pro & Elite tiers).</li>
                <li>18-month structured path to placement abroad with continued lifetime career support.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "2.3 Learner, User, Client, Partner",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            For the purposes of this Agreement:
          </p>
          
          <div className="space-y-4 mt-3">
            <div>
              <h6 className="font-medium text-gray-800 mb-2">a) Learner</h6>
              <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
                <li>An individual enrolled in any Sirtifai program (SPP, SER, Sirtifai Freelancer, Sirtifai International, or other services).</li>
                <li>May be a student, jobseeker, freelancer, career switcher, or professional seeking skills, projects, or career opportunities.</li>
                <li>Learners are bound by all program rules, payment obligations, and conduct requirements outlined in this Agreement.</li>
              </ul>
            </div>

            <div>
              <h6 className="font-medium text-gray-800 mb-2">b) User</h6>
              <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
                <li>Any person accessing Sirtifai's website, platforms, LMS, mobile apps, or services, regardless of whether they are enrolled in a program.</li>
                <li>Includes prospective learners, visitors, registered account holders, and participants in free resources, trials, or events.</li>
                <li>Users agree to abide by Sirtifai's Terms & Conditions, Privacy Policy, and any applicable platform-specific guidelines.</li>
              </ul>
            </div>

            <div>
              <h6 className="font-medium text-gray-800 mb-2">c) Client</h6>
              <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
                <li>A company, organization, or individual providing real-world projects, internships, freelance assignments, or job placements to Sirtifai learners.</li>
                <li>Clients may be domestic (India-based), international, or remote employers engaging with Sirtifai through its verified client network.</li>
                <li>Clients agree to provide genuine, verifiable project work and to respect contractual obligations with Sirtifai and its learners.</li>
              </ul>
            </div>

            <div>
              <h6 className="font-medium text-gray-800 mb-2">d) Partner</h6>
              <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
                <li>Any entity or individual officially collaborating with Sirtifai for program delivery, project facilitation, certification, payroll services, mentorship, or placement support.</li>
                <li>Includes academic institutions, industry associations, technology providers, payroll processors (such as DEEL™), visa consultants, and government skill initiatives.</li>
                <li>Partners operate under separate partnership agreements but are expected to align with Sirtifai's service quality and compliance standards.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "2.4 Plans & Tiers",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Sirtifai offers multiple Plans & Tiers within its programs, each with specific features, benefits, 
            and pricing. The chosen plan determines the scope of services a learner will receive.
          </p>
          
          <div className="space-y-4 mt-3">
            <div>
              <h6 className="font-medium text-gray-800 mb-2">a) Plan Categories by Program</h6>
              
              <div className="space-y-3">
                <div>
                  <h6 className="font-medium text-gray-700 mb-1">1. SPP – Domestic Fresher Edition</h6>
                  <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
                    <li>Elite: Entry-level domain learning, assignments, Simulations, career analytics, capstone projects, NSQF certification.</li>
                  </ul>
                </div>

                <div>
                  <h6 className="font-medium text-gray-700 mb-1">2. SPP – Domestic Freelancer (Sirtifai Freelancer)</h6>
                  <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
                    <li>Basic: One paid project, mentor feedback, payroll processing.</li>
                    <li>Pro: Multiple projects, team collaboration, EPF benefits.</li>
                    <li>Elite: Premium projects, bonuses, client access, legal benefits.</li>
                  </ul>
                </div>

                <div>
                  <h6 className="font-medium text-gray-700 mb-1">3. SPP – International (Sirtifai International)</h6>
                  <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
                    <li>Basic: Foundational training, recorded modules, global certification.</li>
                    <li>Pro: Live sessions, capstone projects, AI resume optimization, career mapping.</li>
                    <li>Elite: Industry simulations, global career analytics, employer-led visa sponsorship guidance.</li>
                  </ul>
                </div>

                <div>
                  <h6 className="font-medium text-gray-700 mb-1">4. SER – Sirtifai Empowerment Rise</h6>
                  <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
                    <li>Starter: Core professional skill enhancement.</li>
                    <li>Industry+: Domain specialization, industry-assigned projects.</li>
                    <li>Career Max: Leadership track, personalized career coaching, exclusive recruiter access.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h6 className="font-medium text-gray-800 mb-2">b) Plan Duration & Payment Model</h6>
              <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
                <li>Plans may be subscription-based (monthly) or one-time payment models depending on the program edition.</li>
                <li>Duration varies:</li>
                <ul className="list-disc list-inside ml-6 space-y-1 text-gray-600">
                  <li>Skill Phase: Typically 6 months.</li>
                  <li>Practice Phase: Typically 3 months.</li>
                  <li>Progress Phase: Lifetime career support (with active engagement required).</li>
                </ul>
              </ul>
            </div>

            <div>
              <h6 className="font-medium text-gray-800 mb-2">c) Upgrade & Downgrade Policy</h6>
              <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
                <li>Learners may upgrade to a higher plan tier by paying the difference in fees, subject to Sirtifai's approval.</li>
                <li>Downgrades are not permitted once services of a higher tier have been accessed.</li>
              </ul>
            </div>

            <div>
              <h6 className="font-medium text-gray-800 mb-2">d) Feature Variations by Tier</h6>
              <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
                <li>Higher tiers include all benefits of lower tiers plus additional features.</li>
                <li>Specific inclusions (projects, certifications, mentorship hours, income range) are detailed in the Program Brochure and may be updated periodically.</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "3. Eligibility",
      content: (
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">3.1 Age & ID Requirements (India)</h5>
            <p className="text-gray-700 leading-relaxed">
              To enroll in any Sirtifai program as an India-based learner, the following criteria apply:
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
              <li><strong>Minimum Age Requirement:</strong> Learners must be 18 years or older at the time of enrollment. Applicants aged 16–17 years may be admitted only with written parental or legal guardian consent and must meet program-specific prerequisites.</li>
              <li><strong>Identification Requirements:</strong> A valid, government-issued photo ID is mandatory for enrollment. Accepted IDs include Aadhaar Card, Passport, PAN Card, Voter ID, and Driving License.</li>
              <li><strong>Verification Process:</strong> ID documents must be submitted through Sirtifai's secure verification system before program access is granted.</li>
              <li><strong>Special Cases:</strong> Learners applying for SPP International from India must also provide a valid passport and proof of prior international travel or visa history for eligibility screening.</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800 mb-2">3.2 Age & ID Requirements (USA)</h5>
            <p className="text-gray-700 leading-relaxed">
              To enroll in any Sirtifai program as a USA-based learner, the following criteria apply:
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
              <li><strong>Minimum Age Requirement:</strong> Learners must be 18 years or older at the time of enrollment. Applicants aged 16–17 years may be admitted only with written parental or legal guardian consent.</li>
              <li><strong>Identification Requirements:</strong> A valid, government-issued photo ID is mandatory. Accepted IDs include U.S. Passport, State-Issued Driver's License, U.S. Military ID, Permanent Resident Card, and Employment Authorization Document.</li>
              <li><strong>Verification Process:</strong> ID documents must be submitted through Sirtifai's secure verification system prior to program access.</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800 mb-2">3.3 International Program Eligibility</h5>
            <p className="text-gray-700 leading-relaxed">
              To participate in Sirtifai International or any program involving overseas job placement, 
              relocation, or employer-led visa sponsorship, learners must meet the following criteria:
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
              <li><strong>General Eligibility:</strong> Must be at least 18 years of age and have completed at least a recognized diploma, bachelor's degree, or equivalent professional qualification.</li>
              <li><strong>Identity & Documentation:</strong> A valid passport with at least 18 months of remaining validity, government-issued secondary ID, and recent passport-size photographs.</li>
              <li><strong>Skill & Language Requirements:</strong> Completion of Skill Phase within Sirtifai programs or equivalent qualifications, proficiency in English and target country language where required.</li>
              <li><strong>Visa & Work Authorization:</strong> Must meet eligibility requirements for work visa or employment sponsorship in the target country.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "4. Program Structure",
      content: (
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">4.1 Skill Phase</h5>
            <p className="text-gray-700 leading-relaxed">
              The Skill Phase is the foundational stage of Sirtifai's Skill Practice Progress (SPP) and other 
              eligible programs, designed to equip learners with job-ready knowledge, tools, and certifications 
              before entering paid project work.
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
              <li><strong>Purpose:</strong> To provide structured, industry-aligned training in the learner's chosen domain and prepare learners for real-world applications.</li>
              <li><strong>Delivery Method:</strong> Conducted via LearnX, Sirtifai's AI-powered Learning Management System (LMS), including recorded modules, live instructor-led sessions, and interactive assignments.</li>
              <li><strong>Duration:</strong> Standard duration is 6 months, but may vary depending on program edition or learner pace.</li>
              <li><strong>Content & Curriculum:</strong> Domain-specific modules based on industry requirements across 24 sectors, access to AI-driven tools, and capstone projects.</li>
              <li><strong>Certification:</strong> Learners receive NSQF/NSF-recognized certifications with unique verification QR codes upon successful completion.</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800 mb-2">4.2 Practice Phase</h5>
            <p className="text-gray-700 leading-relaxed">
              The Practice Phase is the second stage of Sirtifai's Skill Practice Progress (SPP) model, designed 
              to provide paid, real-world project experience while learners continue skill enhancement under 
              professional guidance.
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
              <li><strong>Purpose:</strong> To enable learners to apply knowledge and skills acquired in the Skill Phase to actual industry assignments and build a verified professional portfolio.</li>
              <li><strong>Work Structure:</strong> Projects are sourced from verified domestic and international clients within Sirtifai's network, with individual or team-based assignments.</li>
              <li><strong>Duration:</strong> Standard duration is 3 months, but may vary based on project timelines and learner performance.</li>
              <li><strong>Earnings & Payroll:</strong> Learners are paid monthly during this phase within the advertised income range per tier, with all payments processed through approved payroll partners.</li>
              <li><strong>Mentorship & Feedback:</strong> Each project includes mentor review sessions to ensure quality and guide improvements.</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800 mb-2">4.3 Progress Phase</h5>
            <p className="text-gray-700 leading-relaxed">
              The Progress Phase is the final stage of Sirtifai's Skill Practice Progress (SPP) model, designed 
              to provide lifetime career assistance, job-switch support, and global placement opportunities for 
              eligible learners.
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
              <li><strong>Purpose:</strong> To transition learners from project-based work into long-term employment or higher-paying career paths.</li>
              <li><strong>Scope of Services:</strong> Placement assistance, career switch support, global career mapping (Elite tier), interview preparation, and resume updates.</li>
              <li><strong>Duration:</strong> This phase provides lifetime access to eligible services for learners who have successfully completed the Skill and Practice phases.</li>
              <li><strong>Global & Visa Support:</strong> Sirtifai may connect learners with international employers who provide visa sponsorship, though visa processing is handled by the employer.</li>
              <li><strong>Limitations:</strong> Sirtifai does not guarantee specific salary levels, job titles, or employer selection.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "5. Enrollment & Onboarding",
      content: (
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">5.1 Registration Process</h5>
            <p className="text-gray-700 leading-relaxed">
              To enroll in any Sirtifai program, learners must complete the official registration process as 
              outlined below:
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
              <li><strong>Application Submission:</strong> Prospective learners must complete the online application form available on Sirtifai's official website or authorized enrollment portal.</li>
              <li><strong>Program & Plan Selection:</strong> Applicants must choose their preferred program edition and plan tier (Basic, Pro, Elite).</li>
              <li><strong>Identity Verification (KYC):</strong> Submission of valid government-issued identification as per the Eligibility section.</li>
              <li><strong>Document Submission:</strong> Academic transcripts, work experience certificates, passport/visa documents (for International programs).</li>
              <li><strong>Payment of Fees:</strong> The applicable program fee must be paid in full or via approved EMI options before enrollment confirmation.</li>
              <li><strong>Enrollment Confirmation:</strong> Upon successful payment and verification, learners receive access credentials and onboarding instructions.</li>
              <li><strong>Agreement to Terms:</strong> By completing registration, learners explicitly agree to be bound by Sirtifai's Terms & Conditions.</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800 mb-2">5.2 Verification & Documentation</h5>
            <p className="text-gray-700 leading-relaxed">
              All learners must complete verification and documentation requirements before gaining full 
              access to Sirtifai's programs, platforms, and services.
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
              <li><strong>Identity Verification (KYC):</strong> Submission of valid government-issued identification with verification through authorized KYC partners.</li>
              <li><strong>Academic & Professional Documentation:</strong> Transcripts, degree certificates, experience certificates, portfolio links.</li>
              <li><strong>Program-Specific Documents:</strong> Passport for International programs, PAN card for Freelancer programs, detailed resume for SER.</li>
              <li><strong>Consent & Authorization:</strong> Written consent for verification and sharing with employers/payroll providers.</li>
              <li><strong>Retention of Records:</strong> Documentation retained for compliance, verification, and audit purposes.</li>
              <li><strong>Non-Compliance:</strong> Failure to provide required documentation within 15 working days may result in suspension or cancellation.</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800 mb-2">5.3 Program Start Dates</h5>
            <p className="text-gray-700 leading-relaxed">
              The official start date of a Sirtifai program is determined by the learner's program edition, 
              enrollment confirmation date, and selected batch schedule.
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
              <li><strong>Definition:</strong> Program Start Date is when access to core program materials is first activated.</li>
              <li><strong>Start Date Allocation:</strong> Learners may select from available batch start dates during registration.</li>
              <li><strong>Early Access:</strong> Some learners may receive early access to preparatory materials before official start.</li>
              <li><strong>Deferrals & Rescheduling:</strong> Written requests made at least 7 days before original start date, subject to availability.</li>
              <li><strong>Program Commencement Notification:</strong> All learners receive notification at least 3 days before commencement.</li>
              <li><strong>Failure to Attend:</strong> If no login/attendance within 10 days of start date, standard refund policies apply.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 8,
      title: "6. Payment Terms",
      content: (
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">6.1 Accepted Currencies & Methods (INR/USD)</h5>
            <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
              <li><strong>Accepted Currencies:</strong> India-based learners pay in INR, USA-based learners pay in USD, international learners pay in USD unless otherwise approved.</li>
              <li><strong>Payment Methods – India:</strong> Credit/Debit cards, Net Banking, UPI, Wallet Payments, Bank Transfers (NEFT, RTGS, IMPS).</li>
              <li><strong>Payment Methods – USA & International:</strong> Credit/Debit cards, ACH Bank Transfers, Wire Transfers, PayPal or Stripe.</li>
              <li><strong>EMI & Installment Facilities:</strong> Available via select banks, credit card providers, or third-party financing partners subject to approval.</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800 mb-2">6.2 Taxes & Compliance (GST/Sales Tax)</h5>
            <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
              <li><strong>India:</strong> All fees subject to GST as per Central Goods and Services Tax Act, 2017. Tax invoices issued with Sirtifai's GSTIN.</li>
              <li><strong>USA:</strong> Fees may be subject to state and local sales tax based on learner's location. Sales tax calculated and added at checkout.</li>
              <li><strong>International:</strong> Taxes (VAT, GST, etc.) may apply based on learner's country of residence.</li>
              <li><strong>Tax Documentation:</strong> GST-compliant invoices for India, detailed invoices for USA, tax receipts issued electronically.</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800 mb-2">6.3 EMI & Installment Options</h5>
            <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
              <li><strong>Availability:</strong> EMI options through select banks, NBFCs, and third-party finance providers in India; installment plans via Affirm, Klarna in USA.</li>
              <li><strong>Approval & Eligibility:</strong> Solely at the discretion of financing partners based on credit score and repayment history.</li>
              <li><strong>Terms of Repayment:</strong> Financing partner determines repayment tenure, interest rate, and monthly installment amount.</li>
              <li><strong>Default in EMI Payments:</strong> May result in suspension of program access, cancellation of enrollment, or recovery actions by financing partner.</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800 mb-2">6.4 Non-Refundable Fee Policy</h5>
            <p className="text-gray-700 leading-relaxed">
              Sirtifai maintains a strict non-refundable fee policy to ensure fairness, resource allocation, 
              and operational continuity. All program fees are non-refundable once program access has been 
              granted or any portion of learning material has been accessed.
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
              <li><strong>Non-Refundable Scenarios:</strong> Withdrawal after enrollment confirmation, failure to meet program requirements, dismissal for misconduct, ineligibility discovered after enrollment.</li>
              <li><strong>Exceptions:</strong> Duplicate payment due to technical error, transaction failure where services not activated, program cancellation by Sirtifai, statutory refund obligations.</li>
              <li><strong>Refund Request Process:</strong> Must be submitted in writing to billing@sirtifai.com within 7 working days with valid proof and supporting evidence.</li>
              <li><strong>Processing Timeline:</strong> 14 working days for India, 14 business days for USA/international payments.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 9,
      title: "7. Deliverables & Limitations",
      content: (
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">7.1 Program Deliverables by Tier</h5>
            <p className="text-gray-700 leading-relaxed">
              Sirtifai's programs are structured into different plan tiers, each offering specific deliverables. 
              The exact inclusions depend on the program edition.
            </p>
            
            <div className="space-y-4 mt-3">
              <div>
                <h6 className="font-medium text-gray-800 mb-2">A) SPP – Domestic Fresher Edition</h6>
                <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
                  <li><strong>Basic:</strong> Domain learning via LearnX LMS, basic assignments and quizzes, 1 capstone project, NSQF certification.</li>
                  <li><strong>Pro:</strong> All Basic benefits, live instructor-led classes, 2 capstone projects, industry simulations, AI-powered resume builder.</li>
                  <li><strong>Elite:</strong> All Pro benefits, advanced simulations, career analytics dashboard, leadership modules, priority placement assistance.</li>
                </ul>
              </div>

              <div>
                <h6 className="font-medium text-gray-800 mb-2">B) SPP – Domestic Freelancer (Sirtifai Freelancer)</h6>
                <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
                  <li><strong>Basic:</strong> 1 verified paid project, mentor feedback, payroll processing, ₹12K–₹18K/month potential.</li>
                  <li><strong>Pro:</strong> All Basic benefits, multiple concurrent projects, EPF benefits, ₹18K–₹26K/month potential.</li>
                  <li><strong>Elite:</strong> All Pro benefits, premium client projects, bonuses, legal benefits, ₹26K–₹35K/month potential.</li>
                </ul>
              </div>

              <div>
                <h6 className="font-medium text-gray-800 mb-2">C) SPP – International (Sirtifai International)</h6>
                <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
                  <li><strong>Basic:</strong> Foundational training, domain assignments, 1 industry simulation, global certification.</li>
                  <li><strong>Pro:</strong> All Basic benefits, live classes, 2 industry simulations, AI resume optimization, career mapping.</li>
                  <li><strong>Elite:</strong> All Pro benefits, employer-specific profile development, career analytics, visa sponsorship guidance.</li>
                </ul>
              </div>

              <div>
                <h6 className="font-medium text-gray-800 mb-2">D) SER – Sirtifai Empowerment Rise</h6>
                <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
                  <li><strong>Starter:</strong> Advanced domain skill training, 1:1 mentorship (limited hours), professional certification.</li>
                  <li><strong>Industry+:</strong> All Starter benefits, industry-assigned projects, expanded recruiter network access.</li>
                  <li><strong>Career Max:</strong> All Industry+ benefits, leadership training, guaranteed interview access with partner employers.</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800 mb-2">7.2 Placement Assistance Scope</h5>
            <p className="text-gray-700 leading-relaxed">
              Sirtifai provides placement assistance as part of certain program tiers to support learners in 
              securing employment or freelance opportunities. This assistance is facilitative in nature and 
              does not constitute a job guarantee.
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
              <li><strong>Services Included:</strong> Job opportunity access, portfolio presentation, interview preparation, resume optimization, recruiter introductions, career mapping, visa documentation guidance.</li>
              <li><strong>Learner Obligations:</strong> Complete Skill and Practice phases, maintain active participation, keep profiles updated, adhere to professional conduct standards.</li>
              <li><strong>Limitations:</strong> No guarantee of specific job titles, salaries, employment timeframe, or visa approvals.</li>
              <li><strong>Duration of Support:</strong> SPP Progress Phase offers lifetime access, SER programs vary by tier (6–18 months post-completion).</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800 mb-2">7.3 Limitations & Exclusions</h5>
            <p className="text-gray-700 leading-relaxed">
              While Sirtifai strives to provide high-quality training and support, the following limitations 
              and exclusions apply to all programs and services.
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
              <li><strong>No Employment Guarantee:</strong> Sirtifai does not guarantee job placement, salary level, or employer selection.</li>
              <li><strong>No Visa or Immigration Guarantee:</strong> Sirtifai facilitates employer introductions but does not guarantee visa issuance.</li>
              <li><strong>Limited Responsibility for Third-Party Actions:</strong> Not responsible for delays caused by employers, payroll providers, or government authorities.</li>
              <li><strong>Market-Dependent Opportunities:</strong> Project assignments and job opportunities vary based on industry demand and market conditions.</li>
              <li><strong>Exclusions:</strong> Personal relocation, housing, non-work immigration support, business funding (unless stated in writing).</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 10,
      title: "8. Learner Obligations",
      content: (
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">8.1 Course & Project Completion</h5>
            <p className="text-gray-700 leading-relaxed">
              Learners enrolled in Sirtifai programs are expected to complete all course modules, 
              assignments, and project work within the timelines and quality standards set by Sirtifai.
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
              <li><strong>Completion Requirements:</strong> All learning modules, quizzes, assignments, and capstone projects must be completed before progressing to next phases.</li>
              <li><strong>Timelines:</strong> Each program phase has defined standard duration (Skill – 6 months, Practice – 3 months).</li>
              <li><strong>Quality Standards:</strong> All deliverables must meet industry-level quality expectations as determined by mentors or clients.</li>
              <li><strong>Attendance & Participation:</strong> Maintain minimum attendance for live sessions and active participation in discussions.</li>
              <li><strong>Academic Integrity:</strong> Plagiarism, cheating, or submission of work not completed by the learner is strictly prohibited.</li>
              <li><strong>Impact on Placement:</strong> Failure to complete requirements may delay progression or limit access to placement assistance.</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800 mb-2">8.2 Professional Conduct Standards</h5>
            <p className="text-gray-700 leading-relaxed">
              All learners are required to maintain a high level of professionalism, integrity, and ethical 
              behavior throughout their participation in the program.
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
              <li><strong>Respectful Communication:</strong> Communicate courteously with staff, mentors, clients, and fellow learners.</li>
              <li><strong>Adherence to Protocols:</strong> Follow client-specific rules, project guidelines, and non-disclosure agreements.</li>
              <li><strong>Ethical Behavior:</strong> Avoid conflicts of interest, fraudulent activities, or misrepresentation of skills.</li>
              <li><strong>Digital Etiquette:</strong> Use platforms responsibly, avoid unauthorized access, and maintain account security.</li>
              <li><strong>Attendance & Reliability:</strong> Attend scheduled sessions and meet all deadlines unless prior approval is granted.</li>
              <li><strong>Zero Tolerance for Harassment:</strong> Harassment, discrimination, or bullying will result in immediate disciplinary action.</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800 mb-2">8.3 Compliance with Local Laws</h5>
            <p className="text-gray-700 leading-relaxed">
              All learners are required to comply with the laws and regulations of their country of residence 
              and any country in which they work, train, or participate in Sirtifai-related activities.
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
              <li><strong>India-Based Learners:</strong> Must adhere to IT Act 2000, labor laws, tax obligations, and industry-specific regulations.</li>
              <li><strong>USA-Based Learners:</strong> Must comply with federal laws, state-level regulations, and ensure proper work authorization.</li>
              <li><strong>International Placements:</strong> Must comply with host country immigration laws, visa validity, and work permit conditions.</li>
              <li><strong>Consequences of Non-Compliance:</strong> Sirtifai reserves the right to suspend or terminate program access without refund for violations.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 11,
      title: "9. Payroll & Earnings",
      content: (
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">9.1 Payment Process in India</h5>
            <p className="text-gray-700 leading-relaxed">
              For learners enrolled in India-based Sirtifai programs that include paid projects under the 
              Practice Phase, payroll processing will be carried out in accordance with the following terms.
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
              <li><strong>Payroll Provider:</strong> All payments processed through Peairlo™ payroll or other Sirtifai-approved providers.</li>
              <li><strong>Payment Frequency:</strong> Monthly payments within 30 days of verified project completion.</li>
              <li><strong>Income Range:</strong> SPP Domestic Freelancer: ₹12,000 – ₹35,000/month, SPP Domestic Fresher: ₹12,000 – ₹26,000/month.</li>
              <li><strong>Tax & Compliance:</strong> Subject to TDS, EPF/ESI contributions for eligible learners as per Indian labor laws.</li>
              <li><strong>Payment Method:</strong> Direct credit to learner's Indian bank account in their own name.</li>
              <li><strong>Eligibility:</strong> Must complete projects to client standards, submit required reports, and maintain compliance.</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800 mb-2">9.2 Payment Process in USA</h5>
            <p className="text-gray-700 leading-relaxed">
              For learners enrolled in USA-based Sirtifai programs or those receiving payments in USD for 
              project work, payroll processing will be carried out as follows.
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
              <li><strong>Payroll Provider:</strong> Processed through approved U.S. payroll partners, ACH processors, or global payment platforms.</li>
              <li><strong>Payment Frequency:</strong> Monthly payments within 30 days after successful project completion and client approval.</li>
              <li><strong>Income Range:</strong> Earnings depend on program tier, project complexity, and client location.</li>
              <li><strong>Tax & Compliance:</strong> Subject to federal, state, and local taxes, Form 1099-NEC for contractors, Form W-2 for employees.</li>
              <li><strong>Payment Method:</strong> Direct deposit (ACH) to U.S. bank account, alternative methods for international client payments.</li>
              <li><strong>Eligibility:</strong> Must complete deliverables meeting client standards and maintain compliance with U.S. labor laws.</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800 mb-2">9.3 Taxation Obligations</h5>
            <p className="text-gray-700 leading-relaxed">
              All learners receiving payments for project work are responsible for complying with applicable 
              tax laws in their country of residence.
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
              <li><strong>India-Based Learners:</strong> Subject to Income Tax Act 1961, TDS deductions, EPF/ESI contributions, GST obligations if registered.</li>
              <li><strong>USA-Based Learners:</strong> Subject to U.S. Internal Revenue Code, state and municipal taxes, self-employment taxes for freelancers.</li>
              <li><strong>International Learners:</strong> May be subject to withholding taxes, VAT, or other country-specific levies.</li>
              <li><strong>Learner's Responsibility:</strong> Maintain accurate records, file annual returns, pay additional taxes owed, notify changes in tax residency.</li>
              <li><strong>Sirtifai's Role:</strong> Deduct and remit taxes where required by law, provide relevant tax documents.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 12,
      title: "10. Intellectual Property",
      content: (
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">10.1 Ownership of Content</h5>
            <p className="text-gray-700 leading-relaxed">
              All content, materials, and resources provided by Sirtifai, its partners, mentors, or clients remain 
              the intellectual property of Sirtifai or the respective content owner unless otherwise stated in 
              writing.
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
              <li><strong>Sirtifai-Owned Content:</strong> Training materials, e-learning modules, video lessons, course outlines, assessments, templates, case studies, and AI-driven tools.</li>
              <li><strong>Client-Owned Content:</strong> Project assignments may involve proprietary data, trade secrets, or materials belonging to Sirtifai's clients or partners.</li>
              <li><strong>License to Use:</strong> Sirtifai grants enrolled learners a limited, non-exclusive, non-transferable license to access and use program materials for personal learning and project completion only.</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800 mb-2">10.2 Restrictions on Use</h5>
            <p className="text-gray-700 leading-relaxed">
              To protect Sirtifai's intellectual property, client confidentiality, and platform integrity, learners 
              must strictly adhere to the following restrictions:
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
              <li><strong>Content Restrictions:</strong> Learners may not copy, reproduce, republish, upload, post, transmit, or distribute Sirtifai-owned materials in any form.</li>
              <li><strong>Platform Use Restrictions:</strong> No sharing of login credentials, using automated bots or scrapers, or attempting to hack or bypass security measures.</li>
              <li><strong>Commercial Use Prohibition:</strong> Sirtifai materials may not be used for commercial purposes outside of assigned projects.</li>
              <li><strong>Client & Partner Confidentiality:</strong> All non-disclosure obligations continue indefinitely, even after program completion.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 13,
      title: "11. Privacy & Data Protection",
      content: (
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">11.1 Data Collection & Usage</h5>
            <p className="text-gray-700 leading-relaxed">
              Sirtifai is committed to protecting the privacy of learners, clients, and partners while ensuring 
              compliance with India's Data Protection Act, 2023, U.S. privacy laws (including CCPA), and other 
              applicable international regulations.
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
              <li><strong>Types of Data Collected:</strong> Identity data, contact data, educational & professional data, program data, payment & financial data, technical data.</li>
              <li><strong>Purpose of Data Collection:</strong> Processing enrollment, delivering training, payroll processing, facilitating employer introductions, enhancing learning experience.</li>
              <li><strong>Legal Basis:</strong> Based on learner consent, contractual necessity, and compliance with statutory requirements.</li>
              <li><strong>Data Storage & Retention:</strong> Stored securely in encrypted databases, typically retained for up to 7 years after program completion.</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800 mb-2">11.2 Compliance with Privacy Laws</h5>
            <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
              <li><strong>India – DPDPA 2023:</strong> Lawful processing, purpose limitation, data minimization, security measures, learner rights to access, correct, and delete personal data.</li>
              <li><strong>USA – Federal & State:</strong> Compliance with CCPA/CPRA, HIPAA, GLBA, and state-level privacy laws with rights to access, deletion, and correction.</li>
              <li><strong>Global Best Practices:</strong> Adoption of privacy practices that meet or exceed strictest applicable standards like GDPR or PDPA.</li>
              <li><strong>Breach Notification:</strong> Notification of affected learners and regulatory authorities in accordance with applicable laws.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 14,
      title: "12. Refund & Cancellation Policy",
      content: (
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">12.1 Conditions for Refunds</h5>
            <p className="text-gray-700 leading-relaxed">
              Sirtifai maintains a transparent but strict refund policy. Refunds are granted only under specific 
              circumstances outlined below, and all other payments remain subject to the Non-Refundable Fee Policy.
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
              <li><strong>Refund Eligibility:</strong> Duplicate payment due to technical error, transaction failure without service activation, program cancellation by Sirtifai, statutory requirements.</li>
              <li><strong>Non-Refundable Scenarios:</strong> Withdrawal after program access, failure to attend classes or complete assignments, termination due to misconduct, false information provided.</li>
              <li><strong>Request Procedure:</strong> Must submit written request to billing@sirtifai.com within 7 working days with proof of payment and supporting evidence.</li>
              <li><strong>Processing Timeline:</strong> 14 working days for India, 14 business days for USA/international payments.</li>
              <li><strong>Deductions:</strong> Bank charges, payment gateway fees, or currency conversion costs may be deducted unless prohibited by law.</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800 mb-2">12.2 Processing Timelines</h5>
            <p className="text-gray-700 leading-relaxed">
              Sirtifai processes all approved refunds in accordance with banking and payment gateway 
              regulations in India, the USA, and other applicable jurisdictions.
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
              <li><strong>India-Based Payments:</strong> Typically processed within 14 working days, may vary based on bank and payment method.</li>
              <li><strong>USA-Based Payments:</strong> Typically processed within 14 business days, ACH transfers may take 3–7 additional business days.</li>
              <li><strong>International Payments:</strong> May range from 14–21 business days, subject to payment method and currency conversion.</li>
              <li><strong>Tracking Refunds:</strong> Confirmation email with refund reference number, expected credit date, and applicable deductions.</li>
              <li><strong>Delays Beyond Standard:</strong> Sirtifai not responsible for banking holidays, payment gateway disputes, or currency conversion issues.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 15,
      title: "13. Disclaimers & Warranties",
      content: (
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">13.1 No Guaranteed Outcomes</h5>
            <p className="text-gray-700 leading-relaxed">
              Sirtifai provides training, project facilitation, and career support services designed to enhance 
              employability, skill development, and professional growth. However, Sirtifai makes no 
              guarantees or warranties regarding specific results.
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
              <li><strong>No Employment Guarantee:</strong> Participation does not ensure job offer or placement unless explicitly stated in separate agreement.</li>
              <li><strong>Earnings Potential Disclaimer:</strong> Income ranges are illustrative estimates only, actual earnings may vary significantly.</li>
              <li><strong>Visa & Relocation Disclaimer:</strong> Sirtifai facilitates employer introductions but does not guarantee visa approval or work permit issuance.</li>
              <li><strong>Project Availability Disclaimer:</strong> Number, type, and complexity of projects may vary depending on industry demand.</li>
              <li><strong>Third-Party Services Disclaimer:</strong> Not responsible for delays or failures caused by third-party service providers.</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800 mb-2">13.2 Market-Dependent Earnings & Placement</h5>
            <p className="text-gray-700 leading-relaxed">
              Learner earnings, project allocations, and placement opportunities through Sirtifai programs are 
              directly influenced by prevailing market conditions and other external factors beyond 
              Sirtifai's control.
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
              <li><strong>Dependence on Industry Demand:</strong> Project availability fluctuates based on hiring trends, technology adoption, and economic stability.</li>
              <li><strong>Regional Market Variations:</strong> Income ranges vary between regions due to cost of living, industry maturity, and local hiring practices.</li>
              <li><strong>Competitive Factors:</strong> Placement success depends on ability to compete with other applicants in the job market.</li>
              <li><strong>Economic & Political Impact:</strong> Global or local economic downturns, policy changes, and geopolitical events can impact opportunities.</li>
              <li><strong>No Guaranteed Timeline:</strong> While Sirtifai aims to facilitate placements promptly, timelines are indicative and may extend.</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800 mb-2">13.3 Limitation of Liability</h5>
            <p className="text-gray-700 leading-relaxed">
              To the fullest extent permitted by applicable law in India, USA, and other jurisdictions where 
              Sirtifai operates, Sirtifai's liability to learners, clients, or partners is strictly limited.
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
              <li><strong>Maximum Liability Cap:</strong> Total liability will not exceed the total amount of fees paid by the learner for the specific program.</li>
              <li><strong>Exclusion of Indirect Damages:</strong> Not liable for loss of earnings, business interruption, consequential, or punitive damages.</li>
              <li><strong>No Liability for External Factors:</strong> Not responsible for acts of employers, clients, visa rejections, or market fluctuations.</li>
              <li><strong>Learner's Responsibility:</strong> Learners are solely responsible for accuracy of personal, academic, and professional information.</li>
              <li><strong>Jurisdictional Limitations:</strong> Some jurisdictions may not allow exclusion of certain damages, limitations apply to extent permitted.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 16,
      title: "14. Governing Law & Jurisdiction",
      content: (
        <div className="space-y-4">
          <div>
            <h5 className="font-semibold text-gray-800 mb-2">14.1 Applicable Law</h5>
            <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
              <li><strong>India-Based Learners & Transactions:</strong> Governed by laws of Republic of India, including Indian Contract Act 1872 and IT Act 2000.</li>
              <li><strong>USA-Based Learners & Transactions:</strong> Governed by laws of State of Delaware, USA, and applicable U.S. federal laws.</li>
              <li><strong>International Learners:</strong> Default to Indian law unless otherwise agreed in writing.</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800 mb-2">14.2 Jurisdiction for Disputes</h5>
            <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
              <li><strong>India:</strong> All disputes subject to exclusive jurisdiction of courts in Hyderabad, Telangana, India.</li>
              <li><strong>USA:</strong> All disputes subject to exclusive jurisdiction of courts in Delaware, USA.</li>
              <li><strong>International:</strong> Disputes resolved under Indian jurisdiction unless otherwise agreed in contract.</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-800 mb-2">14.3 Arbitration Clause</h5>
            <p className="text-gray-700 leading-relaxed">
              In case of disputes that cannot be resolved through negotiation, the matter will be referred 
              to binding arbitration.
            </p>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1 text-gray-700">
              <li><strong>India:</strong> Arbitration under Arbitration and Conciliation Act 1996, seat in Hyderabad, Telangana.</li>
              <li><strong>USA:</strong> Arbitration under American Arbitration Association (AAA) rules, seat in Delaware.</li>
              <li><strong>Arbitration Panel:</strong> One independent arbitrator jointly appointed by both parties.</li>
              <li><strong>Decision:</strong> Final and binding on both parties.</li>
              <li><strong>Language:</strong> All proceedings conducted in English.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 17,
      title: "15. Contact Information",
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            For any questions, concerns, or requests related to these Terms & Conditions, program 
            enrollment, or privacy matters, learners and partners may contact Sirtifai through the following 
            official channels:
          </p>
          
          <div className="space-y-4 mt-3">
            <div>
              <h6 className="font-medium text-gray-800 mb-2">India Office</h6>
              <p className="text-gray-700">Sirtifai EdTech Private Limited</p>
              <p className="text-gray-700">Email: support.india@sirtifai.com</p>
              <p className="text-gray-700">Working Hours: Monday – Saturday, 10:00 AM – 6:00 PM IST</p>
            </div>

            <div>
              <h6 className="font-medium text-gray-800 mb-2">USA Office</h6>
              <p className="text-gray-700">Sirtifai Inc.</p>
              <p className="text-gray-700">Email: support.usa@sirtifai.com</p>
              <p className="text-gray-700">Working Hours: Monday – Friday, 9:00 AM – 5:00 PM EST</p>
            </div>

            <div>
              <h6 className="font-medium text-gray-800 mb-2">Specialized Support</h6>
              <ul className="list-disc list-inside ml-6 space-y-1 text-gray-700">
                <li><strong>Data Protection & Privacy:</strong> privacy@sirtifai.com</li>
                <li><strong>Billing & Refund Queries:</strong> billing@sirtifai.com</li>
                <li><strong>Official Website:</strong> https://www.sirtifai.com</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ];

  const handleReadMore = (sectionId: number) => {
    const nextSectionId = sectionId + 1;
    if (nextSectionId < contentSections.length && !revealedSections.includes(nextSectionId)) {
      setRevealedSections(prev => [...prev, nextSectionId]);
      setTimeout(() => {
        const element = document.getElementById(`section-${nextSectionId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const isSectionVisible = (sectionId: number) => {
    return revealedSections.includes(sectionId);
  };

  const shouldShowButton = (sectionId: number) => {
    const isVisible = isSectionVisible(sectionId);
    const hasNextSection = sectionId + 1 < contentSections.length;
    const nextSectionNotRevealed = !revealedSections.includes(sectionId + 1);
    return isVisible && hasNextSection && nextSectionNotRevealed;
  };

  return (
    <div className="space-y-6">
      <h3 className="text-[#FE7743] text-2xl font-bold mb-6">Sirtifai Terms & Conditions</h3>
      <div className="space-y-6">
        {contentSections.map((section, index) => (
          <div
            key={section.id}
            id={`section-${section.id}`}
            className={`transition-all duration-500 ${isSectionVisible(section.id) ? 'opacity-100' : 'opacity-0 hidden'}`}
          >
            <h4 className="text-lg font-semibold text-black mb-3">{section.title}</h4>
            {section.content}

            {shouldShowButton(section.id) && (
              <div className="mt-6 text-center">
                <button
                  onClick={() => handleReadMore(section.id)}
                  className="bg-[#FE7743] hover:bg-[#e65a2e] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Read More
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TermsAndConditions;
