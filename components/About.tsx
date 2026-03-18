import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, Rocket, User } from 'lucide-react';

interface AboutProps {
  isDark?: boolean;
}

const About: React.FC<AboutProps> = ({ isDark = true }) => {
  const stats = [
    { label: 'Years Experience', value: '7+', icon: Award, color: 'text-amber-500' },
    { label: 'Projects Completed', value: '250+', icon: Rocket, color: 'text-yellow-500' },
    { label: 'AI Models Mastered', value: '15+', icon: Code2, color: 'text-orange-500' },
  ];

  const bgColor = isDark ? 'bg-neutral-900' : 'bg-white shadow-xl shadow-neutral-200/50';
  const textColor = isDark ? 'text-neutral-300' : 'text-neutral-600';
  const headingColor = isDark ? 'text-white' : 'text-neutral-900';

  return (
    <section id="about" className={`py-24 relative transition-colors duration-500 ${isDark ? 'bg-neutral-950' : 'bg-[#f8f7f3]'}`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image/Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className={`aspect-square rounded-[3rem] overflow-hidden relative group transition-all duration-500 ${isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-neutral-200 shadow-2xl'}`}>
              <div className={`absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent z-10`} />
              
              {/* Profile Placeholder Visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-32 h-32 rounded-full flex items-center justify-center transition-colors duration-500 ${isDark ? 'bg-neutral-800' : 'bg-neutral-100'}`}>
                   <User className={`w-16 h-16 ${isDark ? 'text-neutral-600' : 'text-neutral-300'}`} />
                </div>
              </div>

              {/* Decorative Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className={`absolute top-12 right-12 p-4 rounded-2xl backdrop-blur-md border z-20 transition-all duration-500 ${isDark ? 'bg-neutral-900/80 border-neutral-700 shadow-amber-500/10' : 'bg-white/80 border-neutral-200 shadow-lg'}`}
              >
                <Code2 className="w-6 h-6 text-amber-500" />
              </motion.div>
            </div>

            {/* Back Decoration */}
            <div className={`absolute -bottom-6 -right-6 w-full h-full rounded-[3rem] -z-10 transition-all duration-500 ${isDark ? 'bg-amber-500/10 border-2 border-amber-500/20' : 'bg-amber-500/5 border-2 border-amber-500/10'}`} />
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`text-5xl font-black mb-8 tracking-tighter ${headingColor}`}>
              CRAFTING THE <span className="text-amber-500">NEXT</span> VISUAL ERA.
            </h2>
            
            <p className={`text-lg mb-8 leading-relaxed font-light ${textColor}`}>
              With over 7 years of deep-rooted experience in graphic design and multimedia, I've evolved into a polymath specialist who seamlessly integrates <span className="font-bold text-amber-600/80">Generative AI</span> into modern creative workflows.
            </p>

            <p className={`text-lg mb-12 leading-relaxed font-light ${textColor}`}>
              Based in Doha, Qatar, I help brands bridge the gap between imagination and reality, utilizing cutting-edge tools like Sora, Midjourney, and custom-trained LLMs to deliver high-impact visual storytelling.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className={`p-6 rounded-3xl border transition-all duration-500 ${isDark ? 'bg-neutral-900 border-neutral-800 hover:border-amber-500/50' : 'bg-white border-neutral-100 hover:border-amber-500/50 shadow-sm'}`}
                >
                  <stat.icon className={`w-8 h-8 mb-4 ${stat.color}`} />
                  <h3 className={`text-3xl font-black mb-1 ${headingColor}`}>{stat.value}</h3>
                  <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;