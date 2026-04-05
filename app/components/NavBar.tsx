// (Client Component with useState) heart 

 
'use client';  // ← ADD THIS AS THE VERY FIRST LINE!

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineArrowDownward } from 'react-icons/md';
import { FiExternalLink } from 'react-icons/fi';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' }
];

export default function NavBar() {
  const [activeSection, setActiveSection] = useState<string>('home');

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold tracking-tighter"
          >
            Himanshu<span className="text-blue-400">.</span>
          </motion.div>
          
          <div className="flex gap-8 text-sm uppercase tracking-widest">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveSection(item.name.toLowerCase())}
                className={`hover:text-blue-400 transition-colors ${
                  activeSection === item.name.toLowerCase() ? 'text-blue-400' : ''
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            <a 
              href="https://github.com/HIMANSHUgg75" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 flex flex-col items-center gap-2 text-xs tracking-widest"
      >
        <MdOutlineArrowDownward className="w-5 h-5" />
        SCROLL
      </motion.div>
    </>
  );
}


// Import trace:
//   Server Component:
//     ./components/NavBar.tsx    ← Next.js thinks this is a Server Component
//     ./app/page.tsx

// Even though NavBar.tsx uses useState and onClick, without 'use client', Next.js tries to render it on the server, which fails.

