"use client"

import { useState, useEffect } from "react"
import LandingPageComponent from "@/components/landing-page"

export default function Page() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
      setShowContent(true)
    }, 800)

    const quickLoadTimer = setTimeout(() => {
      if (document.readyState === "complete") {
        setIsLoading(false)
        setShowContent(true)
        clearTimeout(loadingTimer)
      }
    }, 100)

    return () => {
      clearTimeout(loadingTimer)
      clearTimeout(quickLoadTimer)
    }
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-yellow-100 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-yellow-200 border-t-yellow-500 rounded-full animate-spin mx-auto mb-4"></div>
            <div
              className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-yellow-300 rounded-full animate-spin mx-auto"
              style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
            ></div>
          </div>
          <p className="text-yellow-600 font-medium animate-pulse">Yuklanmoqda...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`transition-opacity duration-500 ${showContent ? "opacity-100" : "opacity-0"}`}>
      <LandingPageComponent />
    </div>
  )
}
