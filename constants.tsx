
import React from 'react';
import { Experience, SkillCategory, Project, ContactInfo } from './types';
import { Palette, Cpu, BarChart3, Video, Brain, Workflow } from 'lucide-react';

export const CONTACT_INFO: ContactInfo = {
  phone: "+974 5585 5221",
  email: "zgianpaulo@gmail.com",
  location: "Doha, Qatar"
};

export const EXPERIENCES: Experience[] = [
  {
    id: "freelance-ai",
    company: "Freelance",
    role: "Gen AI: Full Stack Engineer",
    location: "Doha, Qatar",
    period: "2025 – Present",
    description: [
      "Architected React/Supabase apps using AI to accelerate dev cycles and deliver high-performance, user-centric interfaces.",
      "Engineered AI-powered tools for automated document parsing and data extraction to streamline complex business workflows.",
      "Developed robust APIs to integrate LLMs into full-stack systems, optimizing performance and scalable app delivery."
    ]
  },
  {
    id: "applus",
    company: "Applus+",
    role: "Admin Coordinator / Creative (Internal)",
    location: "Doha, Qatar",
    period: "2024 – Present",
    description: [
      "Managing complex revenue data and translating internal compliance modules into digestible visual training materials.",
      "Acting as 'Billing Expert' for AMIS 2.0, overseeing visual UI/UX feedback and data flow representation.",
      "Integrating AI-driven tools to automate reporting visualizations for Finance System Solutions (FSS)."
    ]
  },
  {
    id: "gulf-design",
    company: "Gulf Design Freelance",
    role: "Graphic Designer",
    location: "Doha, Qatar",
    period: "2022 – 2024",
    description: [
      "Creative direction for SME-focused marketing campaigns across Qatar.",
      "Developed a library of 100+ infographics for industrial and financial clients, simplifying technical data.",
      "Pioneered the use of Midjourney and Flux within the agency to reduce conceptualization time by 40%."
    ]
  },
  {
    id: "beajones",
    company: "Beajones Trading and Beauty Spa",
    role: "Multimedia & Social Media Manager",
    location: "Doha, Qatar",
    period: "2020 – 2022",
    description: [
      "Produced high-quality video content for social media platforms using Premiere Pro and CapCut.",
      "Collaborated with the team to create bilingual (English/Tagalog) promotional materials.",
      "Managed end-to-end production for corporate event coverage and digital advertisements."
    ]
  },
  {
    id: "forever-healthy",
    company: "Forever Healthy Inc.",
    role: "Admin Assistant",
    location: "Manila, Philippines",
    period: "2017 – 2020",
    description: [
      "Produced high-quality video content for social media using Premiere Pro.",
      "Created bilingual promotional materials in collaboration with marketing teams.",
      "Handled production for corporate event coverage."
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "AI Generation",
    skills: ["Sora", "VEO", "Gemini Pro", "Midjourney", "Flux", "GPT Image 1.5", "Nano Banana", "Higgsfield"],
    icon: <Brain className="w-6 h-6 text-amber-400" />
  },
  {
    title: "Creative Suite",
    skills: ["Photoshop", "Premiere Pro", "CapCut", "Illustrator", "After Effects", "Web Layout Design"],
    icon: <Palette className="w-6 h-6 text-amber-500" />
  },
  {
    title: "Data & Workflow",
    skills: ["Data Visualization", "Financial Infographics", "Google Flow", "Python Automation", "Advanced Excel"],
    icon: <BarChart3 className="w-6 h-6 text-yellow-500" />
  }
];

export const PROJECTS: Project[] = [
  {
    id: "showreel-2024",
    title: "Pallete Marketing Explanatory",
    category: "Video Production",
    description: "A comprehensive showcase of motion graphics, cinematic editing, and AI-enhanced visual storytelling techniques.",
    imageUrl: "https://iili.io/ftJysus.png",
    videoUrl: "https://youtu.be/zq9VvydAs10",
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
    videoUrl: "https://streamable.com/ausch4",
    tech: ["Higgsfield", "Sora", "CapCut"]
  }
];
