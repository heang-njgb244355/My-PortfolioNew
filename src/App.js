import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Home from './page/Home';
import AboutPage from './page/AboutPage';
import Skillpage from './page/SkillPage';
import ProjectPage from './page/ProjectPage';
import ContactPage from './page/ContactPage';
import Footer from './components/Footer'; // បន្ថែម Import Footer មកជាមួយ

function App() {
  return (
    <Router>
      <div className="bg-slate-950 text-slate-100 min-h-screen selection:bg-cyan-500 selection:text-slate-950">
        {/* Navbar លេចចេញជារៀងរាល់ទំព័រ */}
        <Navbar />

        {/* កន្លែងកំណត់ Routes សម្រាប់ទំព័រនីមួយៗ */}
        <Routes>
          {/* ទំព័រដើម (Home Page) ដែលរួមបញ្ចូលគ្រប់ Section ទាំងអស់សម្រាប់ Scroll មើល */}
          <Route 
            path="/" 
            element={
              <main>
                <Herosection />
                <AboutPage />
                <ProjectPage />
                <Skillpage />
                <ContactPage />
              </main>
            } 
          />

          {/* ទំព័រ About ដាច់ដោយឡែក */}
          <Route 
            path="/home/about" 
            element={
              <div className="pt-20">
                <AboutPage />
              </div>
            } 
          />

          {/* បើអ្នកចង់បន្ថែមទំព័រដាច់ដោយឡែកផ្សេងទៀតសម្រាប់ Projects ឬ Skills អ្នកអាចដាក់ទីនេះបាន */}
          <Route 
            path="/home/projects" 
            element={
              <div className="pt-20">
                <ProjectPage />
              </div>
            } 
          />
          <Route 
            path="/home/skills" 
            element={
              <div className="pt-20">
                <Skillpage />
              </div>
            } 
          />
          <Route 
            path="/home/contact" 
            element={
              <div className="pt-20">
                <ContactPage />
              </div>
            } 
          />
        </Routes>

        {/* Footer លេចចេញជារៀងរាល់ទំព័រ */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;