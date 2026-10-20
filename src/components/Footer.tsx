import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-900 bg-slate-100/90 dark:bg-[#060910] py-8 text-xs text-slate-500 dark:text-slate-500 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Navigation / Quick Links */}
        <div className="flex items-center space-x-6">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-sky-600 dark:hover:text-cyan-400 transition-colors"
          >
            Home
          </button>
          
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-600 dark:hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>

          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-600 dark:hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>

          <button
            onClick={() => onNavigate('contact')}
            className="hover:text-sky-600 dark:hover:text-cyan-400 transition-colors"
          >
            Contact
          </button>
        </div>

        {/* Copyright notice */}
        <div>
          <span>{PERSONAL_INFO.copyright}</span>
        </div>

      </div>
    </footer>
  );
};
