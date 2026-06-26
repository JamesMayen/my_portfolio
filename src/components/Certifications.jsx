import React from 'react'
import { motion } from 'framer-motion'

const certs = [
  {title:'SafetyComm Mentorship', org:'SafetyComm', desc:'Mentorship and cybersecurity training.'},
  {title:'Cybersecurity Training', org:'Local & Regional Programs', desc:'Practical security workshops and labs.'},
  {title:'ITU Participation', org:'ITU Generation Connect', desc:'Youth digital transformation initiatives.'}
]

export default function Certifications(){
  return (
    <section id="certifications" className="py-16">
      <div className="container-locked">
        <motion.h2 className="text-2xl font-semibold text-center text-sky-400" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}>Certifications & Achievements</motion.h2>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {certs.map((c,i)=> (
            <motion.div key={i} className="p-4 glass-card rounded-lg" initial={{opacity:0,y:6}} whileHover={{y:-6}}>
              <div className="font-semibold text-white">{c.title}</div>
              <div className="text-sm text-slate-300 mt-2">{c.org}</div>
              <div className="text-sm text-slate-400 mt-2">{c.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
