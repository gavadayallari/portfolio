import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiJavascript, 
  SiExpress, 
  SiHtml5,
  SiCss,
  SiPython,
  SiMysql,
  SiGit
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { Code2 } from 'lucide-react';

const row1 = [
  { name: "React.js", description: "UI Component Library", icon: SiReact, color: "text-cyan-400" },
  { name: "Node.js", description: "Backend Development", icon: SiNodedotjs, color: "text-green-500" },
  { name: "MongoDB", description: "NoSQL Database", icon: SiMongodb, color: "text-green-400" },
  { name: "JavaScript", description: "ES6+ Modern Syntax", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Express.js", description: "Backend Framework", icon: SiExpress, color: "text-gray-300" },
  { name: "HTML5", description: "Web Structure", icon: SiHtml5, color: "text-orange-500" },
];

const row2 = [
  { name: "CSS", description: "Web Styling", icon: SiCss, color: "text-blue-500" },
  { name: "Java", description: "Programming Language", icon: FaJava, color: "text-orange-400" },
  { name: "Python", description: "Programming Language", icon: SiPython, color: "text-blue-400" },
  { name: "MySQL", description: "Relational Database", icon: SiMysql, color: "text-blue-300" },
  { name: "Git", description: "Version Control", icon: SiGit, color: "text-orange-600" },
  { name: "REST APIs", description: "API Development", icon: Code2, color: "text-purple-400" },
];

const SkillCard = ({ skill }) => (
  <div className="w-[170px] sm:w-[210px] h-[150px] sm:h-[180px] flex flex-col items-center justify-center p-4 sm:p-5 mx-2 sm:mx-4 rounded-[20px] bg-gradient-to-b from-[#0a0f1c] to-[#030712] backdrop-blur-md border border-white/10 hover:border-cyan-500/40 transition-all shadow-lg hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] hover:-translate-y-2 group flex-shrink-0 cursor-default relative overflow-hidden">
    {/* Subtle inner top glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
    
    <div className={`w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] flex items-center justify-center rounded-2xl bg-[#050914] border border-white/5 shadow-inner group-hover:border-white/10 transition-colors mb-3 sm:mb-4 ${skill.color}`}>
      <skill.icon className="text-[24px] sm:text-[30px]" />
    </div>
    
    <h4 className="text-white font-bold text-[15px] sm:text-[17px] text-center mb-1.5 tracking-wide group-hover:text-cyan-400 transition-colors">
      {skill.name}
    </h4>
    
    <p className="text-gray-500 text-[11px] sm:text-[13px] text-center font-medium">
      {skill.description}
    </p>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-900/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-5">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-900/20 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
            What I Work With
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Skills & <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-[17px] leading-relaxed">
            The core tools and technologies I use to build robust, scalable, and visually engaging web applications.
          </p>
        </motion.div>
      </div>

      {/* Marquee Rows Container */}
      <div className="w-full relative flex flex-col gap-10 overflow-hidden z-10 py-4">
        
        {/* Row 1: Left to Right (translates -50% to 0) */}
        <div className="flex w-max animate-scroll-right-left pause-on-hover">
          {/* We duplicate the array 2 times to ensure seamless infinite scrolling with -50% transform */}
          {[...row1, ...row1, ...row1, ...row1].map((skill, index) => (
            <SkillCard key={`row1-${index}`} skill={skill} />
          ))}
        </div>

        {/* Row 2: Right to Left (translates 0 to -50%) */}
        <div className="flex w-max animate-scroll-left-right pause-on-hover">
          {[...row2, ...row2, ...row2, ...row2].map((skill, index) => (
            <SkillCard key={`row2-${index}`} skill={skill} />
          ))}
        </div>
        
        {/* Gradient fades on left and right edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#030712] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#030712] to-transparent z-20 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Skills;
