import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false, message: '' });

    try {
      const web3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      let response;
      let data;

      if (web3Key) {
        response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: web3Key,
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: `Portfolio Message from ${formData.name}`
          })
        });
        data = await response.json();
      } else {
        response = await fetch('https://formsubmit.co/ajax/yallarigavada11@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `Portfolio Message from ${formData.name}`,
            _template: 'table',
            _captcha: 'false'
          })
        });
        data = await response.json();
      }

      if (response.ok && (data.success === 'true' || data.success === true)) {
        setStatus({
          submitting: false,
          success: true,
          error: false,
          message: 'Thank you! Your message has been sent successfully. I will get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else if (data.message && data.message.toLowerCase().includes('activat')) {
        setStatus({
          submitting: false,
          success: true,
          error: false,
          message: "Check your email (yallarigavada11@gmail.com) and click 'Activate Form' once. After that, all messages will come directly to your inbox!"
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Something went wrong while sending your message.');
      }
    } catch (err) {
      console.error('Contact Form Error:', err);
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: err.message || 'Failed to send message. Please try again or email directly at yallarigavada11@gmail.com.'
      });
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Work <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Together</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Get In Touch
            </h3>
            <p className="text-gray-400 mb-8">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=yallarigavada11@gmail.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-cyan-900/20 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                  <Mail size={20} className="text-cyan-400" />
                </a>
                <div className="min-w-0">
                  <div className="text-sm text-gray-500 font-medium">Email</div>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=yallarigavada11@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors truncate block">
                    yallarigavada11@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-blue-900/20 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                  <Phone size={20} className="text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Phone</div>
                  <a href="tel:+919112736428" className="text-gray-300 hover:text-blue-400 transition-colors">
                    +91-9112736428
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-purple-900/20 border border-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 transition-colors">
                  <MapPin size={20} className="text-purple-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Location</div>
                  <div className="text-gray-300">
                    Pune, India
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 flex gap-4">
              <a href="https://github.com/gavadayallari" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-all">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/yallari-gavada" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-[#080d1a] border border-white/10 shadow-2xl space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#030712] border border-gray-800 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#030712] border border-gray-800 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#030712] border border-gray-800 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <AnimatePresence>
                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-xl border flex items-start gap-3 text-sm ${
                      status.success 
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' 
                        : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                    }`}
                  >
                    {status.success ? (
                      <CheckCircle2 size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                    ) : (
                      <AlertCircle size={18} className="text-rose-400 mt-0.5 flex-shrink-0" />
                    )}
                    <div className="leading-relaxed">
                      {status.message}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <button 
                type="submit" 
                disabled={status.submitting}
                className="w-full py-3.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold flex items-center justify-center gap-2 hover:from-cyan-500 hover:to-blue-500 transition-all shadow-[0_0_20px_rgba(8,145,178,0.3)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {status.submitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
