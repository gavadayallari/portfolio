import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, ArrowRight, Code, Database, Server } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const roles = ["Full-Stack MERN Developer", "MERN Developer"];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentRole = roles[currentRoleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setText(currentRole.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6 z-10"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-sm font-semibold tracking-wider w-max mb-2">
              FULL-STACK DEVELOPER
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Hello, I'm <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Yallari Gavada
              </span>
            </h1>
            
            <div className="text-xl sm:text-2xl text-gray-300 font-medium h-8">
              I am a <span className="text-cyan-400 border-r-2 border-cyan-400 pr-1 animate-pulse">{text}</span>
            </div>
            
            <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
              I specialize in building robust, scalable web applications using the MERN stack. Passionate about problem-solving and writing clean, efficient code to create seamless user experiences.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#projects" className="flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium hover:from-cyan-500 hover:to-blue-500 transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)]">
                View My Work <ArrowRight size={18} />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-3 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-sm">
                My Resume <Download size={18} />
              </a>
            </div>
            
            <div className="flex gap-4 pt-6">
              <a href="#" className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-900/20 transition-all">
                <Github size={20} />
              </a>
              <a href="#" className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-900/20 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="mailto:yallarigavada11@gmail.com" className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-900/20 transition-all">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
          
          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:flex justify-center items-center z-10 h-[500px]"
          >
            {/* Abstract Tech Visual */}
            <div className="relative w-full max-w-md aspect-square rounded-full border border-white/10 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border border-purple-500/20 animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-cyan-900/40 to-purple-900/40 backdrop-blur-md border border-white/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
                <Code size={80} className="text-cyan-400/80 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
              </div>
              
              {/* Floating Icons */}
              <motion.div animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-4 right-10 p-4 bg-[#030712]/80 backdrop-blur-md border border-white/10 rounded-xl text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                <Database size={24} />
              </motion.div>
              <motion.div animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 -left-6 p-4 bg-[#030712]/80 backdrop-blur-md border border-white/10 rounded-xl text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                <Server size={24} />
              </motion.div>
              <motion.div animate={{ y: [-5, 15, -5] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-10 right-4 p-4 bg-[#030712]/80 backdrop-blur-md border border-white/10 rounded-xl text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <Code size={24} />
              </motion.div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-cyan-500/20 blur-[100px] rounded-full z-[-1]"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
