export default function ProcessSection() {
  return (
    <section
      id="process"
      className="py-24 bg-white border-t border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-8">

        <div className="text-center mb-16">

          <h2 className="text-3xl font-serif text-navy mb-4">
            How It Works
          </h2>

          <p className="text-sm text-slate-500 max-w-xl mx-auto">
            Our simple and transparent enquiry assistance process.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-16">

          <div className="bg-off-white border p-8 text-center">

            <div className="w-12 h-12 bg-navy text-white flex items-center justify-center mx-auto mb-6 font-bold text-lg">
              1
            </div>

            <h3 className="text-sm font-bold uppercase tracking-widest mb-3">
              Share Basic Details
            </h3>

            <p className="text-sm text-slate-500 leading-relaxed">
              Provide your basic loan requirement details through our enquiry
              form.
            </p>

          </div>

          <div className="bg-off-white border p-8 text-center">

            <div className="w-12 h-12 bg-navy text-white flex items-center justify-center mx-auto mb-6 font-bold text-lg">
              2
            </div>

            <h3 className="text-sm font-bold uppercase tracking-widest mb-3">
              Indicative Guidance
            </h3>

            <p className="text-sm text-slate-500 leading-relaxed">
              We share indicative eligibility information based on the details
              provided.
            </p>

          </div>

          <div className="bg-off-white border p-8 text-center">

            <div className="w-12 h-12 bg-navy text-white flex items-center justify-center mx-auto mb-6 font-bold text-lg">
              3
            </div>

            <h3 className="text-sm font-bold uppercase tracking-widest mb-3">
              Referral to Lenders
            </h3>

            <p className="text-sm text-slate-500 leading-relaxed">
              If suitable, your enquiry may be shared with lending professionals.
            </p>

          </div>

        </div>

        <div className="bg-slate-50 border border-slate-200 p-6 text-center">

          <p className="text-xs font-bold uppercase tracking-widest text-slate-600">
            Important Notice
          </p>

          <p className="text-sm text-slate-500 mt-3 max-w-3xl mx-auto leading-relaxed">
            Loan approval is subject to lender policies and verification. We do
            not approve loans and do not guarantee sanctions.
          </p>

        </div>

      </div>
    </section>
  );
}
