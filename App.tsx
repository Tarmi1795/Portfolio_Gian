import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import BubbleMenu, { BubbleMenuItem } from './components/BubbleMenu';
import { Home, User, Brain, Briefcase, Image as ImageIcon, Mail, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MENU_ITEMS: BubbleMenuItem[] = [
  { 
    label: 'Home', 
    href: '#home', 
    rotation: 270, // Top
    icon: <Home className="w-5 h-5" />, 
    hoverStyles: { bgColor: '#f59e0b', textColor: '#000' } 
  },
  { 
    label: 'About', 
    href: '#about', 
    rotation: 252, 
    icon: <User className="w-5 h-5" />,
    hoverStyles: { bgColor: '#f59e0b', textColor: '#000' }
  },
  {
    label: 'Skills',
    href: '#skills',
    rotation: 234,
    icon: <Brain className="w-5 h-5" />,
    hoverStyles: { bgColor: '#f59e0b', textColor: '#000' }
  },
  {
    label: 'Experience',
    href: '#experience',
    rotation: 216,
    icon: <Briefcase className="w-5 h-5" />,
    hoverStyles: { bgColor: '#f59e0b', textColor: '#000' }
  },
  {
    label: 'Work',
    href: '#portfolio',
    rotation: 198,
    icon: <ImageIcon className="w-5 h-5" />,
    hoverStyles: { bgColor: '#f59e0b', textColor: '#000' }
  },
  {
    label: 'Contact',
    href: '#contact',
    rotation: 180, // Left
    icon: <Mail className="w-5 h-5" />,
    hoverStyles: { bgColor: '#f59e0b', textColor: '#000' }
  }
];

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`min-h-screen transition-colors duration-500 overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-200 ${isDark ? 'bg-neutral-950 text-neutral-200' : 'bg-[#f8f7f3] text-neutral-900'}`}>
      
      {/* Theme Toggle Button - Fixed Upper Right */}
      

      <Navbar isDark={isDark} />

      {/* Fixed Bubble Menu */}
      <BubbleMenu
        items={MENU_ITEMS}
        useFixedPosition={true}
        logo="GS"
        menuBg={isDark ? "#171717" : "#ffffff"}
        menuContentColor={isDark ? "#f59e0b" : "#d97706"}
        staggerDelay={0.08}
      />

      <main>
        <Hero isDark={isDark} toggleTheme={toggleTheme} />
        <About isDark={isDark} />
        <Skills isDark={isDark} />
        <Experience isDark={isDark} />
        <Portfolio isDark={isDark} />
        <Contact isDark={isDark} />
      </main>
    </div>
  );
}

export default App;