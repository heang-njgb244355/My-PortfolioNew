import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-between">
          
          {/* Brand Logo / Name & Bio */}
          <div className="space-y-3">
            <a href="#home" className="text-xl font-bold tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors">
              &lt;HeangDev /&gt;
            </a>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              Building clean, responsive, and high-performance digital experiences from Phnom Penh, Cambodia.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col space-y-2 text-sm font-medium">
              <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Contact & Social Info */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider">Get in Touch</h4>
            <p className="text-sm text-slate-400">
              📍 Phnom Penh, Cambodia
            </p>
            <p className="text-sm text-slate-400">
              📢 Telegram: <a href="https://t.me/student_score_bot" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">@Telegram Bot</a>
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              <a
                href="https://t.me/thymuoyhak"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 rounded-xl border border-slate-800 transition-all"
                aria-label="Telegram"
              >
                📢
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 rounded-xl border border-slate-800 transition-all"
                aria-label="GitHub"
              >
                💻
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 rounded-xl border border-slate-800 transition-all"
                aria-label="LinkedIn"
              >
                👔
              </a>
            </div>
          </div>

        </div>

        {/* Copyright & Divider */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Heang Dev. All rights reserved.</p>
          <p>Designed &amp; Developed with React &amp; Tailwind CSS</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;