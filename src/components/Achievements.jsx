import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Key <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">Achievements</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-500 to-orange-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group rounded-3xl bg-gradient-to-br from-[#1a1505] to-[#0a0802] border border-yellow-500/20 p-1 overflow-hidden"
          >
            {/* Animated border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

            <div className="relative bg-[#0a0802] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
              
              {/* Trophy Visual */}
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-500/20 blur-[30px] rounded-full"></div>
                <div className="relative w-32 h-32 rounded-full border border-yellow-500/30 flex items-center justify-center bg-[#151003]">
                  <Trophy size={60} className="text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
                  <Star size={20} className="absolute top-2 right-2 text-yellow-300 animate-pulse" />
                  <Star size={16} className="absolute bottom-4 left-2 text-yellow-300 animate-pulse delay-300" />
                </div>
              </div>

              {/* Details */}
              <div className="flex-1 space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 font-semibold text-sm">
                  <Award size={16} /> 1st Place Winner
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  MindSweeper Project Presentation
                </h3>
                
                <div className="text-gray-400 font-medium">
                  TechFest 2025 • Suryadatta MCA Department
                </div>
                
                <p className="text-gray-400 leading-relaxed pt-2">
                  Awarded first place for demonstrating exceptional innovation, problem-solving capabilities, and excellent presentation skills during the technical fest.
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2 justify-center md:justify-start">
                  {['Innovation', 'Problem-solving', 'Presentation skills'].map(skill => (
                    <span key={skill} className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 border border-white/10 rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
