import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X, ZoomIn, HardHat } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  image?: string;
  badge?: string;
  color: string;
}

const CERTIFICATES: Certificate[] = [
  {
    id: 1,
    title: 'Accounting Principles and Assumptions',
    issuer: 'Professional Certification',
    image: 'https://iili.io/qOkVRu1.png',
    color: '#f59e0b',
  },
  {
    id: 2,
    title: 'QuickBooks Enterprise Software',
    issuer: 'Intuit / Professional Certification',
    image: 'https://iili.io/qOkhbHl.png',
    color: '#22c55e',
  },
  {
    id: 3,
    title: 'Qatar & Philippines Driving Licenses',
    issuer: 'Government Issued',
    badge: '🚗',
    color: '#3b82f6',
  },
  {
    id: 4,
    title: 'CPA',
    issuer: 'Certified Public Accountant',
    badge: '📊',
    color: '#a855f7',
  },
  {
    id: 5,
    title: 'Google AI Professional Certificate',
    issuer: 'Google',
    badge: '🤖',
    color: '#ef4444',
  },
  {
    id: 6,
    title: 'Claude Certified Architect: Foundations',
    issuer: 'Anthropic',
    badge: '🏛️',
    color: '#f97316',
  },
  {
    id: 7,
    title: 'Google Cloud Platform — Machine Learning & Deployment',
    issuer: 'Google Cloud',
    badge: '☁️',
    color: '#06b6d4',
  },
];

interface CertificatesProps {
  isDark?: boolean;
}

const Certificates: React.FC<CertificatesProps> = ({ isDark = true }) => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState<string>('');

  const openLightbox = (src: string, title: string) => {
    setLightboxSrc(src);
    setLightboxTitle(title);
  };

  const closeLightbox = () => setLightboxSrc(null);

  const sectionBg = isDark ? 'bg-neutral-950' : 'bg-[#f8f7f3]';
  const cardBg = isDark ? 'bg-neutral-900/60 border-white/5' : 'bg-white/80 border-neutral-200';
  const subtitleColor = isDark ? 'text-neutral-400' : 'text-neutral-500';
  const titleColor = isDark ? 'text-white' : 'text-neutral-900';

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section
      id="certificates"
      className={`relative py-28 px-6 ${sectionBg} overflow-hidden`}
    >
      {/* Background Decoration */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-7 h-7 text-amber-500" />
            <span className={`text-xs font-bold uppercase tracking-[0.3em] ${subtitleColor}`}>
              Credentials & Achievements
            </span>
          </div>
          <h2 className={`text-4xl md:text-5xl font-black tracking-tight ${titleColor}`}>
            Certificates<span className="text-amber-500">.</span>
          </h2>
          <p className={`mt-4 text-base md:text-lg max-w-xl mx-auto ${subtitleColor}`}>
            Professional certifications and licenses that validate my expertise across finance, technology, and cloud platforms.
          </p>
          {/* Decorative line */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className={`h-px flex-1 max-w-[100px] ${isDark ? 'bg-white/10' : 'bg-neutral-300'}`} />
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <div className={`h-px flex-1 max-w-[100px] ${isDark ? 'bg-white/10' : 'bg-neutral-300'}`} />
          </div>
        </motion.div>

        {/* Certificate Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CERTIFICATES.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`group relative flex flex-col rounded-2xl border backdrop-blur-sm overflow-hidden cursor-default transition-all duration-300 ${cardBg} ${cert.image ? 'cursor-pointer' : ''}`}
              onClick={cert.image ? () => openLightbox(cert.image!, cert.title) : undefined}
              style={{
                boxShadow: isDark
                  ? '0 4px 24px rgba(0,0,0,0.4)'
                  : '0 4px 24px rgba(0,0,0,0.06)',
              }}
            >
              {/* Top accent bar */}
              <div
                className="h-1 w-full"
                style={{ background: cert.color }}
              />

              {/* Image or Badge area */}
              <div
                className="relative w-full overflow-hidden flex items-center justify-center"
                style={{ minHeight: '180px', background: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)' }}
              >
                {cert.image ? (
                  <>
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                      style={{ maxHeight: '200px' }}
                    />
                    {/* Zoom overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                      <ZoomIn className="w-8 h-8 text-white drop-shadow-lg" />
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center gap-6 py-12 px-4 text-center">
                    <div className="relative">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-4 border border-dashed rounded-full"
                        style={{ borderColor: `${cert.color}40` }}
                      />
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg relative z-10"
                        style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}40` }}
                      >
                        <HardHat className="w-8 h-8 opacity-80" style={{ color: cert.color }} />
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <div className="flex flex-col items-center gap-1">
                        <motion.p 
                          animate={{ opacity: [0.4, 0.8, 0.4] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          className={`text-[10px] font-black tracking-[0.2em] uppercase ${isDark ? 'text-amber-500/90' : 'text-amber-600'}`}
                        >
                          Under Construction
                        </motion.p>
                        <p className={`text-[11px] font-medium italic opacity-60 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
                          Official document uploading soon
                        </p>
                      </div>
                      <span
                        className="mt-2 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border"
                        style={{ color: cert.color, borderColor: `${cert.color}40`, background: `${cert.color}10` }}
                      >
                        Pending
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-1 p-5 gap-2">
                <h3 className={`text-base font-bold leading-snug ${titleColor}`}>
                  {cert.title}
                </h3>
                <p className={`text-xs ${subtitleColor}`}>{cert.issuer}</p>

                {/* Bottom accent */}
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <div
                    className="w-6 h-0.5 rounded-full"
                    style={{ background: cert.color }}
                  />
                  {cert.image && (
                    <span className={`text-xs flex items-center gap-1 font-medium transition-colors`} style={{ color: cert.color }}>
                      View <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-neutral-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <h3 className="text-white font-bold text-sm pr-4">{lightboxTitle}</h3>
                <button
                  onClick={closeLightbox}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-6 flex items-center justify-center bg-black/20">
                <img
                  src={lightboxSrc}
                  alt={lightboxTitle}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
