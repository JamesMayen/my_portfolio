import { useEffect, useState } from 'react'

const getInitialTheme = ()=>{
  if(typeof window === 'undefined') return 'light'
  const stored = localStorage.getItem('theme')
  if(stored) return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function useTheme(){
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(()=>{
    localStorage.setItem('theme', theme)
  },[theme])

  const toggle = ()=> setTheme(t => t === 'dark' ? 'light' : 'dark')

  return {theme, setTheme, toggle}
}
