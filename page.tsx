'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';
// or

// import { FaGithub, FaLinkedin, Mail, FiExternalLink, MdOutlineArrowDownward } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail, MdOutlineArrowDownward } from 'react-icons/md';
import { FiExternalLink } from 'react-icons/fi';
export default function Portfolio() {

  const [activeSection, setActiveSection] = useState('home');

  const projects = [
    {
      title: "Movie Discovery",
      desc: "A React TypeScript movie discovery app with search functionality, movie details view, and API integration for browsing films.",
      tech: ["React.js", "TypeScript", "Vite","CSS","npm"],
      link: "https://github.com/HIMANSHUgg75/agency-ai",
      image: "https://picsum.photos/id/1015/600/400"
    },
    {
      title: "Agency Ai",
      desc: "A React-based digital agency website showcasing services, portfolio, and team information with theme toggling functionality.",
      tech: ["React.js", "Vite","Bootstrap","JavaScript(JSX)"]
,
      link: "https://github.com/HIMANSHUgg75/agency-ai",
      image: "https://picsum.photos/id/201/600/400"
    },
    {
      title: "ChatApp-2",
      desc: "Full-stack chat app allowing multiple users to join rooms and exchange messages in real-time.",
      tech: ["Python", "Flask","Socket.IO","HTML","Virtual Environment"],
      link: "",
      // image: "https://picsum.photos/id/301/600/400"
      image: "/static/technology-integrated-everyday-life.avif"
    }
  ];

  const skills = ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion", "Node.js", "PostgreSQL", "Flask"];

  return (
    
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold tracking-tighter"
          >
            Himanshu<span className="text-blue-400">.</span>
          </motion.div>
          
          
<FaGithub className="w-5 h-5" />
<FaLinkedin className="w-5 h-5" />
<MdEmail className="w-6 h-6" />
<FiExternalLink className="w-4 h-4" />
<MdOutlineArrowDownward className="w-5 h-5" />

          <div className="flex gap-8 text-sm uppercase tracking-widest">
            {['About', 'Work', 'Skills', 'Contact'].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                onClick={() => setActiveSection(section.toLowerCase())}
                className={`hover:text-blue-400 transition-colors ${activeSection === section.toLowerCase() ? 'text-blue-400' : ''}`}
              >
                {section}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/HIMANSHUgg75" target="_blank" className="hover:text-blue-400 transition-colors">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/himanshuk1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" className="hover:text-blue-400 transition-colors">
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
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

        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-12 left-1/2 flex flex-col items-center gap-2 text-xs tracking-widest"
        >
          <MdOutlineArrowDownward className="w-5 h-5" />
          SCROLL
        </motion.div>

        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-5xl font-bold tracking-tighter mb-8">About me</h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Passionate full-stack developer from West Bengal with beautiful, performant web experiences. 
                I believe in clean code, thoughtful design, and turning complex problems into elegant solutions.
              </p>
              <div className="mt-12 flex gap-8">
                <div>
                  <div className="text-4xl font-bold text-blue-400">6+</div>
                  <div className="text-sm text-zinc-400">Projects Built</div>
                </div>
                {/* <div>
                  <div className="text-4xl font-bold text-blue-400">15k+</div>
                  <div className="text-sm text-zinc-400">Happy users</div>
                </div> */}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-700">
                {/* Replace with your photo */}
                <img src="app/static/images/Screenshot 2026-03-26 at 20.14.18.png" alt="Himanshu" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-zinc-900 border border-zinc-700 rounded-3xl p-6 shadow-2xl">
                <p className="text-sm font-medium">Currently open to exciting opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS / WORK */}
      <section id="work" className="py-32 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold tracking-tighter mb-12 text-center">Selected Work</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
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
                  <img src={project.image} alt={project.title} className="w-full aspect-video object-cover transition-transform group-hover:scale-105 duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all flex items-end p-6">
                    <div>
                      <div className="flex gap-2">
                        {project.tech.map(t => <span key={t} className="text-xs px-3 py-1 bg-white/10 backdrop-blur rounded-full">{t}</span>)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-zinc-400 text-sm line-clamp-2">{project.desc}</p>
                  <a href={project.link} className="inline-flex items-center gap-2 text-blue-400 text-sm mt-6 hover:gap-3 transition-all">
                    View project <FiExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold tracking-tighter mb-12 text-center">Tools I love</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
                className="px-6 py-3 bg-zinc-900 border border-zinc-700 hover:border-blue-400 rounded-2xl text-sm font-medium transition-all"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 border-t border-zinc-800">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold tracking-tighter mb-6">Let's create something beautiful together</h2>
          <p className="text-zinc-400 mb-12">I'm currently available for freelance projects and full-time opportunities.</p>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="mailto:your@MdEmail.com"
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
    </div>
  );
}



// instead of gitHub , Email  if it gives error then use below in jsx
// import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import { MdEmail, MdOutlineArrowDownward } from 'react-icons/md';
// import { FiExternalLink } from 'react-icons/fi';

// // Use in JSX:
// <FaGithub className="w-5 h-5" />
// <FaLinkedin className="w-5 h-5" />
// <MdEmail className="w-6 h-6" />
// <FiExternalLink className="w-4 h-4" />
// <MdOutlineArrowDownward className="w-5 h-5" /> 

