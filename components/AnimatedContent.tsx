'use client'; // This is CRITICAL

import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';

interface Project {
  title: string;
  desc: string;
  tech: string[];
  link: string;
  image: string;
}

interface AnimatedContentProps {
  projects: Project[];
  skills: string[];
}

export default function AnimatedContent({ projects, skills }: AnimatedContentProps) {
  return (
    <>
      {/* Hero Section with animations */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none">
              Hello, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Himanshu</span>
            </h1>
            <p className="text-2xl md:text-3xl text-zinc-400 max-w-2xl mx-auto">
              Crafting elegant digital experiences with code
            </p>
            <div className="flex items-center justify-center gap-4 pt-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#work"
                className="px-8 py-4 bg-white text-black rounded-2xl font-medium flex items-center gap-2 hover:bg-blue-400 hover:text-white transition-all"
              >
                View my work <FiExternalLink className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-4 border border-zinc-700 rounded-2xl font-medium hover:border-blue-400 transition-all"
              >
                Let's talk
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section with animations */}
      <section id="work" className="py-32 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold tracking-tighter mb-12 text-center">Selected Work</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden"
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full aspect-video object-cover transition-transform group-hover:scale-105 duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "https://picsum.photos/600/400";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end p-6">
                    <div className="flex gap-2 flex-wrap">
                      {project.tech.map((tech: string) => (
                        <span 
                          key={tech} 
                          className="text-xs px-3 py-1 bg-white/10 backdrop-blur rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-zinc-400 text-sm">{project.desc}</p>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 text-sm mt-6 hover:gap-3 transition-all"
                  >
                    View project <FiExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section with animations */}
      <section id="skills" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold tracking-tighter mb-12 text-center">Tools I love</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill: string, i: number) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
                className="px-6 py-3 bg-zinc-900 border border-zinc-700 hover:border-blue-400 rounded-2xl text-sm font-medium transition-all cursor-pointer"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with animations */}
      <section id="contact" className="py-32 border-t border-zinc-800">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold tracking-tighter mb-6">Let's create something beautiful together</h2>
          <p className="text-zinc-400 mb-12">I'm currently available for freelance projects and full-time opportunities.</p>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="mailto:your@email.com"
            className="inline-flex items-center gap-4 text-2xl font-medium bg-white text-black px-10 py-6 rounded-3xl hover:bg-blue-400 hover:text-white transition-all"
          >
            <MdEmail className="w-6 h-6" />
            Say hello 👋
          </motion.a>
          
          <div className="mt-16 text-xs text-zinc-500 flex justify-center gap-8">
            <p>Jalandhar, Punjab, India</p>
            <p>© 2026 Himanshu</p>
          </div>
        </div>
      </section>
    </>
  );
}
