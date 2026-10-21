import React from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

interface ProjectsProps {
  onOpenModal: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenModal }) => {
  return (
    <section id="projects" className="relative py-16 sm:py-20 overflow-hidden">
      {/* Background ambient lighting — clamped within section */}
      <div className="glow-orb-purple left-0 top-1/2 w-72 sm:w-96 h-72 sm:h-96 opacity-25 -translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-widest uppercase">
              PROJECTS
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-sky-500 to-purple-500 dark:from-cyan-400 dark:to-purple-500 mx-auto mt-2 rounded-full"></div>
          </div>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            A selection of recent applications spanning full-stack architectures, real-time data synchronization, and interactive interfaces.
          </p>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={onOpenModal}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
