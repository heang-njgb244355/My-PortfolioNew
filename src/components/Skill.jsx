import React, { useState } from 'react';

const Skill = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const skillsData = [
    { name: 'React', level: 95, category: 'Frontend', color: 'bg-cyan-400' },
    { name: 'JavaScript (ES6+)', level: 90, category: 'Frontend', color: 'bg-amber-400' },
    { name: 'Tailwind CSS', level: 92, category: 'Frontend', color: 'bg-teal-400' },
    { name: 'TypeScript', level: 85, category: 'Frontend', color: 'bg-blue-500' },
    { name: 'HTML5 & CSS3', level: 98, category: 'Frontend', color: 'bg-orange-500' },
    
    { name: 'Node.js', level: 78, category: 'Backend', color: 'bg-emerald-500' },
    { name: 'Java & OOP', level: 85, category: 'Backend', color: 'bg-red-500' },
    { name: 'Python', level: 82, category: 'Backend', color: 'bg-yellow-500' },
    
    { name: 'Oracle SQL & PostgreSQL', level: 88, category: 'Database', color: 'bg-indigo-500' },
    { name: 'JDBC & PreparedStatement', level: 85, category: 'Database', color: 'bg-blue-400' },
    
    { name: 'Git & GitHub', level: 90, category: 'Tools', color: 'bg-orange-600' },
    { name: 'VS Code & IntelliJ', level: 92, category: 'Tools', color: 'bg-blue-600' },
    { name: 'PyQt6', level: 80, category: 'Tools', color: 'bg-green-500' },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];

  const certifications = [
    {
      title: 'React Developer',
      issuer: 'Meta',
      year: '2023',
      iconBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      link: '#'
    },
    {
      title: 'Frontend Expert',
      issuer: 'Google',
      year: '2023',
      iconBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
      link: '#'
    },
    {
      title: 'JavaScript Master',
      issuer: 'MCN',
      year: '2022',
      iconBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
      link: '#'
    },
    {
      title: 'Cloud Practitioner',
      issuer: 'AWS',
      year: '2022',
      iconBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      link: '#'
    },
  ];

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-slate-950 text-slate-100 border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* TOP SECTION: Skills & Expertise */}
        <div className="space-y-12 animate-fadeIn">
          {/* Section Heading */}
          <div className="text-center transform transition-all duration-700 hover:scale-[1.01]">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-3 animate-pulse">
              <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                ⚡ Technical Expertise
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Skills</span>
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
              A comprehensive breakdown of the programming languages, frameworks, databases, and developer tools I work with.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 ${
                  activeCategory === category
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30 scale-105'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Skills Grid with smooth transition */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl backdrop-blur-sm">
            {filteredSkills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="space-y-2 p-4 rounded-xl bg-slate-950/40 border border-slate-800/60 hover:border-cyan-500/40 transition-all duration-300 transform hover:-translate-y-1"
                style={{ animation: `fadeIn 0.5s ease-in-out ${index * 0.05}s` }}
              >
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-slate-200 font-semibold">{skill.name}</span>
                  <span className="text-cyan-400 font-bold">{skill.level}%</span>
                </div>
                
                {/* Progress Bar Container with fill animation */}
                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5">
                  <div
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-sm`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MIDDLE SECTION: Certifications & Badges */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Certifications &amp; Badges</h3>
            <p className="mt-2 text-slate-400 text-sm sm:text-base">
              Official recognition of my skills and expertise from leading platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between space-y-4 hover:border-cyan-500/50 hover:shadow-cyan-500/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center font-bold text-lg ${cert.iconBg} transition-transform duration-300 hover:rotate-12`}>
                    📜
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-slate-800 text-slate-300 rounded-md border border-slate-700">
                    {cert.year}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white">{cert.title}</h4>
                  <p className="text-slate-400 text-sm mt-1">{cert.issuer}</p>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  <a
                    href={cert.link}
                    className="inline-flex items-center justify-center w-full py-2 px-4 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 text-xs font-semibold rounded-lg transition-all duration-300 border border-slate-700 shadow-sm"
                  >
                    View Credential
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM BANNER: Ready to Leverage These Skills? */}
        <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden transform transition-transform duration-500 hover:scale-[1.01]">
          {/* Background glowing ambient shape */}
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
              Ready to Leverage These Skills?
            </h3>
            <p className="text-slate-100 text-sm sm:text-base font-medium leading-relaxed opacity-90">
              I'm eager to apply my expertise to your next project. Let's discuss how I can contribute to your success.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-cyan-400 font-bold transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg text-center text-sm border border-slate-800"
              >
                Let's Work Together
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition-all duration-300 transform hover:-translate-y-0.5 text-center text-sm border border-white/20 backdrop-blur-md"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skill;