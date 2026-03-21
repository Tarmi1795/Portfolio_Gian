import React from 'react';
import { motion } from 'framer-motion';

interface AboutProps {
  isDark?: boolean;
}

const About: React.FC<AboutProps> = ({ isDark = true }) => {
  const textColor = isDark ? 'text-neutral-300' : 'text-neutral-600';
  const headingColor = isDark ? 'text-white' : 'text-neutral-900';
  const sectionBg = isDark ? 'bg-neutral-950' : 'bg-[#f8f7f3]';

  return (
    <section id="about" className={`py-24 relative overflow-hidden transition-colors duration-500 ${sectionBg}`}>
      {/* Decorative Lines */}
      <div className={`absolute top-0 left-0 w-full h-px ${isDark ? 'bg-gradient-to-r from-transparent via-amber-900/50 to-transparent' : 'bg-gradient-to-r from-transparent via-amber-200 to-transparent'}`} />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Image/Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-yellow-600 rounded-2xl transform rotate-3 blur-sm opacity-30"></div>

            <div className="relative overflow-hidden rounded-2xl">
              {/* Shine Animation */}
              <motion.div
                initial={{ x: '-150%', skewX: -45 }}
                whileHover={{ x: '150%' }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
              />

              <motion.img
                animate={{ y: [0, -20, 0], rotate: [0, 1, 0, -1, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                src="https://iili.io/ft23weS.jpg"
                alt="Gian Samonte"
                className={`relative rounded-2xl shadow-2xl transition-all duration-500 w-full object-cover h-[500px] border ${isDark ? 'border-neutral-800 grayscale hover:grayscale-0' : 'border-neutral-200'}`}
              />
            </div>
            {/* Smaller Name Accent */}
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`mt-8 text-3xl md:text-4xl font-black tracking-tighter ${headingColor}`}
            >
              GIAN PAULO SAMONTE<span className="text-amber-500">.</span>
            </motion.h3>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`text-5xl font-bold mb-8 tracking-tighter ${headingColor}`}>About Me</h2>

            <p className={`text-lg leading-relaxed mb-6 font-light ${textColor}`}>
              A versatile <strong className="text-amber-500">Senior Accountant, Full-Stack Developer, Multi-Media Designer</strong> with nearly a decade of experience <span className="text-amber-500 font-medium">bridging the gap between financial precision and technical innovation</span>.
            </p>
            <p className={`text-lg leading-relaxed mb-6 font-light ${textColor}`}>
              A polymath that specializes in transforming traditional accounting workflows through <span className="text-amber-500 font-medium">AI-driven automation, custom software development</span>, and strategic finance management.
            </p>
            <p className={`text-lg leading-relaxed font-light ${textColor}`}>
              Deep knowledge on Top ERP software, Currently spearheading complex system migrations and developing <span className="text-amber-500 font-medium">proprietary AI tools to optimize multi-million-dollar revenue cycles</span> in the energy and infrastructure sectors.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className={`p-6 rounded-2xl border transition-all duration-500 ${isDark ? 'bg-neutral-900/50 border-neutral-800 hover:border-amber-500/50' : 'bg-white border-neutral-100 shadow-sm hover:border-amber-500/50'}`}>
                <h3 className={`text-3xl font-bold mb-1 ${headingColor}`}>9+</h3>
                <p className="text-neutral-500 text-xs uppercase tracking-widest font-bold">Years Experience</p>
              </div>
              <div className={`p-6 rounded-2xl border transition-all duration-500 ${isDark ? 'bg-neutral-900/50 border-neutral-800 hover:border-amber-500/50' : 'bg-white border-neutral-100 shadow-sm hover:border-amber-500/50'}`}>
                <h3 className={`text-3xl font-bold mb-1 ${headingColor}`}>250+</h3>
                <p className="text-neutral-500 text-xs uppercase tracking-widest font-bold">Projects Completed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;