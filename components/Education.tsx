import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School, PencilLine } from 'lucide-react';
import { EDUCATION } from '../constants';

interface EducationProps {
  isDark?: boolean;
}

const ICONS = [GraduationCap, BookOpen, School, PencilLine];

const Education: React.FC<EducationProps> = ({ isDark = true }) => {
  const sectionBg = isDark ? 'bg-neutral-950' : 'bg-[#f8f7f3]';
  const cardBg = isDark ? 'bg-neutral-900/60 border-white/5' : 'bg-white/80 border-neutral-200';
  const titleColor = isDark ? 'text-white' : 'text-neutral-900';
  const subtitleColor = isDark ? 'text-neutral-400' : 'text-neutral-500';
  const lineColor = isDark ? 'bg-white/8' : 'bg-neutral-200';

  return (
    <section
      id="education"
      className={`relative py-28 px-6 ${sectionBg} overflow-hidden`}
    >
      {/* Background glow */}
      <div
        className="absolute bottom-0 right-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <GraduationCap className="w-7 h-7 text-amber-500" />
            <span className={`text-xs font-bold uppercase tracking-[0.3em] ${subtitleColor}`}>
              Academic Background
            </span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${titleColor}`}>
            Education<span className="text-amber-500">.</span>
          </h2>

          {/* Decorative line */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className={`h-px flex-1 max-w-[100px] ${isDark ? 'bg-white/10' : 'bg-neutral-300'}`} />
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <div className={`h-px flex-1 max-w-[100px] ${isDark ? 'bg-white/10' : 'bg-neutral-300'}`} />
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className={`absolute left-7 top-0 bottom-0 w-px ${lineColor} md:left-1/2 md:-translate-x-px`} />

          <div className="flex flex-col gap-10">
            {EDUCATION.map((edu, index) => {
              const Icon = ICONS[index % ICONS.length];
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Card — takes half the width on md+ */}
                  <div className={`pl-16 md:pl-0 md:w-[calc(50%-2.5rem)] ${isLeft ? 'md:pr-10' : 'md:pl-10'}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25 }}
                      className={`rounded-2xl border backdrop-blur-sm p-6 ${cardBg}`}
                      style={{
                        boxShadow: isDark
                          ? '0 4px 24px rgba(0,0,0,0.35)'
                          : '0 4px 24px rgba(0,0,0,0.05)',
                      }}
                    >
                      {/* Top accent */}
                      <div className="h-0.5 w-8 rounded-full bg-amber-500 mb-4" />

                      <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${subtitleColor}`}>
                        {edu.period}
                      </p>
                      <h3 className={`text-lg font-black leading-snug mb-1 ${titleColor}`}>
                        {edu.degree}
                      </h3>
                      <p className="text-amber-500 text-sm font-semibold">{edu.school}</p>
                      {edu.note && (
                        <p className={`mt-2 text-xs italic ${subtitleColor}`}>
                          {edu.note}
                        </p>
                      )}
                    </motion.div>
                  </div>

                  {/* Dot on the timeline */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-14 h-14 shrink-0">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border shadow-lg"
                      style={{
                        background: isDark ? '#171717' : '#ffffff',
                        borderColor: isDark ? 'rgba(245,158,11,0.3)' : 'rgba(245,158,11,0.5)',
                        boxShadow: '0 0 0 4px rgba(245,158,11,0.08)',
                      }}
                    >
                      <Icon className="w-5 h-5 text-amber-500" />
                    </div>
                  </div>

                  {/* Spacer for the other half on md+ */}
                  <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
