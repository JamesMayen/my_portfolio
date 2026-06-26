import React from 'react'
import { motion } from 'framer-motion'

const timeline = [
  {date:'2024', org:'SafetyComm South Sudan', role:'Cybersecurity Intern', desc:'Hands-on cybersecurity work, mentorship and community safety programs.'},
  {date:'2023', org:'Eden Technology', role:'Software & Support', desc:'Technical support and contributions to local tech initiatives.'},
  {date:'2023', org:'Etix South Sudan', role:'Sales & Cybersecurity', desc:'Event ticketing operations and user-data protection.'},
  {date:'2022', org:'ITU Generation Connect', role:'Youth Envoy', desc:'Digital advocacy and youth empowerment programs.'},
  {date:'2022', org:'GDSC Core Team', role:'Member', desc:'Developer community leadership and events.'},
  {date:'2021', org:'M-Gurush', role:'Brand Ambassador', desc:'Brand outreach and community engagement.'}
]

export default function Experience(){
  return (
    <section id="experience" className="py-16">
      <div className="container-locked">
        <motion.h2 className="text-2xl font-semibold text-center text-sky-400" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}>Experience</motion.h2>

        <div className="mt-8 space-y-4">
          {timeline.map((t,i)=> (
            <motion.div key={i} className="glass-card p-4 rounded-lg" initial={{opacity:0,y:6}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm text-sky-300">{t.date}</div>
                  <div className="text-lg font-semibold text-white">{t.role} — {t.org}</div>
                  <div className="text-sm text-slate-300 mt-2">{t.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
