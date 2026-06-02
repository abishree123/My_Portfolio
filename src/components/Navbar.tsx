import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { personalInfo } from "../data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-slate-800/50" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <span className="text-xl font-bold text-white tracking-tight">
            <span className="text-cyan-400">A</span>bi <span className="text-cyan-400">S</span>hree
          </span>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-slate-400 hover:text-cyan-400 text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <a
              href={personalInfo.resumeFile}
              download="Abi_Shree_Resume.pdf"
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              <Download size={14} />
              Resume
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-400 hover:text-white transition-colors"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-950/98 backdrop-blur-md border-b border-slate-800">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left text-slate-300 hover:text-cyan-400 py-2 text-sm font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href={personalInfo.resumeFile}
              download="Abi_Shree_Resume.pdf"
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-semibold px-4 py-2.5 rounded-lg transition-all duration-200 w-fit mt-1"
            >
              <Download size={14} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
