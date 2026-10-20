import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { TechIcon } from './icons/TechIcon';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="glow-orb-cyan right-0 top-1/3 w-[400px] h-[400px] opacity-25"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <div className="inline-block relative">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-widest uppercase">
              SKILLS & EXPERTISE
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-sky-500 to-purple-500 dark:from-cyan-400 dark:to-purple-500 mx-auto mt-2 rounded-full"></div>
          </div>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Technical proficiencies honed through production engineering, modern frameworks, and scalable architectures.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl bg-white dark:bg-[#0d1322] border border-slate-200/90 dark:border-slate-800/80 p-6 backdrop-blur-sm transition-all duration-300 shadow-xs hover:shadow-lg dark:shadow-none dark:hover:shadow-[0_8px_25px_-5px_rgba(0,242,254,0.18)] flex flex-col justify-between hover:border-sky-300 dark:hover:border-cyan-500/40"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800/60 mb-5">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white tracking-wide">
                  {category.title}
                </h3>
                <span className="text-xs font-mono text-sky-600 dark:text-cyan-400 bg-sky-50 dark:bg-cyan-950/60 px-2.5 py-0.5 rounded-full border border-sky-200 dark:border-cyan-800/40">
                  {category.skills.length} skills
                </span>
              </div>

              {/* Skills Grid within Category */}
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/item flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800/70 hover:border-sky-300 dark:hover:border-cyan-500/50 hover:bg-white dark:hover:bg-slate-800/60 shadow-2xs hover:shadow-xs transition-all duration-200 transform hover:-translate-y-1"
                  >
                    <div className="w-9 h-9 flex items-center justify-center transition-transform group-hover/item:scale-110">
                      <TechIcon name={skill.iconName} size={28} className="w-7 h-7 drop-shadow-xs" />
                    </div>
                    <span className="mt-2 text-xs font-medium text-slate-700 dark:text-slate-300 group-hover/item:text-slate-900 dark:group-hover/item:text-white text-center truncate max-w-full">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
