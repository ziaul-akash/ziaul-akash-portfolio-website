import { ExperienceItem } from '../types';

export const professionalExperience: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Learning Resource Centre Officer',
    organization: 'Capital City College',
    period: 'August 2024 – Present',
    location: 'London Area, United Kingdom',
    type: 'Employment',
    responsibilities: [
      'Currently working at the intersection of technology operations, digital support and AI enablement.',
      'Providing frontline IT and technology support to students and staff while helping improve digital literacy across the organisation.',
      'Design and deliver training sessions on AI tools and eResources, translating complex technology into practical knowledge that users can apply.',
      'Developing a strong understanding of business requirements, user experience, technology adoption and practical problem-solving.'
    ],
    skillsApplied: ['AI Enablement', 'Technology Support', 'Digital Literacy', 'Stakeholder Training', 'Operations']
  },
  {
    id: 'exp-2',
    role: 'Customer Service Representative',
    organization: 'Babylon Park UK',
    period: 'February 2023 – July 2024',
    location: 'Camden Town, England, United Kingdom',
    type: 'Employment',
    responsibilities: [
      'Delivered customer service in a fast-paced indoor theme park environment, supporting visitors, handling enquiries and resolving customer issues.',
      'Maintained operational standards, represented the organisation professionally, operated attractions safely and supported retail transactions.'
    ],
    skillsApplied: ['Operational Excellence', 'Customer Communication', 'Issue Resolution', 'Fast-paced Collaboration']
  },
  {
    id: 'exp-3',
    role: 'Web Developer',
    organization: 'Systech Unimax',
    period: 'September 2020 – December 2022',
    location: 'Dhaka, Bangladesh',
    type: 'Employment',
    responsibilities: [
      'Managed end-to-end website development across different platforms.',
      'Improved website functionality, usability and responsiveness.',
      'Built and integrated custom WordPress themes.'
    ],
    skillsApplied: ['Web Development', 'UI/UX Responsiveness', 'WordPress Customization', 'Frontend Engineering']
  }
];

export const educationData = {
  degree: 'Bachelor of Science in Computer Science',
  institution: 'Daffodil International University',
  period: 'September 2015 – January 2019',
  grade: '3.62 / 4.00'
};

export const languagesData = [
  { language: 'Bengali', level: 'Native or bilingual proficiency' },
  { language: 'English', level: 'Professional working proficiency' },
  { language: 'Hindi', level: 'Professional working proficiency' },
  { language: 'Urdu', level: 'Professional working proficiency' }
];
