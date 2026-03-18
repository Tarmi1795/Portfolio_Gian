import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface BubbleMenuItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  rotation: number;
  hoverStyles: {
    bgColor: string;
    textColor: string;
  };
}

interface BubbleMenuProps {
  items: BubbleMenuItem[];
  useFixedPosition?: boolean;
  logo?: string;
  menuBg?: string;
  menuContentColor?: string;
  staggerDelay?: number;
  isDark?: boolean;
}

const BubbleMenu: React.FC<BubbleMenuProps> = ({
  items,
  useFixedPosition = true,
  logo = "GS",
  menuBg = "#171717",
  menuContentColor = "#f59e0b",
  staggerDelay = 0.08,
  isDark = true
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const containerClasses = useFixedPosition
    ? "fixed bottom-10 right-10 z-[100]"
    : "relative";

  // Light mode overrides if menuBg/menuContentColor weren't passed specifically
  const effectiveMenuBg = isDark ? menuBg : "#ffffff";
  const effectiveContentColor = isDark ? menuContentColor : "#d97706";

  return (
    <div className={containerClasses} ref={menuRef}>
      <div className="relative">
        {/* Main Bubble Toggle */}
        <motion.button
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 relative border transition-colors duration-500"
          style={{ 
            backgroundColor: effectiveMenuBg,
            borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
            color: effectiveContentColor 
          }}
        >
          <span className="text-xl font-black tracking-tighter">{logo}</span>
          
          {/* Animated Ring */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full border-2 border-current opacity-20"
          />
        </motion.button>

        {/* Menu Items */}
        <AnimatePresence>
          {isOpen && (
            <>
              {items.map((item, index) => {
                const radius = 90;
                const angle = (item.rotation * Math.PI) / 180;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                    animate={{ opacity: 1, x, y, scale: 1 }}
                    exit={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                      delay: index * staggerDelay
                    }}
                    onClick={() => setIsOpen(false)}
                    className="absolute top-0 left-0 w-12 h-12 rounded-full flex items-center justify-center shadow-lg group border transition-all duration-300"
                    style={{ 
                        backgroundColor: isDark ? '#262626' : '#f0f0f0',
                        borderColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                        color: isDark ? '#a3a3a3' : '#737373' 
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      backgroundColor: item.hoverStyles.bgColor,
                      color: item.hoverStyles.textColor,
                      boxShadow: `0 0 20px ${item.hoverStyles.bgColor}66`
                    }}
                  >
                    <div className="relative">
                      {item.icon}
                      {/* Tooltip */}
                      <span className="absolute left-full ml-4 px-2 py-1 bg-neutral-900 text-white text-[10px] font-bold uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/10">
                        {item.label}
                      </span>
                    </div>
                  </motion.a>
                );
              })}
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BubbleMenu;