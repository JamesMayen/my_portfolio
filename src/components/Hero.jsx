import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaWhatsapp, FaFacebook, FaGithub, FaEnvelope } from 'react-icons/fa'

function Badge({children}){return <span className="px-3 py-1 bg-white/6 text-sm rounded-full">{children}</span>}

export default function Hero(){
  return (
    <section id="home" className="py-16">
      <div className="container-locked">
        <motion.div className="glass-card rounded-2xl p-6 md:p-10 grid md:grid-cols-2 gap-6 items-center" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">James Mayen</h1>
            <p className="mt-2 text-slate-200">Tech Innovator • Cybersecurity & AI Enthusiast • Youth Digital Transformation Advocate</p>

            <p className="mt-4 text-slate-300">I build technology solutions that empower communities, strengthen digital resilience, and enable youth-led innovation across South Sudan and the region.</p>

            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>Cybersecurity</Badge>
              <Badge>Penetration Testing</Badge>
              <Badge>Web • React</Badge>
              <Badge>AI & Innovation</Badge>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="px-4 py-2 bg-gradient-to-r from-sky-500 to-teal-400 text-black font-medium rounded-lg">Let's Connect</a>
              <a href="/assets/My Cv/James Mayen - Cv.pdf" className="px-4 py-2 border border-white/10 text-white rounded-lg">Download CV</a>
              <a href="#projects" className="px-4 py-2 text-white/90 ring-1 ring-white/6 rounded-lg">View Projects</a>
            </div>

            <div className="mt-5 flex items-center gap-3 text-slate-200">
              <a href="https://linkedin.com/in/jamesmayen" aria-label="LinkedIn"><FaLinkedin size={20}/></a>
              <a href="https://github.com" aria-label="GitHub"><FaGithub size={20}/></a>
              <a href="https://facebook.com" aria-label="Facebook"><FaFacebook size={20}/></a>
              <a href="https://wa.me/" aria-label="WhatsApp"><FaWhatsapp size={20}/></a>
              <a href="mailto:mayenjames15@gmail.com" aria-label="Email"><FaEnvelope size={20}/></a>
            </div>
          </div>

          <motion.div className="flex justify-center md:justify-end" initial={{scale:0.96}} whileHover={{scale:1.02}} transition={{type:'spring'}}>
            <div className="p-1 rounded-full gradient-ring">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                <img src="../../Img/Jz.jpg" alt="James" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
