export default function Experience() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Experience</h2>
        <div className="w-16 h-1 bg-teal-600 mt-4 mx-auto md:mx-0 rounded-full"></div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative border-l-4 border-l-teal-600">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800">IT Intern</h3>
            <h4 className="text-lg text-teal-700 font-medium">CalKenya</h4>
          </div>
          <span className="text-slate-500 font-medium mt-2 md:mt-0">Recent</span>
        </div>
        
        <ul className="list-disc list-inside text-slate-600 space-y-2 leading-relaxed">
          <li>Provided dedicated software support and troubleshooting to ensure smooth operational workflows.</li>
          <li>Conducted user research to bridge the gap between technical implementation and real-world user interaction.</li>
          <li>Gained hands-on experience in analyzing and resolving systemic IT issues in a fast-paced environment.</li>
        </ul>
      </div>
    </section>
  );
}