'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Sun, Moon } from 'lucide-react'

export const ThemeToggle = React.memo(function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme')
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDarkMode = savedTheme === 'dark' || (!savedTheme && systemPreference)

    setIsDark(isDarkMode)
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [])

  const toggleTheme = useCallback(() => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    document.documentElement.classList.toggle('dark', newIsDark)
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light')
  }, [isDark])

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-ios-button bg-ios-bg-tertiary dark:bg-ios-dark-bg-tertiary animate-pulse" />
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-ios-button bg-ios-bg-tertiary dark:bg-ios-dark-bg-tertiary flex items-center justify-center text-ios-text-primary dark:text-ios-dark-text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 transform active:scale-95"
      aria-label={isDark ? '切换到亮色模式' : '切换到暗色模式'}
    >
      {isDark ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  )
})
