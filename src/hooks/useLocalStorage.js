'use client'

import { useState, useEffect } from 'react'

export function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : defaultValue
      } catch (error) {
        console.warn(`Error reading localStorage key "${key}":`, error)
        return defaultValue
      }
    }
    return defaultValue
  })

  const setStoredValue = (value) => {
    try {
      setValue(value)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value))
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error)
    }
  }

  return [value, setStoredValue]
}