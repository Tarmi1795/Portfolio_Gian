import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Core Competencies</h2>
          <p className="text-neutral-400">Bridging the gap between creativity and technology</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 p-8 rounded-2xl hover:border-amber-500/50 transition-colors duration-300 group shadow-lg hover:shadow-amber-900/10"
            >
              <div className="mb-6 p-4 bg-neutral-800 rounded-xl w-fit group-hover:bg-amber-950/30 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-neutral-800 text-neutral-300 text-sm rounded-full border border-neutral-700 group-hover:border-amber-500/30 group-hover:text-amber-100/80 transition-all"
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