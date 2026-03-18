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

interface NavbarProps {
  isDark?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isDark = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll Spy Logic
      const triggerPoint = window.innerHeight * 0.3;
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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setActiveSection(href.substring(1));
  };

  const navBg = isDark 
    ? (scrolled ? 'bg-neutral-950/80 backdrop-blur-md border-b border-white/5 shadow-lg' : 'bg-transparent')
    : (scrolled ? 'bg-white/80 backdrop-blur-md border-b border-neutral-200/50 shadow-sm' : 'bg-transparent');

  const textColor = isDark ? 'text-white' : 'text-neutral-900';
  const mutedTextColor = isDark ? 'text-neutral-400 hover:text-amber-200' : 'text-neutral-500 hover:text-amber-600';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 ${navBg}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className={`text-xl md:text-2xl font-black tracking-tighter hover:text-amber-500 transition-colors z-50 relative ${textColor}`}
          onClick={() => handleNavClick('#home')}
        >
          GIAN SAMONTE<span className="text-amber-500">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`relative px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${isActive ? 'text-amber-500' : mutedTextColor}`}
              >
                {/* Hover Background Pill */}
                {hoveredLink === link.name && (
                  <motion.span
                    layoutId="navHover"
                    className={`absolute inset-0 rounded-full -z-10 ${isDark ? 'bg-white/5' : 'bg-black/5'}`}
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
                     className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.8)]"
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
            className={`ml-6 px-6 py-2.5 text-xs font-black uppercase tracking-widest rounded-full transition-all flex items-center gap-2 ${
              isDark 
              ? 'bg-amber-500 text-black shadow-[0_10px_20px_-5px_rgba(245,158,11,0.4)] hover:bg-amber-400' 
              : 'bg-amber-600 text-white shadow-lg hover:bg-amber-500'
            }`}
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden z-50 p-2 transition-colors duration-500 ${isDark ? 'text-white' : 'text-neutral-900'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed inset-0 flex flex-col pt-24 px-8 space-y-4 h-screen z-40 transition-colors duration-500 ${isDark ? 'bg-neutral-950/98 backdrop-blur-xl' : 'bg-white/98 backdrop-blur-xl'}`}
          >
            {NAV_LINKS.map((link) => {
               const isActive = activeSection === link.href.substring(1);
               return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-3xl font-black uppercase tracking-tighter py-4 border-b transition-colors duration-300 ${isDark ? 'border-white/5' : 'border-black/5'} ${isActive ? 'text-amber-500' : isDark ? 'text-neutral-500' : 'text-neutral-400'}`}
                >
                  {link.name}
                </a>
               );
            })}
            <div className="pt-12">
                <a
                  href="#contact"
                  onClick={() => handleNavClick('#contact')}
                  className="block w-full py-5 text-center text-lg font-black uppercase tracking-[0.2em] text-white bg-amber-600 rounded-2xl shadow-xl shadow-amber-600/20"
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