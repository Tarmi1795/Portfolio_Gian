
import React from 'react';
import { Experience, SkillCategory, Project, ContactInfo, Education } from './types';
import { Orbit, Spline, Workflow, Boxes, Command, Shapes, Cpu, Sparkles, Activity, Code2 } from 'lucide-react';

export const CONTACT_INFO: ContactInfo = {
  phone: "+974 5585 5221",
  email: "zgianpaulo@gmail.com",
  location: "Doha, Qatar"
};

export const EDUCATION: Education[] = [
  {
    id: "uni-manila",
    degree: "B.S. in Financial Accounting",
    school: "University of Manila",
    period: "2013 – 2017",
    note: "Total 191 units"
  },
  {
    id: "feu",
    degree: "Hotel and Restaurant Management",
    school: "Far Eastern University",
    period: "2012 – 2013"
  },
  {
    id: "palawan-state",
    degree: "Secondary Education",
    school: "Palawan State University",
    period: "2007 – 2011"
  },
  {
    id: "rizal-central",
    degree: "Primary Education",
    school: "Rizal Central School",
    period: "2001 – 2006"
  }
];

export const EXPERIENCES: Experience[] = [
  // ─── Employment History ───
  {
    id: "applus-velosi",
    company: "Applus+ Velosi",
    role: "Revenue Senior Accountant",
    location: "Doha, Qatar",
    period: "April 2025 – Present",
    type: "employment",
    description: [
      "Manage billing to clients with more than 1,000 transactions per month.",
      "Engineered and deployed custom AI-powered parser tools to automate data extraction from disparate documents, significantly reducing manual entry errors and accelerating the revenue reconciliation process.",
      "Acting as the primary liaison between the finance department and the development team to translate complex billing requirements into functional software features.",
      "Overseeing high-volume revenue recognition and financial reporting, ensuring compliance with international accounting standards and internal controls."
    ]
  },
  {
    id: "horizon-arabia",
    company: "Horizon Arabia Group",
    role: "General Chief Accountant",
    location: "Doha, Qatar",
    period: "January 2022 – April 2025",
    type: "employment",
    description: [
      "Managed the full-cycle accounting and financial reporting for three distinct sub-companies under a single parent corporation in the construction sector.",
      "Maintained three separate sets of books, ensuring accurate inter-company reconciliations and consolidated financial reporting.",
      "Oversaw accounts payable, receivable, and project-based costing for large-scale construction ventures.",
      "Prepared monthly financial statements and conducted variance analysis to guide executive decision-making."
    ]
  },
  {
    id: "forever-healthy",
    company: "Forever Healthy Products Inc.",
    role: "Cost Accountant / Admin",
    location: "Philippines",
    period: "July 2017 – October 2021",
    type: "employment",
    description: [
      "Analyzed cost variances to identify savings opportunities, directly supporting executive-level strategic decision-making.",
      "Maintained rigorous cost accounting records and allocated project-specific expenses across multiple departments.",
      "Collaborated with production and logistics teams to implement cost control measures that improved overall operational margin."
    ]
  },
  {
    id: "grant-thornton",
    company: "Punongbayan & Araullo (Grant Thornton)",
    role: "Accounting Associate (OJT)",
    location: "Philippines",
    period: "Circa 2017",
    type: "employment",
    description: [
      "Supported senior auditors in the execution of internal control verifications and substantive testing.",
      "Compiled and organized financial data to support audit findings for diverse corporate clients."
    ]
  },

  // ─── Freelance & Consultative Experience ───
  {
    id: "onesmartbiz",
    company: "One Smart Biz",
    role: "SME - Full Stack Software Engineer",
    location: "Doha, Qatar",
    period: "2025 – Present",
    type: "freelance",
    description: [
      "Architecting React applications integrated with LLMs to deliver high-performance, user-centric business tools.",
      "Building AI-powered SaaS solutions for automated document parsing, enabling businesses to convert unstructured data into structured invoices seamlessly.",
      "Delivers Full Stack Apps to customers."
    ]
  },
  {
    id: "pearl-dermatology",
    company: "The Pearl Dermatology & Laser Center",
    role: "Financial Accountant",
    location: "Doha, Qatar",
    period: "July 2023 – 2024",
    type: "freelance",
    description: [
      "Streamlined departmental workflows by optimizing the existing ERP system, reducing month-end closing time.",
      "Prepared comprehensive financial statements, including P&L and Cash Flow, while resolving complex discrepancies alongside external auditors."
    ]
  },
  {
    id: "gulf-design",
    company: "Gulf Design",
    role: "Graphic Designer",
    location: "Doha, Qatar",
    period: "2022 – 2024",
    type: "freelance",
    description: [
      "Pioneered the integration of generative AI (Midjourney/Flux) within the agency, reducing creative conceptualization time by 40%.",
      "Developed a library of over 100 technical infographics for industrial and financial clients to simplify complex data sets."
    ]
  },
  {
    id: "al-waad",
    company: "Al Waad Manufacturing & Packaging Co.",
    role: "Accountant / HR",
    location: "Doha, Qatar",
    period: "January 2022 – 2024 (Project-Based)",
    type: "freelance",
    description: [
      "Managed end-to-end financial operations, including payroll for a diverse workforce, bank reconciliations, and cash flow monitoring.",
      "Coordinated with external tax preparers to ensure full compliance with Qatar's regulatory environment."
    ]
  },
  {
    id: "beajones",
    company: "Beajones Trading and Beauty Spa",
    role: "Multimedia & Social Media Manager",
    location: "Doha, Qatar",
    period: "2020 – 2022",
    type: "freelance",
    description: [
      "Produced bilingual promotional video content using Premiere Pro and CapCut, specifically targeting the Filipino and expat communities in Doha.",
      "Managed end-to-end digital production for corporate events and social advertisements."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Gen AI Expert",
    skills: ["100+ LLM models", "Sora", "VEO", "Midjourney", "GPT Image 1.5", "Nano Banana", "Higgsfield"],
    icon: <Orbit className="w-8 h-8 text-amber-400 animate-[spin_10s_linear_infinite]" />
  },
  {
    title: "Creative Suite",
    skills: ["Photoshop", "Premiere Pro", "CapCut", "Canva", "Web Layout Design"],
    icon: <Spline className="w-8 h-8 text-amber-500" />
  },
  {
    title: "Finance & data",
    skills: ["Data Visualization", "Financial Infographics", "Microsoft Office Suite", "Power BI", "Python Automation", "Advanced Excel", "SAP", "Oracle", "QuickBooks", "Odoo", "Xero"],
    icon: <Command className="w-8 h-8 text-yellow-500" />
  },
  {
    title: "Development",
    skills: ["Python", "ReactJS", "TypeScript", "PostgreSQL", "Google Cloud", "Google Antigravity", "Supabase", "Vercel"],
    icon: <Code2 className="w-8 h-8 text-amber-400" />
  }
];

export const PROJECTS: Project[] = [
  {
    id: "showreel-2024",
    title: "Pallete Marketing Explanatory",
    category: "Video Production",
    description: "A comprehensive showcase of motion graphics, cinematic editing, and AI-enhanced visual storytelling techniques.",
    imageUrl: "https://iili.io/ftJysus.png",
    videoUrl: "https://www.youtube.com/embed/zq9VvydAs10",
    tech: ["Higgsfield Studio", "After Effects", "AI Motion"]
  },
  {
    id: "efrenbilliards-site",
    title: "Efren Billiards",
    category: "Web Design",
    description: "A professional web platform dedicated to the legacy of Efren 'Bata' Reyes, featuring tournament highlights and billiards community resources.",
    imageUrl: "https://iili.io/qhq6H0B.png",
    link: "https://efrenbilliards.com/",
    tech: ["Web Development", "UI/UX", "Responsive Design"]
  },
  {
    id: "onesmartbiz",
    title: "One Smart Biz",
    category: "Web Design",
    description: "Professional corporate platform designed for business consultancy services, focusing on user journey and conversion.",
    imageUrl: "https://iili.io/qhB7mjR.png",
    link: "https://onesmartbiz.pro/",
    tech: ["Web Development", "Corporate UI", "Responsive"]
  },
  {
    id: "1",
    title: "Well Driven Brand Identity",
    category: "Branding",
    description: "A complete brand overhaul using Generative tools to generate unique visual assets reducing time-to-market by 40%.",
    imageUrl: "https://iili.io/ftdWO4n.jpg",
    tech: ["Midjourney", "Photoshop", "Illustrator"]
  },
  {
    id: "2",
    title: "Financial Data Viz",
    category: "Infographics",
    description: "Series of 100+ complex industrial data sets translated into digestible, high-fidelity infographics for public consumption.",
    imageUrl: "https://iili.io/ftdlzDF.png",
    tech: ["Excel", "Nanobanana", "Data Mapping"]
  },
  {
    id: "3",
    title: "UGC Style Marketing",
    category: "Video Production",
    description: "High-end video generation of UGC video as product review",
    imageUrl: "https://iili.io/ftdSi22.png",
    videoUrl: "https://streamable.com/e/ausch4?autoplay=1",
    tech: ["Higgsfield", "Sora", "CapCut"]
  }
];
