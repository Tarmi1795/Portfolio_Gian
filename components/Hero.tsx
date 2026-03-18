import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Download, Sparkles, Moon, Sun } from 'lucide-react';
import TextType from './TextType';
import ProfileAnimation from './ProfileAnimation';

interface HeroProps {
  toggleTheme?: () => void;
  isDark?: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDark = true, toggleTheme }) => {
  const [showStaticDescription, setShowStaticDescription] = useState(false);

  return (
    <section id="home" className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-500 ${isDark ? 'bg-neutral-950' : 'bg-[#f8f7f3]'}`}>
      {/* Abstract Background Animation */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: isDark ? [0.1, 0.2, 0.1] : [0.05, 0.15, 0.05],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className={`absolute -top-1/2 -left-1/2 w-[100vw] h-[100vw] rounded-full blur-[100px] ${isDark ? 'bg-amber-700/20' : 'bg-amber-500/10'}`}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: isDark ? [0.1, 0.2, 0.1] : [0.05, 0.15, 0.05],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className={`absolute -bottom-1/2 -right-1/2 w-[100vw] h-[100vw] rounded-full blur-[100px] ${isDark ? 'bg-yellow-900/20' : 'bg-yellow-600/10'}`}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Picture Sequence Animation */}
          <div className="mb-12 relative flex justify-center">
            <ProfileAnimation 
              isDark={isDark} 
              className="w-32 h-32 md:w-56 md:h-56 relative z-10"
            />
            
            {/* Orbiting Elements Accent */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 -z-10 w-40 h-40 md:w-64 md:h-64 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-amber-500/20 border border-amber-500/40 rounded-lg backdrop-blur-md" />
            </motion.div>
          </div>

          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-md mb-6 min-h-[42px] transition-all duration-500 ${isDark ? 'bg-amber-500/5 border-amber-500/20' : 'bg-white/60 border-amber-500/10 shadow-sm'}`}>
            <TextType
              text={["Polymath & Multimedia Specialist", "Creative Director", "Generative AI Expert", "Visual Storyteller"]}
              typingSpeed={50}
              deletingSpeed={30}
              pauseDuration={2000}
              cursorCharacter="_"
              className={`text-sm tracking-wider uppercase font-medium ${isDark ? 'text-amber-200/80' : 'text-amber-800'}`}
              cursorClassName="text-amber-500 font-bold"
            />
          </div>

          <h1 className={`text-6xl md:text-8xl font-black mb-8 tracking-tighter bg-clip-text text-transparent transition-all duration-700 ${isDark ? 'bg-gradient-to-b from-amber-100 via-amber-300 to-amber-600' : 'bg-gradient-to-b from-neutral-800 via-amber-700 to-amber-900'}`}>
            GIAN SAMONTE
          </h1>

          <div className="min-h-[96px] md:min-h-[80px] mb-12 flex items-start justify-center">
            {showStaticDescription ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}
              >
                Blending traditional <span className="text-amber-500 font-bold">Graphic Design</span> with advanced <span className="text-amber-600 font-bold">Generative AI</span> workflows to tell compelling visual stories.
              </motion.p>
            ) : (
              <TextType
                as="p"
                className={`text-xl md:text-2xl max-w-2xl mx-auto font-light leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}
                text={["Blending traditional Graphic Design with advanced Generative AI workflows to tell compelling visual stories."]}
                typingSpeed={30}
                cursorCharacter="|"
                loop={false}
                onTypingComplete={() => setShowStaticDescription(true)}
              />
            )}
          </div>

          <div className="mb-8">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-4 rounded-2xl shadow-lg backdrop-blur-md border transition-all duration-300 flex items-center gap-3 mx-auto ${isDark
                  ? 'bg-neutral-900/80 border-neutral-800 text-yellow-400 hover:text-yellow-200 shadow-yellow-500/5'
                  : 'bg-white/80 border-neutral-200 text-amber-600 hover:text-amber-800 shadow-amber-500/10'
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
                  className="flex items-center gap-2"
                >
                  {isDark ? (
                    <>
                      <Moon className="w-5 h-5 fill-yellow-400" />
                      <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Switch to Light</span>
                    </>
                  ) : (
                    <>
                      <Sun className="w-5 h-5 fill-amber-600" />
                      <span className="text-xs font-bold uppercase tracking-widest text-neutral-800">Switch to Dark</span>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-amber-500 text-black rounded-2xl font-black uppercase tracking-widest shadow-[0_20px_40px_-15px_rgba(245,158,11,0.5)] hover:bg-amber-400 transition-all duration-300"
            >
              View Projects
            </motion.a>

            <motion.a
              href="https://drive.google.com/uc?export=download&id=1DSCEw1byZAkmpQcdgenGhsOZfcjd-He1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-10 py-5 bg-transparent border-2 rounded-2xl font-bold transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 group relative overflow-hidden ${isDark ? 'border-amber-500/30 text-amber-100 hover:bg-amber-900/20' : 'border-amber-500/50 text-amber-900 hover:bg-amber-50'}`}
            >
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              <span>Download Gian's Resume</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-amber-500/50"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default Hero;