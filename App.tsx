
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import BubbleMenu, { BubbleMenuItem } from './components/BubbleMenu';
import { Home, User, Brain, Briefcase, Image as ImageIcon, Mail } from 'lucide-react';

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
  return (
    <div className="bg-neutral-950 min-h-screen text-neutral-200 overflow-x-hidden selection:bg-amber-500/30 selection:text-amber-200">
      <Navbar />
      
      {/* Fixed Bubble Menu */}
      <BubbleMenu 
        items={MENU_ITEMS}
        useFixedPosition={true}
        logo="GS"
        menuBg="#171717"
        menuContentColor="#f59e0b"
        staggerDelay={0.08}
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;
