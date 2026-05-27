export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-[85vh] px-6 gap-12 max-w-6xl mx-auto pt-10">
      
      

      {/* Right: Text Content */}
      <div className="text-center md:text-left flex-1">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 tracking-tight">
          Hi, I'm Vincent.
        </h1>
        
        <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed mx-auto md:mx-0">
          A Full-Stack Developer and AWS Certified Cloud Practitioner based in Nairobi. 
          I specialize in building scalable web applications and seamless digital experiences 
          using React, Laravel, and modern cloud architecture.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a href="#projects" className="bg-teal-700 text-white px-8 py-3 rounded-md font-medium hover:bg-teal-800 transition-colors shadow-sm cursor-pointer text-center block">
            View My Work
          </a>
          <a href="#contact" className="bg-white border border-slate-300 text-slate-700 px-8 py-3 rounded-md font-medium hover:bg-slate-50 transition-colors shadow-sm cursor-pointer text-center block">
            Get in Touch
          </a>
        </div>
      </div>
      {/* Left: Profile Image */}
      <div className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-white flex-shrink-0">
        <img 
          src="/ProfilePic.JPG" 
          alt="Vincent" 
          className="w-full h-full object-cover object-[center_20%]"
          onError={(e) => {
            e.target.src = "https://ui-avatars.com/api/?name=Vincent&size=512&background=0F766E&color=fff";
          }}
        />
      </div>

    </section>
  );
}