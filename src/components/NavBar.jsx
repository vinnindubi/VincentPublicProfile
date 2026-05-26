export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-slate-100 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo / Name */}
        <a href="#home" className="text-xl font-bold text-teal-700 tracking-tight">
          Vincent.
        </a>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="#home" className="hover:text-teal-700 transition-colors">Home</a>
          <a href="#projects" className="hover:text-teal-700 transition-colors">Projects</a>
          <a href="#about" className="hover:text-teal-700 transition-colors">About</a>
        </div>

        {/* Contact Button */}
        <a 
          href="#contact" 
          className="bg-slate-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm"
        >
          Contact
        </a>
        
      </div>
    </nav>
  );
}