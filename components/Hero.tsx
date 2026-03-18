
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import TextType from './TextType';

const Hero: React.FC = () => {
  const [showStaticDescription, setShowStaticDescription] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950">
      {/* Abstract Background Animation */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-[100vw] h-[100vw] bg-amber-700/20 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -right-1/2 w-[100vw] h-[100vw] bg-yellow-900/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/5 border border-amber-500/20 backdrop-blur-md mb-6 min-h-[42px]">
            <TextType 
              text={["Polymath & Multimedia Specialist", "Creative Director", "Generative AI Expert", "Visual Storyteller"]}
              typingSpeed={50}
              deletingSpeed={30}
              pauseDuration={2000}
              cursorCharacter="_"
              className="text-sm text-amber-200/80 tracking-wider uppercase font-medium"
              cursorClassName="text-amber-400 font-bold"
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-amber-100 via-amber-300 to-amber-600">
            GIAN SAMONTE
          </h1>
          
          <div className="min-h-[96px] md:min-h-[80px] mb-8 flex items-start justify-center">
            {showStaticDescription ? (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto font-light"
              >
                Blending traditional <span className="text-amber-400 font-semibold">Graphic Design</span> with advanced <span className="text-yellow-200 font-semibold">Generative AI</span> workflows to tell compelling visual stories.
              </motion.p>
            ) : (
              <TextType
                as="p"
                className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto font-light"
                text={["Blending traditional Graphic Design with advanced Generative AI workflows to tell compelling visual stories."]}
                typingSpeed={30}
                cursorCharacter="|"
                loop={false}
                onTypingComplete={() => setShowStaticDescription(true)}
              />
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#portfolio"
              className="px-8 py-4 bg-amber-500 text-black rounded-full font-bold hover:bg-amber-400 transition-colors duration-300 shadow-[0_0_20px_rgba(245,158,11,0.4)]"
            >
              View Work
            </a>
            
            <motion.a 
              href="https://drive.google.com/uc?export=download&id=1DSCEw1byZAkmpQcdgenGhsOZfcjd-He1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border border-amber-500/30 text-amber-100 rounded-full font-medium hover:bg-amber-950/50 hover:border-amber-500/60 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-amber-500/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <Download className="w-5 h-5 group-hover:text-amber-400 transition-all duration-300 group-hover:translate-y-1 relative z-10" />
              <span className="relative z-10">Download CV</span>
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
