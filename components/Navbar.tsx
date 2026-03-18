import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Work', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll Spy Logic
      const triggerPoint = window.innerHeight * 0.3; // Trigger when section is 30% down the screen
      const sectionIds = NAV_LINKS.map(link => link.href.substring(1));
      let current = 'home';

      for (const section of sectionIds) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= triggerPoint) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    // Smooth scroll is handled by CSS html { scroll-behavior: smooth }
    // but we can manually set active state for instant feedback
    setActiveSection(href.substring(1));
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-950/80 backdrop-blur-md shadow-lg py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          className="text-xl md:text-2xl font-bold text-white tracking-tighter hover:text-amber-400 transition-colors z-50 relative"
          onClick={() => handleNavClick('#home')}
        >
          GIAN SAMONTE<span className="text-amber-500">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${isActive ? 'text-amber-400' : 'text-neutral-400 hover:text-amber-200'}`}
              >
                {/* Hover Background Pill */}
                {hoveredLink === link.name && (
                  <motion.span 
                    layoutId="navHover"
                    className="absolute inset-0 bg-white/5 rounded-full -z-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                
                {/* Active Indicator Dot */}
                {isActive && (
                   <motion.span 
                     layoutId="navActive"
                     className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.8)]"
                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
                   />
                )}
                
                {link.name}
              </a>
            );
          })}
          
          <motion.a 
            href="#contact" 
            onClick={() => handleNavClick('#contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-6 px-6 py-2.5 text-sm font-bold text-black bg-gradient-to-r from-amber-500 to-amber-400 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all flex items-center gap-2"
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[0px] bg-neutral-950/95 backdrop-blur-xl border-b border-white/10 flex flex-col pt-24 px-6 space-y-2 h-screen z-40"
          >
            {NAV_LINKS.map((link) => {
               const isActive = activeSection === link.href.substring(1);
               return (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => handleNavClick(link.href)}
                  className={`text-2xl font-bold py-4 border-b border-white/5 ${isActive ? 'text-amber-400' : 'text-neutral-400'}`}
                >
                  {link.name}
                </a>
               );
            })}
            <div className="pt-8">
                <a 
                  href="#contact" 
                  onClick={() => handleNavClick('#contact')}
                  className="block w-full py-4 text-center text-lg font-bold text-black bg-amber-500 rounded-xl"
                >
                  Hire Me
                </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;