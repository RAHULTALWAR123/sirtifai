function CancellationPolicy() {
  return (
    <div className="space-y-6">
      <h3 className="text-[#FE7743] text-xl font-bold">Sirtifai Cancellation Policy</h3>

      <div className="space-y-4">
        <p>Effective Date: [Insert Date]</p>
        <p>
          This Cancellation Policy outlines the terms under which learners,
          freelancers, or partners may cancel their enrollment, subscription,
          or participation in Sirtifai programs, including SPP, SER, Sirtifai
          Freelancer, and Sirtifai International.
        </p>
      </div>

      <div className="space-y-2">
        <li className="font-semibold">1. Learner-Initiated Cancellations</li>
        <div>
          <p>1.1 Before Program Start Date</p>
          <ul className="list-disc list-inside">
            <li>
              If you cancel before the official program start date, you may be
              eligible for a refund in accordance with the Sirtifai Refund
              Policy.
            </li>
            <li>
              A written cancellation request must be submitted to
              billing@sirtifai.com at least working days prior to the start
              date.
            </li>
          </ul>
        </div>
        <div>
          <p>1.2 After Program Access is Granted</p>
          <ul className="list-disc list-inside">
            <li>
              Once program access is provided (including LMS login, materials,
              or project assignments), cancellations are allowed, but no
              refund will be issued except in cases covered under the Refund
              Policy.
            </li>
          </ul>
        </div>
      </div>
      <div className="space-y-2">
        <li className="font-semibold">2. Sirtifai-Initiated Cancellations</li>
        <div>
          <p>
            Sirtifai reserves the right to cancel a program or enrollment if:
          </p>
          <ul className="list-disc list-inside">
            <li>The program is discontinued.</li>
            <li>Minimum enrollment requirements are not met.</li>
            <li>
              The learner violates Sirtifai&lsquo;s Code of Conduct or Terms &
              Conditions.
            </li>
            <li>
              False, incomplete, or fraudulent information is provided during
              registration.
            </li>
          </ul>
        </div>
        <div>
          <p>In such cases, Sirtifai may offer:</p>
          <ul className="list-disc list-inside">
            <li>A full refund, or</li>
            <li>
              Transfer to an equivalent alternative program at no extra cost.
            </li>
          </ul>
        </div>
      </div>
      <div className="space-y-2">
        <li className="font-semibold">
          3. Process for Cancellation Requests
        </li>
        <p>To request cancellation:</p>
        <ul className="list-decimal list-inside space-y-2">
          <li>Send an email to billing@sirtifai.com with:</li>
          <ul className="list-disc list-inside">
            <li>Your full name and enrollment ID.</li>
            <li>Program name.</li>
            <li>Reason for cancellation.</li>
          </ul>
          <li>
            Sirtifai will review and confirm eligibility within 5 working
            days.
          </li>
        </ul>
      </div>
      <div className="space-y-2">
        <li className="font-semibold">4. No-Show Cancellations</li>
        <p>
          If a learner fails to attend without notifying Sirtifai in advance,
          the enrollment will be treated as a no-show and no refund or credit
          will be provided.
        </p>
      </div>
      <div className="space-y-2">
        <li className="font-semibold">
          5. Subscription & Installment Plan Cancellations
        </li>
        <ul className="list-disc list-inside">
          <li>
            For subscription or EMI plans, cancellation will stop future
            billing, but no refund will be issued for payments already made.
          </li>
          <li>
            Access to the platform will be revoked immediately after
            cancellation confirmation.
          </li>
        </ul>
      </div>
      <div className="space-y-2">
        <li className="font-semibold">6. Contact for Cancellations</li>
        <p className="space-y-2">
          <li>
            India Office <br />
            Email: billing@sirtifai.com <br />
          </li>
          <li>
            {" "}
            USA Office <br />
            Email: billing.usa@sirtifai.com
          </li>
        </p>
      </div>
    </div>
  );
}

export default CancellationPolicy;
