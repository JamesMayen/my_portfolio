import React from 'react'
import { motion } from 'framer-motion'
import { FaShieldAlt, FaNetworkWired, FaReact, FaDatabase, FaLaptopCode, FaBrain, FaProjectDiagram, FaMicrophone, FaUsers, FaBug } from 'react-icons/fa'

const skills = [
  {title:'Cybersecurity', icon:FaShieldAlt, desc:'Threat analysis, vulnerability research and defense strategies.', exp:'Internship & hands-on labs'},
  {title:'Penetration Testing', icon:FaBug, desc:'Web and network pentesting practices and tools.', exp:'Junior pentester experience'},
  {title:'Incident Handling', icon:FaNetworkWired, desc:'Response workflows and incident coordination.', exp:'Operational readiness'},
  {title:'Networking', icon:FaNetworkWired, desc:'Fundamentals of network architecture and routing.', exp:'Practical deployments'},
  {title:'Web Development', icon:FaLaptopCode, desc:'Full-stack web apps using modern JS frameworks.', exp:'Multiple projects'},
  {title:'React Development', icon:FaReact, desc:'Component-driven UIs and SPA architecture.', exp:'React projects in portfolio'},
  {title:'PHP Development', icon:FaLaptopCode, desc:'Backend services and integrations.', exp:'Server-side experience'},
  {title:'Database Management', icon:FaDatabase, desc:'Design and maintain relational databases.', exp:'Data-driven apps'},
  {title:'AI & Innovation', icon:FaBrain, desc:'AI-driven features and prototyping.', exp:'AI integrations'},
  {title:'Project Management', icon:FaProjectDiagram, desc:'Delivering projects and coordinating teams.', exp:'Leadership roles'},
  {title:'Public Speaking', icon:FaMicrophone, desc:'Talks, workshops and community events.', exp:'Speaking engagements'},
  {title:'Leadership', icon:FaUsers, desc:'Community leadership and mentoring.', exp:'Youth advocate'}
]

export default function About(){
  return (
    <section id="about" className="py-16">
      <div className="container-locked">
        <motion.h2 className="text-2xl font-semibold text-center text-sky-400" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}>About & Skills</motion.h2>

        <motion.div className="mt-8 grid md:grid-cols-3 gap-8" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}}>
          <div className="md:col-span-1 glass-card p-6 rounded-lg">
            <h3 className="text-xl font-medium text-white">About Me</h3>
            <p className="mt-3 text-slate-200">I'm a tech enthusiast, junior penetration tester, and social innovator from South Sudan, driven by the goal of using technology to empower communities and transform lives. My work spans cybersecurity, web development, AI prototyping, and youth-led digital advocacy.</p>

            <h4 className="mt-4 font-medium text-slate-300">Education</h4>
            <ul className="mt-2 text-sm text-slate-300 space-y-1">
              <li><strong>Final-year Diploma Student, IT</strong> (2021-2025) — University of Juba</li>
              <li><strong>South Sudan Certificate of Secondary Education</strong> (2016-2019) — Panekar Secondary School</li>
            </ul>

            <h4 className="mt-4 font-medium text-slate-300">Values</h4>
            <div className="mt-2 flex flex-wrap gap-2 text-sm">
              <span className="px-2 py-1 bg-white/5 rounded">Innovation</span>
              <span className="px-2 py-1 bg-white/5 rounded">Empowerment</span>
              <span className="px-2 py-1 bg-white/5 rounded">Security</span>
              <span className="px-2 py-1 bg-white/5 rounded">Community</span>
            </div>
          </div>

          <div className="md:col-span-2 grid md:grid-cols-3 gap-4">
            {skills.map((s, i)=>{
              const Icon = s.icon
              return (
                <motion.div key={i} className="p-4 glass-card rounded-lg hover:scale-[1.02] transition-transform" whileHover={{y:-6}}>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white/6 rounded-md"><Icon className="text-sky-400"/></div>
                    <div>
                      <div className="font-semibold text-white">{s.title}</div>
                      <div className="text-sm text-slate-300">{s.desc}</div>
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-slate-400">{s.exp}</div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
