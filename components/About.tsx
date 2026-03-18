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
            whileInView={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.02 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-yellow-600 rounded-2xl transform rotate-3 blur-sm opacity-30"></div>
            <img
              src="https://iili.io/ft23weS.jpg"
              alt="Gian Samonte"
              className={`relative rounded-2xl shadow-2xl transition-all duration-500 w-full object-cover h-[500px] border ${isDark ? 'border-neutral-800 grayscale hover:grayscale-0' : 'border-neutral-200'}`}
            />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.02 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`text-5xl font-bold mb-8 tracking-tighter ${headingColor}`}>About Me</h2>

            <p className={`text-lg leading-relaxed mb-6 font-light ${textColor}`}>
              A results-driven <strong className="text-amber-500">Polymath and Multimedia Specialist</strong> with over 8 years of professional experience in the Qatar market and Philippines.
            </p>

            <p className={`text-lg leading-relaxed mb-6 font-light ${textColor}`}>
              I possess unique expertise in blending traditional graphic design (Adobe Suite) with advanced Generative AI workflows including <span className="text-amber-500 font-medium">Sora, Flux, and Midjourney</span>.
            </p>

            <p className={`text-lg leading-relaxed font-light ${textColor}`}>
              Proven track record of translating complex data into compelling infographics and visual stories. Highly adaptable, disciplined in remote environments, and committed to delivering high-fidelity assets that align with business objectives.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className={`p-6 rounded-2xl border transition-all duration-500 ${isDark ? 'bg-neutral-900/50 border-neutral-800 hover:border-amber-500/50' : 'bg-white border-neutral-100 shadow-sm hover:border-amber-500/50'}`}>
                <h3 className={`text-3xl font-bold mb-1 ${headingColor}`}>8+</h3>
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