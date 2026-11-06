import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from './icons/BrandIcons';
import { Project } from '../types';
import { TechIcon } from './icons/TechIcon';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const featured = Boolean(project.featured);

  return (
    <div
      className={`group relative flex flex-col rounded-2xl bg-white dark:bg-[#0d1322] border border-slate-200/90 dark:border-slate-800/80 hover:border-sky-400 dark:hover:border-cyan-500/50 transition-all duration-300 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 dark:shadow-lg dark:hover:shadow-[0_12px_30px_-10px_rgba(0,242,254,0.18)] ${
        featured ? 'sm:col-span-2 lg:col-span-4 lg:flex-row' : ''
      }`}
    >

      {/* Top Preview Image Container */}
      <div className={`relative p-3 pb-0 ${featured ? 'lg:pb-3 lg:w-[56%] lg:flex-none' : ''}`}>
        <div
          className={`relative w-full overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/60 group-hover:border-slate-300 dark:group-hover:border-slate-700 transition-colors ${
            featured ? 'aspect-[16/9]' : 'aspect-[16/9.5]'
          }`}
        >
          <img
            src={project.image}
            alt={`${project.title} — live website screenshot`}
            className={`absolute inset-0 h-full w-full object-cover object-top filter contrast-105 transition-transform duration-500 ${
              featured ? 'group-hover:scale-[1.03]' : 'group-hover:scale-105'
            }`}
          />

          {featured && (
            <div className="absolute left-2.5 top-2.5 z-20 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-sky-500 to-purple-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
              <Sparkles size={11} />
              <span>Featured</span>
            </div>
          )}

          <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent dark:from-[#0d1322]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
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
      <div className={`flex flex-col space-y-3 ${featured ? 'p-5 sm:p-6 space-y-3.5 lg:flex-1 lg:justify-center' : 'flex-1 p-4 pt-3.5'}`}>

        {/* Category & Title */}
        <div className="space-y-2">
          <span className="inline-flex items-center text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-cyan-950/60 text-sky-700 dark:text-cyan-300 border border-sky-200 dark:border-cyan-800/40">
            {project.category}
          </span>
          <h3
            className={`font-bold text-slate-900 dark:text-white tracking-wide group-hover:text-sky-600 dark:group-hover:text-cyan-300 transition-colors ${
              featured ? 'text-lg sm:text-2xl' : 'text-base'
            }`}
          >
            {project.title}
          </h3>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap items-center gap-2">
          {project.techTags.map((tech) => (
            <div
              key={tech}
              className={`inline-flex items-center space-x-1.5 text-slate-600 dark:text-slate-300 font-medium ${
                featured ? 'text-[13px] space-x-2' : 'text-xs'
              }`}
            >
              <TechIcon name={tech} size={featured ? 16 : 15} className={featured ? 'w-4 h-4' : 'w-3.5 h-3.5'} />
              <span>{tech}</span>
            </div>
          ))}
        </div>

        {/* Description */}
        <p
          className={`text-slate-500 dark:text-slate-400 leading-relaxed ${featured ? 'text-sm max-w-2xl' : 'text-xs'}`}
        >
          {project.description}
        </p>

        {/* Action Links */}
        <div className={`flex items-center space-x-3 text-xs font-semibold ${featured ? 'pt-1' : 'pt-2'}`}>
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 hover:text-sky-700 dark:text-cyan-400 dark:hover:text-cyan-300 hover:underline inline-flex items-center space-x-1.5 transition-colors"
          >
            <span>[Live Demo]</span>
            <ExternalLink size={12} className="opacity-70" />
          </a>

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
