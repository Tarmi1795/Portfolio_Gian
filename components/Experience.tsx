import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { Briefcase } from 'lucide-react';

interface ExperienceProps {
  isDark?: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDark = true }) => {
  const sectionBg = isDark ? 'bg-neutral-900' : 'bg-[#f0f0f0]';
  const headingColor = isDark ? 'text-white' : 'text-neutral-900';
  const textColor = isDark ? 'text-neutral-300' : 'text-neutral-600';
  const cardBg = isDark ? 'bg-neutral-950/50' : 'bg-white';
  const borderColor = isDark ? 'border-neutral-800' : 'border-neutral-200';

  return (
    <section id="experience" className={`py-24 transition-colors duration-500 ${sectionBg}`}>
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 text-center"
        >
          <h2 className={`text-5xl font-bold mb-6 tracking-tighter ${headingColor}`}>
            Professional <span className="text-amber-500">Experience</span>.
          </h2>
          <p className={`text-lg max-w-2xl mx-auto font-light ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
            A timeline of my professional journey in Qatar and the Philippines.
          </p>
        </motion.div>

        <div className="relative">
           {/* Vertical Line */}
          <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px ${isDark ? 'bg-neutral-800' : 'bg-neutral-300'}`} />

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
              <div className={`absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 z-10 shadow-lg ${isDark ? 'bg-amber-500 border-neutral-900' : 'bg-amber-500 border-white'} mt-6 shadow-amber-500/30`} />

              <div className="ml-8 md:ml-0 md:w-1/2 md:px-8">
                <div className={`p-8 rounded-3xl border transition-all duration-500 ${cardBg} ${borderColor} hover:border-amber-500/30 group`}>
                  <div className="flex items-start justify-between mb-4">
                    <h3 className={`text-2xl font-bold tracking-tight ${headingColor}`}>{exp.role}</h3>
                    <Briefcase className={`w-6 h-6 ${isDark ? 'text-neutral-600' : 'text-neutral-400'}`} />
                  </div>
                  <h4 className="text-lg text-amber-500 font-bold mb-1">{exp.company}</h4>
                  <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold mb-6">{exp.location} • {exp.period}</p>
                  
                  <ul className="space-y-4">
                    {exp.description.map((desc, i) => (
                      <li key={i} className={`text-base font-light leading-relaxed flex items-start ${textColor}`}>
                        <span className="mr-3 mt-2.5 w-1.5 h-1.5 bg-amber-500/50 rounded-full flex-shrink-0" />
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