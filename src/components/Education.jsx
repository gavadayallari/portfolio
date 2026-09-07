import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '../data/education';

const Education = () => {
  return (
    <section id="education" className="py-24 relative bg-[#050914]/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Educational <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">Background</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-purple-500/30 pl-8 ml-4 md:ml-0 space-y-12">
            
            {education.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#050914] border-2 border-purple-500 group-hover:bg-purple-500 transition-colors shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition-all">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <GraduationCap size={20} className="text-purple-400" />
                        {item.degree}
                      </h3>
                      <p className="text-gray-400 font-medium mt-1">
                        {item.institution}
                      </p>
                    </div>
                    <div className="inline-block px-4 py-1.5 rounded-lg bg-purple-900/30 border border-purple-500/30 text-purple-300 font-semibold text-sm">
                      {item.score}
                    </div>
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

export default Education;
