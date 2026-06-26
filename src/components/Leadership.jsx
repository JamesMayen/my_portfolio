import React from 'react'
import { motion } from 'framer-motion'

const impacts = [
  {title:'ITU Generation Connect', stat:'Youth Envoy', desc:'Digital advocacy and program leadership.'},
  {title:'ITU Global Youth Summit', stat:'Participant', desc:'Represented youth in digital transformation discussions.'},
  {title:'Regional Youth Consultation', stat:'Facilitator', desc:'Led regional sessions on youth digital participation.'},
  {title:'Digital Inclusion Advocacy', stat:'Lead', desc:'Advocated for inclusive digital policies and access.'}
]

export default function Leadership(){
  return (
    <section id="leadership" className="py-16">
      <div className="container-locked">
        <motion.h2 className="text-2xl font-semibold text-center text-sky-400" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}>Leadership & Community Impact</motion.h2>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {impacts.map((it,i)=> (
            <motion.div key={i} className="p-4 glass-card rounded-lg" whileHover={{y:-6}}>
              <div className="text-lg font-semibold text-white">{it.title}</div>
              <div className="text-sm text-white mt-2">{it.stat}</div>
              <div className="text-sm text-slate-300 mt-2">{it.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
