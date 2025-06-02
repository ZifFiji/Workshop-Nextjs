"use client";
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Moon, Sun } from "lucide-react"
import { Button } from './button';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <Button variant="outline"><Sun /></Button>

  return (
    <Button variant="outline" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? 
        <Sun/>
      : <Moon/>}
    </Button>
  )
}
