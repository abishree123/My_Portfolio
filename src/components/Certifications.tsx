import { BadgeCheck, Calendar } from "lucide-react";
import { certifications } from "../data/portfolio";

const issuerColors: Record<string, string> = {
  Udemy: "text-orange-400 bg-orange-500/10 border-orange-500/20",
  SkillRack: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  CodeChef: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  HackerRank: "text-green-400 bg-green-500/10 border-green-500/20",
};

export default function Certifications() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">Learning Journey</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Certifications</h2>
          <div className="w-12 h-0.5 bg-cyan-400 mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, idx) => {
            const color = issuerColors[cert.issuer] || "text-slate-400 bg-slate-700/20 border-slate-600/20";
            return (
              <div
                key={idx}
                className="group bg-slate-800/50 border border-slate-700/60 rounded-2xl p-5 hover:border-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/20 flex items-start gap-4"
              >
                <div className="mt-0.5">
                  <BadgeCheck size={20} className="text-cyan-400 shrink-0" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm mb-2 leading-snug">{cert.name}</h3>
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-xs px-2.5 py-0.5 rounded-full border font-semibold ${color}`}>
                      {cert.issuer}
                    </span>
                    <div className="flex items-center gap-1 text-slate-500 text-xs shrink-0">
                      <Calendar size={11} />
                      {cert.year}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
