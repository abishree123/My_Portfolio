import { skills } from "../data/portfolio";

const categoryColors: Record<string, string> = {
  Programming: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  "Core Concepts": "bg-purple-500/10 text-purple-300 border-purple-500/20",
  "Web Technologies": "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  Databases: "bg-green-500/10 text-green-300 border-green-500/20",
  Tools: "bg-orange-500/10 text-orange-300 border-orange-500/20",
};

const categoryIcons: Record<string, string> = {
  Programming: "< />",
  "Core Concepts": "{ }",
  "Web Technologies": "</>",
  Databases: "DB",
  Tools: "⚙",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">What I Know</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills & Expertise</h2>
          <div className="w-12 h-0.5 bg-cyan-400 mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="group bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 font-mono text-xs font-bold group-hover:border-cyan-500/40 transition-colors">
                  {categoryIcons[category]}
                </div>
                <h3 className="text-white font-semibold text-sm">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs px-2.5 py-1 rounded-lg border font-medium ${categoryColors[category]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
