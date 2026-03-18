import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT_INFO } from '../constants';
import { Mail, MapPin, Phone, Send, User, AtSign, MessageSquare } from 'lucide-react';

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

            <div className="space-y-8">
              {[
                { icon: Phone, label: "Direct Line", value: CONTACT_INFO.phone, color: "text-amber-500" },
                { icon: Mail, label: "Inbox", value: CONTACT_INFO.email, color: "text-yellow-500" },
                { icon: MapPin, label: "Base", value: CONTACT_INFO.location, color: "text-orange-500" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-14 h-14 bg-neutral-900 border border-neutral-800 rounded-2xl flex items-center justify-center group-hover:border-amber-500/50 transition-all duration-500 shadow-xl">
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-[0.2em] font-bold mb-1">{item.label}</p>
                    <p className="text-lg text-neutral-200 font-medium">{item.value}</p>
                  </div>
                </motion.div>
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
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(245, 158, 11, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-black uppercase tracking-[0.2em] py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300"
              >
                Launch Message <Send className="w-5 h-5" />
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