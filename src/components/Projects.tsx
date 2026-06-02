import { Code2, ExternalLink } from "lucide-react";
import { projects } from "../data/portfolio";

const projectColors = [
  { border: "hover:border-blue-500/40", tag: "bg-blue-500/10 text-blue-300 border-blue-500/20", icon: "from-blue-500/20 to-cyan-500/20 border-blue-500/20 text-blue-400" },
  { border: "hover:border-green-500/40", tag: "bg-green-500/10 text-green-300 border-green-500/20", icon: "from-green-500/20 to-emerald-500/20 border-green-500/20 text-green-400" },
  { border: "hover:border-orange-500/40", tag: "bg-orange-500/10 text-orange-300 border-orange-500/20", icon: "from-orange-500/20 to-amber-500/20 border-orange-500/20 text-orange-400" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">What I've Built</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
          <div className="w-12 h-0.5 bg-cyan-400 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const colors = projectColors[idx % projectColors.length];
            return (
              <div
                key={idx}
                className={`group bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6 flex flex-col transition-all duration-300 ${colors.border} hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${colors.icon} border flex items-center justify-center`}>
                    <Code2 size={20} />
                  </div>
                  <span className="text-xs text-slate-500 font-medium bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700/50">
                    {project.subtitle}
                  </span>
                </div>

                <h3 className="text-white font-bold text-base mb-3 leading-snug">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs px-2 py-0.5 rounded-md border font-medium ${colors.tag}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
