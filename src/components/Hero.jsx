export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 tracking-tight">
        Hi, I'm Vincent.
      </h1>
      
      <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
        A Full-Stack Developer and AWS Certified Cloud Practitioner based in Nairobi. 
        I specialize in building scalable web applications and seamless digital experiences 
        using React, Laravel, and modern cloud architecture.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#projects" className="bg-teal-700 text-white px-8 py-3 rounded-md font-medium hover:bg-teal-800 transition-colors shadow-sm cursor-pointer">
          View My Work
        </a>
        <a href="#contact" className="bg-white border border-slate-300 text-slate-700 px-8 py-3 rounded-md font-medium hover:bg-slate-50 transition-colors shadow-sm cursor-pointer">
          Get in Touch
        </a>
      </div>
    </section>
  );
}