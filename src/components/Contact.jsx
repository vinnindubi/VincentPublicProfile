import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
export default function Contact() {
  return (
    <footer className="bg-white border-t border-slate-100 py-20 px-6 mt-10">
      <div className="max-w-4xl mx-auto text-center">
        
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-6">
          Let's Connect
        </h2>
        
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          I am currently open to new opportunities in software development, technical product management, and solutions architecture. 
          Whether you have a question, a project idea, or just want to say hi, my inbox is always open!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a 
                href="mailto:your.email@example.com" 
                className="bg-teal-700 text-white px-8 py-3 rounded-md font-medium hover:bg-teal-800 transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-2"
            >
                <FaEnvelope className="w-6 h-6" />
                 Email Me
            </a>
            
            <a 
                href="https://wa.me/254790194570" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-2"
            >
                <FaWhatsapp className="w-6 h-6" />
                WhatsApp
            </a>
            </div>

        {/* Social Links with Icons AND Text */}
        <div className="flex justify-center gap-8 mb-12">
          <a 
            href="https://github.com/vinnindubi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-2 font-medium"
          >
            <FaGithub className="w-6 h-6" color="#333" />
            <span>GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/vincent-ndubi/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-500 hover:text-blue-700 transition-colors flex items-center gap-2 font-medium"
          >
            <FaLinkedin className="w-6 h-6" color="#0077B5" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Copyright & Location */}
        <div className="text-slate-400 text-sm space-y-2">
          <p>&copy; {new Date().getFullYear()} Vincent. All rights reserved.</p>
          <p>Built with React & Tailwind CSS. Based in Nairobi, Kenya.</p>
        </div>

      </div>
    </footer>
  );
}