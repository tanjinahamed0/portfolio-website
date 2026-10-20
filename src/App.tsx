import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Initialize theme from localStorage or default to dark (or light)
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'dark' || saved === 'light') return saved;
    return 'dark'; // Let's ensure dark mode is available and works flawlessly
  });

  // Apply theme class to both <html>, <body>, and document root reliably
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (theme === 'dark') {
      root.classList.add('dark');
      body.classList.add('dark');
      body.style.backgroundColor = '#080c14';
      body.style.color = '#f1f5f9';
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
      body.style.backgroundColor = '#f8fafc';
      body.style.color = '#1e293b';
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Observe active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen bg-[#f8fafc] text-slate-800 dark:bg-[#080c14] dark:text-slate-100 flex flex-col relative selection:bg-cyan-500 selection:text-slate-950 font-sans transition-colors duration-300 ${theme === 'dark' ? 'dark' : ''}`}>
      
      {/* Background Cyber Grid texture spanning the entire page */}
      <div className="fixed inset-0 bg-cyber-grid pointer-events-none z-0"></div>

      {/* Floating ambient glow accents */}
      <div className="fixed top-1/4 -right-40 w-96 h-96 glow-orb-purple pointer-events-none z-0"></div>
      <div className="fixed bottom-1/4 -left-40 w-96 h-96 glow-orb-cyan pointer-events-none z-0"></div>

      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10">
        
        {/* Hero Section */}
        <Hero onNavigate={handleNavigate} />

        {/* Projects Showcase Section */}
        <Projects onOpenModal={(p) => setSelectedProject(p)} />

        {/* Skills & Expertise Section */}
        <Skills />

        {/* About Me & Contact Dual Section */}
        <section id="about" className="relative py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {/* About Card with Live Code Snippet */}
              <About />

              {/* Get In Touch Interactive Form Card */}
              <Contact />
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Project Quick View Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
};

export default App;
