import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-6 h-6", size = 24 }) => {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  switch (normalized) {
    case 'javascript':
    case 'js':
      return (
        <svg viewBox="0 0 32 32" width={size} height={size} className={className} fill="none">
          <rect width="32" height="32" rx="4" fill="#F7DF1E" />
          <path d="M19.5 24.5C20.8 24.5 21.8 23.8 22.3 22.7L20.2 21.4C19.9 21.9 19.5 22.2 18.9 22.2C18.1 22.2 17.6 21.7 17.6 20.8V13.5H15.1V20.8C15.1 23.2 16.8 24.5 19.5 24.5ZM26.7 24.5C29.3 24.5 30.8 23.2 30.8 21.2C30.8 19.4 29.7 18.5 27.8 17.7L26.9 17.3C25.8 16.8 25.3 16.4 25.3 15.6C25.3 14.8 26 14.2 27 14.2C27.9 14.2 28.5 14.6 28.9 15.3L30.9 14C30.1 12.6 28.7 12 27 12C24.5 12 22.9 13.4 22.9 15.6C22.9 17.4 24 18.3 25.9 19.1L26.8 19.5C28 20 28.5 20.5 28.5 21.3C28.5 22.2 27.7 22.8 26.6 22.8C25.4 22.8 24.6 22.1 24.1 21.2L22 22.5C22.9 23.9 24.5 24.5 26.7 24.5Z" fill="#000000" />
        </svg>
      );

    case 'react':
      return (
        <svg viewBox="0 0 32 32" width={size} height={size} className={className} fill="none">
          <circle cx="16" cy="16" r="2.8" fill="#61DAFB" />
          <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.5" />
          <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 16 16)" />
          <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 16 16)" />
        </svg>
      );

    case 'vue':
    case 'vuejs':
      return (
        <svg viewBox="0 0 32 32" width={size} height={size} className={className}>
          <path d="M19.5 4H26L16 21.5L6 4H12.5L16 10L19.5 4Z" fill="#42B883" />
          <path d="M12.5 4H6L16 21.5L26 4H19.5L16 10.2L12.5 4Z" fill="#42B883" />
          <path d="M12.5 4L16 10.2L19.5 4H15L16 5.8L17 4H12.5Z" fill="#35495E" />
          <path d="M16 14L10.5 4H6L16 21.5L26 4H21.5L16 14Z" fill="#42B883" />
          <path d="M16 14L12.8 8.5H9.2L16 20.3L22.8 8.5H19.2L16 14Z" fill="#35495E" />
        </svg>
      );

    case 'html':
    case 'html5':
      return (
        <svg viewBox="0 0 32 32" width={size} height={size} className={className}>
          <rect width="32" height="32" rx="4" fill="#E34F26" />
          <text x="16" y="21" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">HTML</text>
        </svg>
      );

    case 'css':
    case 'css3':
      return (
        <svg viewBox="0 0 32 32" width={size} height={size} className={className}>
          <rect width="32" height="32" rx="4" fill="#1572B6" />
          <text x="16" y="21" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">CSS3</text>
        </svg>
      );

    case 'tailwind':
    case 'tailwindcss':
      return (
        <svg viewBox="0 0 32 32" width={size} height={size} className={className} fill="none">
          <path d="M8.5 15.5C9.5 12 12 10.5 14.5 10.5C18.25 10.5 19.5 13.5 21.5 13.5C23 13.5 24 12.5 24.5 11C23.5 14.5 21 16 18.5 16C14.75 16 13.5 13 11.5 13C10 13 9 14 8.5 15.5ZM4.5 21.5C5.5 18 8 16.5 10.5 16.5C14.25 16.5 15.5 19.5 17.5 19.5C19 19.5 20 18.5 20.5 17C19.5 20.5 17 22 14.5 22C10.75 22 9.5 19 7.5 19C6 19 5 20 4.5 21.5Z" fill="#38BDF8" />
        </svg>
      );

    case 'node':
    case 'nodejs':
      return (
        <svg viewBox="0 0 32 32" width={size} height={size} className={className} fill="none">
          <path d="M16 4L27 10.3V23L16 29.3L5 23V10.3L16 4Z" stroke="#68A063" strokeWidth="2" fill="#142618" />
          <path d="M16 10L22 13.5V20.5L16 24L10 20.5V13.5L16 10Z" fill="#68A063" />
        </svg>
      );

    case 'python':
      return (
        <svg viewBox="0 0 32 32" width={size} height={size} className={className} fill="none">
          <path d="M15.8 4C11.6 4 11.9 5.8 11.9 5.8L11.9 7.7H16V8.3H9.8C8 8.3 6.4 9.4 6.4 12.2C6.4 15.4 7.9 15.2 7.9 15.2H9.8V13.3C9.8 11.9 11 11.8 11 11.8H15.9C17.2 11.8 17.3 10.6 17.3 10.6V5.4C17.3 5.4 17.5 4 15.8 4ZM13.8 5.7C14.3 5.7 14.7 6.1 14.7 6.6C14.7 7.1 14.3 7.5 13.8 7.5C13.3 7.5 12.9 7.1 12.9 6.6C12.9 6.1 13.3 5.7 13.8 5.7Z" fill="#387EB8" />
          <path d="M16.2 28C20.4 28 20.1 26.2 20.1 26.2L20.1 24.3H16V23.7H22.2C24 23.7 25.6 22.6 25.6 19.8C25.6 16.6 24.1 16.8 24.1 16.8H22.2V18.7C22.2 20.1 21 20.2 21 20.2H16.1C14.8 20.2 14.7 21.4 14.7 21.4V26.6C14.7 26.6 14.5 28 16.2 28ZM18.2 26.3C17.7 26.3 17.3 25.9 17.3 25.4C17.3 24.9 17.7 24.5 18.2 24.5C18.7 24.5 19.1 24.9 19.1 25.4C19.1 25.9 18.7 26.3 18.2 26.3Z" fill="#FFE873" />
        </svg>
      );

    case 'express':
      return (
        <svg viewBox="0 0 32 32" width={size} height={size} className={className} fill="none">
          <rect width="32" height="32" rx="4" fill="#1e293b" stroke="#334155" />
          <text x="16" y="20" fill="#f8fafc" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">ex</text>
        </svg>
      );

    case 'mongodb':
      return (
        <svg viewBox="0 0 32 32" width={size} height={size} className={className} fill="none">
          <path d="M16 3C15.4 7.2 11 11.8 11 17.2C11 22.6 14.4 26.8 16 28.5C17.6 26.8 21 22.6 21 17.2C21 11.8 16.6 7.2 16 3Z" fill="#47A248" />
          <path d="M16 28.5V3C16.6 7.2 21 11.8 21 17.2C21 22.6 17.6 26.8 16 28.5Z" fill="#499D4A" />
          <path d="M16 28.5V17L14 18.5L16 28.5Z" fill="#C8C8C8" />
        </svg>
      );

    case 'postgresql':
    case 'postgres':
      return (
        <svg viewBox="0 0 32 32" width={size} height={size} className={className} fill="none">
          <circle cx="16" cy="16" r="14" fill="#1e293b" stroke="#336791" strokeWidth="1.5" />
          <path d="M11 12C12.5 10 19.5 10 21 12C22 13.5 22.5 18 20 20C18 21.5 14 21.5 12 20C10.5 18.8 10 14 11 12Z" fill="#336791" />
          <path d="M13 14C14 15 18 15 19 14" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );

    case 'sql':
      return (
        <svg viewBox="0 0 32 32" width={size} height={size} className={className} fill="none">
          <ellipse cx="16" cy="9" rx="10" ry="4" stroke="#00B4D8" strokeWidth="1.8" fill="#0f172a" />
          <path d="M6 9V16C6 18.2 10.5 20 16 20C21.5 20 26 18.2 26 16V9" stroke="#00B4D8" strokeWidth="1.8" />
          <path d="M6 16V23C6 25.2 10.5 27 16 27C21.5 27 26 25.2 26 23V16" stroke="#00B4D8" strokeWidth="1.8" />
        </svg>
      );

    case 'aws':
      return (
        <svg viewBox="0 0 32 32" width={size} height={size} className={className} fill="none">
          <rect width="32" height="32" rx="4" fill="#0F172A" stroke="#FF9900" strokeWidth="1.2" />
          <text x="16" y="16" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">aws</text>
          <path d="M10 21C13.5 23.5 18.5 23.5 22 21" stroke="#FF9900" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );

    case 'docker':
      return (
        <svg viewBox="0 0 32 32" width={size} height={size} className={className} fill="none">
          <rect x="7" y="13" width="3" height="3" fill="#2496ED" />
          <rect x="11" y="13" width="3" height="3" fill="#2496ED" />
          <rect x="15" y="13" width="3" height="3" fill="#2496ED" />
          <rect x="11" y="9" width="3" height="3" fill="#2496ED" />
          <rect x="15" y="9" width="3" height="3" fill="#2496ED" />
          <path d="M26 16.5C25.5 16.5 24.5 17 24 18C21.5 17.5 18 17.5 15 18.5C11 19.8 8 18.5 5 18.5C4 21 6 25 12 25C18 25 24 23 26 18C27 18 27.5 17 26 16.5Z" fill="#2496ED" />
        </svg>
      );

    case 'figma':
      return (
        <svg viewBox="0 0 32 32" width={size} height={size} className={className} fill="none">
          <path d="M13 6H16V12H13C11.3 12 10 10.7 10 9C10 7.3 11.3 6 13 6Z" fill="#F24E1E" />
          <path d="M16 6H19C20.7 6 22 7.3 22 9C22 10.7 20.7 12 19 12H16V6Z" fill="#FF7262" />
          <path d="M16 12H19C20.7 12 22 13.3 22 15C22 16.7 20.7 18 19 18H16V12Z" fill="#1ABCFE" />
          <path d="M13 12H16V18H13C11.3 18 10 16.7 10 15C10 13.3 11.3 12 13 12Z" fill="#A259FF" />
          <path d="M13 18H16V21C16 22.7 14.7 24 13 24C11.3 24 10 22.7 10 21C10 19.3 11.3 18 13 18Z" fill="#0ACF83" />
        </svg>
      );

    case 'git':
      return (
        <svg viewBox="0 0 32 32" width={size} height={size} className={className} fill="none">
          <rect width="32" height="32" rx="4" fill="#0f172a" stroke="#F05032" strokeWidth="1.2" />
          <path d="M22.5 14.5L17.5 9.5C16.8 8.8 15.7 8.8 15 9.5L9.5 15C8.8 15.7 8.8 16.8 9.5 17.5L14.5 22.5C15.2 23.2 16.3 23.2 17 22.5L22.5 17C23.2 16.3 23.2 15.2 22.5 14.5Z" fill="#F05032" />
          <circle cx="13" cy="16" r="1.5" fill="#FFFFFF" />
          <circle cx="16" cy="13" r="1.5" fill="#FFFFFF" />
          <circle cx="19" cy="16" r="1.5" fill="#FFFFFF" />
        </svg>
      );

    case 'stripe':
      return (
        <svg viewBox="0 0 32 32" width={size} height={size} className={className} fill="none">
          <rect width="32" height="32" rx="4" fill="#635BFF" />
          <text x="16" y="21" fill="#FFFFFF" fontSize="14" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">S</text>
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 32 32" width={size} height={size} className={className} fill="none">
          <circle cx="16" cy="16" r="12" stroke="#64748B" strokeWidth="2" />
          <text x="16" y="20" fill="#94A3B8" fontSize="10" textAnchor="middle">code</text>
        </svg>
      );
  }
};
