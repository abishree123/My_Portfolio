import { Mail, Phone, Linkedin, Code, Download, ExternalLink } from "lucide-react";
import { personalInfo, socialLinks } from "../data/portfolio";

const contacts = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: <Mail size={20} />,
    color: "hover:border-blue-500/40 hover:text-blue-400",
    iconColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    icon: <Phone size={20} />,
    color: "hover:border-green-500/40 hover:text-green-400",
    iconColor: "text-green-400 bg-green-500/10 border-green-500/20",
  },
  {
    label: "LinkedIn",
    value: "abi-shree-r",
    href: socialLinks.linkedin,
    icon: <Linkedin size={20} />,
    color: "hover:border-cyan-500/40 hover:text-cyan-400",
    iconColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
];

const profiles = [
  { label: "GitHub", href: socialLinks.github },
  { label: "LeetCode", href: socialLinks.leetcode },
  { label: "HackerRank", href: socialLinks.hackerrank },
  { label: "CodeChef", href: socialLinks.codechef },
  { label: "SkillRack", href: socialLinks.skillrack },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">Let's Connect</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Get In Touch</h2>
          <div className="w-12 h-0.5 bg-cyan-400 mx-auto mt-4" />
          <p className="text-slate-400 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
            I'm currently looking for internship and project collaboration opportunities. Whether you have a question or
            just want to say hello, my inbox is always open!
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          {contacts.map((contact, idx) => (
            <a
              key={idx}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`group bg-slate-800/50 border border-slate-700/60 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 ${contact.color} hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20`}
            >
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-3 ${contact.iconColor}`}>
                {contact.icon}
              </div>
              <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">{contact.label}</p>
              <p className="text-white font-medium text-sm break-all">{contact.value}</p>
            </a>
          ))}
        </div>

        <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 mb-8">
          <p className="text-slate-400 text-sm text-center mb-4 font-medium">Other Profiles</p>
          <div className="flex flex-wrap justify-center gap-3">
            {profiles.map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 border border-slate-700 hover:border-cyan-500/40 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
              >
                <Code size={14} />
                {p.label}
                <ExternalLink size={11} />
              </a>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href={personalInfo.resumeFile}
            download="Abi_Shree_Resume.pdf"
            className="inline-flex items-center gap-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-0.5 text-sm"
          >
            <Download size={18} />
            Download My Resume
          </a>
        </div>
      </div>
    </section>
  );
}
