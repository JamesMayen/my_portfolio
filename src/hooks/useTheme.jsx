import { useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'

const getInitialTheme = ()=>{
  if(typeof window === 'undefined') return 'light'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if(stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const applyTheme = (theme) => {
  if(typeof document === 'undefined') return
  const root = document.documentElement
  root.classList.remove('light','dark')
  root.classList.add(theme)
  root.style.colorScheme = theme
  window.localStorage.setItem(STORAGE_KEY, theme)
}

export default function useTheme(){
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(()=>{
    applyTheme(theme)
  },[theme])

  useEffect(()=>{
    if(typeof window === 'undefined') return undefined
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if(!stored) {
        setTheme(mediaQuery.matches ? 'dark' : 'light')
      }
    }

    mediaQuery.addEventListener?.('change', handleChange)
    return () => mediaQuery.removeEventListener?.('change', handleChange)
  },[])

  const toggle = ()=> setTheme(t => t === 'dark' ? 'light' : 'dark')

  return {theme, setTheme, toggle}
}
