import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

interface ExperienceProps {
  isDark?: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDark = true }) => {
  return (
    <section id="experience" className={`py-24 transition-colors duration-500 ${isDark ? 'bg-neutral-950' : 'bg-[#f8f7f3]'}`}>
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-20"
        >
          <h2 className={`text-5xl font-black mb-6 tracking-tighter ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            JOURNEY <span className="text-amber-500">EXPERIENCE</span>.
          </h2>
          <p className={`text-lg max-w-2xl mx-auto font-light ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            Years of industry leadership and specialized creative growth.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`p-10 rounded-[3rem] border transition-all duration-500 ${
                isDark 
                ? 'bg-neutral-900/50 border-neutral-800 hover:border-amber-500/50 hover:bg-neutral-900' 
                : 'bg-white border-neutral-200 hover:border-amber-500/50 shadow-xl shadow-neutral-200/50'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                  <p className="text-xs font-black text-amber-500 uppercase tracking-widest mb-3">{exp.period}</p>
                  <h3 className={`text-3xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-neutral-900'}`}>{exp.role}</h3>
                  <div className="flex items-center gap-4 mt-2">
                    <span className={`text-lg font-bold ${isDark ? 'text-amber-200/60' : 'text-amber-700'}`}>{exp.company}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                    <span className={`text-sm ${isDark ? 'text-neutral-500' : 'text-neutral-400 font-medium'}`}>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {exp.description.map((desc, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                    <p className={`text-lg font-light leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;