import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';
import { Mail, MapPin, Phone, Send, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

    // Clean phone number (remove spaces, symbols)
    const phoneNumber = CONTACT_INFO.phone.replace(/[^0-9]/g, '');
    
    const whatsappMessage = `*New Portfolio Inquiry*%0A%0A*Name:* ${name}%0A*Email:* ${email || 'Not provided'}%0A%0A*Message:*%0A${message}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-neutral-900 to-black relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-neutral-800/30 backdrop-blur-lg rounded-3xl border border-neutral-700 p-8 md:p-12 overflow-hidden relative">
            
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Let's Create Something Amazing</h2>
              <p className="text-neutral-400 mb-8">
                Available for freelance projects and full-time opportunities. Open to in-person meetings in Doha or remote collaboration globally.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-neutral-300 group cursor-pointer">
                  <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center border border-neutral-700 group-hover:border-amber-500 transition-colors">
                    <Phone className="w-5 h-5 group-hover:text-amber-400 transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wide">Call Me</p>
                    <p className="font-medium">{CONTACT_INFO.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-neutral-300 group cursor-pointer">
                  <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center border border-neutral-700 group-hover:border-amber-500 transition-colors">
                    <Mail className="w-5 h-5 group-hover:text-amber-400 transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wide">Email</p>
                    <p className="font-medium">{CONTACT_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-neutral-300 group cursor-pointer">
                  <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center border border-neutral-700 group-hover:border-amber-500 transition-colors">
                    <MapPin className="w-5 h-5 group-hover:text-amber-400 transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500 uppercase tracking-wide">Location</p>
                    <p className="font-medium">{CONTACT_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-4" onSubmit={handleWhatsAppSubmit}>
              <div>
                <label className="block text-sm text-neutral-400 mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-white focus:outline-none focus:border-amber-500 transition-colors" 
                  placeholder="John Doe" 
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-400 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-white focus:outline-none focus:border-amber-500 transition-colors" 
                  placeholder="john@example.com" 
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-400 mb-2">Message</label>
                <textarea 
                  rows={4} 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-white focus:outline-none focus:border-amber-500 transition-colors" 
                  placeholder="Tell me about your project..." 
                  required
                ></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-shadow"
              >
                Send via WhatsApp <Send className="w-4 h-4" />
              </motion.button>
              <p className="text-xs text-center text-neutral-500 mt-2">
                This will open WhatsApp with your pre-filled message.
              </p>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-neutral-800 text-center text-neutral-600 text-sm">
          <p>© {new Date().getFullYear()} Gian Samonte. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;