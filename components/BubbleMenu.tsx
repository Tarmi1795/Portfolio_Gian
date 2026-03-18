
import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';

export interface BubbleMenuItem {
  label: string;
  href: string;
  rotation: number;
  icon?: React.ReactNode;
  hoverStyles?: {
    bgColor: string;
    textColor: string;
  };
}

interface BubbleMenuProps {
  logo?: React.ReactNode | string;
  items: BubbleMenuItem[];
  menuBg?: string;
  menuContentColor?: string;
  animationEase?: string;
  animationDuration?: number;
  staggerDelay?: number;
  useFixedPosition?: boolean;
}

const BubbleMenu: React.FC<BubbleMenuProps> = ({
  logo,
  items,
  menuBg = "#ffffff",
  menuContentColor = "#111111",
  animationEase = "back.out(1.5)",
  animationDuration = 0.5,
  staggerDelay = 0.1,
  useFixedPosition = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isOpen) {
        // Animate Items opening
        items.forEach((item, index) => {
          const angle = item.rotation * (Math.PI / 180);
          const radius = 120; // Distance from center
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          gsap.to(itemsRef.current[index], {
            x: x,
            y: y,
            scale: 1,
            opacity: 1,
            duration: animationDuration,
            delay: index * staggerDelay,
            ease: animationEase
          });
        });

        // Rotate toggle button
        gsap.to(toggleButtonRef.current, {
          rotation: 180,
          duration: 0.4,
          ease: "power2.out"
        });

      } else {
        // Animate Items closing
        gsap.to(itemsRef.current, {
          x: 0,
          y: 0,
          scale: 0,
          opacity: 0,
          duration: animationDuration * 0.8,
          stagger: {
            each: 0.05,
            from: "end"
          },
          ease: "power2.in"
        });

        // Rotate toggle button back
        gsap.to(toggleButtonRef.current, {
          rotation: 0,
          duration: 0.4,
          ease: "power2.out"
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [isOpen, items, animationDuration, animationEase, staggerDelay]);

  return (
    <div 
      ref={containerRef} 
      className={`z-[100] flex items-center justify-center ${useFixedPosition ? 'fixed bottom-8 right-8' : 'relative'}`}
    >
      {/* Menu Items */}
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          ref={(el) => { itemsRef.current[index] = el; }}
          className="absolute flex items-center justify-center w-12 h-12 rounded-full shadow-lg opacity-0 scale-0 transform origin-center"
          style={{ 
            backgroundColor: menuBg, 
            color: menuContentColor 
          }}
          onMouseEnter={(e) => {
            if (item.hoverStyles) {
              gsap.to(e.currentTarget, { 
                backgroundColor: item.hoverStyles.bgColor, 
                color: item.hoverStyles.textColor,
                scale: 1.2,
                duration: 0.2
              });
            } else {
              gsap.to(e.currentTarget, { scale: 1.2, duration: 0.2 });
            }
          }}
          onMouseLeave={(e) => {
            gsap.to(e.currentTarget, { 
              backgroundColor: menuBg, 
              color: menuContentColor,
              scale: 1,
              duration: 0.2
            });
          }}
          onClick={() => setIsOpen(false)}
          title={item.label}
        >
           {item.icon ? item.icon : <span className="text-[10px] font-bold">{item.label}</span>}
        </a>
      ))}

      {/* Main Toggle Button */}
      <button
        ref={toggleButtonRef}
        onClick={toggleMenu}
        className="relative z-10 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-105 active:scale-95 border-2 border-white/10"
        style={{ backgroundColor: menuBg, color: menuContentColor }}
      >
        {isOpen ? <X className="w-8 h-8" /> : (
          typeof logo === 'string' ? <span className="font-bold text-xl tracking-tighter">{logo}</span> : logo || <Menu className="w-8 h-8" />
        )}
      </button>
      
      {/* Backdrop for closing when clicking outside */}
      {isOpen && (
        <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-[2px] -z-10" 
            onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default BubbleMenu;
