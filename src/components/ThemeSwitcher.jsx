import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FaPalette } from "react-icons/fa";

export default function ThemeSwitcher() {
  const { currentTheme, setCurrentTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef(null);

  // Close panel when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("pointerdown", handleClickOutside);
    }
    return () => document.removeEventListener("pointerdown", handleClickOutside);
  }, [isOpen]);

  return (
    <div ref={panelRef} className="fixed bottom-6 right-6 z-[9900] hidden md:block">
      {/* Theme Picker Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="absolute bottom-16 right-0 bg-surface/90 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-2xl w-48"
          >
            <p className="text-xs font-bold text-muted uppercase tracking-wider mb-2 px-1">Theme</p>
            <div className="flex flex-col gap-1 max-h-[50vh] overflow-y-auto">
              {Object.entries(themes).map(([key, theme]) => {
                const isActive = currentTheme === key;
                return (
                  <button
                    key={key}
                    onClick={() => {
                      setCurrentTheme(key);
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-3 px-3 py-2 rounded-xl text-left text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-primary/20 text-primary"
                        : "text-text hover:bg-white/5"
                    }`}
                  >
                    {/* Color Preview Dot */}
                    <span
                      className="w-4 h-4 rounded-full border border-white/20 flex-shrink-0"
                      style={{
                        background: `rgb(${theme.colors.primary})`,
                      }}
                    />
                    {theme.name}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-12 h-12 bg-primary text-white rounded-full shadow-lg shadow-primary/30 flex items-center justify-center hover:shadow-xl hover:shadow-primary/40 transition-shadow"
        aria-label="Change theme"
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <FaPalette className="text-lg" />
        </motion.div>
      </motion.button>
    </div>
  );
}
