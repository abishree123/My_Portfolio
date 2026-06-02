import { Download, Mail, Phone, ChevronDown, Linkedin, Code } from "lucide-react";
import { personalInfo, socialLinks } from "../data/portfolio";

export default function Hero() {
  const scrollDown = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 text-cyan-400 text-xs font-medium mb-6 tracking-wider uppercase">
          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
          Open to Opportunities
        </div>

        {/* 🔥 PROFILE IMAGE + NAME */}
        <div className="flex flex-col items-center justify-center">
          <img
            src={personalInfo.photo ?? "/img/profile.jpg"}
            alt={`${personalInfo.name} profile photo`}
            className="w-40 h-40 rounded-full object-cover border-4 border-cyan-400 shadow-lg mb-6"
          />
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight leading-tight">
            {personalInfo.name.split(" ")[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">{personalInfo.name.split(" ").slice(1).join(" ")}</span>
          </h1>

        </div>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-400 mb-3 font-medium">
          B.E Computer Science & Engineering
        </p>

        {/* Description */}
       <p className="text-slate-500 mb-8 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
  Interested in full stack development and building web applications.
  Familiar with the MERN stack and continuously improving problem-solving skills.
</p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <a
            href={personalInfo.resumeFile}
            download="Abi_Shree_Resume.pdf"
            className="group flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-0.5"
          >
            <Download size={17} className="group-hover:animate-bounce" />
            Download CV
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 border border-slate-700 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 font-medium px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <Mail size={17} />
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-5">
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors duration-200 text-sm"
          >
            <Linkedin size={18} />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>

          <div className="w-px h-4 bg-slate-700" />

          <a
            href={socialLinks.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-500 hover:text-orange-400 transition-colors duration-200 text-sm"
          >
            <Code size={18} />
            <span className="hidden sm:inline">LeetCode</span>
          </a>

          <div className="w-px h-4 bg-slate-700" />

          <a
            href={socialLinks.hackerrank}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-500 hover:text-green-400 transition-colors duration-200 text-sm"
          >
            <Code size={18} />
            <span className="hidden sm:inline">HackerRank</span>
          </a>

          <div className="w-px h-4 bg-slate-700" />

          <a
            href={`tel:${personalInfo.phone}`}
            className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors duration-200 text-sm"
          >
            <Phone size={17} />
            <span className="hidden sm:inline">{personalInfo.phone}</span>
          </a>
        </div>
      </div>

      {/* Scroll Button */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-cyan-400 transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}