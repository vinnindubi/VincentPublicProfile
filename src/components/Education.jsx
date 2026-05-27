export default function Education() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Education & Certifications</h2>
        <div className="w-16 h-1 bg-teal-600 mt-4 mx-auto md:mx-0 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Education Card */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
          <div className="text-4xl mb-4">🎓</div>
          <h3 className="text-xl font-semibold text-slate-800 mb-1">Information Technology</h3>
          <h4 className="text-slate-500 font-medium mb-4">Co-operative University of Kenya</h4>
          <p className="text-slate-600 leading-relaxed">
            Academic training focused on system architecture, database management, and modern software development practices.
          </p>
        </div>

        {/* Certification Card */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
          <div className="text-4xl mb-4">☁️</div>
          <h3 className="text-xl font-semibold text-slate-800 mb-1">AWS Certified Cloud Practitioner</h3>
          <h4 className="text-slate-500 font-medium mb-4">Amazon Web Services</h4>
          <p className="text-slate-600 leading-relaxed">
            Validated expertise in cloud infrastructure, security, and AWS deployment strategies (including CloudFormation up to 200 outputs).
          </p>
        </div>
      </div>
    </section>
  );
}