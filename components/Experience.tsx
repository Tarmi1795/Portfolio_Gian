import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-neutral-900">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <p className="text-neutral-400">A timeline of my professional journey in Qatar and the Philippines.</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-neutral-700" />

          {EXPERIENCES.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-500 rounded-full border-4 border-neutral-900 mt-6 z-10 shadow-[0_0_10px_rgba(245,158,11,0.6)]" />

              <div className="ml-8 md:ml-0 md:w-1/2 md:px-8">
                <div className="bg-neutral-800/50 p-6 rounded-2xl border border-neutral-700 hover:border-amber-500/30 transition-all duration-300">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <Briefcase className="w-5 h-5 text-neutral-500" />
                  </div>
                  <h4 className="text-lg text-amber-400 mb-1">{exp.company}</h4>
                  <p className="text-sm text-neutral-500 mb-4">{exp.location} • {exp.period}</p>
                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-neutral-300 text-sm leading-relaxed flex items-start">
                        <span className="mr-2 mt-1.5 w-1 h-1 bg-amber-500/50 rounded-full flex-shrink-0" />
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;