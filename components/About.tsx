
import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral-900 relative overflow-hidden">
       {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-900/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-yellow-600 rounded-2xl transform rotate-3 blur-sm opacity-30"></div>
            <img 
              src="https://iili.io/ft23weS.jpg" 
              alt="Gian Samonte" 
              className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 w-full object-cover h-[500px] border border-neutral-800"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
            <p className="text-neutral-300 text-lg leading-relaxed mb-6">
              A results-driven <strong className="text-amber-400">Polymath and Multimedia Specialist</strong> with over 8 years of professional experience in the Qatar market and Philippines.
            </p>
            <p className="text-neutral-300 text-lg leading-relaxed mb-6">
              I possess unique expertise in blending traditional graphic design (Adobe Suite) with advanced Generative AI workflows including <span className="text-amber-400">Sora, Flux, and Midjourney</span>. 
            </p>
            <p className="text-neutral-300 text-lg leading-relaxed">
              Proven track record of translating complex data into compelling infographics and visual stories. Highly adaptable, disciplined in remote environments, and committed to delivering high-fidelity assets that align with business objectives.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
               <div className="p-4 bg-neutral-800/50 rounded-lg border border-neutral-700 hover:border-amber-500/50 transition-colors">
                  <h3 className="text-2xl font-bold text-white">8+</h3>
                  <p className="text-neutral-400 text-sm">Years Experience</p>
               </div>
               <div className="p-4 bg-neutral-800/50 rounded-lg border border-neutral-700 hover:border-amber-500/50 transition-colors">
                  <h3 className="text-2xl font-bold text-white">100+</h3>
                  <p className="text-neutral-400 text-sm">Infographics Created</p>
               </div>
            </div>

            <div className="mt-8">
              <a 
                href="https://drive.google.com/uc?export=download&id=1DSCEw1byZAkmpQcdgenGhsOZfcjd-He1"
                className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-300 font-medium transition-colors group"
              >
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" /> 
                <span className="border-b border-amber-500/30 group-hover:border-amber-300 pb-0.5">Download Full Resume</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
