import React, { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl bg-white dark:bg-[#0d1322]/90 border border-slate-200/90 dark:border-slate-800/80 p-6 md:p-8 backdrop-blur-sm flex flex-col justify-between shadow-sm dark:shadow-xl">
      <div>
        {/* Title */}
        <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-100 dark:border-slate-800/60">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-wide uppercase">
            ABOUT ME
          </h3>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center space-x-1.5">
            <Terminal size={14} className="text-sky-500 dark:text-cyan-400" />
            <span>developer.tsx</span>
          </span>
        </div>

        {/* Bio Text */}
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal mb-6">
          {PERSONAL_INFO.aboutFull}
        </p>
      </div>

      {/* Code Editor Window Card */}
      <div className="rounded-xl overflow-hidden bg-[#0a0f1d] border border-slate-800 shadow-xl">
        {/* Window Title Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block"></span>
          </div>

          <button
            onClick={handleCopyCode}
            className="flex items-center space-x-1 text-slate-400 hover:text-cyan-400 text-xs transition-colors"
            title="Copy code"
          >
            {copied ? (
              <>
                <Check size={13} className="text-emerald-400" />
                <span className="text-emerald-400 font-medium">Copied</span>
              </>
            ) : (
              <>
                <Copy size={13} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Code Content */}
        <div className="p-4 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-slate-300">
          <p>
            <span className="text-purple-400 font-medium">import</span>{' '}
            <span className="text-cyan-300">techStack</span>{' '}
            <span className="text-purple-400 font-medium">from</span>{' '}
            <span className="text-amber-200">'skills'</span>;
          </p>
          <div className="h-2"></div>
          <p>
            <span className="text-purple-400 font-medium">export default function</span>{' '}
            <span className="text-blue-400 font-medium">Developer</span>() {'{'}
          </p>
          <p className="pl-4">
            <span className="text-purple-400 font-medium">return</span> (
          </p>
          <p className="pl-8">
            <span className="text-slate-400">&lt;</span>
            <span className="text-emerald-400 font-semibold">PassionDrivenDeveloper</span>{' '}
            <span className="text-cyan-300">tech</span>
            <span className="text-slate-400">={'{{'}</span>
            <span className="text-slate-200">techStack</span>
            <span className="text-slate-400">{'}}'}</span>
            <span className="text-slate-400"> /&gt;</span>
          </p>
          <p className="pl-4">);</p>
          <p>{'}'}</p>
        </div>
      </div>
    </div>
  );
};
