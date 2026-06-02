import { Briefcase, Calendar, ExternalLink } from "lucide-react";
import { internship } from "../data/portfolio";

export default function Internship() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">Work Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Internship</h2>
          <div className="w-12 h-0.5 bg-cyan-400 mx-auto mt-4" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center">
                  <Briefcase size={22} className="text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{internship.company}</h3>
                  <p className="text-cyan-400 text-sm font-medium">{internship.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-slate-500 text-sm bg-slate-800/80 px-3 py-1.5 rounded-lg self-start">
                <Calendar size={13} />
                {internship.duration}
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed mb-6">{internship.description}</p>

            <div className="flex flex-wrap gap-2">
              {["ReactJS", "NodeJS", "Express", "MongoDB", "JWT Auth", "REST API", "Cloud Deploy"].map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
