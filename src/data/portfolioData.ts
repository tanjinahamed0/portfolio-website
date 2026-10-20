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
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'tanjin.ahamed@example.com',
  },
  copyright: 'Copyright 2024'
};

export const PROJECTS: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'ECOMMERCE PLATFORM',
    techTags: ['React', 'Node.js', 'Stripe'],
    description: 'Custom online store with payment integration',
    image: '/assets/thumb-ecommerce.jpg',
    liveDemoUrl: '#demo-ecommerce',
    githubUrl: 'https://github.com/tanjinahamed/ecommerce-platform',
    details: {
      overview: 'A full-featured e-commerce storefront with Stripe checkout integration, real-time inventory management, and smooth cart drawer interactions.',
      features: [
        'Secure multi-currency Stripe checkout session handling',
        'Stateful cart store with instant local caching',
        'Search & multi-facet category filters with instant response',
        'Mobile-first responsive layout with fast SSR hydration'
      ],
      role: 'Lead Full-Stack Architect',
      metrics: '300ms median interaction time & 99+ Lighthouse performance'
    }
  },
  {
    id: 'portfolio-site',
    title: 'PORTFOLIO SITE',
    techTags: ['Vue.js', 'Tailwind CSS'],
    description: 'This very website!',
    image: '/assets/thumb-portfolio.jpg',
    liveDemoUrl: '#demo-portfolio',
    details: {
      overview: 'A sleek, cyberpunk-inspired developer portfolio designed to showcase modern interactive engineering with high aesthetic fidelity.',
      features: [
        'Dynamic cyber-grid layout with radial ambient glow meshes',
        'Clean component modularity and responsive typography hierarchy',
        'Accessible contact system with validation feedback',
        'Optimized asset loading and smooth animated interactions'
      ],
      role: 'UI Designer & Frontend Engineer',
      metrics: '100% responsive coverage across mobile, tablet, and desktop'
    }
  },
  {
    id: 'task-manager',
    title: 'TASK MANAGER',
    techTags: ['MERN Stack'],
    description: 'Project management app with real-time updates',
    image: '/assets/thumb-taskmanager.jpg',
    liveDemoUrl: '#demo-taskmanager',
    githubUrl: 'https://github.com/tanjinahamed/task-manager-pro',
    details: {
      overview: 'Collaborative task and sprint tracking application inspired by modern workspace tools, featuring live WebSocket synchronization.',
      features: [
        'Drag-and-drop Kanban board columns with optimistic UI updates',
        'Real-time WebSocket event broadcasting for team collaboration',
        'Role-based permissions (Viewer, Editor, Workspace Admin)',
        'Detailed burndown charts and sprint productivity reporting'
      ],
      role: 'Full-Stack Developer',
      metrics: 'Sub-50ms sync latency for concurrent collaborators'
    }
  },
  {
    id: 'work-manager',
    title: 'WORK MANAGER',
    techTags: ['MERN Stack'],
    description: 'Project management app with real-time updates',
    image: '/assets/thumb-workmanager.jpg',
    liveDemoUrl: '#demo-workmanager',
    details: {
      overview: 'An agile development suite combining integrated code snippet tracking, automated backlog scoring, and live milestone delivery.',
      features: [
        'Syntax-highlighted code snippet notebook with instant copy',
        'Git commit timeline hooks and CI build status indicators',
        'Milestone pacing calculation with automated delay alerts',
        'Dark IDE-mode interface designed for long engineering sessions'
      ],
      role: 'Full-Stack Developer',
      metrics: 'Over 12,000 active tickets handled in production benchmarks'
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
