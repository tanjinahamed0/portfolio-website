import React from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './icons/BrandIcons';
import { Project } from '../types';
import { TechIcon } from './icons/TechIcon';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  return (
    <div className="group relative flex flex-col rounded-2xl bg-white dark:bg-[#0d1322] border border-slate-200/90 dark:border-slate-800/80 hover:border-sky-400 dark:hover:border-cyan-500/50 transition-all duration-300 overflow-hidden shadow-xs hover:shadow-xl dark:shadow-lg dark:hover:shadow-[0_12px_30px_-10px_rgba(0,242,254,0.18)]">
      
      {/* Top Preview Image Container */}
      <div className="relative p-3 pb-0">
        <div className="relative aspect-[16/9.5] w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/60 group-hover:border-slate-300 dark:group-hover:border-slate-700 transition-colors">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent dark:from-[#0d1322]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button
              onClick={() => onOpenModal(project)}
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-sky-500 dark:bg-cyan-400 text-white dark:text-slate-950 shadow-md flex items-center space-x-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all"
            >
              <span>Quick Preview</span>
              <ExternalLink size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex-1 flex flex-col p-4 pt-3.5 space-y-3">
        
        {/* Title */}
        <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-wide group-hover:text-sky-600 dark:group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap items-center gap-2">
          {project.techTags.map((tech) => (
            <div
              key={tech}
              className="inline-flex items-center space-x-1.5 text-xs text-slate-600 dark:text-slate-300 font-medium"
            >
              <TechIcon name={tech} size={15} className="w-3.5 h-3.5" />
              <span>{tech}</span>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Action Links */}
        <div className="pt-2 flex items-center space-x-3 text-xs font-semibold">
          <button
            onClick={() => onOpenModal(project)}
            className="text-sky-600 hover:text-sky-700 dark:text-cyan-400 dark:hover:text-cyan-300 hover:underline inline-flex items-center space-x-1 transition-colors"
          >
            <span>[Live Demo]</span>
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white inline-flex items-center space-x-1 transition-colors"
            >
              <span>[GitHub]</span>
              <GithubIcon size={12} className="inline ml-0.5 opacity-70" />
            </a>
          )}
        </div>

      </div>

    </div>
  );
};
