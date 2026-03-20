import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { Briefcase, FlaskConical, MapPin, CheckCircle2, Award, Zap, Terminal } from 'lucide-react';

interface ExperienceProps {
  isDark?: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDark = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const employment = EXPERIENCES.filter(exp => exp.type === 'employment');
  const freelance = EXPERIENCES.filter(exp => exp.type === 'freelance');

  const SectionTitle = ({ title, icon: Icon, delay = 0, subtitle }: { title: string, icon: any, delay?: number, subtitle: string }) => (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="text-center mb-24"
    >
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="h-px w-12 bg-amber-500/20" />
        <Icon className="w-6 h-6 text-amber-500" />
        <div className="h-px w-12 bg-amber-500/20" />
      </div>
      <h3 className={	ext-3xl md:text-5xl font-black tracking-tight mb-4 }>
        {title}
      </h3>
      <p className={	ext-sm tracking-[0.2em] font-bold uppercase }>
        {subtitle}
      </p>
    </motion.div>
  );

  const ExperienceCard = ({ exp, isLeft, index }: { exp: any, isLeft: boolean, index: number }) => {
    return (
      <div className={elative flex flex-col md:flex-row items-center justify-between mb-32 w-full }>
        {/* Timeline Node */}
        <div className="hidden md:flex absolute left-1/2 top-10 -translate-x-1/2 w-12 h-12 rounded-2xl bg-neutral-950 border border-amber-500/30 items-center justify-center z-20 shadow-[0_0_20px_rgba(245,158,11,0.1)]">
          {exp.type === 'employment' ? <Briefcase className="w-5 h-5 text-amber-500" /> : <FlaskConical className="w-5 h-5 text-amber-500" />}
        </div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -60 : 60, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
          className="w-full md:w-[45%] z-10"
        >
          <div className={group p-8 md:p-10 rounded-[3rem] border backdrop-blur-xl transition-all duration-500 }>
            <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
              <div>
                <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2 block opacity-70">
                  {exp.period}
                </span>
                <h4 className={	ext-3xl font-black tracking-tighter mb-2 leading-none }>
                  {exp.role}
                </h4>
                <p className="text-amber-500 font-bold text-lg tracking-tight group-hover:translate-x-1 transition-transform inline-block">
                  {exp.company}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8 text-xs font-bold uppercase tracking-widest opacity-40">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {exp.location}
              </span>
            </div>

            <ul className="space-y-4">
              {exp.description.map((item: string, idx: number) => (
                <li key={idx} className="flex gap-4 text-[15px] leading-relaxed group/item">
                  <CheckCircle2 className="w-5 h-5 text-amber-500/30 group-hover/item:text-amber-500 shrink-0 transition-colors mt-0.5" />
                  <span className={isDark ? 'text-neutral-400' : 'text-neutral-600'}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Spacer for symmetry */}
        <div className="hidden md:block w-[45%]" />
      </div>
    );
  };

  return (
    <section id="experience" className={py-40 relative transition-colors duration-500 }>
      
      {/* Background Story Watermark */}
      <div className="absolute top-40 right-10 pointer-events-none opacity-[0.02] select-none rotate-90 origin-right">
        <h2 className={	ext-[15rem] font-black tracking-tighter }>MY JOURNEY</h2>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative" ref={containerRef}>
        
        {/* Intro Story */}
        <div className="max-w-4xl mx-auto mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 rounded-3xl bg-amber-500/10 flex items-center justify-center mb-10 border border-amber-500/20">
              <Terminal className="w-8 h-8 text-amber-500" />
            </div>
            <h2 className={	ext-4xl md:text-7xl font-black mb-10 tracking-tight leading-[0.9] }>
              The <span className="text-amber-500 px-4">Polymath</span> Journey<span className="text-amber-500">.</span>
            </h2>
            <p className={	ext-xl md:text-2xl font-light leading-relaxed italic }>
               "A versatile Senior Accountant and Full-Stack Developer bridging the gap between financial precision and technical innovation for nearly a decade."
            </p>
            <div className="mt-12 flex gap-4">
               {[Award, Zap, Zap].map((Icon, i) => (
                 <div key={i} className="w-12 h-1 bg-amber-500/20 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ x: ["-100%", "100%"] }} 
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                      className="w-full h-full bg-amber-500"
                    />
                 </div>
               ))}
            </div>
          </motion.div>
        </div>

        {/* Central Path Line */}
        <div className="hidden md:block absolute left-1/2 -translate-x-px top-[600px] bottom-0 w-px bg-neutral-800/20">
          <motion.div style={{ scaleY, originY: 0 }} className="w-full h-full bg-gradient-to-b from-amber-500 to-amber-700 shadow-[0_0_15px_rgba(245,158,11,0.3)]" />
        </div>

        {/* Corporate Section */}
        <div className="relative pt-20">
          <SectionTitle 
            title="Corporate Career" 
            subtitle="The Foundations of Precision"
            icon={Briefcase} 
          />
          <div className="mt-20">
            {employment.map((exp, i) => <ExperienceCard key={exp.id} exp={exp} isLeft={i % 2 === 0} index={i} />)}
          </div>
        </div>

        {/* Freelance Section */}
        <div className="relative mt-40">
          <SectionTitle 
            title="Freelance & SaaS" 
            subtitle="Innovation & Scalable Solutions"
            icon={FlaskConical} 
          />
          <div className="mt-20">
            {freelance.map((exp, i) => <ExperienceCard key={exp.id} exp={exp} isLeft={i % 2 !== 0} index={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
