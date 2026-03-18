import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Play, ExternalLink, Filter } from 'lucide-react';

interface PortfolioProps {
  isDark?: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ isDark = true }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  // Derive unique categories from projects
  const categories = useMemo(() => {
    const cats = new Set(PROJECTS.map(p => p.category));
    return ['All', ...Array.from(cats)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className={`py-24 transition-colors duration-500 ${isDark ? 'bg-neutral-900' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className={`text-5xl font-black mb-6 tracking-tighter ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            SELECTED <span className="text-amber-500 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">WORKS</span>.
          </h2>
          <p className={`text-lg max-w-2xl mx-auto font-light ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
            A deep dive into visual narratives and AI-driven creative solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setPlayingVideoId(null);
              }}
              className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border ${
                activeCategory === category
                  ? 'bg-amber-500 text-black border-amber-500 shadow-xl shadow-amber-500/20'
                  : `bg-transparent border ${isDark ? 'text-neutral-400 border-neutral-800 hover:border-amber-500/50 hover:text-white' : 'text-neutral-500 border-neutral-200 hover:border-amber-500/50 hover:text-amber-600'}`
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`group relative overflow-hidden rounded-[3rem] border transition-all duration-500 ${
                  isDark 
                  ? 'bg-neutral-950 border-neutral-800 shadow-2xl' 
                  : 'bg-neutral-50 border-neutral-100 shadow-xl shadow-neutral-200/40'
                }`}    
              >
                <div className="aspect-video w-full h-full relative overflow-hidden bg-black">
                  {/* Video Player */}
                  {project.videoUrl && playingVideoId === project.id ? (
                    <iframe
                      src={`${project.videoUrl}${project.videoUrl.includes("?") ? "&" : "?"}autoplay=1&mute=0`}
                      className="absolute inset-0 w-full h-full z-20"
                      frameBorder="0"
                      allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                      allowFullScreen
                      title={project.title}
                    />
                  ) : (
                    /* Thumbnail Image */
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    />
                  )}

                  {/* Info Overlay - Hidden when video is playing */}
                  {!(project.videoUrl && playingVideoId === project.id) && (
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-10 z-10">

                      {/* Play Button for Video Projects */}
                      {project.videoUrl && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-transform duration-300 hover:scale-110 z-20">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setPlayingVideoId(project.id);
                            }}
                            className="w-20 h-20 bg-amber-500 text-black rounded-full flex items-center justify-center backdrop-blur-sm shadow-2xl group-hover:animate-pulse"
                            aria-label="Play video"
                          >
                            <Play className="w-8 h-8 fill-black ml-1" />
                          </button>
                        </div>
                      )}

                      {/* External Link Button for Web Projects */}
                      {project.link && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-transform duration-300 hover:scale-110 z-20">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center backdrop-blur-sm shadow-2xl group-hover:animate-pulse"
                            aria-label="Visit Website"
                          >
                            <ExternalLink className="w-8 h-8" />
                          </a>
                        </div>
                      )}

                      <span className="text-amber-400 text-xs font-black uppercase tracking-[0.3em] mb-3">{project.category}</span>
                      <h3 className="text-3xl font-black text-white mb-3 tracking-tighter">{project.title}</h3>
                      <p className="text-neutral-300 text-sm mb-6 line-clamp-2 font-light">{project.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                          <span key={t} className="px-3 py-1 bg-white/10 text-white/90 text-[10px] font-black uppercase tracking-widest rounded-lg backdrop-blur-md border border-white/10">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Mobile Caption */}
                <div className={`p-8 md:hidden ${project.videoUrl && playingVideoId === project.id ? 'hidden' : 'block'}`}>  
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-amber-600 text-[10px] font-black uppercase tracking-widest">{project.category}</span>  
                      <h3 className={`text-2xl font-black tracking-tighter mt-1 ${isDark ? 'text-white' : 'text-neutral-900'}`}>{project.title}</h3>
                    </div>
                    {project.videoUrl && (
                       <Play className="w-6 h-6 text-amber-500 fill-amber-500" />
                    )}
                     {project.link && (
                       <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-6 h-6 text-amber-500" />
                       </a>
                    )}
                  </div>
                   <p className={`text-sm mt-4 font-light ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;