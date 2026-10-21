import React from 'react';
import { ArrowRight, MessageSquareCode } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28 sm:pt-32 pb-16 sm:pb-20 flex items-center overflow-hidden">
      {/* Background ambient lighting — stay within bounds */}
      <div className="glow-orb-cyan top-16 left-0 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] opacity-40 -translate-x-1/3"></div>
      <div className="glow-orb-purple top-32 right-0 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] opacity-40 translate-x-1/4"></div>
      
      {/* Micro dot matrix decorations */}
      <div className="absolute top-24 left-4 sm:left-10 grid grid-cols-5 gap-2 opacity-30 pointer-events-none hidden sm:grid">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="w-1 h-1 bg-sky-500 dark:bg-cyan-400 rounded-full" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Intro & Headlines */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline / Subtitle */}
            <div className="inline-flex items-center space-x-2 text-sm sm:text-base font-medium">
              <span className="text-slate-500 dark:text-slate-400">Welcome:</span>
              <span className="text-sky-600 dark:text-cyan-400 font-semibold tracking-wide drop-shadow-xs dark:drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]">
                {PERSONAL_INFO.name}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              FULL-STACK WEB <br className="hidden sm:inline" />
              <span>DEVELOPER.</span>
            </h1>

            {/* Secondary subtitle in parentheses */}
            <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 font-normal tracking-wide">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate('projects')}
                className="group relative inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-white font-semibold dark:text-slate-950 dark:font-bold bg-gradient-to-r from-sky-500 via-cyan-500 to-purple-600 dark:from-[#00f2fe] dark:via-[#38bdf8] dark:to-[#9333ea] hover:opacity-95 shadow-[0_4px_20px_rgba(14,165,233,0.35)] dark:shadow-[0_0_25px_rgba(0,242,254,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base"
              >
                <span>View Projects</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-medium text-slate-800 bg-white border border-slate-300 hover:border-sky-500 hover:text-sky-600 shadow-xs dark:text-slate-200 dark:bg-slate-900/80 dark:border-slate-700/80 dark:hover:border-cyan-400 dark:hover:text-cyan-300 backdrop-blur-md transition-all duration-200 transform hover:-translate-y-0.5 text-sm sm:text-base"
              >
                <MessageSquareCode className="mr-2 w-4 h-4 text-sky-500 dark:text-cyan-400" />
                <span>Get In Touch</span>
              </button>
            </div>

            {/* Overlapping code snippet decoration */}
            <div className="hidden md:block pt-4">
              <div className="relative max-w-md bg-white dark:bg-[#0d1322] border border-slate-200 dark:border-slate-800 rounded-xl p-3.5 font-mono text-xs text-slate-700 dark:text-slate-300 shadow-md dark:shadow-xl backdrop-blur-sm">
                <div className="flex items-center space-x-1.5 pb-2 mb-2 border-b border-slate-100 dark:border-slate-800 text-slate-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  <span className="text-[10px] pl-2 text-slate-400 dark:text-slate-400">developer.config.ts</span>
                </div>
                <p className="text-purple-600 dark:text-purple-400">
                  const <span className="text-sky-600 dark:text-cyan-300">architect</span> = {'{'}
                </p>
                <p className="pl-4 text-slate-700 dark:text-slate-300">
                  stack: <span className="text-emerald-600 dark:text-emerald-300">['React', 'TypeScript', 'Node.js', 'Next.js']</span>,
                </p>
                <p className="pl-4 text-slate-700 dark:text-slate-300">
                  focus: <span className="text-amber-600 dark:text-amber-200">'Clean architecture & aesthetic experiences'</span>
                </p>
                <p className="text-purple-600 dark:text-purple-400">{'};'}</p>
              </div>
            </div>

          </div>

          {/* Right Column - Developer Frame with Diagonal Aesthetic Gradient */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            
            {/* Visual Frame Container */}
            <div className="relative w-full max-w-[420px] aspect-[4/4] sm:aspect-[4/3.9] rounded-3xl overflow-hidden p-1.5 bg-gradient-to-br from-sky-400/30 via-purple-500/30 to-slate-200 dark:from-cyan-500/50 dark:via-purple-600/50 dark:to-slate-800/40 shadow-xl dark:shadow-[0_0_35px_rgba(0,242,254,0.15)] group">
              
              {/* Inner bezel */}
              <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-white dark:bg-slate-950">
                
                {/* Diagonal violet slice accent overlay */}
                <div 
                  className="absolute inset-0 z-10 pointer-events-none opacity-20 dark:opacity-30 mix-blend-multiply dark:mix-blend-overlay"
                  style={{
                    background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.6) 0%, rgba(6, 182, 212, 0.4) 45%, transparent 75%)'
                  }}
                />

                {/* Developer portrait image */}
                <img
                  src="/assets/my-photo.jpg"
                  alt="MD TANJIN AHAMED"
                  className="w-full h-full object-cover object-[center_20%] filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient overlay at bottom of photo */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent dark:from-[#080c14] dark:via-[#080c14]/60 z-10"></div>
                
                {/* Live status badge */}
                <div className="absolute top-4 right-4 z-20 flex items-center space-x-2 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 shadow-md text-xs font-medium text-slate-800 dark:text-slate-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Available for Hire</span>
                </div>
              </div>
            </div>

            {/* Caption underneath the photo */}
            <div className="mt-5 max-w-[420px] text-center lg:text-left">
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Decorative dot matrix on right — hidden on mobile */}
            <div className="absolute -bottom-6 -right-2 sm:-right-6 grid grid-cols-4 gap-2 opacity-25 pointer-events-none hidden sm:grid">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-purple-500 dark:bg-purple-400 rounded-full" />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
