import React, { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const skills = [
    { name: 'React', level: 95, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 90, color: 'bg-amber-500' },
    { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
    { name: 'Tailwind CSS', level: 92, color: 'bg-teal-400' },
    { name: 'Next.js', level: 88, color: 'bg-slate-700' },
    { name: 'UI/UX Design', level: 80, color: 'bg-purple-500' },
    { name: 'Node.js', level: 75, color: 'bg-emerald-500' },
    { name: 'Git', level: 90, color: 'bg-orange-500' },
  ];

  const techBadges = [
    'HTML5', 'CSS3', 'SASS', 'Redux',
    'GraphQL', 'Figma', 'Jest', 'Webpack'
  ];

  const experiences = [
    {
      period: '2022 - Present',
      role: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      description: 'Led the development of responsive web applications using React and Tailwind CSS. Managed a team of 4 junior developers.'
    },
    {
      period: '2020 - 2022',
      role: 'Full Stack Web Developer',
      company: 'Digital Creative Agency',
      description: 'Built RESTful APIs in Node.js and scalable React components for multiple client startup projects.'
    }
  ];

  const education = [
    {
      period: '2016 - 2020',
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Stanford University',
      description: 'Specialized in Web Technologies, Software Engineering, and Human-Computer Interaction.'
    },
    {
      period: '2021',
      degree: 'Full Stack Web Development Certification',
      institution: 'Online Tech Academy',
      description: 'Completed intensive training in modern frontend frameworks and database management.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 text-slate-100 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Badge & Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-3">
            <span className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              👤 About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Get to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Know Me</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
            I'm a passionate developer who loves creating digital experiences that make a difference. Let me share my journey and skills with you.
          </p>
        </div>

        {/* Top Grid: Photo/Card + Who Am I? */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-stretch">
          
          {/* Photo Box */}
          <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[260px]">
            <div className="w-24 h-24 bg-cyan-500/20 border border-cyan-500/40 rounded-2xl flex items-center justify-center text-4xl mb-3 shadow-lg shadow-cyan-500/10">
              💻
            </div>
            <span className="text-slate-400 text-sm font-medium">Your Photo Here</span>
          </div>

          {/* Who Am I Card */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-center space-y-4">
            <h3 className="text-2xl font-bold text-white">Who Am I?</h3>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              I'm a passionate Frontend Developer with over 3 years of experience creating modern, responsive web applications. I specialize in React.js and have a strong eye for design and user experience.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              My journey in web development started during my university years, and since then I've worked with various startups and established companies to bring their digital visions to life.
            </p>
          </div>

        </div>

        {/* Bottom Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Personal Info */}
          <div className="lg:col-span-5 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <h3 className="text-2xl font-bold text-white">Personal Information</h3>
            
            <div className="space-y-4 text-sm sm:text-base">
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <span className="text-slate-400">Full Name:</span>
                <span className="text-slate-100 font-semibold">John Doe</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <span className="text-slate-400">Age:</span>
                <span className="text-slate-100 font-semibold">28 Years</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <span className="text-slate-400">Location:</span>
                <span className="text-slate-100 font-semibold">San Francisco, CA</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <span className="text-slate-400">Email:</span>
                <span className="text-cyan-400 font-semibold">john.doe@example.com</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <span className="text-slate-400">Phone:</span>
                <span className="text-slate-100 font-semibold">+1 (555) 123-4567</span>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-slate-400">Freelance:</span>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-bold rounded-full">
                  Available
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Tabs Container */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tab Navigation Bar */}
            <div className="flex bg-slate-900 border border-slate-800 p-1.5 rounded-xl gap-2">
              <button
                onClick={() => setActiveTab('skills')}
                className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                  activeTab === 'skills'
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                Skills
              </button>
              <button
                onClick={() => setActiveTab('experience')}
                className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                  activeTab === 'experience'
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                  activeTab === 'education'
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                Education
              </button>
            </div>

            {/* Tab Content Box */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 min-h-[420px]">
              
              {/* SKILLS TAB */}
              {activeTab === 'skills' && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
                  <div className="space-y-5">
                    {skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center text-sm font-medium">
                          <span className="text-slate-200">{skill.name}</span>
                          <span className="text-cyan-400 font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${skill.color} rounded-full transition-all duration-500`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-slate-800">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {techBadges.map((badge) => (
                        <div
                          key={badge}
                          className="bg-slate-800/60 border border-slate-700/50 text-slate-300 font-medium text-xs text-center py-2.5 px-3 rounded-lg"
                        >
                          {badge}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* EXPERIENCE TAB */}
              {activeTab === 'experience' && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="text-2xl font-bold text-white mb-6">Work Experience</h3>
                  <div className="relative border-l-2 border-slate-800 pl-6 space-y-8 ml-2">
                    {experiences.map((exp, index) => (
                      <div key={index} className="relative">
                        <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 bg-cyan-400 rounded-full border-4 border-slate-900"></span>
                        <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-bold rounded-full">
                          {exp.period}
                        </span>
                        <h4 className="text-lg font-bold text-white mt-2">{exp.role}</h4>
                        <p className="text-cyan-400 text-sm font-medium">{exp.company}</p>
                        <p className="text-slate-400 text-sm mt-2 leading-relaxed">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* EDUCATION TAB */}
              {activeTab === 'education' && (
                <div className="space-y-6 animate-fadeIn">
                  <h3 className="text-2xl font-bold text-white mb-6">Education &amp; Certifications</h3>
                  <div className="relative border-l-2 border-slate-800 pl-6 space-y-8 ml-2">
                    {education.map((edu, index) => (
                      <div key={index} className="relative">
                        <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 bg-cyan-400 rounded-full border-4 border-slate-900"></span>
                        <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs font-bold rounded-full">
                          {edu.period}
                        </span>
                        <h4 className="text-lg font-bold text-white mt-2">{edu.degree}</h4>
                        <p className="text-cyan-400 text-sm font-medium">{edu.institution}</p>
                        <p className="text-slate-400 text-sm mt-2 leading-relaxed">{edu.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;