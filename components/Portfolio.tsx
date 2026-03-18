
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Play, ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
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
    <section id="portfolio" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Selected Works</h2>
          <p className="text-neutral-400">A glimpse into my multimedia and AI-generated projects.</p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setPlayingVideoId(null); // Reset video when changing category
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === category 
                  ? 'bg-amber-500 text-black border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.3)]' 
                  : 'bg-transparent text-neutral-400 border-neutral-800 hover:border-amber-500/50 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
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
                className="group relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 shadow-xl"
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
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    />
                  )}
                  
                  {/* Info Overlay - Hidden when video is playing */}
                  {!(project.videoUrl && playingVideoId === project.id) && (
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 z-10">
                      
                      {/* Play Button for Video Projects */}
                      {project.videoUrl && (
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-transform duration-300 hover:scale-110 z-20">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setPlayingVideoId(project.id);
                            }}
                            className="w-16 h-16 bg-amber-500/90 hover:bg-amber-400 rounded-full flex items-center justify-center backdrop-blur-sm shadow-[0_0_20px_rgba(245,158,11,0.5)] group-hover:animate-pulse"
                            aria-label="Play video"
                          >
                            <Play className="w-6 h-6 text-black fill-black ml-1" />
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
                            className="w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover:animate-pulse"
                            aria-label="Visit Website"
                          >
                            <ExternalLink className="w-6 h-6 text-black ml-0.5" />
                          </a>
                        </div>
                      )}

                      <span className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-2">{project.category}</span>
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-neutral-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map(t => (
                          <span key={t} className="px-2 py-1 bg-white/10 text-white/90 text-xs rounded backdrop-blur-sm border border-white/10">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Mobile Caption */}
                <div className={`p-6 md:hidden ${project.videoUrl && playingVideoId === project.id ? 'hidden' : 'block'}`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-amber-500 text-xs font-bold uppercase tracking-wider">{project.category}</span>
                      <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
                    </div>
                    {project.videoUrl && (
                       <Play className="w-5 h-5 text-amber-500" />
                    )}
                     {project.link && (
                       <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-5 h-5 text-amber-500" />
                       </a>
                    )}
                  </div>
                   <p className="text-neutral-400 text-sm mt-2">{project.description}</p>
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
