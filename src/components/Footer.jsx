import React from 'react'
import { FaLinkedin, FaGithub, FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

export default function Footer(){
  return (
    <footer className="mt-12">
      <div className="container-locked py-10 border-t border-white/6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xl font-bold text-white">James Mayen</div>
            <div className="text-sm text-slate-400">Building technology solutions that create impact.</div>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a href="https://linkedin.com/in/jamesmayen"><FaLinkedin/></a>
            <a href="https://github.com"><FaGithub/></a>
            <a href="https://facebook.com"><FaFacebook/></a>
            <a href="mailto:mayenjames15@gmail.com"><FaEnvelope/></a>
          </div>
        </div>

        <div className="mt-6 text-sm text-slate-500 text-center">© 2025 James Mayen. All rights reserved.</div>
      </div>
    </footer>
  )
}
