export interface Project {
  id: string;
  title: string;
  techTags: string[];
  description: string;
  image: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  details?: {
    overview: string;
    features: string[];
    role: string;
    metrics?: string;
  };
}

export interface SkillItem {
  name: string;
  iconName: string;
  color?: string;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}
