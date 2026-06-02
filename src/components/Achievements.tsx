import { Trophy, Code, Award, Star, Medal } from "lucide-react";
import { achievements } from "../data/portfolio";

const iconMap: Record<string, React.ReactNode> = {
  trophy: <Trophy size={22} />,
  code: <Code size={22} />,
  award: <Award size={22} />,
  star: <Star size={22} />,
  medal: <Medal size={22} />,
};

const cardStyles = [
  { bg: "from-yellow-500/10 to-orange-500/10", border: "border-yellow-500/20 hover:border-yellow-500/40", icon: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20" },
  { bg: "from-blue-500/10 to-cyan-500/10", border: "border-blue-500/20 hover:border-blue-500/40", icon: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
  { bg: "from-green-500/10 to-emerald-500/10", border: "border-green-500/20 hover:border-green-500/40", icon: "text-green-400 bg-green-500/10 border-green-500/20" },
  { bg: "from-cyan-500/10 to-teal-500/10", border: "border-cyan-500/20 hover:border-cyan-500/40", icon: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" },
  { bg: "from-amber-500/10 to-yellow-500/10", border: "border-amber-500/20 hover:border-amber-500/40", icon: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">Milestones</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Achievements</h2>
          <div className="w-12 h-0.5 bg-cyan-400 mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, idx) => {
            const style = cardStyles[idx % cardStyles.length];
            return (
              <div
                key={idx}
                className={`group relative bg-gradient-to-br ${style.bg} border ${style.border} rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30`}
              >
                <div className={`w-11 h-11 rounded-xl border ${style.icon} flex items-center justify-center mb-4`}>
                  {iconMap[item.icon]}
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
