import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experience } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Experience</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-10 h-10 rounded-full bg-[#030712] border-2 border-cyan-400 flex items-center justify-center transform -translate-x-1/2 mt-1 shadow-[0_0_15px_rgba(34,211,238,0.3)] z-10">
                  <Briefcase size={18} className="text-cyan-400" />
                </div>
                
                {/* Content */}
                <div className="ml-20 md:ml-0 md:w-1/2 w-full md:px-12">
                  <div className={`p-6 rounded-2xl bg-[#080d1a] border border-white/10 hover:border-cyan-500/30 transition-colors shadow-xl group ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className={`flex flex-col ${idx % 2 === 0 ? 'md:items-start' : 'md:items-end'} mb-4`}>
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-400 bg-purple-900/20 border border-purple-500/20 rounded-full mb-3">
                        {exp.duration}
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {exp.role}
                      </h3>
                      <h4 className="text-lg font-medium text-gray-400">
                        {exp.company}
                      </h4>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
