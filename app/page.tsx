"use client"

import { useState, useEffect } from "react"
import LandingPageComponent from "@/components/landing-page"

export default function Page() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const checkPageReady = () => {
      if (document.readyState === "complete" || document.readyState === "interactive") {
        setIsLoading(false)
        setShowContent(true)
        return true
      }
      return false
    }

    if (checkPageReady()) {
      return
    }

    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
      setShowContent(true)
    }, 200)

    const quickLoadTimer = setInterval(() => {
      if (checkPageReady()) {
        clearTimeout(loadingTimer)
        clearInterval(quickLoadTimer)
      }
    }, 25)

    const handleLoad = () => {
      setIsLoading(false)
      setShowContent(true)
      clearTimeout(loadingTimer)
      clearInterval(quickLoadTimer)
    }

    window.addEventListener("load", handleLoad)

    return () => {
      clearTimeout(loadingTimer)
      clearInterval(quickLoadTimer)
      window.removeEventListener("load", handleLoad)
    }
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-12 h-12 border-3 border-yellow-200 border-t-yellow-500 rounded-full animate-spin mx-auto mb-3"></div>
          </div>
          <p className="text-yellow-600 font-medium text-sm">Yuklanmoqda...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`transition-opacity duration-300 ${showContent ? "opacity-100" : "opacity-0"}`}>
      <LandingPageComponent />
    </div>
  )
}
