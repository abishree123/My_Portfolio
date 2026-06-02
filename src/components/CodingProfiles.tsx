import { ExternalLink, Code } from "lucide-react";
import { codingProfiles } from "../data/portfolio";

export default function CodingProfiles() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">Problem Solving</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Coding Profiles</h2>
          <div className="w-12 h-0.5 bg-cyan-400 mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {codingProfiles.map((profile, idx) => (
            <a
              key={idx}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40 block overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${profile.color} flex items-center justify-center mb-4`}>
                <Code size={22} className="text-white" />
              </div>

              <h3 className="text-white font-bold text-base mb-1">{profile.platform}</h3>
              <p className="text-slate-400 text-sm mb-4 leading-snug">{profile.stat}</p>

              <div className="flex items-center gap-1.5 text-slate-500 group-hover:text-cyan-400 transition-colors text-xs font-medium">
                View Profile <ExternalLink size={11} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
