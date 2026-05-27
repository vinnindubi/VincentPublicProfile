import { FaFileDownload } from 'react-icons/fa';
export default function Documents() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Documents</h2>
        <div className="w-16 h-1 bg-teal-600 mt-4 mx-auto md:mx-0 rounded-full"></div>
      </div>

      <div className="bg-slate-800 rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between text-white shadow-lg">
        <div className="mb-6 sm:mb-0 text-center sm:text-left">
          <h3 className="text-2xl font-semibold mb-2">Resume / Curriculum Vitae</h3>
          <p className="text-slate-300">Download my full professional background and skill set.</p>
        </div>
        
        {/* Links directly to the file in your public folder */}
        <a 
          href="/Vincent_Ndereba_CV.pdf" 
          download 
          className="bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold px-8 py-3 rounded-md transition-colors shadow-md flex items-center gap-2"
        >
          <FaFileDownload /> Download CV
        </a>
      </div>
    </section>
  );
}