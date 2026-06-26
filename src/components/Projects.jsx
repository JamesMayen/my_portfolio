import React from 'react'
import { projects } from '../data/projects'
import { motion } from 'framer-motion'

export default function Projects(){
  return (
    <section id="projects" className="py-16">
      <div className="container-locked">
        <motion.h2 className="text-2xl font-semibold text-center text-sky-600" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}>Tech Projects & Innovations</motion.h2>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {projects.map((p, idx)=> (
            <motion.div key={idx} className="rounded-xl overflow-hidden shadow-lg glass-card" whileHover={{y:-6}} transition={{type:'spring'}}>
              <div className="h-40 w-full bg-slate-900 flex items-center justify-center overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover"/>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-white">{p.title}</h3>
                <p className="text-sm text-slate-300 mt-2">{p.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-xs text-slate-400">{p.tech.join(' • ')}</div>
                  <div className="flex gap-2">
                    <a href={p.github} className="text-sky-400 text-sm">Code</a>
                    <a href={p.demo} className="text-sky-400 text-sm">Live</a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
