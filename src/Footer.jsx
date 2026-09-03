import React from "react";

function Footer() {
  return (
    <footer className="bg-surface py-8 text-center border-t border-white/5 mx-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted text-sm">
          &copy; {new Date().getFullYear()} Saood Ghare. Built with React &amp; Tailwind.
        </p>
        <p className="text-muted text-xs">
          Designed &amp; Developed with ❤️
        </p>
      </div>
    </footer>
  );
}

export default Footer;
