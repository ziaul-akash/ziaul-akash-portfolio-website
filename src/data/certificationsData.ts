import { CertificationItem } from '../types';

export const certificationsData: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'Microsoft Certified: Fabric Data Engineer Associate',
    issuer: 'Microsoft',
    issueDate: 'October 2026',
    expiryDate: 'October 2027',
    credentialId: 'EFDD556234ADDC6F',
    verificationUrl: 'https://learn.microsoft.com/en-us/users/ziaulhaqakash-1564/credentials/efdd556234addc6f',
    viewMode: 'url'
  },
  {
    id: 'cert-2',
    title: 'Master Microsoft Fabric: A Complete End-to-End Project – CI/CD',
    issuer: 'Udemy',
    issueDate: 'August 2026',
    credentialId: 'UC-333f4128-3336-448c-bdf9-41705b77395a',
    verificationUrl: 'https://www.udemy.com/certificate/UC-333f4128-3336-448c-bdf9-41705b77395a/',
    viewMode: 'url'
  },
  {
    id: 'cert-3',
    title: 'Microsoft: Fabric Analyst in a Day',
    issuer: 'MAQSoftware',
    issueDate: 'Sep 28, 2026',
    // Opens real certificate image in full modal popup (from user's MAQ PDF)
    certificateImage: '/assets/certificates/maq_fabric_analyst_in_a_day.png',
    viewMode: 'image'
  },
  {
    id: 'cert-4',
    title: 'Azure Databricks and Spark SQL (Python)',
    issuer: 'Udemy',
    issueDate: 'February 2026',
    credentialId: 'UC-6dabc83b-bea6-4486-96f2-3c8c177d482b',
    verificationUrl: 'https://www.udemy.com/certificate/UC-6dabc83b-bea6-4486-96f2-3c8c177d482b/',
    viewMode: 'url'
  },
  {
    id: 'cert-5',
    title: 'Azure Data Factory for Data Engineers – Project on COVID-19',
    issuer: 'Udemy',
    issueDate: 'March 2026',
    credentialId: 'UC-73f65e56-e0cd-4fed-8b1c-e7b8c3a809db',
    verificationUrl: 'https://www.udemy.com/certificate/UC-73f65e56-e0cd-4fed-8b1c-e7b8c3a809db/',
    viewMode: 'url'
  },
  {
    id: 'cert-6',
    title: 'Professional Web Design and Development',
    issuer: 'BASIS Institute of Technology & Management Limited (BITM)',
    issueDate: 'April 2017',
    // Opens real certificate image in full modal popup (from user's BITM photo)
    certificateImage: '/assets/certificates/professional_web_design_development.jpg',
    viewMode: 'image'
  }
];
