import React from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaLinkedin, FaWhatsapp, FaFacebook } from 'react-icons/fa'

export default function Contact(){
  const handleSubmit = (e)=>{
    e.preventDefault()
    const form = new FormData(e.target)
    const payload = Object.fromEntries(form)
    // Prepared for EmailJS or other provider integration
    console.log('contact form submit', payload)
    alert(`Thank you, ${payload.name}! Your message has been recorded.`)
    e.target.reset()
  }

  return (
    <section id="contact" className="py-16">
      <div className="container-locked grid md:grid-cols-2 gap-8">
        <div className="glass-card p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-white">Contact Information</h3>
          <p className="mt-3 text-slate-300">Feel free to reach out for collaborations, consulting, or speaking opportunities.</p>
          <div className="mt-4 space-y-2 text-slate-200 text-sm">
            <div className="flex items-center gap-3"><FaMapMarkerAlt/> Juba, South Sudan</div>
            <div className="flex items-center gap-3"><FaEnvelope/> mayenjames15@gmail.com</div>
            <div className="flex items-center gap-3"><FaLinkedin/> linkedin.com/in/jamesmayen</div>
            <div className="flex items-center gap-3"><FaWhatsapp/> +[WhatsApp]</div>
            <div className="flex items-center gap-3"><FaFacebook/> facebook.com/jamesmayen</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-white">Send a message</h3>
          <div className="mt-4 grid grid-cols-1 gap-3">
            <input name="name" aria-label="Full name" required placeholder="Full Name" className="p-3 bg-transparent border border-white/10 rounded" />
            <input name="email" type="email" aria-label="Email" required placeholder="Email" className="p-3 bg-transparent border border-white/10 rounded" />
            <input name="subject" aria-label="Subject" required placeholder="Subject" className="p-3 bg-transparent border border-white/10 rounded" />
            <textarea name="message" aria-label="Message" rows="5" required placeholder="Message" className="p-3 bg-transparent border border-white/10 rounded" />
            <button type="submit" className="px-6 py-2 bg-gradient-to-r from-sky-500 to-teal-400 rounded text-black font-medium">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}
