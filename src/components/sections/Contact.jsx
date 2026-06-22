import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { FaMapMarkerAlt, FaEnvelope, FaClock, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { staggerContainer, staggerItem } from '../../utils/animations';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'loading', 'success', 'error'
  const [toastMessage, setToastMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email format is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showToast = (msg, state) => {
    setToastMessage(msg);
    setStatus(state);
    setTimeout(() => {
      setStatus(null);
      setToastMessage('');
    }, 4500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    // Retrieve keys from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Fallback simulation if keys are missing (retained for offline previews & direct deployments)
    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS parameters missing in .env configuration. Simulating submission flow.");
      setTimeout(() => {
        showToast("SUCCESS: Message simulated successfully! Set up EmailJS keys to receive actual emails.", "success");
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1500);
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      showToast("Thank you! Your message has been sent successfully.", "success");
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error("EmailJS Error: ", err);
      showToast("Failed to transmit message. Please try again later.", "error");
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          title="Get In Touch"
          subtitle="Connection Channels"
          alignment="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Sidebar Column (Left 5 Cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Location Card */}
            <motion.div variants={staggerItem} className="flex-1">
              <GlassCard className="h-full flex flex-col justify-between hover:border-primary-cyan/40" glowColor="rgba(6, 182, 212, 0.1)">
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                    <FaMapMarkerAlt className="text-xl" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-extrabold text-slate-100 text-base">Location Registry</h3>
                    <p className="text-slate-400 text-xs sm:text-sm">Pune, India</p>
                    <p className="text-[10px] font-mono text-slate-500">Newton School of Technology campus</p>
                  </div>
                </div>
                <Badge variant="cyan" className="w-fit mt-6">ACTIVE CAMPUS</Badge>
              </GlassCard>
            </motion.div>

            {/* Email Contact Card */}
            <motion.div variants={staggerItem} className="flex-1">
              <GlassCard className="h-full flex flex-col justify-between hover:border-primary-violet/40" glowColor="rgba(124, 58, 237, 0.1)">
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-2xl bg-violet-500/10 text-violet-400 border border-violet-500/20 shrink-0">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-extrabold text-slate-100 text-base">Electronic Mail</h3>
                    <a href="mailto:kritikakhatri014@gmail.com" className="text-slate-400 text-xs sm:text-sm hover:text-primary-cyan transition-colors line-clamp-1">
                      kritikakhatri014@gmail.com
                    </a>
                  </div>
                </div>
                <Badge variant="violet" className="w-fit mt-6">DIRECT COMMS</Badge>
              </GlassCard>
            </motion.div>

            {/* Response Time Card */}
            <motion.div variants={staggerItem} className="flex-1">
              <GlassCard className="h-full flex flex-col justify-between hover:border-primary-pink/40" glowColor="rgba(236, 72, 153, 0.1)">
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-2xl bg-pink-500/10 text-pink-400 border border-pink-500/20 shrink-0">
                    <FaClock className="text-xl" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display font-extrabold text-slate-100 text-base">Standard Latency</h3>
                    <p className="text-slate-400 text-xs sm:text-sm">Under 24 Hours Response</p>
                  </div>
                </div>
                <Badge variant="pink" className="w-fit mt-6">GUARANTEED REPLY</Badge>
              </GlassCard>
            </motion.div>
          </motion.div>

          {/* Contact Input Form (Right 7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <GlassCard className="p-6 sm:p-8 hover:border-primary-cyan/35" glowColor="rgba(6, 182, 212, 0.1)">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 font-sans">
                
                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-primary-cyan/50 focus:ring-1 focus:ring-primary-cyan/25 transition-all text-xs"
                    placeholder="Enter your name..."
                  />
                  {errors.name && <span className="text-[10px] text-red-400 font-mono flex items-center gap-1"><FaExclamationCircle /> {errors.name}</span>}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-primary-cyan/50 focus:ring-1 focus:ring-primary-cyan/25 transition-all text-xs"
                    placeholder="Enter your email address..."
                  />
                  {errors.email && <span className="text-[10px] text-red-400 font-mono flex items-center gap-1"><FaExclamationCircle /> {errors.email}</span>}
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="subject" className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                    Subject Heading
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-primary-cyan/50 focus:ring-1 focus:ring-primary-cyan/25 transition-all text-xs"
                    placeholder="Subject of discussion..."
                  />
                  {errors.subject && <span className="text-[10px] text-red-400 font-mono flex items-center gap-1"><FaExclamationCircle /> {errors.subject}</span>}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                    Message Body
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-primary-cyan/50 focus:ring-1 focus:ring-primary-cyan/25 transition-all text-xs resize-none"
                    placeholder="Type details of your request here..."
                  />
                  {errors.message && <span className="text-[10px] text-red-400 font-mono flex items-center gap-1"><FaExclamationCircle /> {errors.message}</span>}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    isLoading={status === 'loading'}
                    className="w-full text-xs py-3.5"
                  >
                    Send Secure Message
                  </Button>
                </div>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      {/* Floating sliding success toast */}
      <AnimatePresence>
        {status && status !== 'loading' && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={`fixed bottom-6 right-6 z-50 p-4 rounded-xl shadow-2xl border flex items-center gap-3 backdrop-blur-md select-none max-w-sm
              ${status === 'success' 
                ? 'bg-emerald-950/80 border-emerald-500/30 text-emerald-300' 
                : 'bg-red-950/80 border-red-500/30 text-red-300'}
            `}
          >
            {status === 'success' ? (
              <FaCheckCircle className="text-xl shrink-0 text-emerald-400" />
            ) : (
              <FaExclamationCircle className="text-xl shrink-0 text-red-400" />
            )}
            <div className="text-xs leading-relaxed font-sans">{toastMessage}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
