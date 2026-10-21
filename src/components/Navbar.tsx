import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  theme,
  onToggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-[#080c14]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 py-4 shadow-sm dark:shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <div
            className="flex items-center space-x-2 sm:space-x-2.5 cursor-pointer min-w-0 flex-shrink"
            onClick={() => handleClick('home')}
          >
            {/* Geometric accent prism wireframe */}
            <div className="relative w-5 h-5 flex-shrink-0 flex items-center justify-center">
              <span className="absolute inset-0 border border-sky-500 dark:border-cyan-400 rotate-45 transform"></span>
              <span className="w-1.5 h-1.5 bg-sky-500 dark:bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(14,165,233,0.8)] dark:shadow-[0_0_8px_#22d3ee]"></span>
            </div>
            <span className="text-slate-900 dark:text-white text-sm sm:text-lg font-bold tracking-wider hover:text-sky-600 dark:hover:text-cyan-400 transition-colors truncate">
              MD TANJIN AHAMED
            </span>
          </div>

          {/* Desktop Navigation Links & Controls */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                    className={`relative text-sm font-medium transition-colors duration-200 py-1 ${
                      isActive
                        ? 'text-sky-600 dark:text-cyan-400 font-semibold'
                        : 'text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-sky-500 to-purple-500 dark:from-cyan-400 dark:to-teal-300 shadow-[0_0_8px_rgba(14,165,233,0.5)] dark:shadow-[0_0_10px_#22d3ee] rounded-full animate-fade-in" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Segmented Pill Theme Switcher */}
            <div className="flex items-center bg-slate-200/80 dark:bg-slate-900/90 p-1 rounded-xl border border-slate-300/80 dark:border-slate-800 shadow-inner">
              <button
                onClick={() => theme !== 'light' && onToggleTheme()}
                className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  theme === 'light'
                    ? 'bg-white text-slate-900 shadow-xs scale-102'
                    : 'text-slate-500 hover:text-slate-800 dark:text-slate-400'
                }`}
                title="Switch to Light Mode"
              >
                <Sun size={13} className={theme === 'light' ? 'text-amber-500' : 'text-slate-400'} />
                <span>Light</span>
              </button>

              <button
                onClick={() => theme !== 'dark' && onToggleTheme()}
                className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all duration-200 ${
                  theme === 'dark'
                    ? 'bg-slate-800 text-cyan-300 shadow-xs border border-cyan-500/40 scale-102'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                title="Switch to Dark Mode"
              >
                <Moon size={13} className={theme === 'dark' ? 'text-cyan-400' : 'text-slate-400'} />
                <span>Dark</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} className="text-amber-400" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white/95 dark:bg-[#0b0f19]/95 rounded-2xl p-4 backdrop-blur-xl shadow-2xl border border-slate-200 dark:border-slate-800">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleClick(item.id)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-left text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-sky-50 dark:bg-cyan-500/10 text-sky-600 dark:text-cyan-400 border border-sky-200 dark:border-cyan-500/20'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-cyan-400 shadow-[0_0_6px_#22d3ee]"></span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
