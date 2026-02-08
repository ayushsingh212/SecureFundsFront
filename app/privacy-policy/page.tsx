export default function PrivacyPolicyPage() {
  return (
    <main className="bg-off-white py-24">

      <div className="max-w-4xl mx-auto px-6 space-y-12">


        <div className="text-center">

          <h1 className="text-4xl font-serif text-navy mb-4">
            Privacy Policy
          </h1>

          <p className="text-sm text-slate-500">
            Your Privacy Matters to Us
          </p>

        </div>



        <section className="bg-white border border-slate-200 p-10 space-y-6">

          <h2 className="text-xl font-serif text-navy">
            Information We Collect
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed">
            We collect only basic information required to process your enquiry:
          </p>

          <ul className="space-y-2 text-sm text-slate-600">

            <li>• Full Name</li>

            <li>• Mobile Number</li>

            <li>• City</li>

            <li>• Loan Requirement Details</li>

          </ul>

          <p className="text-sm text-slate-600 leading-relaxed mt-4">
            We do not collect Aadhaar number, PAN number, OTPs,
            bank account details, or passwords.
          </p>

        </section>



        <section className="bg-white border border-slate-200 p-10 space-y-6">

          <h2 className="text-xl font-serif text-navy">
            How We Use Your Information
          </h2>

          <ul className="space-y-3 text-sm text-slate-600">

            <li>• To contact you regarding your enquiry</li>

            <li>• To provide general loan-related information</li>

            <li>• To share details with lending institutions if required</li>

          </ul>

        </section>



        <section className="bg-white border border-slate-200 p-10 space-y-6">

          <h2 className="text-xl font-serif text-navy">
            Data Sharing
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed">
            We do not sell, rent, or trade your personal information.
            Information is shared only for loan enquiry purposes
            and only with lending institutions when necessary.
          </p>

        </section>



        <section className="bg-white border border-slate-200 p-10 space-y-6">

          <h2 className="text-xl font-serif text-navy">
            Data Security
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed">
            We take reasonable technical and administrative measures
            to protect your personal information from unauthorized access,
            misuse, or disclosure.
          </p>

        </section>



        <section className="bg-white border border-slate-200 p-10 space-y-6">

          <h2 className="text-xl font-serif text-navy">
            User Consent
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed">
            By submitting an enquiry on this website,
            you consent to the collection and use of your information
            as described in this policy.
          </p>

        </section>



        <section className="bg-slate-50 border border-slate-200 p-8 text-center">

          <p className="text-xs text-slate-500 leading-relaxed">

            This website operates as an independent information
            and referral platform. We are not responsible for
            decisions made by banks or NBFCs.

          </p>

        </section>


      </div>

    </main>
  );
}
