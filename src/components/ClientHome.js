'use client'
import { useState, useEffect } from 'react'
import Homee from '../app/(default)/home/page'
import Loader from "@/components/loader/page"

export default function ClientHome({ initialHasVisited }) {
  const [loading, setLoading] = useState(!initialHasVisited)

  useEffect(() => {
    if (!initialHasVisited) {
      // Set a cookie to remember the visit
      document.cookie = "hasVisited=true; path=/; max-age=1800" // expires in 1 year

      // Set a timer to hide the loader after 4.2 seconds
      const timer = setTimeout(() => {
        setLoading(false)
      }, 4200)

      return () => clearTimeout(timer)
    }
  }, [initialHasVisited])

  if (loading) {
    return <Loader />
  }

  return <Homee />
}

