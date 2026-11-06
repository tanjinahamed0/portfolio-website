import { Project, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'MD TANJIN AHAMED',
  role: 'FULL-STACK WEB DEVELOPER.',
  tagline: '(Crafting exceptional digital experiences.)',
  bio: 'I am a passionate developer specializing in building responsive, efficient, and user-centric web applications using modern technologies.',
  aboutFull: 'I am a passionate developer specializing in building responsive, efficient, and user-centric web applications using modern technologies. With a strong foundation in modern JavaScript ecosystems, cloud-native deployments, and interactive UI systems, I bridge engineering precision with intuitive human-centric product design.',
  codeSnippet: `import techStack from 'skills';

export default function Developer() {
  return (
    <PassionDrivenDeveloper tech={techStack} />
  );
}`,
  socials: {
    github: 'https://github.com/tanjinahamed0',
    linkedin: 'https://linkedin.com',
    email: 'tanjin.ahamed@example.com',
  },
  copyright: 'Copyright 2024'
};

export const PROJECTS: Project[] = [
  {
    id: 'aura-fashion',
    title: 'AURA FASHION',
    category: 'Fashion & Brand Website',
    techTags: ['HTML5', 'CSS3', 'JavaScript', 'Netlify'],
    description: "A modern men's fashion brand website showcasing clothing collections with a premium shopping-inspired experience.",
    image: '/assets/thumb-aura-fashion.jpg',
    liveDemoUrl: 'https://aurafashionshop.netlify.app/',
    featured: true,
    details: {
      overview: "A modern men's fashion brand website showcasing clothing collections with a premium shopping-inspired experience. The Winter Collection 2026 site pairs a full-bleed editorial hero with a curated product catalogue and a warm, print-inspired palette.",
      features: [
        'Full-bleed seasonal hero with Playfair Display editorial typography',
        'Local catalogue module drives the product grid, so adding a product needs no markup changes',
        'New Arrivals, Winter Collection, About and Contact sections with smooth in-page navigation',
        'Fluid clamp()-based layout, backdrop-blur surfaces and keyframed hero entrance'
      ]
    }
  },
  {
    id: 'explore-bangladesh',
    title: 'Explore Bangladesh',
    category: 'Travel & Tourism',
    techTags: ['React', 'Vite', 'JavaScript', 'Vercel'],
    description: 'A travel and tourism website celebrating the beauty, destinations, and experiences of Bangladesh.',
    image: '/assets/thumb-explore-bangladesh.jpg',
    liveDemoUrl: 'https://explorebdweb.vercel.app/',
    details: {
      overview: 'A travel and tourism website celebrating the beauty, destinations, and experiences of Bangladesh, built as a routed React single-page application with a calm green-and-gold identity.',
      features: [
        'Routed destinations, travel guides, trip planner and about views via React Router',
        'Hero search for finding places across the destination catalogue',
        'Editorial photo grid of beaches, hills, islands and tea gardens',
        'Hand-written CSS design tokens with a DM Sans type scale'
      ]
    }
  },
  {
    id: 'skymood-weather',
    title: 'SkyMood Weather',
    category: 'Weather Application',
    techTags: ['JavaScript', 'HTML5', 'CSS3', 'Open-Meteo API'],
    description: 'A modern weather application providing weather information through a clean and intuitive interface.',
    image: '/assets/thumb-skymood-weather.jpg',
    liveDemoUrl: 'https://skymoodweather.vercel.app/',
    details: {
      overview: 'A modern weather application providing weather information through a clean and intuitive interface — search any city for current conditions and a seven-day outlook over a soft gradient glass surface.',
      features: [
        'Live current conditions and 7-day forecast from the Open-Meteo API',
        'City search plus one-click browser geolocation lookup',
        '°C / °F unit toggle that recalculates the entire view',
        'Staggered fade-up entrance animations across forecast cards'
      ]
    }
  },
  {
    id: 'easyplan',
    title: 'EasyPlan',
    category: 'Productivity & Task Management',
    techTags: ['JavaScript', 'Tailwind CSS', 'HTML5', 'Vercel'],
    description: 'A productivity application designed to help users organize tasks and manage their daily activities.',
    image: '/assets/thumb-easyplan.jpg',
    liveDemoUrl: 'https://easyplanweb.vercel.app/',
    details: {
      overview: 'A productivity application designed to help users organize tasks and manage their daily activities, with a dashboard, priorities, due dates and lists that persist locally in the browser.',
      features: [
        'Dashboard counters for total, completed, in-progress and overdue tasks',
        'Priority, category and status filters with instant text search',
        'Personal / Work / Study lists plus a daily completion progress ring',
        'localStorage persistence so plans survive a reload — no account needed'
      ]
    }
  },
  {
    id: 'expenseflow',
    title: 'ExpenseFlow',
    category: 'Finance & Expense Management',
    techTags: ['React', 'Vite', 'Recharts', 'Vercel'],
    description: 'A personal expense management application for tracking and organizing expenses.',
    image: '/assets/thumb-expenseflow.jpg',
    liveDemoUrl: 'https://expenseflowweb.vercel.app/',
    details: {
      overview: 'A personal expense management application for tracking and organizing expenses, centred on an analytics dashboard with income and expense trends, budgets and category breakdowns.',
      features: [
        'Income vs expense trends and spending breakdown charts built with Recharts',
        'Balance, income, expense and savings-rate cards with month-on-month deltas',
        'Budget progress bars that flag overspend per category',
        'Transaction table with search, category filter and month selector'
      ]
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'JavaScript', iconName: 'javascript', color: '#f7df1e' },
      { name: 'React', iconName: 'react', color: '#61dafb' },
      { name: 'Vue.js', iconName: 'vue', color: '#42b883' },
      { name: 'HTML5', iconName: 'html5', color: '#e34f26' },
      { name: 'CSS3', iconName: 'css3', color: '#1572b6' },
      { name: 'Tailwind', iconName: 'tailwind', color: '#38bdf8' }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', iconName: 'nodejs', color: '#68a063' },
      { name: 'Python', iconName: 'python', color: '#3776ab' },
      { name: 'Express', iconName: 'express', color: '#ffffff' }
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', iconName: 'mongodb', color: '#47a248' },
      { name: 'PostgreSQL', iconName: 'postgresql', color: '#336791' },
      { name: 'SQL', iconName: 'sql', color: '#00758f' }
    ]
  },
  {
    title: 'Cloud & Infrastructure',
    skills: [
      { name: 'AWS', iconName: 'aws', color: '#ff9900' },
      { name: 'Docker', iconName: 'docker', color: '#2496ed' },
      { name: 'Figma', iconName: 'figma', color: '#f24e1e' }
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', iconName: 'git', color: '#f05032' },
      { name: 'Docker', iconName: 'docker', color: '#2496ed' },
      { name: 'Figma', iconName: 'figma', color: '#a259ff' }
    ]
  }
];
