import React from 'react';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from './Icons';

const Footer = () => {
  return (
    <footer className="bg-[#030712] border-t border-white/5 pt-12 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 mb-2 inline-block">
              Yallari.
            </a>
            <p className="text-gray-500 text-sm">
              Full-Stack MERN Developer
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#experience" className="text-gray-400 hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:yallarigavada11@gmail.com" className="text-gray-500 hover:text-cyan-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
          
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Yallari Gavada. All rights reserved.</p>
          <p>Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
