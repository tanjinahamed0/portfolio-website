import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle } from 'lucide-react';
import { GithubIcon } from './icons/BrandIcons';
import { Project } from '../types';
import { TechIcon } from './icons/TechIcon';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fade-in">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 dark:bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-[#0d1322] border border-slate-200 dark:border-slate-700/80 shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]">
        
        {/* Header bar with traffic lights and close button */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#090d16]/90">
          <div className="flex items-center space-x-2 min-w-0">
            <span className="w-3 h-3 rounded-full bg-rose-500 inline-block flex-shrink-0"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block flex-shrink-0"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block flex-shrink-0"></span>
            <span className="ml-2 sm:ml-3 text-xs font-mono text-slate-500 dark:text-slate-400 truncate">preview://{project.id}.app</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors flex-shrink-0 ml-2"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-8 space-y-6">
          {/* Main Visual Preview */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 shadow-md">
            <img
              src={project.image}
              alt={project.title}
              className="w-full max-h-72 object-cover object-top"
            />
          </div>

          {/* Title & Tagline */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-wide">
                {project.title}
              </h3>
              {project.details?.role && (
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-sky-50 dark:bg-cyan-950/60 text-sky-700 dark:text-cyan-300 border border-sky-200 dark:border-cyan-800/40">
                  {project.details.role}
                </span>
              )}
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              {project.details?.overview || project.description}
            </p>
          </div>

          {/* Tech Badges */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techTags.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-200"
                >
                  <TechIcon name={tech} size={16} className="w-4 h-4" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features Bullet points */}
          {project.details?.features && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                Key Engineering Highlights
              </h4>
              <ul className="space-y-2">
                {project.details.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle size={15} className="text-sky-500 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Metrics */}
          {project.details?.metrics && (
            <div className="p-3.5 rounded-xl bg-sky-50 dark:bg-cyan-950/20 border border-sky-200 dark:border-cyan-800/30 text-xs text-sky-800 dark:text-cyan-300 font-mono flex items-center justify-between">
              <span>Benchmark / Metric:</span>
              <span className="font-semibold text-slate-900 dark:text-white">{project.details.metrics}</span>
            </div>
          )}
        </div>

        {/* Modal Action Footer */}
        <div className="px-4 sm:px-8 py-4 bg-slate-50 dark:bg-[#090d16] border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-end gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-colors shadow-xs"
            >
              <GithubIcon size={14} />
              <span>View Source</span>
            </a>
          )}

          <button
            onClick={() => {
              alert(`Launching live simulation for: ${project.title}`);
            }}
            className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-purple-600 hover:opacity-90 shadow-md transition-all"
          >
            <span>Launch Live Demo</span>
            <ExternalLink size={14} />
          </button>
        </div>

      </div>
    </div>
  );
};
