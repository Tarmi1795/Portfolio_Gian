
import React from 'react';

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  type: 'employment' | 'freelance';
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
  link?: string;
  tech: string[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  note?: string;
}
