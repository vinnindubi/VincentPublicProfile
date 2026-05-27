const projectsData = [
  {
    id: 1,
    title: "FedhaWatch",
    description: "A financial tracking dashboard designed to reveal and visualize shadow budget expenditures. Features interactive risk distribution charts and real-time data filtering.",
    techStack: ["React", "Chart.js", "Tailwind"],
    liveLink: "https://fedhawatch1.onrender.com/", // Replace with your actual Vercel link later
    githubLink: "#",
  },
  {
    id: 2,
    title: "CoopConnect",
    description: "A dedicated student social media application built to boost campus engagement. Handles user authentication, real-time posts, and interactive community features.",
    techStack: ["Laravel", "Vue.js", "MySQL"],
    liveLink: "https://coopconnect-sabe.onrender.com/",
    githubLink: "#",
  }
];

export default function Projects() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl font-bold text-slate-800 tracking-tight">Featured Projects</h2>
        <div className="w-16 h-1 bg-teal-600 mt-4 mx-auto md:mx-0 rounded-full"></div>
      </div>

      {/* Grid Layout: 1 column on mobile, 2 columns on larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* React 'map' function looping through the projects array */}
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col"
          >
            <h3 className="text-2xl font-semibold text-slate-800 mb-3">{project.title}</h3>
            <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
              {project.description}
            </p>
            
            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.techStack.map((tech, index) => (
                <span 
                  key={index} 
                  className="bg-slate-50 text-slate-600 px-3 py-1 rounded-full text-sm font-medium border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-4 border-t border-slate-100 pt-6">
              <a href={project.liveLink} className="text-teal-700 font-medium hover:text-teal-800 transition-colors" target="_blank" 
                rel="noopener noreferrer">
                Live Site &rarr;
              </a>
              <a href={project.githubLink} className="text-slate-500 font-medium hover:text-slate-800 transition-colors" target="_blank" 
                rel="noopener noreferrer">
                GitHub Repository
              </a>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}