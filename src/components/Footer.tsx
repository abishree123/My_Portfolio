import { personalInfo } from "../data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-slate-600 text-sm">
          &copy; {currentYear} <span className="text-slate-500 font-medium">{personalInfo.name}</span>. All rights reserved.
        </p>
        <p className="text-slate-700 text-xs mt-1">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
