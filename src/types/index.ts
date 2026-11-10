export type ThemeMode = 'dark' | 'light' | 'system';

export interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  category: 'Microsoft Fabric' | 'Azure Data Engineering' | 'Big Data & Analytics';
  featured: boolean;
  shortDescription: string;
  problem: string;
  objectives: string[];
  solution: string;
  businessImpact: string[];
  technologies: string[];
  githubUrl?: string;
  
  // Configurable visual placeholders
  coverImage?: string;
  architectureDiagram?: string;
  architectureCaption: string;
  screenshots?: {
    url: string;
    caption: string;
  }[];

  // Detailed Engineering Deep Dive
  dataIngestion: string;
  transformationAndProcessing: string;
  storageAndDataModelling: string;
  dataOrchestration: string;
  securityAndGovernance: string;
  analyticsAndImpact: string;
}

export interface SkillCategory {
  title: string;
  categoryNumber: number;
  description: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: 'Employment' | 'Education';
  responsibilities: string[];
  skillsApplied?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  verificationUrl?: string;
  certificateImage?: string;
  viewMode?: 'url' | 'image';
}
