import React, { useState } from 'react';

const Project = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: 'CyberPong Arcade Game',
      category: 'Python',
      description: 'An AI-powered retro 60 FPS arcade Pong game featuring custom ball physics, timed survival win conditions, and level progression.',
      fullDescription: 'CyberPong is a fully-featured, high-performance arcade game built from scratch in Python using PyQt6. It introduces custom collision algorithms, smooth 60 FPS rendering loops, dynamic difficulty scaling, and timed 50-second AI survival mechanics designed to test reflexes.',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
      tags: ['Python', 'PyQt6', 'AI Algorithm', 'Game Physics'],
      github: '#',
      demo: '#',
    },
    {
      id: 2,
      title: 'Oracle Database Manager',
      category: 'Database',
      description: 'A comprehensive desktop database application with profile image upload support, relational tables, and secure SQL parameter binding.',
      fullDescription: 'A robust database management desktop system developed with Java and Oracle SQL/PostgreSQL. It features complete CRUD workflow management, profile image binary handling, relational schema mapping, and secure PreparedStatement binding to completely neutralize SQL injection vulnerabilities.',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80',
      tags: ['Java', 'Oracle SQL', 'PostgreSQL', 'JDBC'],
      github: '#',
      demo: '#',
    },
    {
      id: 3,
      title: 'Developer Portfolio',
      category: 'Frontend',
      description: 'A fast, clean single-page responsive portfolio built with React and Tailwind CSS featuring dynamic tab navigation and interactive UI elements.',
      fullDescription: 'A modern, highly responsive developer portfolio web application. Crafted using React functional components and styled entirely with Tailwind CSS utility classes. Features dynamic state switching for tabs, clean modular layout architecture, and custom dark mode glassmorphism effects.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Tailwind CSS', 'JavaScript', 'Responsive UI'],
      github: '#',
      demo: '#',
    },
    {
      id: 4,
      title: 'Task & Workflow Tracker',
      category: 'Frontend',
      description: 'Interactive dashboard for managing daily programming tasks, milestone progress, and repository workflows with clean storage capabilities.',
      fullDescription: 'An intuitive task management and workflow dashboard built to track daily development sprints, coding milestones, and git version control checkpoints. Features local state persistence, categorized tag filtering, and clean visual progress bars.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'CSS Modules', 'Git', 'State Management'],
      github: '#',
      demo: '#',
    },
  ];

  const categories = ['All', 'Frontend', 'Python', 'Database'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-24 bg-slate-950 text-slate-100 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Top Content wrapper */}
        <div>
          {/* Header Badge & Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-3">
              <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                🚀 Featured Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              My Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Projects</span>
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
              Explore a selection of applications, tools, and games I have engineered recently.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all ${
                  filter === category
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col group"
              >
                {/* Project Cover Image with Hover Overlay */}
                <div className="relative w-full h-60 overflow-hidden bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Image Category Badge */}
                  <span className="absolute top-3 left-3 px-3 py-1 bg-slate-950/80 backdrop-blur-md text-cyan-400 border border-slate-800 text-xs font-bold rounded-lg z-10">
                    {project.category}
                  </span>

                  {/* Hover Overlay with Quick Action Buttons */}
                  <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-20">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-3 bg-slate-900 text-cyan-400 rounded-full hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-lg transform translate-y-2 group-hover:translate-y-0 duration-300"
                      title="View Full Details"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <a
                      href={project.github}
                      className="p-3 bg-slate-900 text-cyan-400 rounded-full hover:bg-cyan-500 hover:text-slate-950 transition-all shadow-lg transform translate-y-2 group-hover:translate-y-0 duration-300"
                      title="GitHub Code"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-slate-800 text-cyan-400 text-xs font-semibold rounded-md border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Details Button */}
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="w-full py-2.5 px-4 bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-slate-950 border border-cyan-500/30 text-sm font-semibold rounded-xl transition-all text-center shadow-sm"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* STATS BANNER */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 shadow-xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400">🚀 50+</div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">Projects Completed</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400">😊 25+</div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">Happy Clients</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400">⭐ 98%</div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">Client Satisfaction</div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400">💻 15K+</div>
            <div className="text-xs sm:text-sm text-slate-400 font-medium">Lines of Code</div>
          </div>
        </div>

        {/* HAVE A PROJECT IN MIND CALL TO ACTION */}
        <div className="text-center space-y-6 max-w-2xl mx-auto pt-6">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Have a project in mind?</h3>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            I'm always open to discussing new opportunities and interesting projects. Let's bring your ideas to life!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold transition-all shadow-lg shadow-cyan-500/25 text-center text-sm"
            >
              Start a Project
            </a>
            <a
              href="#projects"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 font-semibold transition-all text-center text-sm"
            >
              View All Projects
            </a>
          </div>
        </div>

      </div>

      {/* PROJECT DETAILS MODAL POPUP */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors z-10"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Header */}
            <div>
              <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-bold rounded-full">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                {selectedProject.title}
              </h3>
            </div>

            {/* Modal Large Image */}
            <div className="w-full h-64 sm:h-72 rounded-xl overflow-hidden bg-slate-800 border border-slate-700/50">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Full Description */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">Project Overview</h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {selectedProject.fullDescription}
              </p>
            </div>

            {/* Tags List */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-slate-800 text-cyan-400 text-xs font-semibold rounded-md border border-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
              <a
                href={selectedProject.github}
                className="flex-1 py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-center transition-colors border border-slate-700 text-sm"
              >
                GitHub Repository
              </a>
              <a
                href={selectedProject.demo}
                className="flex-1 py-3 px-4 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold rounded-xl text-center transition-colors text-sm shadow-md shadow-cyan-500/20"
              >
                Live Preview
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Project;