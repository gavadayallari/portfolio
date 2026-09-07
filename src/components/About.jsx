import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Layout, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Profile Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center items-center mt-4 md:mt-0"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96">
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-[spin_20s_linear_infinite]"></div>
              
              {/* Inner glowing background */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-900/40 to-purple-900/40 backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-[0_0_50px_rgba(34,211,238,0.15)] overflow-hidden">
                {/* Profile Placeholder (can be replaced with img tag later) */}
                <div className="text-gray-500 flex flex-col items-center">
                   <Code2 className="w-12 h-12 md:w-16 md:h-16 text-cyan-400/50 mb-2" />
                   <span className="text-xs md:text-sm font-medium tracking-widest text-cyan-400/50 uppercase">Profile.png</span>
                </div>
              </div>
              
              {/* Orbiting Icons */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 p-2 sm:p-3 bg-[#030712] border border-white/10 rounded-full text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="absolute top-1/2 -right-3 sm:-right-4 -translate-y-1/2 p-2 sm:p-3 bg-[#030712] border border-white/10 rounded-full text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 p-2 sm:p-3 bg-[#030712] border border-white/10 rounded-full text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <Layout className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
          </motion.div>

          {/* Right Text Area */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Full-Stack MERN Developer
            </h3>
            
            <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
              <p>
                I am a passionate Full-Stack Developer specializing in the MERN (MongoDB, Express.js, React.js, Node.js) stack. My journey in software development is driven by a strong desire to solve complex problems and build efficient, scalable web applications.
              </p>
              <p>
                During my 6-month internship at Eklavya.Me, I gained practical experience in building and optimizing web applications, working extensively with React.js for the frontend and Node.js/Express.js for robust REST APIs on the backend.
              </p>
              <p>
                Through my academic projects and professional experience, I have developed a strong foundation in modern web development practices. I am committed to continuous learning and always looking for opportunities to expand my skill set and take on new challenges in the tech industry.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-cyan-400 font-bold text-2xl mb-1">MERN</div>
                <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">Stack Expert</div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-purple-400 font-bold text-2xl mb-1">6 Months</div>
                <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">Internship Experience</div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
