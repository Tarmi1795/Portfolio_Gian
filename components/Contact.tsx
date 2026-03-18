import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT_INFO } from '../constants';
import { Mail, MapPin, Phone, Send, User, AtSign, MessageSquare } from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const namePlaceholders = ["Your Name", "Creative Partner", "Future Collaborator", "Visionary"];
  const emailPlaceholders = ["hello@world.com", "letstalk@future.io", "your@email.com", "connect@now.com"];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % namePlaceholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name || !message) {
      alert("Please fill in your name and message.");
      return;
    }

    const phoneNumber = CONTACT_INFO.phone.replace(/[^0-9]/g, '');
    const whatsappMessage = `*New Portfolio Inquiry*%0A%0A*Name:* ${name}%0A*Email:* ${email || 'Not provided'}%0A%0A*Message:*%0A${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactLinks = [
    { 
      icon: WhatsAppIcon, 
      label: "WhatsApp", 
      value: CONTACT_INFO.phone, 
      color: "text-[#25D366]",
      href: `https://wa.me/${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}`
    },
    { 
      icon: Phone, 
      label: "Direct Call", 
      value: CONTACT_INFO.phone, 
      color: "text-amber-500",
      href: `tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, '')}`
    },
    { 
      icon: Mail, 
      label: "Inbox", 
      value: CONTACT_INFO.email, 
      color: "text-yellow-500",
      href: `mailto:${CONTACT_INFO.email}`
    },
    { 
      icon: MapPin, 
      label: "Base", 
      value: CONTACT_INFO.location, 
      color: "text-orange-500",
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.location)}`
    }
  ];

  return (
    <section id="contact" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] animate-pulse"></div>    
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-yellow-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter">
              LETS <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600">CONNECT.</span>
            </h2>
            <p className="text-xl text-neutral-400 mb-12 leading-relaxed max-w-md">
              Ready to elevate your digital presence? I'm available for innovative projects and strategic collaborations.    
            </p>

            <div className="space-y-6">
              {contactLinks.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.label === "Base" || item.label === "WhatsApp" ? "_blank" : undefined}
                  rel={item.label === "Base" || item.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 group cursor-pointer w-fit"
                >
                  <div className="w-14 h-14 bg-neutral-900 border border-neutral-800 rounded-2xl flex items-center justify-center group-hover:border-amber-500/50 transition-all duration-500 shadow-xl">
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-[0.2em] font-bold mb-0.5">{item.label}</p>       
                    <p className="text-lg text-neutral-200 font-medium group-hover:text-amber-400 transition-colors">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-neutral-900/50 backdrop-blur-2xl p-8 md:p-10 rounded-[2.5rem] border border-neutral-800/50 shadow-2xl"
          >
            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <div className="relative group">
                <label className="flex items-center gap-2 text-xs font-bold text-neutral-500 uppercase tracking-widest mb-3 ml-1 group-focus-within:text-amber-500 transition-colors">
                  <User className="w-3 h-3" /> Who are you?
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-neutral-800/50 border-2 border-transparent rounded-2xl p-4 text-white placeholder-transparent focus:outline-none focus:border-amber-500/50 focus:bg-neutral-800 transition-all duration-300"
                    required
                  />
                  <AnimatePresence mode="wait">
                    {!formData.name && (
                      <motion.span
                        key={placeholderIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 0.4, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-4 top-4 text-neutral-400 pointer-events-none"
                      >
                        {namePlaceholders[placeholderIndex]}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="relative group">
                <label className="flex items-center gap-2 text-xs font-bold text-neutral-500 uppercase tracking-widest mb-3 ml-1 group-focus-within:text-amber-500 transition-colors">
                  <AtSign className="w-3 h-3" /> Where to reply?
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-neutral-800/50 border-2 border-transparent rounded-2xl p-4 text-white placeholder-transparent focus:outline-none focus:border-amber-500/50 focus:bg-neutral-800 transition-all duration-300"
                  />
                  <AnimatePresence mode="wait">
                    {!formData.email && (
                      <motion.span
                        key={placeholderIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 0.4, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-4 top-4 text-neutral-400 pointer-events-none"
                      >
                        {emailPlaceholders[placeholderIndex]}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="relative group">
                <label className="flex items-center gap-2 text-xs font-bold text-neutral-500 uppercase tracking-widest mb-3 ml-1 group-focus-within:text-amber-500 transition-colors">
                  <MessageSquare className="w-3 h-3" /> The Idea
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-800/50 border-2 border-transparent rounded-2xl p-4 text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500/50 focus:bg-neutral-800 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(37, 211, 102, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#22c35e] text-white font-black uppercase tracking-[0.2em] py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300"
              >
                Send via WhatsApp <WhatsAppIcon className="w-6 h-6" />
              </motion.button>
            </form>
          </motion.div>
        </div>

        <div className="mt-32 pt-12 border-t border-neutral-900/50 flex flex-col md:flex-row justify-between items-center gap-6 text-neutral-600 text-sm font-medium">
          <p>© {new Date().getFullYear()} GIAN SAMONTE. DESIGNED FOR THE FUTURE.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-amber-500 transition-colors uppercase tracking-widest">LinkedIn</a>
            <a href="#" className="hover:text-amber-500 transition-colors uppercase tracking-widest">Behance</a>
            <a href="#" className="hover:text-amber-500 transition-colors uppercase tracking-widest">Dribbble</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;