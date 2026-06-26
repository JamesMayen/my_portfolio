import React from 'react'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { FaLinkedin, FaGithub, FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import useTheme from '../hooks/useTheme'
import { motion } from 'framer-motion'

export default function Navbar(){
  const { theme, toggle } = useTheme()
  const [open, setOpen] = React.useState(false)

  return (
    <nav className="w-full bg-white/40 backdrop-blur sticky top-0 z-50 dark:bg-[#07101a]/40 border-b">
      <div className="container-locked flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-extrabold text-[#0ea5b8]">James Mayen</div>
          <div className="text-sm text-slate-600 dark:text-slate-300">Tech Innovator & Cybersecurity Advocate</div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#certifications" className="hover:underline">Certifications</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <div className="flex items-center gap-2">
            <a href="https://linkedin.com/in/jamesmayen" aria-label="LinkedIn" className="text-slate-600 dark:text-slate-200"><FaLinkedin/></a>
            <a href="https://github.com" aria-label="GitHub" className="text-slate-600 dark:text-slate-200"><FaGithub/></a>
          </div>
          <button onClick={toggle} aria-label="Toggle theme" className="p-2 rounded-md">
            {theme === 'dark' ? <FiSun/> : <FiMoon/>}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggle} aria-label="Toggle theme" className="p-2 rounded-md">
            {theme === 'dark' ? <FiSun/> : <FiMoon/>}
          </button>
          <button onClick={()=>setOpen(o=>!o)} aria-label="Open menu" className="p-2">
            {open ? <FiX/> : <FiMenu/>}
          </button>
        </div>
      </div>

      {open && (
        <motion.div initial={{height:0}} animate={{height:'auto'}} className="md:hidden bg-white dark:bg-slate-800 border-t">
          <div className="flex flex-col p-4 gap-3">
            <a href="#home" onClick={()=>setOpen(false)}>Home</a>
            <a href="#about" onClick={()=>setOpen(false)}>About</a>
            <a href="#experience" onClick={()=>setOpen(false)}>Experience</a>
            <a href="#projects" onClick={()=>setOpen(false)}>Projects</a>
            <a href="#contact" onClick={()=>setOpen(false)}>Contact</a>
            <div className="flex gap-3 mt-2">
              <a href="mailto:mayenjames15@gmail.com" className="p-2"><FaEnvelope/></a>
              <a href="https://linkedin.com/in/jamesmayen" className="p-2"><FaLinkedin/></a>
              <a href="https://github.com" className="p-2"><FaGithub/></a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
