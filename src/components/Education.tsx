import { GraduationCap, Calendar } from "lucide-react";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">Academic Background</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Education</h2>
          <div className="w-12 h-0.5 bg-cyan-400 mx-auto mt-4" />
        </div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 md:-translate-x-px" />

          <div className="space-y-10">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-10 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-cyan-400 rounded-full border-2 border-slate-900 -translate-x-1.5 md:-translate-x-1.5 mt-7" />

                <div className={`ml-14 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20">
                    <div className={`flex items-center gap-2 mb-3 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                      <GraduationCap size={16} className="text-cyan-400 shrink-0" />
                      <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wide">
                        {idx === 0 ? "Current" : "Completed"}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-base mb-1">{edu.degree}</h3>
                    <p className="text-slate-400 text-sm mb-3">{edu.institution}</p>
                    <div className={`flex items-center gap-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="text-cyan-400 font-bold text-sm">{edu.score}</span>
                      <div className="flex items-center gap-1 text-slate-500 text-xs">
                        <Calendar size={12} />
                        {edu.year}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
