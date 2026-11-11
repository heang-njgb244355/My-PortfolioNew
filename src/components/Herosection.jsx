import React from 'react';

const Herosection = () => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16 flex items-center justify-center bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
            <span className="text-cyan-400 text-sm font-semibold tracking-wide">
              👋 Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Your Name</span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-400 font-medium">
            Full Stack Developer &amp; UI/UX Enthusiast
          </p>

          <p className="text-slate-400 max-w-xl text-base sm:text-lg leading-relaxed">
            I build responsive, performant, and visual web applications using modern technologies like React, Tailwind CSS, and Node.js.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
            <a
              href="#projects"
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold transition-all shadow-lg shadow-cyan-500/25 text-center"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3 rounded-lg border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 font-semibold transition-all text-center bg-slate-900/50"
            >
              Contact Me
            </a>
          </div>

          {/* Tech Stack Highlights */}
          <div className="pt-8 border-t border-slate-800/80">
            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-3">
              Tech Stack
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Git'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium bg-slate-900 text-slate-300 rounded-md border border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Profile Image / Visual Card */}
        <div className="flex-1 flex justify-center relative">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Glowing Backdrop Circle */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>

            {/* Main Avatar Container */}
            <div className="relative w-full h-full rounded-2xl bg-slate-900 border border-slate-800 p-3 shadow-2xl flex items-center justify-center overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz3ATZCehw5N5h__4bDLAwHjU2tTHx2gv-VbLkz49qcw&s=10"
                alt="Profile"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Herosection;