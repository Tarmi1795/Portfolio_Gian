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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      

            {/* Floating Theme Toggle - Sticky on all sections */}
      <motion.button
        layout
        onClick={toggleTheme}
        initial={{ opacity: 0, x: 20 }}
        animate={{ 
          opacity: 1, 
          x: 0,
        }}
        style={{
          top: scrolled ? 'auto' : '96px',
          bottom: scrolled ? '112px' : 'auto',
          right: scrolled ? '40px' : '24px',
        }}
        transition={{ 
          layout: { duration: 0.6, type: 'spring', stiffness: 200, damping: 25 },
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed z-[110] p-4 rounded-full shadow-2xl backdrop-blur-xl border transition-all duration-300 ${
          isDark 
            ? 'bg-neutral-900/90 border-neutral-800 text-yellow-400 hover:text-yellow-200 hover:shadow-yellow-500/20' 
            : 'bg-white/90 border-neutral-200 text-amber-600 hover:text-amber-800 hover:shadow-amber-500/20'
        }`}
        aria-label="Toggle Theme"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isDark ? 'dark' : 'light'}
            initial={{ y: -10, opacity: 0, rotate: -45 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 10, opacity: 0, rotate: 45 }}
            transition={{ duration: 0.2 }}
          >
            {isDark ? <Moon className="w-6 h-6 fill-yellow-400" /> : <Sun className="w-6 h-6 fill-amber-600" />}
          </motion.div>
        </AnimatePresence>
      </motion.button>

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