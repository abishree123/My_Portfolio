import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { personalInfo } from "../data/portfolio";

const stats = [
  { label: "CGPA", value: "8.08" },
  { label: "Problems Solved", value: "1500+" },
  { label: "Projects Built", value: "3+" },
  { label: "Certifications", value: "5+" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">Who I Am</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
          <div className="w-12 h-0.5 bg-cyan-400 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="w-48 h-48 mx-auto md:mx-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/20 flex items-center justify-center">
                <GraduationCap size={80} className="text-cyan-400/60" />
              </div>
              <div className="absolute -bottom-3 -right-3 md:-right-3 w-24 h-24 rounded-xl bg-gradient-to-br from-blue-500/30 to-cyan-500/30 border border-blue-500/20 hidden md:block" />
            </div>
          </div>

          <div>
         <h3 className="text-2xl font-bold text-white mb-4">
  Aspiring Full Stack Developer
</h3>

<p className="text-slate-400 leading-relaxed mb-6">
  I am a passionate B.E Computer Science and Engineering student at Sri Eshwar College of Engineering, currently in my third semester. I have a strong interest in building scalable and user-friendly web applications, with a focus on the MERN stack (MongoDB, Express.js, React.js, Node.js).
</p>

<p className="text-slate-400 leading-relaxed mb-6">
  I have hands-on experience through academic projects and internships, where I developed real-world applications such as portfolio websites, tracking systems, and full-stack platforms. I enjoy turning ideas into practical solutions.
</p>

<p className="text-slate-400 leading-relaxed mb-8">
  I am also actively involved in competitive programming and problem-solving, having solved 1500+ problems across platforms like LeetCode, HackerRank, CodeChef, and SkillRack. I continuously strive to improve my skills and stay updated with modern technologies.
</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400">
                <Mail size={16} className="text-cyan-400 shrink-0" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-400 transition-colors text-sm">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Phone size={16} className="text-cyan-400 shrink-0" />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-cyan-400 transition-colors text-sm">
                  {personalInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin size={16} className="text-cyan-400 shrink-0" />
                <span className="text-sm">Coimbatore, Tamil Nadu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 text-center hover:border-cyan-500/30 transition-colors duration-300"
            >
              <p className="text-3xl font-bold text-cyan-400 mb-1">{stat.value}</p>
              <p className="text-slate-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
