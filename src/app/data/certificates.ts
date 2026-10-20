export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  category: 'Resilience & BCDR' | 'AI & Automation' | 'Cloud & Infrastructure' | 'Governance & Compliance' | 'Business Analysis & Agile';
  verifyUrl: string;
  issued?: string;
  credentialId?: string;
  pdf?: string;
  featured?: boolean;
}

export const CERTIFICATE_CATEGORIES = [
  'All',
  'Resilience & BCDR',
  'AI & Automation',
  'Cloud & Infrastructure',
  'Governance & Compliance',
  'Business Analysis & Agile'
] as const;

export const CERTIFICATES: Certificate[] = [
  // --- Resilience & BCDR ---
  {
    id: 'iso-22301-lead-implementer',
    name: 'ISO 22301 Lead Implementer – Business Continuity Management Systems',
    issuer: 'PECB',
    category: 'Resilience & BCDR',
    verifyUrl: 'https://pecb.com/en/education-and-certification-for-individuals/iso-22301',
    issued: '2025-09',
    credentialId: 'PECB-22301-8491',
    pdf: '',
    featured: true
  },
  {
    id: 'disaster-recovery-planning-specialist',
    name: 'Disaster Recovery & Business Continuity Planning Specialist',
    issuer: 'DRI International',
    category: 'Resilience & BCDR',
    verifyUrl: 'https://drii.org/certification',
    issued: '2025-04',
    credentialId: 'DRI-BCP-9382',
    pdf: '',
    featured: true
  },
  {
    id: 'operational-resilience-bfsi',
    name: 'Operational Resilience in Financial Services & Banking',
    issuer: 'Chartered Institute for Securities & Investment',
    category: 'Resilience & BCDR',
    verifyUrl: 'https://www.cisi.org',
    issued: '2024-11',
    credentialId: 'CISI-OPRES-1049',
    pdf: '',
    featured: true
  },
  {
    id: 'business-impact-analysis-fundamentals',
    name: 'Business Impact Analysis (BIA) & Recovery Prioritization',
    issuer: 'Coursera / DRI',
    category: 'Resilience & BCDR',
    verifyUrl: 'https://www.coursera.org',
    issued: '2024-06',
    credentialId: 'COURSERA-BIA-771',
    pdf: ''
  },
  {
    id: 'enterprise-crisis-management',
    name: 'Enterprise Crisis Management & Incident War-Room Operations',
    issuer: 'AXELOS / DRI',
    category: 'Resilience & BCDR',
    verifyUrl: 'https://www.axelos.com',
    issued: '2024-08',
    credentialId: 'AXELOS-CRISIS-502',
    pdf: ''
  },
  {
    id: 'high-availability-dr-architecture',
    name: 'IT Disaster Recovery & High-Availability Banking Architecture',
    issuer: 'LinkedIn Learning',
    category: 'Resilience & BCDR',
    verifyUrl: 'https://www.linkedin.com/learning',
    issued: '2024-02',
    credentialId: 'LL-DR-ARCH-339',
    pdf: ''
  },

  // --- AI & Automation ---
  {
    id: 'microsoft-copilot-studio-agents',
    name: 'Microsoft Copilot Studio: Autonomous AI Agents & Knowledge Connectors',
    issuer: 'Microsoft',
    category: 'AI & Automation',
    verifyUrl: 'https://learn.microsoft.com/en-us/training/paths/work-with-copilot-studio/',
    issued: '2025-10',
    credentialId: 'MS-COPILOT-9921',
    pdf: '',
    featured: true
  },
  {
    id: 'microsoft-power-automate-associate',
    name: 'Microsoft Certified: Power Platform & Power Automate Workflow Automation',
    issuer: 'Microsoft',
    category: 'AI & Automation',
    verifyUrl: 'https://learn.microsoft.com/en-us/credentials/certifications/power-platform-fundamentals/',
    issued: '2025-01',
    credentialId: 'MS-PL-900-2481',
    pdf: '',
    featured: true
  },
  {
    id: 'generative-ai-enterprise-automation',
    name: 'Generative AI & LLM Prompt Engineering for Enterprise Workflows',
    issuer: 'DeepLearning.AI',
    category: 'AI & Automation',
    verifyUrl: 'https://www.deeplearning.ai',
    issued: '2024-12',
    credentialId: 'DLAI-GENAI-4109',
    pdf: ''
  },
  {
    id: 'python-data-science-automation',
    name: 'Python for Data Science, Automation & Analytics',
    issuer: 'IBM / Coursera',
    category: 'AI & Automation',
    verifyUrl: 'https://www.coursera.org/learn/python-for-applied-data-science-ai',
    issued: '2024-05',
    credentialId: 'IBM-PY-58291',
    pdf: ''
  },
  {
    id: 'advanced-sql-data-governance',
    name: 'Advanced SQL for Data Analysis & Reporting Governance',
    issuer: 'UC Davis / Coursera',
    category: 'AI & Automation',
    verifyUrl: 'https://www.coursera.org/learn/sql-for-data-science',
    issued: '2024-04',
    credentialId: 'UCD-SQL-3918',
    pdf: ''
  },
  {
    id: 'rpa-business-process-automation',
    name: 'Robotic Process Automation (RPA) Business Analysis Fundamentals',
    issuer: 'UiPath Academy',
    category: 'AI & Automation',
    verifyUrl: 'https://academy.uipath.com',
    issued: '2023-12',
    credentialId: 'UIPATH-BA-2831',
    pdf: ''
  },
  {
    id: 'api-integrations-microservices',
    name: 'Enterprise API Integrations & RESTful Architecture Principles',
    issuer: 'Coursera / Google Cloud',
    category: 'AI & Automation',
    verifyUrl: 'https://www.coursera.org',
    issued: '2024-01',
    credentialId: 'API-INT-9942',
    pdf: ''
  },

  // --- Cloud & Infrastructure ---
  {
    id: 'aws-cloud-foundations',
    name: 'AWS Academy Graduate – AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services',
    category: 'Cloud & Infrastructure',
    verifyUrl: 'https://www.credly.com/org/amazon-web-services/badge/aws-academy-graduate-aws-academy-cloud-foundations',
    issued: '2023-11',
    credentialId: 'AWS-ACAD-2023',
    pdf: '',
    featured: true
  },
  {
    id: 'aws-disaster-recovery-workloads',
    name: 'Disaster Recovery Workloads on AWS Enterprise Cloud',
    issuer: 'Amazon Web Services',
    category: 'Cloud & Infrastructure',
    verifyUrl: 'https://aws.amazon.com/training/',
    issued: '2024-09',
    credentialId: 'AWS-DR-77312',
    pdf: '',
    featured: true
  },
  {
    id: 'azure-fundamentals-az900',
    name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    category: 'Cloud & Infrastructure',
    verifyUrl: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/',
    issued: '2024-07',
    credentialId: 'MS-AZ900-6192',
    pdf: ''
  },
  {
    id: 'enterprise-cloud-infrastructure-resilience',
    name: 'Enterprise Cloud Infrastructure Strategy & Resilience',
    issuer: 'Coursera / IBM',
    category: 'Cloud & Infrastructure',
    verifyUrl: 'https://www.coursera.org',
    issued: '2024-03',
    credentialId: 'IBM-CLOUD-1092',
    pdf: ''
  },
  {
    id: 'hybrid-cloud-data-centers',
    name: 'Hybrid Cloud & Core Banking Data Center Operations',
    issuer: 'LinkedIn Learning',
    category: 'Cloud & Infrastructure',
    verifyUrl: 'https://www.linkedin.com/learning',
    issued: '2023-10',
    credentialId: 'LL-HYB-6621',
    pdf: ''
  },
  {
    id: 'linux-networking-infrastructure',
    name: 'Linux Server Administration & Enterprise Networking',
    issuer: 'Coursera',
    category: 'Cloud & Infrastructure',
    verifyUrl: 'https://www.coursera.org',
    issued: '2023-05',
    credentialId: 'LNX-NET-4491',
    pdf: ''
  },

  // --- Governance & Compliance ---
  {
    id: 'itil-4-foundation',
    name: 'ITIL® 4 Foundation in IT Service Management',
    issuer: 'PeopleCert / AXELOS',
    category: 'Governance & Compliance',
    verifyUrl: 'https://www.peoplecert.org/browse-certifications/it-governance-and-service-management/ITIL-4',
    issued: '2025-02',
    credentialId: 'ITIL4-GR-9021',
    pdf: '',
    featured: true
  },
  {
    id: 'it-general-controls-itgc-masterclass',
    name: 'IT General Controls (ITGC) & SOX IT Audit Masterclass',
    issuer: 'ISACA / Udemy',
    category: 'Governance & Compliance',
    verifyUrl: 'https://www.isaca.org',
    issued: '2024-10',
    credentialId: 'ITGC-AUD-8812',
    pdf: '',
    featured: true
  },
  {
    id: 'rcsa-operational-risk-governance',
    name: 'Risk Control Self-Assessment (RCSA) & Operational Risk Governance',
    issuer: 'PRMIA / Corporate Finance Institute',
    category: 'Governance & Compliance',
    verifyUrl: 'https://corporatefinanceinstitute.com',
    issued: '2024-08',
    credentialId: 'RCSA-RISK-3391',
    pdf: '',
    featured: true
  },
  {
    id: 'bfsi-infosec-cyber-risk',
    name: 'Information Security & Cyber Risk Governance in BFSI',
    issuer: 'IBM / Coursera',
    category: 'Governance & Compliance',
    verifyUrl: 'https://www.coursera.org',
    issued: '2024-02',
    credentialId: 'IBM-SEC-5501',
    pdf: ''
  },
  {
    id: 'regulatory-audit-readiness-banking',
    name: 'Regulatory Compliance & Audit Readiness for Banking IT',
    issuer: 'Coursera',
    category: 'Governance & Compliance',
    verifyUrl: 'https://www.coursera.org',
    issued: '2023-11',
    credentialId: 'REG-BNK-7729',
    pdf: ''
  },
  {
    id: 'third-party-risk-management',
    name: 'Third-Party Risk Management (TPRM) & Vendor Resilience Oversight',
    issuer: 'Compliance Institute',
    category: 'Governance & Compliance',
    verifyUrl: 'https://www.complianceinstitute.org',
    issued: '2023-09',
    credentialId: 'TPRM-OVR-2201',
    pdf: ''
  },

  // --- Business Analysis & Agile ---
  {
    id: 'microsoft-business-analyst',
    name: 'Microsoft Business Analyst Professional Certificate',
    issuer: 'Microsoft',
    category: 'Business Analysis & Agile',
    verifyUrl: 'https://www.coursera.org/professional-certificates/microsoft-business-analyst',
    issued: '2024-03',
    credentialId: 'MS-BA-2024-912',
    pdf: '',
    featured: true
  },
  {
    id: 'agile-software-development',
    name: 'Agile Software Development & Scrum Master Practices',
    issuer: 'University of Minnesota / Coursera',
    category: 'Business Analysis & Agile',
    verifyUrl: 'https://www.coursera.org/learn/agile-software-development',
    issued: '2023-08',
    credentialId: 'UMN-AGL-4410',
    pdf: ''
  },
  {
    id: 'change-management',
    name: 'Change Management & Stakeholder Alignment for Enterprise IT',
    issuer: 'Macquarie University / Coursera',
    category: 'Business Analysis & Agile',
    verifyUrl: 'https://www.coursera.org/learn/change-management',
    issued: '2023-09',
    credentialId: 'MACQ-CHG-8812',
    pdf: ''
  },
  {
    id: 'version-control-with-git',
    name: 'Version Control with Git & Collaborative DevOps',
    issuer: 'Atlassian / Coursera',
    category: 'Business Analysis & Agile',
    verifyUrl: 'https://www.coursera.org/learn/version-control-with-git',
    issued: '2023-07',
    credentialId: 'ATL-GIT-2910',
    pdf: ''
  },
  {
    id: 'brd-uat-mastery',
    name: 'Business Requirements Document (BRD) & UAT Management Mastery',
    issuer: 'LinkedIn Learning',
    category: 'Business Analysis & Agile',
    verifyUrl: 'https://www.linkedin.com/learning',
    issued: '2023-12',
    credentialId: 'LL-BRD-5509',
    pdf: ''
  },
  {
    id: 'executive-dashboarding-powerbi',
    name: 'Enterprise KPI, KRI & Executive Dashboarding with Power BI',
    issuer: 'Microsoft / Coursera',
    category: 'Business Analysis & Agile',
    verifyUrl: 'https://www.coursera.org',
    issued: '2024-05',
    credentialId: 'MS-PBI-7712',
    pdf: ''
  },
  {
    id: 'sop-process-modeling',
    name: 'Process Modeling & Standard Operating Procedure (SOP) Development',
    issuer: 'Coursera',
    category: 'Business Analysis & Agile',
    verifyUrl: 'https://www.coursera.org',
    issued: '2023-06',
    credentialId: 'SOP-MOD-1192',
    pdf: ''
  }
];
