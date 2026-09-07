import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Users, Zap } from 'lucide-react';
import { Github } from './Icons';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Projects</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group rounded-2xl bg-[#080d1a] border border-white/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                
                {/* Project Visual/Mockup */}
                <div className="relative p-6 lg:p-10 flex items-center justify-center bg-[#050914] border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden">
                  <div className="relative w-full aspect-video rounded-xl bg-[#1e1e1e] border border-gray-800 shadow-2xl overflow-hidden flex flex-col group-hover:scale-[1.02] transition-transform duration-500">
                    {/* Fake Editor Header */}
                    <div className="h-8 bg-[#2d2d2d] border-b border-gray-800 flex items-center px-4 gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-xs text-gray-400 mx-auto font-mono">App.js - Real-Time Collaborative Editor</div>
                    </div>
                    {/* Fake Editor Content */}
                    <div className="p-4 flex-1 font-mono text-xs sm:text-sm text-gray-300 relative">
                      <div className="text-blue-400">import <span className="text-white">React, {'{'} useState, useEffect {'}'}</span> from <span className="text-green-400">'react'</span>;</div>
                      <div className="text-blue-400">import <span className="text-white">io</span> from <span className="text-green-400">'socket.io-client'</span>;</div>
                      <br/>
                      <div className="text-purple-400">const <span className="text-blue-300">Editor</span> = <span className="text-white">()</span> <span className="text-blue-400">{'=>'}</span> <span className="text-white">{'{'}</span></div>
                      <div className="pl-4">
                        <div className="text-purple-400">const <span className="text-white">[code, setCode] =</span> <span className="text-blue-300">useState</span><span className="text-white">('');</span></div>
                        <br/>
                        <div className="text-gray-500">// User 1 typing...</div>
                        <div className="text-white">socket.<span className="text-blue-300">on</span>(<span className="text-green-400">'code-change'</span>, (newCode) <span className="text-blue-400">{'=>'}</span> {'{'}</div>
                        <div className="pl-4 text-white">setCode(newCode);</div>
                        <div className="text-white">{'}'});</div>
                      </div>
                      <div className="text-white">{'}'};</div>
                      
                      {/* Fake Cursors */}
                      <div className="absolute top-[50%] left-[45%] flex flex-col items-center animate-pulse">
                        <div className="w-[2px] h-4 bg-cyan-400"></div>
                        <div className="bg-cyan-400 text-[#030712] text-[10px] px-1.5 py-0.5 rounded-sm font-bold mt-1">Yallari</div>
                      </div>
                      <div className="absolute top-[30%] left-[65%] flex flex-col items-center animate-pulse delay-300">
                        <div className="w-[2px] h-4 bg-purple-400"></div>
                        <div className="bg-purple-400 text-white text-[10px] px-1.5 py-0.5 rounded-sm font-bold mt-1">Guest</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-900/30 border border-cyan-500/20 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed mb-6 md:mb-8 text-sm md:text-base lg:text-lg">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mb-8">
                    {project.features.map(feature => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                        <Zap size={14} className="text-cyan-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-6 border-t border-white/10">
                    <button disabled className="flex items-center justify-center sm:justify-start gap-2 px-6 py-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 font-medium cursor-not-allowed opacity-50">
                      <Github size={18} /> Code (Private)
                    </button>
                    <button disabled className="flex items-center justify-center sm:justify-start gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-cyan-600/50 to-blue-600/50 text-gray-300 font-medium cursor-not-allowed opacity-50">
                      <ExternalLink size={18} /> Live Demo
                    </button>
                  </div>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
