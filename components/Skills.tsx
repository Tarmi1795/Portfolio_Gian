import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

interface SkillsProps {
  isDark?: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDark = true }) => {
  return (
    <section id="skills" className={`py-24 transition-colors duration-500 ${isDark ? 'bg-neutral-900' : 'bg-[#f0f0f0]'}`}>
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <h2 className={`text-4xl md:text-5xl font-black mb-6 tracking-tighter ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            MY <span className="text-amber-500">ARSENAL</span>.
          </h2>
          <p className={`text-lg max-w-2xl mx-auto font-light ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Mastering the intersection of traditional creativity and cutting-edge artificial intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-10 rounded-[2.5rem] border transition-all duration-500 group ${
                isDark 
                ? 'bg-neutral-950 border-neutral-800 hover:border-amber-500/50 shadow-xl' 
                : 'bg-white border-neutral-200 hover:border-amber-500/50 shadow-lg'
              }`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-colors duration-500 ${isDark ? 'bg-neutral-900' : 'bg-amber-50'} group-hover:scale-110 transition-transform`}>
                {category.icon}
              </div>
              <h3 className={`text-2xl font-black mb-8 tracking-tighter ${isDark ? 'text-white' : 'text-neutral-900'}`}>{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-xl border transition-all duration-500 ${
                      isDark 
                      ? 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:text-amber-400 hover:border-amber-500/50' 
                      : 'bg-neutral-50 text-neutral-600 border-neutral-200 hover:text-amber-600 hover:border-amber-500/50 hover:bg-white'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;