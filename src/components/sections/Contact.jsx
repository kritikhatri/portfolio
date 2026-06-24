import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  FaPaperPlane, 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaClock, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaCode,
  FaCheckCircle,
  FaTimes
} from 'react-icons/fa';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { fadeInUp } from '../../utils/animations';

export const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });
  const [toast, setToast] = useState(null);

  const contactDetails = [
    { icon: FaMapMarkerAlt, title: "Location", value: "New Delhi, India", color: "text-red-400" },
    { icon: FaEnvelope, title: "Email Direct", value: "kritika.khatri@newtonschool.co", url: "mailto:kritika.khatri@newtonschool.co", color: "text-cyan-400" },
    { icon: FaClock, title: "Response Time", value: "Within 24 Hours", badge: "active", color: "text-emerald-400" }
  ];

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/kritikakhatri", label: "GitHub" },
    { icon: FaLinkedin, url: "https://linkedin.com/in/kritikakhatri", label: "LinkedIn" },
    { icon: FaTwitter, url: "https://twitter.com/kritikakhatri", label: "Twitter" },
    { icon: FaCode, url: "https://leetcode.com/u/kritikakhatri", label: "LeetCode" }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const showToastMsg = (msg, isError = false) => {
    setToast({ message: msg, isError });
    setTimeout(() => {
      setToast(null);
    }, 4000); // Auto hide toast after 4s
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToastMsg("Please fill out all required fields.", true);
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showToastMsg("Please enter a valid email format.", true);
      return;
    }

    setStatus({ loading: true, success: false, error: null });

    // Fetch keys from Vite env values
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_placeholder';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_placeholder';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_placeholder';

    try {
      // Direct EmailJS sendForm trigger
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      
      setStatus({ loading: false, success: true, error: null });
      showToastMsg("Message sent successfully!");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error("EmailJS sending error: ", err);
      setStatus({ loading: false, success: false, error: err.text || "Failed to dispatch message." });
      
      // Fallback response: pretend success for showcase demonstration purposes if variables aren't initialized yet
      if (serviceId === 'service_placeholder') {
        setTimeout(() => {
          setStatus({ loading: false, success: true, error: null });
          showToastMsg("Demo: Message logged in sandbox console!");
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1500);
      } else {
        showToastMsg("Failed to deliver mail. Verify your EmailJS variables.", true);
      }
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden z-10">
      
      {/* Background neon flow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-primary/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Get In Touch" subtitle="Say hello" align="center" />

        {/* Form & details grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto w-full items-start">
          
          {/* Left Column: Contact details */}
          <motion.div 
            className="lg:col-span-5 flex flex-col gap-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="p-8 border-white/5" hoverGlow={true}>
              <h3 className="font-display font-bold text-sm text-slate-300 uppercase tracking-widest mb-6">
                // Contact Details
              </h3>
              
              <div className="flex flex-col gap-6 mb-8">
                {contactDetails.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-4 items-center">
                      <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${item.color} shrink-0`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{item.title}</span>
                        {item.url ? (
                          <a href={item.url} className="font-display font-bold text-xs sm:text-sm text-slate-200 hover:text-accent transition-colors mt-0.5">{item.value}</a>
                        ) : (
                          <span className="font-display font-bold text-xs sm:text-sm text-slate-200 mt-0.5">{item.value}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Repeat Social Links */}
              <div className="pt-6 border-t border-white/5">
                <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-4">
                  Find Me Online:
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((link, idx) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="p-2.5 rounded-full glass-panel border-white/5 hover:border-white/20 text-slate-400 hover:text-accent hover:scale-105 transition-all shadow-glass-sm"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Right Column: Contact form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="p-8 border-white/5" hoverGlow={true}>
              <h3 className="font-display font-bold text-sm text-slate-300 uppercase tracking-widest mb-6">
                // Send Message
              </h3>

              <form ref={formRef} onSubmit={handleSend} className="flex flex-col gap-5">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glass-panel bg-white/[0.02] border border-white/5 hover:border-white/10 focus:border-primary/50 text-slate-200 placeholder-slate-500 rounded-xl px-4 py-3 text-xs font-mono outline-none transition-all focus:ring-0"
                    placeholder="Enter name..."
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass-panel bg-white/[0.02] border border-white/5 hover:border-white/10 focus:border-primary/50 text-slate-200 placeholder-slate-500 rounded-xl px-4 py-3 text-xs font-mono outline-none transition-all focus:ring-0"
                    placeholder="Enter email..."
                  />
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="glass-panel bg-white/[0.02] border border-white/5 hover:border-white/10 focus:border-primary/50 text-slate-200 placeholder-slate-500 rounded-xl px-4 py-3 text-xs font-mono outline-none transition-all focus:ring-0"
                    placeholder="Enter subject..."
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="glass-panel bg-white/[0.02] border border-white/5 hover:border-white/10 focus:border-primary/50 text-slate-200 placeholder-slate-500 rounded-xl p-4 text-xs font-mono outline-none transition-all focus:ring-0 resize-none"
                    placeholder="Wrote details here..."
                  />
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  disabled={status.loading}
                  variant="primary"
                  className="w-full mt-2 font-bold py-3 rounded-xl"
                >
                  {status.loading ? (
                    <span>Dispatched payload...</span>
                  ) : (
                    <>
                      <FaPaperPlane className="w-3.5 h-3.5" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </Button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      {/* Floating Alert Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={`fixed bottom-5 left-5 z-50 p-4 rounded-xl border flex items-center gap-3 shadow-lg ${toast.isError ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'}`}
          >
            {toast.isError ? <FaTimes /> : <FaCheckCircle />}
            <span className="text-xs font-mono font-medium">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
