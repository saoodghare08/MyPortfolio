import React from "react";
import { useTheme } from "./context/ThemeContext";

function Footer() {
  const { currentTheme, setCurrentTheme, themes } = useTheme();

  return (
    <footer className="bg-surface py-8 text-center border-t border-white/5 mx-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted text-sm">
          &copy; {new Date().getFullYear()} Saood Ghare. Built with React & Tailwind.
        </p>

        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-muted">Theme:</span>
          <select
            value={currentTheme}
            onChange={(e) => setCurrentTheme(e.target.value)}
            className="px-3 py-1.5 rounded-lg bg-background border border-white/10 text-text text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm cursor-pointer"
          >
            {Object.entries(themes).map(([key, theme]) => (
              <option key={key} value={key}>
                {theme.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
