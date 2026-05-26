export default function About() {
  const skills = {
    frontend: ["React", "Vue.js", "JavaScript", "Tailwind CSS"],
    backend: ["Laravel", "PHP", "Node.js", "Express"],
    cloudAndDb: ["AWS", "MySQL", "Git"]
  };

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      
      <div className="mb-12 md:text-center">
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight">About & Skills</h2>
        <div className="w-16 h-1 bg-teal-600 mt-4 md:mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Left Column: The Story */}
        <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
          <p>
            Hello! I'm a software developer with a strong foundation in building dynamic, user-centric applications. 
            I hold a degree in Information Technology, which fueled my passion for solving complex technical problems 
            and understanding systems from the ground up.
          </p>
          <p>
            Recently, I completed an IT internship at CalKenya, where I gained hands-on experience in software support 
            and user research. This bridged the gap between writing code and understanding how real users interact with software.
          </p>
          <p>
            Currently, I am focused on full-stack web development, bringing together modern frontend frameworks like React 
            with robust backend architectures using Laravel and Node.js. 
          </p>
          <p>
            When I am not debugging or architecting databases, you can usually find me clearing my head on a nature walk 
            or catching up on endurance car racing.
          </p>
        </div>

        {/* Right Column: Skills & Certifications */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
          
          {/* AWS Certification Badge */}
          <div className="mb-8 p-4 bg-slate-50 border border-slate-200 rounded-lg flex items-center gap-4">
            <div className="w-12 h-12 bg-teal-100 text-teal-800 rounded-md flex items-center justify-center font-bold text-xl">
              ☁️
            </div>
            <div>
              <h4 className="font-semibold text-slate-800">AWS Certified Cloud Practitioner</h4>
              <p className="text-sm text-slate-500">Validated expertise in cloud architecture</p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map(skill => (
                  <span key={skill} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Backend</h4>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map(skill => (
                  <span key={skill} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Cloud & Database</h4>
              <div className="flex flex-wrap gap-2">
                {skills.cloudAndDb.map(skill => (
                  <span key={skill} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}